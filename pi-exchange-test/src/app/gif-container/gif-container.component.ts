import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateService } from 'src/assets/shared/services/state.service';

@Component({
  selector: 'gif-container',
  templateUrl: './gif-container.component.html',
  styleUrls: ['./gif-container.component.css'],
})
export class GifContainerComponent {
  @Input() listGif: any[] = [];
  @Output() handleLike: EventEmitter<any> = new EventEmitter();
  constructor(private readonly state: StateService) {}
  handleLikeGif(gif: any) {
    this.handleLike.emit(gif);
  }
}
