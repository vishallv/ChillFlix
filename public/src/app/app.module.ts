import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { BrowseComponent } from './browse/browse.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviComponent } from './movi/movi.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { ShowsComponent } from './shows/shows.component';
import { MylistComponent } from './mylist/mylist.component';
import { AddlistService } from './addlist.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    BrowseComponent,
    MoviesComponent,
    MoviComponent,
    JumboComponent,
    ShowsComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AddlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
