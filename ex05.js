/*

    Smallest Multiple

    2520 is the smallest number that can be divided by each of the numbers
    from 1 to 10 without any remainder.

    What is the smallest positive number that is
    evenly divisible by all of the numbers from 1 to 20?

    Write a function "smallestMultipleFor" that solves this problem.

    Write your own tests !
    
*/

// write your code below this comment

// PENSER À BOUCLE WHILE


function randomIntNumber() {
    var num = parseInt((Math.random() * 10) + 1);
    return num;
}

function isMultiple(limit, num) {
    for (let i = 1; i <= limit; i++) {
        if (num % i != 0) {
            return false;
        }
    }
    return true;
}

function smallestMultipleFor(limit) {
    var num = 1;
    while (isMultiple(limit, num) == false) {
        num++;
    }
    return num
}

console.log(smallestMultipleFor(randomIntNumber()));
console.log(smallestMultipleFor(5));
console.log(smallestMultipleFor(10));
console.log(smallestMultipleFor(20));