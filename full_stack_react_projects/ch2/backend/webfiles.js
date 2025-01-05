import { createServer } from "node:http"
import { readFileSync } from "node:fs"

// create server is asynchronous and requires callback function
const server = createServer((req, res) => {
	// handle only the response
	res.statusCode = 200
	res.setHeader("Content-Type", "application/json")
	res.end(readFileSync("backend/users.json"))
})

const host = "localhost"
const port = 3000

server.listen(port, host, () => {
	console.log(`Server listening on http://${host}:${port}`)
})
