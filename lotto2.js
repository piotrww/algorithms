
console.log("works l2");
//Another solution
    //Lets print all possible numbers
    var allPossibleNumbers = [];
        for(var i = 1; i <= 9; i++) {
             allPossibleNumbers.push(i);
        }
    console.log(allPossibleNumbers);

    // My lucky number
    
    var sixLuckyNumbers = [];
    for (var j = 1; j <= 6; j++) {
        var oneLuckyNumber = allPossibleNumbers[Math.floor(Math.random()*allPossibleNumbers.length)]; //Draw a number	        
        var oneLuckyNumberIndex = allPossibleNumbers.indexOf(oneLuckyNumber); //Find a index in big array
        allPossibleNumbers.splice(oneLuckyNumberIndex, 1); //Delete content of this index in big array
        sixLuckyNumbers.push(oneLuckyNumber); //Pushing a number to a array with lucky numbers.
        console.log(oneLuckyNumber + "-<number lucky. " + allPossibleNumbers + " Deleting a drawing number, time: " + j)
               
    }
    console.log(sixLuckyNumbers);
    console.log(allPossibleNumbers);