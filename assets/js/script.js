// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');

const upperArr = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');
const lowerArr = `abcdefghijklmnopqrstuvwxyz`.split('');
const numericArr = `0123456789`.split('');
const specialCharArr = `!@#$%^&*()`.split('');

// Write password to the #password input
function writePassword() {
  //Display password in box
  passwordText.value = generatePassword();
}

//InvaildInput
function invaildInput() {
  alert(`Invaild input please start again`);
}

//Get Random Character From Array
function getRandomChar(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

//Prompt question for password criteria
function generatePassword() {
  passwordText.value = '';

  //User selects which criteria to include in the password
  alert(`Please tell us your password criteria`);

  //prompt for length of the password
  //Choose length of 8 characters and no more than 128 characters
  let lengthOfPw = prompt(
    `Choose length of 8 characters and no more than 128 characters`
  );

  //check if number is between 8 - 128
  if (lengthOfPw && lengthOfPw >= 8 && lengthOfPw <= 128) {
    console.log(lengthOfPw);
  } else {
    invaildInput();
    return `The length of password must be at least 8 characters long and no more than 128 characters`;
  }

  //Tell user you must select one type
  alert(`Please note at least one character type needs to be selected`);

  // Ask character types to include in the password
  //Confirms whether or not to include lowercase, uppercase, numeric, and/or special characters
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

  //Creating a password requirement obj
  let passwordRequirements = {
    lengthOfPw,
    lowerCase,
    upperCase,
    numeric,
    specialCharacters,
  };

  // (my input should be validated and at least one character type should be selected)
  const characterToUse = Object.keys(passwordRequirements).filter(
    (key) => passwordRequirements[key] === true
  );

  if (!characterToUse.length) {
    //Restart app
    invaildInput();
    return `You need to select at least one character type`;
  }

  //Init pw
  let pwChars = [];
  let finalPassword = '';

  if (passwordRequirements.lowerCase) {
    finalPassword += getRandomChar(lowerArr);
    pwChars.push(...lowerArr);
  }
  if (passwordRequirements.upperCase) {
    finalPassword += getRandomChar(upperArr);
    pwChars.push(...upperArr);
  }

  if (passwordRequirements.numeric) {
    finalPassword += getRandomChar(numericArr);
    pwChars.push(...numericArr);
  }

  if (passwordRequirements.specialCharacters) {
    finalPassword += getRandomChar(specialCharArr);
    pwChars.push(...specialCharArr);
  }

  //loop until we have the requested pw length
  while (finalPassword.length < passwordRequirements.lengthOfPw) {
    finalPassword += getRandomChar(pwChars);
  }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
