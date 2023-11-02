var passwordInput = document.getElementById("password");
var confirmInput = document.getElementById("confirm-password");
var matchTxt = document.getElementById("password-match-txt");

passwordInput.onkeyup = validatePassword;
confirmInput.onkeyup = validatePassword;

function validatePassword() {
    if (passwordInput.value === confirmInput.value) {
        passwordInput.classList.remove("error");
        confirmInput.classList.remove("error");
        matchTxt.style.display = "none";
    } else {
        passwordInput.classList.add("error");
        confirmInput.classList.add("error");
        matchTxt.style.display = "block";
    }
}