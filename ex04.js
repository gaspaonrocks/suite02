/*

    Find Sum By Multiples

    If we list all the natural numbers below 10 that are
    multiples of 3 or 5, we get 3, 5, 6 and 9.

    The sum of these multiples is 23.

    In a function "findSumByMultiples", find the sum of all the multiples of 3 or 5 below 1000.

    Write your own tests !
    
*/

// write your code below this comment


function randomIntNum() {
    var num = parseInt(Math.random() * 100 + 1);
    return num;
}

function findSumByMultiples(num) {
    var sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(findSumByMultiples(10));
console.log(findSumByMultiples(100));
console.log(findSumByMultiples(1000));
console.log(findSumByMultiples(randomIntNum()));