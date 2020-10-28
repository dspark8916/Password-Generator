// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var upperCase = ("A", "B", "C", "D", "E", "D", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var special = ("!", "@", "#", "$", "%", "&", "*", "(", ")", "+");

// for (var i = 0; i > 8 || i < 128; i++) {
//   password = password + valuesString.charAt(Math.floor(Math.random) * Math.floor(value.length)); 
// }

// console.log()

var generate;
var confirmNumbers;
var confirmSpecial;
var confirmUppercase;
var confirmLowercase;

var choices;

function generatePassword() {
  generate = pasrseInt(prompt("Your password must be between 8 & 128 characters long. How long you would like your password to be?"));
    if (!generate) {
      alert("Please enter a number between 8 & 128.");
    }
    else if (generate < 8 || generate > 128) {
      generate = parseInt(prompt("Please enter a number between 8 & 128."));
    }
}