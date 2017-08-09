import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { Router } from '@angular/router';
import { Routes, RouterModule} from '@angular/router';


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);