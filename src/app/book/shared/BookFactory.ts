import {Book} from "../shared/book";

export class BookFactory {

    static convertBook(rawBook: Book): Book {
        let datum = new Date(rawBook.published);
        console.log("datum:",datum);
        console.log("ezeze:", datum.getFullYear());
        console.log("ezeze:", datum.getMonth());
        console.log("ezeze:", datum.getDate());

        return {
            ...rawBook,
            //published: new Date(rawBook.published),
            published: new Date(datum.getFullYear(), datum.getMonth(), datum.getDate()),
            publishedDate: new Date(datum.getFullYear(), datum.getMonth(), datum.getDate()),
            //publishedTime: new Date(datum.getFullYear(), datum.getMonth(), datum.getDate(), datum.getHours(), datum.getMinutes(), datum.getMilliseconds())
        };
    }

}