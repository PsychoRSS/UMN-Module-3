// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  speialChar: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', '/', '<', '>', '?', '.', ',', ':', ';'],
  numbers: [0,1,2,3,4,5,6,7,]
}
function generatePassword() {
  var rando = Math.floor(Math.random() * passwordCriteria.alphabet.map )
  var randoNum = Math.floor(Math.random() * passwordCriteria.numbers.length)
  var randoSpecChar = Math.floor(Math.random() * passwordCriteria.speialChar.length)

  var  all =  passwordCriteria.alphabet.concat(passwordCriteria.speialCharm, passwordCriteria.numbers)
  console.log(randoSpecChar)
  console.log(randoNum)
  console.log(rando)
  console.log(all)
}

generatePassword()
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
