import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/assets/shared/services/api.service';
import { StateService } from 'src/assets/shared/services/state.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/assets/shared/services/global.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  listTrendingGif = [];
  listFavoriteGif = [];
  listFavoriteGifIds = [];
  subscriptions: Subscription[] = [];
  constructor(
    private readonly api: ApiService,
    private state: StateService,
    private router: Router,
    public global: GlobalService
  ) {}

  ngOnInit(): void {
    let subscription = this.state.listFavoriteGif$.subscribe(
      (res) => (this.listFavoriteGifIds = res)
    );
    this.subscriptions.push(subscription);
    this.getListFavoriteGif();
    this.getListTrendyGif();
  }

  getListTrendyGif() {
    let subscription = this.api.getTrendyGif().subscribe((res) => {
      if (res.meta.status === 200) {
        this.global.convertData(res.data);
        this.listTrendingGif = res.data;
      } else {
        throw new Error('Can not get any trendy gif');
      }
    });
    this.subscriptions.push(subscription);
  }

  getListFavoriteGif() {
    let subscription = this.state.listFavoriteGif$.subscribe((res) => {
      if (res.length === 0) {
        this.listFavoriteGif = [];
        return;
      }
      let subscription2 = this.api.getGifsByIds(res).subscribe((rs) => {
        if (rs.meta.status === 200) {
          this.global.convertData(rs.data);
          this.listFavoriteGif = rs.data;
        } else {
          throw new Error('Can not get any favorite gif');
        }
      });
      this.subscriptions.push(subscription2);
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
