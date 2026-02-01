import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
  super(locator.endpoints.REPORT, locator, route);
 }

 validate() {
    return this.validateForm(this.form.data);
  }
 

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.reportName);
    flag = flag && validator.isNotNullObject(form.generatedDate);
    flag = flag && validator.isNotNullObject(form.generatedBy);
    flag = flag && validator.isNotNullObject(form.reportStatus);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.reportName = data.reportName;
    form.generatedDate = data.generatedDate;
    form.generatedBy = data.generatedBy;
    form.reportStatus = data.reportStatus;
    console.log('Populated Form', form);
  }
 
}
