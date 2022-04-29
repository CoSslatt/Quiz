const questionsContainer = document.querySelector('#questions-container');

const count = document.querySelector('.count');
const questionDesc = document.querySelector('.question-description');

const answerYes = document.querySelector('#answer-yes');
const answerNo = document.querySelector('#answer-no');

let points = 0;

import cards from './card.js';

function changeCard(index) {
    if (index >= cards.length) return;
    if (index < 0) return;

    count.innerText = cards[index].number;
    questionDesc.innerText = cards[index].description;
}

function nextCard() {
    let index = count.innerText;
    if (index >= cards.length - 1) return;

    questionsContainer.classList.add('next-card');

    setTimeout(() => {
        changeCard(++index);
    }, 200);

    setTimeout(() => {
        questionsContainer.classList.remove('next-card');
    }, 550);
}

function showPoints() {
    alert(`Congratulations! Your points: ${points}`);

    document.location.reload();
}

function checkAnswer(answer) {
    if (cards[count.innerText].properlyAnswer === answer)
        points++;

    if (count.innerText == cards.length - 1)
        showPoints();

    nextCard();
}

answerYes.addEventListener('click', e => {
    checkAnswer('yes');
});

answerNo.addEventListener('click', e => {
    checkAnswer('no');
});

// start card
changeCard(0);