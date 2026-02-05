import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){

    super(locator.endpoints.ATTENDANCE,locator, route );

   }

    populateForm(form, data) {
    form.id = data.id;
    form.personName = data.personName;
    form.attendanceStatus = data.attendanceStatus;
    form.remarks = data.remarks;
    form.attendanceDate = data.attendanceDate;
    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
