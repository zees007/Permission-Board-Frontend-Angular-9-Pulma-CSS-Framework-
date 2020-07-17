import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PermissionModel} from '../../shared/model/permission.model';

@Component({
  selector: 'app-permission-creation-form',
  templateUrl: './permission-creation-form.component.html',
  styleUrls: ['./permission-creation-form.component.scss']
})
export class PermissionCreationFormComponent implements OnInit {

  @Input() permissionData: PermissionModel;
  @Output() formSubmit: EventEmitter<PermissionModel> = new EventEmitter<PermissionModel>();
  isNewItem: boolean;
  constructor() { }

  ngOnInit(): void {
    if (this.permissionData){
      this.isNewItem = false;
    }
    else {
      this.isNewItem = true;
      this.permissionData = new PermissionModel('',null,null, '', '');
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
  }
}
