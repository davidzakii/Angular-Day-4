import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder,AbstractControl } from '@angular/forms';
import {PasswordMatchValidatorDirective} from "../password-match-validator.directive"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reactiveForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.reactiveForm = new FormGroup({
      name : new FormControl("",Validators.required),
      email : new FormControl("",[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      userName : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z](\s+\S+\s*)*(?!\s).*$/)]),
      password : new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword : new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    },
    this.passwordMatchValidator
    // PasswordMatchValidatorDirective.mustMatch('password','confirmPassword')
    );



    // this.reactiveForm = this.fb.group({
    //   name : ['',Validators.required],
    //   email : ['',[Validators.required,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    //   userName : ['',[Validators.required, Validators.pattern(/^[a-zA-Z](\s+\S+\s*)*(?!\s).*$/)]],
    //   password : ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    //   confirmPassword : ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)],]//this.passwordMatchValidator
    // })
   }

   passwordMatchValidator(fg: AbstractControl){
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notmatched: true}
  }

   success='';
   submitted = false;
   submitReactiveForm(){
     console.log(this.reactiveForm)
     this.submitted = true;

     // stop here if form is invalid
     if (this.reactiveForm.invalid) {
       return;
     }

     this.success = JSON.stringify(this.reactiveForm.value);
   }


  get formControls(){
    return this.reactiveForm.controls
  }

   get currentPasswordFormControl() {
    return this.reactiveForm.get('currentPassword');
}

get newPasswordFormControl() {
    return this.reactiveForm.get('newPassword');
}

get confirmNewPasswordFormControl() {
    return this.reactiveForm.get('confirmNewPassword');
}

  ngOnInit(): void {
  }

}
