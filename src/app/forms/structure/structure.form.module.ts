import {NgModule} from '@angular/core';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ServerURLInterceptor} from '../../core/utilities/interceptors.utilities';
import {StructureComboComponent} from './structure.combo.component';
import {StructureAutocompleteComponent} from './structure.autocomplete.component';
import {ClvAdvancedTableModule} from 'clv-advanced-table';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ClvAngularBootModule,
        HttpClientModule,
        ClvAdvancedTableModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [StructureComboComponent, StructureAutocompleteComponent],
    exports: [StructureComboComponent, StructureAutocompleteComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true}
    ]
})
export class StructureFormModule {
}
