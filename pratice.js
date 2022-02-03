// let stack = [];

// const { callbackify } = require("util");

// stack.push(1);
// console.log(stack);

// stack.push(2);
// console.log(stack);

// stack.push(3);
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);


// b();
// console.log(x);
// var x = 10;
// var learnjs = new promise (function a(){
//   let x = 10;
//   console.log(x);
//   a();
// } , 1000 );

// function b(){
//   let x = 100;
//   console.log(x)
// }
// var user = ['jay' , 'prabhat'];

// function adduser (username,callback){
//     setTimeout(() => {
//         user.push(username)
//         callback()
//     }, 300);
    
// }
// function getuser(){
//     setTimeout(() => {
//         console.log(user)
//     }, 200);
// }
// adduser('james',getuser);

// var array = ['hey', 'ram']

// function addarray (arr,callback) {
//     setTimeout(() => {
//         array.push(arr);
//         callback()
//     }, 200);
// }
//  function getarray(){
//      setTimeout(() => {
//          console.log(array)
//      }, 100);
//  }
//  addarray('hello',getarray);

//  let greeting = `Hello World,     
//                 Greetings to all,
//                 Keep Learning and Practicing!`

//                 console.log(greeting)
 
var person = {
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
}
const person1 = {
    firstname: "jayesh",
    lastname: "borse"
}
const person2 = {
    firstname: "om",
    lastname: "yadav"
}
 
console.log(person.fullname.call(person2));