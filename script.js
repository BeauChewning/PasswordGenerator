
//list of arrays with characters thats can be used to create passwords
var specialCharaters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var valid = [];
var password = [];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  valid = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  


  var passwordLength = prompt("Enter a password between 8-128 characters");

  if (parseInt(passwordLength) <= 8 || passwordLength >= 128) {
    alert("please enter a proper password")
    return generatePassword()
  } else if (passwordLength == 0 || passwordLength === null) {
    alert("EMPTY YOU FOOL!!!");
    return generatePassword()
  }


  var numeric = confirm("do you want numbers")

  var special = confirm("do you want special characters")

  var upper = confirm("do you want uppercase characters")

  var lower = confirm("do you want lowercase characters")

  if (!numeric && !lower && !upper && !special) {
    alert("you must at least choose one type");
    return generatePassword();
  }

  if (numeric) {
    valid = valid.concat(numericCharacters)
  }
  if (lower) {
    valid = valid.concat(lowerCasedCharacters)
  }
  if (upper) {
    valid = valid.concat(upperCasedCharacters)
  }
  if (special) {
    valid = valid.concat(specialCharaters)
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {

    password += valid[Math.floor(Math.random() * valid.length)];
  }
  return password;
}








