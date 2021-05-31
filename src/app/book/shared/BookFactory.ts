import {Book} from "../shared/book";

export class BookFactory {

    static convertBook(rawBook: Book): Book {
        // mert lehet hogy nincsen published datum a jsonban
        let  datum = rawBook.published != null ? new Date(rawBook.published) : null;
        let publishedDate =  rawBook.published != null ? new Date(datum.getFullYear(), datum.getMonth(), datum.getDate()) : null;

        return {
            ...rawBook,
            published: datum,
            publishedDate: publishedDate,
        };
    }

}