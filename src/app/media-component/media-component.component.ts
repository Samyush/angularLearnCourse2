import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-media-component',
  templateUrl: './media-component.component.html',
  styleUrls: ['./media-component.component.css']
})
export class MediaComponentComponent implements OnInit {
  @Input() mediaItem: any;
  // the output emits the down action over click and is again
  // caught in media component as (delete) inside <app-media-component>
  @Output() delete = new EventEmitter();
  name = 'The Redemption';
  // wasWatched = () => true;
  onDelete = () => {
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
