webpackJsonp([2],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewPageModule = (function () {
    function ViewPageModule() {
    }
    return ViewPageModule;
}());
ViewPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view__["a" /* ViewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view__["a" /* ViewPage */]),
        ],
    })
], ViewPageModule);

//# sourceMappingURL=view.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_session__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewPage = (function () {
    function ViewPage(navCtrl, navParams, sessionSer, ren, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sessionSer = sessionSer;
        this.ren = ren;
        this.loadingCtrl = loadingCtrl;
        this.leaving = false;
        this.fileIndex = 0;
        // baseUrl: string = 'http://localhost:8080/';
        this.baseUrl = 'https://ionic-node-auth.herokuapp.com/';
        this.apiUrl = 'session/stream_files?path=';
        this.session = this.navParams.get('session');
        this.token = this.navParams.get('token');
        // this.streamFile(this.fileIndex);
    }
    ViewPage.prototype.ngAfterViewInit = function () {
        this.playFile(this.session.files[0]);
    };
    ViewPage.prototype.playFile = function (file) {
        var _this = this;
        if (!file)
            return this.navCtrl.pop();
        if (this.leaving)
            return;
        this.file = file;
        var mediaDiv = this.mediaContainer.nativeElement;
        var type = file.type;
        var mediaEl, sourceEl, audioImg;
        if (type.indexOf('image/') !== -1) {
            mediaEl = this.ren.createElement('img');
            this.ren.setAttribute(mediaEl, 'src', this.baseUrl + this.apiUrl + file.path);
            this.ren.listen(mediaEl, 'load', function (e) {
                setTimeout(function () {
                    console.log('file ended!');
                    _this.fileIndex++;
                    _this.ren.removeChild(mediaDiv, mediaEl);
                    _this.playFile(_this.session.files[_this.fileIndex]);
                }, 5000);
            });
        }
        if (type.indexOf('audio/') !== -1) {
            if (!mediaEl)
                mediaEl = this.ren.createElement('audio');
            if (!sourceEl)
                sourceEl = this.ren.createElement('source');
            this.ren.setProperty(mediaEl, 'autoplay', 'true');
            // this.ren.setProperty(mediaEl, 'controls', 'true');
            this.ren.setProperty(sourceEl, 'src', this.baseUrl + this.apiUrl + file.path);
            this.ren.appendChild(mediaEl, sourceEl);
            if (!audioImg) {
                audioImg = this.ren.createElement('img');
                this.ren.setAttribute(audioImg, 'src', 'assets/icon/headphones-icon.png');
                this.ren.addClass(audioImg, 'audio-img');
            }
            this.ren.appendChild(mediaDiv, audioImg);
            this.ren.listen(mediaEl, 'ended', function (e) {
                console.log('file ended!');
                _this.fileIndex++;
                _this.ren.removeChild(mediaDiv, audioImg);
                _this.ren.removeChild(mediaDiv, mediaEl);
                _this.playFile(_this.session.files[_this.fileIndex]);
            });
            this.ren.listen(mediaEl, 'loadstart', function (e) {
                if (!_this.mediaLoading)
                    _this.showMediaLoading();
            });
            this.ren.listen(mediaEl, 'play', function (e) {
                if (_this.mediaLoading)
                    _this.mediaLoading.dismiss();
            });
            this.ren.listen(mediaEl, 'waiting', function (e) {
                if (!_this.mediaLoading)
                    _this.showMediaLoading();
            });
        }
        if (type.indexOf('video/') !== -1) {
            mediaEl = this.ren.createElement('video');
            sourceEl = this.ren.createElement('source');
            this.ren.setProperty(mediaEl, 'autoplay', 'true');
            // this.ren.setProperty(mediaEl, 'controls', 'true');
            this.ren.setProperty(sourceEl, 'src', this.baseUrl + this.apiUrl + file.path);
            this.ren.appendChild(mediaEl, sourceEl);
            this.ren.listen(mediaEl, 'ended', function (e) {
                console.log('file ended!');
                _this.fileIndex++;
                _this.ren.removeChild(mediaDiv, mediaEl);
                _this.playFile(_this.session.files[_this.fileIndex]);
            });
            this.ren.listen(mediaEl, 'loadstart', function (e) {
                _this.showMediaLoading();
            });
            this.ren.listen(mediaEl, 'play', function (e) {
                if (_this.mediaLoading)
                    _this.mediaLoading.dismiss();
            });
            this.ren.listen(mediaEl, 'waiting', function (e) {
                if (!_this.mediaLoading)
                    _this.showMediaLoading();
            });
        }
        this.ren.appendChild(mediaDiv, mediaEl);
    };
    // streamFile(index: number) : void {
    //   this.file = this.session.files[index];
    //   this.sessionSer.stream(this.file).subscribe( data => {
    //     this.dataUrl = this.makeDataUrl(data);
    //   });
    // }
    ViewPage.prototype.onFileEnd = function () {
        console.log('file ended!');
        if (this.fileIndex !== this.session.files.length - 1)
            this.fileIndex++;
        // this.streamFile(this.fileIndex);
    };
    ViewPage.prototype.onImageLoaded = function () {
        var _this = this;
        if (this.loading)
            this.loading.dismiss();
        setTimeout(function () {
            _this.onFileEnd();
        }, 5000);
    };
    // makeDataUrl(buffer) {
    //   var binary = '';
    //   var bytes = new Uint8Array( buffer );
    //   var len = bytes.byteLength;
    //   for (var i = 0; i < len; i++) {
    //       binary += String.fromCharCode( bytes[ i ] );
    //   }
    //   return window.btoa( binary );
    // }
    ViewPage.prototype.ionViewDidLoad = function () {
        this.leaving = false;
        console.log('ionViewDidLoad ViewPage');
    };
    ViewPage.prototype.ionViewWillLeave = function () {
        this.leaving = true;
        // if(this.token) {
        //   this.sessionSer.removeViewedToken(this.token).subscribe( res => {
        //     console.log(res);
        //   });
        // }
    };
    ViewPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ViewPage.prototype.showMediaLoading = function () {
        this.mediaLoading = this.loadingCtrl.create({
            content: 'Buffering...',
            spinner: 'circles',
            dismissOnPageChange: false
        });
        this.mediaLoading.present();
    };
    return ViewPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('videoPlayer'),
    __metadata("design:type", Object)
], ViewPage.prototype, "videoPlayer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('audioPlayer'),
    __metadata("design:type", Object)
], ViewPage.prototype, "audioPlayer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('image'),
    __metadata("design:type", Object)
], ViewPage.prototype, "imageEl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mediaContainer'),
    __metadata("design:type", Object)
], ViewPage.prototype, "mediaContainer", void 0);
ViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-view',template:/*ion-inline-start:"/media/shashwat/Data/coding/codebase/MEAN/Ionic-Node-auth/ionic-src/src/pages/view/view.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>{{session?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen class="media-page">\n  <div #mediaContainer class="media-container">\n    <!-- <div class="progress-bar"></div> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"/media/shashwat/Data/coding/codebase/MEAN/Ionic-Node-auth/ionic-src/src/pages/view/view.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_session_session__["a" /* SessionProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ViewPage);

//# sourceMappingURL=view.js.map

/***/ })

});
//# sourceMappingURL=2.js.map