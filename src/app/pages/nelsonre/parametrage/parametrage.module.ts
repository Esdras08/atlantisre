import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParametrageComponent} from './parametrage.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {MatDialogModule} from '@angular/material';
import {PaysFeatureModule} from '../../../features/pays/pays.feature.module';
import {StructureFeatureModule} from '../../../features/structure/structure.feature.module';
import {DeviseFeatureModule} from '../../../features/devise/devise.feature.module';
import {SecteuractiviteFeatureModule} from '../../../features/secteuractivite/secteuractivite.feature.module';
import {ProfessionFeatureModule} from '../../../features/profession/profession.feature.module';
import {TranslateModule} from '@ngx-translate/core';
/*function Declarations() {
    return [

    ];
}*/

const routes: Routes = [
    {path: '', component: ParametrageComponent}
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
        PaysFeatureModule,
        StructureFeatureModule,
        DeviseFeatureModule,
        SecteuractiviteFeatureModule,
        ProfessionFeatureModule,
        TranslateModule
    ],
    exports: [
    ],
    declarations: [
        ParametrageComponent,
    ],
    entryComponents: [],
})
export class ParametrageModule {
}
