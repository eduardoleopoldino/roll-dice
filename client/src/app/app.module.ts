import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameGuard } from './game/game.guard';
import { DicesComponent } from './components/dices/dices.component';
import { HistoryComponent } from './components/history/history.component';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', component: GameComponent, canActivate: [GameGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameComponent,
    DicesComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
