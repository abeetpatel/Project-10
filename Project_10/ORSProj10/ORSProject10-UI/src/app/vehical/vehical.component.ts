import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehical',
  templateUrl: './vehical.component.html'
})
export class VehicalComponent  extends BaseCtl{

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
   super(locator.endpoints.VEHICAL, locator, route);
  }



  populateForm(form, data) {
    form.id = data.id;
    form.vehicalNo = data.vehicalNo;
    form.bodyType = data.bodyType;
    form.brand = data.brand;
    form.purchaseDate = data.purchaseDate;
    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  

}
