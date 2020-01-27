import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { DelBookComponent } from './del-book/del-book.component';
<<<<<<< HEAD
import { HttpClientModule} from '@angular/common/http'
=======
import { EditBookComponent } from './edit-book/edit-book.component';
>>>>>>> 1dc94b616b01ba9806a667169718f04a5e970678

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    DelBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
