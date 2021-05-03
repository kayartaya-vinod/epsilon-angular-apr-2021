import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { routes } from './routes';
import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CustomerModuleModule } from './customer-module/customer-module.module';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
// import { ContactService } from './services/contact.service';



const trCfg = {
  loader: {
    provide: TranslateLoader,
    deps: [HttpClient],
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http)
  }
};

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
    MovieDetailsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NewProductComponent,
    PageNotFoundComponent,
    HomeComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // import { HttpClientModule } from '@angular/common/http';
    RouterModule.forRoot(routes, { useHash: false }),
    TranslateModule.forRoot(trCfg),
    // CustomerModuleModule, // all corresponding code becomes part of AppModule
  ],
  providers: [
    // ContactService, 
    MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
