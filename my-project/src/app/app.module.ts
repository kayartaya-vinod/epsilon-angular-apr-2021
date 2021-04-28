import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
