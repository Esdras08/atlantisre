import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html'
})
export class ScheduleDialogComponent implements OnInit {
  public form: FormGroup;
  constructor(public dialogRef: MatDialogRef<ScheduleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
      'start': ['', Validators.required],
      'end': '',
      'isEdit' : false
    });
  }

  ngOnInit() {
    if (this.data) {
      this.form.patchValue({
        'title': this.data.title,
        'start': this.data.start,
        'end': this.data.end,
        'isEdit' : true
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
