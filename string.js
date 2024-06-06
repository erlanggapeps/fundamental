let data = "Hello Bandung";
let dataUpper = data.toUpperCase().replace("o", "a");

console.log(dataUpper);

function getDaysDifference(d1, d2) 
{
const date1 = new Date(d1)
const date2 = new Date(d2);
const diffTime = Math.abs(date1 - date2);
return Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
}

console.log(getDaysDifference("2022-01-20", "2022-01-22"));