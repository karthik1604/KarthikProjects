"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
//import { AppRoutingModule} from './app.routing';
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var common_1 = require("@angular/common");
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
//import {FormService} from "./register/register.service";
var register_component_1 = require("./register/register.component");
var forms_2 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.AppRoutingModule, forms_2.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, user_component_1.UserComponent, register_component_1.RegisterComponent],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map