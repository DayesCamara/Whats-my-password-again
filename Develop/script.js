// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseChars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var lowercaseChars = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var numbersChars = "0,1,2,3,4,5,6,7,8,9";
var specialChars = "!,@,#,$,%,&,*,^,?,(),{},++,<>,[],{],'{,";

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var passwordLength = prompt("Enter a good password that ranges from 8 to 128");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("The password didn't meet the required length between 8 and 128. Follow the rules, Buddy!")
        return '';
    }
    var includeLowercase = confirm('Add lowercase chracters? it adds more protection!')
    var includeUppercase = confirm("Add uppercase characters? studys show adding these improves proctection");
    var includeNumbers= confirm("Add numbers chracters to password?");
    var includeSpecial = confirm("Do you like to use specials chars in password?");

    
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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
