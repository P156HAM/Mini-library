import { createElementForEveryBook, createBookDiscreption } from "./display.js";
async function getBooks() {
    const baseUrl = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    createElementForEveryBook(data);
    createBookDiscreption();
    return data;
}
export { getBooks };
