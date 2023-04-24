import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEducationImageDialogComponent } from './select-education-image-dialog.component';

describe('SelectEducationImageDialogComponent', () => {
  let component: SelectEducationImageDialogComponent;
  let fixture: ComponentFixture<SelectEducationImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEducationImageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEducationImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
