'use strict';

let loaf = {
  flour:300,
  water:210,
  hydration(){
    return this.water/this.flour*100;
  }

};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

const ourObj = {
  foo : 'oof',
  bar : 'rab',
  fum : 'muf',
  quux: 'xuuq',
  spam: 'maps'
};

for(let property in ourObj){
  console.log(`${property} : ${ourObj[property]}`);
}

let hobbitsMeals ={
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitsMeals.meals[3]);

const user1 = {name : 'superman', jobTitle : 'hero', boss: 'batman'};
const user2 = {name : 'flash', jobTitle : 'speedster', boss: 'batman'};
const user3 = {name : 'batman', jobTitle : 'detective'};
const user4 = {name : 'shazaam', jobTitle : 'kid', boss: 'batman'};
const user5 = {name : 'cyborg', jobTitle : 'android', boss: 'batman'};

const superHeroes = [user1, user2, user3, user4, user5];

for(let property of superHeroes){
//   console.log(`${property.name} : ${property.jobTitle}`);
  if(!('boss' in property)){
    console.log(`${property.jobTitle} ${property.name} doesn't report to anybody`);
  }else{
  console.log(`${property.jobTitle} ${property.name} reports to ${property.boss}`);
  }
}

function decode(word) {
  const cipher = {
    'a' : 2, 
    'b' : 3,
    'c' : 4,
    'd' : 5
  };
  if(word[0] in cipher){
    let value=cipher[word[0]];
    return word[value-1];
  }else{
    return ' ';
  } 
}
function decodeWords(string){
  let stringResult=[];
  const words = string.split(' ');
  for(let i = 0; i < words.length; i++){
    stringResult.push(decode(words[i]));
  }
  return stringResult.join('');
}
console.log(decodeWords('craft block argon meter bells brown croon droop'));






// daddy  first=d  d=5  cipher=fifthletter(y)
// dadda  first=d  d=5  cipher=fifthletter(a)

//craft block argon meter bells brown croon droop

