console.log("Up and running!");

var cards = [
{
rank : "queen",
suit : "hearts",
cardImage : "images/queen-of-hearts.png"
},
{
rank : "queen",
suit : "diamonds",
cardImage : "images/queen-of-diamonds.png"
},
{
rank : "king",
suit : "hearts",
cardImage : "images/king-of-hearts.png"
},
{
rank : "king",
suit : "diamonds",
cardImage : "images/king-of-diamonds.png"
}
];

var score = 0;
var cardsInPlay = [];

var checkForMatch = function(){
	
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
		UpdateScore();
	}else{
		alert("Sorry, try again.");
	}

}

var flipCard = function(){
	
	if(cardsInPlay.length > 1)
	{
		resetCardsInPlay();
	}
var cardflip = this.getAttribute('data-id');
cardsInPlay.push(cards[cardflip].rank);
this.setAttribute('src',cards[cardflip].cardImage);

if(cardsInPlay.length === 2)
{
checkForMatch();
}
console.log('user flipped ' + cards[cardflip].rank);
console.log('image path ' + cards[cardflip].cardImage);
console.log('suit ' + cards[cardflip].suit);
}

var resetCardsInPlay = function(){
	var imgel = document.getElementsByTagName('img');
	for(var cnt = 0;cnt < imgel.length; cnt++)
	{
		imgel[cnt].setAttribute('src','images/back.png');
	}
	cardsInPlay = [];
}
var resetGame = function(){
	resetCardsInPlay();
	score = 0;
	document.getElementById('score').innerHTML = "";
}
var UpdateScore = function(){
	score += 10;
	document.getElementById('score').innerHTML = "Your total score is : <en>" + score + "</en>";
}
var createBoard = function(){
	for(var cnt = 0; cnt < cards.length; cnt++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',cnt);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	document.getElementsByTagName('button')[0].addEventListener('click',resetGame);
}

createBoard();
