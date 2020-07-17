import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PermissionCreationFormComponent } from './permission-creation-form/permission-creation-form.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import {PermissionCardComponent} from './permission-list/permission-card/permission-card.component';
import { EditPermissionFormComponent } from './edit-permission-form/edit-permission-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PermissionLogPopupComponent } from './permission-log-popup/permission-log-popup.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PermissionCreationFormComponent,
    PermissionListComponent,
    PermissionCardComponent,
    EditPermissionFormComponent,
    PermissionLogPopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [EditPermissionFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
