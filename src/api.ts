// URL: https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books
import { Book } from "./interfaces.js";
import {createElementForEveryBook, createBookDiscreption} from "./display.js"

async function getBooks() : Promise<Book[]> {
    const baseUrl: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl); 
    const data: Book[] = await response.json(); 
    console.log(data); 
    createElementForEveryBook(data)
    createBookDiscreption()
    return data
}



export {getBooks};