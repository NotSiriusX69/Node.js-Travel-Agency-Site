const hideHamburger = document.querySelector('#hamburgerExit');
const showHamburger = document.querySelector('#hamburgerImg');

const HamburgerContainer = document.querySelector('#hamburgerContainer');
const smallestContainer = document.getElementById('smallestContainer');

const editDetails = document.getElementById('editDetails');
const cancelDetails = document.getElementById('cancelDetails');

const searchBtn = document.getElementById('searchBtn');
const bookFlightBtn = document.getElementById('bookFlightBtn');

const fromLocationInput = document.getElementById('fromLocation');
const toLocationInput = document.getElementById('toLocation');
const fromDateInput = document.getElementById('fromDate');
const toDateInput = document.getElementById('toDate');

const hourArrival = document.getElementById('hourArrival');
const hourDeparture = document.getElementById('hourDeparture');
const hourArrivalReturn = document.getElementById('hourArrivalReturn');
const hourDepartureReturn = document.getElementById('hourDepartureReturn');

const fromAirport = document.getElementById('fromAirport');
const toAirport = document.getElementById('toAirport');

showHamburger.addEventListener('click', (e) =>{
    HamburgerContainer.style.display = 'flex';
})

hideHamburger.addEventListener('click', (e) =>{
    HamburgerContainer.style.display = 'none';
})

editDetails.addEventListener('click', () => {
    smallestContainer.style.display = 'flex';
})

cancelDetails.addEventListener('click', () => {
    smallestContainer.style.display = 'none';
})

// bookFlightBtn.addEventListener('click', () => {
//     const endPoint = `/bookDetails/${bookFlightBtn.dataset.id}`;
//     console.log(endPoint);

//     const formData = {
//         from_airport: fromAirport.textContent,
//         to_airport: toAirport.textContent,
//         hour_arrival: hourArrival.textContent,
//         hour_departure: hourDeparture.textContent,
//         hour_arrival_return: hourArrivalReturn.textContent,
//         hour_departure_return: hourDepartureReturn.textContent,
//     }

//     fetch(endPoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())



// })

// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const formData = {
//         from_location: fromLocationInput.value,
//         to_location: toLocationInput.value,
//         from_date: fromDateInput.value,
//         to_date: toDateInput.value,
//     };

//     fetch('/bookFlight/filter', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             window.location.href = '/bookFlight/filter';
//         }else{
//             fromLocationInput.style.border = '2px solid red';
//         }
//     })
//     .catch(err => {
//         console.log('dom update', err);
//     });
// });