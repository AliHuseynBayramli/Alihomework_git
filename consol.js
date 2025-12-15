function checkNumber(value) {
    if (value[0] !== "+") {
        return false;
    }

    let digits = value.slice(1);

    if (digits.length !== 11) {
        return false;
    }

    if (isNaN(digits)) {
        return false;
    }

    return true;


}
console.log(checkNumber("+7123456789"))


// second task 
let input = prompt("write a 5 word line");

let words = input.split(" ");
let result = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);
}

console.log(result.join(" "));

//tird task
function countLetters(text) {
    let cleanedText = text.replace(/[^a-zA-Z]/g, "");
    return (cleanedText.length);
}

let text ="lnim eos dicta assumenda."
console.log(countLetters(text));



