/*

    Thermometer

    Write a function "randomTemperatur" that return a temperature in Celsius or in Farenheight

    This function take one parameter that can be:
    
    "c" if we want to have a celsius value
    "f" if we want to have a farenheight value

    The number to calcul is a generated random number.
    You must create this random number.

    Write your own tests !
    
*/

// write your code below this comment
function randomNum() {
    var num = parseInt(Math.random() * 100 + 1);
    return num;
}

function celToFahr(nb) {
    var result = (nb * 1.8) + 32;
    return parseInt(result);
}

function fahrToCel(nb) {
    var result = (nb - 32) / 1.8;
    return parseInt(result);
}

function randomTemperature(unit) {
    var temp = randomNum();
    if (unit == "c") {
        return fahrToCel(temp) + "°C";
    } else if (unit == "f") {
        return celToFahr(temp) + "°F";
    }
}


console.log(randomTemperature("c"));
console.log(randomTemperature("f"));