import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TeamsService {

  private teamsUrl = 'http://nflarrest.com/api/v1/crime/topTeams/Theft';  // URL to NFLArrest API for teams

  constructor(private http:HttpClient) { }

  getTeams() {
    return this.http.get(this.teamsUrl);
  }
}
