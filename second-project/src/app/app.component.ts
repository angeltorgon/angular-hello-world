import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  inputText: string = 'Initial Value'

  constructor(){
    this.user = new User();
    this.user.name = "Angel Torres"
    this.user.designation = "Software Engineer"
    this.user.address = "1234 Fake Street 78655, FL"
    this.user.phone = [
      "123-456-4568",
      "163-476-4368",
    ]
  }

}
