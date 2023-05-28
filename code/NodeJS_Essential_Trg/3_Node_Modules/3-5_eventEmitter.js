const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("eventName", (message, user) => {
    console.log(`${user} : ${message}`);
} );

emitter.emit("eventName", "Hello World", "Computer");

process.stdin.on("data", (user_input) => {
    const input = user_input.toString().trim();
    if (input === "exit") {
        emitter.emit("eventName", "Goodbye!", "Process");
        process.exit()
    }

    emitter.emit("eventName", input, "Terminal");
});