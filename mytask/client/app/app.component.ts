import {Component} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AppService} from './app.service'
import {FormService} from './register/register.service';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[AppService,FormService]
})

export class AppComponent{

}