function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3)
	return randomNumber == 0 ? 'Rock'
		: randomNumber == 1 ? 'Paper'
			: 'Scissors';
}

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
			return 'Tie!'
		}
	}

	if (capPlayerSelection == 'Paper') {
		if (computerSelection == 'Scissors') {
			return msgLose(capPlayerSelection, computerSelection);
		} else if (computerSelection == 'Rock') {
			return msgWin(capPlayerSelection, computerSelection);
		} else {
			return 'Tie!';
		}
	}

	if (capPlayerSelection == 'Scissors') {
		if (computerSelection == 'Rock') {
			return msgLose(capPlayerSelection, computerSelection);
		} else if (computerSelection == 'Paper') {
			return msgWin(capPlayerSelection, computerSelection);
		} else {
			return 'Tie!';
		}
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt('Choice Rock, Paper or Scissors');
		let computerSelection = getComputerChoice();
		let result = playRound(playerSelection, computerSelection);

		result == 0 ? ( i-- && alert('Choose a valid option')) 
			: console.log(result);
	}
}

function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function msgLose(playerSelection, computerSelection) {
	return `You Lose! ${computerSelection} beast ${playerSelection}`;
}

function msgWin(playerSelection, computerSelection) {
	return `You Win! ${playerSelection} beast ${computerSelection}`;
}
