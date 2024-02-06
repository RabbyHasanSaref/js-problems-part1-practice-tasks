// ### Task-4: 
// Write a function to find the longest word in a given string.
function longWord(strLong){
    strLong = strLong.match(/[a-zA-Z0-9]+/gi);
    let longerWord = '';
    for(let i = 0; i < strLong.length; i++){
        if(strLong[i].length > longerWord.length){
            longerWord = strLong[i];
        }
    }
    return longerWord;
}
console.log(longWord('I am learning Programming to become a programmer'))