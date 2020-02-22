import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHorseComponent } from './view-horse.component';

describe('ViewHorseComponent', () => {
  let component: ViewHorseComponent;
  let fixture: ComponentFixture<ViewHorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
