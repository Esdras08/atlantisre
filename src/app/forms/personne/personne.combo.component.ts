import {Component} from '@angular/core';
import {SgiCombo} from '../../core/behaviors/sgi-combo';
import {HttpClient} from '@angular/common/http';
import {RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';
import {ERP} from '../../core/services/erp.params';
import {API} from '../../core/services/api-services.params';
import {PersonneModel} from '../../core/models/personne.model';

@Component({
    selector: 'app-combo-re-personne',
    template: `
        <form [formGroup]="getFormInstance()">
            <mat-form-field style="width: 100%">
                <mat-select [placeholder]="placeholder" (blur)="checkInfo()"
                            (selectionChange)="handleInputChange($event.value)"
                            [formControlName]="getName()" [required]="getRequired()">
                    <mat-option>-- Selectionnez une valeur --</mat-option>
                    <mat-option *ngFor="let item of getFormData()?.Items" [value]="item[getName()]">
                        {{item[getDisplayedField()]}}</mat-option>
                </mat-select>
                <mat-hint align="start">{{hint}}</mat-hint>
            </mat-form-field>
        </form>
        <app-form-error-list [name]="getName()" [formGroup]="getFormInstance()"></app-form-error-list>
    `
})
export class PersonneComboComponent extends SgiCombo {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    beforeAll(): void {
        this.setDisplayedField('Nom');
        const model = new PersonneModel();
        this.setModel(model);
        this.getRequest().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PERSONNE.GET))
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
