console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function(){
	
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	}

}

var flipCard = function(cardId){
var cardflip = cards[cardId];
cardsInPlay.push(cardflip);

if(cardsInPlay.length === 2)
{
checkForMatch();
}
console.log('user flipped ' + cardflip);

}


flipCard(0);
flipCard(2);