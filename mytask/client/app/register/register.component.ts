import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormService} from "./register.service";
import {AppService} from './../app.service';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})
    
export class RegisterComponent implements OnInit{
    data :any ={};
    form:FormGroup
    uflag:boolean;
    eflag:boolean;
 private Formdata={};

  constructor(private router :Router,private formservice :FormService,private appService:AppService,private formbuilder:FormBuilder){
 this.appService.findAll().subscribe(users=>{
                    console.log(users);
                    localStorage.setItem('UserDet',JSON.stringify(users));
  })  
  

}


//flag:String
     checkUniqueUsername(control:FormControl){
        
        //return new Promise((resolve)=>{
               // var userDet=JSON.parse(localStorage.getItem('UserDet'));
                //userDet.forEach(element => {
                    // if(this.flag== "false"){
                    //     resolve({userNotUnique:true});
                    // }
                    //console.log(element.username);
                //});
                
            
       // });
       
        var flag=JSON.parse(localStorage.getItem('flag'));
       if((flag=="false")){
                console.log("Validator :"+flag);
                return{userNotUnique:true}
       }else{
           return null;
       }
    }
     checkUniqueEmailId(control:FormControl){
        
        // return new Promise((resolve)=>{
        //         var userDet=JSON.parse(localStorage.getItem('UserDet'));
        //         userDet.forEach(element => {
        //             if(element.email== control.value){
        //                 resolve({emailNotUnique:true});
        //             }
        //             console.log(element.username);
        //         });
                
            
        // });
    }

    emailValidator(control:FormControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
    numberFieldValidator(control:FormControl) {
         if (control.value.match(/^\d{10}$/) ){
            return null;
         } else {
             return { 'invalidNumberField': true };
         }

        
    }

     ngOnInit(){
         this.form =    this.formbuilder.group({
             username: ['',[Validators.required,this.checkUniqueUsername]],
             password: ['',[Validators.required]],
             email:['',Validators.compose([Validators.required,this.emailValidator])],
             phone:['',Validators.compose([Validators.required,this.numberFieldValidator,Validators.minLength(10),Validators.maxLength(10)])],
             city:['',[Validators.required]],

         })
         
     }
   values:'';
     onKey(event:any){
        this.values=event.target.value;
        console.log(this.values);
        this.appService.validUser(this.values).subscribe(dflag=>{
                    console.log(dflag);
                   localStorage.setItem("flag",JSON.stringify(dflag));
                   this.uflag=JSON.parse(localStorage.getItem('flag'));
                   if(this.uflag){
                       console.log("User exists already")
                   }
                   
                   
                   
  })  

     }
     val=''
     focusOutFunction(event:any)
     {
            this.val=event.target.value;
            console.log("focus :"+this.val);
            this.appService.validUser(this.val).subscribe(dflag=>{
                    console.log(dflag);
                   localStorage.setItem("flag",JSON.stringify(dflag));
                   this.uflag=JSON.parse(localStorage.getItem('flag'));
                   if(this.uflag){
                       console.log("Focus : User exists already")
                   }
                   
                   
                   
  })  
            
     }
     emailVal='';
     EmailfocusOutFunction(event:any){
         this.emailVal= event.target.value;
         console.log("emailfocus :"+this.emailVal);
          this.appService.validEmail(this.emailVal).subscribe(dflag=>{
                    console.log(dflag);
                   localStorage.setItem("Eflag",JSON.stringify(dflag));
                   this.eflag=JSON.parse(localStorage.getItem('Eflag'));
                   if(this.eflag){
                       console.log("Focus : email exists already")
                   }
          })
     }

  onSubmit(f:NgForm){
  event.preventDefault();
  
  var RegUser ={
    username : f.value.username,
    password  : f.value.password,
    email       : f.value.email,
    phone       : f.value.phone,
    city    : f.value.city,
    
   
  }
  console.log('Hello',RegUser.username);
  console.log('hi',RegUser.city);
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
  }


}
