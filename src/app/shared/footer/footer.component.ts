import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isWindows98Theme = true; // Variable to toggle Windows 98 theme
  isNintendoTheme = false; // Variable to toggle Nintendo theme

}
