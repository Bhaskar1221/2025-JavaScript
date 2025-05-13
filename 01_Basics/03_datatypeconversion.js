let number = "33abc"
//console.log(typeof number);
//console.log(typeof(number));

let isnumber = Number(number)
//console.log(typeof number);
//console.log(isnumber);


// "33">= 33
// "33abc">= NaN
// True>= 1 and false>= 0

let islogged = 1

let isboolean = Boolean(islogged)
//console.log(isboolean);

/* 1>= true , 0>= false
"">= false, "bhaskar">=true. */

let num = 22

let stringnumber = String(num)
//console.log(typeof(stringnumber));


/*-------------------------------------Operations-------------------------------------*/

let value = 2
let negvalue = -value
//console.log(negvalue);


//console.log(2+2);
//console.log(2-2);
//console.log(2%3);
//console.log(2**3);


let str1 ="Hi"
let str2 = "Bhaskar"
let str3 = str1 + " "+ str2
//console.log(str3);

//console.log("1" + 2)
//console.log(1 + "2");
//console.log("1" +2 +2);
//console.log(1 + 2 + "2");

//console.log(+true);
//console.log(+"");

let gamecounter = 100
gamecounter++
//console.log(gamecounter);

let x = 4
//let y = x++
//console.log(`x=${x}, y=${y}`);

let a = 4
let b = a--
//console.log(`a=${a}, b=${b}`);

let quantity = -2;
while (quantity < 5) {
  quantity = Math.max(0, ++quantity); // Increment quantity first, then ensure it's not negative
  console.log(`Current quantity: ${quantity}`);
}




