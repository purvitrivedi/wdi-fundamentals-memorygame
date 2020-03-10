
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

cards.sort(() => Math.random() - 0.5);

let gameBoard = document.getElementById('game-board');
let j = 0;

function createBoard() {
	while (j < 2){ 												//executes loop twice
	for (let i = 0; i < cards.length; i++) {
			let cardElement = document.createElement('img'); 	//creates a new img element
			cardElement.setAttribute('src', "images/back.png"); // assigns src of img back
			cardElement.setAttribute('data-id', i); 			// sets the array data-id
			gameBoard.appendChild(cardElement); 				//adds to div element
			cardElement.addEventListener('click', flipCard); 	//runs flipCard
			if(i === 3){										
				j++;

			}
		

			let resetButton = document.getElementsByTagName('button')[0];
			resetButton.addEventListener('click', function() {
				cardElement.setAttribute('src', "images/back.png");
				cardsInPlay.length = 0;
				cards.sort(() => Math.random() - 0.5);
			});
	}
}
	
}

const cardsInPlay = [];

function flipCard() {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].suit, cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	if(cardsInPlay.length === 4){
	checkForMatch();
}

}
const score = document.createElement('div');
score.setAttribute("class","score");
let gamesWon = 0;
const message = document.createElement('p');

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[2] && cardsInPlay[1] === cardsInPlay[3] ){
		message.textContent = "Well done! You found a match.";
		gameBoard.appendChild(message);
		gamesWon += 1;
		score.textContent = "Points Won: " + gamesWon;
		gameBoard.prepend(score);
	}
	else {
		message.textContent = "Not a match! Hit 'Reset' to play again";
		gameBoard.appendChild(message);
	}
}


createBoard();


//Make message appear before score
//fix double click on the same card
//automatically resets after 2 are selected
//randomise how cards load up






