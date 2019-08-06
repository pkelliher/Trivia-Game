// Start of game
$('#start').on('click', function () {
    game.start();
})

// Done function
$(document).on('click', '#end', function () {
    game.done();
})

// Questions and answers
var questions = [{
    question: "What is the name of Han Solo's ship?",
    answers: ["Destroyer", "Celthroid Gip", "Millenium Falcon", "Century Eagle"],
    correctAnswer: "Millenium Falcon"
}, {
    question: "Which young Jedi Knight becomes Darth Vader?",
    answers: ["Anakin Skywalker", "Bobby Custard", "Tony Alvarez", "Fluke Starbuker"],
    correctAnswer: "Anakin Skywalker"
}, {
    question: "What is the battle armor used by Boba Fett?",
    answers: ["Therlanium", "Desertis", "Ugnaughts", "Protectus"],
    correctAnswer: "Ugnaughts"
}, {
    question: "What color is Yoda's lightsaber in Attack of the Clones and Revenge of the Sith?",
    answers: ["Red", "Green", "Yellow", "Purple"],
    correctAnswer: "Green"
}, {
    question: "How many engines are on an X-wing fighter?",
    answers: ["2", "1", "7", "4"],
    correctAnswer: "4"
}, {
    question: "Who is Luke and Leia's mother?",
    answers: ["Shelia the Space Argonaut", "Claire the Invincible", "Sarah Ceberum", "Padme Amidala"],
    correctAnswer: "Padme Amidala"
}, {
    question: "Why didn't Yoda say he didn't want to train Luke Skywalker?",
    answers: ["Because he was scared", "Because he was angry", "Because he lacked patience", "Because he was a spazz"],
    correctAnswer: "Because he lacked patience"
}, {
    question: "What is Yoda's last name?",
    answers: ["Phonic", "Masterus", "Atherius", "He does not have one"],
    correctAnswer: "He does not have one"
}];

// Game object with counter
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">Done</button>');
    },

    // Checking answers
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    // Display results
    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}