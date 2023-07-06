// Assignment code here

var AlphabetCriteria = 'abcdefghijklmnopqrstuvwxyz';
var specialChar = "!@#$%^&*()-_+=[{]}\|;:',<.>/?"
var number = "0123456789"
var passLength 

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', function() {
  passLength = Number(window.prompt("How long would you like the password to be?"))
  var alphaConfirm = window.confirm("Would you like capital letters?")
  var NumConfirm = window.confirm("Would you like to use numbers?")
  var SpecCharConfirm = window.confirm("Would you like to use special characters?")


 if (alphaConfirm && NumConfirm && SpecCharConfirm) {// -----------------------------------------------------------------------------------------------
  GenwritePassword()
 } else if (alphaConfirm && NumConfirm) {
  AlphNumWritePassword()
 } else if (alphaConfirm && SpecCharConfirm) {
  AlphNumWritePassword()
 } else if (NumConfirm && SpecCharConfirm) {
  numSpecWritePassword()
 }else if (alphaConfirm){ 
  capitalsWritePassword()
 }else if (NumConfirm) {
  numsWritePassword()
 } else {
  SpecCharWritePassword()
 }

})


// -----------------------------------------------------------------------------------------------


// This function generates password will all criteria true
function generatePassword(passLength) {
  var upperCase = AlphabetCriteria.toUpperCase()
  var passCriteria = upperCase.concat(specialChar, number)
 var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * passCriteria.length)
    finalString += passCriteria[randoRes];
  }
    console.log(finalString)
  
 return finalString
  
}

// This function generates a passsword if Capital letters and numbers are true
function generateAlphaNum(passLength) {
  var upperCase = AlphabetCriteria.toUpperCase()
  var passCriteria = upperCase.concat(number)
  var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * passCriteria.length)
    finalString += passCriteria[randoRes];
  }

  
 return finalString
 
}

// This function generates a passsword if Capital letters and special characters are true
function generateAlphaSpec(passLength) {
  var upperCase = AlphabetCriteria.toUpperCase()
  var passCriteria = upperCase.concat(specialChar)
 var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * passCriteria.length)
    finalString += passCriteria[randoRes];
  }
    console.log(finalString)

  
 return finalString
}

// This function generates a passsword if Special characters and numbers are true
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

// This function generates a passsword if just capitals is true
function capitalsGen(passLength) {
  var upperCase = AlphabetCriteria.toUpperCase()
  var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * upperCase.length)
    finalString += upperCase[randoRes];
  }
    console.log(finalString)
  
 return finalString
  
}

// This function generates a passsword if just numbers is true
function numbersGen(passLength) {
  var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * number.length)
    finalString += number[randoRes];
  }
    console.log(finalString)
  
 return finalString
  
}

// This function generates a passsword if just special charcters is true
function specCharGen(passLength) {
  var finalString = ''
  for (let i = 0; i < passLength;  i++) {
  
  var randoRes = Math.floor(Math.random() * specialChar.length)
    finalString += specialChar[randoRes];
  }
    console.log(finalString)
  
 return finalString
  
}


// -----------------------------------------------------------------------------------------------



// All of these functions display there respective function to the web-page
function GenwritePassword() {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function AlphNumWritePassword() {
  var password = generateAlphaNum(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function AlpSpecWritePassword() {
  var password = generateAlphaSpec(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function numSpecWritePassword() {
  var password = generateSpecNum(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function capitalsWritePassword() {
  var password = capitalsGen(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function numsWritePassword() {
  var password = numbersGen(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function SpecCharWritePassword() {
  var password = specCharGen(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 

// -----------------------------------------------------------------------------------------------

