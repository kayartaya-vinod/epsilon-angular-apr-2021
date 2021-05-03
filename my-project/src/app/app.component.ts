import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  // since this is the very first component being loaded, 
  // initialize the default locale for your i18n
  constructor(private ts: TranslateService) {
  }

  ngOnInit() {
    this.ts.setDefaultLang('english'); // assets/i18n/english.json
  }
}
