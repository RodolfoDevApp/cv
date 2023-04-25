import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isWindows98Theme = false; // Variable to toggle Windows 98 theme
  isNintendoTheme = true; // Variable to toggle Nintendo theme

  constructor(){

  }


  onInputValueChange(newValue: string) {
    // Handle input value change event here
    console.log('Input value changed:', newValue);
  }

  onKeyDown(event: KeyboardEvent) {
    // Handle keydown event here
    console.log('Keydown event:', event);
  }
  onOptionSelected(option: string) {
    // Handle the selected option in the parent component
    console.log('Option selected in parent:', option);
  }
  onSelectedOpt(option:any){
    console.log('Option selected in parent:', option);
  }

  
  // Function to toggle themes
  toggleThemes() {
    this.isWindows98Theme = !this.isWindows98Theme;
    this.isNintendoTheme = !this.isNintendoTheme;
  }

}
