import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentExplorerComponent } from './content-explorer.component';

describe('ContentExplorerComponent', () => {
  let component: ContentExplorerComponent;
  let fixture: ComponentFixture<ContentExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
