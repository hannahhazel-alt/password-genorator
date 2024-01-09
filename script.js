// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let userArray = []
  let passwordLength = prompt("Please enter your password length between 8 and 128: ");

  if (passwordLength === null) {
    alert("Error!! User cancelled the password genterator.");
    return getPasswordOptions(); // Exit the function if the input is null // 
  }

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a password between 8 and 128 characters.");
    return getPasswordOptions(); // Exit the function if input is invalid // 
  }

  let lowerOptions = confirm("Would you like lower case characters?");
  if (lowerOptions) {
    userArray = userArray.concat(lowerCasedCharacters)
  }
  let upperOptions = confirm("Would you like upper case characters?");
  if (upperOptions) {
    userArray = userArray.concat(upperCasedCharacters)
  }
  let numberOptions = confirm("Would you like numbers?");
  if (numberOptions) {
    userArray = userArray.concat(numericCharacters)
  }
  let specialOptions = confirm("Would you like special characters?");
  if (specialOptions) {
    userArray = userArray.concat(specialCharacters)
  }
  console.log (userArray)
  // If none of the above happends it means the password is valid // 
  return {passwordLength, userArray};
}

// Function for getting a random element from an array
function getRandom(arr) {
  let random = arr[Math.floor(Math.random() * arr.length)];
  return random;
}

// return ({ content: `${random}` });

// Function to generate password with user input
function generatePassword() {
  let userOptions = getPasswordOptions();
  console.log(userOptions)
  let randomCharacters = ""
  for (let i = 0; i < userOptions.passwordLength; i++){
randomCharacters += getRandom(userOptions.userArray)
  }
  console.log (randomCharacters)
  return randomCharacters;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);