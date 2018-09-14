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
// return start position
console.log("script contains in js ? " + js.search("script"));

// return new concated string
console.log("concat 'language' to js :" + js.concat(" language"));

// removes initial and trailing spaces
console.log("js trim : " + js.trim()); 
console.log("toUppercase() : "+ js.toUpperCase());
console.log("toLowerCase() : "+ js.toLowerCase());

// return string if found
console.log("match :" + js.match("java"));

// return index else -1
console.log("indexOf a is :" + js.indexOf("a"));


// 3. Boolean

var isTrue = true;
var isFalse = false;
console.log("isTrue :" + isTrue);
console.log("isFalse:" + isFalse);

console.log("10<20?20:10 = "+(10<20?20:10));


// 4.Array

var skillList = ["python", "javascript", "java", "Angular", "spring"];

console.log("Skill list is :" + skillList);
console.log("0th element in list is: " + skillList[0]);
console.log("list to string :" + skillList.toString());

// filter list with filter method
updatedList = skillList.filter(function(val){
    if(val.startsWith("j")){
        return val;
    }
});
console.log("filtered list is: "+ updatedList);

printArray = function(array, message){
    // Iterate over array
    console.log(message);
    skillList.forEach(function(val){
        console.log(val);
    });
}


// insert element in array using push()
skillList.push("Hibernate");
printArray(skillList, "Push item in array :");

// pop element from array using pop()
a = skillList.pop()
printArray(skillList,"Pop item from array :" + a);

console.log("find index of element in array :" + 
            skillList.indexOf("java"));



