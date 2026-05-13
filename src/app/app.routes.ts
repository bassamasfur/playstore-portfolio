import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AppListComponent } from './views/app-list/app-list.component';
import { AppDetailComponent } from './views/app-detail/app-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apps', component: AppListComponent },
  { path: 'apps/:id', component: AppDetailComponent },
  { path: '**', redirectTo: '' }
];
