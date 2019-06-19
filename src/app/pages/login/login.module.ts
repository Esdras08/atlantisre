import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './login.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {HttpClientModule} from '@angular/common/http';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {ToastrModule} from 'ngx-toastr';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
      SharedModule,
      FormsModule,
      NgxChartsModule,
      PerfectScrollbarModule,
      ReactiveFormsModule,
      ClvAdvancedTableModule,
      ClvAngularBootModule,
      HttpClientModule,
      ClvAngularPipesUtilitiesModule,
      LoadingBarHttpClientModule,
      ToastrModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
