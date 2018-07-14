$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 45,
		reset: function() {
			this.time = 45;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				//countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
                }
            }
        }
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who was the first rap artist to win a Grammy?',
	possibleAnswers : ['A. Afrika Bambaataa',
				 'B. Grandmaster Flash',
				 'C. DJ Jazzy Jeff and the Fresh Prince',
				 'D. Jazy-Z'],
	flags : [false, false, true, false],
	answer : 'C. DJ Jazzy Jeff and the Fresh Prince'
};

var q2 = {
	question: 'Which of these rappers is NOT a member of N.W.A?',
	possibleAnswers: ['A. Dr. Dre',
				 'B. DJ Quik',
				 'C. Ice Cube',
				 'D. MC Ren'],
	flags : [false, true, false, false],
	answer : 'B. DJ Quik'
};

var q3 = {
	question : 'Which southern rap group recorded the song "Big Pimpin" with Jay-Z?',
	possibleAnswers : ['A. OutKast',
				 'B. UGK',
				 'C. 8 Ball & MJG',
				 'D. FIeld Mob'],
	flags : [false, true, false, false],
	answer : 'B. UGK'
};

var q4 = {
	question : 'Which artist has the most Grammy wins for Best Rap Album?',
	possibleAnswers : ['A. Eminem',
				 'B. Jay-Z',
				 'C. Kendrick Lamar',
				 'D. Lil Wayne'],
	flags : [true, false, false, false],
	answer : 'A. Eminem'
};

var q5 = {
	question : 'Which female rapper had the debut album titled "Funkdafied"?',
	possibleAnswers : ['A. Queen Latifa',
				 'B. Da Brat',
				 'C. Missy Elliot',
				 'D. Lil Kim'],
	flags : [false, true, false, false],
	answer : 'B. Da Brat'
};

var q6 = {
	question : 'Which of the following rappers is NOT a member of Wu-Tang Clan?',
	possibleAnswers : ['A. Redman',
				 'B. Method Man',
				 'C. Raekwon',
				 'D. RZA'],
	flags : [true, false, false, false],
	answer : 'A. Redman'
};

var q7 = {
	question : 'Which of these albums was NOT recorded by Ludacris?',
	possibleAnswers : ['A. Battle of the Sexes',
				 'B. Chicken-n-Beer',
				 'C. The Diary',
				 'D. The Red Light District'],
	flags : [false, false, true, false],
	answer : 'C. The Diary'
};

var q8 = {
	question : 'Which west coast rapper signed and records albums with Master P record label No Limit Records?',
	possibleAnswers : ['A. E-40',
				 'B. Snoop Dogg',
				 'C. Ice Cube',
				 'D. Tupac'],
	flags : [false, true, false, false],
	answer : 'B. Snoop Dogg'
};

var q9 = {
	question : 'Which NY-based rapper released their debut album "Illmatic" in 1994?',
	possibleAnswers : ['A. Rakim',
				 'B. Prodigy',
				 'C. Slick Rick',
				 'D. Nas'],
	flags : [false, false, false, true],
	answer : 'D. Nas'
};

var q10 = {
	question : 'Who was the first rapper to win an Oscar?',
	possibleAnswers : ['A. Eminem',
				  'B. Three Six Mafia',
				  'C. Ice Cube',
				  'D. Ice-T'],
	flags : [false, true, false, false],
	answer : 'B. Three Six Mafia'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	//countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});