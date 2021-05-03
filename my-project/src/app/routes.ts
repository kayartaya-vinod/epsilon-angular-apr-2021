import { Routes } from "@angular/router";
import { BookListComponent } from "./components/book-list/book-list.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { ContactsInfoComponent } from "./components/contacts-info/contacts-info.component";
import { CounterComponent } from "./components/counter/counter.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { FilterableContactListComponent } from "./components/filterable-contact-list/filterable-contact-list.component";
import { HomeComponent } from "./components/home/home.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { NewProductComponent } from "./components/new-product/new-product.component";
import { NgswitchDemoComponent } from "./components/ngswitch-demo/ngswitch-demo.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'counter'
            },
            {
                path: 'counter',
                component: CounterComponent
            },
            {
                path: 'books',
                component: BookListComponent
            },
            {
                path: 'filterable-contacts',
                component: FilterableContactListComponent
            },
            {
                path: 'ng-switch-demo',
                component: NgswitchDemoComponent
            },
            {
                path: 'movies',
                component: MovieListComponent
            },
            {
                path: 'contacts',
                component: ContactListComponent,
                children: [
                    {
                        path: 'more-info',
                        component: ContactsInfoComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'product-details/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'new-product',
        component: NewProductComponent
    },
    {
        path: 'product-list',
        component: ProductListComponent
    },
    {
        path: 'edit-product/:id',
        component: EditProductComponent
    },
    {
        path: 'customers',
        // component: CustomerComponent
        loadChildren: './customer-module/customer-module.module#CustomerModuleModule'
    },
    {
        // this must be the last Route in this array
        path: '**',
        component: PageNotFoundComponent
    }
];