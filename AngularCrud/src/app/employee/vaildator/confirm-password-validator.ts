import { AbstractControl } from '@angular/forms';

export function ConfirmPasswordValidator(confirmPassControl: AbstractControl) {
    if (confirmPassControl && (confirmPassControl.value !== null || confirmPassControl.value !== undefined)) {
        const confirmPassValue = confirmPassControl.value;
        const passwordControl = confirmPassControl.root.get('password');
        if (passwordControl && (passwordControl.value !== null || passwordControl.value !== undefined)) {
            console.log('got00');
            const passwordValue = passwordControl.value;
            if (passwordValue !== confirmPassValue) {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}
