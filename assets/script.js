// Assignment code here

var AlphabetCriteria = 'abcdefghijklmnopqrstuvwxyz';
var specialChar = "!@#$%^&*()-_+=[{]}\|;:',<.>/?"
var number = "0123456789"

var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener('click', function() {
  var alphaConfirm = window.confirm("Would you like letters")
  var NumConfirm = window.confirm("Would you like to use numbers?")
  var SpecCharConfirm = window.confirm("Would you like to use special characters?")
  var passLength = Number(window.prompt("How long would you like the password to be?"))

  console.log(passLength)

 if (alphaConfirm && NumConfirm && SpecCharConfirm) {
  generatePassword()
  
 } else if (alphaConfirm && NumConfirm) {
  generateAlphabet()
  generateNum()
  console.log()
 } else if (alphaConfirm && SpecCharConfirm) {
  var result = generateAlphabet() && generateRandoChar()
  generateRandoChar()
 
 } else if (NumConfirm && SpecCharConfirm) {
  generateNum()
  generateRandoChar()
 }

  

})

// This function will return a random number between 0-9
function generateNum() {
  var randoNum = Math.floor(Math.random() * number.length)
  var resNum = number[randoNum]
  
  return resNum
}

// This will return a random charater from the AlphabetCriteria string
function generateAlphabet() {
  var randoChar = Math.floor(Math.random() * AlphabetCriteria.length)
  var resChar = AlphabetCriteria[randoChar]
  
  return resChar
}

// This will return a random special charater from the specialChar string
function generateRandoChar() {
  var randoSpecChar = Math.floor(Math.random() * specialChar.length)
  var resSpecChar = specialChar[randoSpecChar]

  return resSpecChar
}


function generatePassword() {
  var randoChar = Math.floor(Math.random() * AlphabetCriteria.length)
  var randoNum = Math.floor(Math.random() * number.length)
  var randoSpecChar = Math.floor(Math.random() * specialChar.length)


  var resChar = AlphabetCriteria[randoChar]
  var resNum = number[randoNum]
  var resSpecChar = specialChar[randoSpecChar]

  var result = resChar + '' + resNum + '' + resSpecChar 


 return result
  
}

// console.log(generatePassword())
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
