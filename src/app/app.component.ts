import {Component, Injectable, OnInit} from '@angular/core';
import {AppSettings} from './app.settings';
import {Settings} from './app.settings.model';
import {HttpClient} from '@angular/common/http';
import {TraductionService} from './core/services/traduction.service';
import {locale as enLang} from './core/i18n/en';
import {locale as deLang} from './core/i18n/de';
import {locale as frLang} from './core/i18n/fr';
import {LoadingComponent} from './LoadingComponent';

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public settings: Settings;
    public myLoadingComponent = LoadingComponent;
    constructor(public appSettings: AppSettings,
                public httpClient: HttpClient,
                public traductionService: TraductionService) {
        this.settings = this.appSettings.settings;
        // this.getLastJourney();
        // TRADUCTIONS
        this.traductionService.loadTranslations(enLang, deLang, frLang);
        TraductionService.lang = traductionService;
    }

    ngOnInit() {
    }

    /*getLastJourney(): void {
        const requestSender = new HttpRequestSender<any, any>(this.httpClient);
        requestSender.getRequest()
            .setUrl(WebServicesUtilities.getSimpleUrl('SgiCtrl', 'GetJournee'))
            .setMethod(RequestMethod.POST)
            .setData({
                CanFilterByStruct: true,
                Deepth: 0,
                Index: 0,
                IsNotificationToShow: false,
                ItemToSearch: {
                    Code: 'LAST',
                    InfoSearchActif: {Consider: false},
                    InfoSearchCode: {Consider: true},
                    InfoSearchCoursDuJourSaisi: {Consider: false},
                    InfoSearchCreatedBy: {Consider: false},
                    InfoSearchDateCreation: {Consider: false},
                    InfoSearchDateJournee: {Consider: false},
                    InfoSearchDateMaj: {Consider: false},
                    InfoSearchDroitDeGardeCalcule: {Consider: false},
                    InfoSearchEtatEnvoiMails: {Consider: false},
                    InfoSearchEtatJournee: {Consider: false},
                    InfoSearchHeureFermeture: {Consider: false},
                    InfoSearchHeureOuverture: {Consider: false},
                    InfoSearchIdJournee: {Consider: false},
                    InfoSearchIdStructure: {Consider: false},
                    InfoSearchIsDeleted: {Consider: false},
                    InfoSearchModifiedBy: {Consider: false}
                },
                Navigator: {},
                NotificationToShow: '',
                ShowErrorInAlert: true,
                ShowLoader: true,
                Size: 1,
                TakeAll: false,
                TitleNotificationToShow: ''
            });
        requestSender.sendRequest().subscribe(response => {
            try {
                SeancesUtilities.saveLastSeance(response.body.Items[0]);
            } catch (e) {
            }
        });
    }*/
}
