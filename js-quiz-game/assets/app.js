$(document).ready(function(){
	
	event.preventDefault();
	// our current count, attached to the upper right hand corner of the browser
	var $currentCount = $('#counter')
	// our current form which will hold the question and subsequent answers loaded in the app.questions object.
	var $currentForm = $('form');
	// creates our first random question upon generating the game.html file
	var firstRandomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
	
	//attaches the counter to the highscore on page
	$("#counter").text(app.count);

	//attaches the first question to the form onload
	$currentForm.prepend('<h3 class = "question"> Question: ' + firstRandomQuestion.question + '</h3>' + '<br><br>');

	// appends all four answers to the corresponding question
	var answerGenerator = function (randomQuestion){
	 	//somehow get the answers part of the object to show when the question appears
	 	//loop through the choices
	 	for (var i = 0; i < randomQuestion.choices.length; i ++) {
	 	
	 	//make a node for the user input.
	 	var $input = $("<ol><input type='radio' name='user_input'>" + randomQuestion.choices[i] + "<ol></input>");
	 	//append to the choices class
	 		$input.appendTo(".choices");
	 	}
		
	};

	//adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){
			//use the math.random function to make a random question
	};

	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		$userInput = $('input:checked');

		if(app.randomQuestion.choices[$userInput.val()] === app.randomQuestion.correct ){
			app.successDisplay();
			app.countIncrementor();
			$currentCount.empty().append(app.count);
			$('.choices').empty().append(QandAgenerator());
		} else {
			app.failureDisplay();
		}		
	});

	$('#restart').on('click', function(){
		location.reload();
	});

	answerGenerator(firstRandomQuestion);
});

