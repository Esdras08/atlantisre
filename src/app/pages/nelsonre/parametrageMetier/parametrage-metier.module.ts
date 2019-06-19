import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParametrageMetierComponent} from './parametrage-metier.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {MatDialogModule} from '@angular/material';
import {StructureFeatureModule} from '../../../features/structure/structure.feature.module';
import {DeviseFeatureModule} from '../../../features/devise/devise.feature.module';
import {SecteuractiviteFeatureModule} from '../../../features/secteuractivite/secteuractivite.feature.module';
import {ProfessionFeatureModule} from '../../../features/profession/profession.feature.module';
import {TranslateModule} from '@ngx-translate/core';
import {BrancheFeatureModule} from '../../../features/branche/branche.feature.module';
import {AssureFeatureModule} from '../../../features/assure/assure.feature.module';
import {FilialeFeatureModule} from '../../../features/filiale/filiale.feature.module';
import {ReassureurFeatureModule} from '../../../features/reassureur/reassureur.feature.module';
import {TraiteFeatureModule} from '../../../features/traite/traite.feature.module';
import {StatutAffaireFeatureModule} from '../../../features/statut-affaire/statut-affaire.feature.module';
import {StatutMouvementFeatureModule} from '../../../features/statut-mouvement/statut-mouvement.feature.module';
import {TypeEchangeFeatureModule} from '../../../features/type-echange/type-echange.feature.module';
import {TypeProcessusFeatureModule} from '../../../features/type-processus/type-processus.feature.module';
import {EtapeProcessusFeatureModule} from '../../../features/etape-processus/etape-processus.feature.module';
import {SuiviProcessusFeatureModule} from '../../../features/suivi-processus/suivi-processus.feature.module';
/*function Declarations() {
    return [

    ];
}*/

const routes: Routes = [
    {path: '', component: ParametrageMetierComponent}
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
        AssureFeatureModule,
        BrancheFeatureModule,
        FilialeFeatureModule,
        ReassureurFeatureModule,
        StructureFeatureModule,
        DeviseFeatureModule,
        SecteuractiviteFeatureModule,
        TranslateModule,
        TraiteFeatureModule,
        SecteuractiviteFeatureModule,
        ProfessionFeatureModule,
        StatutAffaireFeatureModule,
        StatutMouvementFeatureModule,
        TypeEchangeFeatureModule,
        TypeProcessusFeatureModule,
        EtapeProcessusFeatureModule,
        SuiviProcessusFeatureModule
    ],
    exports: [],
    declarations: [
        ParametrageMetierComponent
    ],
    entryComponents: [],
})
export class ParametrageMetierModule {
}
