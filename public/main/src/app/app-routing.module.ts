import { NgModule } from '@angular/core';
import { RouterModule , Routes  } from '@angular/router';
import {SearchListComponent } from './search-list/search-list.component';
import {SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch : 'full'},
  {path: '/search/:id', }
];
@NgModule({
  imports: [] ,
  exports : [RouterModule] ,
  declarations: []
})
export class AppRoutingModule {


}
