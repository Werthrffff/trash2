var http = require("http");
var fs = require("fs");
var body = fs.readFileSync("../h.html");
 
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html");
    response.write(body);
    response.end();
}).listen(80);