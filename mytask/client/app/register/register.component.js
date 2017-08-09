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
var router_1 = require("@angular/router");
var register_service_1 = require("./register.service");
var RegisterComponent = (function () {
    function RegisterComponent(router, formservice) {
        this.router = router;
        this.formservice = formservice;
        this.data = {};
        this.Formdata = {};
    }
    RegisterComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        var RegUser = {
            username: this.data.username,
            password: this.data.password,
            email: this.data.email,
            phone: this.data.phone,
            city: this.data.city,
        };
        this.formservice.setData('username', RegUser.username);
        this.formservice.setData('password', RegUser.password);
        this.formservice.setData('email', RegUser.email);
        this.formservice.setData('phone', RegUser.phone);
        this.formservice.setData('city', RegUser.city);
        this.Formdata = this.formservice.getData();
        this.formservice.postData(this.Formdata)
            .subscribe(function (result) {
            console.log(result);
        }, function (error) {
            alert('This is a problem with the enrollment');
        });
        console.log('Hello', RegUser.username);
        console.log('hi', RegUser.city);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, register_service_1.FormService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map