import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookFormComponent} from './book-form/book-form.component';
import { BookItemComponent } from './book-item/book-item.component';

//Définir les routes
const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'add-Book', component: BookFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
