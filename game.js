var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


function nextSequence(){

	userClickedPattern = [];

	level++;
	$('#level-title').text("Level " + level);
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	
	animatePress(randomChosenColor);

	playSound(randomChosenColor);
}

$('.btn').click(function(event){
	var userChosenColor = event.target.id;
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);

	checkAnswer(userClickedPattern.length - 1);
	
});

function playSound(name){
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
};

function animatePress(currentColor){
	$('#'+currentColor).addClass('pressed');
	setTimeout(function(){
		$('#' + currentColor).removeClass('pressed');
	}, 150);
};

$(document).keydown(function(){
	if(!started){
		$("#level-title").text("Level " + level);
		nextSequence();
		started=true;
	}
});

function checkAnswer(currentLevel){
	if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

		if(gamePattern.length === userClickedPattern.length){
			setTimeout(function(){
				nextSequence();
			}, 200);
		}
	}
	else {
		var audio = new Audio("sounds/wrong.mp3");
		audio.play();
		$('body').addClass('game-over');

		setTimeout(function(){
			$('body').removeClass('game-over');
		},100);

		$('#level-title').text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

function startOver(){
	level = 0;
	gamePattern = [];
	started = false;
}