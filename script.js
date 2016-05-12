//Ex. 1. Print on screen integrer from 0 to 10.

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
//Ex. 1b Random integrer  from 0 do 10. If integrer is 7, print it.


var i = Math.floor((Math.random() * 10) + 1);
  if (i === 7) {
    console.log("You won it is seven " + i);
  } else {
    console.log("You did not win");
  }

  //Another example
  var x = 0;
  while(x !== 3){
    x = Math.floor((Math.random() * 5) + 1);
    console.log(x);
  }
