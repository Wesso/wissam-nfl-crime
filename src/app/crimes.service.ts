import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CrimesService {

  private crimesUrl = 'http://nflarrest.com/api/v1/crime';  // URL to NFLArrest API for crimes

  constructor(private http:HttpClient) { }

  getCrimes() {
    //return this.http.get('http://nflarrest.com/api/v1/crime');
    return this.http.get(this.crimesUrl);
  }
}
