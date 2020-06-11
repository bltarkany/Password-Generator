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
        prompt('How many characters would you like in yu password?')
    );
    // Confirm yes/no for lowercase characters
    
    // Confirm yes/no for uppercase characters

    // Confirm yes/no for special characters

    // Confirm yes/no for numbers
}