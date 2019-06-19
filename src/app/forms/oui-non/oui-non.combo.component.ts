import {Component} from '@angular/core';
import {ModelImpl, ModelMaskFieldImpl} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiComboOffline} from '../../core/behaviors/sgi-combo-offline';

@


    Component({
    selector: 'app-combo-oui-non',
    template: `
        <form [formGroup]="getFormInstance()">
            <mat-form-field style="width: 100%">
                <mat-select [placeholder]="placeholder" [(value)]="selected" (selectionChange)="handleInputChange($event.value)"
                            [formControlName]="getName()" [required]="getRequired()">
                    <mat-option [value]="">-- Selectionnez une valeur --</mat-option>
                    <mat-option *ngFor="let item of getFormData()" [value]="item[getName()]">
                        {{item[getDisplayedField()]}}</mat-option>
                </mat-select>
            </mat-form-field>
        </form>
        <app-form-error-list [submitted]="submitted" [name]="getName()" [formGroup]="getFormInstance()"></app-form-error-list>
    `
})
export class OuiNonComboComponent extends SgiComboOffline {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.setFormData([
            { name: 'Non', value: 'Non' },
            { name: 'Oui', value: 'Oui' }
        ]);
    }

    beforeAll(): void {
        this.setDisplayedField('value');
        this.setName('name');
        // this.setControlName('name');
        const model: ModelImpl = new ModelImpl();
        model.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('value'))
            .addField(new ModelMaskFieldImpl<any>().setName('name'));
        this.setModel(model);
    }
}
