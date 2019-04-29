import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  parentForm = this.fb.group({
    firstName: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    select: ['', Validators.required],
    message: ['', Validators.required],
    terms: [false, Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: this.fb.group({
        name: [''],
        restricted: [false]
      }),
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('First'),
      this.fb.control('Second'),
      this.fb.control('Third')
    ])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.parentForm.value);
  }

}
