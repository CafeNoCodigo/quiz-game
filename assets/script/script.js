const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz');
const btnClose = document.querySelector('.btn-close');
const boxHidden = document.querySelector('.box-hidden');
const sobreBtn = document.querySelector('.sobre-section');
const sectionSobre = document.querySelector('.sobre');
const homeBtn = document.querySelector('.home-section');
const quizBox = document.querySelector('.box');
const nextBtn = document.querySelector('.btn-next');
const optionList = document.querySelector('.option-list');

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
    quizBox.classList.add('active');
    btnClose.classList.add('active');
    nextBtn.classList.remove('desative');
    
    showQuestion(0);
}

btnClose.onclick = () => {
    quizSection.classList.remove('active');
    boxHidden.classList.remove('active');
    quizBox.classList.remove('active');
    btnClose.classList.remove('active');
    questionCount = 0;
}

sobreBtn.onclick = () => {
    sectionSobre.classList.add('active');
    sobreBtn.classList.add('active');
    homeBtn.classList.remove('active');
}

homeBtn.onclick = () => {
    sectionSobre.classList.remove('active');
    sobreBtn.classList.remove('active');
    homeBtn.classList.add('active');
}

var questionCount = 0;

nextBtn.onclick = () => {
    questionCount++;
    if(questionCount <= questions.length - 1){
        showQuestion(questionCount);
    }else{
        nextBtn.classList.add('desative');
        alert('NÍVEL TERMINADO');
    }
    
    optionList.classList.remove('answerUser');
    
}

//Recebe o numero da questão através de um array e mostra essa questão
function showQuestion(index){
    const questionTxt = document.querySelector('.question-txt');

    questionTxt.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<p class="option">${questions[index].options[0]}</p>
                     <p class="option">${questions[index].options[1]}</p>
                     <p class="option">${questions[index].options[2]}</p>
                     <p class="option">${questions[index].options[3]}</p>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    if(userAnswer == correctAnswer){
        optionList.classList.add('answerUser');
        answer.classList.add('correct');
    }else{
        optionList.classList.add('answerUser');
        // answer.classList.add('correct');
        // userAnswer.id = "wrong";
    }
}
