import { Component, OnInit } from '@angular/core';
import {CrimesService} from './crimes.service';
import {PlayersService} from './players.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'nfl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NFL Crime';

  public crimes;
  public players;
 
  constructor(private _crimesService: CrimesService, private _playersService: PlayersService) { }


  ngOnInit() {
    this.getCrimes();
    this.getPlayers();
  }

  getCrimes(): void {
    this._crimesService.getCrimes()
    .subscribe(crimes => this.crimes = crimes.slice(0, 10));
  }

  getPlayers(): void {
    this._playersService.getPlayers()
    .subscribe(players => this.players = players.slice(0, 10));
  }
}


 