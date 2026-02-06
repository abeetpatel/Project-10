import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
  
})
export class ProfileComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {


    super(locator.endpoints.PROFILE, locator, route)

   }

    populateForm(form, data) {
    form.id = data.id;
    form.fullName = data.fullName;
    form.gender = data.gender;
    form.profileStatus = data.profileStatus;
    form.dob = data.dob;
    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }


}
