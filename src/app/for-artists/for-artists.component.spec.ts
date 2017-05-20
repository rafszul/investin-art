import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForArtistsComponent } from './for-artists.component';

describe('ForArtistsComponent', () => {
  let component: ForArtistsComponent;
  let fixture: ComponentFixture<ForArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
