import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  lang: string = '';

  constructor(private ts: TranslateService) { }

  ngOnInit(): void {
    this.lang = this.ts.getDefaultLang();
  }

  changeLanguage() {
    this.ts.use(this.lang);
  }

}
