import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @Input() value: string = '';
  constructor(private router: Router) {}
  search(query: NgForm) {
    this.router.navigate(['/searched-gifs'], {
      queryParams: { query: query.value.querySearch },
    });
  }
}
