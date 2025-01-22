import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUploadMetadataComponent } from './content-upload-metadata.component';

describe('ContentUploadMetadataComponent', () => {
  let component: ContentUploadMetadataComponent;
  let fixture: ComponentFixture<ContentUploadMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentUploadMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentUploadMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
