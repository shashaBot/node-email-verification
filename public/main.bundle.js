webpackJsonp([1,4],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
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


var PopupComponent = (function (_super) {
    __extends(PopupComponent, _super);
    function PopupComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    PopupComponent.prototype.confirm = function () {
        this.result = {
            delay: this.delay,
            title: this.imgTitle
        };
        this.close();
    };
    return PopupComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
PopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'popup',
        styles: [__webpack_require__(494)],
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n                     <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n                   </div>\n                   <div class=\"modal-body\">\n                     <p>{{message || 'Enter image delay and title for'+filename}}</p>\n                     <input class=\"form-control\" placeholder=\"Delay (in seconds)\" type=\"number\" [(ngModel)]=\"delay\"/>\n                     <br>\n                     <input class=\"form-control\" placeholder=\"Title\" type=\"text\" [(ngModel)]=\"imgTitle\"/>\n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n                   </div>\n                 </div>\n              </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], PopupComponent);

var _a;
//# sourceMappingURL=popup.component.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.isScanned = false;
        this.authUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + 'users/';
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', this.getAuthToken());
    }
    AuthService.prototype.authenticateUser = function (username, password) {
        return this.http.post(this.authUrl + 'authenticate', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    AuthService.prototype.registerUser = function (credentials) {
        return this.http.post(this.authUrl + 'register', credentials, { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    AuthService.prototype.storeUserData = function (user, token, isScanned) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('id_token', token);
        this.authToken = token;
        this.currentUser = user;
        this.isScanned = isScanned ? true : false;
        console.log(this.currentUser);
    };
    AuthService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthService.prototype.getAuthToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.scannedLogIn = function () {
        return this.isScanned;
    };
    AuthService.prototype.getUserId = function () {
        return JSON.parse(localStorage.getItem('user')).id;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.adminLogIn = function () {
        return this.currentUser ? this.currentUser.isAdmin : false;
    };
    AuthService.prototype.generateQr = function (timestamp) {
        return this.http.post(this.authUrl + 'generate-qr', { timestamp: timestamp })
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.checkQr = function (tokenId) {
        return this.http.post(this.authUrl + 'check-qr', { tokenId: tokenId })
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.removeAllTokens = function (timestamp) {
        return this.http.post(this.authUrl + 'remove-qr', { timestamp: timestamp })
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.currentUser = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    baseUrl: '/',
    envName: 'dev'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(36);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_category_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(categoryService, _flash, auth) {
        var _this = this;
        this.categoryService = categoryService;
        this._flash = _flash;
        this.auth = auth;
        this.title = 'Manage Categories';
        this.currentUser = this.auth.getCurrentUser().username;
        this.categories = [];
        this.rootCategories = [];
        this.subCategories = [];
        this.pathCategories = [];
        this.categoryService.getRootCategory()
            .subscribe(function (data) {
            if (data.success) {
                _this.categories = data.categories;
                _this.rootCategories = data.categories;
                console.log(_this.categories);
            }
        });
    }
    AdminComponent.prototype.createNewCategory = function () {
        var _this = this;
        var cName = this.categoryname;
        this.categoryService.addRootCategory(cName)
            .subscribe(function (data) {
            if (data.success) {
                console.log(data.category);
                _this.categoryname = null;
                _this.categories.push(data.category);
                _this.rootCategories = _this.categories;
                console.log(_this.categories);
            }
        });
    };
    ;
    AdminComponent.prototype.createNewSubCategory = function (category) {
        var subCName = category.subcategoryname;
        var parent = category.categoryname;
        var parentId = category._id;
        this.categoryService.addSubCategory(parentId, parent, subCName)
            .subscribe(function (data) {
            if (data.success) {
                category.subcategoryname = null;
            }
        });
    };
    ;
    AdminComponent.prototype.getSubCategories = function (category) {
        var _this = this;
        var id = category._id;
        this.categories = [];
        this.populatePath(category);
        this.categoryService.getSubCategory(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.subCategories = data.category.childcategories;
                _this.categories = _this.subCategories;
            }
        });
    };
    ;
    AdminComponent.prototype.removeCategory = function (ct, index) {
        var _this = this;
        if (ct) {
            var categoryname = ct.categoryname;
            var id = ct._id;
            this.categoryService.removeCategory(categoryname, id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.categories.splice(index, 1);
                    console.log('Deleted Successfully');
                }
            });
        }
    };
    AdminComponent.prototype.toggleUpdate = function (ct, index) {
        if (ct.isEdit) {
            this.categories[index].isEdit = false;
            this.oldcategoryname = "";
        }
        else {
            this.categories[index].isEdit = true;
            this.oldcategoryname = ct.categoryname;
        }
    };
    AdminComponent.prototype.editCategory = function (ct, index) {
        var _this = this;
        if (ct) {
            var category = { newcategoryname: ct.categoryname, oldcategoryname: this.oldcategoryname };
            var id = ct._id;
            this.categoryService.updateCategory(category, id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.categories[index] = ct.categoryname;
                    ct.isEdit = false;
                    _this.oldcategoryname = "";
                    console.log('Updated Successfully');
                }
            });
        }
    };
    AdminComponent.prototype.populatePath = function (ct) {
        var selectedCategory = this.pathCategories.find(function (item) { return item._id === ct._id; });
        if (selectedCategory) {
            var index = this.pathCategories.findIndex(function (item) { return item._id === ct._id; });
            this.pathCategories.splice(index + 1, this.pathCategories.length - index);
        }
        else {
            this.pathCategories.push(ct);
        }
    };
    AdminComponent.prototype.populateRootCategories = function () {
        this.categories = this.rootCategories;
        this.pathCategories = [];
    };
    AdminComponent.prototype.storeMailingCredentials = function () {
        var _this = this;
        var credentials = {
            smtpUser: this.smtpUser,
            smtpPass: this.smtpPass,
            smtpMailer: this.smtpMailer
        };
        this.categoryService.storeMailing(credentials).subscribe(function (res) {
            if (res.success) {
                _this._flash.show('SMTP mailing credentials saved!', { cssClass: 'alert-success', timeout: 2000 });
            }
            else {
                _this._flash.show('Error occured!', { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin',
        template: __webpack_require__(563),
        styles: [__webpack_require__(487)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Gallery App';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(564),
        styles: [__webpack_require__(489)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_core__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_dnd__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_qrcode__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_ionCaptcha_directive__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__slideshow_slideshow_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__image_image_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_image_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_category_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__upload_upload_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_auth_guard__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__register_register_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__popup_popup_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__session_qr_session_qr_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__qr_login_qr_login_component__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var ROUTES = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'qr-login',
        component: __WEBPACK_IMPORTED_MODULE_28__qr_login_qr_login_component__["a" /* QrLoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_25__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'images',
        component: __WEBPACK_IMPORTED_MODULE_19__image_image_component__["a" /* ImageComponent */]
    },
    {
        path: 'gallery',
        component: __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'slideshow/:id',
        component: __WEBPACK_IMPORTED_MODULE_15__slideshow_slideshow_component__["a" /* SlideshowComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'session-qr',
        component: __WEBPACK_IMPORTED_MODULE_27__session_qr_session_qr_component__["a" /* SessionQrComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'upload',
        component: __WEBPACK_IMPORTED_MODULE_23__upload_upload_component__["a" /* UploadComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__shared_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__slideshow_slideshow_component__["a" /* SlideshowComponent */],
            __WEBPACK_IMPORTED_MODULE_19__image_image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_25__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared_ionCaptcha_directive__["a" /* IonCaptchaDirective */],
            __WEBPACK_IMPORTED_MODULE_27__session_qr_session_qr_component__["a" /* SessionQrComponent */],
            __WEBPACK_IMPORTED_MODULE_28__qr_login_qr_login_component__["a" /* QrLoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_9_angular2_qrcode__["a" /* QRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_8_ng2_dnd__["a" /* DndModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_26__popup_popup_component__["a" /* PopupComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__shared_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_22__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__shared_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_24__shared_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_image_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_category_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleryComponent = (function () {
    function GalleryComponent(imageService, router, categoryService, auth) {
        var _this = this;
        this.imageService = imageService;
        this.router = router;
        this.categoryService = categoryService;
        this.auth = auth;
        this.title = 'Recent Media Files';
        this.currentUser = this.auth.getCurrentUser().username;
        this.catones = [];
        this.cattwos = [];
        this.catthrees = [];
        this.JSON = JSON;
        //qr codes
        this.qrCodes = [];
        this.categoryService.getRootCategory()
            .subscribe(function (data) {
            if (data.success) {
                _this.catones = data.categories;
            }
        });
        this.populateSessions(null);
    }
    GalleryComponent.prototype.populateSubCategoriesII = function (id) {
        var _this = this;
        this.cattwos = [];
        this.catthrees = [];
        this.totalSessions = [];
        if (id) {
            this.categoryService.getSubCategory(id)
                .subscribe(function (data) {
                if (data) {
                    _this.cattwos = data.category ? data.category.childcategories : [];
                }
            });
            this.populateSessions(id, true);
        }
    };
    GalleryComponent.prototype.populateSubCategoriesIII = function (id) {
        var _this = this;
        this.catthrees = [];
        this.totalSessions = [];
        if (id) {
            this.categoryService.getSubCategory(id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.catthrees = data.category ? data.category.childcategories : [];
                }
            });
            this.populateSessions(id, true);
        }
    };
    GalleryComponent.prototype.populateSessions = function (categoryId, isParent) {
        var _this = this;
        this.totalSessions = [];
        if (categoryId) {
            this.imageService.getSessions(categoryId, isParent)
                .subscribe(function (data) {
                if (data.success) {
                    _this.totalSessions = data.data;
                    _this.totalSessions.forEach(function (value, index) {
                        _this.qrCodes.push({ user: value.userId, session: value._id, sessionname: value.sessionname });
                    });
                }
            });
        }
    };
    GalleryComponent.prototype.showImage = function (session) {
        if (session.images) {
            session.images = null;
            return;
        }
        this.imageService.getImages(session._id)
            .subscribe(function (data) {
            if (data.success) {
                session.images = data.files;
            }
        });
    };
    GalleryComponent.prototype.dragEnd = function (images) {
        var items = images;
        for (var index = 0; index < items.length; index++) {
            var element = items[index];
            this.imageService.updateImage(element._id, index)
                .subscribe(function (data) {
                if (data.success) {
                    console.log('Suffeling Successful');
                }
            });
        }
    };
    GalleryComponent.prototype.startSlideShow = function (session) {
        this.router.navigate(['/slideshow', session._id]);
    };
    GalleryComponent.prototype.ngOnInit = function () {
        // this.imageService.createQrCodes().subscribe(res => {
        //   if(res.success) {
        //     this.qrCodes = res.data;
        //     console.log(this.qrCodes);
        //   } else {
        //     console.log(res.error);
        //   }
        // })
        var _this = this;
        this.checkInterval = setInterval(function () {
            _this.imageService.checkQr().subscribe(function (res) {
                if (res.success) {
                    _this.startSlideShow(res.session);
                }
            });
        }, 3000);
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        // this.imageService.removeAllTokens().subscribe( res => {
        //   // callbacks
        // })
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(565),
        styles: [__webpack_require__(490)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], GalleryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(26);
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
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Angular Gallery App';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
        return false;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(566),
        styles: [__webpack_require__(491)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_image_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageComponent = (function () {
    function ImageComponent(ImageService) {
        this.ImageService = ImageService;
        this.title = 'Random Picture of the Day';
    }
    ImageComponent.prototype.ngOnInit = function () {
        // this.ImageService.randomImage()
        // .subscribe(data => {
        // 	this.imageUrl = data.url;
        // });
    };
    return ImageComponent;
}());
ImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-image',
        template: __webpack_require__(567),
        styles: [__webpack_require__(492)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_image_service__["a" /* ImageService */]) === "function" && _a || Object])
], ImageComponent);

var _a;
//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.captchaKey = '6LevrjQUAAAAAM5WB0Xu_ttsNRqpXeSPV6F0_zek';
        this.logIn = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            captcha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]()
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (!this.logIn.valid)
            return; //show error;
        var username = this.logIn.value.username;
        var password = this.logIn.value.password;
        this.authService.authenticateUser(username, password)
            .subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.authService.storeUserData(data.user, data.token);
                if (data.user.username === "Admin") {
                    _this.router.navigate(['admin']);
                    return;
                }
                _this.router.navigate(['gallery']);
            }
            else {
                console.log(data);
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(568),
        styles: [__webpack_require__(493)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QrLoginComponent = (function () {
    function QrLoginComponent(auth, _flash, router) {
        this.auth = auth;
        this._flash = _flash;
        this.router = router;
        this.JSON = JSON;
    }
    QrLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generateQr();
        this.checkInterval = setInterval(function () {
            if (_this.loginToken) {
                _this.auth.checkQr(_this.loginToken._id).subscribe(function (res) {
                    if (res.success) {
                        _this.auth.storeUserData(res.user, res.authToken, true);
                        _this._flash.show('Login successful!', { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['session-qr']);
                    }
                    else {
                        //
                    }
                }, function (err) {
                    console.log(err);
                    _this._flash.show('Server error', { cssClass: 'alert-danger', timeout: 3000 });
                });
            }
        }, 3000);
    };
    QrLoginComponent.prototype.ngOnDestroy = function () {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
        this.auth.removeAllTokens(this.timestamp).subscribe(function (res) {
            //
        });
    };
    QrLoginComponent.prototype.generateQr = function () {
        var _this = this;
        this.timestamp = Date.now().toString();
        this.auth.generateQr(this.timestamp).subscribe(function (res) {
            if (res.success) {
                _this.loginToken = res.token;
            }
        });
    };
    return QrLoginComponent;
}());
QrLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-qr-login',
        template: __webpack_require__(569),
        styles: [__webpack_require__(495)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], QrLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=qr-login.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, router, _flash) {
        this.authService = authService;
        this.router = router;
        this._flash = _flash;
        this.captchaKey = '6LevrjQUAAAAAM5WB0Xu_ttsNRqpXeSPV6F0_zek';
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            captcha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]()
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        if (!this.registerForm.valid)
            return; //show error
        var credentials = {
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            name: this.registerForm.value.name
        };
        this.authService.registerUser(credentials)
            .subscribe(function (data) {
            if (data.success) {
                _this._flash.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['login']);
            }
            else {
                _this._flash.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        }, function (err) {
            _this._flash.show('Server Error', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(570),
        styles: [__webpack_require__(496)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_image_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionQrComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionQrComponent = (function () {
    function SessionQrComponent(imageService, _flash, router) {
        this.imageService = imageService;
        this._flash = _flash;
        this.router = router;
        this.sessions = [];
        this.qrCodes = [];
        this.JSON = JSON;
    }
    SessionQrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populateSessions();
        this.checkInterval = setInterval(function () {
            _this.imageService.checkQr().subscribe(function (res) {
                if (res.success) {
                    _this.startSlideShow(res.session);
                }
            });
        }, 3000);
    };
    SessionQrComponent.prototype.ngOnDestroy = function () {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
    };
    SessionQrComponent.prototype.populateSessions = function () {
        var _this = this;
        this.imageService.getAllSessions().subscribe(function (res) {
            if (res.success) {
                _this.sessions = res.data;
                _this.sessions.forEach(function (value, index) {
                    _this.qrCodes.push({ user: value.userId, session: value._id, sessionname: value.sessionname });
                });
            }
            else {
                _this._flash.show('There was an error', { cssClass: 'alert-danger', timeout: 3000 });
            }
        }, function (err) {
            _this._flash.show('Server error', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    SessionQrComponent.prototype.startSlideShow = function (session) {
        this.router.navigate(['/slideshow', session._id]);
    };
    return SessionQrComponent;
}());
SessionQrComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'session-qr',
        template: __webpack_require__(571),
        styles: [__webpack_require__(497)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SessionQrComponent);

var _a, _b, _c;
//# sourceMappingURL=session-qr.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(26);
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



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonCaptchaDirective; });
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
        // public baseUrl: string = 'http://localhost:8080/';
        // public baseUrl: string = '';
        // public baseUrl: string = 'https://ionic-node-auth.herokuapp.com/';
        // public baseUrl: string = 'http://192.168.86.40:8080';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ReCaptchaAsyncValidator.prototype.validateToken = function (token) {
        var _this = this;
        return function (_) {
            return _this.http.get(_this.baseUrl + 'validate_captcha', { params: { token: token } }).map(function (res) { return res.json(); }).map(function (res) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
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
        this.control = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgControl */]).control;
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
        this.control.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IonCaptchaDirective.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IonCaptchaDirective.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IonCaptchaDirective.prototype, "lang", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IonCaptchaDirective.prototype, "captchaResponse", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IonCaptchaDirective.prototype, "captchaExpired", void 0);
IonCaptchaDirective = IonCaptchaDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[ionCaptcha]',
        exportAs: 'ionCaptcha',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return IonCaptchaDirective_1; }),
                multi: true
            },
            ReCaptchaAsyncValidator
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _d || Object, ReCaptchaAsyncValidator])
], IonCaptchaDirective);

var _a, IonCaptchaDirective_1, _b, _c, _d;
//# sourceMappingURL=ionCaptcha.directive.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_image_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlideshowComponent = (function () {
    function SlideshowComponent(imageService, api, route, router) {
        this.imageService = imageService;
        this.api = api;
        this.route = route;
        this.router = router;
        this.title = 'Session Slildeshow Page';
        this.currentUser = localStorage.getItem('uname');
        this.visibleImages = [];
        this.currentIndex = 0;
        this.imageSlideTime = 2000;
        this.vPlayer = true;
        // baseUrl: string = 'http://localhost:8080/';
        // baseUrl: string = 'https://ionic-node-auth.herokuapp.com/';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.times = [
            { value: 2000, display: '2 Sec' },
            { value: 4000, display: '4 Sec' },
            { value: 6000, display: '6 Sec' }
        ];
    }
    SlideshowComponent.prototype.ngOnInit = function () {
        this.getParamValues();
    };
    SlideshowComponent.prototype.getParamValues = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
        });
    };
    SlideshowComponent.prototype.onPlayerReady = function (api) {
        this.api = api;
        if (this.param) {
            this.startSlideShow(this.param);
        }
    };
    SlideshowComponent.prototype.startSlideShow = function (sessionId) {
        var _this = this;
        this.api.fsAPI.toggleFullscreen();
        if (sessionId) {
            this.imageService.getImages(sessionId)
                .subscribe(function (data) {
                if (data.success) {
                    _this.visibleImages = data.files;
                    _this.slideshow();
                }
            });
        }
    };
    SlideshowComponent.prototype.slideshow = function () {
        var _this = this;
        var myVideo = document.getElementsByTagName('video')[0];
        var myImage = document.getElementsByTagName('img')[0];
        this.currentIndex = 0;
        if (this.visibleImages[this.currentIndex].imagetype == 'image') {
            var curImage = this.visibleImages[this.currentIndex];
            this.vPlayer = false;
            myImage.src = this.baseUrl + 'session/stream_files?file=' + this.visibleImages[this.currentIndex].imagename;
            this.imageTitle = this.visibleImages[this.currentIndex].imagetitle;
            setTimeout(function () {
                _this.myAddListener();
            }, curImage.imagedelay * 1000 || this.imageSlideTime);
        }
        else {
            this.vPlayer = true;
            myVideo.src = this.baseUrl + 'session/stream_files?file=' + this.visibleImages[this.currentIndex].imagename;
            myVideo.load();
        }
    };
    SlideshowComponent.prototype.myAddListener = function () {
        var _this = this;
        // console.log('nextItem');
        var myVideo = document.getElementsByTagName('video')[0];
        var myImage = document.getElementsByTagName('img')[0];
        this.currentIndex = (this.currentIndex + 1) % this.visibleImages.length;
        if (this.visibleImages.length) {
            if (this.visibleImages[this.currentIndex].imagetype == 'image') {
                var curImage = this.visibleImages[this.currentIndex];
                this.vPlayer = false;
                myImage.src = this.baseUrl + 'session/stream_files?file=' + this.visibleImages[this.currentIndex].imagename;
                this.imageTitle = this.visibleImages[this.currentIndex].imagetitle;
                setTimeout(function () {
                    _this.myAddListener();
                }, curImage.imagedelay * 1000 || this.imageSlideTime);
            }
            else {
                this.vPlayer = true;
                myVideo.src = this.baseUrl + 'session/stream_files?file=' + this.visibleImages[this.currentIndex].imagename;
            }
        }
    };
    SlideshowComponent.prototype.stopPlayer = function () {
        this.visibleImages = [];
        var myImage = document.getElementsByTagName('img')[0];
        var myVideo = document.getElementsByTagName('video')[0];
        myImage.src = myVideo.src = '/src/assets/img/hqdefault.jpg';
    };
    return SlideshowComponent;
}());
SlideshowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'slideshow',
        template: __webpack_require__(572),
        styles: [__webpack_require__(488)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_videogular2_core__["VgAPI"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_videogular2_core__["VgAPI"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SlideshowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=slideshow.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_image_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_category_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popup_popup_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadComponent = (function () {
    function UploadComponent(imageService, categoryService, dialogService) {
        var _this = this;
        this.imageService = imageService;
        this.categoryService = categoryService;
        this.dialogService = dialogService;
        // baseUrl: string = 'http://localhost:8080/';
        // baseUrl: string = 'https://ionic-node-auth.herokuapp.com/';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl;
        this.uploadUrl = this.baseUrl + 'session/upload';
        this.totalSessions = [];
        this.catones = [];
        this.cattwos = [];
        this.catthrees = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: this.uploadUrl });
        this.categoryService.getRootCategory()
            .subscribe(function (data) {
            if (data.success) {
                _this.catones = data.categories;
            }
        });
        this.populateSessions(null);
    }
    UploadComponent.prototype.onOnInit = function () {
    };
    UploadComponent.prototype.populateSubCategoriesII = function (id) {
        var _this = this;
        this.cattwos = [];
        this.catthrees = [];
        this.totalSessions = [];
        if (id) {
            this.categoryService.getSubCategory(id)
                .subscribe(function (data) {
                if (data) {
                    _this.cattwos = data.category ? data.category.childcategories : [];
                }
            });
            this.populateSessions(id, true);
        }
    };
    UploadComponent.prototype.populateSubCategoriesIII = function (id) {
        var _this = this;
        this.catthrees = [];
        this.totalSessions = [];
        if (id) {
            this.categoryService.getSubCategory(id)
                .subscribe(function (data) {
                if (data) {
                    _this.catthrees = data.category ? data.category.childcategories : [];
                }
            });
            this.populateSessions(id, true);
        }
    };
    UploadComponent.prototype.populateSessions = function (categoryId, isParent) {
        var _this = this;
        this.totalSessions = [];
        if (categoryId) {
            this.imageService.getSessions(categoryId, isParent)
                .subscribe(function (data) {
                if (data.success) {
                    _this.totalSessions = data.data;
                }
            });
        }
    };
    UploadComponent.prototype.addImage = function (session) {
        var _this = this;
        this.uploadImage = session.sessionname;
        var uo = {};
        uo.additionalParameter = { sessionname: this.uploadImage, sessionId: session._id };
        uo.itemAlias = 'upload_file';
        uo.headers = [{ name: 'Authorization', value: localStorage.getItem('id_token') }];
        this.uploader.setOptions(uo);
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (item.file.type.indexOf('image/') !== -1) {
                console.log('i am herer!');
                var delaySub = _this.showDelayPopup(item.file.name).subscribe(function (data) {
                    console.log(data);
                    if (data && data.delay) {
                        _this.imageService.updateDelay(JSON.parse(response).file._id, data.delay).subscribe(function (res) {
                            if (res.success) {
                                //success
                            }
                            else {
                                //error
                            }
                        }, function (error) {
                            //http error
                        });
                    }
                    if (data && data.title) {
                        _this.imageService.updateTitle(JSON.parse(response).file._id, data.title).subscribe(function (res) {
                            if (res.success) {
                                //success
                            }
                            else {
                                //error
                            }
                        }, function (error) {
                            //http error
                        });
                    }
                });
            }
        };
    };
    UploadComponent.prototype.removeImage = function (image, images) {
        var id = image._id;
        this.imageService.removeImage(id)
            .subscribe(function (data) {
            if (data.success) {
                images.splice(images.indexOf(image), 1);
                console.log('Removed Successfully');
            }
        });
    };
    UploadComponent.prototype.showImage = function (session) {
        this.imageService.getImages(session._id)
            .subscribe(function (data) {
            if (data.success) {
                session.images = data.files;
                console.log(session.images);
            }
        });
    };
    UploadComponent.prototype.createNewSession = function (categoryId) {
        var _this = this;
        var sessionname = this.sessionname;
        var category = this.catthrees.find(function (ele) {
            return ele._id === categoryId;
        });
        var categoryname = category.categoryname;
        if (categoryname) {
            this.imageService.createSessions(sessionname, categoryname, categoryId)
                .subscribe(function (data) {
                if (data.success) {
                    _this.sessionname = null;
                    _this.totalSessions.push(data.session);
                }
            });
        }
    };
    ;
    UploadComponent.prototype.showDelayPopup = function (filename) {
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__popup_popup_component__["a" /* PopupComponent */], {
            title: 'Enter delay for image',
            message: 'Enter Delay for image: ' + filename
        });
        return disposable;
    };
    UploadComponent.prototype.ngOnInit = function () {
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__(573),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], UploadComponent);

var _a, _b, _c;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = (function () {
    function ImageService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.visibleImages = [];
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // baseUrl: string = 'http://localhost:8080/';
        // baseUrl: string = 'https://ionic-node-auth.herokuapp.com/';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        // private splashUrl = 'http://www.splashbase.co/api/v1/images/random';
        // private galleryUrl = 'http://localhost:3000/api/gallery';
        // private createScessionUrl = 'http://localhost:3000/api/createsession';
        // private getScessionUrl = 'http://localhost:3000/api/getsession';
        // private removeImageUrl = 'http://localhost:3000/api/deleteimage';
        // private updateImageUrl = 'http://localhost:3000/api/imageindex';
        this.galleryUrl = this.baseUrl + 'session/view';
        this.createScessionUrl = this.baseUrl + 'session/create';
        this.getScessionUrl = this.baseUrl + 'session/listbycategory';
        this.removeImageUrl = this.baseUrl + 'session/remove';
        this.updateIndexUrl = this.baseUrl + 'session/updateIndex';
        // QR code && update delay implementation
        this.generateQrUrl = this.baseUrl + 'session/generate-qr';
        this.removeQrUrl = this.baseUrl + 'session/remove-codes';
        this.checkQrUrl = this.baseUrl + 'session/check-qr';
        this.updateDelayUrl = this.baseUrl + 'session/updateDelay';
        this.updateTitleUrl = this.baseUrl + 'session/updateTitle';
        this.headers.append('Authorization', this.auth.getAuthToken());
    }
    ImageService.prototype.getImages = function (sessionId) {
        return this.http.post(this.galleryUrl, { sessionId: sessionId }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.removeImage = function (id) {
        return this.http.post(this.removeImageUrl, { fileId: id }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.updateImage = function (id, index) {
        return this.http.post(this.updateIndexUrl, { index: index, id: id }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.createSessions = function (sessionname, categoryname, categoryId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var data = {
            sessionname: sessionname,
            categoryname: categoryname,
            categoryId: categoryId
        };
        return this.http.post(this.createScessionUrl, data, { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    ImageService.prototype.getSessions = function (categoryId, isParent) {
        // return this.visibleImages = IMAGES.slice(0);
        return this.http.post(this.getScessionUrl, { categoryId: categoryId, isParent: (isParent ? isParent : false) }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.getAllSessions = function () {
        return this.http.get(this.baseUrl + 'session/listSessions', { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    ImageService.prototype.createQrCodes = function () {
        return this.http.get(this.generateQrUrl, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ImageService.prototype.removeAllTokens = function () {
        return this.http.get(this.removeQrUrl, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ImageService.prototype.checkQr = function () {
        return this.http.get(this.checkQrUrl, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ImageService.prototype.updateDelay = function (imageId, delay) {
        return this.http.post(this.updateDelayUrl, { id: imageId, delay: delay }, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ImageService.prototype.updateTitle = function (imageId, title) {
        return this.http.post(this.updateTitleUrl, { id: imageId, title: title }, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    return ImageService;
}());
ImageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ImageService);

var _a, _b;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".clickable {\n  cursor: pointer; }\n\n.margin {\n  margin-bottom: 10px; }\n\n.root-class {\n  color: #428bca;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: pointer; }\n\n.active {\n  color: #777;\n  cursor: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n  margin: 20px auto; }\n\n.image-player {\n  position: relative;\n  width: 100%;\n  /* for IE 6 */ }\n  .image-player img {\n    position: relative;\n    width: 90vw;\n    height: auto;\n    max-height: 90vh; }\n\n.image-text {\n  position: absolute;\n  top: 50px;\n  left: 10px;\n  width: 100%; }\n\nvg-player video {\n  max-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "ul {\n\tpadding: 0;\n\tmargin: 20px auto;\n}\n\n.qr-code img{\n\tdisplay: block;\n\tmargin: auto;\n}\n\n.image-player {\n    position: relative;\n    width: 100%; /* for IE 6 */\n}\n\n.image-text {\n   position: absolute;\n   top: 50px;\n   left: 10px;\n   width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "nav{\n\tbackground-color: #424242;\n\tfont-family: 'Lato', sans-serif;\n}\n\n.logo{\n\tcolor: #fff;\n\tfont-family: 'Lato', sans-serif;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".jumbotron.qr-login {\n  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "qr-code img {\n  display: block;\n  margin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<h2> Welcome To Admin Panel </h2>\n\n<h3> {{ title }} </h3>\n<br>\n\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Send Grid credentials</div>\n      <div class=\"panel-body\">\n          <div class=\"col-md-6\">\n            <form class=\"form\" (ngSubmit)=\"storeMailingCredentials()\">\n              <div class=\"form-group\">\n                <label for=\" mailerId\">Mailing address:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"no-reply@verification.com\" name=\"mailerId\" [(ngModel)]=\"smtpMailer\" id=\"mailerId\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"username\">SendGrid Username:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"user_name\" [(ngModel)]=\"smtpUser\" name=\"username\" id=\"username\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"pwd\">SendGrid Password:</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"*******\" [(ngModel)]=\"smtpPass\" name=\"pwd\" id=\"pwd\">\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!smtpPass || !smtpUser || !smtpMailer\">Update</button>\n            </form>\n          </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Categories</div>\n        <div class=\"panel-body\">\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-md-3\">\n                    <div class=\"input-group\" *ngIf=\"pathCategories.length == 0\">\n                        <input type=\"text\" class=\"form-control\" name=\"categoryname\" [(ngModel)]=\"categoryname\" required>\n                        <div class=\"input-group-btn\">\n                            <button type=\"button\" [disabled]=\"categoryname == null\" (click)=\"createNewCategory()\" class=\"btn btn-success dropdown-toggle\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">Create Root Category</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <br>\n            <div class=\"margin\">\n                <button type=\"button\" *ngIf=\"pathCategories.length != 0\" (click)=\"populateRootCategories()\" class=\"btn btn-default dropdown-toggle\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"glyphicon glyphicon-chevron-left\"></span>Root Categories</button>\n            </div>\n            <ol class=\"breadcrumb\" *ngIf=\"pathCategories.length != 0\">\n                <li *ngFor=\"let c of pathCategories; let last = last\" [ngClass]=\"{ active: last }\" class=\"root-class\" (click)=\"getSubCategories(c)\">{{ c.categoryname }}</li>\n            </ol>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-md-3\" *ngFor=\"let ct of categories; let i = index\">\n                    <div class=\"thumbnail\">\n                        <button style=\"float:right\" class=\"btn btn-danger\" (click)=\"removeCategory(ct, i)\">\n                            <span class=\"glyphicon glyphicon-remove\"></span></button>\n                        <button style=\"float:right;margin-right:2px;\" class=\"btn btn-info\" (click)=\"toggleUpdate(ct, i)\">\n                            <span class=\"glyphicon glyphicon-edit\"></span></button>\n                        <div class=\"caption clickable\" (click)=\"getSubCategories(ct)\">\n                            <h3>{{ct.categoryname}}</h3>\n                        </div>\n                        <div class=\"caption input-group\" *ngIf=\"ct.isEdit == true\">\n                            <input type=\"text\" class=\"form-control\" name=\"categoryname\" [(ngModel)]=\"ct.categoryname\" required>\n                            <div class=\"input-group-btn\">\n                                <button type=\"button\" [disabled]=\"ct.categoryname == null\" (click)=\"editCategory(ct)\" class=\"btn btn-success dropdown-toggle\"\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">Update</button>\n                            </div>\n                        </div>\n                        <div class=\"caption input-group\" *ngIf=\"pathCategories.length < 2\">\n                            <div class=\"input-group-btn\">\n                                <button type=\"button\" [disabled]=\"ct.subcategoryname == null\" (click)=\"createNewSubCategory(ct)\" class=\"btn btn-default dropdown-toggle\"\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">Sub Category</button>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" name=\"categoryname\" [(ngModel)]=\"ct.subcategoryname\" required>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header> </app-header>\n  <flash-messages></flash-messages>  \n  <router-outlet> </router-outlet>\n</div>\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<h2> Welcome {{ currentUser }} </h2>\n\n<h3> {{ title }} </h3>\n\n<div class=\"row\">\n\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">All Sessions</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"form-group col-xs-4\">\n\t\t\t\t\t\t<label>Select Category I</label>\n\t\t\t\t\t\t<select class=\"form-control\" name=\"time\" [(ngModel)]=\"catone\" (click)=\"populateSubCategoriesII(catone)\">\n                            <option *ngFor=\"let t of catones\" [value]=\"t._id\">\n                            {{t.categoryname}}\n                            </option>\n                        </select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-xs-4\" *ngIf=\"catone != null && catones.length != 0\">\n\t\t\t\t\t\t<label>Select Category II</label>\n\t\t\t\t\t\t<select class=\"form-control\" name=\"time\" [(ngModel)]=\"cattwo\" (click)=\"populateSubCategoriesIII(cattwo)\">\n                            <option *ngFor=\"let t of cattwos\" [value]=\"t._id\">\n                            {{t.categoryname}}\n                            </option>\n                        </select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-xs-4\" *ngIf=\"cattwo != null && cattwos.length != 0\">\n\t\t\t\t\t\t<label>Select Category III</label>\n\t\t\t\t\t\t<select class=\"form-control\" name=\"time\" [(ngModel)]=\"catthree\" (click)=\"populateSessions(catthree)\">\n                            <option *ngFor=\"let t of catthrees\" [value]=\"t._id\">\n                            {{t.categoryname}}\n                            </option>\n                        </select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-3 col-md-4\" *ngFor=\"let session of totalSessions; let i=index\">\n\t\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<qr-code class=\"qr-code\" [value]=\"JSON.stringify(qrCodes[i])\" [size]=\"160\"></qr-code>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h3>{{session.sessionname}}</h3>\n\t\t\t\t\t\t\t\t<!-- <p><li></li></p> -->\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"startSlideShow(session)\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-play\"></span>\n\t\t\t\t\t\t\t</button> <button type=\"button\" class=\"btn btn-primary\" (click)=\"showImage(session)\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div *ngIf=\"session.images != undefiend\">\n\t\t\t\t\t\t\t\t\t<b>Media Files</b>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-group\" dnd-sortable-container [sortableData]=\"session.images\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let image of session.images; let i = index\" (dragend)=\"dragEnd(session.images)\" class=\"list-group-item\" dnd-sortable\n\t\t\t\t\t\t\t\t\t\t [sortableIndex]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t{{ image.imagename }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- <div class=\"col-md-6\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"form-group col-xs-4\">\n\t\t\t\t<label>Image  Transition Time</label>\n\t\t\t\t<select class=\"form-control\" name=\"time\" [(ngModel)]=\"imageSlideTime\">\n\t\t\t\t\t<option *ngFor=\"let t of times\" [value]=\"t.value\">\n\t\t\t\t\t{{t.display}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t\t<vg-player (onPlayerReady)=\"onPlayerReady($event)\">\n\t\t\t<video [hidden]=\"!vPlayer\" [vgMedia]=\"media\" autoplay (ended)=\"myAddListener()\" #media id=\"singleVideo\" preload=\"auto\" controls>\n\t\t\t\t<source src=\"\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<div [hidden]=\"vPlayer\" class=\"image-player\">\n\t\t\t\t<img style=\"min-height:100%;min-width:100%;\" width=\"200\" height=\"200\">\n\t\t\t\t<h2 class=\"image-text\">{{imageTitle}}</h2>\n\t\t\t</div>\n\t\t</vg-player>\n\t\t<button *ngIf=\"visibleImages.length != 0\" type=\"button\" class=\"btn btn-danger btn-big btn-warning\" (click)=\"stopPlayer()\">\n\t\t\t<span class=\"glyphicon glyphicon-stop\"></span> Stop\n\t\t</button>\n\t</div> -->\n</div>\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<a class=\"navbar-brand logo\" href=\"#\"> {{ title }} </a>\n\t\t\t</div>\n\t\t\t<ul class=\"nav navbar-nav\" *ngIf=\"!authService.adminLogIn()\">\n\t\t\t\t<li><a *ngIf=\"authService.loggedIn() && !authService.scannedLogIn()\" class=\"nav-link\" routerLink=\"/gallery\">Gallery</a></li>\n\t\t\t\t<li><a *ngIf=\"authService.loggedIn() && !authService.scannedLogIn()\" class=\"nav-link\" routerLink=\"/upload\">Upload</a></li>\n\t\t\t\t<li><a *ngIf=\"authService.adminLogIn() && !authService.scannedLogIn()\" class=\"nav-link\" routerLink=\"/admin\">Admin</a></li>\n\t\t\t\t<li><a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" routerLink=\"/session-qr\">Session QRs</a></li>\n\t\t\t\t<li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"/login\">Login</a></li>\n\t\t\t\t<li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"/register\">Register</a></li>\n\t\t\t\t<li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"/qr-login\">QR Login</a></li>\n\t\t\t\t<li><a *ngIf=\"authService.loggedIn()\" href=\"\" class=\"nav-link\" (click)=\"onLogout()\">Logout</a></li>\n\t\t\t</ul>\n\t\t\t<ul class=\"nav navbar-nav\" *ngIf=\"authService.adminLogIn()\">\n\t\t\t\t<li><a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" routerLink=\"/admin\">Admin</a></li>\n\t\t\t\t<li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"/login\">Login</a></li>\n\t\t\t\t<li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"/register\">Register</a></li>\n\t\t\t\t<li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"/qr-login\">QR Login</a></li>\n\t\t\t\t<li><a *ngIf=\"authService.loggedIn()\" href=\"\" class=\"nav-link\" (click)=\"onLogout()\">Logout</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</div>\n"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3> {{ title }} </h3>\n  <img src=\"{{imageUrl}}\" class=\"tn\" width=\"800\" height=\"600\">\n</div>"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Login</h2>\n  <form (submit)=\"onLogin()\" [formGroup]=\"logIn\">\n    <div class=\"form-group\">\n    <label> Username</label>\n    <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\" placeholder=\"Enter your username\" [(ngModel)]=\"username\" required>\n    </div>\n    <div class=\"form-group\">\n    <label> Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Enter your password\" [(ngModel)]=\"password\" required>\n    </div>\n    <div class=\"captcha-div\" ionCaptcha [key]=\"captchaKey\" formControlName=\"captcha\"></div> \n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"jumbotron qr-login\" style=\"overflow: hidden\">\n      <div class=\"col-md-6\">\n        <qr-code class=\"qr-code\" [value]=\"loginToken?._id\" [size]=\"160\"></qr-code>\n      </div>\n      <div class=\"col-md-6\">\n        <h2>Scan the QR code to login!</h2>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Register</h2>\n  <form (submit)=\"onRegister()\" [formGroup]=\"registerForm\">\n    <div class=\"form-group\">\n      <label> Enter a name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" placeholder=\"Enter your name\" required>\n    </div>\n    <div class=\"form-group\">\n      <label> Enter your email ID:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"you@example.com\" required>\n    </div>\n    <div class=\"form-group\">\n    <label> Enter your username:</label>\n    <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\" placeholder=\"user_name\" required>\n    </div>\n    <div class=\"form-group\">\n    <label> Enter a password:</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"*******\" required>\n    </div>\n    <div class=\"captcha-div\" ionCaptcha [key]=\"captchaKey\" formControlName=\"captcha\"></div>\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-3 col-md-4\" *ngFor=\"let session of sessions; let i=index\">\n    <div class=\"thumbnail\">\n      <div class=\"caption\">\n        <div>\n          <qr-code class=\"qr-code\" [value]=\"JSON.stringify(qrCodes[i])\" [size]=\"160\"></qr-code>\n        </div>\n        <h3 class=\"text-center\">{{session.sessionname}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<div class=\"\">\n\t\t<!-- <div class=\"row\">\n\t\t\t<div class=\"form-group col-xs-4\">\n\t\t\t\t<label>Image  Transition Time</label>\n\t\t\t\t<select class=\"form-control\" name=\"time\" [(ngModel)]=\"imageSlideTime\">\n\t\t\t\t\t<option *ngFor=\"let t of times\" [value]=\"t.value\">\n\t\t\t\t\t{{t.display}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div> -->\n\t\t<vg-player (onPlayerReady)=\"onPlayerReady($event)\">\n\t\t\t<video [hidden]=\"!vPlayer\" [vgMedia]=\"media\" autoplay (ended)=\"myAddListener()\" #media id=\"singleVideo\" preload=\"auto\" controls crossorigin=\"use-credentials\">\n\t\t\t\t<source src=\"\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<div [hidden]=\"vPlayer\" class=\"image-player\">\n\t\t\t\t<img style=\"min-height:100%;min-width:100%;\" crossorigin=\"use-credentials\">\n\t\t\t\t<h2 class=\"image-text\">{{imageTitle}}</h2>\n\t\t\t</div>\n\t\t</vg-player>\n\t\t<button *ngIf=\"visibleImages.length != 0\" type=\"button\" class=\"btn btn-danger btn-big btn-warning\" (click)=\"stopPlayer()\">\n\t\t\t<span class=\"glyphicon glyphicon-stop\"></span> Stop\n\t\t</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Create Sessions</div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"form-group col-xs-4\">\n                        <label>Select Category I</label>\n                        <select class=\"form-control\" name=\"time\" [(ngModel)]=\"catone\" (click)=\"populateSubCategoriesII(catone)\">\n                            <option *ngFor=\"let t of catones\" [value]=\"t._id\">\n                            {{t.categoryname}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-xs-4\" *ngIf=\"catone != null && catones.length != 0\">\n                        <label>Select Category II</label>\n                        <select class=\"form-control\" name=\"time\" [(ngModel)]=\"cattwo\" (click)=\"populateSubCategoriesIII(cattwo)\">\n                            <option *ngFor=\"let t of cattwos\" [value]=\"t._id\">\n                            {{t.categoryname}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-xs-4\" *ngIf=\"cattwo != null && cattwos.length != 0\">\n                        <label>Select Category III</label>\n                        <select class=\"form-control\" name=\"time\" [(ngModel)]=\"catthree\" (click)=\"populateSessions(catthree)\" >\n                            <option *ngFor=\"let t of catthrees\" [value]=\"t._id\">\n                            {{t.categoryname}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"col-xs-6 col-md-3\">\n                        <div class=\"input-group\" *ngIf=\"catthree != null && catthrees.length != 0\">\n                            <input type=\"text\" class=\"form-control\" name=\"sessionname\" [(ngModel)]=\"sessionname\" required>\n                            <div class=\"input-group-btn\">\n                                <button type=\"button\" [disabled]=\"sessionname == null\" (click)=\"createNewSession(catthree)\" class=\"btn btn-default dropdown-toggle\"\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">Create New</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-xs-3 col-md-3\" *ngFor=\"let session of totalSessions\">\n                        <div class=\"thumbnail\">\n                            <img src=\"/src/assets/img/Create_Something.jpg\">\n                            <div class=\"caption\">\n                                <h3>{{session.sessionname}}</h3>\n                                <p><a (click)=\"addImage(session)\" class=\"btn btn-primary\" role=\"button\">\n                                    <span class=\"glyphicon glyphicon-upload\"></span> Upload</a> <a (click)=\"showImage(session)\"\n                                        class=\"btn btn-default\" role=\"button\">\n                                    <span class=\"glyphicon glyphicon-plus\"></span> View All</a></p>\n                                <div *ngIf=\"session.images != undefiend\">\n                                    <b>Media Files</b>\n                                    <ul class=\"list-group\">\n                                        <li class=\"list-group-item\" *ngFor=\"let image of session.images\">\n                                            {{ image.imagename }} <a (click)=\"removeImage(image, session.images)\" style=\"float:right\"\n                                                role=\"button\">\n                                                <span class=\"glyphicon glyphicon-remove\"></span></a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row panel panel-default\" *ngIf=\"uploadImage != null\">\n        <div class=\"panel-body\">\n            <div class=\"col-md-4\">\n                <h2>Upload Image For <b>{{uploadImage}}</b></h2>\n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"single\">Select your image:</label>\n                        <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-8\">\n                <h3>Image Upload</h3>\n                Number of images: {{ uploader?.queue?.length }}\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th width=\"50%\">Name</th>\n                            <th>Size</th>\n                            <th>Progress</th>\n                            <th>Status</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of uploader.queue\">\n                            <td>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.file.name\" required>\n                            </td>\n                            <!-- <td><strong>{{ item.file.name }}</strong></td> -->\n                            <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                            <td>\n                                <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                </div>\n                            </td>\n                            <td class=\"text-center\">\n                                <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                                <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                                <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                            </td>\n                            <td nowrap>\n                                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                    </button>\n                                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                    </button>\n                                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                    </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div>\n                    <div>\n                        Upload progress:\n                        <div class=\"progress\" style=\"\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                        </div>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n            </button>\n                    <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n            </button>\n                    <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n            </button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.visibleImages = [];
        // private splashUrl = 'http://www.splashbase.co/api/v1/images/random';
        // private baseUrl = 'http://localhost:3000/api/';
        // private baseUrl = 'http://localhost:8080/category/';
        // private baseUrl = 'https://ionic-node-auth.herokuapp.com/';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.headers.append('Authorization', localStorage.getItem('id_token'));
        this.headers.append('Content-Type', 'application/json');
    }
    CategoryService.prototype.getRootCategory = function () {
        return this.http.get(this.baseUrl + 'category/getrootcategories', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getSubCategory = function (id) {
        var data = { id: id };
        return this.http.post(this.baseUrl + 'category/getsubcategories', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.addSubCategory = function (parentId, parentcategory, categoryname) {
        var data = { parentcategory: parentcategory, categoryname: categoryname, parentId: parentId };
        return this.http.post(this.baseUrl + 'category/addsubcategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.addRootCategory = function (categoryname) {
        var data = { categoryname: categoryname };
        return this.http.post(this.baseUrl + 'category/addrootcategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.removeCategory = function (categoryname, id) {
        var data = { id: id, categoryname: categoryname };
        return this.http.post(this.baseUrl + 'category/deletecategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.updateCategory = function (category, id) {
        var data = { id: id, category: category };
        return this.http.post(this.baseUrl + 'category/updatecategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.storeMailing = function (credentials) {
        return this.http.post(this.baseUrl + 'admin/storemailer', credentials, { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CategoryService);

var _a;
// const IMAGES = [
//   { "id": 1, "caption": "Grassland Deer", "url": "assets/img/deer.jpg" },
//   { "id": 2, "caption": "A lonely Road", "url": "assets/img/road.jpg" },
//   { "id": 3, "caption": "Mountain Top", "url": "assets/img/mountain.jpg" },
// ];
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[846]);
//# sourceMappingURL=main.bundle.js.map