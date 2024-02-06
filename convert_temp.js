// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.
function convertToTemp(celsius){
    const temp = (celsius * 9/5) + 32;
    return temp;
}
const convert = convertToTemp(30);
console.log(convert, 'Fahrenheit');