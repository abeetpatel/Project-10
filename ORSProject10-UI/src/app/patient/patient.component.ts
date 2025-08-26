import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent extends BaseCtl{

 errorMessageTitle: string = '';
    errorMessagename: string = '';
  
    constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
      super(locator.endpoints.PATIENT, locator, route);
    }
  
     onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
  
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.fullName);
      flag = flag && validator.isNotNullObject(form.gender);
      flag = flag && validator.isNotNullObject(form.age);
      flag = flag && validator.isNotNullObject(form.phoneNumber);
      flag = flag && validator.isNotNullObject(form.address);
      flag = flag && validator.isNotNullObject(form.disease);
      flag = flag && validator.isNotNullObject(form.admissionDate);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.fullName = data.fullName;
      form.gender = data.gender;
      form.age = data.age;
      form.phoneNumber = data.phoneNumber;
      form.address = data.address;
      form.disease = data.disease;
      form.admissionDate = data.admissionDate;
    }
  
    validateName(event: KeyboardEvent): void {
      const inputValue = (event.target as HTMLInputElement).value;
      const inputChar = event.key;
      const alphabetPattern = /^[a-zA-Z]*$/;  // Pattern to match only alphabetic characters
  
      if (!alphabetPattern.test(inputChar) && !['Backspace', 'Delete', 'Tab'].includes(inputChar)) {
        event.preventDefault();
        this.errorMessagename = 'Only alphabets are allowed.';
        return;
      }
  
      if (inputValue.length < 3) {
        this.errorMessagename = 'fullName must be at least 3 characters long.';
      } else if (inputValue.length > 15) {
        this.errorMessagename= 'fullName must not exceed 15 characters.';
      } else {
        this.errorMessagename = '';  // Clear error message if valid
      }
    }
  
    validateAlphabetInput(event) {
      const charCode = event.which || event.keyCode;
      const charStr = String.fromCharCode(charCode);
  
      // Regular expression to test if the character is a letter
      if (!/^[a-zA-Z]+$/.test(charStr)) {
        event.preventDefault();
      }
    }
  

}
