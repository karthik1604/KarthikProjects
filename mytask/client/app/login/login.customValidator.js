"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerValidator = (function () {
    function CustomerValidator(appService, router, http) {
        this.appService = appService;
        this.router = router;
        this.http = http;
    }
    CustomerValidator.checkUniqueUsername = function (control) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log(control.value);
            _this.http.get('http://localhost:8080/user/validUser?username=' + control.value)
                .map(function (res) { return res.json(); }).subscribe(function (Dflag) {
                console.log(Dflag);
                _this.flag = JSON.stringify(Dflag);
            });
            if (_this.flag == "true")
                resolve({ userNotUnique: true });
            else
                resolve(null);
        });
    };
    return CustomerValidator;
}());
exports.CustomerValidator = CustomerValidator;
//# sourceMappingURL=login.customValidator.js.map