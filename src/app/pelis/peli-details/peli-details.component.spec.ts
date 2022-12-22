import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliDetailsComponent } from './peli-details.component';

describe('PeliDetailsComponent', () => {
  let component: PeliDetailsComponent;
  let fixture: ComponentFixture<PeliDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
