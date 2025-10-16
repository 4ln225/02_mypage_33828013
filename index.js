var http = require("http"); 
const fs = require("fs");
const port = 8000; 


http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = fs.readFileSync("index.html");
    res.end(html);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 

//comment
