import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppSettings} from '../../app.settings';
import {Settings} from '../../app.settings.model';
import {HttpClient} from '@angular/common/http';
import {HttpRequestSender, RequestMethod} from 'clv-angular-boot';
import {WebServicesUtilities} from '../../core/utilities/web-services.utilities';
import {Security} from '../../core/utilities/security.utilities';

@Component({
  selector: 'app-info-cards-number',
  templateUrl: './info-cards-number.component.html',
  styleUrls: ['./info-cards-number.component.scss']
})
export class InfoCardsNumberComponent implements OnInit {
    public compte: any;
    public colorScheme = {
        domain: ['rgba(255,255,255,0.8)']
    };
    public autoScale = true;
    @ViewChild('resizedDiv') resizedDiv: ElementRef;
    public previousWidthOfResizedDiv:number = 0;
    public settings: Settings;
    constructor(public appSettings: AppSettings, private httpClient: HttpClient) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        const request: HttpRequestSender<any, any> = new HttpRequestSender<any, any>(this.httpClient);
        request.getRequest().setMethod(RequestMethod.POST)
            .setUrl(WebServicesUtilities.getSimpleUrl('SgiCtrl', 'GetViewCompteByNumero'))
            .setData({
                ItemToSearch: {
                  Action: 'SEARCH',
                  Numero: Security.getCurrentUser()['NumeroCompte']
                }
            });
        request.sendRequest().subscribe(response => {
          this.compte = response.body.Items[0];
        });
    }

    public onSelect(event) {
        console.log(event);
    }

}
