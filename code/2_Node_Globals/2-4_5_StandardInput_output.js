process.stdout.write("Hello  \n \n ");

const questions = [
    "What is your name?",
    "What is your favourite programming language?",
    "What is your hobby?"
];

const answers = [];

function getAnswers(idx=0) {
    process.stdout.write(`\n ${questions[idx]}`)
    process.stdout.write(` > `);
}

getAnswers()

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        getAnswers(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    for (let i = 0; i < answers.length; i++) {
        process.stdout.write("\n");
        process.stdout.write(`Answer ${i+1} : ${answers[i]}`);
    }
})

