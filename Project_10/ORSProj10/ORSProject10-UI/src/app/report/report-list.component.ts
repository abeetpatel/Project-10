import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html'
})
export class ReportListComponent extends BaseListCtl {

 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.REPORT, locator, route);
  }

}
