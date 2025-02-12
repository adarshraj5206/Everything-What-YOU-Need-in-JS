
//variables in js

// let → Can be updated, but not re-declared.
// const → Cannot be changed or re-declared.
// var → Old way, allows re-declaration and has function scope

var k;
console.log(k);  // undefined


let a = 10;
console.log(a); //10

a = 20;
console.log(a); //20

var c = 25;
console.log(c); // 25

const p = 90;
console.log(p); // 90


function hi(){
    var j = 4;
    console.log(j); // 4
    // console.log(b); // Referrence Error , b is not define if there is error then no more line exutes. it will stoped here
    console.log(c);
    console.log(a);
    console.log(p);

    let m = 8;
    const n = 0;
}

hi();
// console.log(m); // Referrence Error , m is not define if there is error then no more line exutes. it will stoped here
// console.log(n); //Referrence Error , n is not define if there is error then no more line exutes. it will stoped here


// tricky 


console.log({} == {});   // f
console.log({} == []);  // f
console.log([] == []);   // f
console.log("a" == "A");  // f  









