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

function createCharacter(name,nickname,race,origin,attack,defense){
  return{
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);    
    },
    evalueateFight: function(character){
      let y=0;
      let x=0;
      if(this.defense>character.attack){
        y=0;
      }else{
        y=character.attack-this.defense;
      }
      if(character.defense>this.attack){
        x=0;
      }else{
        x=this.attack-character.defense;
      }
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage.`);
    }
  };
}

let characters=[
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins','bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins','frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn','aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas','legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push('Arwen Undomiel','arwen', 'Half-Elf', 'Rivendell',5,4);


