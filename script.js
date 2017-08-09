function dothis(){
  document.getElementById("quiz").style.visibility = "visible";  
}


function check(){
     var  question1 = document.quiz.question1.value;
     var  question2 = document.quiz.question2.value;
     var  question3 = document.quiz.question3.value;
     var  question4 = document.quiz.question4.value;
     var  question5 = document.quiz.question5.value;
     
     var correct =0;

     if(question1 === "if (i === 5)"){
         correct++;
     }
        if(question2 === "for ( i = 0; i <= 5; i++)"){
            correct++;

        } if(question3 === "Math.round (6.26)"){
            correct++;

        }if(question4 === "Math.max (x,y)"){
            correct++;

        }if(question5 ==="var carName"){
            correct++;
        }
    var messages=["Well Done!", "That is just okay!", "You need to do better!"];
    var image=["Images/success.gif","Images/meh.gif","Images/failed.gif"]
    var score;
    if(correct < 2){
        score=2;

    }if(correct > 1 && correct < 4){
        score=1;

    }if(correct > 3){
        score=0;
    }


    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("impressions").innerHTML= messages[score];
    document.getElementById("number_correct").innerHTML= "You got "+ correct +" correct.";
    document.getElementById("pictures").src=image[score];
}