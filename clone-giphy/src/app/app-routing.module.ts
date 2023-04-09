import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';
import { SearchedGifsComponent } from './pages/searched-gifs/searched-gifs.component';

const routes: Routes = [
  {
    path: 'gif/:slug',
    component: GifDetailComponent,
  },
  {
    path: 'searched-gifs',
    component: SearchedGifsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
