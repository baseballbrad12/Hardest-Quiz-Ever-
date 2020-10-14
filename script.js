



// . is for class and # is for ID
//$("#QuestionID").hide();
//$("#QuestionID").toggle(false);

var indexOfQuestions = 0;
var TotalScore = 0;
var answerIndex = 0;
var Answers=[1,3,3,0];
var HiScoreSubmish = [];
var Store = 0;

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

    

    var eInitialQuiz = document.getElementById(InitialQuiz_ID);

    var eQuestion = document.getElementById(Question_ID);

    var eChoices = document.getElementById(Choices_ID);

    var eQuizButtons = document.getElementsByClassName(QuizOption_Class);    

    //GoToNextQues(indexOfQuestions++, eQuestion, eChoices);

    

    GoToNextQues(indexOfQuestions++, eQuestion, eChoices);
    TimeBegins();


}
$(document).ready(function(){
    $(".QuizOption").mouseup(function(){
        var id = this.id;
        var eQuizButtons = document.getElementsByClassName("QuizOption");
 
        eQuizButtons[Answers[answerIndex]].disabled = true
 
        let bIsCorrectTF = questionsArray[indexOfQuestions-1].choices[id].correct;
 
        //let bIsCorrectTF = questionsArray[indexOfQuestions-1].choices[id].correct;
        
        if(bIsCorrectTF == true){
             $("#CorrectAnswer").show();
             TotalScore++;
        }else{
            $("#WrongAnswer").show();
        }
         $("#nextbutton").show();
     });
})
   
    
    
$(document).ready(function(){
    var eQuestion = document.getElementById("DisplayedQuestion");
    var eChoices = document.getElementById("choices");
    var eQuizButtons = document.getElementsByClassName("QuizOption");
    var eInitialQuiz = document.getElementById("QuizStart");

    $("#nextbutton").click(function(){
        $(this).hide();
        GoToNextQues(indexOfQuestions++, eQuestion, eChoices);
        //GoToNextQues(indexOfQuestions++, eQuestion, eChoices); Worked with other ++ up there^^
        $("#WrongAnswer").hide();
        $("#CorrectAnswer").hide();
        eQuizButtons[Answers[answerIndex++]].disabled = false;
        

        if(indexOfQuestions > questionsArray.length){
            alert("You are finished, you scored " + TotalScore + " out of 4");
            var EnterName = prompt("Please attach your name to your High Score");
            var Name = TotalScore + "-" + EnterName
            HiScoreSubmish.push(Name);
            localStorage.setItem(Store++,Name)
            $(eInitialQuiz).toggle(true);
            $("#QuestionID").toggle(false);
            $("#HiScores").toggle(true);
            $("#back-btn").toggle(true);
            alert(Name + " has been added to High Scores!");
            indexOfQuestions = 0;
            TotalScore = 0;
            answerIndex = 0;
        }
    })
});

$(document).ready(function(){
    
    $("#HiScoreBTN").click(function(){
        $(this).hide();
        $("#HiScoreHTML").show();
        $("#QuizStart").toggle(false);
        $("#QuestionID").toggle(false);
        $("#timer").toggle(false);
        $("#back-btn").show();
        highScoreDisp(HiScoreSubmish);
    });
} )
$(document).ready(function() {
    $("#back-btn").click(function(){
        $("#back-btn").hide();
        $("#HiScoreBTN").show();
        $("#HiScoreHTML").hide();
        $("#QuizStart").toggle(true);
        $("#QuestionID").toggle(false);
        $("#timer").toggle(true);
        ClearHi();
    });
})

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

function highScoreDisp(HiScoreSubmish){
        listRow = document.createElement("div")
        listOrder = document.createElement("ol")
        DisplayHi = document.getElementById("HiScoreDisplay").appendChild(listRow);
        listRow.appendChild(listOrder);
        for (let i = 0; i < HiScoreSubmish.length; i++) {
            DisplayHi.innerHTML = HiScoreSubmish[i];
    };
}
    
/*function highScoreName(Name){
    Store=0
    var listOrder = document.createElement("ol")
    var DisplayName = localStorage.getItem(Store);
    for (var n = 0; n < DisplayName.length; n++) {
    $("HiScoreDisplay").appendChild(listRow);
    listRow.appendChild(listOrder);
    }
    var Storage = JSON.parse(localStorage.getItem(Store));
    if(Storage == null) Storage = [];
    
} */

function ClearHi(){
    var CreatedHiScores = document.getElementById("HiScoreDisplay").innerHTML
    CreatedHiScores="";
}

function TimeBegins(timeStart, timer) {
        var timeStart = 100;
        var timer = document.getElementsByTagName("h4");

        var interval = setInterval(function() {
            var seconds = Math.floor((timeStart % (1000 * 60)) / 1000);
            timeStart--;
            timer.innerHTML = timeStart;
    
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



