//Q1. Write a function to check if an array contains a particular number.

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

console.log([].contains(5)); // => false
console.log([1, 2, 3, 4, 5].contains(3)); // => true
console.log([1, 1, 2, 1, 1].contains(3)); // => false
console.log([5, 5, 5, 6].contains(5)); // => true
