//Question--1//----------------------------
var str1 = "Today is";
var str2 = "      a beautiful day     ";
var str3 = " In Hawaii.     ";

str2 = str2.trim();
str3 = str3.trim();
var result = str1 + " " + str2 + " " + str3;
console.log(result);

//Question--2//------------------------------

var enteredAlphabet;
enteredAlphabet = prompt("Enter Alphabet");

switch (enteredAlphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log(enteredAlphabet + " is a vowel.");
    break;
  case "b":
  case "c":
  case "d":
  case "f":
  case "g":
  case "h":
  case "j":
  case "k":
  case "l":
  case "m":
  case "n":
  case "p":
  case "q":
  case "r":
  case "s":
  case "t":
  case "v":
  case "w":
  case "x":
  case "y":
  case "z":
  case "B":
  case "C":
  case "D":
  case "F":
  case "G":
  case "H":
  case "J":
  case "K":
  case "L":
  case "M":
  case "N":
  case "P":
  case "Q":
  case "R":
  case "S":
  case "T":
  case "V":
  case "W":
  case "X":
  case "Y":
  case "Z":
    console.log(enteredAlphabet + " is a consonant.");
    break;
  default:
    console.log(enteredAlphabet + " is not an alphabet");
    break;
}

//Question--3//---------------------------------------

var opt = prompt(
  "1-Addition.\n2-Substraction.\n3-Multiplication.\n4-Division.\nEnter Your Choice"
);

var num1 = 0,
  num2 = 0;

switch (opt) {
  case "1":
    num1 = parseFloat(prompt("Enter first Number"));
    num2 = parseFloat(prompt("Enter Second Number"));
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "2":
    num1 = parseFloat(prompt("Enter first Number"));
    num2 = parseFloat(prompt("Enter Second Number"));
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "3":
    num1 = parseFloat(prompt("Enter first Number"));
    num2 = parseFloat(prompt("Enter Second Number"));
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "4":
    num1 = parseFloat(prompt("Enter first Number"));
    num2 = parseFloat(prompt("Enter Second Number"));
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  default:
    alert("Invalid operator");
    break;
}

//Question--4-----------------------------------------------------

var side1, side2, side3;
side1 = parseInt(prompt("Enter 1st side of Triangle"));
side2 = parseInt(prompt("Enter 2st side of Triangle"));
side3 = parseInt(prompt("Enter 3st side of Triangle"));

if (side1 === side2 && side2 === side3) {
  console.log("equilateral");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("isosceles");
} else {
  console.log("scalene");
}

//Question--5------------------------------------------

var units = parseFloat(prompt("Enter the number of units"));
var bill = 0;

if (units <= 50) {
  bill = units * 0.5;
} else if (units <= 150) {
  bill = 50 * 0.5 + (units - 50) * 0.75;
} else if (units <= 250) {
  bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
} else {
  bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
}

bill = bill * 1.2; // add surcharge of 20%

console.log(`Total bill: ${bill}`);
