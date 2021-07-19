/* 
- Name your Classes with a Capital Letter
- Functions inside of Classes do not need to use the Function keyword
*/

// establish Card Class
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}


// establish Deck Class
class Deck {
    constructor() {
            this.cards = [];
        }
        // establis suits, ranks, and values for the cards in the deck
    createDeck() {
        let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }

    }
    shuffleDeck() {

    }
}

// create a Deck instance named 'd'
const d = new Deck();

d.createDeck(); // calling function to fill array
console.log(d.cards);

// establish Player Class -- this player cards is an empty array that we will create
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

// establish Board Class
class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }
}

// testing
let gameBoard = new Board();
gameBoard.start('Trelvyn', 'Isis');
console.log(gameBoard.players);



// Joker Constructor
let wildCard = new Card("The Joker's Wild!", "Joker", 100);

// testing 
// console.log(wildCard.suit);