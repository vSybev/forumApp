import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { ComentsComponent } from './coments/coments.component';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/forum', 
    pathMatch: 'full' 
  },
  {
    path: 'forum', 
    component: ThemesComponent
  },
  { 
    path: 'coments/:themeKey', 
    component: ComentsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
