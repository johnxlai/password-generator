// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Prompt question for password criteria

//User selects which criteria to include in the password

//prompt for length of the password
//Choose lenght of 8 characters and no more than 128 characters

// Ask character types to include in the password
//I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// (my input should be validated and at least one character type should be selected)

//All prompts are answered
//Create a password

// Display password in box
