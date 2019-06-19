import {SgiAutocomplete} from '../../core/behaviors/sgi-autocomplete';
import {HttpClient} from '@angular/common/http';
import {ModelMaskFieldImpl, RequestMethod} from 'clv-angular-boot';
import {Component} from '@angular/core';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';
import {ERP} from '../../core/services/erp.params';
import {API} from '../../core/services/api-services.params';
import {ClvTableColumnField} from 'clv-advanced-table';
import {PARAMETRES} from '../../core/services/parametres';
import {StructureModel} from '../../core/models/structure.model';

@Component({
    selector: 'app-autocomplete-structure',
    template: `
    <mat-form-field [style.display]="'inline-block'" [style.width]="'60%'">
      <input #minp (keyup)="handleInputChange(minp?.value)" [value]="inputValue"
             [required]="getRequired()" (blur)="handleBlurInputChange(minp?.value)"
             (change)="handleBlurInputChange(minp?.value)" placeholder="{{getPlaceholder()}}"
             [attr.aria-label]="getPlaceholder()"
             matInput [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
          <mat-option id="optid" #mopt></mat-option>
          <clv-advanced-table class="table-autocomplete" [params]="getTableParams()">
              <clv-tr [params]="getTableParams()"
                      (click)="handleInputChange(item[getDisplayedField()]);
                      minp.value = mopt.value = item[getDisplayedField()]; mopt._getHostElement().click();" ngClass="crsr-pointer"
                      *ngFor="let item of getFormData()?.Items; let i = index" [id]="i">
                  <clv-td><div fxLayout="row" fxLayoutAlign="space-between">
                      <div>{{item[getDisplayedField()]}}</div>
                  </div></clv-td>
              </clv-tr>
          </clv-advanced-table>
      </mat-autocomplete>
    </mat-form-field>
    <mat-form-field [style.display]="'inline-block'" [style.width]="'40%'">
      <mat-select #filterSelection [value]="getSearchParams()?.length>0 ? getSearchParams()[0].getName() : null"
                  (selectionChange)="handleInputSelectionChange($event.value)">
        <ng-container  *ngFor="let item of getSearchParams()">
          <mat-option *ngIf="item" [value]="item?.getName()">{{item?.getTitle()}}</mat-option>
        </ng-container>
      </mat-select>
    </mat-form-field>
    <app-form-error-list [submitted]="submitted" [name]="getName()" [formGroup]="getFormInstance()"></app-form-error-list>
  `,
    styles: [`
        #optid {
            position: absolute;
            opacity: 0;
            z-index: -50;
        }
    `]
})
export class StructureAutocompleteComponent extends SgiAutocomplete {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.getTableParams()
            .addColumn(new ClvTableColumnField().setTitle('Raison Sociale'))
            .setHeaderClass(PARAMETRES.TABLES.CLASS.HEADER)
            .setTableClass(PARAMETRES.TABLES.CLASS.TABLE)
            .setRowClass(PARAMETRES.TABLES.CLASS.ROW)
            .setFooterClass(PARAMETRES.TABLES.CLASS.FOOTER)
            .setTrImpairClass(PARAMETRES.TABLES.CLASS.TR_IMPAIR)
            .setTrPairClass(PARAMETRES.TABLES.CLASS.TR_PAIR);
    }

    beforeAll(): void {
        const model = new StructureModel();
        this.setModel(model);
        this.setSearchParams([
            new ModelMaskFieldImpl<any>().setTitle('Raison Sociale').setName('RaisonSocialeStructure'),
        ]);
        this.setDisplayedField('RaisonSocialeStructure');

        this.getRequest().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.STRUCTURE.GET))
            .setData({
                Index: 0,
                Size: 5,
                TakeAll: false,
                Deepth: 0,
                IsNotificationToShow: false,
                TitleNotificationToShow: '',
                NotificationToShow: '',
                ShowErrorInAlert: true,
                ShowLoader: true,
                Navigator: {},
                CanFilterByStruct: true
            });
    }

}
