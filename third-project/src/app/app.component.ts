import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private svc: TestService, private http: HttpClient) {
    svc.log('Service injection worked!')
    const observable = this.http.get("https://rickandmortyapi.com/api/character/14");
    observable.subscribe( res => console.log(res));
  }
}
