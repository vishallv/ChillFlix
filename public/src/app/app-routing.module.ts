import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { BrowseComponent } from './browse/browse.component';
import { ShowsComponent } from './shows/shows.component';
import { MylistComponent } from './mylist/mylist.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:FrontComponent},
  {path:'browse',pathMatch:'full',component:BrowseComponent},
  {path:'shows',pathMatch:'full',component:ShowsComponent},
  {path:'mylist',pathMatch:'full',component:MylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
