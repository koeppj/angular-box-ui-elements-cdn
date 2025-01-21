import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOpenWithComponent } from './box-open-with.component';

describe('BoxOpenWithComponent', () => {
  let component: BoxOpenWithComponent;
  let fixture: ComponentFixture<BoxOpenWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxOpenWithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxOpenWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
