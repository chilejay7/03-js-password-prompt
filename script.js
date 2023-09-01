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

// Issue #3 - Add a prompt for the number of characters user is requesting.
// The parse integer function is used with the prompt to give the value entered a type of number as it will deafult to a string.
// The while function will continue to prompt until a valid value is entered.  If text is entered it will be caught
// by the !numCtrs expression since it would return NaN when trying to parse which is falsy.
// An or expression was added to also catch numbers less than 8 or numbers greater than 128.
let numCtrs = parseInt(prompt('How many characters would you like to include in your password?  Please enter a number between 8 and 128.'));

while (!numCtrs || numCtrs < 8 || numCtrs > 128) {
  numCtrs = parseInt(prompt("Please enter a valid number between 8 - 128."));
}

