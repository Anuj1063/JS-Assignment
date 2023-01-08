// Assignment ---2---------------------------------------

// Answer--1------------------

function elementExist(arr, element) {
  var position = [];
  for (var i = 0; i < arr.length; i++)
    if (arr[i] === element) {
      position.push(i);
    }

  if (position.length === 0) {
    return -1;
  } else if (position.length === 1) {
    return position[0];
  } else {
    return position;
  }
}
var arr = [1, 2, 3, 4, 5, 1, 3],
  element = 3;

console.log(elementExist(arr, element));

//Answer--2---------------------------------------------

var n = 5;
var string = "";
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);

// Answer--3-----------------------------------------------------

function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortAscending([3, 2, 1, 4, 5, 45]));

//Answer--4--------------------------------------------

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  var str1Chars = str1.split("").sort();
  var str2Chars = str2.split("").sort();

  for (var i = 0; i < str1Chars.length; i++) {
    if (str1Chars[i] !== str2Chars[i]) return false;
  }

  return true;
}

console.log(isAnagram("LISTEN", "SILENT"));
console.log(isAnagram("HELLO", "JELLO"));

//Answer--5------------------------------------------------------

function reverseString(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
