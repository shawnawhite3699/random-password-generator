// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for each character type
var charLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var charUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var charNumeric = ['0','1','2','3','4','5','6','7','8','9'];
var charSpecial = ['~','`','!','@','#','$','$','%','^','&','*','(',')','[',']','{','}','?','/','|','=','+','-','_',';',':'];

// Write password to the #password input
// Message explaining what to do upon hitting landing page
window.onload = alert('Click "Generate Password" to begin.')

//Main function to generate random password based on selected criteria
function writePassword() {
  // Empty array to store user choices
  var characters = [];
  // Variable to produce password based on user choices
  var password = "";

//Prompt and validation for character length
    var Totlength = prompt("How many characters would you like in your password? You much choose between 8 and 128 characters.");

    if(Totlength < 8 || Totlength > 128){
        alert("You must choose between 8 and 128 characters.\nPlease start over.");
    }

// Confirm command to request inclusion of all other character types
    else{
        if(confirm("If you would like to include lower case letters in your password, click OK. Otherwise, click Cancel.")){
            Array.prototype.push.apply(characters, charLowercase);
        }

        if(confirm("If you would like to include upper case letters in your password, click OK. Otherwise, click Cancel.")){
            Array.prototype.push.apply(characters, charUppercase);
        }

        if(confirm("If you would like to include numbers in your password, click OK. Otherwise, click Cancel.")){
            Array.prototype.push.apply(characters, charNumeric);
        }

        if(confirm("If you would like to include special characters/symbols in your password, click OK. Otherwise, click Cancel.")){
            Array.prototype.push.apply(characters, charSpecial);
        }
//Validation to ensure at least 1 character type selected
        if(characters.length===0){
            alert("You must choose at least one character type to generate a password.\nPlease start over.");
        }

// For loop to use confirmed choices and generate password containing choices; rounds to whole numbers and generates random characters
else{
  for(var i=0; i<Totlength; i++){
      var random = Math.floor(Math.random() * characters.length);
      password += characters[random];
  }
}
}

// Displays resulting random password on page
document.getElementById("password").innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
