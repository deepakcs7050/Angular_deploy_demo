import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  AddLoanForm :FormGroup;
  submitted = false;
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

 createForm(){
  this.AddLoanForm = this.fb.group({
    loanName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]),
    loanType:new FormControl('',[Validators.required]),
    loanDesciption:new FormControl('',Validators.compose([Validators.required])),
  })
 }

 loan(){
  this.submitted =true;
  if(this.AddLoanForm.invalid){
    return true;
  }
   console.log( this.AddLoanForm.value)
 }
}
