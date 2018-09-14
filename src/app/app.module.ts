import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import {CrimesService} from './crimes.service';
import {PlayersService} from './players.service';
import {TeamsService} from './teams.service';
 
//import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { CrimesComponent } from './crimes/crimes.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    CrimesComponent,
    PlayersComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
