const fs = require("fs");


let file_path = "./chat.log";
let file_encoding = "UTF-8";
let stream = fs.createReadStream(file_path, file_encoding);
let data;

stream.once("data", (chunk) => {
    console.log("Read stream started");
    console.log("==================");
    console.log(chunk);
});

stream.on("data", (chunk) =>{
    console.log(`Chunk: ${chunk.length}`);
    data += chunk;
})

stream.on("end", () => {
    console.log("Finished Reading");
    console.log(data.length);
})
