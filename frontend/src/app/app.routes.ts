import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvisLegalComponent } from './pages/avis-legal/avis-legal.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'avis-legal', component: AvisLegalComponent }
];
