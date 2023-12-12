// From Main - Questions container
const questionsContainer_Main = document.querySelector('.questions-container');
const searchBtn_Main = document.getElementById('searchBtn');

const exitBtn_aboutUs = document.querySelector('.exit-button');
const warningContainer_aboutUs = document.querySelector('.warning-container');

const hideHamburger_aboutUs = document.getElementById('hamburgerExit');
const showHamburger_aboutUs = document.getElementById('hamburgerImg');
const HamburgerContainer_aboutUs = document.getElementById('hamburgerContainer');

showHamburger_aboutUs.addEventListener('click', (e) =>{
    HamburgerContainer_aboutUs.style.display = 'flex';
})

hideHamburger_aboutUs.addEventListener('click', (e) =>{
    HamburgerContainer_aboutUs.style.display = 'none';
})

exitBtn_aboutUs.addEventListener('click', (e) =>{
    warningContainer_aboutUs.style.display = 'none';
})