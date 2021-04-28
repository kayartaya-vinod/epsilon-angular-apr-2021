import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// selectors can be:
// 1. element selectors 'app-root' --> <app-root></app-root>
// 2. id selector '#myapp' --> <div id='myapp'></div>
// 3. class selector '.myapp' --> <div class='myapp'></div>
// ... other selectors

// A class to represent a component
@Component({
    selector: 'app-root',
    template: `<h1>Hello, world!</h1>
    <hr>
    <p>Developed by Vinod, powered by Angular</p>
    `
})
class HelloWorldComponent {
}

// another component
@Component({
    selector: 'author-info',
    template: `<p>Name: {{name}}</p>
    <p>Email: {{email}}</p>`
})
class AuthorInfoComponent {
    name: string = 'Vinod';
    email: string = 'vinod@vinod.co';
}

// a class representing a module
@NgModule({
    declarations: [
        // list of all components, directives, pipes go here
        HelloWorldComponent, AuthorInfoComponent
    ],
    bootstrap: [
        // list of components that should initially be rendered via index.html
        HelloWorldComponent,
        AuthorInfoComponent
    ],
    imports: [
        // list of modules that this module depends on (or includes)
        BrowserModule, // needed by Angular for DOM manipulation
    ],
    providers: [
        // list of all services (injectables) are listed here
    ],
    exports: [
        // list of all components/directives/pipes that can be imported by other NgModules
    ]
})
class MyAppModule {
}

// instruct angular to bootstrap one of the available modules - ex: MyAppModule
platformBrowserDynamic().bootstrapModule(MyAppModule)
    .catch(console.log);