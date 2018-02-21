import { AbstractControl } from '@angular/forms';
export class MyValidators {

    // Confirm that 'password' and 'pssswordConfirm' controls match
    static matchPassword(AC: AbstractControl) {
        // Get values of password and passwordConfirm
        let password = AC.get('password').value;
        let confirmPassword = AC.get('passwordConfirm').value;
        if(password != confirmPassword) {
            // Set 'matchPassword' error if passwords do not match
            AC.get('passwordConfirm').setErrors( {matchPassword: true} );
        } else {
            // Don't set error if passwords do match
            return null;
        }
    }
}
