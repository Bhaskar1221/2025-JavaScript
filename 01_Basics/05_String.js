const name = "Bhaskar"
let repocount= 50

//console.log(`My name is ${name} and repocount is ${repocount}`);
//console.log(typeof name);

const gamename= new String('bhaskarfulpatiya')

//console.log(gamename[0]);
//console.log(gamename.length);
//console.log(gamename.charAt(3));
//console.log(gamename.indexOf('a'));

//console.log(gamename.substring(0,5));
//console.log(gamename.includes('q'));
//console.log(gamename.slice(2,9));
//console.log(gamename.slice(2,-4));
console.log(gamename.slice(-3,4)); // According to the ECMAScript specification for String.prototype.slice(), if the startIndex is greater than or equal to the endIndex, an empty string ("") is returned.
const newname = '  bhaskar   '
console.log(newname);
console.log(newname.trim());

console.log(gamename.replaceAll('a','k'))


