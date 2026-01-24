// Select elements
let submit = document.querySelector('.continue-btn button');
let emailInput = document.querySelector('input[type="email"]');
let passwordInput = document.querySelector('input[type="password"]');

// Create error message spans dynamically
let emailError = document.createElement('span');
emailError.style.color = "red";
emailError.style.fontSize = "12px";
emailInput.parentElement.appendChild(emailError);

let passwordError = document.createElement('span');
passwordError.style.color = "red";
passwordError.style.fontSize = "12px";
passwordInput.parentElement.appendChild(passwordError);

// Click event
submit.addEventListener('click', (e) => {
    e.preventDefault(); // prevent page reload if inside a form

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    // Clear previous error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email regex pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;

    // Validation logic
    let isValid = true;

    if(email === "") {
        emailError.textContent = "Please enter your email";
        isValid = false;
    } else if(!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if(password === "") {
        passwordError.textContent = "Please enter your password";
        isValid = false;
    }

    if(isValid) {
        alert("Form Submitted successfully!");
        // Here you can add real login logic or redirect
    }
});
