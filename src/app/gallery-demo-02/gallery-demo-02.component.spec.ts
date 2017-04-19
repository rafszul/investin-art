import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDemo02Component } from './gallery-demo-02.component';

describe('GalleryDemo02Component', () => {
  let component: GalleryDemo02Component;
  let fixture: ComponentFixture<GalleryDemo02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDemo02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDemo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
