import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from '../component/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisteruseCanDeactivateService implements CanDeactivate<RegisterComponent> {

  constructor() { }

  canDeactivate(component: RegisterComponent): boolean {
    console.log('enetered in the can deactivate vroute' + component.newRegisterForm);
    if ( component.newRegisterForm.dirty) {
      console.log('if condition');
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }
}
