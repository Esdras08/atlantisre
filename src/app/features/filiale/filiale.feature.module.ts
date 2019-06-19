import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {FilialeFeatureComponent} from './filiale/filiale.feature.component';
import {FilialeModalFeatureComponent} from './filiale-modal/filiale-modal.feature.component';
import {PaysFormModule} from '../../forms/pays/pays.form.module';

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
        PaysFormModule
    ],
    declarations: [
        FilialeFeatureComponent, FilialeModalFeatureComponent
    ],
    exports: [
        FilialeFeatureComponent, FilialeModalFeatureComponent
    ],
    entryComponents: [
        FilialeModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class FilialeFeatureModule {
}
