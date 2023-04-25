import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-tooltip',
  templateUrl: './generic-tooltip.component.html',
  styleUrls: ['./generic-tooltip.component.css']
})
export class GenericTooltipComponent {
  @Input() text: string ='';
  @Input() tooltipText: string ='';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
}
