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
	 	//needed to add the user_input value 
	 	//need to set the user input value equal to the randomQuestion.choices[i]
	 	var $input = $("<ol><input type='radio' name='user_input' value='"+randomQuestion.choices[i]+"'>" + randomQuestion.choices[i] + "<ol></input>");
	 		console.log(randomQuestion.correct);
	 	
	 	//append to the choices class

	 		$input.appendTo(".choices");
	 	}
		
	};

	//adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){
		//get new random questions via app.randomQuestion?
		//somehow get these new questions to appear on the page
		//how can we call it in a loop
		//while some condition is met keep generating OR if some condition is met add a new question
		
		//set the same random question generator equal to a new variable and call this variable in the answer generator function
		newRandomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
		
		//attaches the first question to the form onload
		$currentForm.prepend('<h3 class = "question"> Question: ' + newRandomQuestion.question + '</h3>' + '<br><br>');

		//call answerGenerator with different random question
		answerGenerator(newRandomQuestion);
	
	};

	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		//adding.val() takes the value from the checked input, otherwise if we dont have .val() it will just list the name of the radio button
		$userInput = $('input:checked').val();
		
		// console.log($userInput.val());

		//if(app.randomQuestion.choices[$userInput.val()] === app.randomQuestion.correct){
			if( ($userInput === firstRandomQuestion.correct)  || ($userInput === newRandomQuestion.correct)){
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

