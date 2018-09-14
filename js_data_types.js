/**
 * Javascript support multiple data types:
 *  1. Number
 *  2. String
 *  3. Boolean
 *  4. Array
 *  5. Object
 *  6. Undefined
 *
 */

// We can declare variables using "var" and "let" keyword

var a;   // declared, but not defined

console.log("value of a is:" + a); //value of a is:undefined

//console.log("value of b is :" + b); //ReferenceError: b is not defined


// 1. Number
var no = 10;
console.log("no :" + no);
console.log("no = " + no.toString());

//2. String

var js = "javascript";

console.log("Length of name is :" + js.length);
console.log("js endswith t? :" + js.endsWith("t"));
console.log("js startswith j? :" + js.startsWith("j"));
console.log("js charAt 2 :" + js.charAt(2));
console.log("script contains in js ? " + js.search("script")); // return start position
console.log("concat 'language' to js :" + js.concat(" language"));
console.log("js trim : " + js.trim());
console.log("toUppercase() : "+ js.toUpperCase());
console.log("toLowerCase() : "+ js.toLowerCase());
console.log("match :" + js.match("java"));
