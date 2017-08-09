import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AppService} from './../app.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector:'log',
    templateUrl : 'login.component.html'

})
 export class LoginComponent{
     data:{
         username:String,
         password : String
     }
     username: String
     password: String

     constructor(private appService:AppService, private router :Router){}

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


 