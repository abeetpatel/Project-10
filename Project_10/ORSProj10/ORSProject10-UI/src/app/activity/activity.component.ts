import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) { 

    super(locator.endpoints.ACTIVITY, locator, route)

  }

   populateForm(form, data) {
    form.id = data.id;
    form.activityName = data.activityName;
    form.performedBy = data.performedBy;
    form.activityStatus = data.activityStatus;
    form.activityTime = data.activityTime;
    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
