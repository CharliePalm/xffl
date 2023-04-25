import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountService } from './utils/service/account.service';
import { API } from './utils/api/api.util';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RosterComponent } from './home/subpages/roster/roster.component';
import { MatchupComponent } from './home/subpages/matchup/matchup.component';
import { StandingsComponent } from './home/subpages/standings/standings.component';
import { LoaderComponent } from './loader/loader.component';
import { DataStore } from './utils/api/data.store';
import { DataService } from './utils/service/data.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TeamNamePipe } from './utils/pipes/TeamNamePipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RosterComponent,
    MatchupComponent,
    StandingsComponent,
    LoaderComponent,
    SidebarComponent,
    TeamsComponent,
    PlayersComponent,
    TeamNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [
    API,
    AccountService,
    HttpClient,
    DataStore,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
