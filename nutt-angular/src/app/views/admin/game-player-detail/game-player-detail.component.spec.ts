import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayerDetailComponent } from './game-player-detail.component';

describe('GamePlayerDetailComponent', () => {
  let component: GamePlayerDetailComponent;
  let fixture: ComponentFixture<GamePlayerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamePlayerDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
