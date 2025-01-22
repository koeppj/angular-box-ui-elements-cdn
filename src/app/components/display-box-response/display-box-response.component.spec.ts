import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoxResponseComponent } from './display-box-response.component';

describe('DisplayBoxResponseComponent', () => {
  let component: DisplayBoxResponseComponent;
  let fixture: ComponentFixture<DisplayBoxResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayBoxResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBoxResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
