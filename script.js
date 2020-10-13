



// . is for class and # is for ID
//$("#QuestionID").hide();
//$("#QuestionID").toggle(false);

var indexOfQuestions = 0;
var TotalScore = 0;
var answerIndex = 0;
function InitiateQuiz(InitialQuiz_ID, Question_ID, Choices_ID, QuizOption_Class){
    //$("#QuestionID").show();
    //var sTest = Quiz_ID;

    /*$("#START").addEventListener("click",reset(){
        indexOfQuestions = 0;
        TotalScore = 0;
        answerIndex = 0;

    });
    */
    

    $("#" + InitialQuiz_ID).toggle(false);

    //$("#QuestionID").toggle(true);
    $("#QuestionID").toggle(true);

    $("#HiScores").toggle(false);

    var timeStart = 100;

    var timer = document.getElementsByTagName("h4").innerHTML;

    var eInitialQuiz = document.getElementById(InitialQuiz_ID);

    var eQuestion = document.getElementById(Question_ID);

    var eChoices = document.getElementById(Choices_ID);

    var eQuizButtons = document.getElementsByClassName(QuizOption_Class);

    var HiScoreSubmish = [];

    var Answers=[1,3,3,0];

    //GoToNextQues(indexOfQuestions++, eQuestion, eChoices);

    GoToNextQues(indexOfQuestions++, eQuestion, eChoices);

   $("." + QuizOption_Class).click(function(){
       var id = this.id;

       eQuizButtons[Answers[answerIndex]].disabled = true

       let bIsCorrectTF = questionsArray[indexOfQuestions].choices[id].correct;

       //let bIsCorrectTF = questionsArray[indexOfQuestions-1].choices[id].correct;
       
       if(bIsCorrectTF == true){
            $("#CorrectAnswer").show();
            TotalScore++;
       }else{
           $("#WrongAnswer").show();
       }
        $("#nextbutton").show();
    });
    
    

    $("#nextbutton").click(function(){
        $(this).hide();
        GoToNextQues(indexOfQuestions++, eQuestion, eChoices);
        //GoToNextQues(indexOfQuestions++, eQuestion, eChoices); Worked with other ++ up there^^
        $("#WrongAnswer").hide();
        $("#CorrectAnswer").hide();
        eQuizButtons[Answers[answerIndex++]].disabled = false;
        

        if(indexOfQuestions >= questionsArray.length){
            alert("You are finished, you scored " + TotalScore + " out of 4");
            var EnterName = prompt("Please attach your name to your High Score");
            HiScoreSubmish.push(EnterName + "-" + TotalScore);  
            $("#" + InitialQuiz_ID).toggle(true);
            $("#QuestionID").toggle(false);
            $("#HiScores").toggle(true);
            $("#back-btn").toggle(true);
            alert(HiScoreSubmish + " has been added to High Scores!");
            indexOfQuestions = 0;
            TotalScore = 0;
            answerIndex = 0;
        }
    
        console.log(HiScoreSubmish)
        console.log(indexOfQuestions)
        console.log(answerIndex)

    });
}


function HighscoreLog(){
    
    $("#HiScoreBTN").click(function(){
        $(this).hide();
        $("#HiScoreHTML").show();
        $("#QuizStart").toggle(false);
        $("#QuestionID").toggle(false);
        $("#timer").toggle(false);
    });
}   
function goBack(){
    $("#back-btn").click(function(){
        $("#back-btn").hide();
        $("#HiScoreBTN").show();
        $("#HiScoreHTML").hide();
        $("#QuizStart").toggle(true);
        $("#QuestionID").toggle(false);
        $("#timer").toggle(true);
    });
}
function GoToNextQues(indexOfQuestions, eQuestion, eChoices){
    if(indexOfQuestions < questionsArray.length){
        var oQuizObject = questionsArray[indexOfQuestions++];

        var sCurrQuestion= oQuizObject.question;

        eQuestion.innerText = sCurrQuestion;

        var arrCurrChoices = oQuizObject.choices;

        for(var j = 0; j < arrCurrChoices.length; j++){
        eChoices.children[j].innerText = arrCurrChoices[j].text;
        }
    }
}


function TimeBegins() {
    var interval = setInterval(function() {
        timeStart--;
        timer.textContent = timeStart;

        if(timeStart === 0) {
            clearInterval(interval);
        }
    }, 1000);
}


var questionsArray = [
    {
        question: "What is the capital of New York?", 
        choices: [
            {text: "California", correct: false},
            {text: "Albany", correct: true},
            {text: "Argentina", correct: false},
            {text: "Albertson", correct: false}
        ]
    },
    {
        question: "What is the best holiday of the year?",
        choices: [
            {text: "Valentines Day", correct: false},
            {text: "Halloween", correct: false},
            {text: "Christmas", correct: false},
            {text: "Cinco De Mayo", correct: true}
        ]
    },
    {
        question: "Who created Facebook?",
        choices: [
            {text: "Justin Timberlake", correct: false},
            {text: "Elon Musk", correct: false},
            {text: "Jeff Bezos", correct: false},
            {text: "Mark Zuckerberg", correct: true}
        ]
    },
    {
        question: "What year did the Star Wars: Phantom Menace release?",
        choices: [
            {text: "1999", correct: true},
            {text: "2001", correct: false},
            {text: "2000", correct: false},
            {text: "2003", correct: false}
        ]
    }
]



