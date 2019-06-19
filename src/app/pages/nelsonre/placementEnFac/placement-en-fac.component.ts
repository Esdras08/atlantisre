import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraductionService} from '../../../core/services/traduction.service';

@Component({
    selector: 'app-re-placement-en-fac',
    templateUrl: 'placement-en-fac.component.html',
    styleUrls: ['placement-en-fac.component.scss']
})
export class PlacementEnFacComponent {

    constructor(private dialog: MatDialog, public translateService: TraductionService) {
    }
}


