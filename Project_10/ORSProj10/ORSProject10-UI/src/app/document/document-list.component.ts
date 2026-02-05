import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html'
})
export class DocumentListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route : ActivatedRoute) {
    super(locator.endpoints.DOCUMENT, locator, route);
   }

}
