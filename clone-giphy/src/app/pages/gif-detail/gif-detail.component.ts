import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/assets/shared/services/api.service';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.css'],
})
export class GifDetailComponent implements OnInit {
  gifInfo$: Observable<any>;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');
    if (slug) this.gifInfo$ = this.api.GetGifById(slug);
  }
}
