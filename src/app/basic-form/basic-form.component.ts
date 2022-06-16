import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  signupForm: FormGroup

  constructor(
 private _builder: FormBuilder

  ) { this.signupForm = this._builder.group({
    name: [""], user: ["", Validators.required] , email: ["", Validators.compose([Validators.email, Validators.required])] , password: ["", Validators.required], 
  }) }

  ngOnInit(): void {
  }

  send(values: any){
   console.log(values)
  }

}
