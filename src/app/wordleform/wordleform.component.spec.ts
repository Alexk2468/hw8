import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleformComponent } from './wordleform.component';

describe('WordleformComponent', () => {
  let component: WordleformComponent;
  let fixture: ComponentFixture<WordleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
