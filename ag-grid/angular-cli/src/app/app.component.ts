import { Component } from '@angular/core';
import{AppService} from './app.service';
import{VendorUpdateComponent} from './vendorUpdate/vendorUpdate.component';
import{VendorService} from './vendorUpdate/vendor.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService,VendorUpdateComponent,VendorService]
})
export class AppComponent {
  constructor(){
    localStorage.clear();
  }
}
