import {Component} from '@angular/core';
import {SgiCombo} from '../../core/behaviors/sgi-combo';
import {HttpClient} from '@angular/common/http';
import {RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';
import {DeviseModel} from '../../core/models/devise.model';
import {ERP} from '../../core/services/erp.params';
import {API} from '../../core/services/api-services.params';

@Component({
    selector: 'app-combo-re-devise',
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
        <app-form-error-list [submitted]="submitted" [name]="getName()" [formGroup]="getFormInstance()"></app-form-error-list>
    `
})
export class DeviseComboComponent extends SgiCombo {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }

    beforeAll(): void {
        this.setDisplayedField('LibelleDevise');
        const model = new DeviseModel();
        this.setModel(model);
        this.getRequest().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.DEVISE.GET))
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
