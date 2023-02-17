// X dan O

// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  var x = [];
    var o = [];
    for (var i = 0; i < str.length; i++) { // i must be lower than length
        // str[i] or str.charAt(i), not str(i)
        if (str[i].toLowerCase() === 'x') { // toLowerCase is function, it must be called with toLowerCase()
            x.push(str[i]); // should push character
        } else if (str[i].toLowerCase() === 'o') {
            o.push(str[i]);
        }
    }
    // return statement must be located at the end
    if (x.length == o.length) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true