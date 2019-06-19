import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {PaysFeatureComponent} from './pays/pays.feature.component';
import {PaysModalFeatureComponent} from './pays-modal/pays-modal.feature.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ClvAdvancedTableModule,
        ClvAngularPipesUtilitiesModule,
        LoadingBarHttpClientModule,
    ],
    declarations: [
        PaysFeatureComponent, PaysModalFeatureComponent
    ],
    exports: [
        PaysFeatureComponent, PaysModalFeatureComponent
    ],
    entryComponents: [
        PaysModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class PaysFeatureModule {
}
