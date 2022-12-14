// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var charNumber = "0123456789";
var charSpecial = "!#$%&'()*+-./:;<=>?@[^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var charList = "";
  var genPassword = "";

  // Create prompt for user to enter password length, shows error message if too big or small
  var passwordLength = prompt(
    `Enter password length (Must be between 8-128 characters)`
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid.");
    return;
  }
  // Prompts for password parameters
  var isLowercase = confirm(`Click OK if password requires lower case`);

  if (isLowercase) {
    charList += charLowerCase;
  }

  var isUppercase = confirm(`Click OK if password requires upper case`);

  if (isUppercase) {
    charList += charUpperCase;
  }

  var isNumber = confirm(`Click OK if password requires a number`);

  if (isNumber) {
    charList += charNumber;
  }

  var isSpecial = confirm(`Click OK if password requires a special character`);

  if (isSpecial) {
    charList += charSpecial;
  }
  // Randomly generates password for user determined length
  for (i = 0; i < passwordLength; i++) {
    genPassword += charList.charAt(Math.floor(Math.random() * charList.length));
  }

  if (genPassword == "") {
    var error = "Try again!";
    return error;
  }

  return genPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
