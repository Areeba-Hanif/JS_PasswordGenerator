
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_/";

const characters = document.getElementById("pass-length");
const Password_box = document.getElementById("PASSWORD");

const upperCheck = document.getElementById("Uppercase");
const lowerCheck = document.getElementById("Lowercase");
const numberCheck = document.getElementById("Numbers");
const symbolCheck = document.getElementById("Symbols");
const Copied = document.getElementById("copy");

const getRandomdata = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
    if (upperCheck.checked) {
        password += getRandomdata(upperSet);
    }

    if (lowerCheck.checked) {
        password += getRandomdata(lowerSet);
    }
    if (numberCheck.checked) {
        password += getRandomdata(numberSet);
    }
    if (symbolCheck.checked) {
        password += getRandomdata(symbolSet);
    }
    if (password.length <= characters.value) {
        return generatePassword(password);
    }
    if (characters.value > 30) {
        alert("ONLY 30 CHARACTERS ARE ALLOWED");
        return;
    }

    Password_box.innerText = truncateString(password, characters.value);
    navigator.clipboard.writeText(truncateString(password, characters.value));
    Copied.innerText = `Password copied to ClipBoard`;
    
};

document.getElementById("btn").addEventListener("click", function () {
    generatePassword();
});

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
