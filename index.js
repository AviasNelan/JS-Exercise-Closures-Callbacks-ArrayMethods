// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 uses a secondary return function to increment the count as defined in the primary fuction 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure, because the variable count is declared outside the function scope
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  
 * Counter1 would be better if you did not want any other function to augment the count. In counter2, any other function or let re-assignment can change its value. So if you wanted a
 * variable to be able to be manipulated by multiple functions, you could declare in global scope.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  
  let points = Math.floor(Math.random() * (3- 0)) + 0;
  return(points);
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings) {
  let homeScore =0;
  let awayScore =0;
  for (i =0; i < numberOfInnings; i++) {
    homeScore += inning();
  }
  for (i =0; i < numberOfInnings; i++) {
    awayScore += inning();
  }  
  let endScore = { Home: homeScore,
                   Away: awayScore,
                 }
  return(endScore);
} 

console.log(finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore() {
  let homeScore = 0;
  let awayScore = 0;
  homeScore += inning();
  awayScore += inning();
  let inningScore = {Away: awayScore, Home: homeScore};
  console.log(inningScore);
  return inningScore;
}
// getInningScore();
function scoreboard(getInningScore, inning, numberOfInnings) {
  for (i = 1; i < numberOfInnings; i++){ 
  console.log(`The score of inning ${i} is ${getInningScore().Away} - ${getInningScore().Home}.`)
  return(`The score of inning ${i} is ${getInningScore().Away} - ${getInningScore().Home}.`)
    

 }
}
   

scoreboard(getInningScore, inning, 9);


