const createPassword = (length = 12 ) => {
    let password = "";

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789"
    const symbol = "!@#$%^&*()-_=+[]{}|;:,.<>?/~_";

    const allChars = upperCase + lowerCase + number + symbol; 

    password += upperCase [Math.floor(Math.random() * upperCase.length)];
    password += lowerCase [Math.floor(Math.random() * lowerCase.length)];
    password += number [Math.floor(Math.random() * number.length)];
    password += symbol [Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars [Math.floor(Math.random() * allChars.length)];
    }
   
   document.getElementById ("passwordBox").value = password; 
};

const copyPassword = () => {

    const passwordBox = document.getElementById ("passwordBox")

    if (passwordBox) {
        navigator.clipboard.writeText(passwordBox.value).then(()=>{
         console.log ("Password coppied to clipboard successfully!");
        }).catch((error)=> {
            console.error("Failed to copy password:", error); 
        });
    }
}; 