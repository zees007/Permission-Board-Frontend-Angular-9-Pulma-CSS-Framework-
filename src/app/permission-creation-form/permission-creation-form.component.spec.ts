import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionCreationFormComponent } from './permission-creation-form.component';

describe('PermissionCreationFormComponent', () => {
  let component: PermissionCreationFormComponent;
  let fixture: ComponentFixture<PermissionCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionCreationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
