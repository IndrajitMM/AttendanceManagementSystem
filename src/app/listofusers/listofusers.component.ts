import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {

  EntryUserName = ["Jack","David","Alex","Fernadis"];
  constructor() { }

  ngOnInit() {
  }
  d = new Date();
  entry(event){
    console.log(event);
    alert("Time enter successfully"+this.d);
  }

  exit(event){
    console.log(event);
    alert("Exit time "+this.d);
  }

  userDelete(event){
    console.log(event);
    alert("Total time is "+this.d);
  }
}