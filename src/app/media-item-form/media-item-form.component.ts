import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

import {MediaItemService} from '../media-item.service';
import {lookupListToken} from '../providers';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup | any;
  constructor(private formBuilder: FormBuilder,
              private mediaItemServices: MediaItemService,
              // @Inject('lookupListToken') public lookupLists: any) { }
              @Inject(lookupListToken) public lookupLists: any,
              private router: Router) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        medium: this.formBuilder.control('Movies'),
        name: this.formBuilder.control('', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        category: this.formBuilder.control(''),
        // year: new FormControl('', /*this.yearValidator*/),
        year: this.formBuilder.control('', /*this.yearValidator*/),
      }
    );
  }
  yearValidator = (control: FormControl) => {
    if (control.value.trim().legth === 0){
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;
    if (year >= minYear && year <= maxYear){
      return null;
    }else {
      return {year: {
        min: minYear,
          max: maxYear,
        }};
    }
  }
  onSubmit = (mediaItem: any) => {
    console.log(mediaItem);
    this.mediaItemServices.add(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/', mediaItem.medium]).then();
        // the up line code says that in command the [here is the navigation link]
      });
  }
}
