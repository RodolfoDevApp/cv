import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css'],
  
})
export class GenericInputComponent implements OnInit {
  @Input() labelInput: string = '';
  @Input() inputType: string = 'text'; // Default input type is 'text'
  @Input() inputClass: string = '';
  @Output() inputValueChange = new EventEmitter<string>();
  @Output() keydownEvent = new EventEmitter<KeyboardEvent>();
  
  inputValue: string | undefined ='' ;
  currencySimbol:string = '$'

  constructor(){
  }
  ngOnInit(): void {
  }


  onInputChange(event: any) {
    const newValue = event.target.value;
    if (this.inputType === 'number' || this.inputType === 'currency') {
      // Use regex to remove non-numeric characters from the input value
      this.inputValue = event.target.value.replace(/[^0-9.]/g, '');
      event.target.value = event.target.value.replace(/[^0-9.]/g, '');
    }else{
      this.inputValue = newValue;
    }
    
      this.inputValueChange.emit(this.inputValue);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event && event.target) {
      
      this.keydownEvent.emit(event);
    }
  }

}
