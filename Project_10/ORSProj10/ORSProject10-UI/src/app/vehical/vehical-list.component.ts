import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehical-list',
  templateUrl: './vehical-list.component.html'
})
export class VehicalListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
      super(locator.endpoints.VEHICAL, locator, route);
   }
}
