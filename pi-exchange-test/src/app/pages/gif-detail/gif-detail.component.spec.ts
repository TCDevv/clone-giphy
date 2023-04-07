import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifDetailComponent } from './gif-detail.component';

describe('GifDetailComponent', () => {
  let component: GifDetailComponent;
  let fixture: ComponentFixture<GifDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
