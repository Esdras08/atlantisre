import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {PagesComponent} from './pages/pages.component';
import {SearchComponent} from './pages/search/search.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ErrorComponent} from './pages/errors/error/error.component';
import {AuthenticationGuard} from './core/guards/authentication.guard';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, data: {
            permissions: {
                are: 'AUTENTICATED'
            }
        },
        canActivate: [AuthenticationGuard],
        children: [
            {
                path: '',
                /*loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
                data: { breadcrumb: 'Dashboard' }*/
                loadChildren: './pages/nelsonre/administration/administration.module#AdministrationModule',
                data: { breadcrumb: 'Administration'}
            },
            {
                path: 'users',
                loadChildren: './pages/users/users.module#UsersModule',
                data: { breadcrumb: 'Users' }
            },
            /*{
                path: 'dynamic-menu',
                loadChildren: './pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule',
                data: { breadcrumb: 'Dynamic Menu' }
            },*/
            {
                path: 'ui',
                loadChildren: './pages/ui/ui.module#UiModule',
                data: { breadcrumb: 'UI' }
            },
            /*{
                path: 'mailbox',
                loadChildren: './pages/mailbox/mailbox.module#MailboxModule',
                data: { breadcrumb: 'Mailbox' }
             },*/
            /*{
                path: 'chat',
                loadChildren: './pages/chat/chat.module#ChatModule',
                data: { breadcrumb: 'Chat' }
            },*/
            /*{
                path: 'form-controls',
                loadChildren: './pages/form-controls/form-controls.module#FormControlsModule',
                data: { breadcrumb: 'Form Controls' }
             },*/
            /*{
                path: 'tables',
                loadChildren: './pages/tables/tables.module#TablesModule',
                data: { breadcrumb: 'Tables' }
            },*/
            /*{
                path: 'schedule',
                loadChildren: './pages/schedule/schedule.module#ScheduleModule',
                data: { breadcrumb: 'Schedule' }
            },*/
            /*{
                path: 'maps',
                loadChildren: './pages/maps/maps.module#MapsModule',
                data: { breadcrumb: 'Maps' }
            },*/
           /* {
                path: 'charts',
                loadChildren: './pages/charts/charts.module#ChartsModule',
                data: { breadcrumb: 'Charts' }
            },*/
            /*{
                path: 'drag-drop',
                loadChildren: './pages/drag-drop/drag-drop.module#DragDropModule',
                data: { breadcrumb: 'Drag & Drop' }
            },*/
            /*{
                path: 'icons',
                loadChildren: './pages/icons/icons.module#IconsModule',
                data: { breadcrumb: 'Material Icons' }
            },*/
            /*{
                path: 'blank',
                component: BlankComponent,
                data: { breadcrumb: 'Blank page' }
            },*/
            {
                path: 'search',
                component: SearchComponent,
                data: { breadcrumb: 'Search' }
            },

           {
                path: 'search/:name',
                component: SearchComponent,
                data: { breadcrumb: 'Search' }
            },
            // ATLANTIS RE
            {
                path: 're-tableau-de-bord',
                loadChildren: './pages/nelsonre/tableau-de-bord/tableau-de-bord.module#TableauDeBordModule',
                data: { breadcrumb: 'Tableau de Bord'}
            },
            {
                path: 're-parametrage-de-base',
                loadChildren: './pages/nelsonre/parametrage/parametrage.module#ParametrageModule',
                data: { breadcrumb: 'Parametrage de Base'}
            },
            {
                path: 're-parametrage-metier',
                loadChildren: './pages/nelsonre/parametrageMetier/parametrage-metier.module#ParametrageMetierModule',
                data: { breadcrumb: 'Parametrage Metier'}
            },
            {
                path: 're-administration',
                loadChildren: './pages/nelsonre/administration/administration.module#AdministrationModule',
                data: { breadcrumb: 'Administration'}
            },
            {
                path: 're-encaissement',
                loadChildren: './pages/nelsonre/encaissement/encaissement.module#EncaissementModule',
                data: { breadcrumb: 'Encaissement'}
            },
            {
                path: 're-decaissement',
                loadChildren: './pages/nelsonre/decaissement/decaissement.module#DecaissementModule',
                data: { breadcrumb: 'Decaissement'}
            },
            {
                path: 're-placement-en-fac',
                loadChildren: './pages/nelsonre/placementEnFac/placement-en-fac.module#PlacementEnFacModule',
                data: { breadcrumb: 'Placement En Facultative'}
            },
            {
                path: 're-sinistre',
                loadChildren: './pages/nelsonre/sinistre/sinistre.module#SinistreModule',
                data: { breadcrumb: 'Sinistre'}
            },
            {
                path: 're-echanges',
                loadChildren: './pages/nelsonre/echanges/echanges.module#EchangesModule',
                data: { breadcrumb: 'Echanges'}
            },
        ]
    },
    /*{
        path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule'
},*/
    {
        path: 'login', loadChildren: './pages/login/login.module#LoginModule',
        canActivate: [AuthenticationGuard],
        data: {
            permissions: {
                except: 'AUTENTICATED'
            }
        } },
    {
        path: 'register', loadChildren: './pages/register/register.module#RegisterModule', canActivate: [AuthenticationGuard], data: {
            permissions: {
                except: 'AUTENTICATED'
            }
        }
    },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});
