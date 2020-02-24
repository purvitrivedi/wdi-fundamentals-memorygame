
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
const cardsInPlay = [];
let gameBoard = document.getElementById('game-board');

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
			let cardElement = document.createElement('img'); //creates a new img element
			cardElement.setAttribute('src', "images/back.png"); // assings src of img back
			cardElement.setAttribute('data-id', i); // sets the array data-id
			cardElement.addEventListener('click', flipCard); //runs flipCard
			gameBoard.appendChild(cardElement); //adds to div element
			console.log(i);

			let resetButton = document.getElementsByTagName('button')[0];
			resetButton.addEventListener('click', function() {
				cardElement.setAttribute('src', "images/back.png");
				cardsInPlay.length = 0;
			});
	}

	
}

function flipCard() {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
	checkForMatch();
}

}
const score = document.createElement('p');
let gamesWon = 0;
const message = document.createElement('p');

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]){
		message.textContent = "You found a match!";
		gameBoard.appendChild(message);
		gamesWon += 1;
		score.textContent = "Points Won: " + gamesWon;
		gameBoard.appendChild(score);

	}
	else {
		message.textContent = "Sorry! Try again";
		gameBoard.appendChild(message);
	}
}

createBoard();

//fix double click on the same card
//randomise cards
//adds a new card everytime user wins





