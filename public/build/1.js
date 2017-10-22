webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegisterPageModule = RegisterPageModule_1 = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = RegisterPageModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
        ],
        exports: [
            RegisterPageModule_1
        ]
    })
], RegisterPageModule);

var RegisterPageModule_1;
//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ion_captcha_ion_captcha__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__ion_captcha_ion_captcha__["a" /* IonCaptchaDirective */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__ion_captcha_ion_captcha__["a" /* IonCaptchaDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonCaptchaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// export const RECAPTCHA_URL = new InjectionToken('RECAPTCHA_URL');
var ReCaptchaAsyncValidator = (function () {
    function ReCaptchaAsyncValidator(http) {
        this.http = http;
    }
    ReCaptchaAsyncValidator.prototype.validateToken = function (token) {
        var _this = this;
        return function (_) {
            return _this.http.get('/validate_captcha', { params: { token: token } }).map(function (res) { return res.json(); }).map(function (res) {
                if (!res.success) {
                    return { tokenInvalid: true };
                }
                return null;
            });
        };
    };
    return ReCaptchaAsyncValidator;
}());
ReCaptchaAsyncValidator = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ReCaptchaAsyncValidator);
var IonCaptchaDirective = IonCaptchaDirective_1 = (function () {
    function IonCaptchaDirective(element, ngZone, injector, reCaptchaAsyncValidator) {
        this.element = element;
        this.ngZone = ngZone;
        this.injector = injector;
        this.reCaptchaAsyncValidator = reCaptchaAsyncValidator;
        this.config = {};
        this.captchaResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.captchaExpired = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    IonCaptchaDirective.prototype.ngOnInit = function () {
        this.registerReCaptchaCallback();
        this.addScript();
    };
    IonCaptchaDirective.prototype.registerReCaptchaCallback = function () {
        var _this = this;
        window.reCaptchaLoad = function () {
            var config = __assign({}, _this.config, { 'sitekey': _this.key, 'callback': _this.onSuccess.bind(_this), 'expired-callback': _this.onExpired.bind(_this) });
            _this.widgetId = _this.render(_this.element.nativeElement, config);
        };
    };
    IonCaptchaDirective.prototype.ngAfterViewInit = function () {
        this.control = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */]).control;
        this.setValidators();
    };
    IonCaptchaDirective.prototype.getId = function () {
        return this.widgetId;
    };
    /**
     * Calling the setValidators doesn't trigger any update or value change event.
     * Therefore, we need to call updateValueAndValidity to trigger the update
     */
    IonCaptchaDirective.prototype.setValidators = function () {
        this.control.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.control.updateValueAndValidity();
    };
    IonCaptchaDirective.prototype.writeValue = function (obj) {
    };
    IonCaptchaDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    IonCaptchaDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    IonCaptchaDirective.prototype.onExpired = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.captchaExpired.emit();
            _this.onChange(null);
            _this.onTouched(null);
        });
    };
    IonCaptchaDirective.prototype.onSuccess = function (token) {
        var _this = this;
        this.ngZone.run(function () {
            _this.verifyToken(token);
            _this.captchaResponse.next(token);
            _this.onChange(token);
            _this.onTouched(token);
        });
    };
    IonCaptchaDirective.prototype.verifyToken = function (token) {
        this.control.setAsyncValidators(this.reCaptchaAsyncValidator.validateToken(token));
        this.control.updateValueAndValidity();
    };
    IonCaptchaDirective.prototype.render = function (element, config) {
        return grecaptcha.render(element, config);
    };
    IonCaptchaDirective.prototype.reset = function () {
        if (!this.widgetId)
            return;
        grecaptcha.reset(this.widgetId);
        this.onChange(null);
    };
    IonCaptchaDirective.prototype.getResponse = function () {
        if (!this.widgetId)
            return grecaptcha.getResponse(this.widgetId);
    };
    IonCaptchaDirective.prototype.addScript = function () {
        var script = document.createElement('script');
        var lang = this.lang ? '&hl=' + this.lang : '';
        script.src = "https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit" + lang;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    };
    return IonCaptchaDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IonCaptchaDirective.prototype, "key", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IonCaptchaDirective.prototype, "config", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IonCaptchaDirective.prototype, "lang", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IonCaptchaDirective.prototype, "captchaResponse", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IonCaptchaDirective.prototype, "captchaExpired", void 0);
IonCaptchaDirective = IonCaptchaDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[ionCaptcha]',
        exportAs: 'ionCaptcha',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
                useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return IonCaptchaDirective_1; }),
                multi: true
            },
            ReCaptchaAsyncValidator
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], ReCaptchaAsyncValidator])
], IonCaptchaDirective);

var IonCaptchaDirective_1;
//# sourceMappingURL=ion-captcha.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.createSuccess = false;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            captcha: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    }
    // ionViewCanEnter(): boolean {
    //   if(this.auth.loggedIn()){
    //     this.nav.setRoot(HomePage);
    //     return false;
    //   }
    //   else return true;
    // }
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.showLoading();
        if (!this.registerForm.valid)
            return this.showError('Please provide all details and verify your humanity.');
        var credentials = {
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            name: this.registerForm.value.name
        };
        this.auth.register(credentials).subscribe(function (data) {
            if (data.success) {
                _this.createSuccess = true;
                _this.showPopup("Success", data.msg);
            }
            else {
                _this.showPopup("Error", data.msg);
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    RegisterPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/media/shashwat/Data/coding/codebase/MEAN/Ionic-Node-auth/ionic-src/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content" padding>\n  <div class="login-box">\n\n    <form (ngSubmit)="register()" [formGroup]="registerForm" novalidate>\n      <ion-row>\n        <ion-col col-md-8 offset-md-2>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Name" formControlName="name" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" formControlName="email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Username" formControlName="username" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" formControlName="password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="captcha-col">\n          <div class="captcha-div" ionCaptcha key="6LevrjQUAAAAAM5WB0Xu_ttsNRqpXeSPV6F0_zek" formControlName="captcha"></div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row justify-content-center>\n        <ion-col class="signup-col" col-md-6 offset-md-3>\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.valid">Register</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/media/shashwat/Data/coding/codebase/MEAN/Ionic-Node-auth/ionic-src/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.js.map