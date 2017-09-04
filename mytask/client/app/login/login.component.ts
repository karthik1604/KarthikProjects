import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AppService} from './../app.service';
import {Router} from '@angular/router';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import {CustomerValidator} from "./login.customValidator";
//import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector:'log',
    templateUrl : 'login.component.html',
    

})
 export class LoginComponent implements OnInit{

     form: FormGroup;

     data:{
         username:String,
         password : String
     }
     userDet:any [];
     //username: String
     //password: String

     constructor(private appService:AppService, private router :Router,private formbuilder:FormBuilder,)
     {}
         

    
     ngOnInit(){
         this.form =    this.formbuilder.group({
             username: ['',[Validators.required]],
             password: ['',[Validators.required]],
         })
         
     }
    
onSubmit(f:NgForm){
    console.log('Username:',f.value.username);

    this.appService.getApp(f.value.username,f.value.password)
                .subscribe(users =>{
                    console.log(users.username);
                    localStorage.setItem('UserDetails',JSON.stringify(users));
                    
                    this.router.navigate(['user']);
                    
                },
                error => {
                     this.router.navigate(['login']);
                     alert('The entered username or password is incorrect. Please Sign in with the correct Credentials');
                    
                   } 
           
           
            )
}

}


 