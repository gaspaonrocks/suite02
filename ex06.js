/*

    Bubble sort

    Write a function "bubbleSort".

    The function takes and sorts an array.

    The array contains only positive numbers.

    Exemple:
    [8, 3, 0] -> [0, 3, 8]

    Forbidden functions:
    sort

    Tips:
    use google

    Write your own tests !
    
*/

// write your code below this comment

function bubbleSort(array) {
    for (let i = 1; i < array.length; i++) {
        var x = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > x) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = x;
    }
    return array;
}

console.log(bubbleSort([8, 3, 0]));
console.log(bubbleSort([0, 5, 3, 4, 2, 1]));
console.log(bubbleSort([1, 5, 3, 2, 4, 0]));
console.log(bubbleSort([3, 4, 2, 5, 1, 0]));
console.log(bubbleSort([2, 5, 3, 4, 0, 1]));