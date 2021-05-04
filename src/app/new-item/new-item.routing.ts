import {Routes, RouterModule, Router} from '@angular/router';

import {MediaItemFormComponent} from '../media-item-form/media-item-form.component';

const newItemRoutes: Routes = [
  // {path: 'add', component: MediaItemFormComponent},
  // the 'add' is changed to '' as we dont want the application to read and run on a url of homeURL/add/add
  {path: '', component: MediaItemFormComponent},
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
