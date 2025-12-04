//age tusk
let age =Number(prompt("how old are you?"))
if(age>=18){
    console.log("You are welcam")
}else {
    console.log("You are not allow to this sayt")
}
//name surname tusk


let fullname = prompt("what is your full name")

let parts = fullname.split(" ")

let firstName= parts[0]

console.log("Salam , "+ firstName +" !")


//number tusk
let number = prompt("write a 4-long number")
let num1 = Number(number[0])
let num2 = Number(number[1])
let num3 = Number(number[2])
let num4 = Number(number[3])
let sum = num1+num2+num3+num4
console.log("Sum of every single number is "+ sum)