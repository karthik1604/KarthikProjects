import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MyGridApplicationComponent} from './my-grid-application/my-grid-application.component'
const routes: Routes = [
    
     {path:'grid',component:MyGridApplicationComponent}

    // { path: 'logout' , component: PatientComponent},
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule{

}