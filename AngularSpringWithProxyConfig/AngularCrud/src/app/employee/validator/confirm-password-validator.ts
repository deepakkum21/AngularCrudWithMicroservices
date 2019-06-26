import { AbstractControl } from '@angular/forms';

export function ConfirmPasswordValidator(passwordGroup: AbstractControl): { [key: string]: any } | null {
    // console.log('confirmPassControl.value' + passwordGroup.get('confirmPassword').value);
    const passwordControl = passwordGroup.get('password');
    if (passwordControl && (passwordControl.value !== null || passwordControl.value !== undefined)) {
        const passwordValue = passwordControl.value;
        const confirmPassControl = passwordGroup.get('confirmPassword');
        if (confirmPassControl && (confirmPassControl.value !== null || confirmPassControl.value !== undefined)) {
            const confirmPasswordValue = confirmPassControl.value;
            if (passwordValue !== confirmPasswordValue) {
                return {
                    'isError': true
                };
            }
        }
    }
    return null;
}
