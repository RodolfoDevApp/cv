import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isWindows98Theme = true; // Variable to toggle Windows 98 theme
  isNintendoTheme = false; // Variable to toggle Nintendo theme
  translations: any = {};
  options = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
  ];
  public translation: any;

  constructor(private http: HttpClient, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.loadTranslation();
    this.onSelectedOpt('en');
  }

  // Function to toggle themes
  toggleThemes() {
    this.isWindows98Theme = !this.isWindows98Theme;
    this.isNintendoTheme = !this.isNintendoTheme;
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  onSelectedOpt(lang: string){
    this.translate.use(lang);

  }
  private loadTranslation() {
    this.http.get('/assets/i18n/en.json').subscribe(res => {
      this.translation = res;
    });
  }
}
