// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];



function theBeatlesPlay( musicians, instruments){

 let emp = [ ];
  for (let i = 0; i < musicians.length; i++){
    emp.push(musicians[i] + ` plays ` + instruments[i]);
  
}
return emp;
}

const facts = [
 "While on tour, he enjoyed playing Monopoly",
 "Harmonica was the first instrument Lennon learned to play",
 "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(argument){
  let array = []
  let i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}


function iLoveTheBeatles(number){
  let array = [ ];
  do { 
  array.push("I love the Beatles!")
  number++;
  }  while (number < 15);
   return array; 
}



