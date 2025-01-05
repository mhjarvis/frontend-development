// allows us to write and read files
import { writeFileSync, readFileSync } from "node:fs";

// basic user array
const users = [{ name: "Adam Ondra", email: "a.ondra@climb.ing" }];

// convert data to string
const usersJson = JSON.stringify(users);

// write the information to the file
// writeFileSync(<filename>, <string to be written>)
writeFileSync("backend/users.json", usersJson);

// read information from file
const readUsersJson = readFileSync("backend/users.json");

// parse JSON string
const readUsers = JSON.parse(readUsersJson);

console.log(readUsers);
