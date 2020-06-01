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

function createCharacter(name,nickname,race,origin,attack,defense,weapon){
  return{
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`);    
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
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6,'wizard staff'),
  createCharacter('Bilbo Baggins','bilbo', 'Hobbit', 'The Shire', 2, 1, 'The Ring'),
  createCharacter('Frodo Baggins','frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn','aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas','legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

characters.push(createCharacter('Arwen Undomiel','arwen', 'Half-Elf', 'Rivendell',5,4, 'Hadhafang'));

characters.find((character)=>character.nickname==='aragorn').describe();

let hobbits=characters.filter((character)=>character.race==='Hobbit');
console.log(hobbits);

let above5Attack=characters.filter((character)=>character.attack>5);
console.log(above5Attack);

//8.

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  const found=arr.find((hero)=function(){
    let result=true;
    for(prop in query){
      if(!(prop in hero)){
        result=false;
      }
    }
    if(result=true){
      return hero;
    }
  });
  return found;
}

findOne(HEROES, { id: 1 });
