import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGuessFormDialogComponent } from './submit-guess-form-dialog.component';

describe('SubmitGuessFormDialogComponent', () => {
  let component: SubmitGuessFormDialogComponent;
  let fixture: ComponentFixture<SubmitGuessFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitGuessFormDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitGuessFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
