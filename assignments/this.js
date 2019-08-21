/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding -- The 'this' keyword defaults to window/global object binding unless put into 'strict mode'. Basically it acts as a global object in browser windows.

* 2. Implicit Binding -- The thing immediately before the dot in a function is the "this" keyword. The 'this' keyword takes the place of the key and prints its value. It's the most commonly used.

* 3. New binding -- In a constructor function (a function that returns objects--function name is usually capitalized), 'this' refers to the specific object created and returned by the constructor function.

* 4. Explicit binding -- 'this' can only be defined by apply and call methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
'use strict'
function catNames(name) {
    console.log(this);
    return name;
  }
  console.log(catNames("The Monsters"));




// Principle 2

// code example for Implicit Binding
    let myCats = {
        name: 'the monsters',
        color: 'black',
        behavior: 'naughty',
        about: function(){
        console.log(this.behavior);
        }
    }
        myCats.about();


// Principle 3

// code example for New Binding
function Cat(personalities){
  this.themonstercats = personalities;
}
let leChat = new Cat('The 🐈 cats 🐈 are 🐈 basically 🐈 monsters 🐈');
console.log(leChat.themonstercats)

// Principle 4

// code example for Explicit Binding
function kitties() {
    console.log(this.fed); 
  }
  
  let myKitties = {
    name:'theMonsters',
    fed:'The Monsters are never fed. In fact they are staaa-a-a-a-a-aaaarving, as we speak.', 
  }
  
  kitties.call(myKitties); 