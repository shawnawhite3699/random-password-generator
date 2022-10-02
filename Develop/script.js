// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var charUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var charNumeric = ['0','1','2','3','4','5','6','7','8','9'];
var charSpecial = ['~','`','!','@','#','$','$','%','^','&','*','(',')','[',']','{','}','?','/','|','=','+','-','_',';',':'];

// Write password to the #password input
window.onload = alert('Click "Generate Password" to begin.')

function writePassword() {
  var characters = [];
  var password = "";

// Set dynamic variables

    var Totlength = prompt("How many characters would you like in your password? You much choose between 8 and 128 characters.");

    if(Totlength < 8 || Totlength > 128){
        alert("You must choose between 8 and 128 characters.\nPlease start over.");
    }

// Confirm the rest of character conditions
    
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

        if(characters.length===0){
            alert("You must choose at least one character type to generate a password.\nPlease start over.");
        }

// Run for loop to use confirmed information and generate password as a result

else{
  for(var i=0; i<Totlength; i++){
      var random = Math.floor(Math.random() * characters.length);
      password += characters[random];
  }
}
}

// Display the result
document.getElementById("password").innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
