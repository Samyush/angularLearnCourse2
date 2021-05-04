import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
  .label {
  background-color: #999999;
    color: #ffffff;
    padding: 2px 6px;
    font-style: italic;
    width: max-content;
  }
  span {
    display: inline-block;
    margin-right: 4px;
    margin-bottom: 4px;
  }
  `
  ],
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'angularLearnCourse2';
  onMediaItemDelete = (mediaItem: any) => {};
}
