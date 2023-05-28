const fs = require("fs");

let add_content = "\n\n Adding new content here";

let FilePath = "./new.md";

fs.appendFile(FilePath, add_content.trim(), function (err) {
    if (err) {
        throw err
    }
    console.log("Markdown appended");
});