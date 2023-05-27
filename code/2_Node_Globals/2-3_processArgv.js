function grab(flag) {
    let idxAfterFlag = process.argv.indexOf(flag) + 1; // indexOf returns idx of first occurrence of flag
    return process.argv[idxAfterFlag]; // idxAfterFlag contains the flag value
}

// provided flag is --greeting & --user respectively
let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);