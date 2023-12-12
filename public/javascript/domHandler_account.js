const tableAccount = document.getElementById('accountTable');

const accountSettingsText = document.querySelector('.accountSettingsText');
const accountBookingText = document.querySelector('.accountBookingsText');
const paymentManagementText = document.querySelector('.accountPaymentsText');
const securityText = document.querySelector('.accountSecurityText');

const accountContainer = document.querySelector('.account-details.account-settings');
const bookingsContainer = document.querySelector('.account-details.bookings-details');
const paymentContainer = document.querySelector('.account-details.payment-details');
const securityContainer = document.querySelector('.account-details.security-details');

const hideHamburger_main = document.querySelector('#hamburgerExit');
const showHamburger_main = document.querySelector('#hamburgerImg');
const HamburgerContainer_main = document.querySelector('#hamburgerContainer');

const accountUpdatedText = document.querySelector('#updatedText');
const accountFailedText = document.querySelector('#failedText');

const accountPasswordUpdatedText = document.querySelector('.password-updated');
const accountPasswordFailedText = document.querySelector('.password-failed');
const accountPasswordSameFailedText = document.querySelector('.password-failed-same');

const submitUpdateBtn = document.querySelector('#updateDetails');
const submitPasswordUpdateBtn = document.querySelector('#submitPasswordDetails');

const nameInput = document.getElementById('userName');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('Email');

const require8Chars = document.getElementById('8Chars');
const require1Cap = document.getElementById('1Cap');
const require1Num = document.getElementById('1Num');
const require1SpecialChar = document.getElementById('1SpecialChar'); 
const require8CharsUserName = document.getElementById('8CharsUserName');

const oldPasswordInput = document.getElementById('oldPassword');
const newPasswordInput = document.getElementById('newPassword');

const editDetails = document.getElementById('editDetails');
const bookingIdText = document.getElementById('bookingIdText');
const cancelBookingBtn = document.getElementById('cancelBookingBtn');

accountSettingsText.addEventListener('click', (e) => {

    // Change current Text
    accountSettingsText.style.color = '#000';
    accountSettingsText.style.background = '#E4E4E4';

    // Reset other Texts
    accountBookingText.style.color = 'rgba(25, 25, 25, 0.55)';
    accountBookingText.style.background = '#FFF';

    paymentManagementText.style.color = 'rgba(25, 25, 25, 0.55)';
    paymentManagementText.style.background = '#FFF';

    securityText.style.color = 'rgba(25, 25, 25, 0.55)';
    securityText.style.background = '#FFF';

    bookingsContainer.style.display = 'none';
    paymentContainer.style.display = 'none';
    securityContainer.style.display = 'none';

    accountContainer.style.display = 'flex';
});
accountBookingText.addEventListener('click', (e) => {

    // Change current Text
    accountBookingText.style.color = '#000';
    accountBookingText.style.background = '#E4E4E4';

    // Reset other Texts
    accountSettingsText.style.color = 'rgba(25, 25, 25, 0.55)';
    accountSettingsText.style.background = '#FFF';

    paymentManagementText.style.color = 'rgba(25, 25, 25, 0.55)';
    paymentManagementText.style.background = '#FFF';

    securityText.style.color = 'rgba(25, 25, 25, 0.55)';
    securityText.style.background = '#FFF';

    accountContainer.style.display = 'none';
    paymentContainer.style.display = 'none';
    securityContainer.style.display = 'none';

    bookingsContainer.style.display = 'flex';
});
paymentManagementText.addEventListener('click', (e) => {

    // Change current Text
    paymentManagementText.style.color = '#000';
    paymentManagementText.style.background = '#E4E4E4';

    // Reset other Texts
    accountSettingsText.style.color = 'rgba(25, 25, 25, 0.55)';
    accountSettingsText.style.background = '#FFF';
    
    accountBookingText.style.color = 'rgba(25, 25, 25, 0.55)';
    accountBookingText.style.background = '#FFF';

    securityText.style.color = 'rgba(25, 25, 25, 0.55)';
    securityText.style.background = '#FFF';

    accountContainer.style.display = 'none';
    bookingsContainer.style.display = 'none';
    securityContainer.style.display = 'none';

    paymentContainer.style.display = 'flex';
});
securityText.addEventListener('click', (e) => {

    // Change current Text
    securityText.style.color = '#000';
    securityText.style.background = '#E4E4E4';

    // Reset other Texts
    accountSettingsText.style.color = 'rgba(25, 25, 25, 0.55)';
    accountSettingsText.style.background = '#FFF';
    
    accountBookingText.style.color = 'rgba(25, 25, 25, 0.55)';
    accountBookingText.style.background = '#FFF';

    paymentManagementText.style.color = 'rgba(25, 25, 25, 0.55)';
    paymentManagementText.style.background = '#FFF';

    accountContainer.style.display = 'none';
    paymentContainer.style.display = 'none';
    bookingsContainer.style.display = 'none';

    securityContainer.style.display = 'flex';
});
showHamburger_main.addEventListener('click', (e) =>{
    HamburgerContainer_main.style.display = 'flex';
})
hideHamburger_main.addEventListener('click', (e) =>{
    HamburgerContainer_main.style.display = 'none';
})
newPasswordInput.addEventListener('input', (e) => {
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
cancelBookingBtn.addEventListener('click', (e) =>{
    const bookingContainer = document.getElementById('bookingContainer');
    
    if (bookingContainer) {
        // Remove the booking container
        bookingContainer.remove();
    } else {
        console.error(`Booking container with ID ${bookingId} not found.`);
    }
});
submitUpdateBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    const formData = {
        username: nameInput.value,
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        email: emailInput.value,
    };

    console.log(formData);

    fetch('/account/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data =>{
        if(data.success){
            accountUpdatedText.style.display = 'block';
        }else{
            accountUpdatedText.style.display = 'none';
            accountFailedText.style.display = 'block';
        }
    })
    .catch(err =>{
        console.log('dom update', err);
    })

}); 
submitPasswordUpdateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newPassword = newPasswordInput.value;

    const uppercaseLetterPattern = /^(?=.*[A-Z])/;
    const numberPattern = /^(?=.*\d)/;
    const specialCharPattern = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/;
    const minLengthPattern = /^.{8,}$/;

    const isUppercaseLetter = uppercaseLetterPattern.test(newPassword);
    const hasNumber = numberPattern.test(newPassword);
    const hasSpecialChar = specialCharPattern.test(newPassword);
    const meetsMinLength = minLengthPattern.test(newPassword);

    console.log({
        isUppercaseLetter,
        hasNumber,
        hasSpecialChar,
        meetsMinLength,
    });

    if (isUppercaseLetter && hasNumber && hasSpecialChar && meetsMinLength) {
        // Password meets all criteria
        fetch('/account/update/password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: newPassword }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                accountPasswordUpdatedText.style.display = 'block';
            } else if (data.password_same) {
                accountPasswordUpdatedText.style.display = 'none';
                accountPasswordFailedText.style.display = 'none';
                accountPasswordSameFailedText.style.display = 'block';
            }else{
                accountPasswordUpdatedText.style.display = 'none';
                accountPasswordFailedText.style.display = 'none';
                accountPasswordSameFailedText.style.display = 'block';
            }
        })
        .catch(err => {
            console.log('dom update', err);
        });
    } else {
        // Password does not meet criteria
        accountPasswordUpdatedText.style.display = 'none';
        accountPasswordFailedText.style.display = 'block';
        accountPasswordSameFailedText.style.display = 'none';
    }
});
editDetails.addEventListener('click', (e) =>{
    e.preventDefault();

    const formData = {
        booking_id: parseInt(bookingIdText.textContent),
    };

    fetch('/bookDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })

}); 
