// Global variable arrays for char, special char, numbers, 

var spChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '<', '>', '?', '{', '}'];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

// function that prompts for password criteria from user
// has conditional statements so the password passes standard
// Object that stores collected information from prompts

function grabPasswordCriteria() {
    // prompt password length in integer
    var length = parseInt(
        prompt('How many characters would you like in your password?')
    );
    // verify that the number selected is at least 8 characters
    // verify that the number selected is no more than 128 characters
    // refactor into switch statement after full build
    if (length < 8) {
        alert("Password must contain at least 8 characters.");
        return;
    } else if (length > 129) {
        alert("Password cannot contain more than 128 characters.");
        return;
    } else(isNaN(length) === true) {
        alert("Password length must be provided as a number.");
        return;
    }
    // Confirm yes/no for lowercase characters
    var hasLowercase = confirm(
        "Would you like your password to contain lowercase characters?"
    );
    // Confirm yes/no for uppercase characters
    var hasUppercase = confirm(
        "Would you like your password to contain uppercase characters?"
    );
    // Confirm yes/no for special characters
    var hasSpecial = confirm(
        "Would you like your password to contain special characters?"
    );
    // Confirm yes/no for numbers
    var hasNumber = confirm(
        "Would you like your password to contain numbers?"
    );
    // verify that the password has at least one character type
    if (
        hasLowercase === false && 
        hasUppercase === false && 
        hasSpecial === false && 
        hasNumber === false
    ) {
        alert("Password must contain at least one type of character.");
        return;
    };
    // create object that stores all information once password meets criteria
    var passwordCriteria = {
        length: length,
        hasLowercase: hasLowercase,
        hasUppercase: hasUppercase,
        hasSpecial: hasSpecial,
        hasNumber: hasNumber
    };
    // start generation of password
}