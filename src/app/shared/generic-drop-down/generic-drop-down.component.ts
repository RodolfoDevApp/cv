import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-drop-down',
  templateUrl: './generic-drop-down.component.html',
  styleUrls: ['./generic-drop-down.component.css']
})
export class GenericDropDownComponent {
  @Output() optionSelected = new EventEmitter<string>();
  // @Input() title:string = '';
  @Input() selectedOption: string = '';
  @Input()  options = [
    { value: 'option1', label: 'Option 1' },
  ];
  @Input() label_text = 'Select an option'; 
  // options: string[] = ["Option 1", "Option 2", "Option 3"];
  isDropdownOpen = false;
  selectedOpt:string = '';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if(this.selectedOpt === '')
    this.selectedOpt = this.selectedOption;
  }
  onOptionSelected(event: Event, option: string) {
    event.preventDefault(); // prevent default behavior of anchor element
    this.selectedOpt = option;
    event.stopPropagation();
    this.toggleDropdown();
    this.optionSelected.emit(option);
  }

}
