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
    } else if (isNaN(length) === true) {
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
    // return criteria
    return passwordCriteria;
}

// Get random functions
function getRandom(arr) {
    // pick a random index from the array length
    var randomIndex = Math.floor(Math.random() * arr.length);
    // grab the character from that index position
    var randomChar = arr[randomIndex];
    // return the character
    return randomChar;
}

// Generate password function
function generatePassword() {
    // pull in gathered criteria for password
    var criteria = grabPasswordCriteria();
    // store resulted password
    var result = [];
    // store the possible types of character arrays to include
    var possibleChars = [];
    // store array that guaranteed to contain at least one of each type of needed character
    var guaranteedChars = [];

    // Conditional statement that adds the character arrays to be used into possibleChars
    // And adds a guaranteed criteria character to the appropriate array

    // for lowercase characters
    if (criteria.hasLowercase) {
        possibleChars = possibleChars.concat(lowerChar);
        guaranteedChars.push(getRandom(lowerChar));
    }
    // for uppercase characters
    if (criteria.hasUppercase) {
        possibleChars = possibleChars.concat(upperChar);
        guaranteedChars.push(getRandom(upperChar));
    }
    // for special characters
    if (criteria.hasSpecial) {
        possibleChars = possibleChars.concat(spChar);
        guaranteedChars.push(getRandom(spChar));
    }
    // for numeric characters
    if (criteria.hasNumber) {
        possibleChars = possibleChars.concat(numbers);
        guaranteedChars.push(getRandom(numbers));
    }

    // create password the length of the criteria using specified options
    for(var i = 0; i < criteria.length; i++){
        var char = getRandom(possibleChars);
        // result.push(getRandom(possibleChars));
        result.push(char);
    }

    // add in guaranteed characters 
}