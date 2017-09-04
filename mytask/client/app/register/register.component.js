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
var app_service_1 = require("./../app.service");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(router, formservice, appService, formbuilder) {
        this.router = router;
        this.formservice = formservice;
        this.appService = appService;
        this.formbuilder = formbuilder;
        this.data = {};
        this.Formdata = {};
        this.val = '';
        this.emailVal = '';
        this.appService.findAll().subscribe(function (users) {
            console.log(users);
            localStorage.setItem('UserDet', JSON.stringify(users));
        });
    }
    //flag:String
    RegisterComponent.prototype.checkUniqueUsername = function (control) {
        //return new Promise((resolve)=>{
        // var userDet=JSON.parse(localStorage.getItem('UserDet'));
        //userDet.forEach(element => {
        // if(this.flag== "false"){
        //     resolve({userNotUnique:true});
        // }
        //console.log(element.username);
        //});
        // });
        var flag = JSON.parse(localStorage.getItem('flag'));
        if ((flag == "false")) {
            console.log("Validator :" + flag);
            return { userNotUnique: true };
        }
        else {
            return null;
        }
    };
    RegisterComponent.prototype.checkUniqueEmailId = function (control) {
        // return new Promise((resolve)=>{
        //         var userDet=JSON.parse(localStorage.getItem('UserDet'));
        //         userDet.forEach(element => {
        //             if(element.email== control.value){
        //                 resolve({emailNotUnique:true});
        //             }
        //             console.log(element.username);
        //         });
        // });
    };
    RegisterComponent.prototype.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    RegisterComponent.prototype.numberFieldValidator = function (control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidNumberField': true };
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.formbuilder.group({
            username: ['', [forms_1.Validators.required, this.checkUniqueUsername]],
            password: ['', [forms_1.Validators.required]],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.emailValidator])],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required, this.numberFieldValidator, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10)])],
            city: ['', [forms_1.Validators.required]],
        });
    };
    RegisterComponent.prototype.onKey = function (event) {
        var _this = this;
        this.values = event.target.value;
        console.log(this.values);
        this.appService.validUser(this.values).subscribe(function (dflag) {
            console.log(dflag);
            localStorage.setItem("flag", JSON.stringify(dflag));
            _this.uflag = JSON.parse(localStorage.getItem('flag'));
            if (_this.uflag) {
                console.log("User exists already");
            }
        });
    };
    RegisterComponent.prototype.focusOutFunction = function (event) {
        var _this = this;
        this.val = event.target.value;
        console.log("focus :" + this.val);
        this.appService.validUser(this.val).subscribe(function (dflag) {
            console.log(dflag);
            localStorage.setItem("flag", JSON.stringify(dflag));
            _this.uflag = JSON.parse(localStorage.getItem('flag'));
            if (_this.uflag) {
                console.log("Focus : User exists already");
            }
        });
    };
    RegisterComponent.prototype.EmailfocusOutFunction = function (event) {
        var _this = this;
        this.emailVal = event.target.value;
        console.log("emailfocus :" + this.emailVal);
        this.appService.validEmail(this.emailVal).subscribe(function (dflag) {
            console.log(dflag);
            localStorage.setItem("Eflag", JSON.stringify(dflag));
            _this.eflag = JSON.parse(localStorage.getItem('Eflag'));
            if (_this.eflag) {
                console.log("Focus : email exists already");
            }
        });
    };
    RegisterComponent.prototype.onSubmit = function (f) {
        event.preventDefault();
        var RegUser = {
            username: f.value.username,
            password: f.value.password,
            email: f.value.email,
            phone: f.value.phone,
            city: f.value.city,
        };
        console.log('Hello', RegUser.username);
        console.log('hi', RegUser.city);
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
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, register_service_1.FormService, app_service_1.AppService, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map