import {ERP} from '../../core/services/erp.params';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SgiCombo} from '../../core/behaviors/sgi-combo';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';
import {RequestMethod} from 'clv-angular-boot';
import {PaysModel} from '../../core/models/pays.model';
import {API} from '../../core/services/api-services.params';

@Component({
    selector: 'app-combo-re-pays',
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
        <app-form-error-list [submitted]="submitted" [name]="getName()" [formGroup]="getFormInstance()"></app-form-error-list>
    `
})
export class PaysComboComponent extends SgiCombo {
    hint = 'Entrez un Pays';
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    beforeAll(): void {
        this.setDisplayedField('Libelle');
        const model = new PaysModel();
        this.setModel(model);
        this.getRequest().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PAYS.GET))
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
