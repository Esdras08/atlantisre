import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {ContentHeaderComponent} from './content-header/content-header.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {TilesSharedComponent} from './tiles-shared/tiles-shared.component';
import {SgiAccordionComponent} from './sgi-accordion/sgi-accordion.component';
import {InfoCardsNumberComponent} from './info-cards-number/info-cards-number.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {HttpClientModule} from '@angular/common/http';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {CoreModule} from '../core/core.module';
import {FormErrorComponent} from './form-error/form-error.component';
import {FormErrorListComponent} from './form-error/form-error-list.component';
import {ButtonReportComponent} from './button-report/button-report.component';
import {ModalTemplateComponent} from './modal/modal-template.component';
import {PlacementFacCardComponent} from './cards/placement-fac-card.component';
import {NgHttpLoaderModule} from 'ng-http-loader';

export const MY_FORMATS = {
    parse: {
        dateInput: 'YYYY-MM-DD',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
  imports: [
    CommonModule,
      CoreModule,
    RouterModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
      FormsModule,
      NgxChartsModule,
      PerfectScrollbarModule,
      ReactiveFormsModule,
      ClvAdvancedTableModule,
      HttpClientModule,
      ClvAngularPipesUtilitiesModule,
      NgHttpLoaderModule
  ],
  exports: [
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ContentHeaderComponent,
    BreadcrumbComponent,
      TilesSharedComponent,
      SgiAccordionComponent,
      InfoCardsNumberComponent,
      FormErrorComponent,
      FormErrorListComponent,
      ButtonReportComponent,
      ModalTemplateComponent,
      PlacementFacCardComponent,
      NgHttpLoaderModule
  ],
  declarations: [
    ContentHeaderComponent,
    BreadcrumbComponent,
      TilesSharedComponent,
      SgiAccordionComponent,
      InfoCardsNumberComponent,
      FormErrorComponent,
      FormErrorListComponent,
      ButtonReportComponent,
      ModalTemplateComponent,
      PlacementFacCardComponent
  ],
    providers: [
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class SharedModule { }
