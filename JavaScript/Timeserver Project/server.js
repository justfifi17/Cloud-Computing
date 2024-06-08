const http = require('http'); // creates an HTTP server
const url = require('url');  //parse the URL of incoming requests.

// This method creates an HTTP server that will execute the callback function whenever a request is received
const server = http.createServer((req, res) => { 
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/api/currenttime') { //checks if the path of the parsed URL is /api/currenttime
        const currentTime = new Date(); // If it is, generates a response with the current time 
        const response = {
            year: currentTime.getFullYear(),
            month: currentTime.getMonth() + 1, // Month is 0-indexed
            date: currentTime.getDate(),
            hour: currentTime.getHours(),
            minute: currentTime.getMinutes()
        };

        ////The response status code is set to 200 (OK), and the response headers indicate that the response contains JSON data.
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify(response));  // response object is converted to a JSON string
      
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found'); //Otherwise, it generates a response telling that the endpoint was not found.
    }
});

const port = 8000;  // server is set to listen on port 8000
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`); // Once the server is running, a message is logged to the console indicating the server is running. 
});
