let currentTime = 0;
let waitInterval = 500; // 0.5s
let totalWaitTime = 5000; // 5s in total

const incTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime / totalWaitTime)* 100) ;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting...${percentage}`);
}

setTimeout(() => {
    clearInterval(interval);
    process.stdout.write("\nLoading complete");
}, totalWaitTime);

let interval = setInterval(incTime, waitInterval);
