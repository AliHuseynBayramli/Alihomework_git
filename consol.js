//first
let str1 = prompt("write a line:");
console.log("lenght of the line: " + str1.length);
//second
let str2 = prompt("write second line and i coubt e:");
console.log(str2.includes("e"));
//tird
let str3 = prompt("write tird line and ill tel u is there word code in start:");
console.log(str3.startsWith("code"));
//fourth
let str4 = prompt("write fourth line and ill tel u is there word code at the end:");
console.log(str4.endsWith("code"));
//fiveth
let str = prompt("write last line");
let result = str.replaceAll("t", "####*");
console.log(result);


