import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent {
  @Input() btnClass:string = 'primary-button';
  @Input() title:string = '';
  get buttonClass(): string {
    if (this.btnClass === 'primary') {
      return 'primary-button';
    } else if (this.btnClass === 'success') {
      return 'success-button';
    } else if (this.btnClass === 'warning') {
      return 'warning-button';
    } else if (this.btnClass ==='danger') {
      return 'danger-button';
    } else {
      return '';
    }
  }

}
