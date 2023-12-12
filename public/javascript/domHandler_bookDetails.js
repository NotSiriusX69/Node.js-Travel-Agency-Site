const addHotelBtn = document.getElementById('addHotel');
const addHotelContainer = document.getElementById('addHotelContainer');
const noHotelContainer = document.getElementById('noBook');
const adjustTravelersContainer = document.getElementById('adjustContainer');
const outerTravelersContainer = document.querySelector('.inner.adjust-travelers-container');

const hotelList = document.querySelector('.choose-hotel-container');
const hotelPicked = document.getElementById('chosenHotel');
const hotelName = document.getElementById('chosenHotelName');
const hotelPrice = document.getElementById('chosenHotelPrice');
const hotelStars = document.getElementById('chosenHotelStars');

const changeHotelbtn = document.getElementById('changeHotel');

const adjustTravelersbtn = document.querySelector('.arrow-img');

const hideHamburger = document.querySelector('#hamburgerExit');
const showHamburger = document.querySelector('#hamburgerImg');
const HamburgerContainer = document.querySelector('#hamburgerContainer');

const adultsNb = document.querySelector('#adultsNb');
const childrenNb = document.querySelector('#childrenNb');
const infantsNb = document.querySelector('#infantsNb');
const chosenHotel = document.querySelector('#chosenHotel');
const hotelId = document.querySelector('#hotelId');
const flightId = document.querySelector('#flightId');
const ticketPrice = document.querySelector('#ticketPrice');

const submitBtn = document.querySelector('#submitBtn');

addHotelBtn.addEventListener('click', () =>{
    addHotelContainer.style.display = 'flex';
    noHotelContainer.style.display = 'none';
})

hotelList.addEventListener('click', (e) => {
    if (e.target.classList.contains('hotel-container')) {
        const name =  e.target.querySelector('.hotel-name').textContent;

        hotelStars.innerHTML = '';

        const starImages = e.target.querySelectorAll('img');
        let numberOfStars = starImages.length;
        
        for (let i = 0; i < numberOfStars; i++) {
            const starImage = document.createElement('img');
            starImage.src = '/Images/utility/star.png';
            starImage.alt = 'starPNG';
            hotelStars.appendChild(starImage);   
        }
        hotelStars.classList.add('stars-container');

        const price = e.target.querySelector('#Price').textContent;

        hotelName.textContent = name;
        hotelPrice.textContent = price;

        hotelPicked.style.display = 'flex';
        hotelList.style.display = 'none';
    }
});

changeHotelbtn.addEventListener('click', (e) =>{
    hotelPicked.style.display = 'none';
    hotelList.style.display = 'flex';
})

showHamburger.addEventListener('click', (e) =>{
    HamburgerContainer.style.display = 'flex';
})

hideHamburger.addEventListener('click', (e) =>{
    HamburgerContainer.style.display = 'none';
})

adjustTravelersbtn.addEventListener('click', (e) =>{
    if( adjustTravelersContainer.style.display === 'flex'){
        adjustTravelersbtn.style.transform  = 'rotate(0deg)';
        adjustTravelersContainer.style.display = 'none';
    }else{
        adjustTravelersbtn.style.transform  = 'rotate(180deg)';
        adjustTravelersContainer.style.display = 'flex';
    }
})

adjustTravelersContainer.addEventListener('click', (e) =>{

    let adultsNbOuter= document.querySelector('#Adults');
    let childrenNbOuter = document.querySelector('#Children');
    let infantsNbOuter = document.querySelector('#Infants');


    let nbAdultsInt = parseInt(adultsNb.textContent);
    let nbChildrenInt = parseInt(childrenNb.textContent);
    let nbInfantsInt = parseInt(infantsNb.textContent);

    if(e.target.id === 'addAdults'){
        nbAdultsInt++;
        adultsNb.textContent = nbAdultsInt;
        adultsNbOuter.textContent = nbAdultsInt;
    }else if(e.target.id === 'removeAdults'){

        if(nbAdultsInt === 1 ){
            adultsNb.textContent = 1;
        }else{
            nbAdultsInt--;
            adultsNb.textContent = nbAdultsInt;
            adultsNbOuter.textContent = nbAdultsInt;
        }
    }

    if(e.target.id === 'addChildren'){
        nbChildrenInt++;
        childrenNb.textContent = nbChildrenInt;
        childrenNbOuter.textContent = nbChildrenInt
    }else if(e.target.id === 'removeChildren'){
        
        if(nbChildrenInt === 0 ){
            childrenNb.textContent = 0;
        }else{
            nbChildrenInt--;
            childrenNb.textContent = nbChildrenInt;
            childrenNbOuter.textContent = nbChildrenInt;
        }
    }

        if(e.target.id === 'addInfants'){
        nbInfantsInt++;
        infantsNb.textContent = nbInfantsInt;
        infantsNbOuter.textContent = nbInfantsInt
    }else if(e.target.id === 'removeInfants'){
        
        if(nbInfantsInt === 0 ){
            infantsNb.textContent = 0;
        }else{
            nbInfantsInt--;
            infantsNb.textContent = nbInfantsInt;
            infantsNbOuter.textContent = nbInfantsInt;
        }
    }
})


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let totalNbOfTravelers = parseInt(adultsNb.textContent) +
    parseInt(childrenNb.textContent) + parseInt(infantsNb.textContent);

    let totalPriceHotel = totalNbOfTravelers * parseFloat(chosenHotel.textContent.replace('$',''));
    let totalPrice = parseFloat((totalNbOfTravelers * parseFloat(ticketPrice.textContent.replace('$',''))) + totalPriceHotel);


    const data = {
        adults_nb: parseInt(adultsNb.textContent),
        children_nb: parseInt(childrenNb.textContent),
        infants_nb: parseInt(infantsNb.textContent),
        hotel_name: hotelName.textContent,
        flight_id: parseInt(flightId.textContent.replace('Flight ID:', '')),
        total_price: totalPrice,
    };

    // Use Fetch API or another method to send data to the server
    fetch('/account/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = data.redirect;
    })
});

