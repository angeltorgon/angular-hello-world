import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  character: any;

  constructor(private svc: TestService, private http: HttpClient) {
    
  }

  ngOnInit() {
    const observable = this.http.get("https://rickandmortyapi.com/api/character/14");
    observable.subscribe( (res) => {
      this.character = res;
      console.log(this.character)
    });
    
  }
}
