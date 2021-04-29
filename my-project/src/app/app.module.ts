import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NgswitchDemoComponent } from './components/ngswitch-demo/ngswitch-demo.component';
import { ContactsInfoComponent } from './components/contacts-info/contacts-info.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterableContactListComponent } from './components/filterable-contact-list/filterable-contact-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieService } from './services/movie.service';
// import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    BookListComponent,
    ContactListComponent,
    NgswitchDemoComponent,
    ContactsInfoComponent,
    ContactCardComponent,
    FullnamePipe,
    SortPipe,
    FilterPipe,
    FilterableContactListComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // import { HttpClientModule } from '@angular/common/http';
  ],
  providers: [
    // ContactService, 
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
