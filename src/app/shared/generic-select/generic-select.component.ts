import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.css']
})
export class GenericSelectComponent {
  selectedOption: string = '';
  @Output() optionSelected = new EventEmitter<string>();
  @Input()  options = [
    { value: 'option1', label: 'Option 1' },
  ];
  @Input() label_text = 'Select an option'; 
  isSelectActive:boolean=false;

  SelectedOpt() {
    console.log('Selected Option:', this.selectedOption);
    this.optionSelected.emit(this.selectedOption); // Emit selected option to parent component
  }
  toggleDropdown() {
    this.isSelectActive = !this.isSelectActive;
  }

}
