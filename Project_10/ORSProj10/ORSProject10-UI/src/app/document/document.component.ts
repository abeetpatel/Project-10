import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html'
})
export class DocumentComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.DOCUMENT, locator, route);
   }

    populateForm(form, data) {
    form.id = data.id;
    form.documentName = data.documentName;
    form.documentType = data.documentType;
    form.filePath = data.filePath;
    form.uploadDate = data.uploadDate;
    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
