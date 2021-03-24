var highscores = document.querySelector(".highscores");
var timer = document.querySelector(".timer");
var startButton = document.querySelector(".startButton");
var userInput = document.querySelector(".userInput");

var questionsDiv = document.querySelector(".questions");
var answers = document.querySelector(".answers")

function printQuestion (index){
    var q= document.createElement("p");
    q.textContent= questionPool[index].question;
    questionsDiv.appendChild(q);
    var optA= document.createElement("button");
    optA.textContent= questionPool[index].a;
    questionsDiv.appendChild(optA)
    var optB= document.createElement("button");
    optB.textContent= questionPool[index].b;
    questionsDiv.appendChild(optB)
    var optC= document.createElement("button");
    optC.textContent= questionPool[index].c;
    questionsDiv.appendChild(optC)
    var optD= document.createElement("button");
    optD.textContent= questionPool[index].d;
    questionsDiv.appendChild(optD)
}



var questionPool = [
    {
        question: "what is a boolean value?",
        a: "true and false",
        b: "a string value",
        c: "a number value",
        d: "all of the above",
        answer: "true and false",
      },
    {
        question: "what is a string?",
        a: "words",
        b: "number values",
        c: "blocks",
        d: "true or false values",
        answer: "words",
      },
    {
        question: "commonly used data types do not include?",
        a: "booleans",
        b: "blocks",
        c: "strings",
        d: "numbers",
        answer: "blocks",
      },
    {
        question: "What is a console log?",
        a: "shows values in the document",
        b: "shows values in the console",
        c: "a string of value in one line",
        d: "all apply",
        answer: "shows values in the console",
      }
    ];

    
var count = 59;
function timerFunction(){
var interval = setInterval(function(){
  timer.innerHTML=count + " seconds left";
 
  if ((count <= 0)||(qInd>=4)){
    clearInterval(interval);
    timer.innerHTML='Done';
    // or...
    alert("Good Try!");
  } 

  count--;
}, 1000);



}
var qInd=0
startButton.addEventListener("click",function(event) {
	startButton.style.visibility = "hidden";
    questionsDiv.textContent="";
    questionPool.textContent="";
	timerFunction();
	printQuestion(qInd);
})
questionsDiv.addEventListener("click",function(event){
    var element= event.target
    if (element.innerHTML!=questionPool[qInd].answer){
        count = count-10
    }
    qInd ++ ; 
    questionsDiv.innerHTML="";
    if (qInd <4 ){
        printQuestion(qInd);
}
})