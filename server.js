var http = require("http");
var url = require("url");

function start(){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Conten-Type": "text/plain"});
    response.write("hello Node.JS");
    response.end();
  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has started.")
}

exports.start = start;

