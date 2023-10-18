document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    const registerForm = document.getElementById("register-form");
    const registerMessage = document.getElementById("register-message");

    const accounts = {
        "123456": "1234" // Voorbeeld rekeningnummer en PIN
    };

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const pin = document.getElementById("pin").value;

        if (accounts[accountNumber] && accounts[accountNumber] === pin) {
            errorMessage.textContent = "Inloggen gelukt!";
            redirectToHomepage();
        } else {
            errorMessage.textContent = "Ongeldige inloggegevens. Probeer opnieuw.";
        }
    });

    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newAccountNumber = document.getElementById("new-account-number").value;
        const newPin = document.getElementById("new-pin").value;

        if (accounts[newAccountNumber]) {
            registerMessage.textContent = "Dit rekeningnummer bestaat al.";
        } else {
            accounts[newAccountNumber] = newPin;
            registerMessage.textContent = "Account aangemaakt! Probeer nu in te loggen.";
        }
    });

    function redirectToHomepage() {
        window.location.href = "homepage.html";
    }
});
