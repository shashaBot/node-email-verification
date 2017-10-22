webpackJsonp([4],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_session__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(nav, auth, session, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.session = session;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.sessionList = [];
        this.user = this.auth.getSignedInUser();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.showLoading();
        this.session.listSession().subscribe(function (data) {
            if (data.success) {
                _this.loading.dismiss();
                _this.sessionList = data.data;
                console.log(_this.sessionList);
            }
            else {
                _this.showError('Problem in loading sessions.');
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.editSession = function (sessionId) {
        console.log('edit session', sessionId);
    };
    HomePage.prototype.viewSession = function (sessionId) {
        console.log('view session', sessionId);
    };
    HomePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    HomePage.prototype.logout = function () {
        this.nav.setRoot('login-page');
        this.auth.logout();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/media/shashwat/Data/coding/codebase/MEAN/Ionic-Node-auth/ionic-src/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      View Sessions\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home" padding>\n  <h3>Welcome inside, {{user.name}}</h3>\n  <ion-list>\n    <ion-item *ngFor="let session of sessionList">\n      <h2>{{session.name}}</h2>\n      <p>{{session.createdAt | date: \'shortDate\'}}</p>\n      <button ion-button clear item-right (click)="viewSession(session.id)">View</button>\n      <button ion-button clear item-right *ngIf="session.userId === user.id" (click)="editSession(session._id)" color="danger">Edit</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/media/shashwat/Data/coding/codebase/MEAN/Ionic-Node-auth/ionic-src/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_session_session__["a" /* SessionProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map