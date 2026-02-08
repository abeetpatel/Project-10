import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html'
})
export class AuditComponent  extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.AUDIT, locator, route);

   }

   populateForm(form, data) {
    form.id = data.id;
    form.actionType = data.actionType;
    form.actionBy = data.actionBy;
    form.actionResult = data.actionResult;
    form.actionTime = data.actionTime;
    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
