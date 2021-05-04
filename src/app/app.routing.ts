import {Routes, RouterModule} from '@angular/router';

// import {MediaItemFormComponent} from './media-item-form/media-item-form.component';
import {MediaItemListComponent} from './media-item-list/media-item-list.component';

const appRoutes: Routes = [
  {
    path: 'add', // import functions returns a promise and then executes the next step to be done
    loadChildren: () => import('./new-item/new-item.module').then(
      m => m.NewItemModule
    )
  },
// {path: 'add', component: MediaItemFormComponent},
  {path: ':medium', component: MediaItemListComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
