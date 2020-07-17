import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PermissionModel} from '../../../shared/model/permission.model';
import {MatDialog} from '@angular/material/dialog';
import {PermissionLogPopupComponent} from '../../permission-log-popup/permission-log-popup.component';
import {EntryModel} from '../../../shared/model/Enter.model';

@Component({
  selector: 'app-permission-card',
  templateUrl: './permission-card.component.html',
  styleUrls: ['./permission-card.component.scss']
})
export class PermissionCardComponent implements OnInit {

  @Input() popUpData: EntryModel[];
  @Input() finalData: PermissionModel;
  @Output() xButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();


  isApproveBtn = false;
  @Input() isDisable: boolean;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }


  xButtonClick() {
    this.xButtonClicked.emit();
  }

  onCardClick() {
    // tslint:disable-next-line:triple-equals
    if (this.isApproveBtn == true ){
      this.isDisable = false;

    }
    else {
      this.cardClick.emit();
      this.isDisable = true;
    }
  }

  onApproveClick() {
    this.isApproveBtn = true;

  }



  onApprovedClick() {
    this.isApproveBtn = true;
  }


  openAccessLogPopUp(popup): void {
    const dialogRef = this.dialog.open(PermissionLogPopupComponent, {
      width: '500px',
      height: '250px',
      data: popup

    });

    dialogRef.afterClosed().subscribe(result => {

        if (result){
          this.popUpData[this.popUpData.indexOf(popup)] = result;
        }


    });
  }
}
