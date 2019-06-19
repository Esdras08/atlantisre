import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {StructureFeatureComponent} from './structure/structure.feature.component';
import {StructureModalFeatureComponent} from './structure-modal/structure-modal.feature.component';
import {DeviseFormModule} from '../../forms/devise/devise.form.module';
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
        DeviseFormModule,
        PaysFormModule
    ],
    declarations: [
        StructureFeatureComponent, StructureModalFeatureComponent
    ],
    exports: [
        StructureFeatureComponent, StructureModalFeatureComponent
    ],
    entryComponents: [
        StructureModalFeatureComponent
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class StructureFeatureModule {
}
