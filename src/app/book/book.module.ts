import {NgModule} from "@angular/core";
import {BookListComponent} from "./book-list/book-list.component";
import {BookListItemComponent} from "./book-list-item/book-list-item.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import { SharedModule } from "../shared/shared.module";
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    imports: [SharedModule, InputTextModule],
    declarations: [ BookListComponent, BookListItemComponent, BookDetailsComponent]
})
export class BookModule {

}