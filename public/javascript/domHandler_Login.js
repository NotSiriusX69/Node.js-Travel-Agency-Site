const emailInput = document.querySelector('#EmailLogIn');
const passwordInput = document.querySelector('#PasswordLogIn');

const showPass = document.getElementById('showPassLogIn');

const submitBtn = document.getElementById('submitLogIn');

const wrongEmailPassword = document.getElementById('WrongEmailPassword');

// Events for Login
passwordInput.addEventListener('input', (e) =>{
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    if(passwordPattern.test(e.target.value)){
        e.target.style.border = '';
    }else{
        e.target.style.border = '2px solid red';
    }
})

showPass.addEventListener('click', () =>{
    if(showPass.textContent === 'Show'){
        showPass.textContent = 'Hide'
    }else{
        showPass.textContent = 'Show'
    }
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
})

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    const formData = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data =>{
        if(data.invalid_credentials){
            console.log(data.invalid_credentials);
            wrongEmailPassword.style.display = 'inline';
            emailInput.style.border = '2px solid red';
            passwordInput.style.border = '2px solid red';
        }else{
            window.location.href = data.redirect;
        }
    })
    .catch(err =>{
        console.log('dom login', err);
    })
});

