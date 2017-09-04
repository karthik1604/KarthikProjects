import{FormControl} from '@angular/forms';
import {AppService} from './../app.service';
import {Router} from '@angular/router';
import {Http,Headers} from '@angular/http';
export class CustomerValidator{
     constructor(private appService:AppService, private router :Router,private http:Http)
     {
         
     }
     public flag:string;

     static checkUniqueUsername(control:FormControl){
        
        return new Promise((resolve)=>{
                console.log(control.value);
                this.http.get('http://localhost:8080/user/validUser?username='+control.value)
         .map(res => res.json()).subscribe(Dflag =>{
                    console.log(Dflag);
                    this.flag=JSON.stringify(Dflag);
                   
                    
                });
                if(this.flag == "true")
                resolve({userNotUnique:true});
                else
                resolve(null);
            
        });
    }

}