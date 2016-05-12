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

//Ex. 2 Find number bigger than 5

do {
//entryToLoop++;
//console.log(entryToLoop); // Do something with number of entries to loop, next point.
  var randNumber = Math.floor((Math.random() * 10) + 1);
  console.log("Number is not bigger than 5");

  } while (randNumber > 5);
var entryToLoop = 0;
