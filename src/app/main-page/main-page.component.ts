import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PermissionModel} from '../../shared/model/permission.model';
import {EditPermissionFormComponent} from '../edit-permission-form/edit-permission-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  permissionDataItems: PermissionModel[] = new Array<PermissionModel>();
  // @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  addFormData(newFormData: PermissionModel) {
    this.permissionDataItems.push(newFormData);

  }

  deleteItem(item: PermissionModel) {
    const index = this.permissionDataItems.indexOf(item);
    this.permissionDataItems.splice(index, 1);
  }

}
