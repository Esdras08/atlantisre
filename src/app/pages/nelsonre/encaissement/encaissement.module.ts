import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {MatDialogModule} from '@angular/material';
import {EncaissementComponent} from './encaissement.component';
import {EncaissementFeatureModule} from '../../../features/encaissement/encaissement.feature.module';
/*function Declarations() {
    return [

    ];
}*/

const routes: Routes = [
    {path: '', component: EncaissementComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ClvAdvancedTableModule,
        MatDialogModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        EncaissementFeatureModule
    ],
    exports: [],
    declarations: [
        EncaissementComponent,
    ],
    entryComponents: [],
})
export class EncaissementModule {
}
