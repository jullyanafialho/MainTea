var rightAnswerId = -1;
var correctAnswers = 0;
var points = 0;
var level = -1;
var correctLevelAnswers = [0, 0, 0];
var TotalQuestions = 1;

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

	var a = 0;
	var b = 0;
	
	TotalQuestions++;
	TrueLevel=level+2;

	if((TotalQuestions%10) == 0){		
		level++;
		correctLevelAnswers[level] = correctAnswers - (correctLevelAnswers[0]+correctLevelAnswers[1]);
		alert("You are now on level: " + TrueLevel);
	}		
		switch (level){
			case -1:
				while(a != 1 && a!= 2 && a!= 3 && a!= 10){
					a = generateNumber();
				}
				
				b = generateNumber();
				var x = a + " * " + b ;
				document.getElementById("question").innerHTML = x;
 				return a*b;
 			case 0:
				while((a!= 4) &&  (a!= 5) &&  (a!= 6)){
					a = generateNumber();
				}
				b = generateNumber();
				var x = a + " * " + b ;
 				document.getElementById("question").innerHTML = x;
 				return a*b;
 			case 1:
 				while((a!= 7) &&  (a!= 8) &&  (a!= 9)){
					a = generateNumber();
				}
				b = generateNumber();
				var x = a + " * " + b ;
 				document.getElementById("question").innerHTML = x;
 				return a*b;		
		}
	
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
		alert("Wrong answer!");
	else {
	
	correctAnswers++;
	answersQuestion();
	document.getElementById("correctAnswers").innerHTML = "Correct Answers: "+correctAnswers;
	
	}  

}
var userSeconds = prompt("How many seconds?");
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
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000);

var calcPoints = function(){
	points = Math.round(((correctAnswers/userSeconds)*correctAnswers)*100);
	alert('Points ' + points);
}
