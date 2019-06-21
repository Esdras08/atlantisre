import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {EchangesComponent} from './echanges.component';
import {PipesModule} from '../../../theme/pipes/pipes.module';
import {QuillModule} from 'ngx-quill';
import {EchangeFeatureModule} from '../../../features/echanges/echange.feature.module';
/*function Declarations() {
    return [

    ];
}*/

const routes: Routes = [
    {path: '', component: EchangesComponent}
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
        TranslateModule,
        SecteuractiviteFeatureModule,
        ProfessionFeatureModule,
        PipesModule,
        QuillModule,
        EchangeFeatureModule
    ],
    exports: [],
    declarations: [
        EchangesComponent,
    ],
    entryComponents: [],
})
export class EchangesModule {
}
