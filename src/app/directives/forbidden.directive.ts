import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appForbidden]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ForbiddenDirective, multi: true}
  ]
})
export class ForbiddenDirective implements Validator {

  constructor() {
  }

  @Input('appForbidden') forbidden: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbidden ? forbiddenValidator(new RegExp(this.forbidden, 'i'))(control)
      : null;
  }

}

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbidden': {value: control.value}} : null;
  };
}
