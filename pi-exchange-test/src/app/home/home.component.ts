import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/assets/shared/services/api.service';
import { StateService } from 'src/assets/shared/services/state.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listTrendingGif = [];
  listFavoriteGif = [];
  listFavoriteGifIds = [];
  constructor(private readonly api: ApiService, private state: StateService) {}

  ngOnInit(): void {
    this.state.listFavoriteGif$.subscribe(
      (res) => (this.listFavoriteGifIds = res)
    );
    this.getListFavoriteGif();
    this.getListTrendyGif();
  }

  getListTrendyGif() {
    this.api.getTrendyGif().subscribe((res) => {
      if (res.meta.status === 200) {
        this.convertData(res.data);
        this.listTrendingGif = res.data;
      } else {
        throw new Error('Can not get any trendy gif');
      }
    });
  }

  getListFavoriteGif() {
    this.state.listFavoriteGif$.subscribe((res) => {
      if (res.length === 0) this.listFavoriteGif = [];
      this.api.getGifsByIds(res).subscribe((rs) => {
        if (rs.meta.status === 200) {
          this.convertData(rs.data);
          this.listFavoriteGif = rs.data;
        } else {
          throw new Error('Can not get any favorite gif');
        }
      });
    });
  }

  convertData(gifs) {
    if (gifs.length === 0) return;
    this.listFavoriteGifIds.forEach((i) => {
      gifs.liked = false;
      let temp = gifs.find((j) => j.id === i);
      if (temp) temp.liked = true;
    });
  }

  handleLike(e) {
    if (!e.liked) {
      e.liked = true;
      this.listFavoriteGifIds.push(e.id);
      this.listFavoriteGifIds = [...new Set(this.listFavoriteGifIds)];
    } else {
      e.liked = false;
      let index = this.listFavoriteGifIds.findIndex((i) => i === e.id);
      this.listFavoriteGifIds.splice(index, 1);
      this.listTrendingGif.find((i) => i.id === e.id).liked = false;
    }
    localStorage.setItem(
      'favorite-gifs',
      JSON.stringify(this.listFavoriteGifIds)
    );
    this.state.listFavoriteGif$.next(this.listFavoriteGifIds);
  }
}
