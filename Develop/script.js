// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var uppercaseChars = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,OP,Q,R,S,T,U,V,W,X,Y,Z";
var numericChars = "0,1,2,3,4,5,6,7,8,9";
var specialChars = "!,@,#,$,%,^,&,*,(),_,+,-,=,[],{},|,;,:,.,<>,?,";

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Generate password based on selected criteria
function generatePassword() {
    var passwordLength = prompt("Pick a number from 8 to 128:");

    if (passwordLength < 8 || passwordLength > 128) {
        alert(
            "Invalid password length. Please enter a length between 8 and 128."
        );
        return "";
    }

    var includeLowercase = confirm("Would you like lowercase characters?");
    var includeUppercase = confirm("Would you like uppercase characters?");
    var includeNumeric = confirm("Would you numeric characters?");
    var includeSpecial = confirm("Would you like special characters?");
    var selectedTypes = [];

    if (includeLowercase) {
        selectedTypes.push("lowercase");
    }

    if (includeUppercase) {
        selectedTypes.push("uppercase");
    }

    if (includeNumeric) {
        selectedTypes.push("numeric");
    }

    if (includeSpecial) {
        selectedTypes.push("special");
    }

    if (selectedTypes.length === 0) {
        alert("Buddy, you need atleast one character thing!.");
        return "";
    }

    var chars = "";

    if (includeLowercase) {
        chars += lowercaseChars;
    }

    if (includeUppercase) {
        chars += uppercaseChars;
    }

    if (includeNumeric) {
        chars += numericChars;
    }

    if (includeSpecial) {
        chars += specialChars;
    }

    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
