import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edu-button',
  templateUrl: './edu-button.component.html',
  styleUrls: ['./edu-button.component.scss'],
})
export class EduButtonComponent  implements OnInit {
 
  @Input() btntxt!: string;
  @Input() tooltipText!: string;
  @Input() btntype!: string;
  @Input() isDisabled!: boolean;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClickValue = new EventEmitter<string>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onChangeValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  onClickEvent() {
    this.onClickValue.emit();
  }

  onChangeEvent() {
    this.onChangeValue.emit();
  }
}
