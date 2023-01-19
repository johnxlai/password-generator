// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');

function generatePassword() {
  console.log('generate password');
}
// Write password to the #password input
function writePassword() {
  askForPasswordCriterias();
  // const password = generatePassword();
  //Display password in box
  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Prompt question for password criteria
function askForPasswordCriterias() {
  //User selects which criteria to include in the password
  alert('Please tell us your password criteria');

  //prompt for length of the password
  //Choose length of 8 characters and no more than 128 characters
  const lengthOfPw = prompt(
    'Choose length of 8 characters and no more than 128 characters'
  );

  // Ask character types to include in the password
  //I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  const yesAndNoText = `(Press Ok for yes, Cancel for No)`;

  const lowerCase = confirm(
    `${yesAndNoText}\nDid you want to include lowercase?`
  );
  const upperCase = confirm(
    `${yesAndNoText}\nDid you want to include uppercase?`
  );
  const numeric = confirm(`${yesAndNoText}\nDid you want to include numeric`);
  const specialCharacters = confirm(
    `${yesAndNoText}\nDid you want to include special Characters`
  );

  const passwordRequirements = {
    lengthOfPw,
    upperCase: upperCase,
    numeric: numeric,
    specialCharacters: specialCharacters,
  };

  console.log(passwordRequirements);
}

// (my input should be validated and at least one character type should be selected)

//All prompts are answered
//Create a password
