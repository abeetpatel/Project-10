import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html'
})
export class SupportComponent extends BaseCtl {

  constructor(locator: ServiceLocatorService, route:ActivatedRoute) { 
    super(locator.endpoints.SUPPORT, locator, route)
  }

  
   populateForm(form, data) {
    form.id = data.id;
    form.userName = data.userName;
    form.issueType = data.issueType;
    form.issueDescription = data.issueDescription;
    form.ticketStatus = data.ticketStatus;
    console.log('Populated Form', form);
  }

}
