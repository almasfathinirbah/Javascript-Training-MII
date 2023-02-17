// X dan O

// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  var x = [];
    var o = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x.push(str[i]); 
        } else if (str[i].toLowerCase() === 'o') {
            o.push(str[i]);
        }
    }

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
