import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContentSelectionPageComponent } from './content-selection-page/content-selection-page.component';
import { ContentListPageComponent } from './content-list-page/content-list-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'content-selection', component: ContentSelectionPageComponent },
  { path: 'content-list/:type', component: ContentListPageComponent },
  { path: 'player/:content/:index', component: PlayerPageComponent },
];
