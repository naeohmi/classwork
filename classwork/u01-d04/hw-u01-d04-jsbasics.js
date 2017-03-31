//ARRAYS (Part A)
//A.1 Start with the following array:
let team = ['Joe Keohan', 'Patrick Andre', 'Jon Zachary', 'Matt Kersner','Dominic Farquharson'];

//A.2 Write a JavaScript statement that prints (console.log) 'Jon Zachary' to the console
// console.log(team[2]);

//A.3 Write a statement that adds a new instructor, 'Brendan Eich', to our team array
team.push('Brendan Eich');
// console.log(team);

//A.4 Write a statement that removes our last intructor from our array
team.pop();
// console.log(team);

//ARRAYS ALL DAY (Part B)
//B.1 Start with the following array
var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//B.2 Find the length of the array
// console.log(nums.length);

//B.3 Append the array ['kittens','puppies','goldfish'] to the end of nums
let animals = ['kittens','puppies','goldfish'];
nums.push(animals);
// console.log(animals);

//B.4 Reverse the order of nums
nums.reverse();
// console.log(nums);

//B.5 Remove the value at index zero and append it to the end
let move = nums[0];
nums.shift(move);
nums.push(move);
// console.log(nums);

//B.6 Now move it back!
nums.pop(move);
nums.unshift(move);
// console.log(nums);


//OBJECTS: HAMMOND'S MINES (Part C)
//C.1
let snakeWaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};

//C.1.1 Create a variable called guestOfHonor and assign it's value to the name of the paleontologist at Snakewater, Montana
let guestOfHonor = snakeWaterMontana.paleontologist;
// console.log(guestOfHonor);

//C.1.2 Access the value of the specimen found in Snakewater, Montana, and store it in a variable called clever_girl
let clever_girl = snakeWaterMontana.specimen;
// console.log(clever_girl);

//C.2
let nicaragua = {
    depth: "200 meters",
    annual_budget: 1500000,
    specimens: [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ]
  };

//C.2.1 Store the array of specimens of this site into a variable called nicaraguanSpecimens
let nicaraguanSpecimens = nicaragua.specimens;
// console.log(nicaraguanSpecimens);

//C.2.2 Make a variable called favoriteSpecimen and assign it's value to your favorite dinosaur within nicaraguanSpecimens
let favoriteSpecimen = nicaragua.specimens[2];
// console.log(favoriteSpecimen);

//C.2.3 Add 250000 to the annual budget of this site
nicaragua.annual_budget = nicaragua.annual_budget + 250000;
// console.log(nicaragua);

//C.3
let hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
};

//C.3.1 Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican mine into a variable
let mxDepth = hammondsMines.mexico.depth;
// console.log(mxDepth);

//C.3.2 Access and the annual budget for Hammond's mine in Buenos Airies, store the annual budget for Hammond's mine in Buenos Aires
let anBugArg = hammondsMines.buenos_aires.annual_budget;
// console.log(anBugArg);

//C.3.3 Access and console the dinosaur DNA specimens found in Buenos Aires
let dinSpec = hammondsMines.buenos_aires.specimens;
// console.log(dinSpec);

//C.3.4 Insert Nicaragua into hammondsMines
hammondsMines.nicaragua = nicaragua;
console.log(hammondsMines);

//C.3.5 Create three variables to store the annual budgets for each mine into them
let anBugAr = hammondsMines.buenos_aires.annual_budget;
let anBugMx = hammondsMines.mexico.annual_budget;
let anBugNic = hammondsMines.nicaragua.annual_budget;

//C.3.6 Create a new variable to track the total annual cost of operation for the mines by adding the previously stored budgets
let totalAnBug = anBugAr + anBugMx + anBugNic;
console.log(totalAnBug);

//C.3.7 Access and console log the "Parasaurolophus" specimen
let para = hammondsMines.mexico.specimens[1];
console.log(para);