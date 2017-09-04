"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("./../app.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
//import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
var LoginComponent = (function () {
    //username: String
    //password: String
    function LoginComponent(appService, router, formbuilder) {
        this.appService = appService;
        this.router = router;
        this.formbuilder = formbuilder;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formbuilder.group({
            username: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]],
        });
    };
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        console.log('Username:', f.value.username);
        this.appService.getApp(f.value.username, f.value.password)
            .subscribe(function (users) {
            console.log(users.username);
            localStorage.setItem('UserDetails', JSON.stringify(users));
            _this.router.navigate(['user']);
        }, function (error) {
            _this.router.navigate(['login']);
            alert('The entered username or password is incorrect. Please Sign in with the correct Credentials');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'log',
            templateUrl: 'login.component.html',
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map