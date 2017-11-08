var paper = document.getElementById('paper'),  
	rock = document.getElementById('rock'),
	scissor = document.getElementById('scissor'),
	engineArea = document.getElementById('engineArea'),
	alertArea = document.getElementById('alertArea'),
	playerScoreName = document.getElementById('playerScoreName'),
	gameEngine = document.getElementById('gameEngine'),
	playerScore = document.getElementById('playerScore'),
	computerScore = document.getElementById('computerScore'),
	playerPoints = 0,
	compPionts = 0;

// This function is used to check the content of the field with the player name.
function checkName(Name) {
	Name = document.getElementById('playerName').value;
	if (Name == 0) {
		return false;
	}
	else {
		return true;
	}
}

// This listener is used to turn on more features that support the game.
playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', function(e) {
	if (checkName()==true) {	
		setElementPosition();
		playerSeclectOption();
	}
	else {
		alertArea.innerHTML = '<h1>No name entered !</h1>';
	}
});

// This input key supports the "enter" key, which is used to enable additional functions that support the game.
function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if (e.which == 13) {
       	if (checkName()==true) {	
			setElementPosition();
			playerSeclectOption();
		}
		else {
			alertArea.innerHTML = '<h1>No name entered !</h1>';
		}
    }
}

//This function set the element position on the site.
function setElementPosition() {
	document.getElementById('log').classList += (' log__hide');
	alertArea.innerHTML = '';
	playerScoreName.innerHTML = '<h2>'+ document.getElementById('playerName').value + ' Score</h2>';
	gameEngine.classList.toggle('toggle');
	playerScore.classList.toggle('toggle');
	computerScore.classList.toggle('toggle');
}

//This function randomly selects the computer and passes the results to "playerSeclectOption" function.
function compSelectOption() {
	var possiblePicks = [paper, rock, scissor];
	var compPics = possiblePicks[Math.floor(Math.random() * possiblePicks.length)];
	document.getElementById('computerChoice').innerHTML = '<p>Computer choice</p>' + compPics.outerHTML;
	return compPics;
}

// This function Gets the player's choice and compares it to the computer's 
// selections and sets the results and passes them to the "checkResult" function.
function playerSeclectOption() {
	var playerResult = document.getElementById('playerResult'),
		compResult = document.getElementById('compResult');
	paper.addEventListener('click', function(e) {
		document.getElementById('playerChoice').innerHTML = '<p>Player choice</p>' + paper.outerHTML;
		var compChoice = compSelectOption();
		if (compChoice == paper) {}
		else if (compChoice == scissor) {
			compPionts ++;
			compResult.innerHTML = '<p>' + compPionts + '</p>';
		}
		else if (compChoice == rock) {
			playerPoints ++;
			playerResult.innerHTML = '<p>' + playerPoints + '</p>';
		}
		checkResult();
	});
	rock.addEventListener('click', function(e) {
		document.getElementById('playerChoice').innerHTML = '<p>Player choice</p>' + rock.outerHTML;
		var compChoice = compSelectOption ();
		if (compChoice == rock) {}
		else if (compChoice == scissor) {
			playerPoints ++;
			playerResult.innerHTML = '<p>' + playerPoints + '</p>';
		}
		else if (compChoice == paper) {
			compPionts ++;
			compResult.innerHTML = '<p>' + compPionts + '</p>';
		}
		checkResult();
	});
	scissor.addEventListener('click', function(e) {	
		document.getElementById('playerChoice').innerHTML = '<p>Player choice</p>' + scissor.outerHTML;
		var compChoice = compSelectOption ();
		if (compChoice == scissor) {}
		else if (compChoice == paper) {
			playerPoints ++;
			playerResult.innerHTML = '<p>' + playerPoints + '</p>';
		}
		else if (compChoice == rock) {
			compPionts ++;
			compResult.innerHTML = '<p>' + compPionts + '</p>';
		}
		checkResult();
	});
}

// This function check the results and turn on "exit" function when one condition is true.
function checkResult() {
	if (playerPoints == 10) {
		document.getElementById('ctrlBtn').outerHTML = '<h2>You win !!</h2>';
		exit();
	}
	else if (compPionts == 10) {
		document.getElementById('ctrlBtn').outerHTML = '<h2>You lose !!</h2>';
		exit();
	}
}
// This function turns off selected items on the page and refreshes the page. 
function exit() {
	setTimeout(function(){
		gameEngine.classList += (' toggle');
		playerScore.classList += (' toggle');
		computerScore.classList += (' toggle');
	}, 2500);
	setTimeout(function(){
		window.location.reload(1);
	}, 6000);
}
