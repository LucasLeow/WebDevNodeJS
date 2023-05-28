const fs = require("fs");

dir_path = "./newDir";

if (fs.existsSync(dir_path)) {
    console.log("Directory already exists");
} else {
    fs.mkdir(dir_path, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("directory created");
        }
    });
}
