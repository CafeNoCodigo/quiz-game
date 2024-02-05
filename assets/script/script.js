const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz');
const btnClose = document.querySelector('.btn-close');
const boxHidden = document.querySelector('.box-hidden');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active'); 
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    popupInfo.classList.remove('active');
    quizSection.classList.add('active');
    main.classList.remove('active');
    boxHidden.classList.add('active');

}

btnClose.onclick = () => {
    quizSection.classList.remove('active');
    boxHidden.classList.remove('active');
}