import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  subscriptionForm!: FormGroup;
  days: number[];
  months: string[];
  years: number[];

  constructor(private formBuilder: FormBuilder) {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  }
  ngOnInit() {

    this.subscriptionForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      childName: ['', [Validators.required, Validators.minLength(2)]],
      childDay: ['', [Validators.required]],
      childMonth: ['', [Validators.required]],
      childYear: ['', [Validators.required]],
      grade: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      topics: [[], [Validators.required, Validators.minLength(3)]],
    });
  }


  submitForm = () => {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

}
