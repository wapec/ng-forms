import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {

  @Input() parentForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  get aliases() {
    return this.parentForm.get('aliases') as FormArray;
  }

  addAlias(payload: string) {
    this.aliases.push(this.fb.control(payload || ''));
  }

}
