import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {NgModule} from '@angular/core';
import {ProfessionModalFeatureComponent} from './profession-modal/profession-modal.feature.component';
import {ProfessionFeatureComponent} from './profession/profession.feature.component';

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
        ProfessionFeatureComponent, ProfessionModalFeatureComponent
    ],
    exports: [
        ProfessionFeatureComponent, ProfessionModalFeatureComponent
    ],
    entryComponents: [ProfessionModalFeatureComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}]
})
export class ProfessionFeatureModule {}
