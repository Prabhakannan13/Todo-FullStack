import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  email=""
  age=""
  mobno=""
  gender=""
  pincode=""
  parent_name=""
  password=""
  confirmpassword=""


  readValues=()=>{
    let data={
      "name":this.name,
      "email":this.email,
      "age":this.age,
      "mobno":this.mobno,
      "gender":this.gender,
      "pincode":this.pincode,
      "parent_name":this.parent_name,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }

    console.log(data)
  }

  ngOnInit(): void {
  }

}
