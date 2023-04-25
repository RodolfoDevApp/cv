import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generic-drop-down',
  templateUrl: './generic-drop-down.component.html',
  styleUrls: ['./generic-drop-down.component.css']
})
export class GenericDropDownComponent {
  @Output() optionSelected = new EventEmitter<string>();

  options: string[] = ["Option 1", "Option 2", "Option 3"];
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onOptionSelected(event: Event, option: string) {
    event.preventDefault(); // prevent default behavior of anchor element
    event.stopPropagation();
    this.toggleDropdown();
    this.optionSelected.emit(option);
  }

}
