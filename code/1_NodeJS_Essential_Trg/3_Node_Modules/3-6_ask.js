const collectAnswer = require("./3-6_collectAnswer");

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you doing later?"
];

const answerEvents = collectAnswer(questions, function done(answers) {
    for(let i = 0; i < answers.length; i++) {
        console.log(answers[i]);
    }
    process.exit();
});

answerEvents.on("answer", answer => console.log(`The answer is ${answer}`));