import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent  extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 

    super(locator.endpoints.LOCATION, locator, route)

  }

   populateForm(form, data) {
    form.id = data.id;
    form.city = data.city;
    form.state = data.state;
    form.country = data.country;
    form.locationStatus = data.locationStatus;
    console.log('Populated Form', form);
  }

}
