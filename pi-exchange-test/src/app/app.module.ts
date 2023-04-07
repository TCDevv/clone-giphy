import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GifContainerComponent } from './components/gif-container/gif-container.component';
import { FormsModule } from '@angular/forms';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';
import { BytePipe } from 'src/assets/shared/pipes/byte.pipe';
import { SearchedGifsComponent } from './pages/searched-gifs/searched-gifs.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingComponent } from './components/loading/loading.component';
@NgModule({
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
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
