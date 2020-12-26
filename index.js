
var level = 1;


function start(){
	$('#level-title').text("Level " + level);
	var numbers = [];
	while (level < 2){
		var number = Math.floor(Math.random() * 4) + 1
		numbers.push(number); 
		switch (number) {
			case 1:
				$('#green').click();
				break;
			case 2:
				$('#red').click();
				break;
			case 3: 
				$('#yellow').click();
				break;
			case 4:
				$('#blue').click();
				break;
		}
		for (i=0; i<numbers.length; i++){
			var pressedButton;
			$('.btn').click(function(event){
				var btnId = event.target.id;
				pressedButton = squareClicked(btnId);
				console.log(pressedButton);
			});
		}
	}
};

function levelUp(){
	level++;
	$('#level-title').text("Level " + level);
};

function squareClicked(buttonId){
		switch (buttonId){
			case "green":
				return 1;
			case "red":
				return 2;
			case "yellow":
				return 3;
			case "blue":
				return 4;
		}
};


var x = $('#green').click(function(){
	var greenSound = new Audio('sounds/green.mp3');
	greenSound.play();
	$('#green').addClass('pressed');

	setTimeout(function(){
		$('#green').removeClass('pressed');
	}, 150);

	return 1;
});
$


$('#red').click(function(){
	var redSound = new Audio('sounds/red.mp3');
	redSound.play();

	$('#red').addClass('pressed');

	setTimeout(function(){
		$('#red').removeClass('pressed');
	}, 150);
});

$('#yellow').click(function(){
	var yellowSound = new Audio('sounds/yellow.mp3');
	yellowSound.play();

	$('#yellow').addClass('pressed');

	setTimeout(function(){
		$('#yellow').removeClass('pressed');
	}, 150);
});


$('#blue').click(function(){
	var blueSound = new Audio('sounds/blue.mp3');
	blueSound.play();

	$('#blue').addClass('pressed');

	setTimeout(function(){
		$('#blue').removeClass('pressed');
	}, 150);
});

$(document).keydown(function(event){
	if (event.which == 65){
		start();
	}
});