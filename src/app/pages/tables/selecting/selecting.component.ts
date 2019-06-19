import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {Element, TablesService} from '../tables.service';

@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html'
})
export class SelectingComponent implements OnInit {
  public displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  public dataSource:any;
  public selection = new SelectionModel<Element>(true, []);
  constructor(private tablesService:TablesService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.datass.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.datass.forEach(row => this.selection.select(row));
  }

}
