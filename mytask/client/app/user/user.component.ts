import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
   moduleId: module.id,
    selector:'user',
    //template : '<h1>Hello</h1>'
    templateUrl :'user.component.html'
})
export class UserComponent{

userInfo: any
constructor(){
    this.userInfo = JSON.parse(localStorage.getItem('UserDetails'));
}
}