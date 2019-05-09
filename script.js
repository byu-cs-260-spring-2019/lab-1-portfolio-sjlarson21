window.onload = function(){
    var isAnswerDisplayed = false;
    
    document.getElementById('button').addEventListener('click', function(){
       //console.log("hi"); TEST
       if(!isAnswerDisplayed){
          docoument.getElementById('answer').style.display = "block";
          docoument.getElementById('button').innerHTML = "Hide answer";
          isAnswerDisplayed = true;
       }
       else {
          docoument.getElementById('answer').style.display = "none";
          docoument.getElementById('button').innerHTML = "Reveal answer";
          isAnswerDisplayed = false;
       }
       
    });
 }