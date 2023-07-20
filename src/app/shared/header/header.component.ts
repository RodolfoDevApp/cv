import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MockDataService } from 'src/app/services/mock-data/mock-data.service';

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
  languaje:string = 'en';
  constructor(private http: HttpClient, private translate: TranslateService,private router: Router,private mockDataService:MockDataService) {
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

  clicked:boolean = false;
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  onSelectedOpt(lang: string){
    this.translate.use(lang);
    this.languaje = lang
    if(this.clicked)  
    this.clicked = !this.clicked;
  }
  private loadTranslation() {
    this.http.get('/assets/i18n/en.json').subscribe(res => {
      this.translation = res;
    });
  }
  onOptionSelected(e:any){
    console.log('opt', e);
    console.log('opt', typeof(e));
  }
  btnComponents(){
    this.router.navigate(['/story']);
    if(this.clicked)  
    this.clicked = !this.clicked;
  }
  btnHome(){
    this.router.navigate(['/home']);
    if(this.clicked)  
    this.clicked = !this.clicked;
  }
  btnCV(){
    this.mockDataService.downloadPDF(this.translate);
  }
}
