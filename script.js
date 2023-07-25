var generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0,1,2,3,4,5,6,7,8,9]
let specialCharacters = ['#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '!', '"'];

// let passwordLength = "";
// let generatePassword = []

function generatePassword(){
  
  if(confirm("Do you want your password to have lower case letters?")){
  
  }
  
  if(confirm("Do you want your password to have upper case letters?")){
    
  }
  
  if(confirm("Do you want your password to have numbers?")){
    
  }
  
  if(confirm("Do you want your password to have special characters?")){
    
  }
  

  let password= ""; 


  let passwordLength = prompt("How many characters would like your password to have (must have at least 8 characters but no more than 128 characters?")
  for (let i = 0; i < passwordLength; i++) {
    
    password+= "x";
    
  }

return password;
}


let passwordText = document.querySelector("#password")

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

