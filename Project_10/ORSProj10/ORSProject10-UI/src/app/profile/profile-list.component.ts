import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html'
})
export class ProfileListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

   super(locator.endpoints.PROFILE, locator, route)

   }

}
