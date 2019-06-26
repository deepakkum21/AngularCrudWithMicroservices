import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {
  // used when getting input from the suctomvalidator Directive from Html(view)
  @Input() appConfirmEqualValidator: string;

  constructor() { }
  // for confirm password validation using method 1
  // validate(control: AbstractControl): { [key: string]: any } | null {
  //   const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
  //   if (controlToCompare && controlToCompare.value !== control.value) {
  //     return { 'notEqual': true };
  //   }
  //   return null;
  // }

  validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
      const passwordField = passwordGroup.get('password');
      const confirmPasswordField = passwordGroup.get('confirmPassword');
      if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
        return { 'notEqual': true };
      }
      return null;
    }
}
