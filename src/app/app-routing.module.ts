import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComtactMeComponent } from './comtact-me/comtact-me.component';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
   {path: 'whoAmI', component: HomeComponent},
   {path: 'skills', component: SkillsComponent},
   {path: 'profiles', component: ProfilesComponent},
   {path: 'contact-me', component: ComtactMeComponent},
   {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
