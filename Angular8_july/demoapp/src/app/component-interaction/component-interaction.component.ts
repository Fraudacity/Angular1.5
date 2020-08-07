import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  @Input('parentData') public firstName;
  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("Data Sent from the child")
  }

}
