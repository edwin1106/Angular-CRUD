import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleCreateComponent } from './components/people-create/people-create.component';
import { PeopleUpdateComponent } from './components/people-update/people-update.component';
import { PeopleSearchComponent } from './components/people-search/people-search.component';


const routes: Routes = [
  {path: 'people-search', component: PeopleSearchComponent},
  {path: 'people-update/:id', component: PeopleUpdateComponent},
  {path: 'people-create', component: PeopleCreateComponent},
  {path: 'people-list', component: PeopleListComponent },
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
