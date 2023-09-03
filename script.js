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
  userInput = {
    passwordLength: numCtrs, 
    specialCharacters: specialCharac, 
    Lowercase: lowerCaseLett, 
    Uppercase: upperCaseLett, 
    Numeric: numericCharac
  }

}

// The list below sets variables for the some of the potential values to include in the password.

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let specialCharacList = ['!', '@', '#', '$', '%', '&', '*'];

let alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

passwordLength = userInput.passwordLength

// I will need to use the values captured from the prompts to create one array from the many.

// This function can be used to randomize the different characters in an array.
function randomize(array) {
  let random = Math.floor(Math.random() * array.length)
  return array[random];
 }


 //This function will concatenate the arrays to use the values needed to generate the random password from the user's selections.



function generateArray() {
  // I'm creating an empty container for the concatenated array that will be created from the user's selections.
  
  let passwordArray;

  // Includes all possible arrays.
  if (userInput.specialCharacters === 1 && userInput.Lowercase === 1 && userInput.Uppercase === 1 && userInput.Numeric === 1) {
    passwordArray = alphabetLower.concat(alphabetUpper, specialCharacList, numbers)
    
    return passwordArray;

// Includes all arrays except numbers.
  } else if (userInput.specialCharacters === 1 && userInput.Lowercase === 1 && userInput.Uppercase === 1 && userInput.Numeric === 2) {
    passwordArray = alphabetLower.concat(alphabetUpper,specialCharacList)

    return passwordArray;

// Includes all arrays except Uppercase
  } else if (userInput.specialCharacters === 1 && userInput.Lowercase === 1 && userInput.Uppercase === 2 && userInput.Numeric === 1) {
    passwordArray = alphabetLower.concat(specialCharacList, numbers)

    return passwordArray;

 // Includes all arrays except lowercase
  } else if (userInput.specialCharacters === 1 && userInput.Lowercase === 2 && userInput.Uppercase === 1 && userInput.Numeric === 1) {
    passwordArray = alphabetUpper.concat(specialCharacList, numbers)

    return passwordArray;

//Includes all arrays except special characters.
  } else if (userInput.specialCharacters === 2 && userInput.Lowercase === 1 && userInput.Uppercase === 1 && userInput.Numeric === 1) {
    passwordArray = alphabetLower.concat(alphabetUpper, numbers)

    return passwordArray;

// Includes only special characters.
  } else if (userInput.specialCharacters === 1 && userInput.Lowercase === 2 && userInput.Uppercase === 2 && userInput.Numeric === 2) {
    passwordArray = specialCharacList

    return passwordArray;

// Includes only lowercase.
  } else if (userInput.specialCharacters === 2 && userInput.Lowercase === 1 && userInput.Uppercase === 2 && userInput.Numeric === 2) {
    passwordArray = alphabetLower

    return passwordArray;

//Includes only uppercase. 
  } else if (userInput.specialCharacters === 2 && userInput.Lowercase === 2 && userInput.Uppercase === 1 && userInput.Numeric === 2) {
    passwordArray = alphabetUpper

    return passwordArray;

// Includes only numeric.
  } else if (userInput.specialCharacters === 2 && userInput.Lowercase === 2 && userInput.Uppercase === 2 && userInput.Numeric === 1) {
    passwordArray = numbers

    return passwordArray;

// Includes special characters and lowercase.
  } else if (userInput.specialCharacters === 1 && userInput.Lowercase === 1 && userInput.Uppercase === 2 && userInput.Numeric === 2) {
    passwordArray = specialCharacList.concat(alphabetLower)

    return passwordArray;

// Includes special characters and uppercase.
  } else if (userInput.specialCharacters === 1 && userInput.Lowercase === 2 && userInput.Uppercase === 1 && userInput.Numeric === 2) {
    passwordArray = specialCharacList.concat(alphabetUpper)

    return passwordArray;

//Includes special characters and numbers.
  } else if (userInput.specialCharacters === 1 && userInput.Lowercase === 2 && userInput.Uppercase === 2 && userInput.Numeric === 1) {
    passwordArray = specialCharacList.concat(numbers)

    return passwordArray;

// Includes lowercase and uppercase.
  } else if (userInput.specialCharacters === 2 && userInput.Lowercase === 1 && userInput.Uppercase === 1 && userInput.Numeric === 2) {
    passwordArray = alphabetLower.concat(alphabetUpper)

    return passwordArray;

// Includes lowercase and numbers.
  } else if (userInput.specialCharacters === 2 && userInput.Lowercase === 1 && userInput.Uppercase === 2 && userInput.Numeric === 1) {
    passwordArray = alphabetLower.concat(numbers)

    return passwordArray;

// Includes uppercase and numbers.
  } else if (userInput.specialCharacters === 2 && userInput.Lowercase === 2 && userInput.Uppercase === 1 && userInput.Numeric === 1) {
    passwordArray = alphabetUpper.concat(numbers)

    return passwordArray;

  } else {
    alert("You didn't select the criteria required to generate a password.");
  }
    
}

function generatePassword() {
  let passwordGen = 0;
  
  for (let p = 0; p <= passwordLength; p++) {
   passwordGen += randomize(passwordArray);
    
  } 

  return passwordGen;
}


