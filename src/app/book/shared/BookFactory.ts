import {Book} from "../shared/book";

export class BookFactory {

    static convertBook(rawBook: Book): Book {

        // mert lehet hogy nincsen published datum a jsonban
        let datum: Date;
        let publishedDate: Date;

        if (rawBook.published) {
            datum = new Date(rawBook.published);
            publishedDate =  new Date(datum.getFullYear(), datum.getMonth(), datum.getDate());

        }

        console.log("json datum:", datum);
        console.log("json publishedDate:", publishedDate);
        //console.log("json publishedTime:", rawBook.published);
        
        return {
            ...rawBook,
            published: datum,
            publishedDate: publishedDate,
            //publishedTime: new Date(datum.getFullYear(), datum.getMonth(), datum.getDate(), datum.getHours(), datum.getMinutes(), datum.getMilliseconds())
        };
    }

}