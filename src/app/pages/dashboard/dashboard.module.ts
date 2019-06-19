import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {DashboardComponent} from './dashboard.component';
import {TilesComponent} from './tiles/tiles.component';
import {InfoCardsComponent} from './info-cards/info-cards.component';
import {DiskSpaceComponent} from './disk-space/disk-space.component';
import {TodoComponent} from './todo/todo.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {TeamComponent} from './team/team.component';
import {ClasseActifComponent} from './classe-actifs/classe-actif.component';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
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
      HttpClientModule,
      ClvAngularPipesUtilitiesModule,
      LoadingBarHttpClientModule
  ],
  declarations: [
    DashboardComponent,
    TilesComponent,
    InfoCardsComponent,
    DiskSpaceComponent,
    TodoComponent,
    AnalyticsComponent,
    TeamComponent,
      ClasseActifComponent
  ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true }
        ]
})
export class DashboardModule { }
