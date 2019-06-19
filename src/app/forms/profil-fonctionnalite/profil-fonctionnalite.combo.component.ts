import {ERP} from '../../core/services/erp.params';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SgiCombo} from '../../core/behaviors/sgi-combo';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';
import {RequestMethod} from 'clv-angular-boot';
import {API} from '../../core/services/api-services.params';
import {ProfilFonctionnaliteModel} from '../../core/models/profil-fonctionnalite.model';

@Component({
    selector: 'app-combo-re-profil-fonctionnalite',
    template: `
        <form [formGroup]="getFormInstance()">
            <mat-form-field style="width: 100%">
                <mat-select [placeholder]="placeholder" (blur)="checkInfo()"
                            (selectionChange)="handleInputChange($event.value)"
                            [formControlName]="getName()" [required]="getRequired()">
                    <mat-option [value]="">-- Selectionnez une valeur --</mat-option>
                    <mat-option *ngFor="let item of getFormData()?.Items" [value]="item[getName()]">
                        {{item[getDisplayedField()]}}</mat-option>
                </mat-select>
                <mat-hint align="start">{{hint}}</mat-hint>
            </mat-form-field>
        </form>
        <app-form-error-list [name]="getName()" [formGroup]="getFormInstance()"></app-form-error-list>
    `
})
export class ProfilFonctionnaliteComboComponent extends SgiCombo {
    hint = '';
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    beforeAll(): void {
        this.setDisplayedField('CodeFonctionnalite');
        const model = new ProfilFonctionnaliteModel();
        this.setModel(model);
        this.getRequest().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PROFIL_FONCTIONNALITE.GET))
            .setData({
                TakeAll: true,
                SortOrder: 'Ascending',
                ItemToSearch: {
                    InfoSearchCode: {Consider: false},
                    InfoSearchCodeReference: {Consider: false},
                    InfoSearchIdSensOrdre: {Consider: false},
                    InfoSearchLibelle: {Consider: false}
                }
            });
    }
}
