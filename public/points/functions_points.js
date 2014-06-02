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

	if(id != rightAnswerId){
		alert("Wrong answer!");
		wrongAnswers++;
		if(wrongAnswers == 3)
			calcPoints();
		}
	else {
	
	correctAnswers++;
	answersQuestion();
	document.getElementById("correctAnswers").innerHTML = "Correct Answers: "+correctAnswers;
	totalSeconds += remainingSeconds;
	seconds = 10;
	secondPassed()
	}  

}

var seconds = 10;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    remainingSeconds = seconds % 60;
    if (remainingSeconds == 10) {
        document.getElementById('clock').innerHTML = minutes + ":" + remainingSeconds;
    }else{
    document.getElementById('clock').innerHTML = minutes + ":0" + remainingSeconds;
	}
    if (seconds == 0) {
		clearInterval(countdownTimer);
		alert("Missing answer!");
		wrongAnswers++;
		if(wrongAnswers == 3)
			calcPoints();

        document.getElementById('clock').innerHTML = "0:00";
    } else {
        seconds--;
    }
}

var countdownTimer = setInterval('secondPassed()', 1000);

var calcPoints = function(){
	points = totalSeconds * correctAnswers;
	alert('Points ' + points);
	window.location = '../index.html'
}
