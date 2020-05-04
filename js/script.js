//Declare certain constants for quiz

const question = document.querySelector('.question');
const  options = Array.from(document.getElementsByClassName('option'));
const nextBtn = document.getElementById('next');
const finish = document.getElementById('finish');
const scoreInfo = document.getElementById('score');
const questionCountInfo = document.getElementById('questionCount');


let liveQuestion = {};
let checkAnswer = false;
let score = 0;
let questionCount = 0;
let quizQuestion = [];

let questions = [
    {
        question: "Who played the lead role in the movie Scarface in 1983?",
        option1: "Robert De Nero",
        option2: "Jeanne-Claude Van Damme",
        option3: "Al Pacino",
        option4: "Jim Iyke",
        answer: 3
    },
    {
        question: "What is the nickname of the Belgian national football team?",
        option1: "The Diabolix",
        option2: "The Red Devils",
        option3: "The De Bruynes",
        option4: "The Reds",
        answer: 2
    },
    {
        question: "Which band had a number 1 hit with \"Barbie Girl\"?",
        option1: "Aqua",
        option2: "Gaia",
        option3: "Inferno",
        option4: "Fuuton",
        answer: 1
    },
    {
        question: "What is the name of the combination jutsu used by Tenzo and Naruto?",
        option1: "Gufuu Suika no Jutsu",
        option2: "Amaterasu",
        option3: "Doton, Chidou Kaku",
        option4: "Katon, Gouka Mekkyaku",
        answer: 1
    },
    {
        question: "How can a girl go 25 days without sleep?",
        option1: "It's impossible!",
        option2: "She is suffering Insomnia",
        option3: "She is scared of the dark",
        option4: "She sleeps at night",
        answer: 4
    }
];

const correctScore = 20;
const maxQuestions = questions.length;


startQuiz = () => {
    questionCount = 0;
    score = 0;
    quizQuestion = [...questions];
    nextQuestion();
}

nextQuestion = () => {
    questionCount++;
    questionCountInfo.innerText = `${questionCount}/${maxQuestions}`;

    const questionIndex = Math.floor(Math.random() * quizQuestion.length);
    liveQuestion = quizQuestion[questionIndex];
    question.innerText = liveQuestion.question;

    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = liveQuestion['option'+number];
    });

    quizQuestion.splice(questionIndex, 1);
    checkAnswer = true;
}

clickNext = () => {
    //let nextBtn = document.querySelector('.next-btn');
    if (quizQuestion.length === 0 || questionCount >= maxQuestions) {
        //let finish = document.getElementById('finish');
        finish.innerHTML = 'Finish';
        finish.classList.add('next-btn');
    } else {
        nextBtn.innerText = 'Next';
        nextBtn.classList.add('next-btn');
    }
    
    return;   
}

nextQstn = () => {
    nextQuestion();
    //let nextBtn = document.querySelector('.next-btn');
    nextBtn.innerHTML = '';
    nextBtn.classList.remove('next-btn');
    let removeCorrect = document.querySelector('.correct');
    let removeIncorrect = document.querySelector('.incorrect');
    if (removeCorrect) {
        removeCorrect.classList.remove('correct');
    } 
    if (removeIncorrect) {removeIncorrect.classList.remove('incorrect');
    }
}

finishQuiz = () => {
    //let finish = document.getElementById('finish')
    finish.addEventListener('click', window.location.assign('finish.html'));
}

options.forEach(option => {
    option.addEventListener('click', event => {
        if (!checkAnswer) return;
        checkAnswer = false;

        const chosenOption = event.target;
        const chosenAnswer = chosenOption.dataset['number'];
        
        if (chosenAnswer == liveQuestion.answer) {
            chosenOption.parentElement.classList.add('correct');
            setScore(correctScore);
            
        } else {
            chosenOption.parentElement.classList.add('incorrect');    
        }
        correctAns();
        clickNext();
    });
});

correctAns =()=>{
    options.forEach(option=>{
        let correct = option.dataset['number']
        if (correct == liveQuestion.answer) {
            option.parentElement.classList.add('correct');
            //console.log(option.parentElement.className);
        }
    })
}

setScore = numb => {
    score += numb;
    scoreInfo.innerText = score;
    localStorage.setItem('Score', score);
}

startQuiz();

