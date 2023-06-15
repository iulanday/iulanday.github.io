var currentSlide=1;
var totalSlides=4;

function changeSlide(){
	var previousSlide=CurrentSlide;
	currentSlide=(currentSlide % totalSlides)+1;
	
	var previousImage=document.getElementById("slide"+previousSlide);
	var currentImage=document.getElementById("slide"+currentSlide);
	previousImage.classList.add("hidden");
	currentImage.classList.remove("hidden");
}
setInterval(changeSlide,3000);

function calculateResult(){
	
	var answer1=document.getElementById("q1").value;
	var answer2=document.getElementById("q2").value;
	var answer3=document.getElementById("q3").value;
	var answer4=document.getElementById("q4").value;
	var score=0;
	if (answer1=== "A"){
		score+=1;
	}
	
	if (answer2 === "B"){
		score+=1;
	}
	
	if (answer3=== "C"){
		score+=1;
	}
	if (answer4=== "D"){
		score+=1;
	}
	
	var resultDisplay=document.getElementById("result");
	resultDisplay.textContent= "Your Score:"+score+"/4";
}