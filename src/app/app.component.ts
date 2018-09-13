import { Component, OnInit } from '@angular/core';
import {CrimesService} from './crimes.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'nfl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NFL Crime';

  public crimes;
 
  constructor(private _crimesService: CrimesService) { }


  ngOnInit() {
    this.getCrimes();
  }

  getCrimes(): void {
    this._crimesService.getCrimes()
    .subscribe(crimes => this.crimes = crimes.slice(0, 10));
  }
}


 