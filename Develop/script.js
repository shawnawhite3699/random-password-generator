// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9,'!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','_','`','{','}','|','~']

function writePassword() {
  var userPrompt = window.prompt("Click the 'Generate Password' button to produce your secure password.")
 // var index = Math.floor(Math.random() * characters.length)
  
  var password = generatePassword(Math.floor(Math.random() * characters.length));
  var passwordText = characters[password];
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
