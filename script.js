let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0,1,2,3,4,5,6,7,8,9]
let specialCharacters = ['#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '!', '"'];

function generatePassword(){
  let builtArray =[]
  let randomGenerator = Math.floor(Math.random()*builtArray.length);
  if(confirm("Do you want your password to have lower case letters?")){
    builtArray = [...builtArray, ...lowerAlphabet]
  }
  
  if(confirm("Do you want your password to have upper case letters?")){
    builtArray = [...builtArray, ...upperAlphabet]
  }
  
  if(confirm("Do you want your password to have numbers?")){
    builtArray = [...builtArray, ...numbers]
  }
  
  if(confirm("Do you want your password to have special characters?")){
    builtArray = [...builtArray, ...specialCharacters]
  }
  

  let passwordLength = prompt("How many characters would like your password to have (must have at least 8 characters but no more than 128 characters?")
  let password= "";

  for (let i = 0; i < passwordLength; i++) {
    
    password+= builtArray[Math.floor(Math.random()*builtArray.length)];
    // need to make this random 1 value not full value
    
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

