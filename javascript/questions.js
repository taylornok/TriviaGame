//Questions for trivia game

var questions = [
    {
      question: "Select the primary color.",
      correctAnswer: {
        a: "Yellow",
        b: "Magenta",
        c: "Green",
        d: "Black"
      },
      correctAnswer: "a"
    },
    {
      question: "Which famous orphan had curly red hair",
      correctAnswer: {
        a: "Oliver Twist",
        b: "Annie",
        c: "Violet Baudelaire",
        d: "Mowgli"
      },
      correctAnswer: "b"
    },
    {
      question: "What does M.V.E.M.J.S.U.N.P refer to?",
      correctAnswer: {
        a: "The order of operations in arithmetic",
        b: "The preparation steps a driver takes before driving",
        c: "First-aid response steps",
        d: "Understanding of the solar system circa 1990s"
      },
      correctAnswer: "d"

    },

    {
        question: "What is the capital of the largest state in America (hint: largest in size)",
        correctAnswer: {
            a: "Sacramento",
            b: "Austin",
            c: "Juneau",
            d: "Tallahassee"
        },
        correctAnswer: "c"
        
    },

    {
        question: "What disease is the focus of oncology? ",
        correctAnswer: {
          a: "Chronic obstructive pulmonary disease (COPD)",
          b: "Cancer",
          c: "Diabetes",
          d: "Alzheimer’s"
        },
        correctAnswer: "b"
        
    }    
    ];

    function startQuiz(){
        
        var questionOutput = [];
      
        // for each question in whole, we want to take in the current question and correctAnswer
        questions.forEach (
          (currentQuestion, correctAnswer) => {
      
            // put the correctAnswer in a answer array
            var correctAnswer = [];
      
            // and for each available answer...
            for(letter in currentQuestion.correctAnswer){
      
              // ...add an HTML radio button
              correctAnswer.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
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
    