import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {PermissionModel} from '../../shared/model/permission.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-permission-form',
  templateUrl: './edit-permission-form.component.html',
  styleUrls: ['./edit-permission-form.component.scss']
})
export class EditPermissionFormComponent implements OnInit {

   // @Input() editFormData: PermissionModel;
  constructor(
    public dialogRef: MatDialogRef<EditPermissionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public item: PermissionModel
  ) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedFormData: PermissionModel) {
     this.dialogRef.close(updatedFormData);
  }
}
