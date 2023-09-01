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


// The userInput variable needed to be declared within the global scope to make data avaible to other functions and statements.  The varialbe was created empty to capture to the output of the passPrompt function.
let userInput = "";

//Issue #1 - Open prompt on click
// The function below was added to the attributes of the button element in the html.

function passPrompt() {

  var click = alert("Thank you for choosing to create a strong password.  Please select what you would like to include in your password from the prompts that follow.  Please press Ok to continue.")


  // Issue #3 
  // Add a prompt for the number of characters user is requesting.
  // The parse integer function is used with the prompt to give the value entered a type of number as it will deafult to a string.
  // The while function will continue to prompt until a valid value is entered.  If text is entered it will be caught
  // by the !numCtrs expression since it would return NaN when trying to parse which is falsy.
  // An or expression was added to also catch numbers less than 8 or numbers greater than 128.

  let numCtrs = parseInt(prompt('How many characters would you like to include in your password?  Please enter a number between 8 and 128.'));

  while (!numCtrs || numCtrs < 8 || numCtrs > 128) {
  numCtrs = parseInt(prompt(`You entered: ${numCtrs}. Please enter a valid number between 8 - 128.`));
  }

  // Issue #2 
  // Select which character types to include
  // This will ask to include special characters and store it in the specialCharac variable.
  let specialCharac= parseInt(prompt('Would you like to include special characters in your password? 1 = Yes, 2 = No'))

  while (!specialCharac || specialCharac > 2) {
    specialCharac = parseInt(prompt('Please select a valid response by either entering 1 for Yes or 2 for No.'));
  } if (specialCharac === 1) {
      alert('Thank you.  Special Characters will be included in your password.');
  } else {
      alert('Special Characters will not be included in your password.');
  }

  // Issue #4
  // This will ask to include lowercase letters and store it in the upperCaseLett variable.
  let lowerCaseLett = parseInt(prompt('Would you like to include lowercase letters in your password? 1 = Yes or 2 = No.'));

  while (!lowerCaseLett || lowerCaseLett > 2) {
    lowerCaseLett = parseInt(prompt('Please select a valid response by either entering 1 for Yes or 2 for No.'));
  } if (lowerCaseLett === 1) {
    alert('Thank you.  Lowercase letters will be included in your password.');
  } else {
    alert('Lowercase letters will not be included in your password.');
  }

  // This will ask to include uppercase letters and store it in the upperCaseLett variable.
  let upperCaseLett = parseInt(prompt('Would you like to include uppercase letters in your password? 1 = Yes or 2 = No.'));

  while (!upperCaseLett || upperCaseLett > 2) {
    upperCaseLett = parseInt(prompt('Please select a valid response by either entering 1 for Yes or 2 for No.'));
  } if (upperCaseLett === 1) {
    alert('Thank you.  Uppercase letters will be included in your password.');
  } else {
    alert('Uppercase letters will not be included in your password.');
  }

  //This adds a prompt for numeric characters and stores it in the variable numericCharac.

  let numericCharac = parseInt(prompt('Would you like to include numeric characters in your password? 1 = Yes or 2 = No.'));

  while (!numericCharac || numericCharac > 2) {
    numericCharac = parseInt(prompt('Please select a valid response by either entering 1 for Yes or 2 for No.'));
  } if (numericCharac === 1) {
    alert('Thank you.  Numeric characters will be included in your password.');
  } else {
    alert('Numeric characters will not be included in your password.');
  };

  // Storing user responses in an object in an array.
  userInput = [
    {NumberCharacters: numCtrs, SpecialCharacters: specialCharac, Lowercase: lowerCaseLett, Uppercase: upperCaseLett}
  ]

}


// For testing purposes only.
// let randomNum = Math.floor(Math.random()*128)