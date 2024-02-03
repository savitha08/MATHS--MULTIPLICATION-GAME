var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick=function(){
if(playing == true){

   location.reload();//reload page
}
else{


//change mode to play

playing=true;   //if we are not playing
score = 0;  //set score to 0
document.getElementById("scorevalue").innerHTML=score;

//show countdown box

show("timeremaining");
timeremaining=60;
document.getElementById("timeremainingvalue").innerHTML=timeremaining;

//hide game over box

hide("gameover");

//change button to reset

document.getElementById("startreset").innerHTML="Reset Game";

//start countdown

startcountdown();

//generate a new Q&A

generateQA();
}
}
   //if we are playing
      //reload page
   //if we are not playing
      //set score to 0
      //show countdown box
      //reduce time 1sec in loops
         //timeleft?
            //yes->continue
            //no->gameover
    //change button to reset
    //generate new Q&A

//clicking on the answer box
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
   if(playing == true){
   
      // if(document.getElementById("box1").innerHTML == correctanswer)
      if(this.innerHTML == correctAnswer){
         //correct answer
         score++;
         document.getElementById("scorevalue").innerHTML = score;
         //hide wrong box and show correct box
         hide("tryagain");
         show("correct");
         setTimeout(function(){
         hide("correct");
         },1000);

         //generate new question
         generateQA();
      }
      else{
         //wrong answer
         hide("correct");
         show("tryagain");
         setTimeout(function(){
            hide("tryagain");
         },1000);
      }
   }
}}


//if we click on answer box
   //if we are playing
      //correct?
        //yes
           //increase score
           //show correct box for 1sec
           //generate new Q&A
        //no
          //show try again box for 1sec

function startcountdown(){
   action=setInterval(function(){timeremaining-= 1;
      document.getElementById("timeremainingvalue").innerHTML=timeremaining;
  if(timeremaining==0){//game over
   stopcountdown();  //stops when timeremaining=0
   show("gameover");
   document.getElementById("gameover").innerHTML="<p>game over!</p><p>your score is " + score + ".</p>";
   hide("timeremaining");
   hide("correct");
   hide("tryagain");
   playing=false;
   document.getElementById("startreset").innerHTML="Start Game";
}},1000);
}

function stopcountdown(){
   clearInterval(action);
}

function hide(Id){
document.getElementById(Id).style.display="none";
}

function show(Id){
   document.getElementById(Id).style.display="block";
}
//generate question and multiply answer
function generateQA(){
   var x = 1 + Math.round(9 * Math.random());
   var y = 1 + Math.round(9 * Math.random());
   correctAnswer = x * y;
   document.getElementById("question").innerHTML = x + "x" + y;
   var correctposition = 1 + Math.round(3 * Math.random());

   // Fill the correct answer
   document.getElementById("box" + correctposition).innerHTML = correctAnswer;
   
   //fill the boxes with wrong answer
//    
var answers = [correctAnswer];
    
for(i=1; i<5; i++){
    if(i != correctposition) {
        var wronganswer;
        do{
            wronganswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
        }while(answers.indexOf(wronganswer)>-1);   //indexOf 'O' capital O
       
//  The while loop continues generating new wronganswer values as long as the generated wronganswer is already present in the answers array. The condition answers.indexOf(wronganswer) > -1 is true as long as wronganswer is found in the answers array.

// In other words, the loop keeps running until a unique wronganswer is generated (one that is not already present in the answers array). Once a unique wronganswer is found (i.e., indexOf returns -1), the loop exits, and the unique wronganswer is added to the answers array.

// The use of -1 in this context is a common pattern in JavaScript to check if a particular value is not present in an array. If indexOf returns -1, it means the element is not found in the array.
    
document.getElementById("box"+i).innerHTML = wronganswer;
        answers.push(wronganswer);
      }
   }
}

