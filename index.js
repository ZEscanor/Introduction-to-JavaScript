/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
 var votingAge = 19;
 if(votingAge > 18){
     console.log(true);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
 var condOne = 8;
 var condTwo= "yup";

 if(condTwo === "yup"){
     condOne = 9;
 }
 else{
     condOne = 7;
 }
 console.log(condOne);
 



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let numero = "1999";
let numeroDos = Number(numero);
console.log(numero + " is a string")
console.log(numeroDos)





//Task d: Write a function to multiply a*b 
function multipl(a,b){
    return a*b
}

console.log(multipl(5,4))


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function doggy(a){
 return a*7;
}
let myAge = 22;
console.log(doggy(myAge))



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  function feedIt(weight,age){
      if(age>=1){
        if(weight<= 5){
             return 5/100 *weight
        }
        else if(weight>5 && weight<=10){
             return 4/100 *weight
        }
        else if(weight>11 && weight<=15){
            return 3/100 *weight
        }
        else{
            return 2/100 *weight
        }
      }
      else{
          if(age>=1/6 && age<= 1/3){
            return 10/100 *weight
          }
          else if(age> 1/3 && age<=7/12){
            return 5/100 *weight
            }
          else if(age>7/12 && age<=1){
            return 4/100 *weight
          }
          else{
            return "something went wrong"
          }
        }
  }

   console.log(feedIt(15,1))
   console.log(feedIt(15,.5))


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rockPaperScissors(choice){
 let compChoice = Math.floor(Math.random()*3)
 var compActual;
 
 if(compChoice === 0){
   compActual = "rock"
 }
 else if(compChoice === 1){
   compActual = "paper"
 }
 else{
   compActual = "scissors"
 }
 console.log("computer chose " + compActual)
 console.log("you chose " + choice)
 if(choice === "rock" && compActual === "paper"){
   console.log("You lost")
 }
 else if(choice === "rock" && compActual === "scissors"){
  console.log("You won")
}
else if(choice === "rock" && compActual === "rock"){
  console.log("draw")
}
else if(choice === "paper" && compActual === "scissors"){
  console.log("You lost")
}
else if(choice === "paper" && compActual === "rock"){
  console.log("You won")
}
else if(choice === "paper" && compActual === "paper"){
  console.log("Draw")
}
else if(choice === "scissors" && compActual === "scissors"){
  console.log("Draw")
}
else if(choice === "scissors" && compActual === "rock"){
  console.log("You lost")
}
else if(choice === "scissors" && compActual === "paper"){
  console.log("You Won")
}
}
console.log(rockPaperScissors("rock"))
console.log(rockPaperScissors("paper"))
console.log(rockPaperScissors("scissors"))
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(distance){
  return distance * 0.621371
}



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function ftToCm(distance){
    return distance * 30.48
  }




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  function annoyingSong(numbaOne){
    let numba = numbaOne;
    for(let numba = numbaOne; numba>0; numba--){
      console.log(numba + " bottles of soda on the wall " + numba + " bottles of soda " + " take one pass it around " + (numba-1) + " bottles of soda on the wall ")
    }
    return
  }

//annoyingSong(99); Dont use this unless you want to be annoyed
annoyingSong(10);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  function grade(numeroO){
    if(numeroO>= 90){
        return "You gotta A"
    }
    else if(numeroO>=80){
       return "You gotta B"
    }
    else if(numeroO>= 70){
      return "YOu gotta C"
    }
    else if(numeroO>= 60){
      return "You gotta D"
    }
    else{
     return "UMMM TRY HARDER :)"
    }
  }
  console.log(grade(90));
  console.log(grade(80));
  console.log(grade(70));
  console.log(grade(60));
  console.log(grade(50));
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
var gitItIn = prompt("Rock, Paper or Scissors?")
console.log(rockPaperScissors(gitItIn));

