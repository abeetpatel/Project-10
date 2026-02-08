import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html'
})
export class AuditListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.AUDIT, locator, route)

   }

}
