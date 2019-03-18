import { Component, OnInit } from '@angular/core';
//import { FormsModule, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  formdata;
  Id:number []=[];
  Name:String []=[];
  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(formdata){
    console.log("Employee Id"+formdata.Id+" Employee Name"+formdata.Name);
    this.Id.push(formdata.Id);
    this.Name.push(formdata.Name);
    console.log("below is the emply list");

    for(var i=0 ;i<this.Id.length;i++){
      console.log(this.Id[i]+""+this.Name[i]);
      document.getElementById("data").innerHTML="Hi"+formdata.Id+"you have been successfully added one" ;
    }
  }

}
