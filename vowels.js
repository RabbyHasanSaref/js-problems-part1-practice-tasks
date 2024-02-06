// ### Task-3: 
// Write a function to count the number of vowels in a string.
function vowels(str){
    let vowelsChart = 'aAeEiIoOuU';
    let chart = 0;
   for(let i = 0; i < str.length; i ++){
    if(vowelsChart.indexOf(str[i]) !== - 1){
        chart += 1;
    }
   }
   return chart;
}
console.log('This is a vowels number count :', vowels('Computer'))