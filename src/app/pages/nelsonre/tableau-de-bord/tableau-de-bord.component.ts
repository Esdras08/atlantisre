import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-tableau-de-bord',
    templateUrl: 'tableau-de-bord.component.html',
    styleUrls: ['tableau-de-bord.component.scss']
})
export class TableauDeBordComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


