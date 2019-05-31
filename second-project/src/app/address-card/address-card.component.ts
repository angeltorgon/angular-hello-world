import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  users: any;

  @Input('name') username: string;

  constructor() { 
  }
  
  ngOnInit() {
    console.log(this.username)
    this.users = [
    {
      name: this.username,
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone: [
        '123-123-1234',
        '456-456-4567',
        '456-456-4967'
      ]
    },
    {
      name: this.username,
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone: [
        '123-123-1234',
        '456-456-4567',
        '456-456-4967'
      ]
    },
  ]
  }
}
