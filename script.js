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

var generator; 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var upperCase = ["A", "B", "C", "D", "E", "D", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var special = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "+"]; 

var verifyNumbers; 
var verifySpecial; 
var verifyUppercase; 
var verifyLowercase; 
var options; 

function generatePassword() {
    generator = prompt("Your password must be between 8 & 128 characters long. How long you would like your password to be?");
      
      if (generator < 8 || generator > 128) {
        generator = alert("Please enter a number between 8 & 128.");
      }
  
      else {
        verifyNumbers = confirm("Would you like to include numbers?");
        verifySpecial = confirm("Would you like to include special characters?");
        verifyUppercase = confirm("Would you like to include uppercase letters?");
        verifyLowercase = confirm("Would you like to include lowercase letters?");
      };
  
      if (!verifyNumbers && !verifySpecial && !verifyUppercase && !verifyLowercase) {
        options = alert("Incorrect Input!! Click on Generate Password to try again!!");
      }
    
      else if (verifyNumbers && verifySpecial && verifyUppercase && verifyLowercase) {
        options = numbers.concat(lowerCase, upperCase, special);
      }
  
      else if (verifyNumbers && verifySpecial && verifyUppercase) {
        options = numbers.concat(special, upperCase);
      }
  
      else if (verifyNumbers && verifySpecial && verifyLowercase) {
        options = numbers.concat(lowerCase, special);
      }
  
      else if (verifyNumbers && verifyLowercase && verifyUppercase) {
        options = numbers.concat(lowerCase, upperCase);
      }
  
      else if (verifySpecial && verifyUppercase && verifyLowercase) {
        options = lowerCase.concat(special, upperCase);
      }
  
      else if (verifyLowercase && verifyNumbers) {
        options = lowerCase.concat(numbers);
      }
  
      else if (verifyLowercase && verifySpecial) {
        options = lowerCase.concat(special);
      }
  
      else if (verifyLowercase && verifyUppercase) {
        options = lowerCase.concat(upperCase);
      }
  
      else if (verifyUppercase && verifySpecial) {
        options = upperCase.concat(special);
      }
  
      else if (verifyUppercase && verifyNumbers) {
        options = upperCase.concat(numbers);
      }
  
      else if (verifyNumbers && verifySpecial) {
        options = numbers.concat(special);
      }
  
      else if (verifySpecial) {
        options = special;
      }
  
      else if (verifyUppercase) {
        options = upperCase;
      }
  
      else if (verifyNumbers) {
        options = numbers;
      }
  
      else if (verifyLowercase) {
        options = lowerCase;
      }
    
      var password = [];

      for (var i = 0; i < generator; i++) {
        var pickOptions = options[Math.floor(Math.random() * options.length)];
        password += (pickOptions);
      }
      return password;
    }
 