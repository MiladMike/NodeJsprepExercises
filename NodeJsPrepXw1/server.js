const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
	if (request.url === "/") {
		const filePath = path.join(__dirname, "index.html");
		fs.readFile(filePath, (error, content) => {
			if (error) {
				response.writeHead(500);
				response.end("Server Error");
			} else {
				response.writeHead(200, { "Content-Type": "text/html" });
				response.end(content, "utf-8");
			}
		});
	} else if (request.url === "/index.js") {
		const filePath = path.join(__dirname, "index.js");
		fs.readFile(filePath, (error, content) => {
			if (error) {
				response.writeHead(500);
				response.end("Server Error");
			} else {
				response.writeHead(200, { "Content-Type": "text/javascript" });
				response.end(content, "utf-8");
			}
		});
	} else {
		response.writeHead(404);
		response.end("Not Found");
	}
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
