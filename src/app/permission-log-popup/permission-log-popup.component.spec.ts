import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionLogPopupComponent } from './permission-log-popup.component';

describe('PermissionLogPopupComponent', () => {
  let component: PermissionLogPopupComponent;
  let fixture: ComponentFixture<PermissionLogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionLogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionLogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
