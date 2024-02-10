let playerScore = 0
let cpuScore = 0
let counter = 0
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const resultList = document.querySelector('#resultList')
const playerCounter = document.querySelector('#player')
const cpuCounter = document.querySelector('#cpu')

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3)
	return randomNumber == 0 ? 'Rock'
		: randomNumber == 1 ? 'Paper'
			: 'Scissors';
}

function resetGame() {
	playerScore = 0;
	cpuScore = 0;
	resultList.replaceChildren();
}

function updateScore(){
	cpuCounter.textContent = cpuScore;
	playerCounter.textContent = playerScore;
}

function ResultGameMsg(msg) {
	const item = document.createElement('li')
	const h2 = document.createElement('h2')
	item.appendChild(h2)
	h2.textContent = msg
	resultList.replaceChildren(item)
}

function getPlayerChoiceAndPlay() {
	counter ? 0 : resetGame();
	let playerChoice = this.id;
	let computerChoice = getComputerChoice();
	playRound(playerChoice, computerChoice);
	counter++
	updateScore()
	if (counter == 5) {
		playerScore > cpuScore ? ResultGameMsg('You won the game!')
			: playerScore < cpuScore ? ResultGameMsg('You lost the game')
				: ResultGameMsg('The game ended in tie');
		counter = 0;
	}
}

rockButton.addEventListener('click', getPlayerChoiceAndPlay);
paperButton.addEventListener('click', getPlayerChoiceAndPlay);
scissorsButton.addEventListener('click', getPlayerChoiceAndPlay);

function playRound(playerSelection, computerSelection) {
	let capPlayerSelection = capitalize(playerSelection)

	if (!(capPlayerSelection == 'Rock' || capPlayerSelection == 'Paper' || capPlayerSelection == 'Scissors')) {
		return 0;
	}

	if (capPlayerSelection == 'Rock') {
		if (computerSelection == 'Paper') {
			return msgLose(capPlayerSelection, computerSelection);
		} else if (computerSelection == 'Scissors') {
			return msgWin(capPlayerSelection, computerSelection);
		} else {
			return msgTie()
		}
	}

	if (capPlayerSelection == 'Paper') {
		if (computerSelection == 'Scissors') {
			return msgLose(capPlayerSelection, computerSelection);
		} else if (computerSelection == 'Rock') {
			return msgWin(capPlayerSelection, computerSelection);
		} else {
			return msgTie();
		}
	}

	if (capPlayerSelection == 'Scissors') {
		if (computerSelection == 'Rock') {
			return msgLose(capPlayerSelection, computerSelection);
		} else if (computerSelection == 'Paper') {
			return msgWin(capPlayerSelection, computerSelection);
		} else {
			return msgTie();
		}
	}
}

function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function msgLose(playerSelection, computerSelection) {
	cpuScore++
	const result = document.createElement('li');
	result.textContent = `You Lose! ${computerSelection} beast ${playerSelection}`;
	resultList.appendChild(result);
}

function msgWin(playerSelection, computerSelection) {
	playerScore++
	const result = document.createElement('li');
	result.textContent = `You Win! ${playerSelection} beast ${computerSelection}`
	resultList.appendChild(result)
}

function msgTie() {
	const result = document.createElement('li');
	result.textContent = 'Tie!'
	resultList.appendChild(result)
}
