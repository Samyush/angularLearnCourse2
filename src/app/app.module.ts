import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpXhrBackend} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponentComponent } from './media-component/media-component.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
// import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { lookupLists, lookupListToken} from './providers';
import {MockXHRBackend} from './mock-xhr-backend';
import {routing} from './app.routing';
// import {MediaItemService} from './media-item.service';
// import {NewItemModule} from './new-item/new-item.module';

// const lookupList = {mediums: ['Movies', 'Series']};
@NgModule({
  declarations: [
    AppComponent,
    MediaComponentComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    // MediaItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    routing,
    // the underneath section is commented as for implementation of lazy loading
    // NewItemModule,
  ],
  providers: [
    // MediaItemService, <-- this media item services is removed as this would load/
    // in all components and is replaced by providing services in roots using injectables
    // {provide: 'lookupListToken', useValue: lookupList}
    {provide: lookupListToken, useValue: lookupLists},
    // the left side data i.e. of provide, is called in other component and use value or what is executed is of RHS
    {provide: HttpXhrBackend, useClass: MockXHRBackend}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
