const message = document.querySelector('.message');
const finalScore = document.querySelector('.final-score');

finalScore.innerHTML = localStorage.getItem('Score');

if (finalScore.innerHTML >= 80) {
    message.innerHTML = 'Kudos! You are quite knowledgable!'
} else if (finalScore.innerHTML < 80 && finalScore.innerHTML > 20) {
    message.innerHTML = 'You seem to know a couple of things!'
} else if (finalScore.innerHTML <= 20) {
    message.innerHTML = 'My friend go and sit down!'
}