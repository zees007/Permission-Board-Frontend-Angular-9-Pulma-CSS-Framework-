import {Component, Inject, Input, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';
import {EntryModel} from '../../shared/model/Enter.model';
import {PermissionModel} from '../../shared/model/permission.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-permission-log-popup',
  templateUrl: './permission-log-popup.component.html',
  styleUrls: ['./permission-log-popup.component.scss']
})
export class PermissionLogPopupComponent implements OnInit {

  @Input() isInBtn: boolean;
  @Input() dataModel: EntryModel;
  CheckIn = new Date();
  todaysDataTimeCheckin = '';

  @Input() isOutBtn: boolean;
  CheckOut = new Date();
  todaysDataTimeCheckOut = '';

  constructor(public dialogRef: MatDialogRef<PermissionLogPopupComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit(): void {

  }

  onCheckIn() {
    this.isInBtn = true;
    this.todaysDataTimeCheckin = formatDate(this.CheckIn, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  onCheckOut() {
    this.isOutBtn = true
    this.todaysDataTimeCheckOut = formatDate(this.CheckOut, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

  }
}
