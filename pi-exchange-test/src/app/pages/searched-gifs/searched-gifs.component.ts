import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, delay, finalize } from 'rxjs';
import { ApiService } from 'src/assets/shared/services/api.service';
import { GlobalService } from 'src/assets/shared/services/global.service';
import { StateService } from 'src/assets/shared/services/state.service';

@Component({
  selector: 'app-searched-gifs',
  templateUrl: './searched-gifs.component.html',
  styleUrls: ['./searched-gifs.component.css'],
})
export class SearchedGifsComponent implements OnInit, OnDestroy {
  querySearch: string = '';
  limit: number = 50;
  listGif: any[] = [];
  isLoading: boolean = false;
  listFavoriteGifIds = [];
  subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private state: StateService,
    public global: GlobalService
  ) {}
  ngOnInit(): void {
    let subscription = this.route.queryParams.subscribe((res: any) => {
      this.listGif = [];
      this.querySearch = res.query;
      this.getListSearchedGif(res.query, this.limit);
    });
    this.subscriptions.push(subscription);
    let subscription2 = this.state.listFavoriteGif$.subscribe(
      (res) => (this.listFavoriteGifIds = res)
    );
    this.subscriptions.push(subscription2);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !this.isLoading) {
      this.limit += 25;
      this.getListSearchedGif(this.querySearch, this.limit);
    }
  }

  getListSearchedGif(querySearch: string, limit: number) {
    this.isLoading = true;
    let subscription = this.api
      .GetGifByQuery(querySearch, limit)
      .pipe(
        delay(500),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((res) => {
        if (res.meta.status === 200) {
          this.global.convertData(res.data);
          this.listGif = [...this.listGif, ...res.data.slice(-50)];
        }
      });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
