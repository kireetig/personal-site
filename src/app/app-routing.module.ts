import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DiaryComponent} from './pages/diary/diary.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'diary', component: DiaryComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
