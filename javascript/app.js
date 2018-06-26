console.log("timer started");

var audio = new Audio("Jeopardy-theme-song.mp3");
var intervalId;
var number;    
var clockRunning = false;
var musicRunning = false


//Just the timer functions!
$("#start").on("click", function() {
    //set boolean to determine if the game is already playing, avoid restarting timer or music
    if (!clockRunning && !musicRunning) {
        //start the game by setting number to desired, then decrease the number by 1 each second
        function startGame() {
            if (!clockRunning && !musicRunning) {
                number = 5;
                $("#countdownTimer").text(number);
                intervalId = setInterval(decrement, 1000);
                $("#gameStatus").empty();
                playAudio();
                displayTrivia();
                clockRunning = true;
            }

        }
        startGame();
    }
    //determine how fast the timer will count down, conditionals for ending and beginning timer
    function decrement() {
        clockRunning = true;
        //  Decrease number by one.
        number --;
        if (number >= 0){
            $("#countdownTimer").text(number);
        }
            //  Once number hits zero...
        if (number === 0) {
            
            //  ...run the stop function.
            stop();
            audio.pause();
            //  Alert the user that time is up.
            $("#gameStatus").text("Time's Up!");
            console.log("Time's Up!")
        } 
    }
    

});   

//set audio on loop to play for the duration of the timer
function playAudio(){
    musicRunning = true;
    audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    audio.play();
}
//stop the clock, clear time interval, set clockrunning and musicrunning to false to aid in startup
function stop(){
    clearInterval(intervalId);
    clockRunning = false;
    musicRunning = false
}


//For the questions
//Define choices, question info, score
var userAnswer;
var correctAnswer = 0;
var currentAnswers = 0;
var currentQuestion = 0;
var numPosAnswers = 0;
var gameOver = false;
var answersWrong;
var current

// var quizDiv = $("#quiz");

var questionArray = [
    {
    question: "Select the primary color.",
    possAnswer: [
        "Yellow",
        "Magenta",
        "Green",
        "Black"
      ],
    questionAnswer: "Yellow"
    },
    {
    question: "Which famous orphan had curly red hair",
        possAnswer: [
        "Oliver Twist",
        "Annie",
        "Violet Baudelaire",
        "Mowgli"
        ],
    
    questionAnswer: "Annie"
    },
    {
      question: "What does M.V.E.M.J.S.U.N.P refer to?",
      possAnswer: [
        "The order of operations in arithmetic",
        "The preparation steps a driver takes before driving",
        "First-aid response steps",
        "Understanding of the solar system circa 1990s"
      ],
      questionAnswer: "Understanding of the solar system circa 1990s"

    },

    {
    question: "What is the capital of the largest state in America (hint: largest in size)",
    possAnswer: [
        "Sacramento",
        "Austin",
        "Juneau",
        "Tallahassee"
    ],
    questionAnswer: "Juneau"
        
    },

    {
    question: "What disease is the focus of oncology? ",
    possAnswer: [
        "Chronic obstructive pulmonary disease (COPD)",
        "Cancer",
        "Diabetes",
        "Alzheimer’s"
    ],
        questionAnswer: "Cancer"
        
    }    
];

console.log('question array', questionArray);
console.log(questionArray[0].question);


console.log('question array', questionArray);

// function possSplit (){
//     // var question = questionArray[currentQuestion].question;
//     var possAnswers = questionArray[currentQuestion].possAnswer;
//     // possAnswers.split();
    
// }

function displayTrivia() {
    // for (var i = 0; i < questionArray.length; i++) {
    //     var splitAnswers = questionArray[i].possAnswer;
    //     var answerSplit = splitAnswers.split();
    // }
    currentQuestion = 0;
    console.log("inside displayTrivia function");
    var currentAnswers = 0;

    var question = questionArray[currentQuestion].question;
    var possAnswers = questionArray[currentQuestion].possAnswer;
    
    // question++;
    
    // var choicesArr = $("quiz").html(questionArray.possAnswer);

    

    for (var currentQuestion = 0; currentQuestion < questionArray.length; currentQuestion++) {
        $("#quiz").html(question);
       
        
    }
    for (var currentAnswers = 0; currentAnswers < possAnswers.length; currentAnswers++) {
            // var possSplit = possAnswers.split (",");
       
            var answerButtons = $("<button>");
            answerButtons.text(possAnswers[currentAnswers]);
            answerButtons.attr('data-id', currentQuestion);
            $('#possAnswers').append(answerButtons);
        
        
    }
}

function nextQuestion () {
   
    $('#possAnswers').on("click", function () {
    
        questionArray.forEach(question => {
            var correct = questionArray[question].questionAnswer;
            var buttonText = $('#possAnswers').data;
            console.log(buttonText);

            console.log("inside nextQuestion");
            if (buttonText == correct){
                questionArray ++;
                $("#results").text("Correct!");

            }
            else {
                questionArray ++;
                $("#results").text("Wrong!");
            }
    
        })
    })
    

}

