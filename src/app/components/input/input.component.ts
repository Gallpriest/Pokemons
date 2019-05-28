import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() id: number | string;
  @Input() label: string;
  @Input() className: string;
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() placeholder: string;

  @Output() inputVal = new EventEmitter<string>()

  VALUE: string;

  constructor() { }

  ngOnInit() {
  }

  getInputValue(event) {
    this.VALUE = event.target.value;
    this.inputVal.emit(this.VALUE);
  }

}
