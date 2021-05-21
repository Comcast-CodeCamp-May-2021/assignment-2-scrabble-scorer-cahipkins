// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
// let letterPoints = "";

function oldScrabbleScorer(word) { 
	
  word = word.toUpperCase();
  let letterPoints = "";
  for (let i = 0; i < word.length; i++) {
   
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Score for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;

 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.clear();
  let word = input.question("Let's play some scrabble! Enter a word to score: ");

  return word;

};


function simpleScore(word) {
 word = word.toUpperCase();
  let letterPoints = "";

   
  for (let i = 0; i < word.length; i++) {
  
letterPoints += `Score for '${word[i]}': ${letterPoints}\n`
  
     }
    
    return letterPoints;
  
}


function vowelBonusScore(word) {
word = word.toUpperCase();
let letterPoints = "";
let sum = 0;

for (let i =0; i < word.length; i++) {
  if(word[i].includes("A")){
    letterPoints = 3
  }else if (word[i].includes("E")){
    letterPoints = 3
  }else if (word[i].includes("I")){
    letterPoints = 3
  }else if (word[i].includes("O")){
    letterPoints = 3
  }else if (word[i].includes("U")){
    letterPoints = 3;
    }else{ 
      letterPoints = 1;
    }
  
   sum += Number(letterPoints); 
}
console.log(`The Score for '${word}': ${sum}`);
}

let newPointStructure = transform(oldPointStructure);


function scrabbleScore(word){   

word = word.toUpperCase();

let sum = word; 

let score = 0;

for(i=0; i < sum.length; i++) {
  
  score += Number(newPointStructure[sum[i]]);
 
}
console.log(`The score for '${word}': ${score}`);


}


let simpleScoreObj = { 
  name: "Simple Score",
  description: "Each letter worth 1 point",
  scorerFunction: simpleScore
};

let vowelBonusScoreObj = { 
  name: "Bonus Vowels",
  description: "Vowels are 3 points, consonants are 1 pt.",
  scorerFunction: vowelBonusScore
};

let scrabbleObj = {
  name: "Scrabble",
  description: "The traditional scoring algorithm",
  scorerFunction: scrabbleScore
 };

let scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleObj];


function scorerPrompt(val) {
 
word = initialPrompt();

let userInput = input.question("Which scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2- Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ");

if (userInput.includes(0)) {
 console.log(`Score for '${word}': ${word.length}`);
} else if (userInput.includes(1)) {
 vowelBonusScore(word);
}else{ 
  (userInput.includes(2))
console.log(scrabbleScore(word));
}

}



function transform(oldPointStructure) {
  let structurelist = {};


for(let name in oldPointStructure) {
  let letterValues = oldPointStructure[name];
 
   for (i = 0; i < letterValues.length; i++){
   structurelist[letterValues[i]] = name;
   
   }
}
return structurelist;

}





function runProgram() {
  scorerPrompt();
  
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

