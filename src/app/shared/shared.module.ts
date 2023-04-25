import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { GenericDropDownComponent } from './generic-drop-down/generic-drop-down.component';
import { GenericTextAreaComponent } from './generic-text-area/generic-text-area.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GenericTooltipComponent } from './generic-tooltip/generic-tooltip.component';
import { FormsModule } from '@angular/forms';
import { GenericSelectComponent } from './generic-select/generic-select.component';
import { GenericDancerComponent } from './generic-dancer/generic-dancer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GenericPageNotFoundComponent } from './generic-page-not-found/generic-page-not-found.component';

@NgModule({
  declarations: [
    GenericInputComponent,
    GenericDropDownComponent,
    GenericTextAreaComponent, 
    GenericTableComponent, 
    GenericModalComponent, 
    HeaderComponent, 
    FooterComponent, 
    GenericTooltipComponent, GenericSelectComponent, GenericDancerComponent, GenericPageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient]
      }
    }) 
    
  ],
  exports:[
    GenericInputComponent,
    GenericDropDownComponent,
    GenericTextAreaComponent, 
    GenericTableComponent, 
    GenericModalComponent, 
    HeaderComponent, 
    FooterComponent, 
    GenericTooltipComponent, CurrencyPipe, GenericSelectComponent,GenericDancerComponent,TranslateModule,GenericPageNotFoundComponent
  ],
  providers:[
    CurrencyPipe
  ]
})
export class SharedModule { }
