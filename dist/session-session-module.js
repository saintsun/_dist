(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-session-module"],{

/***/ "./src/.pages/session/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/.pages/session/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-page\">\r\n<div class=\"d-flex justify-content-center full-height full-width align-items-center\">\r\n  <div class=\"error-container text-center\">\r\n    <h1 class=\"error-number\">{{error}}</h1>\r\n    <h2 class=\"semi-bold\">Sorry but we couldnt find this page</h2>\r\n    <p class=\"p-b-10\">This page you are looking for does not exsist <a href=\"javascript:void(0)\">Report this?</a>\r\n    </p>\r\n    <div class=\"error-container-innner text-center\">\r\n      <form class=\"error-form\">\r\n        <div class=\" transparent text-left\">\r\n          <div class=\"form-group form-group-default input-group\" pgFormGroupDefault>  \r\n            <div class=\"form-input-group\">\r\n              <label>Search</label>\r\n              <input class=\"form-control\" placeholder=\"Try searching the missing page\" type=\"email\">\r\n            </div>\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text transparent\">\r\n                <span class=\"pg pg-search\"></span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"pull-bottom sm-pull-bottom full-width d-flex align-items-center justify-content-center\">\r\n<div class=\"error-container\">\r\n  <div class=\"error-container-innner\">\r\n    <div class=\"p-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up row no-margin\">\r\n      <div class=\"col-md-3 no-padding d-flex align-items-center justify-content-center\">\r\n        <img alt=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" height=\"60\" src=\"assets/img/demo/pages_icon.png\" width=\"60\">\r\n      </div>\r\n      <div class=\"col-md-9 no-padding d-flex align-items-center justify-content-center\">\r\n        <p class=\"small no-margin flex-1\">Create a pages account. If you have a facebook account, log into it for this process.\r\n              Sign in with <a href=\"javascript:void(0)\">Facebook</a> or <a href=\"javascript:void(0)\">Google</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/.pages/session/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/.pages/session/error/error.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-page {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy8ucGFnZXMvc2Vzc2lvbi9lcnJvci9FOlxcVFRNUy0zXFxFS1ZUL3NyY1xcLnBhZ2VzXFxzZXNzaW9uXFxlcnJvclxcZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjLy5wYWdlcy9zZXNzaW9uL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLXBhZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/.pages/session/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/.pages/session/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.error = params['type'];
        });
    };
    ErrorComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/.pages/session/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/.pages/session/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/.pages/session/lockscreen/lockscreen.component.html":
/*!*****************************************************************!*\
  !*** ./src/.pages/session/lockscreen/lockscreen.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START PAGE-CONTAINER -->\r\n<div class=\"lock-container full-height\">\r\n  <!-- START PAGE CONTENT WRAPPER -->\r\n  <div class=\"full-height sm-p-t-50 align-items-center d-md-flex\">\r\n    <div class=\"row full-width\">\r\n      <div class=\"col-md-6\">\r\n        <!-- START Lock Screen User Info -->\r\n        <div class=\"d-flex justify-content-start align-items-center\">\r\n          <div class=\"\">\r\n            <div class=\"thumbnail-wrapper circular d48 m-r-10 \">\r\n              <img width=\"43\" height=\"43\" src2x=\"assets/img/profiles/avatar_small2x.jpg\" pgRetina src1x=\"assets/img/profiles/avatar.jpg\" alt=\"\" src=\"assets/img/profiles/avatar_small2x.jpg\">\r\n            </div>\r\n          </div>\r\n          <div class=\"\">\r\n            <h5 class=\"logged hint-text no-margin\">Logged in as</h5>\r\n            <h2 class=\"name no-margin\">David Nester</h2>\r\n          </div>\r\n        </div>\r\n        <!-- END Lock Screen User Info -->\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <!-- START Lock Screen Form -->\r\n        <form id=\"form-lock\" role=\"form\" action=\"index.html\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <!-- START Form Control -->\r\n              <div class=\"form-group form-group-default sm-m-t-30\">\r\n                <label>Credentials</label>\r\n                <div class=\"controls\">\r\n                  <input type=\"text\" name=\"password\" placeholder=\"Password to unlock\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n              <!-- END Form Control -->\r\n            </div>\r\n          </div>\r\n          <!-- START Lock Screen Notification Icons-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 sm-p-l-25\">\r\n              <a href=\"javascript:void(0)\" class=\"inline text-black fs-14 hint-text\"><i class=\"pg pg-mail\"></i>&nbsp;<span class=\"hint-text\">12</span></a>\r\n              <a href=\"javascript:void(0)\" class=\"inline text-black  fs-14 hint-text m-l-30\"><i class=\"pg pg-comment\"></i>&nbsp;<span class=\"hint-text\">4</span></a>\r\n            </div>\r\n          </div>\r\n          <!-- END Lock Screen Notification Icons-->\r\n        </form>\r\n        <!-- END Lock Screen Form -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END PAGE CONTENT WRAPPER -->\r\n</div>\r\n<!-- END PAGE-CONTAINER -->\r\n<!-- START Lock Screen Footer Content-->\r\n<div class=\"pull-bottom full-width\">\r\n  <div class=\"lock-container m-b-10 clearfix row\">\r\n    <div class=\"inline col-lg-2\">\r\n      <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"m-t-5 \" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\r\n    </div>\r\n    <div class=\"col-lg-10 m-t-15\">\r\n      <p class=\"hinted-text small inline \">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/.pages/session/lockscreen/lockscreen.component.scss":
/*!*****************************************************************!*\
  !*** ./src/.pages/session/lockscreen/lockscreen.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL3Nlc3Npb24vbG9ja3NjcmVlbi9sb2Nrc2NyZWVuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/.pages/session/lockscreen/lockscreen.component.ts":
/*!***************************************************************!*\
  !*** ./src/.pages/session/lockscreen/lockscreen.component.ts ***!
  \***************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent() {
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__(/*! ./lockscreen.component.html */ "./src/.pages/session/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__(/*! ./lockscreen.component.scss */ "./src/.pages/session/lockscreen/lockscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/.pages/session/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/.pages/session/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper \">\r\n\t<!-- START Login Background Pic Wrapper-->\r\n\t<div class=\"bg-pic\">\r\n\t\t<!-- START Background Pic-->\r\n\t\t<div class=\"img-holder\"  [ngStyle]=\"{'background':'url(assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg)'}\"></div> \r\n\t\t<!-- START Background Caption-->\r\n\t\t<div class=\"bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20\">\r\n\t\t\t<h2 class=\"semi-bold text-white\">\r\n\t\t\t\tPages make it easy to enjoy what matters the most in the life</h2>\r\n\r\n\t\t\t<p class=\"small\">\r\n\t\t\t\timages Displayed are solely for representation purposes only, All work copyright of respective\r\n\t\t\t\towner, otherwise © 2013-2014 REVOX.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<!-- END Background Caption-->\r\n\t</div>\r\n\t<!-- END Login Background Pic Wrapper-->\r\n\t<!-- START Login Right Container-->\r\n\t<div class=\"login-container bg-white\">\r\n\t\t<div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\r\n\t\t\t<img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\"\r\n\t\t\t     width=\"78\" height=\"22\">\r\n\r\n\t\t\t<p class=\"p-t-35\">Sign into your pages account</p>\r\n\t\t\t<!-- START Login Form -->\r\n\t\t\t<form class=\"p-t-15\" role=\"form\" #loginForm=\"ngForm\">\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\">\r\n\t\t\t\t\t<label>Login</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"userName\" name=\"userName\" [(ngModel)]=\"userName\"  #loginUserName=\"ngModel\" required  placeholder=\"User Name\" class=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\" >\r\n\t\t\t\t\t<label  *ngIf=\"loginUserName.errors.required\" class=\"error\" >This field is required.</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END Form Control-->\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\">\r\n\t\t\t\t\t<label>Password</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Credentials\" id=\"password\" name=\"password\" [(ngModel)]=\"password\"  #loginPassword=\"ngModel\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\" >\r\n\t\t\t\t\t<label  *ngIf=\"loginPassword.errors.required\" class=\"error\" >This field is required.</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 no-padding sm-p-l-10\">\r\n\t\t\t\t\t\t<div class=\"checkbox \">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\r\n\t\t\t\t\t\t\t<label for=\"checkbox1\">Keep Me Signed in</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 d-flex align-items-center justify-content-end\">\r\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END Form Control-->\r\n\t\t\t\t<button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"loginForm.invalid\">Sign in</button>\r\n\t\t\t</form>\r\n\t\t\t<!--END Login Form-->\r\n\t\t\t<div class=\"pull-bottom sm-pull-bottom\">\r\n\t\t\t\t<div class=\"m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix\">\r\n\t\t\t\t\t<div class=\"col-sm-3 col-md-2 no-padding\">\r\n\t\t\t\t\t\t<img alt=\"\" class=\"m-t-5\" pgRetina src1x=\"assets/img/demo/pages_icon.png\"\r\n\t\t\t\t\t\t     src2x=\"assets/img/demo/pages_icon_2x.png\" height=\"60\"\r\n\t\t\t\t\t\t     src=\"assets/img/demo/pages_icon.png\" width=\"60\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-9 no-padding m-t-10\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\tCreate a pages account. If you have a facebook account, log into it for this\r\n\t\t\t\t\t\t\t\tprocess. Sign in with <a href=\"javascript:void(0)\" class=\"text-info\">Facebook</a> or <a href=\"javascript:void(0)\"\r\n\t\t\t\t\t\t\t\t                                                                       class=\"text-info\">Google</a>\r\n\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- END Login Right Container-->\r\n</div>"

/***/ }),

/***/ "./src/.pages/session/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/.pages/session/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL3Nlc3Npb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/session/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/.pages/session/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/.pages/session/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/.pages/session/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/.pages/session/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/.pages/session/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container full-height sm-p-t-30\">\r\n    <div class=\"d-flex justify-content-center flex-column full-height \">\r\n\r\n          <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">\r\n          <h3>Pages makes it easy to enjoy what matters the most in your life</h3>\r\n          <p>\r\n            Create a pages account. If you have a facebook account, log into it for this process. Sign in with <a href=\"javascript:void(0)\" class=\"text-info\">Facebook</a> or <a href=\"javascript:void(0)\" class=\"text-info\">Google</a>\r\n          </p>\r\n          <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\r\n                  <label>First Name</label>\r\n                  <input type=\"text\" placeholder=\"John\" class=\"form-control\" id=\"txtfname\" name=\"txtfname\" [(ngModel)]=\"txtfname\"  #fName=\"ngModel\" required >\r\n                </div>\r\n                <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\r\n                    <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\r\n                  <label>Last Names</label>\r\n                  <input type=\"text\" placeholder=\"Smith\" class=\"form-control\" id=\"txtlname\" name=\"txtlname\" [(ngModel)]=\"txtlname\"  #LName=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\r\n                    <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"userName.invalid && (userName.dirty || userName.touched)\">\r\n                  <label>Pages User name</label>\r\n                  <input type=\"text\" placeholder=\"yourname.pages.com (this can be changed later)\" class=\"form-control\" id=\"txtusername\" name=\"txtusername\" [(ngModel)]=\"txtusername\"  #userName=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" >\r\n                    <label  *ngIf=\"userName.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\r\n                  <label>Password</label>\r\n                  <input type=\"password\"  placeholder=\"Minimum of 4 Charactors\" class=\"form-control\" id=\"txtpassword\" name=\"txtpassword\" [(ngModel)]=\"txtpassword\"  #password=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" >\r\n                    <label  *ngIf=\"password.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"email.invalid && (email.dirty || email.touched)\">\r\n                  <label>Email</label>\r\n                  <input type=\"email\" placeholder=\"We will send loging details to you\" class=\"form-control\" id=\"txtemail\" name=\"txtemail\" [(ngModel)]=\"txtemail\"  #email=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\r\n                    <label  *ngIf=\"email.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row m-t-10\">\r\n              <div class=\"col-lg-6\">\r\n                <p><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Pages Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></p>\r\n              </div>\r\n              <div class=\"col-lg-6 text-right\">\r\n                <a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\r\n              </div>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Create a new account</button>\r\n          </form>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\" full-width\">\r\n    <div class=\"register-container m-b-10 clearfix\">\r\n      <div class=\"m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up\">\r\n        <div class=\"col-md-2 no-padding d-flex align-items-center\">\r\n          <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\r\n        </div>\r\n        <div class=\"col-md-9 no-padding d-flex align-items-center\">\r\n          <p class=\"hinted-text small inline sm-p-t-10\">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/.pages/session/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/.pages/session/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL3Nlc3Npb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/session/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/.pages/session/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent() {
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register.component.html */ "./src/.pages/session/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/.pages/session/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/.pages/session/session.module.ts":
/*!**********************************************!*\
  !*** ./src/.pages/session/session.module.ts ***!
  \**********************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _session_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.routing */ "./src/.pages/session/session.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/.pages/@pages/components/shared.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/.pages/session/error/error.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/.pages/session/login/login.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/.pages/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/.pages/session/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_session_routing__WEBPACK_IMPORTED_MODULE_4__["SessionRoute"]),
            ],
            declarations: [_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__["LockscreenComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"]]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/.pages/session/session.routing.ts":
/*!***********************************************!*\
  !*** ./src/.pages/session/session.routing.ts ***!
  \***********************************************/
/*! exports provided: SessionRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoute", function() { return SessionRoute; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/.pages/session/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/.pages/session/register/register.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/.pages/session/error/error.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/.pages/session/lockscreen/lockscreen.component.ts");




var SessionRoute = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterPageComponent"]
            }, {
                path: 'error/:type',
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]
            }, {
                path: 'lock',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__["LockscreenComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=session-session-module.js.map