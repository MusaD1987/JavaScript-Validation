document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('validationForm');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });

    function validateForm() {
        let isValid = true;

        
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

     
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

       
        applyStyles(nameInput, nameError, isValid);
        applyStyles(emailInput, emailError, isValid);
        applyStyles(passwordInput, passwordError, isValid);

        return isValid;
    }

    function applyStyles(input, errorElement, isValid) {
        if (isValid) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            errorElement.style.display = 'none';
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            errorElement.style.display = 'block';
        }
    }

    
    form.addEventListener('input', function (event) {
        validateForm();
    });
});