import {AbstractControl, ValidatorFn} from '@angular/forms';
export class ValidationService{

  static textValidate(control: AbstractControl){
    const reg = /^[A-Za-z]+$/
    console.log(control.value)
    if(control.value.match(reg)) {return null}
    else{return {'textValidate' : true}}
  };

  static NumberValidate = () => (control: AbstractControl) => {
    const result = /^[0-9]+$/.test(control.value);
    return result == true ? null : {'error': "Number only"}
  };
}
