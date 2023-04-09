import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';
import { SearchedGifsComponent } from './pages/searched-gifs/searched-gifs.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GifContainerComponent } from './components/gif-container/gif-container.component';
import { BytePipe } from 'src/assets/shared/pipes/byte.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, BrowserModule, HttpClientModule, FormsModule],
      declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        GifContainerComponent,
        GifDetailComponent,
        BytePipe,
        SearchedGifsComponent,
        SearchBoxComponent,
        LoadingComponent,
      ],
    }).compileComponents();
  });

  it(`should have as title 'Giphy Clone \| TCDev'`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Giphy Clone | TCDev');
  });

  it('should render title in a h1 tag', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Giphy Clone');
  });
});
