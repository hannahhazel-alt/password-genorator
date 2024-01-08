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
  let passwordLength = prompt("Please enter your password length between 8 and 128: "); 

  if (passwordLength === null) {
    alert("Error!! User cancelled the password genterator."); 
    return; // Exit the function if the input is null // 
  }
  
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength < 128) {
    alert ("Invalid password length. Please enter a password between 8 and 128 characters."); 
    return; // Exit the function if input is invalid // 
  }
// If none of the above happends it means the password is valid // 
return passwordLength;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let random = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];} 

function getRandom(arr) {
  let random = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];}

function getRandom(arr) {
 let random = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];}

function getRandom(arr) {
 let random = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];}

return ({content : `${random}`});

// Function to generate password with user input
function getPasswordOptions() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);