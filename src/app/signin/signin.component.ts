import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  email=""
  password=""
  


  readValues=()=>{
    let data={
      "name":this.email,
    
      "password":this.password
    }

    console.log(data)
  }
  ngOnInit(): void {
  }

}
