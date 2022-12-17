// URL: https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books
import { Book } from "./interfaces.js";

async function getBooks() : Promise<Book[]> {
    const baseUrl: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl); 
    const data: Book[] = await response.json(); 
    console.log(data); 
    createElementForEveryBook(data)
    createBookDiscreption()
    return data
}

function createElementForEveryBook(data: Book[]) {
    const mainBox: HTMLElement | null = document.querySelector('.main-content');
    const books = data.map((book: any, index: number) => {
        const bookElement = document.createElement('section');
        bookElement.setAttribute('class', `Book-${book.id}`)
        bookElement.setAttribute('audience', `${book.audience}`)
        bookElement.setAttribute('author', `${book.author}`)
        bookElement.setAttribute('pages', `${book.pages}`)
        bookElement.setAttribute('plot', `${book.plot}`)
        bookElement.setAttribute('publisher', `${book.publisher}`)
        bookElement.setAttribute('title', `${book.title}`)
        bookElement.setAttribute('year', `${book.year}`)
        bookElement.setAttribute('data-id', `${book.id}`)

        const bookLineElement = document.createElement('div')
        bookLineElement.setAttribute('class', `book-line-${book.id}`)
        const bookElementTitle = document.createElement('article');
        bookElementTitle.innerHTML = 
        `<h3> ${book.title} </h3>
         <p> ${book.author} </p>`
        mainBox?.appendChild(bookElement);
        bookElement.appendChild(bookLineElement);
        bookElement.appendChild(bookElementTitle);
    })
}

function createBookDiscreption() {
    const sections = document.querySelectorAll('section'); 
    const bodyElement = document.querySelector('body');
    sections.forEach(function (section) {
        const bookAudience = section.getAttribute('audience');
        const bookAuthor = section.getAttribute('author');
        const bookPages = section.getAttribute('pages');
        const bookPlot = section.getAttribute('plot');
        const bookPublisher = section.getAttribute('publisher');
        const bookTitle = section.getAttribute('title');
        const bookYear = section.getAttribute('year');
        const bookId = section.getAttribute('data-id');

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', `wrapper-Book-${bookId}`)
        wrapper.setAttribute('data-id', `data-${bookId}`)
        wrapper.classList.add('hidden')
        const bookInfoElement = document.createElement('section')
        bookInfoElement.setAttribute('class', `info-section__${bookId}`);
        //const bookElement = document.createElement('section');
        //bookElement.setAttribute('class', `Book-${book.id}`)
        wrapper.innerHTML =
        `<section class="Book-hidden__${bookId}"> </section>
         <article class="info-section"> 
            <h2>${bookTitle}</h2>
            <h3>${bookAuthor}</h3>
            <p>${bookPlot}</p>
            <aside> 
                <p>Audience: ${bookAudience}</p>
                <p>First published: ${bookYear}</p>
                <p>Pages: ${bookPages} </p>
                <p>Publisher: ${bookPublisher}</p>
            </aside>
            <button>Oh, I want to read it</button>
         </article>`
         bodyElement!.appendChild(wrapper);

         section.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const bookClicked = target.className; 
            console.log(bookClicked);
            const wrapperHidden = document.querySelector(`.wrapper-${bookClicked}`);
            console.log(wrapperHidden);
            wrapperHidden?.classList.remove('hidden');
            wrapperHidden?.classList.add('show');
         })
    })
}

export {getBooks};
