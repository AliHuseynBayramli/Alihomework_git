let arr = [1, 4, 7, 8, 11, 20, 3];
let sum = 0;
arr.forEach(num => {
  if (num % 2 !== 0) {
    sum += num;
  }
});
console.log(sum); 


//second task 

let words = ["js", "front", "html", "css"];

let reversedWords = words.map(word =>
  word.split("").reverse().join("")
);

console.log(reversedWords);



