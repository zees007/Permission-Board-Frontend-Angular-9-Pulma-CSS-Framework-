import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermissionFormComponent } from './edit-permission-form.component';

describe('EditPermissionFormComponent', () => {
  let component: EditPermissionFormComponent;
  let fixture: ComponentFixture<EditPermissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPermissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
