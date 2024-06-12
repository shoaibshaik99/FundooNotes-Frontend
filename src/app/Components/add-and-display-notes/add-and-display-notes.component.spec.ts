import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndDisplayNotesComponent } from './add-and-display-notes.component';

describe('AddAndDisplayNotesComponent', () => {
  let component: AddAndDisplayNotesComponent;
  let fixture: ComponentFixture<AddAndDisplayNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAndDisplayNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAndDisplayNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
