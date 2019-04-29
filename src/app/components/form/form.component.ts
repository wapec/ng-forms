import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {forbiddenValidator} from '../../directives';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  parentForm = this.fb.group({
    fullName: ['',
      [Validators.required, forbiddenValidator(/sample/i)]
    ],
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    select: [null,
      [Validators.required, forbiddenValidator(/option 3/i)]
    ],
    message: ['',
      [Validators.required, Validators.minLength(20)]
    ],
    terms: [false, Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: this.fb.group({
        name: ['', [Validators.required, forbiddenValidator(/texas/i)]],
        restricted: [false, Validators.required]
      }),
      zip: ['', [Validators.required, Validators.pattern('[0-9]{6}')]]
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
