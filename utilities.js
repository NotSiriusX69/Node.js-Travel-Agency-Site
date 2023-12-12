function generateUserId() {
    const generateRandomNumber = () => Math.floor(Math.random() * 10);
    const generateRandomAlphabetCharacter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

    let userId = '';

    for (let i = 0; i < 5; i++) {
        userId += generateRandomAlphabetCharacter();
        userId += generateRandomNumber();
    }

    return userId;
}

function generateBookingId() {
    const min = 10000; // Minimum 5-digit number (10000)
    const max = 99999; // Maximum 5-digit number (99999)

    // Generate a random number between min and max
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomId.toString(); // Convert to string to ensure it's exactly 5 digits
}

function parseStringToDate(str) {
    const [year, month, day ] = str.split('-');

    const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));

    return parsedDate;
}

function returnImagePath(airline_id){

    switch (airline_id) {
        case 1:
            return '/Images/logos/logo avicoBlue.png';
        case 2:
            return '/Images/logos/logo avicoBlue.png';
        case 3:
            return '/Images/logos/logo avicoBlue.png';
        case 4:
            return '/Images/logos/logo avicoBlue.png';
        case 5:
            return '/Images/airlines/Air_France_Logo.png';
        case 6:
            return '/Images/airlines/Emirates_logo.png';
        case 7:
            return '/Images/airlines/Qatar_Airlines_logo.png';
        case 8:
            return '/Images/logos/logo avicoBlue.png';
        case 9:
            return '/Images/logos/logo avicoBlue.png';
        case 10:
            return '/Images/logos/logo avicoBlue.png';
        case 11:
            return '/Images/airlines/Pegasus_Airlines_logo.png';
        case 12:
            return '/Images/airlines/turkish_airlines.png';
        case 13:
            return '/Images/logos/logo avicoBlue.png';
        case 14:
            return '/Images/logos/logo avicoBlue.png';
        case 15:
            return '/Images/logos/logo avicoBlue.png';
        case 16:
            return '/Images/logos/logo avicoBlue.png';
        case 17:
            return '/Images/airlines/airline_17.jpg';
        case 18:
            return '/Images/logos/logo avicoBlue.png';
        case 19:
            return '/Images/logos/logo avicoBlue.png';
        case 20:
            return '/Images/logos/logo avicoBlue.png';
        default:
            return '/Images/logos/logo avicoBlue.png';
    }
}

module.exports = {generateUserId , parseStringToDate, returnImagePath, generateBookingId};