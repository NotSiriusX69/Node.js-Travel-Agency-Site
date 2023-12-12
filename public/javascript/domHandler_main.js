// From Main - Questions container
const questionsContainer_Main = document.querySelector('.questions-container');
const searchBtn_Main = document.getElementById('searchBtn');

const exitBtn_Main = document.querySelector('.exit-button');
const warningContainer_Main = document.querySelector('.warning-container');

const hideHamburger = document.querySelector('#hamburgerExit');
const showHamburger = document.querySelector('#hamburgerImg');
const HamburgerContainer = document.querySelector('#hamburgerContainer');

//In Frequently asked questions
//Small animation when box is opened
questionsContainer_Main.addEventListener('click', (e) => {
    if (e.target.classList.contains('OpenClose')) {
        const clickedQuestion = e.target.closest('.question-container');
        const answerContainer = clickedQuestion.querySelector('.answer-container');
        const opened = answerContainer.style.display === 'block';

        // Toggle rotation for the clicked element
        e.target.style.transform = opened ? 'rotate(0deg)' : 'rotate(135deg)';

        // Toggle display for answerContainer
        answerContainer.style.display = opened ? 'none' : 'block';
    }
});

showHamburger.addEventListener('click', (e) =>{
    HamburgerContainer.style.display = 'flex';
})
hideHamburger.addEventListener('click', (e) =>{
    HamburgerContainer.style.display = 'none';
})

exitBtn_Main.addEventListener('click', () =>{
    warningContainer_Main.style.display = 'none';
})