import { createServer } from "node:http"

// create server is asynchronous and requires callback function
const server = createServer((req, res) => {
	// handle only the response
	res.statusCode = 200
	res.setHeader("Content-Type", "text/plain")
	res.end("Hello HTTP world!")
})

const host = "localhost"
const port = 3000

server.listen(port, host, () => {
	console.log(`Server listening on http://${host}:${port}`)
})
