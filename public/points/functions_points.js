var rightAnswerId = -1;
var correctAnswers = 0;
var wrongAnswers = 0;
var points = 0;
var totalSeconds = 0;
var remainingSeconds;

function generateNumber(){

	var a = Math.floor((Math.random() * 10)+ 1);
	return a;
	
}

function cleanColor(){
	for (var x=0;x<4;x++){
		var rightButton = document.getElementById(x);
		rightButton.setAttribute("style","background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf) );");
	}
}

function changeActiveStatusButtons (status){
	for (var x=0;x<4;x++){
		document.getElementById(x).disabled = status; 
	}
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
	cleanColor();

	changeActiveStatusButtons (false);

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

function changeColor(rightAnswerId){
	var rightButton = document.getElementById(rightAnswerId);
	rightButton.setAttribute("style","background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #b8e356 ), color-stop(1, #b8e356 ) );");
}

function onOptionClick(id){
	if(id != rightAnswerId){
		changeActiveStatusButtons (true);
		changeColor(rightAnswerId);
		ClearClock();
		wrongAnswers++;
		document.getElementById("wrongAnswers").innerHTML = "Wrong: " + wrongAnswers;
		if(wrongAnswers == 3){
			calcPoints();
			}
		seconds++;
		//setTimeout('answersQuestion()', 1000);
		answersQuestion()
		ClearClock();
	}
	else {
	ClearClock();
	correctAnswers++;
	answersQuestion();
	document.getElementById("correctAnswers").innerHTML = "Correct: " + correctAnswers;
	totalSeconds += remainingSeconds;
	seconds = 10;
	//secondPassed()
	}  

}


/*function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    remainingSeconds = seconds % 60;
    if (remainingSeconds == 10) {
        document.getElementById('clock').innerHTML = minutes + ":" + remainingSeconds;
    }else{
    document.getElementById('clock').innerHTML = minutes + ":0" + remainingSeconds;
	}
    if (seconds == 0) {
		//clearInterval(countdownTimer);
		alert("Wrong answer! You still can miss "+ (2 - wrongAnswers) +" more time(s)!");
		wrongAnswers++;
		if(wrongAnswers == 3){
			calcPoints();
		}
		else {
			seconds = 10;
			secondPassed();
			answersQuestion();
		}
    } else {
        seconds--;
    }
}
*/
var seconds = 9;
var remainingSeconds = seconds;
function secondPassed() {
    if (seconds == 0) {
    	ClearClock();
    	wrongAnswers++;
    	document.getElementById("wrongAnswers").innerHTML = "Wrong: " + wrongAnswers;
    	if(wrongAnswers == 3){
    		clearInterval(countdownTimer);
			calcPoints();
			}
		else {
			seconds = 9;
			//secondPassed();
			answersQuestion();
			}
    	}
    else {
        seconds--;
        remainingSeconds = seconds;
    	}

}


var countdownTimer = setInterval('secondPassed()', 1000);

var calcPoints = function(){
	points = totalSeconds * correctAnswers;
	alert("You've got 3 wrong answers. Your score is: "  + points);
	//inserSQL()userName,points);
	window.location = '../index.html'
}




 function ClearClock() {
    alfa=0;
  
}