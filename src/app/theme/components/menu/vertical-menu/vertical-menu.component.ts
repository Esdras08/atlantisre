import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AppSettings} from '../../../../app.settings';
import {Settings} from '../../../../app.settings.model';
import {MenuService} from '../menu.service';

@Component({
    selector: 'app-vertical-menu',
    templateUrl: './vertical-menu.component.html',
    styleUrls: ['./vertical-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService]
})
export class VerticalMenuComponent implements OnInit, AfterViewInit {
    @Input('menuItems') menuItems;
    @Input('menuParentId') menuParentId;
    parentMenu: Array<any>;
    public settings: Settings;

    constructor(public appSettings: AppSettings,
                private changeDetectorRefs: ChangeDetectorRef,
                public menuService: MenuService) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }

    onClick(menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    }

    ngAfterViewInit(): void {

        this.changeDetectorRefs.detectChanges();
    }

}
