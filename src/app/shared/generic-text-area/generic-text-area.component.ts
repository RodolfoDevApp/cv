import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-text-area',
  templateUrl: './generic-text-area.component.html',
  styleUrls: ['./generic-text-area.component.css']
})
export class GenericTextAreaComponent {
  @Input() placeholder: string = '';

}
