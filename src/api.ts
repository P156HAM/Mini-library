// URL: https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books
import { Book } from "./interfaces.js";

async function getBooks() : Promise<Book[]> {
    const baseUrl: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl); 
    const data: Book[] = await response.json(); 
    console.log(data); 
    createElementForEveryBook(data)
    return data
}

function createElementForEveryBook(data: Book[]) {
    const mainBox: HTMLElement | null = document.querySelector('.main-content');
    const books = data.map((book: any, index: number) => {
        console.log(index);
        const bookElement = document.createElement('section');
        const bookLineElement = document.createElement('div')
        bookLineElement.setAttribute('class', `book-line-${book.id}`)
        const bookElementTitle = document.createElement('article');
        bookElementTitle.innerHTML = 
        `<h3> ${book.title} </h3>
         <p> ${book.author} </p>`
        bookElement.setAttribute('class', `Book-${book.id}`)
        mainBox?.appendChild(bookElement);
        bookElement.appendChild(bookLineElement);
        bookElement.appendChild(bookElementTitle);
    })
}



export {getBooks};
