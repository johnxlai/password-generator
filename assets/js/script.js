// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');

// Write password to the #password input
function writePassword() {
  //Display password in box
  passwordText.value = generatePassword();
}

//InvaildInput
function invaildInput() {
  alert(`Invaild input please start again`);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Prompt question for password criteria
function generatePassword() {
  passwordText.value = '';

  //User selects which criteria to include in the password
  alert('Please tell us your password criteria');

  //prompt for length of the password
  //Choose length of 8 characters and no more than 128 characters
  let lengthOfPw = prompt(
    'Choose length of 8 characters and no more than 128 characters'
  );

  //check if number is between 8 - 128
  if (lengthOfPw && lengthOfPw >= 8 && lengthOfPw <= 128) {
    console.log(lengthOfPw);
  } else {
    invaildInput();
    return 'Please start Again';
  }

  //Tell user you must select one type
  alert('Please note at least one character type needs to be selected');

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

  let passwordRequirements = {
    lowerCase,
    upperCase,
    numeric,
    specialCharacters,
  };
  console.dir(passwordRequirements);
  // (my input should be validated and at least one character type should be selected)
  const ifAllFalse = Object.keys(passwordRequirements).every(
    (key) => !passwordRequirements[key]
  );

  if (ifAllFalse) {
    //Restart app
    console.log(`You need to select atleast one character type- ${ifAllFalse}`);
    invaildInput();
    return 'Please Start Again';
  }

  let pwChars = '';
  let finalPassword = '';

  if (passwordRequirements.lowerCase) {
    pwChars += `abcdefghijklmnopqrstuvwxyz`;
  }
  if (passwordRequirements.upperCase) {
    pwChars += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  }

  if (passwordRequirements.numeric) {
    pwChars += `0123456789`;
  }

  if (passwordRequirements.specialCharacters) {
    pwChars += `!@#$%^&*()`;
  }

  passwordRequirements.lengthOfPw = lengthOfPw;
  console.dir(passwordRequirements);

  //Create a password

  for (let i = 0; i < passwordRequirements.lengthOfPw; i++) {
    //return a number between 0 to password length
    let randomNumber = Math.floor(Math.random() * pwChars.length);

    //Add random single char from the selected criteria using a random number as the index of the string - the plus on make sures it only grabs one char
    finalPassword += pwChars.substring(randomNumber, randomNumber + 1);
  }
  console.log(finalPassword.length);
  console.log(finalPassword);
  return finalPassword;
}
