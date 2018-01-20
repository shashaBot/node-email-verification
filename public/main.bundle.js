webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form class=\"form-signin\" (ngSubmit)=\"onLogin()\" [formGroup]=\"adminLoginForm\">\n    <h2 class=\"form-signin-heading\">Admin Login</h2>\n    <label for=\"username\" class=\"sr-only\">Username</label>\n    <input type=\"email\" id=\"username\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"checkValid(username)\" placeholder=\"Username\" required autofocus>\n    <div class=\"invalid-feedback\" *ngIf=\"username.errors?.required && (username.touched || username.dirty)\">Username is required</div>\n\n    <label for=\"password\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n    <div class=\"invalid-feedback\" *ngIf=\"password.errors?.required && (password.touched || password.dirty)\">Password is required</div>\n\n    <div class=\"captcha-div\" ionCaptcha [key]=\"captchaKey\" formControlName=\"captcha\"></div>    \n    <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!adminLoginForm.valid\" type=\"submit\">Sign in</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin-login/admin-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.captcha-div {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLoginComponent = (function () {
    function AdminLoginComponent(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.captchaKey = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].captchaKey;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.captcha = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null);
        this.adminLoginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            username: this.username,
            password: this.password,
            captcha: this.captcha
        });
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.adminLoginForm.valid) {
            var credentials = {
                username: this.username.value,
                password: this.password.value,
                isAdmin: true
            };
            this.auth.authenticateUser(credentials)
                .subscribe(function (res) {
                if (res.success) {
                    _this.router.navigate(['/admin']);
                    _this.auth.storeUserData(res.user, res.token);
                }
                else {
                    // show error toast
                    _this.toastr.error(res.msg, 'Error');
                }
            });
        }
        else {
            // show errors
            Object.keys(this.adminLoginForm.controls).forEach(function (field) {
                var control = _this.adminLoginForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    AdminLoginComponent.prototype.checkValid = function (control) {
        if (control.errors && (control.touched || control.dirty)) {
            return 'is-invalid';
        }
        else if (!control.errors && (control.touched || control.dirty)) {
            return 'is-valid';
        }
    };
    AdminLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__("../../../../../src/app/admin-login/admin-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-login/admin-login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ngx-loading [show]=\"isLoading\"></ngx-loading>\n    <div class=\"row mt-3\">\n        <ngb-tabset (tabChange)=\"changeAdminTab($event)\">\n            <ngb-tab title=\"Edit SMTP Details\" id=\"edit_smtp\">\n                <ng-template ngbTabContent>\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <form class=\"form\" (ngSubmit)=\"storeMailingCredentials()\">\n                                <div class=\"form-group\">\n                                    <label for=\"mailerId\">Mailing address:</label>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"no-reply@app-mail-service.com\" name=\"mailerId\" [(ngModel)]=\"smtpMailer\" id=\"mailerId\">\n                                </div>\n                                <div class=\"radio\">\n                                    <label>\n                                        <input type=\"radio\" name=\"smtp_opt\" (change)=\"selectSmtpType(1)\" [checked]=\"smtpType===1\">Use a well known service</label>\n                                    <label>\n                                        <input type=\"radio\" name=\"smtp_opt\" (change)=\"selectSmtpType(2)\" [checked]=\"smtpType===2\">I'll provide host and port for custom SMTP</label>\n                                </div>\n                                <div *ngIf=\"smtpType\">\n                                    <div class=\"form-group\" *ngIf=\"smtpType===1\">\n                                        <label for=\"service\">Service Name (see list of <a href=\"https://nodemailer.com/smtp/well-known/\" target=\"_blank\">supported services</a>)</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"eg. SendGrid, Gmail, Hotmail\" [(ngModel)]=\"smtpService\" name=\"service\" id=\"service\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"smtpType === 2\">\n                                        <label for=\"host\">SMTP Host:</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"mail.my-smtp.com\" [(ngModel)]=\"smtpHost\" name=\"host\" id=\"host\">\n                                    </div>\n                                    <div class=\"form-group\" *ngIf=\"smtpType === 2\">\n                                        <label for=\"pwd\">SMTP Port:</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"2442\" [(ngModel)]=\"smtpPort\" name=\"port\" id=\"port\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"username\">SMTP Username:</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"user_name\" [(ngModel)]=\"smtpUser\" name=\"username\" id=\"username\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"pwd\">SMTP Password:</label>\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"*******\" [(ngModel)]=\"smtpPass\" name=\"pwd\" id=\"pwd\">\n                                    </div>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!smtpPass || !smtpUser || !smtpMailer\">Update</button>\n                            </form>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Manage Categories\" id=\"manage_categories\">\n                <ng-template ngbTabContent>\n                    <div class=\"row mx-0 mt-3\">\n                        <nav aria-label=\"breadcrumb\">\n                          <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item clickable\" [class.active]=\"!pathCategories.length\" (click)=\"goToRootCats()\" [attr.aria-current]=\"{'page': !pathCategories.length}\">\n                                Root Categories\n                            </li>\n                            <li class=\"breadcrumb-item\" *ngFor=\"let pathCat of pathCategories; let i=index\" aria-current=\"page\" [class.active]=\"pathCategories.length -1 == i\" (click)=\"getSubCats(pathCat)\" [attr.aria-current]=\"{'page': pathCategories.length-1 == i}\">\n                                {{pathCat.categoryname}}\n                            </li>\n                          </ol>\n                        </nav>                        \n                    </div>\n                    <div class=\"row mx-0 mt-3\">\n                        <div class=\"col col-12 col-xs-12 col-md-12 mb-3\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <div class=\"card-text\">\n                                        <form class=\"form-inline\" (ngSubmit)=\"createNewCategory()\">\n                                          <div class=\"form-group\">\n                                            <label for=\"categoryname\" class=\" mr-3\">Add {{categoryType}}:</label>\n                                            <input type=\"text\" class=\"form-control mr-2\" [(ngModel)]=\"newCategoryName\" id=\"categoryname\" name=\"categoryname\">\n                                          </div>\n                                          <button type=\"submit\" class=\"btn btn-primary mb-2\" [disabled]=\"!newCategoryName\"><i class=\"icon ion-plus\"></i>  Create</button>\n                                        </form>                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col col-md-4 col-xs-12\" *ngFor=\"let cat of categories; let i=index\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title text-center\" *ngIf=\"!editing[cat._id]\">{{cat.categoryname}}</h5>\n                                    <input class=\"form-control\" *ngIf=\"editing[cat._id]\" [(ngModel)]=\"newCatName[cat._id]\">\n                                    <div class=\"row justify-content-space-evenly\">\n                                        <div class=\"text-center\">\n                                            <button class=\"btn btn-primary\" (click)=\"startEdit(cat)\" *ngIf=\"!editing[cat._id]\"><i class=\"icon ion-edit\"></i></button>\n                                            <button class=\"btn btn-warning\" *ngIf=\"editing[cat._id]\" (click)=\"renameCategory(cat._id, i)\">Save</button>\n                                        </div>\n                                        <div class=\" text-center\">\n                                            <button class=\"btn btn-outline-primary\" (click)=\"getSubCats(cat)\"> <i class=\"icon ion-eye\"></i></button>\n                                        </div>                                        \n                                        <div class=\"text-center\">\n                                            <button class=\"btn btn-danger\" (click)=\"removeCategory(cat, i)\">\n                                                <i class=\"icon ion-trash-b\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"card-footer text-muted\">\n                                    {{cat.childcategories?.length || 'Zero'}} subcategories\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col col-xs-12\" *ngIf=\"!categories?.length\">\n                            <div class=\"card\">\n                                <div class=\"card-title text-center\">\n                                    <h5>No categories found</h5>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ngb-tabset {\n  display: block;\n  width: 100%; }\n\n.clickable {\n  cursor: pointer; }\n\n.margin {\n  margin-bottom: 10px; }\n\n.root-class {\n  color: #428bca;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: pointer; }\n\n.active {\n  color: #777;\n  cursor: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_category_service__ = __webpack_require__("../../../../../src/app/shared/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_popup_confirm_popup_component__ = __webpack_require__("../../../../../src/app/confirm-popup/confirm-popup.component.ts");
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
    function AdminComponent(categoryService, toastr, auth, dialogService) {
        var _this = this;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.auth = auth;
        this.dialogService = dialogService;
        this.categories = [];
        this.rootCategories = [];
        this.subCategories = [];
        this.pathCategories = [];
        this.smtpType = 1;
        this.isLoading = false;
        this.editing = {};
        this.newCatName = {};
        this.categoryType = 'Root Category';
        this.isLoading = true;
        this.categoryService.getRootCategory()
            .subscribe(function (data) {
            _this.isLoading = false;
            if (data.success) {
                _this.categories = data.categories;
                _this.rootCategories = data.categories;
                console.log(_this.categories);
            }
            else {
                _this.toastr.error(data.msg, 'Error');
            }
        }, function (error) {
            _this.isLoading = false;
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.getSmtp().subscribe(function (res) {
            _this.isLoading = false;
            if (res.success) {
                if (!res.user)
                    return _this.toastr.error('No SMTP configuration has been found. Please enter SMTP details.', 'Error');
                _this.smtpMailer = res.mailerId;
                _this.smtpUser = res.user;
                if (res.host) {
                    _this.smtpHost = res.host;
                    _this.smtpPort = res.port;
                    _this.smtpType = 2;
                }
                else {
                    _this.smtpType = 1;
                    _this.smtpService = res.service;
                }
            }
            else {
                _this.toastr.error(res.msg, 'Error');
            }
        }, function (error) {
            _this.isLoading = false;
        });
    };
    AdminComponent.prototype.createNewCategory = function () {
        var _this = this;
        this.isLoading = true;
        var catName = this.newCategoryName;
        var parentId = this.selectedCategory ? this.selectedCategory._id : null;
        if (parentId) {
            this.categoryService.addSubCategory(parentId, catName)
                .subscribe(function (data) {
                handleCatAddition(data, _this.categories);
            }, function (error) {
                _this.isLoading = false;
            });
        }
        else {
            this.categoryService.addRootCategory(catName)
                .subscribe(function (data) {
                handleCatAddition(data, _this.rootCategories);
            }, function (error) {
                _this.isLoading = false;
            });
        }
        var handleCatAddition = function (data, categories) {
            _this.isLoading = false;
            _this.newCategoryName = '';
            if (data.success) {
                console.log(data.category);
                categories.push(data.category);
                console.log(categories);
            }
            else {
                _this.toastr.error(data.msg, 'Error');
            }
        };
    };
    ;
    // getSubCategories(category) {
    //     let id = category._id;
    //     this.categories = [];
    //     this.populatePath(category);
    //     this.categoryService.getSubCategory(id)
    //         .subscribe(data => {
    //             if (data.success) {
    //                 this.categories = data.category.childcategories;
    //             }
    //         });
    // };
    AdminComponent.prototype.goToRootCats = function () {
        this.pathCategories = [];
        this.categoryType = 'Root Category';
        this.categories = this.rootCategories;
        this.selectedCategory = null;
    };
    AdminComponent.prototype.getSubCats = function (cat) {
        var _this = this;
        console.log(typeof (cat.childcategories));
        this.populatePath(cat);
        if (typeof (cat.childcategories) != undefined) {
            this.categories = cat.childcategories;
            this.categoryType = 'Sub-category';
            return;
        }
        this.isLoading = true;
        this.categoryService.getSubCategory(cat._id)
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.categoryType = 'Sub-category';
            if (res.success) {
                _this.categories = res.category.childcategories;
            }
            else {
                _this.toastr.error(res.msg, 'Error');
            }
        }, function (error) {
            _this.isLoading = false;
        });
    };
    AdminComponent.prototype.removeCategory = function (ct, index) {
        var _this = this;
        if (ct) {
            var categoryname = ct.categoryname;
            var id_1 = ct._id;
            this.isLoading = true;
            this.categoryService.removeCategory(id_1, true)
                .subscribe(function (data) {
                _this.isLoading = false;
                if (data.success) {
                    _this.categories.splice(index, 1);
                    console.log('Deleted Successfully');
                }
                else {
                    if (data.sessions.length) {
                        _this.showConfirm('Confirm Delete', data.msg).subscribe(function (res) {
                            if (res) {
                                _this.categoryService.removeCategory(id_1, false, data.catIds, data.sessions)
                                    .subscribe(function (res) {
                                    if (res.success) {
                                        _this.categories.splice(index, 1);
                                    }
                                    else {
                                        _this.toastr.error(res.msg, 'Error');
                                    }
                                });
                            }
                        });
                    }
                    else {
                        _this.toastr.error(data.msg, 'Error');
                    }
                }
            }, function (error) {
                _this.isLoading = false;
            });
        }
    };
    AdminComponent.prototype.startEdit = function (cat) {
        this.editing[cat._id] = true;
        this.newCatName[cat._id] = cat.categoryname;
    };
    AdminComponent.prototype.renameCategory = function (catId, index) {
        var _this = this;
        var category = { newcategoryname: this.newCatName[catId] };
        this.isLoading = true;
        this.categoryService.updateCategory(category, catId)
            .subscribe(function (data) {
            _this.isLoading = false;
            if (data.success) {
                _this.categories[index].categoryname = _this.newCatName[catId];
                delete _this.newCatName[catId];
                console.log(_this.newCatName);
                _this.editing[catId] = false;
                console.log('Updated Successfully');
            }
            else {
                _this.toastr.error(data.msg, 'Error');
            }
        }, function (error) {
            _this.isLoading = false;
        });
    };
    AdminComponent.prototype.populatePath = function (ct) {
        var selectedIndex = this.pathCategories.indexOf(ct);
        if (selectedIndex != -1) {
            this.selectedCategory = this.pathCategories[selectedIndex];
            this.pathCategories.splice(selectedIndex + 1, this.pathCategories.length - selectedIndex);
        }
        else {
            this.selectedCategory = ct;
            this.pathCategories.push(ct);
        }
        console.log(this.pathCategories);
    };
    AdminComponent.prototype.populateRootCategories = function () {
        this.categories = this.rootCategories;
        this.pathCategories = [];
    };
    AdminComponent.prototype.selectSmtpType = function (type) {
        console.log('select smtp type', type);
        this.smtpType = type;
    };
    AdminComponent.prototype.storeMailingCredentials = function () {
        var _this = this;
        var credentials;
        if (this.smtpType === 1) {
            credentials = {
                smtpUser: this.smtpUser,
                smtpPass: this.smtpPass,
                smtpMailer: this.smtpMailer,
                smtpService: this.smtpService
            };
        }
        else {
            credentials = {
                smtpUser: this.smtpUser,
                smtpPass: this.smtpPass,
                smtpMailer: this.smtpMailer,
                smtpHost: this.smtpHost,
                smtpPort: this.smtpPort
            };
        }
        this.categoryService.storeMailing(credentials).subscribe(function (res) {
            if (res.success) {
                _this.toastr.success('SMTP options saved!', 'Success');
            }
            else {
                _this.toastr.error(res.msg || 'There was an error', 'Error');
            }
        });
    };
    AdminComponent.prototype.changeAdminTab = function (e) {
        console.log(e);
    };
    AdminComponent.prototype.showConfirm = function (title, message) {
        var popup = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__confirm_popup_confirm_popup_component__["a" /* ConfirmPopupComponent */], {
            title: title,
            message: message
        });
        return popup;
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\n<flash-messages></flash-messages>\n<router-outlet> </router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_http_interceptor__ = __webpack_require__("../../../../../src/app/shared/http-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_ionCaptcha_directive__ = __webpack_require__("../../../../../src/app/shared/ionCaptcha.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__slideshow_slideshow_component__ = __webpack_require__("../../../../../src/app/slideshow/slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__image_image_component__ = __webpack_require__("../../../../../src/app/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_image_service__ = __webpack_require__("../../../../../src/app/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_category_service__ = __webpack_require__("../../../../../src/app/shared/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_login_guard__ = __webpack_require__("../../../../../src/app/shared/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_admin_guard__ = __webpack_require__("../../../../../src/app/shared/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__popup_popup_component__ = __webpack_require__("../../../../../src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__session_qr_session_qr_component__ = __webpack_require__("../../../../../src/app/session-qr/session-qr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__qr_login_qr_login_component__ = __webpack_require__("../../../../../src/app/qr-login/qr-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__confirm_popup_confirm_popup_component__ = __webpack_require__("../../../../../src/app/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__validator_username__ = __webpack_require__("../../../../../src/app/validator.username.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var ioConfig = { url: __WEBPACK_IMPORTED_MODULE_39__environments_environment__["a" /* environment */].socketUrl, options: {} };
// const loadingConfig = {}
var ROUTES = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_30__shared_login_guard__["a" /* LoginGuard */]]
    },
    {
        path: 'login/:token',
        component: __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'qr-login',
        component: __WEBPACK_IMPORTED_MODULE_35__qr_login_qr_login_component__["a" /* QrLoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_32__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'forgot_password',
        component: __WEBPACK_IMPORTED_MODULE_37__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: 'reset_password/:token',
        component: __WEBPACK_IMPORTED_MODULE_36__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
    },
    {
        path: 'images',
        component: __WEBPACK_IMPORTED_MODULE_24__image_image_component__["a" /* ImageComponent */]
    },
    {
        path: 'gallery',
        component: __WEBPACK_IMPORTED_MODULE_22__gallery_gallery_component__["a" /* GalleryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'slideshow/:id',
        component: __WEBPACK_IMPORTED_MODULE_20__slideshow_slideshow_component__["a" /* SlideshowComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'session-qr',
        component: __WEBPACK_IMPORTED_MODULE_34__session_qr_session_qr_component__["a" /* SessionQrComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_28__upload_upload_component__["a" /* UploadComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'edit-session/:id',
        component: __WEBPACK_IMPORTED_MODULE_28__upload_upload_component__["a" /* UploadComponent */],
        canActive: [__WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_31__shared_admin_guard__["a" /* AdminGuard */]]
    }, {
        path: 'admin-login',
        component: __WEBPACK_IMPORTED_MODULE_40__admin_login_admin_login_component__["a" /* AdminLoginComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__slideshow_slideshow_component__["a" /* SlideshowComponent */],
                __WEBPACK_IMPORTED_MODULE_24__image_image_component__["a" /* ImageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_32__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_33__popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_ionCaptcha_directive__["a" /* IonCaptchaDirective */],
                __WEBPACK_IMPORTED_MODULE_34__session_qr_session_qr_component__["a" /* SessionQrComponent */],
                __WEBPACK_IMPORTED_MODULE_35__qr_login_qr_login_component__["a" /* QrLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_36__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_37__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_38__confirm_popup_confirm_popup_component__["a" /* ConfirmPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_40__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_9_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_11_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(ROUTES),
                __WEBPACK_IMPORTED_MODULE_10_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    preventDuplicates: true
                }),
                __WEBPACK_IMPORTED_MODULE_15_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body }),
                __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__["SocketIoModule"].forRoot(ioConfig),
                __WEBPACK_IMPORTED_MODULE_41_ngx_loading__["a" /* LoadingModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_33__popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_38__confirm_popup_confirm_popup_component__["a" /* ConfirmPopupComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__shared_image_service__["a" /* ImageService */],
                __WEBPACK_IMPORTED_MODULE_27__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_29__shared_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_30__shared_login_guard__["a" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_31__shared_admin_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_5__shared_http_interceptor__["a" /* HttpInterceptor */],
                __WEBPACK_IMPORTED_MODULE_42__validator_username__["a" /* UsernameValidator */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/confirm-popup/confirm-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n     <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n        <button type=\"button\" class=\"close\" (click)=\"close()\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n     </div>\n     <div class=\"modal-body\">\n       <p>{{message || 'Are you sure you want to proceed?'}}</p>\n     </div>\n     <div class=\"modal-footer\">\n       <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Confirm</button>\n       <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n    </div>\n  </div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/confirm-popup/confirm-popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirm-popup/confirm-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
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


var ConfirmPopupComponent = (function (_super) {
    __extends(ConfirmPopupComponent, _super);
    function ConfirmPopupComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ConfirmPopupComponent.prototype.confirm = function () {
        this.result = true;
        this.close();
    };
    ConfirmPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-popup',
            template: __webpack_require__("../../../../../src/app/confirm-popup/confirm-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/confirm-popup/confirm-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]])
    ], ConfirmPopupComponent);
    return ConfirmPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ngx-loading [show]=\"isLoading\"></ngx-loading>\n    <form class=\"form-signin\" (ngSubmit)=\"onForgot()\" [formGroup]=\"forgotPassForm\">\n        <h2 class=\"form-signin-heading\">Forgot Password</h2>\n        <label for=\"user\" class=\"sr-only\">Username/Email</label>\n        <input type=\"email\" id=\"user\" formControlName=\"user\" class=\"form-control\" placeholder=\"Username/Email\" required autofocus>\n        <div class=\"captcha-div\" ionCaptcha [key]=\"captchaKey\" formControlName=\"captcha\"></div>\n        <button class=\"btn btn-lg btn-warning btn-block\" [disabled]=\"forgotPassForm.invalid\" type=\"submit\">Send me Reset Link</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.captcha-div {\n  margin-bottom: 20px;\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(auth, toastr) {
        this.auth = auth;
        this.toastr = toastr;
        this.forgotPassForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            user: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            captcha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.captchaKey = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].captchaKey;
        this.isLoading = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    ForgotPasswordComponent.prototype.onForgot = function () {
        var _this = this;
        var user = this.forgotPassForm.value.user;
        console.log(user);
        this.isLoading = true;
        this.auth.sendResetLink(user).subscribe(function (res) {
            _this.isLoading = false;
            if (res.success) {
                _this.toastr.success(res.msg, 'Success');
            }
            else {
                _this.toastr.error(res.msg, 'Error');
            }
        }, function (error) {
            _this.isLoading = false;
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n    <div class=\"album text-muted\">\n        <div class=\"container\">\n            <ngx-loading [show]=\"isLoading\"></ngx-loading>\n            <div class=\"row\">\n                <div class=\"card search-form-card\">\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Search categories</h4>\n                        <form class=\"form-inline\" novalidate>\n                            <select class=\"custom-select mb-3 form-control\" [ngModel]=\"catone\" (ngModelChange)=\"catSelect(1, $event)\" name=\"catone_select\">\n                                <option [value]=\"cat._id\" *ngFor=\"let cat of catones\">{{cat.categoryname}}</option>\n                            </select>\n                            <select class=\"custom-select mb-3 form-control\" [disabled]=\"!cattwos?.length\" [ngModel]=\"cattwo\" (ngModelChange)=\"catSelect(2, $event)\" name=\"cattwo_select\">\n                                <option [value]=\"cat._id\" *ngFor=\"let cat of cattwos\">{{cat.categoryname}}</option>\n                            </select>\n                            <select class=\"custom-select mb-3 form-control\" [disabled]=\"!catthrees?.length\" [ngModel]=\"catthree\" (ngModelChange)=\"catSelect(3, $event)\" name=\"catthree_select\">\n                                <option [value]=\"cat._id\" *ngFor=\"let cat of catthrees\">{{cat.categoryname}}</option>\n                            </select>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-start mx-0\">\n                <div class=\"col col-md-4 col-xs-12\" *ngFor=\"let session of totalSessions; let i=index\">\n                    <div class=\"card\">\n                        <div class=\"qr-div\">\n                            <qr-code class=\"qr-code\" [value]=\"JSON.stringify(qrCodes[i])\" [size]=\"160\"></qr-code>\n                        </div>\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title text-center\">{{session.sessionname}}</h5>\n                            <div class=\"row justify-content-space-evenly\">\n                                <div class=\"col text-center\">\n                                    <button class=\"btn btn-primary\" (click)=\"startSlideShow(session)\">\n                                        <i class=\"icon ion-play\"></i>\n                                    </button>\n                                </div>\n                                <div class=\"col text-center\">\n                                    <a class=\"btn btn-outline-danger\" [routerLink]=\"['/edit-session', session._id]\">\n                                        <i class=\"icon ion-edit\"></i>\n                                    </a>        \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-muted\">\n                            Created: {{session.createdAt | date}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col col-xs-12\" *ngIf=\"!totalSessions.length\">\n                    <div class=\"card\">\n                        <div class=\"card-title text-center\">\n                            No sessions found\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".album {\n  padding-top: 3rem;\n  padding-bottom: 3rem; }\n\n.card {\n  padding-top: .75rem;\n  margin-bottom: 2rem;\n  border: 0; }\n\n.form-inline {\n  text-align: center; }\n  .form-inline select {\n    min-width: 25%;\n    margin: 0 auto; }\n\n.card > img {\n  margin-bottom: .75rem; }\n\n.qr-div qr-code {\n  display: block;\n  text-align: center; }\n\n.card.search-form-card {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_image_service__ = __webpack_require__("../../../../../src/app/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_category_service__ = __webpack_require__("../../../../../src/app/shared/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_popup_confirm_popup_component__ = __webpack_require__("../../../../../src/app/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
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
    function GalleryComponent(imageService, router, categoryService, auth, dialogService, toastr) {
        var _this = this;
        this.imageService = imageService;
        this.router = router;
        this.categoryService = categoryService;
        this.auth = auth;
        this.dialogService = dialogService;
        this.toastr = toastr;
        this.isLoading = false;
        this.title = 'Recent Media Files';
        this.currentUser = this.auth.getCurrentUser().username;
        this.catones = [];
        this.cattwos = [];
        this.catthrees = [];
        this.JSON = JSON;
        //qr codes
        this.qrCodes = [];
        this.qrSecret = this.uuidv4();
        this.isLoading = true;
        this.categoryService.getRootCategory()
            .subscribe(function (data) {
            _this.isLoading = false;
            if (data.success) {
                _this.catones = data.categories;
            }
            else {
                _this.toastr.error(data.msg, 'Error');
            }
        }, function (error) { return _this.isLoading = false; });
        this.populateSessions(null);
    }
    GalleryComponent.prototype.populateSubCategoriesII = function (id) {
        var _this = this;
        this.cattwos = [];
        this.catthrees = [];
        this.cattwo = null;
        this.catthree = null;
        this.totalSessions = [];
        if (id) {
            this.isLoading = true;
            this.categoryService.getSubCategory(id)
                .subscribe(function (data) {
                _this.isLoading = false;
                if (data.success) {
                    _this.cattwos = data.category ? data.category.childcategories : [];
                }
                else {
                    _this.toastr.error(data.msg, 'Error');
                }
            }, function (error) { return _this.isLoading = false; });
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
        this.qrCodes = [];
        if (categoryId) {
            this.isLoading = true;
            this.imageService.getSessions(categoryId, isParent)
                .subscribe(function (data) {
                _this.isLoading = false;
                if (data.success) {
                    _this.totalSessions = data.data;
                    _this.totalSessions.forEach(function (value, index) {
                        _this.qrCodes.push({ userId: value.userId, sessionId: value._id, sessionname: value.sessionname, secret: _this.qrSecret });
                    });
                }
            }, function (error) { return _this.isLoading = false; });
        }
        else {
            this.imageService.getAllSessions().subscribe(function (res) {
                if (res.success) {
                    _this.totalSessions = res.data;
                    _this.totalSessions.forEach(function (value, index) {
                        _this.qrCodes.push({ userId: value.userId, sessionId: value._id, sessionname: value.sessionname, secret: _this.qrSecret });
                    });
                }
            });
        }
    };
    GalleryComponent.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    GalleryComponent.prototype.removeSession = function (session, index) {
        var _this = this;
        this.showConfirm('Confirm Delete', 'Are you sure you want to remove session: ' + session.sessionname).subscribe(function (res) {
            if (res) {
                _this.imageService.removeSession(session).subscribe(function (res) {
                    if (res.success) {
                        _this.totalSessions.splice(index, 1);
                        _this.toastr.success(res.msg, 'Success');
                    }
                    else {
                        _this.toastr.error(res.msg, 'Error');
                    }
                });
            }
        });
    };
    GalleryComponent.prototype.removeImage = function (image, index, images) {
        var id = image._id;
        this.imageService.removeImage(id)
            .subscribe(function (data) {
            if (data.success) {
                images.splice(index, 1);
            }
        });
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
        var _this = this;
        var items = images;
        for (var index = 0; index < items.length; index++) {
            var element = items[index];
            this.imageService.updateImage(element._id, index)
                .subscribe(function (data) {
                if (data.success) {
                    console.log('Suffeling Successful');
                    _this.toastr.success('Items reordered', 'Success');
                }
                else {
                    _this.toastr.error(data.msg, 'Error');
                }
            });
        }
    };
    GalleryComponent.prototype.catSelect = function (which, e) {
        if (which == 1) {
            this.catone = e;
            this.populateSubCategoriesII(e);
        }
        else if (which == 2) {
            this.cattwo = e;
            this.populateSubCategoriesIII(e);
        }
        else if (which == 3) {
            this.catthree = e;
            this.populateSessions(e);
        }
    };
    GalleryComponent.prototype.startSlideShow = function (session) {
        this.router.navigate(['/slideshow', session._id]);
    };
    GalleryComponent.prototype.chooseCatOne = function (catone) {
        this.catone = catone;
        this.populateSubCategoriesII(catone);
    };
    /*
    startSlideShow(session) {
      this.api.fsAPI.toggleFullscreen();
  
      if (session.images) {
        this.visibleImages = session.images;
        this.slideshow();
      } else {
        this.imageService.getImages(session.sessionname)
          .subscribe(images => {
            if (images.length) {
              this.visibleImages = images;
              this.slideshow();
            }
          });
      }
    }*/
    GalleryComponent.prototype.showConfirm = function (title, message) {
        var popup = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__confirm_popup_confirm_popup_component__["a" /* ConfirmPopupComponent */], {
            title: title,
            message: message
        });
        return popup;
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
        // this.checkInterval = setInterval(() => {
        //   this.imageService.checkQr().subscribe( res => {
        //     if(res.success) {
        //       this.startSlideShow(res.session);
        //     }
        //   })
        // }, 3000);
        this.checkSub = this.imageService.qrScanCheck().subscribe(function (data) {
            console.log('qr scan check: ', data);
            if (data.sessionId && data.secret == _this.qrSecret) {
                var scannedSession = _this.totalSessions.find(function (session) { return session._id == data.sessionId; });
                _this.imageService.qrSecret = _this.qrSecret;
                console.log('starting slideshow');
                _this.startSlideShow(scannedSession);
            }
        });
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        // this.imageService.removeAllTokens().subscribe( res => {
        //   // callbacks
        // })
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
        if (this.checkSub) {
            this.checkSub.unsubscribe();
        }
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar_main\" aria-controls=\"navbar_main\" aria-expanded=\"false\" [attr.aria-expanded]=\"!isCollapsed\" aria-label=\"Toggle navigation\" (click)=\"isCollapsed=!isCollapsed\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbar_main\" [ngbCollapse]=\"isCollapsed\">\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"auth.loggedIn() && !auth.adminLogIn()\">\n                <li class=\"nav-item\" *ngIf=\"!auth.scannedLogIn()\">\n                    <a class=\"nav-link\" routerLink=\"/gallery\">Gallery <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!auth.scannedLogIn()\">\n                    <a class=\"nav-link\" routerLink=\"/create\">Create</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/session-qr\">Session QRs</a>\n                </li>\n            </ul>\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"!auth.loggedIn()\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n                </li>\\\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/qr-login\">QR Login</a></li>\n            </ul>\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"auth.loggedIn() && auth.adminLogIn()\">\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/admin\">Admin</a></li>\n            </ul>\n            <ul class=\"navbar-nav ml-auto\" *ngIf=\"auth.loggedIn()\">\n                <li class=\"nav-item\">\n                    <button class=\"btn btn-link nav-link\" (click)=\"onLogout()\">Logout</button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background-color: #424242;\n  font-family: 'Lato', sans-serif; }\n\n.logo {\n  color: #fff;\n  font-family: 'Lato', sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
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
    function HeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'Angular Gallery App';
        this.isCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.auth.logout();
        this.router.navigate(['login']);
        return false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3> {{ title }} </h3>\n  <img src=\"{{imageUrl}}\" class=\"tn\" width=\"800\" height=\"600\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/image/image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_image_service__ = __webpack_require__("../../../../../src/app/shared/image.service.ts");
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
    ImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image',
            template: __webpack_require__("../../../../../src/app/image/image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image/image.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_image_service__["a" /* ImageService */]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form class=\"form-signin\" (ngSubmit)=\"onLogin()\" [formGroup]=\"logIn\">\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n    <label for=\"username\" class=\"sr-only\">Username</label>\n    <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\" [ngClass]=\"checkValid(username)\">\n    <div class=\"invalid-feedback\" *ngIf=\"username.errors?.required && (username.touched || username.dirty)\">Username is required</div>\n    <label for=\"password\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" [ngClass]=\"checkValid(password)\" >\n    <div class=\"invalid-feedback\" *ngIf=\"password.errors?.required && (password.touched || password.dirty)\">Password is required</div>\n    <a class=\"btn btn-link\" routerLink=\"/forgot_password\">Forgot Password?</a>\n    <div class=\"captcha-div\" ionCaptcha [key]=\"captchaKey\" formControlName=\"captcha\"></div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!logIn.valid && !isLoading\">Sign in</button>\n    <button class=\"btn btn-outline-primary btn-block\" routerLink=\"/register\">Create an account</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"text\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.captcha-div {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function LoginComponent(authService, route, router, auth, toastr) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
        this.isLoading = false;
        this.captchaKey = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].captchaKey;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.captcha = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null);
        this.logIn = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            username: this.username,
            password: this.password,
            captcha: this.captcha
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['token']) {
                _this.auth.confirmEmail(params['token']).subscribe(function (res) {
                    if (res.success) {
                        _this.toastr.success(res.msg, 'Success');
                    }
                    else {
                        _this.toastr.error(res.msg, 'Error');
                    }
                });
            }
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (!this.logIn.valid) {
            // show errors
            Object.keys(this.logIn.controls).forEach(function (field) {
                var control = _this.logIn.get(field);
                console.log(control);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
        var credentials = {
            username: this.username.value,
            password: this.password.value,
            isAdmin: false
        };
        this.isLoading = true;
        this.authService.authenticateUser(credentials)
            .subscribe(function (data) {
            _this.isLoading = false;
            if (data.success) {
                console.log(data);
                _this.authService.storeUserData(data.user, data.token);
                _this.router.navigate(['gallery']);
            }
            else {
                console.log(data);
                // show error toast
                _this.toastr.error(data.msg, 'Error');
            }
        }, function (error) {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.checkValid = function (control) {
        if (control.errors && (control.touched || control.dirty)) {
            return 'is-invalid';
        }
        else if (!control.errors && (control.touched || control.dirty)) {
            return 'is-valid';
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popup/popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
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
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popup',
            styles: [__webpack_require__("../../../../../src/app/popup/popup.component.scss")],
            template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                      <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n                      <button type=\"button\" class=\"close\" (click)=\"close()\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>                     \n                   </div>\n                   <div class=\"modal-body\">\n                     <p>{{message || 'Enter image delay and title for'+filename}}</p>\n                     <input class=\"form-control\" placeholder=\"Delay (in seconds)\" type=\"number\" [(ngModel)]=\"delay\"/>\n                     <br>\n                     <input class=\"form-control\" placeholder=\"Title\" type=\"text\" [(ngModel)]=\"imgTitle\"/>\n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n                   </div>\n                 </div>\n              </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]])
    ], PopupComponent);
    return PopupComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/qr-login/qr-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <main role=\"main\">\n        <div class=\"jumbotron mt-3\">\n            <h1 class=\"display-4\">Login with App</h1>\n            <p class=\"lead\">Scan QR code below to login using the account logged in on the app</p>\n            <qr-code class=\"qr-code\" [value]=\"loginToken?._id\" [size]=\"180\"></qr-code>\n        </div>\n    </main>\n</div>"

/***/ }),

/***/ "../../../../../src/app/qr-login/qr-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Everything but the jumbotron gets side spacing for mobile first views */\n.marketing {\n  padding-right: 1rem;\n  padding-left: 1rem; }\n\n/* Customize container */\n@media (min-width: 48em) {\n  .container {\n    max-width: 46rem; } }\n\n.container-narrow > hr {\n  margin: 2rem 0; }\n\n/* Main marketing message and sign up button */\n.jumbotron {\n  text-align: center;\n  border-bottom: .05rem solid #e5e5e5; }\n\n.jumbotron .btn {\n  padding: .75rem 1.5rem;\n  font-size: 1.5rem; }\n\n/* Supporting marketing content */\n.marketing {\n  margin: 3rem 0; }\n\n.marketing p + h4 {\n  margin-top: 1.5rem; }\n\nqr-code {\n  display: block;\n  margin-bottom: 2rem; }\n\n/* Responsive: Portrait tablets and up */\n@media screen and (min-width: 48em) {\n  /* Remove the padding we set earlier */\n  .marketing {\n    padding-right: 0;\n    padding-left: 0; }\n  /* Remove the bottom border on the jumbotron for visual effect */\n  .jumbotron {\n    border-bottom: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qr-login/qr-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
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
    function QrLoginComponent(auth, toastr, router) {
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.JSON = JSON;
    }
    QrLoginComponent.prototype.ngOnInit = function () {
        this.generateQr();
    };
    QrLoginComponent.prototype.ngOnDestroy = function () {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
        this.auth.removeAllTokens(this.timestamp).subscribe(function (res) {
            //
        });
        if (this.checkSub) {
            this.checkSub.unsubscribe();
        }
    };
    QrLoginComponent.prototype.generateQr = function () {
        var _this = this;
        this.timestamp = Date.now().toString();
        this.auth.generateQr(this.timestamp).subscribe(function (res) {
            if (res.success) {
                _this.loginToken = res.token;
                _this.startCheck();
            }
        });
    };
    QrLoginComponent.prototype.startCheck = function () {
        var _this = this;
        this.checkSub = this.auth.checkQr(this.loginToken._id).subscribe(function (data) {
            console.log('user-login socket data: ', data);
            if (data.authToken && data.userId) {
                _this.auth.getUserById(data.userId).subscribe(function (res) {
                    if (res.success) {
                        _this.auth.storeUserData(res.user, data.authToken, true);
                        _this.toastr.success('Login successful!', 'Success');
                        _this.router.navigate(['session-qr']);
                    }
                    else {
                        _this.toastr.error(res.msg, 'Error');
                    }
                });
            }
        });
    };
    QrLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qr-login',
            template: __webpack_require__("../../../../../src/app/qr-login/qr-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/qr-login/qr-login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], QrLoginComponent);
    return QrLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"form-signin\" (ngSubmit)=\"onRegister()\" [formGroup]=\"registerForm\">\n        <h2 class=\"form-signin-heading\">Create an account</h2>\n        \n        <label for=\"name\" class=\"sr-only\">Name</label>\n        <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\" placeholder=\"Name\" required  [ngClass]=\"checkValid(name)\">\n        <div class=\"invalid-feedback\" *ngIf=\"name.errors?.required && (name.touched || name.dirty)\">\n            Name is required\n        </div>\n        \n        <label for=\"username\" class=\"sr-only\">Username</label>\n        <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\" required  [ngClass]=\"checkValid(username)\">\n        <div class=\"invalid-feedback\" *ngIf=\"username.errors?.required && (username.touched || username.dirty)\">Username is required</div>\n        <div class=\"invalid-feedback\" *ngIf=\"!username.errors?.required && username.errors?.usernameInUse && (username.touched || username.dirty)\">Username is not available</div>\n\n        <label for=\"email\" class=\"sr-only\" >Email</label>\n        <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" required  [ngClass]=\"checkValid(email)\">\n        <div class=\"invalid-feedback\" *ngIf=\"email.errors?.required && (email.touched || email.dirty)\">Email is required</div>\n        <div class=\"invalid-feedback\" *ngIf=\"!email.errors?.required && email.errors?.email && (email.touched || email.dirty)\">Provide a valid email address</div>\n        \n        <label for=\"password\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" required [ngClass]=\"checkValid(password)\">\n        <div class=\"invalid-feedback\" *ngIf=\"password.errors?.required && (password.touched || password.dirty)\">Password is required</div>\n        <div class=\"invalid-feedback\" *ngIf=\"password.errors?.pattern && !password.errors?.minLength && (password.touched || password.dirty)\">Must contain one lowercase, one uppercase, one numeral and a special character. Min length: 8 characters</div>\n        <div class=\"invalid-feedback\" *ngIf=\"password.errors?.minLength && (password.touched || password.dirty)\">Password must be at least 8 characters long</div>\n        \n        <input type=\"password\" class=\"form-control\" id=\"confirm_pass\" formControlName=\"confirmPass\" [ngClass]=\"checkValid(confirmPass)\" placeholder=\"Confirm password\">\n        <div class=\"invalid-feedback\" *ngIf=\"confirmPass.errors?.required && (confirmPass.touched || confirmPass.dirty)\">Please re enter your password</div>\n\n        <div class=\"invalid-feedback\" *ngIf=\"confirmPass.errors?.MatchPassword && (confirmPass.touched || confirmPass.dirty)\">\n            Passwords don't match\n        </div>\n\n        <div class=\"captcha-div\" ionCaptcha [key]=\"captchaKey\" formControlName=\"captcha\"></div>\n        \n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-login {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee; }\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input#confirm_pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.captcha-div {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator_username__ = __webpack_require__("../../../../../src/app/validator.username.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator_password__ = __webpack_require__("../../../../../src/app/validator.password.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function RegisterComponent(authService, router, toastr, usernameValidator, fb) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.usernameValidator = usernameValidator;
        this.fb = fb;
        this.captchaKey = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].captchaKey;
        var strongPassRegex = new RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$");
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, usernameValidator.checkUsername.bind(usernameValidator));
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(strongPassRegex), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(8)]));
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email]));
        this.confirmPass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.captcha = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null);
        this.registerForm = fb.group({
            username: this.username,
            email: this.email,
            password: this.password,
            name: this.name,
            confirmPass: this.confirmPass,
            captcha: this.captcha
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_6__validator_password__["a" /* PasswordValidation */].MatchPassword
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
                _this.toastr.success(data.msg, 'Success');
                _this.router.navigate(['login']);
            }
            else {
                _this.toastr.error(data.msg, 'Error');
            }
        });
    };
    RegisterComponent.prototype.checkValid = function (control) {
        if (control.errors && (control.touched || control.dirty)) {
            return 'is-invalid';
        }
        else if (!control.errors && (control.touched || control.dirty)) {
            return 'is-valid';
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__validator_username__["a" /* UsernameValidator */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"form-signin\" (ngSubmit)=\"onResetPass()\" [formGroup]=\"resetPassForm\">\n        <h2 class=\"form-signin-heading\">Reset Password</h2>\n        \n        <label for=\"password\" class=\"sr-only\">New Password</label>\n        <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"checkValid(password)\" placeholder=\"Password\" required>\n        <div class=\"invalid-feedback\" *ngIf=\"password.errors?.required && (password.touched || password.dirty)\">\n        \tPassword is required\n        </div>\n        <div class=\"invalid-feedback\" *ngIf=\"password.errors?.pattern && !password.errors?.minLength && (password.touched || password.dirty)\">Must contain one lowercase, one uppercase, one numeral and a special character. Min-length: 8 characters.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"password.errors?.minLength && (password.touched || password.dirty)\">Password must be at least 8 characters long</div>        \n\n        <label for=\"confirm_pass\" class=\"sr-only\">Re-type Password</label>\n        <input type=\"password\" id=\"confirm_pass\" formControlName=\"confirmPass\" class=\"form-control\" [ngClass]=\"checkValid(confirmPass)\" placeholder=\"Confirm password\" required>\n\n        <div class=\"invalid-feedback\" *ngIf=\"confirmPass.errors?.required && (confirmPass.touched || confirmPass.dirty)\">\n        \tPlease re-enter your password\n        </div>\n        <div class=\"invalid-feedback\" *ngIf=\"resetPassForm.controls.confirmPass.errors?.MatchPassword && (confirmPass.touched || confirmPass.dirty)\">\n        \tPasswords don't match\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!resetPassForm.valid\" type=\"submit\">Reset</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-login {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee; }\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"password\"]#password {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input[type=\"password\"]#confirm_pass {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.captcha-div {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator_password__ = __webpack_require__("../../../../../src/app/validator.password.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var strongPassRegex = new RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(auth, toastr, router, route, fb) {
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern(strongPassRegex), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].minLength(8)]));
        this.confirmPass = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required);
        this.resetPassForm = this.fb.group({
            password: this.password,
            confirmPass: this.confirmPass
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_5__validator_password__["a" /* PasswordValidation */].MatchPassword
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.resetToken = params['token'];
            _this.auth.verifyResetToken(_this.resetToken).subscribe(function (res) {
                if (res.success) {
                    // token is valid
                    _this.userId = res.userId;
                    _this.tokenIsValid = true;
                }
                else {
                    // token is invalid
                    _this.tokenIsValid = false;
                    _this.toastr.error(res.msg, 'Error');
                }
            });
        });
        this.auth.logout();
    };
    ResetPasswordComponent.prototype.onResetPass = function () {
        if (this.resetPassForm.valid) {
            this.resetPassword(this.password.value);
        }
        else {
            this.toastr.error('Invalid form!', 'Error');
        }
    };
    ResetPasswordComponent.prototype.resetPassword = function (newPass) {
        var _this = this;
        this.auth.resetPassword(this.userId, newPass, this.resetToken).subscribe(function (res) {
            if (res.success) {
                _this.toastr.success(res.msg, 'Success');
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error(res.msg, 'Error');
            }
        });
    };
    ResetPasswordComponent.prototype.checkValid = function (control) {
        if (control.errors && (control.touched || control.dirty)) {
            return 'is-invalid';
        }
        else if (!control.errors && (control.touched || control.dirty)) {
            return 'is-valid';
        }
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/session-qr/session-qr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"qr-container\">\n    <ngx-loading [show]=\"isLoading\"></ngx-loading>\n    <div class=\"row mt-2 mx-0 justify-content-center\">\n        <div class=\"col-md-4 col-xs-12\" *ngFor=\"let session of sessions; let i=index\">\n            <div class=\"card\">\n                <div class=\"qr-div\">\n                    <qr-code class=\"qr-code\" [value]=\"JSON.stringify(qrCodes[i])\" [size]=\"160\"></qr-code>\n                </div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">{{session.sessionname}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/session-qr/session-qr.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".qr-container {\n  padding: 3rem 0; }\n\n.card {\n  padding: .75rem;\n  margin: 1rem;\n  border: 0; }\n\n.card > img {\n  margin-bottom: .75rem; }\n\n.qr-div qr-code {\n  display: block;\n  text-align: center; }\n\n.card.search-form-card {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session-qr/session-qr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionQrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_image_service__ = __webpack_require__("../../../../../src/app/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
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
    function SessionQrComponent(imageService, toastr, router) {
        this.imageService = imageService;
        this.toastr = toastr;
        this.router = router;
        this.sessions = [];
        this.qrCodes = [];
        this.JSON = JSON;
        this.isLoading = false;
        this.qrSecret = this.uuidv4();
    }
    SessionQrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populateSessions();
        this.checkSub = this.imageService.qrScanCheck().subscribe(function (data) {
            console.log('qr scan check: ', data);
            if (data.sessionId && data.secret == _this.qrSecret) {
                var scannedSession = _this.sessions.find(function (session) { return session._id == data.sessionId; });
                _this.imageService.qrSecret = _this.qrSecret;
                console.log('starting slideshow');
                _this.startSlideShow(scannedSession);
            }
        });
        this.imageService.qrSecret = this.qrSecret;
    };
    SessionQrComponent.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    SessionQrComponent.prototype.ngOnDestroy = function () {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
        if (this.checkSub) {
            this.checkSub.unsubscribe();
        }
    };
    SessionQrComponent.prototype.populateSessions = function () {
        var _this = this;
        this.isLoading = true;
        this.imageService.getAllSessions().subscribe(function (res) {
            _this.isLoading = false;
            if (res.success) {
                _this.sessions = res.data;
                _this.sessions.forEach(function (value, index) {
                    _this.qrCodes.push({ userId: value.userId, sessionId: value._id, sessionname: value.sessionname, secret: _this.qrSecret });
                });
            }
            else {
                _this.toastr.error('There was an error', 'Error');
            }
        }, function (error) {
            _this.isLoading = false;
        });
    };
    SessionQrComponent.prototype.startSlideShow = function (session) {
        this.router.navigate(['/slideshow', session._id]);
    };
    SessionQrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'session-qr',
            template: __webpack_require__("../../../../../src/app/session-qr/session-qr.component.html"),
            styles: [__webpack_require__("../../../../../src/app/session-qr/session-qr.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SessionQrComponent);
    return SessionQrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.auth.adminLogIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
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
    function AuthGuard(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.toastr.error('You are not logged in. Please login first.', 'Error');
            this.router.navigate(['login']);
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_interceptor__ = __webpack_require__("../../../../../src/app/shared/http-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function AuthService(http, socket) {
        this.http = http;
        this.socket = socket;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authToken = localStorage.getItem('id_token') || null;
        this.currentUser = JSON.parse(localStorage.getItem('user')) || null;
        this.isScanned = this.currentUser ? this.currentUser.isScanned : null;
        this.authUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl + '/users/';
        this.headers.append('Content-type', 'application/json');
        this.headers.append('Authorization', this.getAuthToken());
    }
    AuthService.prototype.authenticateUser = function (creds) {
        return this.http.post(this.authUrl + 'authenticate', creds, { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    AuthService.prototype.registerUser = function (credentials) {
        return this.http.post(this.authUrl + 'register', credentials, { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    AuthService.prototype.validateUsername = function (username) {
        return this.http.post(this.authUrl + 'check_username', { username: username })
            .map(function (res) { return res.json(); });
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
    AuthService.prototype.getUserById = function (userId) {
        return this.http.post(this.authUrl + 'getUserById', { userId: userId }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.scannedLogIn = function () {
        return this.isScanned;
    };
    AuthService.prototype.getUserId = function () {
        return JSON.parse(localStorage.getItem('user')).id;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
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
    // checkQr(tokenId) {
    //   return this.http.post(this.authUrl + 'check-qr', {tokenId: tokenId})
    //       .map(
    //         res => res.json(),
    //         err => {
    //           console.log(err);
    //         }
    //       );
    // }
    AuthService.prototype.checkQr = function (tokenId) {
        return this.socket.fromEvent('user-login');
    };
    AuthService.prototype.removeAllTokens = function (timestamp) {
        return this.http.post(this.authUrl + 'remove-qr', { timestamp: timestamp })
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.verifyResetToken = function (token) {
        return this.http.post(this.authUrl + 'verify-reset-token', { token: token })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.sendResetLink = function (user) {
        return this.http.post(this.authUrl + 'forgot_password', { user: user }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetPassword = function (userId, newPass, token) {
        return this.http.post(this.authUrl + 'reset_password', { newPass: newPass, token: token, userId: userId }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.confirmEmail = function (token) {
        return this.http.post(this.authUrl + 'confirm_email', { token: token }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.currentUser = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__http_interceptor__["a" /* HttpInterceptor */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_interceptor__ = __webpack_require__("../../../../../src/app/shared/http-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/';
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
    CategoryService.prototype.addSubCategory = function (parentId, categoryname) {
        var data = { categoryname: categoryname, parentId: parentId };
        return this.http.post(this.baseUrl + 'category/addsubcategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.addRootCategory = function (categoryname) {
        var data = { categoryname: categoryname };
        return this.http.post(this.baseUrl + 'category/addrootcategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.removeCategory = function (catId, warn, catIds, sessions) {
        var data = { catId: catId, warn: warn, catIds: catIds, sessions: sessions };
        return this.http.post(this.baseUrl + 'category/deletecategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.updateCategory = function (category, id) {
        var data = { id: id, category: category };
        return this.http.post(this.baseUrl + 'category/updatecategory', JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService.prototype.getSessionCats = function (catId) {
        return this.http.post(this.baseUrl + 'category/getSessionCats', { catId: catId }, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getSmtp = function () {
        return this.http.get(this.baseUrl + 'admin/getmailer', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.storeMailing = function (credentials) {
        return this.http.post(this.baseUrl + 'admin/storemailer', credentials, { headers: this.headers })
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_interceptor__["a" /* HttpInterceptor */]])
    ], CategoryService);
    return CategoryService;
}());

// const IMAGES = [
//   { "id": 1, "caption": "Grassland Deer", "url": "assets/img/deer.jpg" },
//   { "id": 2, "caption": "A lonely Road", "url": "assets/img/road.jpg" },
//   { "id": 3, "caption": "Mountain Top", "url": "assets/img/mountain.jpg" },
// ];


/***/ }),

/***/ "../../../../../src/app/shared/http-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
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



// operators


var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, options, http, toastr) {
        var _this = _super.call(this, backend, options) || this;
        _this.http = http;
        _this.toastr = toastr;
        _this.handleError = function (error) {
            // Do messaging and error handling here
            if (error.status == 0) {
                _this.toastr.error('Cannot connect to server! Please check your connection.', 'Connection Error');
            }
            else if (error.status == 401) {
                _this.toastr.error('You are not authorized. Please check that you are logged in and have proper rights.', 'Unauthorized');
            }
            else {
                _this.toastr.error('Server Error', 'Error');
            }
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error);
        };
        return _this;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options)
            .catch(this.handleError);
    };
    HttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["XHRBackend"],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], HttpInterceptor);
    return HttpInterceptor;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]));



/***/ }),

/***/ "../../../../../src/app/shared/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_interceptor__ = __webpack_require__("../../../../../src/app/shared/http-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function ImageService(http, auth, socket) {
        this.http = http;
        this.auth = auth;
        this.socket = socket;
        this.visibleImages = [];
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // baseUrl: string = 'http://localhost:8080/';
        // baseUrl: string = 'https://ionic-node-auth.herokuapp.com/';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl + '/';
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
    ImageService.prototype.updateSession = function (session) {
        return this.http.post(this.baseUrl + 'session/updateSession', session, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.createSessions = function (sessionname, categoryId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var data = {
            sessionname: sessionname,
            categoryId: categoryId
        };
        return this.http.post(this.createScessionUrl, data, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.getSessionById = function (sessionId) {
        return this.http.post(this.baseUrl + 'session/getSession', { sessionId: sessionId }, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ImageService.prototype.getSessions = function (categoryId, isParent) {
        // return this.visibleImages = IMAGES.slice(0);
        return this.http.post(this.getScessionUrl, { categoryId: categoryId, isParent: (isParent ? isParent : false) }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.getAllSessions = function () {
        return this.http.get(this.baseUrl + 'session/listSessions', { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ImageService.prototype.removeSession = function (session) {
        return this.http.post(this.baseUrl + 'session/remove', { session: session }, { headers: this.headers }).map(function (res) { return res.json(); });
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
    ImageService.prototype.qrScanCheck = function () {
        return this.socket.fromEvent('session-scanned');
    };
    ImageService.prototype.listenSessionStop = function () {
        return this.socket.fromEvent('session-stopped');
    };
    ImageService.prototype.updateDelay = function (imageId, delay) {
        return this.http.post(this.updateDelayUrl, { id: imageId, delay: delay }, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ImageService.prototype.updateTitle = function (imageId, title) {
        return this.http.post(this.updateTitleUrl, { id: imageId, title: title }, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_interceptor__["a" /* HttpInterceptor */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/ionCaptcha.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonCaptchaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_interceptor__ = __webpack_require__("../../../../../src/app/shared/http-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function ReCaptchaAsyncValidator(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + '/';
    }
    ReCaptchaAsyncValidator.prototype.validateToken = function (token) {
        var _this = this;
        return function (_) {
            return _this.http.get(_this.baseUrl + 'validate_captcha', { params: { token: token } }).map(function (res) { return res.json(); }).map(function (res) {
                if (!res.success) {
                    _this.toastr.error('Captcha not validated. Please try again.', 'Captcha Invalid');
                    return { tokenInvalid: true };
                }
                return null;
            });
        };
    };
    ReCaptchaAsyncValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_interceptor__["a" /* HttpInterceptor */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], ReCaptchaAsyncValidator);
    return ReCaptchaAsyncValidator;
}());
var IonCaptchaDirective = (function () {
    function IonCaptchaDirective(element, ngZone, injector, reCaptchaAsyncValidator) {
        this.element = element;
        this.ngZone = ngZone;
        this.injector = injector;
        this.reCaptchaAsyncValidator = reCaptchaAsyncValidator;
        this.config = {};
        this.captchaResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.captchaExpired = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    IonCaptchaDirective_1 = IonCaptchaDirective;
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
        this.control = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NgControl */]).control;
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
        this.control.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
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
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return IonCaptchaDirective_1; }),
                    multi: true
                },
                ReCaptchaAsyncValidator
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], ReCaptchaAsyncValidator])
    ], IonCaptchaDirective);
    return IonCaptchaDirective;
    var IonCaptchaDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.loggedIn()) {
            return true;
        }
        else {
            if (this.auth.scannedLogIn()) {
                this.router.navigate(['/session-qr']);
            }
            else if (this.auth.adminLogIn()) {
                this.router.navigate(['/admin']);
            }
            else {
                this.router.navigate(['/gallery']);
            }
        }
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/slideshow/slideshow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<div class=\"\">\n\t\t<vg-player (onPlayerReady)=\"onPlayerReady($event)\">\n\t\t\t<video [hidden]=\"!vPlayer\" [vgMedia]=\"media\" autoplay (ended)=\"myAddListener()\" #media id=\"singleVideo\" preload=\"auto\" controls crossorigin=\"use-credentials\">\n\t\t\t\t<source src=\"\" type=\"video/mp4\">\n\t\t\t</video>\n\t\t\t<div [hidden]=\"vPlayer\" class=\"image-player\">\n\t\t\t\t<img style=\"min-height:100%;min-width:100%;\" crossorigin=\"use-credentials\">\n\t\t\t\t<h2 class=\"image-text\">{{imageTitle}}</h2>\n\t\t\t</div>\n\t\t</vg-player>\n\t\t<button *ngIf=\"visibleImages.length != 0\" type=\"button\" class=\"btn btn-danger btn-big btn-warning\" (click)=\"stopPlayer()\">\n\t\t\t<span class=\"glyphicon glyphicon-stop\"></span> Stop\n\t\t</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/slideshow/slideshow.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n  margin: 20px auto; }\n\n.image-player {\n  position: relative;\n  width: 100%;\n  /* for IE 6 */ }\n  .image-player img {\n    position: relative;\n    width: 90vw;\n    height: auto;\n    max-height: 90vh; }\n\n.image-text {\n  position: absolute;\n  top: 50px;\n  left: 10px;\n  width: 100%; }\n\nvg-player video {\n  max-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slideshow/slideshow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_image_service__ = __webpack_require__("../../../../../src/app/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function SlideshowComponent(imageService, api, route, router, _location, toastr) {
        this.imageService = imageService;
        this.api = api;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.toastr = toastr;
        this.title = 'Session Slildeshow Page';
        this.currentUser = localStorage.getItem('uname');
        this.visibleImages = [];
        this.currentIndex = 0;
        this.imageSlideTime = 2000;
        this.vPlayer = true;
        // baseUrl: string = 'http://localhost:8080/';
        // baseUrl: string = 'https://ionic-node-auth.herokuapp.com/';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/';
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
            _this.startListen();
        });
    };
    SlideshowComponent.prototype.startListen = function () {
        var _this = this;
        if (this.imageService.qrSecret) {
            this.listenSub = this.imageService.listenSessionStop().subscribe(function (data) {
                if (data.secret === _this.imageService.qrSecret) {
                    _this.stopPlayer();
                    _this._location.back();
                }
            });
        }
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
                    console.log(data.files);
                    if (!data.files.length) {
                        _this.router.navigate(['/gallery']);
                        return _this.toastr.error('No files in this session!', 'Error');
                    }
                    _this.visibleImages = data.files;
                    _this.slideshow();
                }
                else {
                    _this.toastr.error(data.msg, 'Error');
                }
            }, function (error) {
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
        myImage.src = myVideo.src = 'assets/img/hqdefault.jpg';
    };
    SlideshowComponent.prototype.ngOnDestroy = function () {
        if (this.listenSub) {
            this.listenSub.unsubscribe();
        }
    };
    SlideshowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'slideshow',
            template: __webpack_require__("../../../../../src/app/slideshow/slideshow.component.html"),
            styles: [__webpack_require__("../../../../../src/app/slideshow/slideshow.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_2_videogular2_core__["VgAPI"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ngx-loading [show]=\"isLoading\"></ngx-loading>\n    <div class=\"row mt-3\">\n        <h4>Edit Session</h4>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form (ngSubmit)=\"updateSession(f, editing)\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\">\n                        <label for=\"name\">Session Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"currSession.sessionname\" name=\"name\" #name=\"ngModel\" [ngClass]=\"checkValid(name)\" required>\n                        <div class=\"invalid-feedback\" *ngIf=\"name.errors?.required && (name.touched || name.dirty)\">\n                            Session name is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"catone\">Category</label>\n                        <select class=\"custom-select form-control\" [disabled]=\"!catones?.length\" [ngModel]=\"currSession.catone\" (ngModelChange)=\"catSelect(1, $event)\" id=\"catone\" name=\"catone\" #catone=\"ngModel\" [ngClass]=\"checkValid(catone)\" required>\n                            <option [value]=\"cat._id\" *ngFor=\"let cat of catones\">{{cat.categoryname}}</option>\n                        </select>\n                        <div class=\"invalid-feedback\" *ngIf=\"catone.errors?.required && (catone.touched || catone.dirty)\">\n                            Category is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"subcat1\">Select Subcategory - I</label>\n                        <select class=\"custom-select form-control\" [disabled]=\"!cattwos?.length\" [ngModel]=\"currSession.cattwo\" (ngModelChange)=\"catSelect(2, $event)\" name=\"cattwo\" #cattwo=\"ngModel\" [ngClass]=\"checkValid(cattwo)\" required>\n                            <option [value]=\"cat._id\" *ngFor=\"let cat of cattwos\">{{cat.categoryname}}</option>\n                        </select>\n                        <div class=\"invalid-feedback\" *ngIf=\"cattwo.errors?.required && (cattwo.touched || cattwo.dirty)\">\n                            Sub-category I is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"subcat1\">Select Subcategory - II</label>\n                        <select class=\"custom-select form-control\" [disabled]=\"!catthrees?.length\" [ngModel]=\"currSession.categoryId\" (ngModelChange)=\"catSelect(3, $event)\" name=\"catthree\" #catthree=\"ngModel\" [ngClass]=\"checkValid(catthree)\" required>\n                            <option [value]=\"cat._id\" *ngFor=\"let cat of catthrees\">{{cat.categoryname}}</option>\n                        </select>\n                        <div class=\"invalid-feedback\" *ngIf=\"catthree.errors?.required && (catthree.touched || catthree.dirty)\">\n                            Sub-category II is required\n                        </div>\n                    </div>\n                    <button type=\"submit\" [disabled]=\"f.invalid\" *ngIf=\"!editing\" class=\"btn btn-primary\"> <i class=\"icon ion-edit\"></i> Create</button>\n                    <button type=\"submit\" [disabled]=\"f.invalid\" *ngIf=\"editing\" class=\"btn btn-primary\"> <i class=\"icon ion-checkmark-round\"></i> Update</button>\n                    <button type=\"button\" *ngIf=\"editing\" class=\"btn btn-danger\" (click)=\"removeSession()\"> <i class=\"icon ion-trash-b\"></i> Delete</button>\n                </form>\n                <!-- <pre>{{f.form.value | json}}</pre> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <h4 *ngIf=\"sessionMedia.length\" class=\"my-3\">Uploaded Media</h4>\n        <div *ngIf=\"sessionMedia.length\" dnd-sortable-container [sortableData]=\"sessionMedia\">\n            <div class=\"card media-card my-2\" *ngFor=\"let media of sessionMedia; let i=index\" (onDropSuccess)=\"dragEnd(sessionMedia)\" dnd-sortable [sortableIndex]=\"i\">\n                <div class=\"card-body\">\n                    <img *ngIf=\"media.imagetype == 'image'\" [src]=\"getImage(media)\" class=\"col-6 session-img\" />\n                    <img src=\"/assets/img/video-icon.png\" class=\"session-img col-6\" alt=\"video-file\" *ngIf=\"media.imagetype=='video'\">\n                    <img src=\"/assets/img/audio-icon.png\" class=\"session-img col-6\" alt=\"video-file\" *ngIf=\"media.imagetype=='audio'\">\n                    <div class=\"col-6 float-right\">\n                        <h5 class=\"card-title\">{{media.imagetitle}}</h5>\n                        <div class=\"row justify-content-start\">\n                            <div class=\"col\" *ngIf=\"media?.imagetype==='image'\">\n                                <button class=\"btn btn-outline-primary\" (click)=\"editMediaInfoModal(media, i)\">\n                                    <i class=\"icon ion-edit\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col\">\n                                <button class=\"btn btn-outline-danger\" (click)=\"removeImage(media, i)\"> <i class=\"icon ion-trash-b\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h4 class=\"my-3\" *ngIf=\"currSession._id\">Upload Files</h4>\n        <form *ngIf=\"currSession._id\">\n            <div class=\"form-group\">\n                <label for=\"single\">Select your image:</label>\n                <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />\n            </div>\n        </form>\n        <table class=\"table table-bordered\" *ngIf=\"uploader.queue.length\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item.file.name\" required>\n                    </td>\n                    <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                    <td>\n                        <p>\n                            <ngb-progressbar type=\"success\" [value]=\"item.progress\"></ngb-progressbar>\n                        </p>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"icon ion-checkmark-round\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"icon ion-close\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"icon ion-close-circle\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <i class=\"icon ion-upload\"></i> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <i class=\"icon ion-close-circled\"></i> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                            <i class=\"icon ion-trash-b\"></i> Remove\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <div *ngIf=\"uploader.queue.length\">\n            <div>\n                Upload progress:\n                <p>\n                    <ngb-progressbar type=\"success\" [value]=\"uploader.progress\"></ngb-progressbar>\n                </p>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <i class=\"icon ion-upload\"></i> Upload all\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <i class=\"icon ion-android-cancel\"></i> Cancel all\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <i class=\"icon ion-trash-b\"></i> Remove all\n            </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4:not(.col), div:not(.col), table:not(.col) {\n  width: 100%; }\n\n.icon.thumbnail {\n  font-size: 8rem; }\n\ndiv.col-6 {\n  width: 50%; }\n\nimg.session-img {\n  max-width: 30%;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Session */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_image_service__ = __webpack_require__("../../../../../src/app/shared/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_category_service__ = __webpack_require__("../../../../../src/app/shared/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popup_popup_component__ = __webpack_require__("../../../../../src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirm_popup_confirm_popup_component__ = __webpack_require__("../../../../../src/app/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Session = (function () {
    function Session(_id, sessionname, catone, cattwo, categoryId) {
        if (_id === void 0) { _id = null; }
        if (sessionname === void 0) { sessionname = null; }
        if (catone === void 0) { catone = null; }
        if (cattwo === void 0) { cattwo = null; }
        if (categoryId === void 0) { categoryId = null; }
        this._id = _id;
        this.sessionname = sessionname;
        this.catone = catone;
        this.cattwo = cattwo;
        this.categoryId = categoryId;
    }
    return Session;
}());

var UploadComponent = (function () {
    function UploadComponent(imageService, route, router, categoryService, dialogService, toastr) {
        this.imageService = imageService;
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
        this.dialogService = dialogService;
        this.toastr = toastr;
        // baseUrl: string = 'http://localhost:8080/';
        // baseUrl: string = 'https://ionic-node-auth.herokuapp.com/';
        this.editing = false;
        this.sessionMedia = [];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].baseUrl;
        this.uploadUrl = this.baseUrl + '/session/upload';
        this.currSession = new Session();
        this.isLoading = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: this.uploadUrl });
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRootCategories();
        var routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.editing = true;
                _this.isLoading = true;
                setTimeout(function () { return _this.isLoading = false; }, 3000);
                _this.imageService.getSessionById(params['id']).subscribe(function (res) {
                    if (res.success) {
                        _this.currSession = res.session; // warning: this makes the form dirty
                        _this.getSessionCategories(res.session.categoryId);
                        _this.sessionMedia = res.files;
                        _this.setUploaderCallbacks(_this.currSession);
                    }
                    else {
                        _this.toastr.error(res.msg, 'Error');
                    }
                });
            }
        });
    };
    UploadComponent.prototype.getSessionCategories = function (catId) {
        var _this = this;
        this.categoryService.getSessionCats(catId).subscribe(function (res) {
            if (res.success) {
                //get all the categories regarding the session and the selected ones
                _this.catthrees = res.cats.catthrees;
                _this.cattwos = res.cats.cattwos;
                _this.currSession.catone = res.cats.catone;
                _this.currSession.cattwo = res.cats.cattwo;
            }
        });
    };
    UploadComponent.prototype.getRootCategories = function () {
        var _this = this;
        this.categoryService.getRootCategory()
            .subscribe(function (data) {
            if (data.success) {
                _this.catones = data.categories;
            }
            else {
                _this.toastr.error(data.msg, 'Error');
            }
        });
    };
    UploadComponent.prototype.populateSubCategoriesII = function (id) {
        this.cattwos = [];
        this.catthrees = [];
        if (id) {
            var selectedCat = this.catones.find(function (val) { return val._id === id; });
            this.cattwos = selectedCat ? selectedCat.childcategories : [];
        }
    };
    UploadComponent.prototype.populateSubCategoriesIII = function (id) {
        var _this = this;
        this.catthrees = [];
        if (id) {
            this.isLoading = true;
            this.categoryService.getSubCategory(id)
                .subscribe(function (data) {
                _this.isLoading = false;
                if (data.success) {
                    _this.catthrees = data.category ? data.category.childcategories : [];
                }
                else {
                    _this.toastr.error(data.msg, 'Error');
                }
            }, function (error) {
                _this.isLoading = false;
            });
        }
    };
    UploadComponent.prototype.removeSession = function () {
        var _this = this;
        this.showConfirm('Confirm Delete', 'Are you sure you want to remove session: ' + this.currSession.sessionname).subscribe(function (res) {
            if (res) {
                _this.imageService.removeSession(_this.currSession).subscribe(function (res) {
                    if (res.success) {
                        _this.toastr.success(res.msg, 'Success');
                        _this.router.navigate(['/gallery']);
                    }
                    else {
                        _this.toastr.error(res.msg, 'Error');
                    }
                });
            }
        });
    };
    UploadComponent.prototype.catSelect = function (which, e) {
        if (which == 1) {
            this.currSession.catone = e;
            this.populateSubCategoriesII(e);
        }
        else if (which == 2) {
            this.currSession.cattwo = e;
            this.populateSubCategoriesIII(e);
        }
        else if (which == 3) {
            this.currSession.categoryId = e;
        }
    };
    UploadComponent.prototype.editMediaInfoModal = function (file, index) {
        var _this = this;
        console.log('edit meidainfo modal');
        this.showDelayPopup(file.imagetitle, file.imagedelay).subscribe(function (data) {
            if (data && data.delay) {
                _this.imageService.updateDelay(file._id, data.delay).subscribe(function (res) {
                    if (res.success) {
                        //success
                        _this.toastr.success('Delay Updated', 'Success');
                    }
                    else {
                        //error
                        _this.toastr.error(res.msg, 'Error');
                    }
                });
            }
            if (data && data.title) {
                _this.imageService.updateTitle(file._id, data.title).subscribe(function (res) {
                    if (res.success) {
                        //success
                        if (!index) {
                            //when index is not provided it is the last element
                            var index_1 = _this.sessionMedia.length;
                        }
                        _this.sessionMedia[index].imagetitle = data.title;
                        _this.toastr.success('Title updated', 'Success');
                    }
                    else {
                        //error
                        _this.toastr.error(res.msg, 'Error');
                    }
                });
            }
        });
    };
    UploadComponent.prototype.setUploaderCallbacks = function (session) {
        var _this = this;
        var uo = {};
        uo.additionalParameter = { sessionId: session._id };
        uo.itemAlias = 'upload_file';
        uo.headers = [{ name: 'Authorization', value: localStorage.getItem('id_token') }];
        this.uploader.setOptions(uo);
        console.log(this.uploader.options);
        this.uploader.onBeforeUploadItem = function (fileItem) {
            // console.log('starting upload item: '+ fileItem.file.name);
        };
        this.uploader.onAfterAddingAll = function (items) {
            console.log(items);
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            //show errors
            console.error('File uploader status code: ', status);
            if (status == 0) {
                _this.toastr.error('Cannot connect to server! Make sure you have active internet connection.', 'Error');
            }
            else {
                var res = JSON.parse(response);
                _this.toastr.error(res.msg, 'Error');
            }
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.sessionMedia.push(JSON.parse(response).file);
            if (item.file.type.indexOf('image/') !== -1) {
                var delaySub = _this.showDelayPopup(item.file.name).subscribe(function (data) {
                    console.log(data);
                    if (data && data.delay) {
                        _this.imageService.updateDelay(JSON.parse(response).file._id, data.delay).subscribe(function (res) {
                            if (res.success) {
                                //success
                                _this.toastr.success(res.msg, 'Success');
                            }
                            else {
                                //error
                                _this.toastr.error(res.msg, 'Error');
                            }
                        });
                    }
                    if (data && data.title) {
                        _this.imageService.updateTitle(JSON.parse(response).file._id, data.title).subscribe(function (res) {
                            if (res.success) {
                                //success
                                _this.toastr.success(res.msg, 'Success');
                            }
                            else {
                                //error
                                _this.toastr.error(res.msg, 'Error');
                            }
                        });
                    }
                });
            }
        };
    };
    UploadComponent.prototype.updateSession = function (form, editing) {
        var _this = this;
        if (form.invalid) {
            this.toastr.error('Please fill the complete form', 'Error');
            return;
        }
        if (!editing)
            return this.createNewSession(form);
        var updatedSession = {
            _id: this.currSession._id,
            sessionname: this.currSession.sessionname,
            categoryId: this.currSession.categoryId
        };
        this.imageService.updateSession(updatedSession)
            .subscribe(function (res) {
            if (res.success) {
                _this.toastr.success('Session updated successfully!', 'Success');
            }
            else {
                _this.toastr.error(res.msg, 'Error');
            }
        });
    };
    UploadComponent.prototype.removeImage = function (image, index) {
        var _this = this;
        var id = image._id;
        this.imageService.removeImage(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.sessionMedia.splice(index, 1);
                _this.toastr.success('Media file removed', 'Success');
            }
            else {
                _this.toastr.error(data.msg, 'Error');
            }
        });
    };
    UploadComponent.prototype.createNewSession = function (form) {
        var _this = this;
        var sessionname = this.currSession.sessionname;
        if (this.currSession.categoryId) {
            this.imageService.createSessions(sessionname, this.currSession.categoryId)
                .subscribe(function (data) {
                if (data.success) {
                    _this.sessionname = null;
                    form.reset();
                    _this.toastr.success('Session created successfully!', 'Success');
                    _this.router.navigate(['/edit-session', data.session._id]);
                }
                else {
                    _this.toastr.error(data.msg, 'Error');
                }
            });
        }
    };
    ;
    UploadComponent.prototype.showDelayPopup = function (filename, delay) {
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__popup_popup_component__["a" /* PopupComponent */], {
            title: 'Enter title and delay for image',
            message: 'Enter Delay for image: ' + filename,
            imgTitle: filename,
            delay: delay
        });
        return disposable;
    };
    UploadComponent.prototype.showConfirm = function (title, message) {
        var popup = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_7__confirm_popup_confirm_popup_component__["a" /* ConfirmPopupComponent */], {
            title: title,
            message: message
        });
        return popup;
    };
    UploadComponent.prototype.changeSessionTab = function (e) {
        console.log('tab change', e);
        if (e.nextId === 'edit_media') {
            if (this.currSession) {
                this.setUploaderCallbacks(this.currSession);
            }
            else {
                // show feedback to save session first
                e.preventDefault();
            }
        }
    };
    UploadComponent.prototype.dragEnd = function (images) {
        var _this = this;
        console.log('drag end: ', images);
        var items = images;
        for (var index = 0; index < items.length; index++) {
            var element = items[index];
            this.imageService.updateImage(element._id, index)
                .subscribe(function (data) {
                if (data.success) {
                    _this.toastr.success('Items reordered', 'Success');
                }
                else {
                    _this.toastr.error(data.msg, 'Error');
                }
            });
        }
    };
    UploadComponent.prototype.getImage = function (file) {
        if (file.imagetype == 'image') {
            return this.baseUrl + '/session/stream_files?file=' + file.imagename;
        }
    };
    UploadComponent.prototype.checkValid = function (control) {
        if (control.errors && (control.touched || control.dirty)) {
            return 'is-invalid';
        }
        else if (!control.errors && (control.touched || control.dirty)) {
            return 'is-valid';
        }
    };
    UploadComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* NgForm */])
    ], UploadComponent.prototype, "sessionForm", void 0);
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["b" /* ToastrService */]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/validator.password.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidation; });
var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPass').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirmPass').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "../../../../../src/app/validator.username.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsernameValidator = (function () {
    function UsernameValidator(auth) {
        this.auth = auth;
    }
    UsernameValidator.prototype.checkUsername = function (control) {
        var _this = this;
        // control.valueChanges.debounceTime<string>(500)
        //   .distinctUntilChanged().subscribe( res => {
        //     console.log(res);
        //   })
        // return new Promise((resolve, reject) => resolve(null));
        return new Promise(function (resolve, reject) {
            control.valueChanges.debounceTime(500)
                .distinctUntilChanged()
                .subscribe(function (username) {
                console.log(username);
                _this.auth.validateUsername(username).subscribe(function (res) {
                    if (res.success) {
                        resolve(null);
                    }
                    else {
                        console.log('in use');
                        resolve({ 'usernameInUse': true });
                    }
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    UsernameValidator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_auth_service__["a" /* AuthService */]])
    ], UsernameValidator);
    return UsernameValidator;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://ionic-node-auth.herokuapp.com',
    socketUrl: 'https://ionic-node-auth.herokuapp.com',
    captchaKey: '6LevrjQUAAAAAM5WB0Xu_ttsNRqpXeSPV6F0_zek',
    envName: 'prod'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map