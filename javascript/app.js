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
                number = 60;
                $("#countdownTimer").text(number);
                intervalId = setInterval(decrement, 1000);
                $("#gameStatus").empty();
                playAudio();
                displayTrivia();
                clockRunning = true;
            }

        }
        startGame();
        $("#start").hide();
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
            displayResults();
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

var round = 0;
var numPosAnswers = 0;
var gameOver = false;



// var quizDiv = $("#quiz");

var questions = [
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
        
    },
    {
    question: "The headquarters of the United Nations is located in what city?",
    possAnswer: [
        "New York",
        "Sacramento",
        "Boston",
        "San Francisco"
    ],
        questionAnswer: "New York"
    },
    {
    question: "Tenochtitlan, founded in 1324, is now known as what city?",
    possAnswer: [
        "Mexico City",
        "Buenos Aires",
        "Lima",
        "Quito"
    ],
        questionAnswer: "Mexico City"
    },
    {
    question: "Someone born on November 11th is said to have what astrological sign?",
    possAnswer: [
        "Aquarius",
        "Sagittarius",
        "Cancer",
        "Scorpio"
    ],
        questionAnswer: "Scorpio"
    },
    {
    question: "The Bill of Rights contains how many of the first amendments to the United States Constitution?",
    possAnswer: [
        "Ten",
        "Eight",
        "Fourteen",
        "One"
        ],
        questionAnswer: "Ten"
    },
    {
    question: "What do the letters C and H stand for in C & H Sugar?",
    possAnswer: [
        "Caine & Harold",
        "California & Hawaii",
        "Case & Hopper",
        "Change & Hold"
        ],
        questionAnswer: "California & Hawaii"
    },


];

console.log('question array', questions);
console.log(questions[0].question);


console.log('question array', questions);


function displayTrivia() {

    
    console.log("inside displayTrivia function");
    

    var question = questions[round].question;
    var answerChoices = questions[round].possAnswer;


    $("#quiz").text(question);
       
        
    $("#answerChoices").empty();
    for (var i = 0; i < answerChoices.length; i++) {

        var answerButtons = $("<button>");
        answerButtons.text(answerChoices[i]);
        answerButtons.attr('data-id', round);
        answerButtons.val(answerChoices[i]);
        $('#answerChoices').append(answerButtons);

    }
}

$("#answerChoices").on("click", "button", function() {
    console.log($(this).val());
    
    
    if ($(this).val() == questions[round].questionAnswer){
        correctAnswer ++;
       
    }
    round++;
    if (round >= questions.length){
        gameOver = true;
    }
    if (gameOver){
        displayResults();
        audio.pause();
    }else{
        displayTrivia();
        
    }
    
})

function displayResults(){
    $("#quizContainer").empty();
    var results = $("<p>");
    results.html("<h1>You got " + correctAnswer + " out of " + questions.length + " questions right!</h1>");
    $("#quizContainer").append(results);

}




