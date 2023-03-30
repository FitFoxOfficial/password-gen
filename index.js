const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c",
    "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let firstPassword = document.getElementById("first-password-el")
let secondPassword = document.getElementById("second-password-el")
let useSpecialCharacters = true
let length = 15
let password = []

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return randomCharacter
}

function renderPass() {
let password1 = ""
let password2 = ""

    for (i = 0; i < length; i++) {
        let randomPass1 = getRandomCharacter()
        let randomPass2 = getRandomCharacter()

        password1 += characters[randomPass1]
        firstPassword.textContent = password1

        password2 += characters[randomPass2]
        secondPassword.textContent = password2

    }

}