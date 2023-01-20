# Password Generator

# User Story
As an employee with access to sensitive data, I want to randomly generate a password that meets certain criteria so that I can create a strong password that provides greater security.

# Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

# Description
* This is a password generator that requires to have at least 8 charaters and not more than 128 characters. You must use atleast on character type, you can include all available character type options, lowercase, uppercase, numeric and/or special characters.


# Screenshot
![Final Website](assets/img/password-generator.png)

# Live Site
* https://johnxlai.github.io/password-generator