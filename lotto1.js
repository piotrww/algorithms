console.log("workjjis!!!");
//Another solution
    //Lets print all possible numbers
    var allPossibleNumbers = [];
        for(var i = 1; i <= 7; i++) {
             allPossibleNumbers.push(i);
        }
    console.log(allPossibleNumbers);
    var oneLuckyNumber;
    var sixLuckyNumbers = [];
    var functionCall = 0;
    
    // One my lucky number
    for (var i = 0; i<6; i++) {
	//    give1of49();
           function give1of49() {       
               oneLuckyNumber = allPossibleNumbers[Math.floor(Math.random()*allPossibleNumbers.length)];
               console.log(oneLuckyNumber + "<---drawed number");
               if (sixLuckyNumbers.indexOf(oneLuckyNumber) === -1) {
                    sixLuckyNumbers.push(oneLuckyNumber);
               } else {
        	     give1of49();
        	     

        	     functionCall++;
        	     
        	     console.log(functionCall + "<-- called function"); 
        	     console.log(sixLuckyNumbers);
                      }
               }
    }


    console.log(sixLuckyNumbers);
