import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent extends BaseCtl {

 errorMessageTitle: string = '';
   errorMessagename: string = '';
 
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.EMPLOYEE, locator, route);
   }
 
    onUpload(userform: FormData) {
     this.submit();
     console.log(this.form.data.id + '---- after submit');
 
   }
 
   validateForm(form) {
     let flag = true;
     let validator = this.serviceLocator.dataValidator;
     flag = flag && validator.isNotNullObject(form.name);
     flag = flag && validator.isNotNullObject(form.address);
     flag = flag && validator.isNotNullObject(form.post);
     flag = flag && validator.isNotNullObject(form.salary);
 
     return flag;
   }
 
   populateForm(form, data) {
     form.id = data.id;
     form.name = data.name;
     form.address = data.address;
     form.post = data.post;
     form.salary = data.salary;
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
