import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFolderInputComponent } from './box-folder-input.component';

describe('BoxFolderInputComponent', () => {
  let component: BoxFolderInputComponent;
  let fixture: ComponentFixture<BoxFolderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxFolderInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxFolderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
