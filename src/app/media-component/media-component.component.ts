import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-media-component',
  templateUrl: './media-component.component.html',
  styleUrls: ['./media-component.component.css']
})
export class MediaComponentComponent implements OnInit {
  @Input() mediaItem: any;
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
