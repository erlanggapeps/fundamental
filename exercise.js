// day_two

// Write a code to convert celsius to fahrenheit ○ Example: 60 Celcius → 140 Fahrenheit

let c = 60
let f = 140

f = (c * (9 / 5)) + 32;
console.log("The value of the temperature in Fahrenheit is " + f);


// Write a code to check whether the number is odd or even ○ Example: 25 → odd number, 2 → even number

// let number = 7

// // ganjil
// if (number % 2 === 0) {
//     console.log(number + " is a even number")

// // genap
// } else {
//     console.log(number + " is a odd number")
// }

let n = 7
console.log(n % 2 == 1 ? `${n} is a odd number` : `${n} is a even number`)

//     ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

// let number = 12
// let divider = 0
// console.log (divider == 2 ? `${number} is a prime number` : `${number} is not a prime number`)

// ● Write a code to find factorial of a number
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

let num = 6 // 6x5x4x3x2x1=720
let result = 1

for (let i = 1; i <= num; i++) {
    result *= i
}

console.log(result)
