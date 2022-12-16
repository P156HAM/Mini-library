var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
        const response = yield fetch(baseUrl);
        const data = yield response.json();
        console.log(data);
        createElementForEveryBook(data);
        return data;
    });
}
function createElementForEveryBook(data) {
    const mainBox = document.querySelector('.main-content');
    const books = data.map((book, index) => {
        console.log(index);
        const bookElement = document.createElement('section');
        const bookLineElement = document.createElement('div');
        bookLineElement.setAttribute('class', `book-line-${book.id}`);
        const bookElementTitle = document.createElement('article');
        bookElementTitle.innerHTML =
            `<h3> ${book.title} </h3>
         <p> ${book.author} </p>`;
        bookElement.setAttribute('class', `Book-${book.id}`);
        mainBox === null || mainBox === void 0 ? void 0 : mainBox.appendChild(bookElement);
        bookElement.appendChild(bookLineElement);
        bookElement.appendChild(bookElementTitle);
    });
}
export { getBooks };
