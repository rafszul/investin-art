import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDetailsComponent } from './img-details.component';

describe('ImgDetailsComponent', () => {
  let component: ImgDetailsComponent;
  let fixture: ComponentFixture<ImgDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
