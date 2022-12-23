function createElementForEveryBook(data) {
    const mainBox = document.querySelector('.main-content');
    const books = data.map((book) => {
        const bookElement = document.createElement('section');
        bookElement.setAttribute('class', `Book-${book.id}`);
        bookElement.setAttribute('audience', `${book.audience}`);
        bookElement.setAttribute('author', `${book.author}`);
        bookElement.setAttribute('pages', `${book.pages}`);
        bookElement.setAttribute('plot', `${book.plot}`);
        bookElement.setAttribute('publisher', `${book.publisher}`);
        bookElement.setAttribute('title', `${book.title}`);
        bookElement.setAttribute('year', `${book.year}`);
        bookElement.setAttribute('data-id', `${book.id}`);
        const bookLineElement = document.createElement('div');
        bookLineElement.setAttribute('class', `book-line-${book.id}`);
        const bookElementTitle = document.createElement('article');
        bookElementTitle.innerHTML =
            `<h3> ${book.title} </h3>
         <p> ${book.author} </p>`;
        mainBox?.appendChild(bookElement);
        bookElement.appendChild(bookLineElement);
        bookElement.appendChild(bookElementTitle);
    });
}
function createBookDiscreption() {
    const sections = document.querySelectorAll('section');
    const bodyElement = document.querySelector('body');
    createElements(sections, bodyElement);
    sections.forEach(function (section) {
        section.addEventListener('click', (event) => {
            const target = event.target;
            const bookClicked = target.className;
            console.log(bookClicked);
            const wrapperHidden = document.querySelector(`.wrapper-${bookClicked}`);
            wrapperHidden?.classList.remove('hidden');
            wrapperHidden?.classList.add('show');
        });
        const faHomeButton = document.querySelectorAll("li");
        faHomeButton.forEach(function (button) {
            button.addEventListener('click', () => {
                const allWrapper = document.querySelectorAll(".wrapper");
                allWrapper.forEach(function (wrapper) {
                    wrapper?.classList.remove('show');
                    wrapper?.classList.add('hidden');
                });
            });
        });
    });
}
function createElements(sections, bodyElement) {
    sections.forEach(function (section) {
        const bookAudience = section.getAttribute('audience');
        const bookAuthor = section.getAttribute('author');
        const bookPages = section.getAttribute('pages');
        const bookPlot = section.getAttribute('plot');
        const bookPublisher = section.getAttribute('publisher');
        const bookTitle = section.getAttribute('title');
        const bookYear = section.getAttribute('year');
        const bookId = section.getAttribute('data-id');
        const bookClassName = section.getAttribute('class');
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', `wrapper wrapper-Book-${bookId}`);
        wrapper.setAttribute('data-id', `data-${bookId}`);
        wrapper.classList.add('hidden');
        const bookInfoElement = document.createElement('section');
        bookInfoElement.setAttribute('class', `info-section__${bookId}`);
        wrapper.innerHTML =
            `<li><a href="#"><i class="fa fa-home" aria-hidden="true"></i></a></li>
         <section class="Book-hidden__${bookId}"> 
            <div class="Book-hidden__line"></div>
            <h1 class="h1-hidden">${bookTitle}</h1>
            <h2 class="h2-hidden">${bookAuthor}</h2>
         </section>
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
         </article>`;
        bodyElement.appendChild(wrapper);
        searchBook(bookTitle, bookClassName);
    });
}
function searchBook(bookTitle, bookClassName) {
    const searchBar = document.querySelector('input');
    const searchButton = document.querySelector('.search-button');
    searchButton?.addEventListener('click', () => {
        let searchValue = searchBar?.value;
        const errorMessage = document.querySelector('.error-message');
        if (searchValue == bookTitle) {
            const wrapperHidden = document.querySelector(`.wrapper-${bookClassName}`);
            wrapperHidden?.classList.remove('hidden');
            wrapperHidden?.classList.add('show');
        }
        else {
            errorMessage.innerHTML = 'This book does not exist, try searching for another book!';
        }
    });
}
export { createElementForEveryBook, createBookDiscreption };
