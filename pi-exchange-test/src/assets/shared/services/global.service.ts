import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  listFavoriteGifIds: string[] = [];
  constructor(private state: StateService) {
    this.state.listFavoriteGif$.subscribe(
      (res) => (this.listFavoriteGifIds = res)
    );
  }
  handleLikeGif(gif: any, listFavoriteGif = [], listGif = []) {
    if (!gif.liked) {
      gif.liked = true;
      listFavoriteGif.unshift(gif);
      listFavoriteGif = [...new Set(listFavoriteGif)];
      this.listFavoriteGifIds.unshift(gif.id);
      this.listFavoriteGifIds = [...new Set(this.listFavoriteGifIds)];
    } else {
      gif.liked = false;
      let index = this.listFavoriteGifIds.findIndex((i) => i === gif.id);
      this.listFavoriteGifIds.splice(index, 1);
      listFavoriteGif.splice(index, 1);
      let temp = listGif.find((i) => i.id === gif.id);
      if (temp) temp.liked = false;
    }
    localStorage.setItem(
      'favorite-gifs',
      JSON.stringify(this.listFavoriteGifIds)
    );
    this.state.listFavoriteGif$.next(this.listFavoriteGifIds);
  }
  convertData(gifs) {
    if (gifs.length === 0) return;
    this.listFavoriteGifIds.forEach((i) => {
      gifs.liked = false;
      let temp = gifs.find((j) => j.id === i);
      if (temp) temp.liked = true;
    });
    gifs.forEach((i) => {
      i.images.original.widthRender =
        (+i.images.original.width * 200) / +i.images.original.height;
    });
  }
}
