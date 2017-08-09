import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService{
    constructor(private http:Http){
        console.log('app service initialized');
    }

    getApp(username,password){
         return this.http.get('http://localhost:8080/user/login?username='+username+'&password='+password)
         .map(res => res.json());
 }
        
}
