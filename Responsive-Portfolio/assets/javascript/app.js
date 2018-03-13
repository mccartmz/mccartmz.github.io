
// Create timer that counts from 45 to 0
var time = 45;
var totalQs = 10;
var timeRunning = false;
var timeInterval;
var correct = 0;
var incorrect = 0;
var answers = false;
var isChoosen = false;

function startCounting (){
	if (time > 0) {time--; $("#timer").html("<h3><strong>Seconds Left: " + time + " </strong></h3>");}   
     else if (time === 0 && answers === false){
		checkanswers();} 
}

function startClock(){
	if(!timeRunning){
		timeInterval = setInterval(startCounting, 1000 * 1);
		timeRunning = true;} 
}

// When timer runs out or the Finished button is clicked. Check to see if the selected answers are correct
var Q1ans;
var Q2ans;
var Q3ans;
var Q4ans;
var Q5ans;
var Q6ans;
var Q7ans;
var Q8ans;
var Q9ans;
var Q10ans;

function checkanswers(){
	if (Q1ans === "correct"){correct++;}
     else if (Q1ans === "incorrect"){incorrect++;} 
	if (Q2ans === "correct"){correct++;}
     else if (Q2ans === "incorrect"){incorrect++;} 
    if (Q3ans === "correct"){correct++;}
     else if (Q3ans === "incorrect"){incorrect++;}
    if(Q4ans === "correct"){correct++;}
     else if (Q4ans === "incorrect"){incorrect++;}
    if(Q5ans === "correct"){correct++;}
     else if (Q5ans === "incorrect"){incorrect++;}     
    if(Q6ans === "correct"){correct++;}
     else if (Q6ans === "incorrect"){incorrect++;}
    if(Q7ans === "correct"){correct++;} 
     else if (Q7ans === "incorrect"){incorrect++;}
    if(Q8ans === "correct"){correct++;}
     else if (Q8ans === "incorrect"){incorrect++;}
    if(Q9ans === "correct"){correct++;}
     else if (Q9ans === "incorrect"){incorrect++;}
    if(Q10ans === "correct"){correct++;} 
     else if (Q10ans === "incorrect"){incorrect++;}

// Display results
	answers = true;
    $("#finished").hide();
    $("#triviaGame").hide();
	$("#timer").hide();
	$("#game-over").show();
	$("#game-over").append("<h2> You answered " + correct + " correct </h2>");
	$("#game-over").append("<h2> You answered " + incorrect + " wrong </h2>");
    $("#game-over").append("<h2> You did not answer " + (totalQs - (correct + incorrect)) + " questions</h2>" )
}

// Load quiz after start button clicked
$(document).ready(function(){
	$("#triviaGame").hide();
	$("#game-over").hide();
    $("#start-game").on("click", function(){startClock(); 
    $("#finished").html("<button> Finished </button>");
    $("#welcome").hide();
	$("#triviaGame").show();

// Log users question answers
	$("input[name='Q1']").on("click", function(){Q1ans = this.value;});
	$("input[name='Q2']").on("click", function(){Q2ans = this.value;});
	$("input[name='Q3']").on("click", function(){Q3ans = this.value;});
	$("input[name='Q4']").on("click", function(){Q4ans = this.value;});
	$("input[name='Q5']").on("click", function(){Q5ans = this.value;});
	$("input[name='Q6']").on("click", function(){Q6ans = this.value;});
	$("input[name='Q7']").on("click", function(){Q7ans = this.value;});
	$("input[name='Q8']").on("click", function(){Q8ans = this.value;});
	$("input[name='Q9']").on("click", function(){Q9ans = this.value;});
	$("input[name='Q10']").on("click", function(){Q10ans = this.value;});

//When user clicks finish button. Calculate score.
	$("#finished").on("click", function(){checkanswers();answers = true;});	

	});
});
