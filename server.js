"strict";

const http = require("http"); // const http allows us to create a server
const random = require("./route"); // Allow access to route.js and the content inside. Importing from randomQuotes
console.log(random()) //console message we can use to check our random quotes

http.createServer((request, response) => {  //Built in method that creates a server
    response.writeHead(200,{  //*200 server is ok and the object Content-type: text/plain
        "Content-type": "text/plain"
    });
    response.write(random()); //Diplays a random quote on the page
    response.end(); // Stops communication to Server
}).listen(3000); // This is the 'Listen Method'. ".listen(3000)" is the name of the port