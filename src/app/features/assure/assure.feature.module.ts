import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {AssureFeatureComponent} from './assure/assure.feature.component';
import {AssureModalFeatureComponent} from './assure-modal/assure-modal.feature.component';
import {FilialeFormModule} from '../../forms/filiale/filiale.form.module';
import {PersonneFormModule} from '../../forms/personne/personne.form.module';

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
        FilialeFormModule,
        PersonneFormModule,
    ],
    declarations: [
        AssureFeatureComponent, AssureModalFeatureComponent
    ],
    exports: [
        AssureFeatureComponent, AssureModalFeatureComponent
    ],
    entryComponents: [
        AssureModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class AssureFeatureModule {
}
