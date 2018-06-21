
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
                startQuiz();
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
// var correctAnswer = questionArray.correctAnswer[i];
// var currentQuestion = questionArray[question];
var answersCorrect;
var answersWrong;

var quizDiv = $("#quiz");

var questionArray = [
    {
      question: "Select the primary color.",
      possAnswer: {
        a: "Yellow",
        b: "Magenta",
        c: "Green",
        d: "Black"
      },
      correctAnswer: "a"
    },
    {
      question: "Which famous orphan had curly red hair",
      possAnswer: {
        a: "Oliver Twist",
        b: "Annie",
        c: "Violet Baudelaire",
        d: "Mowgli"
      },
      correctAnswer: "b"
    },
    {
      question: "What does M.V.E.M.J.S.U.N.P refer to?",
      possAnswer: {
        a: "The order of operations in arithmetic",
        b: "The preparation steps a driver takes before driving",
        c: "First-aid response steps",
        d: "Understanding of the solar system circa 1990s"
      },
      correctAnswer: "d"

    },

    {
        question: "What is the capital of the largest state in America (hint: largest in size)",
        possAnswer: {
            a: "Sacramento",
            b: "Austin",
            c: "Juneau",
            d: "Tallahassee"
        },
        correctAnswer: "c"
        
    },

    {
        question: "What disease is the focus of oncology? ",
        possAnswer: {
          a: "Chronic obstructive pulmonary disease (COPD)",
          b: "Cancer",
          c: "Diabetes",
          d: "Alzheimer’s"
        },
        correctAnswer: "b"
        
    }    
];

console.log('question array', questionArray);
console.log(questionArray.question);

function startQuiz(){
    
    var questionOutput = [];
    // questionOutput = $("#quiz").html(questionOutput)
    // for each question in whole, we want to take in the current question and correctAnswer
    questionArray.forEach (
        (questionArray, correctAnswer) => {
    
        // put the correctAnswer in a answer array
        var correctAnswer = [];
    
        // and for each available answer...
        for(letter in questionArray.correctAnswer){
    
            // ...add an HTML radio button
            correctAnswer.push(
            `<label>
                <input type="radio" name="question${currentQuestion}" value="${letter}">
                ${letter} :
                ${currentQuestion.correctAnswer[letter]}
            </label>`
            );
        }
    
        // add this question and its correctAnswer to the output
        questionOutput.push(
            `<h5 id="quiz"> ${currentQuestion.questions} </h5>
            <div class="correctAnswer"> ${correctAnswer.join('')} </div>`
        );
        }
    );
    
    // finally combine our output list into one string of HTML and put it on the page
    quizDiv.innerHTML = output.join('');
    }
    startQuiz();
console.log('question array', questionArray);


