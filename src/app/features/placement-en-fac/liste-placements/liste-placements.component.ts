import {Component, OnInit} from '@angular/core';
import {ClvHttpRequest, HttpRequestSender, RequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {WebServicesUtilities} from '../../../core/utilities/web-services.utilities';
import {ERP} from '../../../core/services/erp.params';
import {API} from '../../../core/services/api-services.params';
import {AffaireModel} from '../../../core/models/affaire.model';

@Component({
    selector: 'app-re-liste-placement',
    templateUrl: './liste-placements.component.html',
    styles: [`
        [role="listitem"]:hover {
            background: #F2F2F2;
        }
        [role="listitem"] {
            cursor: pointer;
        }
    `]
})
export class ListePlacementsComponent implements OnInit {
    private _placementsEnFac: any;
    private _enCours: any;
    private _pasEnCours: any;
    private _termines: any;
    constructor(public httpClient: HttpClient) {
    }

    getPlacementsEnFac() {
        const request = new ClvHttpRequest();
        const requestSender = new HttpRequestSender(this.httpClient);
        request.setUrl(WebServicesUtilities.getSimpleUrl2(ERP.UrlControlers.Generated, API.PLACEMENT_EN_FAC.GET))
            .setMethod(RequestMethod.POST).setData({});
        requestSender.setRequest(request);
        requestSender.sendRequest().subscribe(response => {
            response.body.Items.map((value) => {
                try {
                    AffaireModel.findById(this.httpClient, value.Processu.IdAffaire).subscribe(response2 => {
                        value.Processu.Affaire = response2.body.Items[0];
                        this.placementsEnFac = response.body.Items;
                        this.enCours = response.body.Items;
                        this.pasEnCours = response.body.Items;
                        this.termines = response.body.Items;
                    });
                } catch (e) {
                }
            });
        });
    }


    get placementsEnFac(): any {
        return this._placementsEnFac;
    }

    set placementsEnFac(value: any) {
        this._placementsEnFac = value;
    }

    get enCours(): any {
        return this._enCours;
    }

    set enCours(value: any) {
        this._enCours = value;
        console.log(value);
    }

    get pasEnCours(): any {
        return this._pasEnCours;
    }

    set pasEnCours(value: any) {
        this._pasEnCours = value;
    }

    get termines(): any {
        return this._termines;
    }

    set termines(value: any) {
        this._termines = value;
    }

    ngOnInit(): void {
        this.getPlacementsEnFac();
    }
}
