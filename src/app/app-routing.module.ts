import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  {path: 'nav', component: NavComponent},
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'works', component: MyworkComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
