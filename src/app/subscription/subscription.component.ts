import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

interface SelectedTopics {
  [topic: string]: boolean;
}
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
  grades: string[];
  topicsList: string[];
  selectedTopics: SelectedTopics = {};

  constructor() {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    this.grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'];
    this.topicsList = ['Arabic', 'Islamic', 'English', 'History', 'Sports'];
  }
  ngOnInit() {

    this.subscriptionForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      childName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      childDay: new FormControl('', [Validators.required]),
      childMonth: new FormControl('', [Validators.required]),
      childYear: new FormControl('', [Validators.required]),
      grade: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      topics: new FormControl([], [Validators.required, Validators.minLength(3)]),
    });

    this.subscriptionForm.setValidators(this.birthdateValidator());

  }

  birthdateValidator(): any {
    return (formGroup: FormGroup) => {
      const day = formGroup.get('childDay')?.value;
      const month = formGroup.get('childMonth')?.value;
      const year = formGroup.get('childYear')?.value;

      if (day && month && year) {
        const selectedDate = new Date(year, this.months.indexOf(month), day);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
          formGroup.get('childDay')?.setErrors({ futureDate: true });
          formGroup.get('childMonth')?.setErrors({ futureDate: true });
          formGroup.get('childYear')?.setErrors({ futureDate: true });
          return { futureDate: true };
        }
      }

      return null;
    };
  }


  submitForm = () => {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  toggleTopic(topic: string) {
    this.selectedTopics[topic] = !this.selectedTopics[topic];
    this.updateTopicsFormControl();
  }

  updateTopicsFormControl() {
    const selectedTopics = Object.keys(this.selectedTopics).filter(topic => this.selectedTopics[topic]);
    this.subscriptionForm.get('topics')?.setValue(selectedTopics);
  }

}
