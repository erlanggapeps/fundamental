// for (let i = 1; i <= 10; i++) {
//     console.log(`hello world ke-${i}`)
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(`hello world ke-${i}`)
// }

// // while
// let i = 1
// while (i < 2) {
//     console.log(`hello`)
//     i++
// }


// // do
// do {
//     console.log(`hallo`);
//     i++
// } while (i <0);

// for (let i = 1; i<= 10; i++) {
//     if (i == 3) continue
//     console.log(i)
// }


// let * = 1
// for (let i = 1; i <= 5; i++) {
//     console.log(`*`)
// }

// while (true) {
//     console.log(`*`)
// }

let n = 5;

for ( let i = 1; i <= n; i++) {
    console.log("*".repeat(i))
}

// let n = 5;

for ( let i = n; i > 0; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i))
}

for ( let i = n; i > 0; i--) {
    console.log("*".repeat(i) + " ".repeat(n - i))
}