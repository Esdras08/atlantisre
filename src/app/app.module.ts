import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CustomOverlayContainer} from './theme/utils/custom-overlay-container';

import {AgmCoreModule} from '@agm/core';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {CalendarModule} from 'angular-calendar';
import {SharedModule} from './shared/shared.module';
import {PipesModule} from './theme/pipes/pipes.module';
import {routing} from './app.routing';

import {AppSettings} from './app.settings';
import {AppComponent} from './app.component';
import {PagesComponent} from './pages/pages.component';
import {BlankComponent} from './pages/blank/blank.component';
import {SearchComponent} from './pages/search/search.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ErrorComponent} from './pages/errors/error/error.component';

import {TopInfoContentComponent} from './theme/components/top-info-content/top-info-content.component';
import {SidenavComponent} from './theme/components/sidenav/sidenav.component';
import {VerticalMenuComponent} from './theme/components/menu/vertical-menu/vertical-menu.component';
import {HorizontalMenuComponent} from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import {FlagsMenuComponent} from './theme/components/flags-menu/flags-menu.component';
import {FullScreenComponent} from './theme/components/fullscreen/fullscreen.component';
import {ApplicationsComponent} from './theme/components/applications/applications.component';
import {MessagesComponent} from './theme/components/messages/messages.component';
import {UserMenuComponent} from './theme/components/user-menu/user-menu.component';
import {FavoritesComponent} from './theme/components/favorites/favorites.component';
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerURLInterceptor} from './core/utilities/interceptors.utilities';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {ClvAngularPipesUtilitiesModule} from 'clv-angular-pipes-utilities';
import {ClvAdvancedTableModule} from 'clv-advanced-table';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {TraductionService} from './core/services/traduction.service';
import {TranslateModule} from '@ngx-translate/core';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {LoadingComponent} from './LoadingComponent';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
        }),
        PerfectScrollbarModule,
        CalendarModule.forRoot(),
        ClvAngularBootModule,
        ClvAngularPipesUtilitiesModule,
        ClvAdvancedTableModule,
        SharedModule,
        PipesModule,
        routing,
        LoadingBarHttpClientModule,
        TranslateModule.forRoot(),
        NgHttpLoaderModule
    ],
    declarations: [
        AppComponent,
        PagesComponent,
        BlankComponent,
        SearchComponent,
        NotFoundComponent,
        ErrorComponent,
        TopInfoContentComponent,
        SidenavComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        FlagsMenuComponent,
        FullScreenComponent,
        ApplicationsComponent,
        MessagesComponent,
        UserMenuComponent,
        FavoritesComponent,
        LoadingComponent
    ],
    providers: [
        AppSettings,
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
        {provide: OverlayContainer, useClass: CustomOverlayContainer},
        {provide: HTTP_INTERCEPTORS, useClass: ServerURLInterceptor, multi: true},
        TraductionService
    ],
    entryComponents: [LoadingComponent],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
