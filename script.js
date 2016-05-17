// //Ex. 1. Print on screen integrer from 0 to 10.

// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// //Ex. 1b Random integrer  from 0 do 10. If integrer is 7, print it.


// var i = Math.floor((Math.random() * 10) + 1);
//   if (i === 7) {
//     console.log("You won it is seven " + i);
//   } else {
//     console.log("You did not win");
//   }

// //Ex. 2 Find number bigger than 5

// var entryToLoop = 1;

// do {
//     var howManyEntries = entryToLoop++;
//     var randNumber = Math.floor((Math.random() * 10) + 1);

//         if (randNumber < 5) {
//             console.log("Number is not bigger than 5. This number is " + randNumber);
//         }
//   } while (randNumber < 5);

// console.log("Number is found after " + howManyEntries +" times. " +"This number is " + randNumber);

// // Ex. 3. Lotto
//     //First step, but do not work properly. Numbers can be replied.
// function give6of49() {
//     var sixLuckyNumbers = [];
//     for(var i = 1; i <= 6; i++) {
//       var oneNumb = Math.floor((Math.random() * 100) + 1);
// console.log(oneNumb)
//     }
//   ;
// } give6of49();

console.log("works");
//Another solution
    //Lets print all possible numbers
    var allPossibleNumbers = [];
        for(var i = 1; i <= 7; i++) {
             allPossibleNumbers.push(i);
        }
    console.log(allPossibleNumbers);

    // My lucky number
    
    
    function give1of49() {       
    var oneLuckyNumber = allPossibleNumbers[Math.floor(Math.random()*allPossibleNumbers.length)];
    return oneLuckyNumber;
    }
    

    var sixLuckyNumbers = [];
    for (var j = 1; j <= 6; j++) {
        var oneLuckyNumber = give1of49();  
        	        
        if (sixLuckyNumbers.indexOf(oneLuckyNumber) === -1) {
               	sixLuckyNumbers.push(oneLuckyNumber);
        } else {
        	give1of49();
        }

        
    }
    console.log(sixLuckyNumbers);