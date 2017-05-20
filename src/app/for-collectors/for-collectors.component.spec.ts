import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCollectorsComponent } from './for-collectors.component';

describe('ForCollectorsComponent', () => {
  let component: ForCollectorsComponent;
  let fixture: ComponentFixture<ForCollectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForCollectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForCollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
