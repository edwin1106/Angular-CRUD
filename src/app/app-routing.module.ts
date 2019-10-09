import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleCreateComponent } from './components/people-create/people-create.component';


const routes: Routes = [
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
