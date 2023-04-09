import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedGifsComponent } from './searched-gifs.component';

describe('SearchedGifsComponent', () => {
  let component: SearchedGifsComponent;
  let fixture: ComponentFixture<SearchedGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedGifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
