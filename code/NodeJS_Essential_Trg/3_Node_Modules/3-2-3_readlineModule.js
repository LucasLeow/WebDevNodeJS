const readline = require("readline");
const rl = readline.createInterface(
    {input: process.stdin,
    output: process.stdout
    }
);

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you doing later?"
];

function collectAnswers (questions, done) {
    const answers = [];

    const questionAnswered = answer => {
        answers.push(answer.trim());

        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered)
       } else {
           return done(answers);
       }
    };
    rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, function done(answers) {
    for(let i = 0; i < answers.length; i++) {
        console.log(answers[i]);
    }
    process.exit();
})

