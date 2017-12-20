webpackJsonp([1,5],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_email_validator_directive__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_routing__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registration_form_registration_form_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__account_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__registration_form_registration_form_component__["a" /* RegistrationFormComponent */], __WEBPACK_IMPORTED_MODULE_5__directives_email_validator_directive__["a" /* EmailValidator */], __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]]
    })
], AccountModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__(339),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginFormComponent);

var _a, _b, _c;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    return RegistrationFormComponent;
}());
RegistrationFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-registration-form',
        template: __webpack_require__(340),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RegistrationFormComponent);

var _a, _b;
//# sourceMappingURL=registration-form.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthGuard = (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getHomeDetails()
            .subscribe(function (homeDetails) {
            _this.homeDetails = homeDetails;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(342),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    return RootComponent;
}());
RootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(343),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [])
], RootComponent);

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_base_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operators__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.

var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    DashboardService.prototype.getHomeDetails = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/dashboard/home", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return DashboardService;
}(__WEBPACK_IMPORTED_MODULE_3__shared_services_base_service__["a" /* BaseService */]));
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], DashboardService);

var _a, _b;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(345),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__["a" /* myFocus */], __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__["a" /* SpinnerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__["a" /* myFocus */], __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__["a" /* SpinnerComponent */]],
        providers: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics


// Operators







/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/account/account.module": [
		112
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 252;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(273);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild([
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */] }
]);
//# sourceMappingURL=account.routing.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None,
        template: __webpack_require__(341),
        styles: [__webpack_require__(330)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_xhr_backend__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_utils_config_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* App Root */



/* Account Imports */

/* Dashboard Imports */


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__account_account_module__["AccountModule"],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__shared_utils_config_service__["a" /* ConfigService */], {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XHRBackend */],
                useClass: __WEBPACK_IMPORTED_MODULE_4__authenticate_xhr_backend__["a" /* AuthenticateXHRBackend */]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateXHRBackend; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error);
        });
        return xhrConnection;
    };
    return AuthenticateXHRBackend;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* XHRBackend */]));
AuthenticateXHRBackend = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* BrowserXhr */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* BrowserXhr */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* ResponseOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* ResponseOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* XSRFStrategy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* XSRFStrategy */]) === "function" && _c || Object])
], AuthenticateXHRBackend);

var _a, _b, _c;
//# sourceMappingURL=authenticate-xhr.backend.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_root_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_dashboard_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__root_root_component__["a" /* RootComponent */], __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_dashboard_service__["a" /* DashboardService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_root_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__root_root_component__["a" /* RootComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
        ]
    }
]);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = EmailValidator_1 = (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EmailValidator;
}());
EmailValidator = EmailValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Directive */])({
        selector: '[validateEmail][ngModel],[validateEmail][formControl]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* forwardRef */])(function () { return EmailValidator_1; }), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], EmailValidator);

var EmailValidator_1;
//# sourceMappingURL=email.validator.directive.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myFocus; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    return myFocus;
}());
myFocus = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Directive */])({ selector: '[tmFocus]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */]) === "function" && _b || Object])
], myFocus);

var _a, _b;
//# sourceMappingURL=focus.directive.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(344),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    return SpinnerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], SpinnerComponent.prototype, "delay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinnerComponent.prototype, "isRunning", null);
SpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-spinner',
        template: __webpack_require__(346),
        styles: [__webpack_require__(335)]
    })
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_operators__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.

var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.register = function (email, password, firstName, lastName, location) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, location: location });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + "/accounts", body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "body {\n  padding-top: 5rem;\n  background-color: #f9f9f9; }\n\n.container-fluid {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  max-width: 920px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.card {\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-radius: 3px; }\n\n.card-title {\n  margin: 0 !important;\n  font-size: 1.25rem; }\n\n.bg-white {\n  background: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-block\">\n\n\t\t\t\t<div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\n\t\t\t\t\t<strong>All set!</strong> Please login with your account\n\t\t\t\t</div>\n\n\t\t\t\t<h4>Login</h4>\n\n\t\t\t\t<form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t\t<input id=\"email\" type=\"text\" required name=\"email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail class=\"form-control\"\n\t\t\t\t\t\t\tplaceholder=\"Email\">\n\n\t\t\t\t\t\t<small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">\n            Please enter a valid email\n          </small>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t<input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\"\tplaceholder=\"Password\" ngModel>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Login</button>\n\t\t\t\t\t\t<app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\t<strong>Oops!</strong> {{errors}}\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n\t<div class=\"col-md-6\">\n\n\t\t<div class=\"card\">\n\n\t\t\t<div class=\"card-header bg-white\">\n\t\t\t\t<h4 class=\"card-title\">Create your account</h4>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-block\">\n\n\t\t\t\t<form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\n\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"first-name\">First name</label>\n\t\t\t\t\t\t<input id=\"first-name\" type=\"text\" required name=\"firstName\" class=\"form-control\" placeholder=\"Your first name\" tmFocus ngModel>\n\t\t\t\t\t</div>\n\n          \t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"last-name\">Last name</label>\n\t\t\t\t\t\t<input id=\"last-name\" type=\"text\" required name=\"lastName\" class=\"form-control\" placeholder=\"Your last name\" ngModel>\n\t\t\t\t\t</div>\n \n          <div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t\t<input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel  #email=\"ngModel\">\n\t\t\t\t\t\t<small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t<input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel>\n\t\t\t\t\t</div>\n         \n          <div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"location\">Location</label>\n\t\t\t\t\t\t<input id=\"location\" type=\"text\" required name=\"location\" class=\"form-control\" placeholder=\"Location\" ngModel>\n\t\t\t\t\t</div>\n  \n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\n\t\t\t\t\t\t<app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\t<strong>Oops!</strong> {{errors}}\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<!-- app.component.html -->\n<app-header></app-header>\n\n<div class=\"container-fluid\">\n\t<!-- Begin page content -->\n\t<router-outlet></router-outlet>\n</div>\n<!-- /container -->"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-block\">\n\t\t<h3>Welcome home!</h3>\n\t\t<p>{{homeDetails?.message}}</p>  \n\t</div>\n</div>  "

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-2\" role=\"navigation\" style=\"border-right:1px solid #cecece\">\n    <ul class=\"nav nav-pills nav-stacked\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link sidebar-menu-button\" routerLinkActive=\"active-sidebar-link\" routerLink='/dashboard/home'><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\n      </li>           \n    </ul>\n  </div>\n\n  <div class=\"col-md-10\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">dotnetGigs</a>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      \n        <ul *ngIf=\"status\" class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n           \t<a class=\"nav-link\" (click)=\"logout()\" href=\"#\">Logoff</a>\n          </li>\n          <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/dashboard\">Dashboard</a> \n          </li>         \n        </ul>\n\n      <ul *ngIf=\"!status\" class=\"nav navbar-nav\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/register\">Sign Up</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/login\">Login</a>\n\t\t\t</li>\n\t\t  </ul> \n      </div>\n    </nav>\n\n\n "

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "  <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">DotNetGigs</h1>\n        <p class=\"lead text-muted\">Welcome, please signup or login to your account below.</p>\n        <p>\n          <a  class=\"btn btn-primary\"  routerLink=\"/register\">Signup</a>\n          <a href=\"#\" class=\"btn btn-secondary\">Login</a>\n        </p>\n      </div>\n    </section>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">  \n    <div class=\"double-bounce1\"></div>\n    <div class=\"double-bounce2\"></div>\n</div> "

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(253);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this._apiURI = 'http://localhost:5000/api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ })

},[621]);
//# sourceMappingURL=main.bundle.js.map