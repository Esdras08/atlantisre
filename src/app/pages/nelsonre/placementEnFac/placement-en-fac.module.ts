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
import {PlacementEnFacComponent} from './placement-en-fac.component';
import {AffaireFeatureModule} from '../../../features/affaire/affaire.feature.module';
import {ProcessusFeatureModule} from '../../../features/processus/processus.feature.module';
import {PlacementEnFacFeatureModule} from '../../../features/placement-en-fac/placement-en-fac.feature.module';
/*function Declarations() {
    return [

    ];
}*/

const routes: Routes = [
    {path: '', component: PlacementEnFacComponent}
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
        AffaireFeatureModule,
        ProcessusFeatureModule,
        PlacementEnFacFeatureModule
    ],
    exports: [],
    declarations: [
        PlacementEnFacComponent,
    ],
    entryComponents: [],
})
export class PlacementEnFacModule {
}
