import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {AppSettings} from '../../../app.settings';
import {Settings} from '../../../app.settings.model';
import {TraductionService} from '../../../core/services/traduction.service';
import {Router} from '@angular/router';
import {MenuService} from '../menu/menu.service';


interface LanguageFlag {
    lang: string;
    pays: string;
    drapeau: string;
    actif?: boolean;
}

@Component({
    selector: 'app-flags-menu',
    templateUrl: './flags-menu.component.html',
    styleUrls: ['./flags-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService]
})
export class FlagsMenuComponent implements OnInit {

    public settings: Settings;
    language: LanguageFlag =
        {
            lang: 'fr',
            pays: 'Français',
            drapeau: 'assets/img/flags/fr.svg'
        };
    languages: LanguageFlag[] = [
        {
            lang: 'en',
            pays: 'English',
            drapeau: 'assets/img/flags/gb.svg'
        },
        {
            lang: 'de',
            pays: 'Deutsch',
            drapeau: 'assets/img/flags/de.svg'
        },
        {
            lang: 'fr',
            pays: 'France',
            drapeau: 'assets/img/flags/fr.svg'
        },
    ];

    constructor(public appSettings: AppSettings,
                private translationService: TraductionService,
                private router: Router,
                private el: ElementRef,
                public menuService: MenuService
    ) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.setSelectedLanguage();
        /*this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(event => {
                this.setSelectedLanguage();
            });*/
    }


    setLanguage(lang) {
        let reload = false;
        // console.log(lang);
        this.languages.forEach((language: LanguageFlag) => {
            if (language.lang === lang) {
                language.actif = true;
                this.language = language;
            } else {
                language.actif = false;
            }
        });
        if (!(lang === localStorage.getItem('language'))) {
            reload = true;
        }
        this.translationService.setLanguage(lang);
        this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        if (reload) {
            location.reload();
        }


        (<DOMTokenList>this.el.nativeElement.classList).remove('m-dropdown--open');
    }

    setSelectedLanguage(): any {
        this.translationService.getSelectedLanguage().subscribe(lang => {
            if (lang) {
                setTimeout(() => {
                    this.setLanguage(lang);
                });
            }
        });
    }

}
