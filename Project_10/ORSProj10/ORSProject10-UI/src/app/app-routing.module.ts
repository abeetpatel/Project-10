
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import { SubjectComponent } from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report/report-list.component';
import { VehicalComponent } from './vehical/vehical.component';
import { VehicalListComponent } from './vehical/vehical-list.component';
import { DocumentComponent } from './document/document.component';
import { DocumentListComponent } from './document/document-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceListComponent } from './attendance/attendance-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile/profile-list.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },

    // ***********EMPLOYEE*************
    {
        path: 'employee',
        component:EmployeeComponent
    },
    // ***********CUSTOMER*************

    {
        path: 'customer',
        component: CustomerComponent

    },
    {
        path: 'customerlist',
        component: CustomerlistComponent

    },
    {
        path: 'customet/:id',
        component: CustomerComponent

    },

    // ***********PRODUCT*************

    {
        path: 'product',
        component: ProductComponent

    },
    {
        path: 'productlist',
        component: ProductListComponent

    },
    {
        path: 'product/:id',
        component: ProductComponent

    },

    // ======================================
    {
        path: 'loader',
        component: LoaderComponent

    },
    //====================LOGIN====================
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },

    {
        path: 'spinner',
        component: SpinnerComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },

    //================================================
    {
        path: 'message',
        component: MessageComponent,

    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent

    },
    //=======================MARKSHEET======================
    {
        path: 'marksheet',
        component: MarksheetComponent

    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent

    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent

    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent

    },
    {
        path: 'getmarksheet',
        component: GetmarksheetComponent

    },

    //==================COLLEGE======================
    {
        path: 'college',
        component: CollegeComponent

    },
    {
        path: 'college/:id',
        component: CollegeComponent

    },
    {
        path: 'collegelist',
        component: CollegeListComponent

    },


     //==================REPORT======================
    {
        path: 'report',
        component: ReportComponent

    },
    {
        path: 'report/:id',
        component: ReportComponent

    },
    {
        path: 'reportlist',
        component: ReportListComponent

    },

     //==================VEHICAL======================
    {
        path: 'vehical',
        component: VehicalComponent

    },
    {
        path: 'vehical/:id',
        component: VehicalComponent

    },
    {
        path: 'vehicallist',
        component: VehicalListComponent

    },

    //==================DOCUMENT======================
    {
        path: 'document',
        component: DocumentComponent

    },
    {
        path: 'document/:id',
        component: DocumentComponent

    },
    {
        path: 'documentlist',
        component: DocumentListComponent

    },

    //==================ATTENDANCE======================
    {
        path: 'attendance',
        component: AttendanceComponent

    },
    {
        path: 'attendance/:id',
        component: AttendanceComponent

    },
    {
        path: 'attendancelist',
        component: AttendanceListComponent

    },

    //==================PROFILE======================
    {
        path: 'profile',
        component: ProfileComponent

    },
    {
        path: 'profile/:id',
        component: ProfileComponent

    },
    {
        path: 'profilelist',
        component: ProfileListComponent

    },

    //====================STUDENT====================
    {
        path: 'student',
        component: StudentComponent

    },
    {
        path: 'student/:id',
        component: StudentComponent

    },
    {
        path: 'studentlist',
        component: StudentListComponent

    },

    //===================USER===============
    {
        path: 'user',
        component: UserComponent

    },
    {
        path: 'user/:id',
        component: UserComponent

    },
    {
        path: 'userlist',
        component: UserListComponent

    },

    //======================ROLE=====================
    {
        path: 'role',
        component: RoleComponent

    },
    {
        path: 'rolelist',
        component: RoleListComponent

    },
    {
        path: 'role/:id',
        component: RoleComponent

    },

    //======================COURSE=====================
    {
        path: 'course',
        component: CourseComponent

    },
    {
        path: 'courselist',
        component: CourseListComponent

    },
    {
        path: 'course/:id',
        component: CourseComponent

    },

    //=====================FACLTY======================
    {

        path: 'faculty',
        component: FacultyComponent

    },
    {
        path: 'facultylist',
        component: FacultyListComponent

    },
    {
        path: 'faculty/:id',
        component: FacultyComponent

    },

    //=================TIMETABLE======================
    {
        path: 'timetable',
        component: TimetableComponent


    },
    {
        path: 'timetablelist',
        component: TimetableListComponent

    },
    {
        path: 'timetable/:id',
        component: TimetableComponent

    },

    //======================SUBJECT==================
    {
        path: 'subject',
        component: SubjectComponent

    },
    {
        path: 'subjectlist',
        component: SubjectListComponent

    },
    {
        path: 'subject/:id',
        component: SubjectComponent

    },

    //===================================================
    {
        path: 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent


    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})


export class AppRoutingModule { }