import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "Angular 8";
  public message ="Hello, How are you?";
  constructor() { }

  ngOnInit(): void {
  }

}
