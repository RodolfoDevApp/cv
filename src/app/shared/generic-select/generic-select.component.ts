import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.css']
})
export class GenericSelectComponent {
  @Input() selectedOption: string = '';
  @Output() optionSelected = new EventEmitter<string>();
  @Input()  options = [
    { value: 'option1', label: 'Option 1' },
  ];
  @Input() label_text = 'Select an option'; 
  isSelectActive:boolean=false;

  SelectedOpt() {
    this.optionSelected.emit(this.selectedOption);
  }
  
  toggleDropdown() {
    this.isSelectActive = !this.isSelectActive;
  }

}
