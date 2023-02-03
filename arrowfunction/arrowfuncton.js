/*function sum(a,b){
    return a + b
}
*/

let sum2 = (a, b) => a + b   //if its just one line of function code, you can ignore the { } and return call. This line assumes return a + b

/*
function isPositive(number){
    return number >= 0
}
*/

let isPositive2 = number => number >= 0   // if theres only one argument in the function can omit the ()

/*
function randomNumber() {
    return Math.random
}
*/

let randomNumber2 = () => Math.random  // if there is no arguments, put the ()

/*
document.addEventListener('click', function() {
    console.log('click')
})
*/

document.addEventListener('click', () => console.log('click'));
