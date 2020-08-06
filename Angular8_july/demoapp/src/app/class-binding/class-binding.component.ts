import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public sucessClass="text-sucess";
  public hasError=true;
  public isSpecial = true;
  public messageClasses = {
    "text-sucess": !this.hasError,
    "text-danger":!this.hasError,
    "this-speical":this.isSpecial,
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
