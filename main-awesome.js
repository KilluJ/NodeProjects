var fs = require("fs"); //Node.js file system module allows you to work with the file system on your computer.

fs.readFile('awesome.json', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("True story.");

