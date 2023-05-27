const waitTime = 3000; // 3000ms = 3s
console.log(`Setting a ${waitTime / 1000} second delay`);

setTimeout(() => {
    console.log("Timer elapsed");
}, waitTime);

let startTime = 0;
let interval = 1500;
setInterval(() => {
    console.log(startTime / 1000);
    startTime += interval;
}, interval);