// JavaScript Objects (U01-D07-OBJECTS):


// Part 1
// Create your own JavaScript object representing your favorite movie.

var findingNemo = {
  title: 'Finding Nemo',
  director: 'Lee Unkrich',
  actors: [ 'Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould'],
  releaseYear: 2003,
  duration: 100
}

console.log(findingNemo.title); //Q1
console.log(findingNemo.director); //Q2
console.log(findingNemo.releaseYear); //Q3
console.log(findingNemo.duration+25); //Q4

let actorName = (name) => {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};
actorName(findingNemo.actors); //Q5

findingNemo.rating = 99; //Q6
console.log(findingNemo);

// Part 2
var readingList = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: true
  },
  {
    title: 'The Giver',
    author: 'I Forgot',
    alreadyRead: true
  },
  {
    title: 'The Lorax',
    author: 'Dr. Seuss',
    alreadyRead: false
  }
];

readingList.forEach(function(readingList) { //Q1
  console.log(readingList.title);
});

readingList.forEach(function(readingList) { //Q2
  console.log(` ${readingList.title} by: ${readingList.author}`);
});


readingList.forEach(function(readingList) { //Q3
  if (readingList.alreadyRead = true) {
      console.log(`You already read ${readingList.title} by: ${readingList.author}`);
  } else {
    console.log(`You still need to read ${readingList.title} by: ${readingList.author} Someday...`);
  }
});


// Part 3
var tomBrady = {
    firstName: 'Tom',
    lastName: 'Brady',
    height: [6, 4],
    weight: 225,
    specialSkills: 'Cultivating Falcon tears',
    teammates: [
      {
        firstName: 'Rob',
        lastName: 'Gronkowski',
        age: 27,
      },
      {
        firstName: 'Julian',
        lastName: 'Edelman',
        age: 30
      },
      {
        firstName: 'Dion',
        lastName: 'Lewis',
        age: 26
      }
    ],
    superBowlRings: 5,
    throwFootball: function() {
      return 'Touchdown!';
    },
    introduce: function() {
      console.log(`I am ${this.firstName} ${this.lastName}`);
    }
};


console.log(tomBrady.throwFootball()); //Q1
console.log(tomBrady.introduce()); //Q1


tomBrady.soManyRings = function() { //Q2
  console.log(`I have ${this.superBowlRings} rings!`);
};
console.log(tomBrady);


tomBrady.teammates.forEach(function(teammates) { //Q3
  console.log((`Hey ${teammates.firstName} ${teammates.lastName}, are you ready to score some touchdowns?!`));
});
