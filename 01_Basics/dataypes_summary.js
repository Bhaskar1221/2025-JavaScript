// Primitive- Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable. 
// 
// - String, Number,Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.4

const isloggedin = false
const value = null

let email;

const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id === anotherid);
//console.log(typeof(id));

const bignum = 11212112312n


// Non Primitive - Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities

// Array, Objects, Functions

const arr = ["new", "word", "Mac"]

let obj = {
    Name: "Bhaskar",
    Age: "25"
}

const myfunc = function(){
    //console.log("hello");
    
}

//console.log(typeof(myfunc));


/*------------------------------------------------------------ */

let name = 'bhaskar'
let anothername = 'fulpatiya'
anothername= 'Girish'

console.log(name, anothername);


let newobj = {
    email: "bhaskarfulpatiya@gmail.com"
}

let user2 = newobj

user2.email = "fulpatiya@gmail.com"

console.log(newobj.email);
console.log(user2.email);

