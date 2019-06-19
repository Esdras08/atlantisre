import {Component} from '@angular/core';
import {ModelImpl, ModelMaskFieldImpl} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiComboOffline} from '../../core/behaviors/sgi-combo-offline';

@


    Component({
    selector: 'app-combo-is-connected',
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
export class IsConnectedComboComponent extends SgiComboOffline {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.setFormData({Items: [
                { IsConnected: 'Non', value: 'Non' },
                { IsConnected: 'Oui', value: 'Oui' }
            ]});
    }

    beforeAll(): void {
        this.setDisplayedField('value');
        this.setName('IsConnected');
        // this.setControlName('IsConnected');
        const model: ModelImpl = new ModelImpl();
        model.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('value'))
            .addField(new ModelMaskFieldImpl<any>().setName('IsConnected'));
        this.setModel(model);
    }
}
