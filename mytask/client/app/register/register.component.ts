import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormService} from "./register.service";


@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent{
    data :any ={};
 
 private Formdata={};

  constructor(private router :Router,private formservice :FormService){}

  onSubmit(event){
  event.preventDefault();
  var RegUser ={
    username : this.data.username,
    password  : this.data.password,
    email       : this.data.email,
    phone       : this.data.phone,
    city    : this.data.city,
    
   
  }
  this.formservice.setData('username',RegUser.username);
  this.formservice.setData('password',RegUser.password);
  this.formservice.setData('email',RegUser.email);
  this.formservice.setData('phone',RegUser.phone);
  this.formservice.setData('city',RegUser.city);
  this.Formdata = this.formservice.getData();
 
this.formservice.postData(this.Formdata)
              .subscribe(result =>{
                console.log(result);
              },
              error =>{
                alert('This is a problem with the enrollment');
              }
              )



  
  console.log('Hello',RegUser.username);
  console.log('hi',RegUser.city);
  }


}
