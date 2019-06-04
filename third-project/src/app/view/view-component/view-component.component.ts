import { Component, OnInit, Input } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { Character } from './character.model';

@Component({
  selector: 'view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  @Input('character') character: Character;

  constructor(svc: TestService) { 
    svc.log("From View Component!")
  }

  ngOnInit() {
  }

}
