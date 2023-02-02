function reverseString(word){
    return word.split('').reverse().join('');
};

let word = reverseString('hello');
console.log(word);