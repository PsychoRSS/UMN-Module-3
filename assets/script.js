// Assignment code here

var AlphabetCriteria = 'abcdefghijklmnopqrstuvwxyz';
var specialChar = "!@#$%^&*()-_+=[{]}\|;:',<.>/?"
var number = "0123456789"
var passLength 

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', function() {
  passLength = Number(window.prompt("How long would you like the password to be?"))
  var alphaConfirm = window.confirm("Would you like letters")
  var NumConfirm = window.confirm("Would you like to use numbers?")
  var SpecCharConfirm = window.confirm("Would you like to use special characters?")

  // console.log(passLength)

 if (alphaConfirm && NumConfirm && SpecCharConfirm) {
  GenwritePassword()
 } else if (alphaConfirm && NumConfirm) {
  AlphNumWritePassword()
 } else if (alphaConfirm && SpecCharConfirm) {
  AlphNumWritePassword()
 } else if (NumConfirm && SpecCharConfirm) {
  numSpecWritePassword()
 }

  

})



function generatePassword(passLength) {
  var passCriteria = AlphabetCriteria.concat(specialChar, number)
 var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * passCriteria.length)
    finalString += passCriteria[randoRes];
  }
    console.log(finalString)
  
 return finalString
  
}

// This function will return a random Letter and number
function generateAlphaNum(passLength) {

  var passCriteria = AlphabetCriteria.concat(number)
  var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * passCriteria.length)
    finalString += passCriteria[randoRes];
  }

  
 return finalString
 
}

// This will return a random charater from the AlphabetCriteria string
function generateAlphaSpec(passLength) {
  var passCriteria = AlphabetCriteria.concat(specialChar)
 var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * passCriteria.length)
    finalString += passCriteria[randoRes];
  }
    console.log(finalString)

  
 return finalString
}

// This will return a random special charater from the specialChar string
function generateSpecNum(passLength) {
  var passCriteria = number.concat(specialChar)
  var finalString = ''
   for (let i = 0; i < passLength;  i++) {
   
   var randoRes = Math.floor(Math.random() * passCriteria.length)
     finalString += passCriteria[randoRes];
   }
     console.log(finalString)

     
  return finalString
}




console.log(generatePassword())

// Write password to the #password input
function GenwritePassword() {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function AlphNumWritePassword() {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function AlpSpecWritePassword() {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function numSpecWritePassword() {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

  // var randoChar = Math.floor(Math.random() * AlphabetCriteria.length)
  // var randoNum = Math.floor(Math.random() * number.length)
  // var randoSpecChar = Math.floor(Math.random() * specialChar.length)

  // var resChar = AlphabetCriteria[randoChar]
  // var resNum = number[randoNum]
  // var resSpecChar = specialChar[randoSpecChar]

  // var result = resChar +  resNum + resSpecChar 