import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  public color = "blue";

  public colors = ["red", "blue","green","yellow"]
  constructor() { }

  ngOnInit(): void {
  }

}
