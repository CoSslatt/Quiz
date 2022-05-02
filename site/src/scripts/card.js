function cardTemplate(number, description, properlyAnswer) {
    this.number = number;
    this.description = description;
    this.properlyAnswer = properlyAnswer;
}

const card1 = new cardTemplate(0, "Is coca cola a big corporation?", 'yes');
const card2 = new cardTemplate(1, 'Did Elon Musk buy twitter?', 'yes');
const card3 = new cardTemplate(2, 'Did Elon Musk buy twitter for 34 bilion dollars?', 'no');
const card4 = new cardTemplate(3, 'Say yes', 'yes');

const allCards = new Array();

function pushCard(card){
    allCards.push(card);
}

pushCard(card1);
pushCard(card2);
pushCard(card3);
pushCard(card4);

export default allCards;
