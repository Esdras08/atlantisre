import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-administration',
    templateUrl: 'administration.component.html',
    styleUrls: ['administration.component.scss']
})
export class AdministrationComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


