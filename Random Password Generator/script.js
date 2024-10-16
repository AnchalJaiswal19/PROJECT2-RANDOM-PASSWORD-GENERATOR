const passwordBox = document.getElementById("password");
const length = 12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$^";

let currentColor = "#9DA9A0";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(buttonElement){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    
    while(password.length<5){
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    }
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;

    if (currentColor === "#9DA9A0") {  
        currentColor = "#B26E63";      
    } else {
        currentColor = "#9DA9A0";      
    }
    
    
    buttonElement.style.backgroundColor = currentColor;
}




function copyPassword(){
   passwordBox.select();
   document.execCommand("copy");
}


//&*()_~|}{></-=