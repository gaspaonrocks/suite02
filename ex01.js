/*

    Eval Expr

    Write a function "evalExpr" that can solve simples arithmetic calculs;

    We will pass only positive integer numbers.

    Exemples:

    evalExpr(4, 5, "*"); // 20
    evalExpr(3, 3, "+"); // 6
    evalExpr(2, 2, "%"); // 0
    evalExpr(3, 3, "-"); // 0
    evalExpr(10, 2, "/"); // 5

    evalExpr(10, 0, "/"); // 0

    Validation:
    I want to see at least 6 functions.

    Write your own tests !
    
    Forbidden functions:
    eval

*/

// write your code below this comment

function add(nb1, nb2) {
    return result = nb1 + nb2;
}

function substract(nb1, nb2) {
    return result = nb1 - nb2;
}

function multiply(nb1, nb2) {
    return result = nb1 * nb2;
}

function divide(nb1, nb2) {
    if (nb2 == 0) {
        console.log(("division is impossible"));
        return 0;
    } else {
        return parseInt(result = nb1 / nb2);
    }
}

function getRemainder(nb1, nb2) {
    return result = nb1 % nb2;
}

function evalExpr(nb1, nb2, operator) {
    if (operator == "+") {
        return add(nb1, nb2);
    } else if (operator == "-") {
        return substract(nb1, nb2);
    } else if (operator == "*") {
        return multiply(nb1, nb2);
    } else if (operator == "/") {
        return divide(nb1, nb2);
    } else if (operator == "%") {
        return getRemainder(nb1, nb2);
    }
}

console.log(evalExpr(136, 212, "*")); // 28832
console.log(evalExpr(22, 56, "+")); // 6
console.log(evalExpr(8, 3, "%")); // 2
console.log(evalExpr(2, 3, "-")); // -1
console.log(evalExpr(234, 76, "/")); // 3

console.log(evalExpr(10, 0, "/")); // 0