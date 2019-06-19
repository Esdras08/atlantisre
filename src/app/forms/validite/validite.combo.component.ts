import {Component} from '@angular/core';
import {ModelImpl, ModelMaskFieldImpl} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {SgiComboOffline} from '../../core/behaviors/sgi-combo-offline';

@


    Component({
    selector: 'app-combo-validite',
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
    `
})
export class ValiditeComboComponent extends SgiComboOffline {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.setFormData([
            { name: 'Jour', code: 'Jour' },
            { name: 'A date déterminée', code: 'Déterminée' },
            { name: 'A révocation', code: 'Révocation' },
            { name: 'Mensuelle', code: 'Mensuelle' }
        ]);
    }

    beforeAll(): void {
        this.setDisplayedField('name');
        this.setName('code');
        // this.setControlName('code');
        const model: ModelImpl = new ModelImpl();
        model.getMask()
            .addField(new ModelMaskFieldImpl<any>().setName('name'))
            .addField(new ModelMaskFieldImpl<any>().setName('code'));
        this.setModel(model);
    }
}
