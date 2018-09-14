import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

  private playersUrl = 'http://nflarrest.com/api/v1/crime/topPlayers/Theft';  // URL to NFLArrest API for players

  constructor(private http:HttpClient) { }

  getPlayers() {
    return this.http.get(this.playersUrl);
  }
}
