const nameInput = document.getElementById('UsernameSignUp');
const emailInput = document.getElementById('EmailSignUp');
const passwordInput = document.getElementById('PasswordSignUp');

const showPass = document.getElementById('showPassSignUp');
const submitSignUp = document.querySelector('#submitSignUp')

const requirementBox = document.getElementById('requirementBox');

const require8Chars = document.getElementById('8Chars');
const require1Cap = document.getElementById('1Cap');
const require1Num = document.getElementById('1Num');
const require1SpecialChar = document.getElementById('1SpecialChar'); 
const require8CharsUserName = document.getElementById('8CharsUserName');

const wrongEmail = document.getElementById('wrongEmail');

// Events for Sign Up
passwordInput.addEventListener('input', (e) => {
    requirementBox.style.display = 'block';

    const uppercaseLetterPattern = /^(?=.*[A-Z])/;
    const numberPattern = /^(?=.*\d)/;
    const specialCharPattern = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/; 
    const minLengthPattern = /^.{8,}$/;

    let passwordIsValid = false;

    let password8Chars = false;
    let passwordCapital = false;
    let passwordNumbers = false;
    let passwordSpecialChar = false; 
    if (uppercaseLetterPattern.test(e.target.value)) {
        require1Cap.style.color = 'green';
        passwordCapital = true;
    } else {
        require1Cap.style.color = 'red';
    }
    if (numberPattern.test(e.target.value)) {
        require1Num.style.color = 'green';
        passwordNumbers = true;
    } else {
        require1Num.style.color = 'red';
    }
    if (specialCharPattern.test(e.target.value)) { 
        require1SpecialChar.style.color = 'green';
        passwordSpecialChar = true;
    } else {
        require1SpecialChar.style.color = 'red';
    }
    if (minLengthPattern.test(e.target.value)) {
        require8Chars.style.color = 'green';
        password8Chars = true;
    } else {
        require8Chars.style.color = 'red';
    }

    if (passwordNumbers && passwordCapital && password8Chars && passwordSpecialChar) { 
        passwordIsValid = true;
        requirementBox.style.display = 'none';
    }
    if (!passwordIsValid) {
        e.target.style.border = '2px solid red';
    }else{
        e.target.style.border = '2px solid green';
    }
});

nameInput.addEventListener('input', (e) => {    
    if(e.target.value.length < 8){
        e.target.style.border = '2px solid red';
        require8CharsUserName.style.display = 'inline';
    }else{
        e.target.style.border = '2px solid green';
        require8CharsUserName.style.display = 'none';
    }
})

showPass.addEventListener('click', () => {
    if (showPass.textContent === 'Show') {
        showPass.textContent = 'Hide';
    } else {
        showPass.textContent = 'Show';
    }
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
});

submitSignUp.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = {
        username: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data =>{
        if (emailInput.value.length === 0) {
            emailInput.style.border = '2px solid red';
        } else {
            emailInput.style.border = ''; 
        }
        
        if(data.email_already_signed){
            console.log(data.email_already_signed);
            wrongEmail.style.display = 'inline';
            emailInput.style.border = '2px solid red';
        }else{
            emailInput.style.border = '2px solid green';
            window.location.href = data.redirect;
        }
    })
    .catch(err =>{
        console.log('dom signup', err);
    })
})

