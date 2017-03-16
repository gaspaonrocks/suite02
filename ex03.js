/*

    Two ways currency converter

    1) Write one function "numberToPrice" that convert a number to a price.

        If we got the number 4 in parameter,
        you need to return a string that contain "4,00€";

    2) Write a second function "priceToNumber" that convert a price to a number.

        If we got the string "4,59€" in parameter,
        you need to return a float number that is equal to 4,59;

    3) If we pass an empty string or negative number, return 0 or empty string;

    Is 0 positive or negative ?

    Write your own tests !

*/

// write your code below this comment

function randomFloatNum() {
    var num = Math.random() * 100 + 1;
    return num.toFixed(2);
}

function randomIntNum() {
    var num = parseInt(Math.random() * 100 + 1);
    return num;
}

function numberToPrice(nb) {
    var price = parseFloat(nb).toFixed(2);
    return price;
}

function priceToNumber(price) {
    var nb = parseFloat(price).toFixed(0);
    return nb;
}

function checkInput(input) {
    if (input == null) {
        return "not a number, fella...";
    } else if (input == 0) {
        return "It's either free or empty. Which is it ?"
    } else if (Number.isInteger(input) == true) {
        var result = numberToPrice(input);
        return result + "€";
    } else if (Number.isInteger(input) == false) {
        var result = priceToNumber(input);
        return result;
    }
}

console.log(checkInput(randomFloatNum()));
console.log(checkInput(randomIntNum()));
console.log(checkInput());
console.log(checkInput(0));