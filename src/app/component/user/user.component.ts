import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;

  private address:{
    street:string;
    city:string;
    province:string;
    postnumber:string;
  }

  private skill:string[];

  constructor() { }

  ngOnInit() {
    this.name = "Natthawut Saelo";
    this.age = 22;
    this.email = "oat1454@gmail.com";

    this.address = {
      street: "AAA",
      city: "BBB",
      province: "CCC",
      postnumber: "123"
    }
    this.skill = ["XXX","YYY"]

  
  }

}
