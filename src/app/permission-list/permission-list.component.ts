import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PermissionModel} from '../../shared/model/permission.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {EditPermissionFormComponent} from '../edit-permission-form/edit-permission-form.component';
import {EntryModel} from '../../shared/model/Enter.model';
import {PermissionLogPopupComponent} from '../permission-log-popup/permission-log-popup.component';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {


  @Input() permissionDatas: PermissionModel[];
  @Output() delete: EventEmitter<PermissionModel> = new EventEmitter<PermissionModel>();

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteOnClick() {
    this.delete.emit();
  }



  updateOnClick(item: PermissionModel) {
    const dialogRef = this.dialog.open(EditPermissionFormComponent, {
      width: '900px',
      height: '550px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.permissionDatas[this.permissionDatas.indexOf(item)] = result;
      }
    });
  }
}
