import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewProductComponent } from "./components/new-product/new-product.component";
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
        component: HomeComponent
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
        // this must be the last Route in this array
        path: '**',
        component: PageNotFoundComponent
    }
];