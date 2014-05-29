var rightAnswerId = -1;
var correctAnswers = 0;
var points = 0;
var moduleOption = 2;

function generateNumber(){

	var a = Math.floor((Math.random() * 10)+ 1);
	return a;
	
}

function generateWrongAnswers(rightAnswer){
	
	var allAnswers = [];
	
	while(allAnswers.length < 4){
	
	var addValue = generateNumber();
	
	var valueToBeAdded = 0;
	
	var signal = generateNumber();
	
		if( signal > 5)
		
			valueToBeAdded = rightAnswer + addValue;	
			
		else valueToBeAdded = rightAnswer - addValue;
				
		if(allAnswers.indexOf(valueToBeAdded) > -1 || valueToBeAdded <= 0)	
			continue;
		else allAnswers.push(valueToBeAdded);
	
	}
	return allAnswers;

}

function writeQuestion(){

	var a = generateNumber() ;
	var b = generateNumber() ;
	var x = a + " * " + b ;
 	document.getElementById("question").innerHTML = x;
 	return a*b;
	
}


function answersQuestion(){

	var rightAnswer = writeQuestion();

	var answers = [];

	answers = generateWrongAnswers(rightAnswer);
	
	var rightPosition = Math.floor((Math.random() * 16)/4);
	
	answers[rightPosition] = rightAnswer;
	
	rightAnswerId = rightPosition;
	
	for(var i=0;i<4;i++){
		document.getElementById(i).innerHTML = answers[i];
	}

}

function onOptionClick(id){

	if(id != rightAnswerId)
		
		switch(moduleOption){

		case 2: 	
			seconds = 0;
			calcPoints();				
			break;

		}
		
		
	else {
	
	switch(moduleOption){

		case 2: 	
			calcPoints();
			seconds=10;			
			break;

		}
	
	correctAnswers++;
	answersQuestion();
	document.getElementById("correctAnswers").innerHTML = "Correct Answers: "+correctAnswers;
	
		
	
	}  

}

switch(moduleOption){

	case 1: 
			var userSeconds = prompt("How many seconds?");
		// Case module 1 (Countdown) is selected;
		break;
	case 2: 
	
		userSeconds = 10;			
	
		break;
	case 3: // Case module 3 (Levels) is selected;
			break;
}

var seconds = userSeconds;

function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('clock').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
		calcPoints();
        clearInterval(countdownTimer);
        document.getElementById('clock').innerHTML = "0:00";
		gameOver();
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000);

var calcPoints = function(){

	switch(moduleOption){

	case 1: 
			
		points = Math.round(((correctAnswers/userSeconds)*correctAnswers)*100);
		break;
		
	case 2: 
	
		points += seconds*10;
	
		break;
	case 3: // Case module 3 (Levels) is selected;
			break;
	}
	
}

function gameOver(){

	alert('Game Over\nPoints ' + points);

} 
