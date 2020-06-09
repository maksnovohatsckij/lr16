import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './pages/personal/personal.component';
import { InfoComponent } from './pages/info/info.component';


const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
