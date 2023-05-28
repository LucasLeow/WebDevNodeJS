const fs = require("fs");

let answerStream;

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you doing later?"
];

const answers = [];

function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(`   >   `);
}

process.stdin.once("data", (data) => { // first data is name input

    let name = data.toString().trim();
    let file_path = `./${name}.md`;

    if (fs.existsSync(file_path)) {
        fs.unlinkSync(file_path); // if file exist, remove it
    }
    answerStream = fs.createWriteStream(file_path);
    answerStream.write(`Question Answers for ${name} \n
    ==========================\n
    `)
});

process.stdin.on("data", function(data) {
    let answer = data.toString().trim();
    
    answerStream.write(`Question: ${questions[answers.length]}\n`);

    answerStream.write(`Answers: ${answer}\n`, () => {
        if (answers.length < questions.length) {
            ask(answers.length);
        } else {
            process.exit();
        }
    });
    
    answers.push(answer);
});

process.on("exit", () => {

    answerStream.close();
    process.stdout.write(`\n\n`);
    console.log(answers);
});

ask(answers.length);

