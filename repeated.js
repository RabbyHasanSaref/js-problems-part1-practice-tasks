// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

function repeatedArr(number, num){
    let n= 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] == num){
            n++;
        }
    }
    return n;
}
const number = [1, 1, 3, 6, 8, 1, 5];
console.log(repeatedArr(number, 1));


