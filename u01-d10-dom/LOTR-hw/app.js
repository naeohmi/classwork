const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];
const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
//changed 'baddies' to bads so its not confused with buddies
const bads = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];
const lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

window.onload = function () {
    document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
    document.querySelector('#b2').addEventListener('click', makeHobbits);
    document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
    document.querySelector('#b4').addEventListener('click', makeBads);
    document.querySelector('#b5').addEventListener('click', makeBuddies);
    document.querySelector('#b6').addEventListener('click', leaveTheShire);
    document.querySelector('#b7').addEventListener('click', beautifulStranger);
    document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
    document.querySelector('#b9').addEventListener('click', theBalrog);
    document.querySelector('#b10').addEventListener('click', hornOfGondor);
    document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
    document.querySelector('#b12').addEventListener('click', weWantsIt);
    document.querySelector('#b13').addEventListener('click', thereAndBackAgain);
};

let makeMiddleEarth = () => {
    //create a section tag with an id of middle-earth
    //add each land to the section as article tags -- try using a loop
    // assign the id of the corresponding article tag as the name of the land
    // inside each article tag include an h1 with the name of the land
    // append the section to the body of the DOM with
    let middleEarth = document.createElement('section');
    middleEarth.setAttribute('id', 'middle-earth');
    console.log(middleEarth);
    document.body.appendChild(middleEarth);
    for (let i = 0; i < lands.length; i++) {
        let place = document.createElement('article');
        place.setAttribute('id', lands[i]);
        middleEarth.appendChild(place);
        let nameOfLand = document.createElement('h1');
        nameOfLand.innerHTML = lands[i];
        place.appendChild(nameOfLand);
    }
    document.body.appendChild(middleEarth);
};

let makeHobbits = () => {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of "hobbit"
    // list the hobbits alphabetically.  Maybe use the .sort() method.
    let hairyFeetUl = document.createElement('ul');
    let alphHobs = hobbits.sort(); //alphabetically sorted
    
    for (let i = 0; i < hobbits.length; i++) {
        let hairyFeet = alphHobs[i];
        let hairyFeetLi = document.createElement('li');
        
        //give frodo an id of frodo
        if (hairyFeet === 'Frodo Baggins') {
            hairyFeetLi.setAttribute('id', 'frodo');
        } else if (hairyFeet === 'Samwise "Sam" Gamgee') {
            hairyFeetLi.setAttribute('id', 'hero');
        }
        
        hairyFeetLi.append(hairyFeet);
        hairyFeetLi.setAttribute('class', 'hobbit');
        hairyFeetUl.appendChild(hairyFeetLi);
    }        
    let hobbitHome = document.getElementById('the-shire');
    hobbitHome.appendChild(hairyFeetUl);
};

let keepItSecretKeepItSafe = () => {
    // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
    // add the ring as a child of Frodo
    let ring = document.createElement('div');
    ring.setAttribute('id', 'the-ring');
    ring.innerHTML = 'The ring';
    console.log(ring);
    
    let frodo = document.getElementById('frodo');
    console.log(frodo);
    frodo.append(ring);
};

let makeBads = () => {
    // display an unordered list of bads in Mordor
    // give each of the bads a class of "baddy"
    let evilUl = document.createElement('ul');
    
    for (let i = 0; i < bads.length; i++) {
        let evils = bads[i];    
        let evilLi = document.createElement('li');
        evilLi.append(evils);
        evilLi.setAttribute('class', 'baddy');
        evilUl.appendChild(evilLi);
    }
    console.log(evilUl);
    document.body.appendChild(evilUl);
};
let makeBuddies = () => {
    // create an aside tag and append it below mordor
    // display an unordered list of buddies in the aside
    // give each of the buddies a class of "buddy"
    let aside = document.createElement('aside');
    let mordorAside = document.getElementById('mordor');
    aside.appendChild(mordorAside);

    let budsUl = document.createElement('ul');
    for (let i = 0; i < buddies.length; i++) {
        let buds = buddies[i];
        let budsLi = document.createElement('li');
        
        if (buds === "Strider") {
            budsLi.setAttribute('id', 'hottie');
        }
        
        budsLi.append(buds);
        budsLi.setAttribute('class', 'buddy');
        budsUl.appendChild(budsLi);
        
        mordorAside.appendChild(budsUl);
    }
    console.log(budsUl);
    document.body.appendChild(mordorAside);
    
};

let leaveTheShire = () => {
    // grab the hobbits and move them to Rivendell
    let elfLand = document.getElementById('rivendell');
    let goOnAdventure = document.querySelector('.hobbit').parentElement;
    elfLand.appendChild(goOnAdventure);
};


let beautifulStranger = () => {
    // change the buddy 'Strider' node to "Aragorn"
    let hottie = document.getElementById('hottie');
    hottie.innerHTML = 'Aragorn';
};

let forgeTheFellowShip = () => {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add an h1 with the text 'The Fellowship' to this new div
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    let elfLand = document.getElementById('rivendell');
    let adventureTime = document.querySelector('.buddy').parentElement;
    elfLand.appendChild(adventureTime);
    let formFellowship = document.createElement('div');
    formFellowship.setAttribute('class', 'fellowship');
    formFellowship.innerHTML = '<h1>The Fellowship</h1>';
    for (let i = 0; i < hobbits.length; i++) {  
        let fellowshipMemberHobbit = document.createElement('h2');
        fellowshipMemberHobbit.setAttribute('id', hobbits[i])
        formFellowship.appendChild(fellowshipMemberHobbit);
        //alert(`Welcome to the great Fellowship ${hobbits[i]}!`);
    }
    for (let j = 0; j < buddies.length; j++) {
        let fellowshipMemberBuddy = document.createElement('h2');
        fellowshipMemberBuddy.setAttribute('id', buddies[j]);
        formFellowship.appendChild(fellowshipMemberBuddy);
        //alert(`Welcome to the great Fellowship ${buddies[j]}!`)
    }
    document.body.appendChild(formFellowship);
};

let theBalrog = () => {
    // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
    // add a class "the-white" to this element
    // in the style.css file, add a css rule for the class "the-white"
    // have a white background and a grey border
    let theWizard = document.getElementById('Gandalf the Grey');
    theWizard.setAttribute('class', 'the-white');
    theWizard.innerHTML = 'Gandalf the White';
};

let hornOfGondor = () => {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove the Uruk-Hai from the Bads on the page
    alert(`The Horn of Gondor has been blown!`);
    let heirofDenethor = document.getElementById('Boromir');
    heirofDenethor.innerHTML = '<strike>Boromir</strike>';
    let uglyFace = document.getElementsByClassName('.baddy');
    if (uglyFace === 'The Uruk-hai') {
        uglyFace.remove();
    }
    
};

let itsDangerousToGoAlone = () => {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    let frodo = document.querySelector('#frodo');
    let hero = document.querySelector('#hero');
    
    let scaryPlace = document.getElementById('mordor');
    let scaryMt = document.createElement('div');
    scaryMt.setAttribute('id', 'mount-doom');
    scaryPlace.appendChild(frodo);
    scaryPlace.appendChild(hero);
};


let weWantsIt = () => {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if it is a child of the div with the id 'gollum'
    // Move Gollum into Mount Doom
    let misunderstoodWeirdo = document.createElement('div');
    misunderstoodWeirdo.setAttribute('id', 'gollum');
    let mordor = document.querySelector('#mordor');
    mordor.appendChild(misunderstoodWeirdo);
    
    let precious = document.querySelector('#the-ring');
    let mrBaggins = document.querySelector('#frodo');
    let smeagol = document.querySelector('#gollum');
    mrBaggins.removeChild(precious);
    smeagol.appendChild(precious);
    
    if (precious.parentElement === smeagol) {
        precious.setAttribute('style', 'color: red');
    }
    
    let mtDoom = document.querySelector('#mount-doom');
    mtDoom.appendChild(smeagol);
};

let thereAndBackAgain = () => {
    // remove Gollum and the Ring from the DOM
    // remove all the bads from the DOM
    // Move all the hobbits back to the shire
    let mtDoom = document.querySelector('#mount-doom');
    let all = document.querySelector('body');    
    
    let smeagol = document.querySelector('#gollum');
        all.removeAttribute(smeagol)
    let allBads = document.getElementsByClassName('baddy');
        all.removeAttribute(allBads);
    
    let victors = document.getElementsByClassName('hobbits');
    let homeSweetHome = document.getElementById('the-shire');
    for (let i = 0; i < victors.length; i++) {
        homeSweetHome.appendChild(victors[i]);   
    }
};