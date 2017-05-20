import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TandcComponent } from './tandc.component';

describe('TandcComponent', () => {
  let component: TandcComponent;
  let fixture: ComponentFixture<TandcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TandcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
