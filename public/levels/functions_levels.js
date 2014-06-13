var rightAnswerId = -1;
var correctAnswers = 0;
var points = 0;
var level = -1;
var correctLevelAnswers = [0, 0, 0];
var TotalQuestions = 0;
var streakMultiplier = 1;
var errors = 0;

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


	if((TotalQuestions%10) == 0){		
		alert("you are now on level: "+(level+3));
		level++;
		correctLevelAnswers[level] = correctAnswers - (correctLevelAnswers[0]+correctLevelAnswers[1]);
	}else if(TotalQuestions == 1){
		document.getElementById("correctAnswers").innerHTML = "Corrects: "+correctAnswers;
		document.getElementById("streak").innerHTML = "Streak: X"+streakMultiplier;
		document.getElementById("error").innerHTML = "Wrong: "+errors;
	}
		switch (level){
			case -1:
				while(a != 1 && a!= 2 && a!= 3 && a!= 10){
					a = generateNumber();
				}
				
				b = generateNumber();
				var x = a + " x " + b ;
				document.getElementById("question").innerHTML = x;
 				return a*b;
 			case 0:
				while((a!= 4) &&  (a!= 5) &&  (a!= 6)){
					a = generateNumber();
				}
				b = generateNumber();
				var x = a + " x " + b ;
 				document.getElementById("question").innerHTML = x;
 				return a*b;
 			case 1:
 				while((a!= 7) &&  (a!= 8) &&  (a!= 9)){
					a = generateNumber();
				}
				b = generateNumber();
				var x = a + " x " + b ;
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

	if(id != rightAnswerId){
		streakMultiplier = 1;
		errors++;	
		document.getElementById("error").innerHTML = "Wrong: "+errors;	
	}
	else {
		streakMultiplier++;
		correctAnswers++;
		answersQuestion();
		document.getElementById("correctAnswers").innerHTML = "Corrects: "+correctAnswers;
		document.getElementById("streak").innerHTML = "Streak: X"+streakMultiplier;
		document.getElementById("error").innerHTML = "Wrong: "+errors;

	}  

}

