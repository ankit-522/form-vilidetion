let myform = document.getElementById('myform');
let emailErr = document.getElementById('emailHelp');
let  passwordErr = document.getElementById('PasswordHelp');

console.log(emailErr , "Please");
console.log(myform , "please enter your")
console.log(passwordErr , "Please");

// passwordErr.innerHTML = "Please enter your password";

myform.addEventListener('submit', (e)=>{

    e.preventDefault();
    let email = e.target[0].value;
    console.log(email);
    let password = e.target[1].value;
    console.log(password);        

    let hasuppercase = false;
    let lowcase = false;
    
    for(let i = 0; i < password.length; i++) {
        
        let upcase = password.charCodeAt(i)
       

        if(upcase >= 65 && upcase <= 90)
            {
            hasuppercase = true;
            }
             
            else if(upcase >= 97 && upcase <= 122){
                lowcase = true;
            }
};

if(password.length < 8){
    passwordErr.innerHTML = "Please enter minimum 8 characters in password";
}

else if(!hasuppercase){
    passwordErr.innerHTML = "At list one character in uppercase "
}

else if(!lowcase){
    passwordErr.innerHTML = "At list one character in lowcase "
}
else {
   passwordErr.innerHTML = " ok";
}
});