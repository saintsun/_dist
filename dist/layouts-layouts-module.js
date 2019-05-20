(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-layouts-module"],{

/***/ "./src/.pages/layouts/boxed-alt/boxed-alt.component.html":
/*!***************************************************************!*\
  !*** ./src/.pages/layouts/boxed-alt/boxed-alt.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\r\n  <div class=\"jumbotron\">\r\n      <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\r\n        <div class=\"inner\" pg-parallax>\r\n          <!-- START BREADCRUMB -->\r\n           <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\r\n            <li class=\"breadcrumb-item active\">Boxed template</li>\r\n          </ol>\r\n          <!-- END BREADCRUMB --> \r\n        </div>\r\n      </pg-container>\r\n    </div>\r\n    <!-- END JUMBOTRON -->\r\n    <!-- START CONTAINER FLUID -->\r\n    <pg-container>\r\n      <!-- BEGIN PlACE PAGE CONTENT HERE -->\r\n      <!-- END PLACE PAGE CONTENT HERE -->\r\n    </pg-container>\r\n    <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/.pages/layouts/boxed-alt/boxed-alt.component.scss":
/*!***************************************************************!*\
  !*** ./src/.pages/layouts/boxed-alt/boxed-alt.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2xheW91dHMvYm94ZWQtYWx0L2JveGVkLWFsdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/layouts/boxed-alt/boxed-alt.component.ts":
/*!*************************************************************!*\
  !*** ./src/.pages/layouts/boxed-alt/boxed-alt.component.ts ***!
  \*************************************************************/
/*! exports provided: BoxedAltComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedAltComponent", function() { return BoxedAltComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedAltComponent = /** @class */ (function () {
    function BoxedAltComponent(toggler) {
        this.toggler = toggler;
    }
    BoxedAltComponent.prototype.ngOnInit = function () {
        this.toggler.setBodyLayoutClass("box-layout");
        this.toggler.setBodyLayoutClass("menu-pin");
    };
    BoxedAltComponent.prototype.ngOnDestroy = function () {
        //@TODO : USE service
        pg.removeClass(document.body, "box-layout");
    };
    BoxedAltComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boxed-alt',
            template: __webpack_require__(/*! ./boxed-alt.component.html */ "./src/.pages/layouts/boxed-alt/boxed-alt.component.html"),
            styles: [__webpack_require__(/*! ./boxed-alt.component.scss */ "./src/.pages/layouts/boxed-alt/boxed-alt.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], BoxedAltComponent);
    return BoxedAltComponent;
}());



/***/ }),

/***/ "./src/.pages/layouts/boxed/boxed.component.html":
/*!*******************************************************!*\
  !*** ./src/.pages/layouts/boxed/boxed.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\r\n  <div class=\"jumbotron\">\r\n      <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\r\n        <div class=\"inner\" pg-parallax>\r\n          <!-- START BREADCRUMB -->\r\n           <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\r\n            <li class=\"breadcrumb-item active\">Boxed template</li>\r\n          </ol>\r\n          <!-- END BREADCRUMB --> \r\n        </div>\r\n      </pg-container>\r\n    </div>\r\n    <!-- END JUMBOTRON -->\r\n    <!-- START CONTAINER FLUID -->\r\n    <pg-container>\r\n      <!-- BEGIN PlACE PAGE CONTENT HERE -->\r\n      <!-- END PLACE PAGE CONTENT HERE -->\r\n    </pg-container>\r\n    <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/.pages/layouts/boxed/boxed.component.scss":
/*!*******************************************************!*\
  !*** ./src/.pages/layouts/boxed/boxed.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2xheW91dHMvYm94ZWQvYm94ZWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/layouts/boxed/boxed.component.ts":
/*!*****************************************************!*\
  !*** ./src/.pages/layouts/boxed/boxed.component.ts ***!
  \*****************************************************/
/*! exports provided: BoxedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedComponent", function() { return BoxedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedComponent = /** @class */ (function () {
    function BoxedComponent(toggler) {
        this.toggler = toggler;
    }
    BoxedComponent.prototype.ngOnInit = function () {
        this.toggler.setBodyLayoutClass("box-layout");
        this.toggler.setBodyLayoutClass("menu-pin");
    };
    BoxedComponent.prototype.ngOnDestroy = function () {
        //@TODO : USE service
        pg.removeClass(document.body, "box-layout");
        pg.removeClass(document.body, "menu-pin");
    };
    BoxedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boxed',
            template: __webpack_require__(/*! ./boxed.component.html */ "./src/.pages/layouts/boxed/boxed.component.html"),
            styles: [__webpack_require__(/*! ./boxed.component.scss */ "./src/.pages/layouts/boxed/boxed.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], BoxedComponent);
    return BoxedComponent;
}());



/***/ }),

/***/ "./src/.pages/layouts/default/default.component.html":
/*!***********************************************************!*\
  !*** ./src/.pages/layouts/default/default.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\r\n  <div class=\"jumbotron\">\r\n    <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\r\n      <div class=\"inner\" pg-parallax>\r\n        <!-- START BREADCRUMB -->\r\n         <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\r\n          <li class=\"breadcrumb-item active\">Blank template</li>\r\n        </ol>\r\n        <!-- END BREADCRUMB --> \r\n      </div>\r\n    </pg-container>\r\n  </div>\r\n  <!-- END JUMBOTRON -->\r\n  <!-- START CONTAINER FLUID -->\r\n  <pg-container>\r\n    <!-- BEGIN PlACE PAGE CONTENT HERE -->\r\n    <!-- END PLACE PAGE CONTENT HERE -->\r\n  </pg-container>\r\n  <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/.pages/layouts/default/default.component.scss":
/*!***********************************************************!*\
  !*** ./src/.pages/layouts/default/default.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/.pages/layouts/default/default.component.ts":
/*!*********************************************************!*\
  !*** ./src/.pages/layouts/default/default.component.ts ***!
  \*********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
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

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/.pages/layouts/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/.pages/layouts/default/default.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/.pages/layouts/layouts.module.ts":
/*!**********************************************!*\
  !*** ./src/.pages/layouts/layouts.module.ts ***!
  \**********************************************/
/*! exports provided: LayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageModule", function() { return LayoutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts.routing */ "./src/.pages/layouts/layouts.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/.pages/@pages/components/shared.module.ts");
/* harmony import */ var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secondary/secondary.component */ "./src/.pages/layouts/secondary/secondary.component.ts");
/* harmony import */ var _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secondary-light/secondary.component */ "./src/.pages/layouts/secondary-light/secondary.component.ts");
/* harmony import */ var _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./secondary-horizontal/secondary-horizontal.component */ "./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/default.component */ "./src/.pages/layouts/default/default.component.ts");
/* harmony import */ var _teknik_tabs_teknik_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teknik-tabs/teknik-tabs.component */ "./src/.pages/layouts/teknik-tabs/teknik-tabs.component.ts");
/* harmony import */ var _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boxed/boxed.component */ "./src/.pages/layouts/boxed/boxed.component.ts");
/* harmony import */ var _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./boxed-alt/boxed-alt.component */ "./src/.pages/layouts/boxed-alt/boxed-alt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Dependencies



//Router

//Core Pages Layout Components

//Thirdparty components
//Sample Demo pages







var LayoutPageModule = /** @class */ (function () {
    function LayoutPageModule() {
    }
    LayoutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_layouts_routing__WEBPACK_IMPORTED_MODULE_3__["LayoutsRoutes"]),
            ],
            declarations: [_secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryComponent"], _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_6__["SecondaryComponentLight"], _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_7__["SecondaryHorizontalComponent"], _default_default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"], _teknik_tabs_teknik_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TeknikTabsComponent"], _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_10__["BoxedComponent"], _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_11__["BoxedAltComponent"]],
            providers: []
        })
    ], LayoutPageModule);
    return LayoutPageModule;
}());



/***/ }),

/***/ "./src/.pages/layouts/layouts.routing.ts":
/*!***********************************************!*\
  !*** ./src/.pages/layouts/layouts.routing.ts ***!
  \***********************************************/
/*! exports provided: LayoutsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsRoutes", function() { return LayoutsRoutes; });
/* harmony import */ var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary/secondary.component */ "./src/.pages/layouts/secondary/secondary.component.ts");
/* harmony import */ var _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary-light/secondary.component */ "./src/.pages/layouts/secondary-light/secondary.component.ts");
/* harmony import */ var _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secondary-horizontal/secondary-horizontal.component */ "./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/default.component */ "./src/.pages/layouts/default/default.component.ts");
/* harmony import */ var _teknik_tabs_teknik_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teknik-tabs/teknik-tabs.component */ "./src/.pages/layouts/teknik-tabs/teknik-tabs.component.ts");
/* harmony import */ var _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boxed/boxed.component */ "./src/.pages/layouts/boxed/boxed.component.ts");
/* harmony import */ var _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boxed-alt/boxed-alt.component */ "./src/.pages/layouts/boxed-alt/boxed-alt.component.ts");







var LayoutsRoutes = [
    {
        path: '',
        children: [{
                path: 'default',
                component: _default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
                data: {
                    title: 'default',
                    boxed: false
                }
            }, {
                path: 'teknik-tabs',
                component: _teknik_tabs_teknik_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TeknikTabsComponent"],
                data: {
                    title: 'teknik-tabs',
                    boxed: false
                }
            }, {
                path: 'secondary',
                component: _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_0__["SecondaryComponent"],
                data: {
                    title: '',
                    boxed: false
                }
            }, {
                path: 'secondary-light',
                component: _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_1__["SecondaryComponentLight"],
                data: {
                    title: '',
                    boxed: false
                }
            }, {
                path: 'boxed',
                component: _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_5__["BoxedComponent"],
                data: {
                    boxed: true
                }
            }, {
                path: 'boxed-alt',
                component: _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_6__["BoxedAltComponent"],
                data: {
                    boxed: true
                }
            }, {
                path: 'with-sidebar',
                component: _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["SecondaryHorizontalComponent"],
                data: {
                    title: 'Builder'
                }
            },
            {
                path: 'horizontal-blank',
                component: _default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
            }]
    }
];


/***/ }),

/***/ "./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.html":
/*!*************************************************************************************!*\
  !*** ./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\r\n<div class=\"container full-height no-padding\">\r\n  <div class=\"secondary-sidebar-toggle bg-master-lighter padding-10 text-center d-lg-none d-xl-none\">\r\n    <a href=\"javascript:void(0);\" (click)=\"toggleSecondarySideBar($event)\"><i class=\"pg pg-more\"></i></a>\r\n  </div>\r\n  <pg-secondary-sidebar extraClass=\"light\">\r\n      <p class=\"menu-title\">BROWSE</p>\r\n      <ul class=\"main-menu\">\r\n        <li class=\"\">\r\n          <a href=\"javascript:void(0);\">\r\n            <span class=\"title\">pages frontend</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"\">\r\n          <a href=\"javascript:void(0);\">\r\n            <span class=\"title\">webarch admin</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <p class=\"menu-title m-t-30\">YOUR FAVOURITE</p>\r\n      <pg-menu-items-alt [Items]=\"menuItems\"></pg-menu-items-alt>\r\n  </pg-secondary-sidebar>\r\n    <!-- END SECONDARY SIDEBAR MENU -->\r\n    <div class=\"inner-content full-height  p-r-20 p-l-20\">\r\n        <div class=\"page-content-wrapper content-builder active full-height\" >\r\n            <div class=\"content\">\r\n              <div class=\"container container-fixed-lg\">\r\n                <ul class=\"breadcrumb p-l-0\">\r\n                  <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:void(0)\">Home</a>\r\n                  </li>\r\n                  <li class=\"breadcrumb-item active\">Plain template</li>\r\n                </ul>\r\n                <h3 class=\"page-title\">Page Title</h3>\r\n              </div>\r\n              <div class=\" container container-fixed-lg\">\r\n                \r\n              </div>\r\n            </div>\r\n            <div class=\"container container-fixed-lg footer\">\r\n              <div class=\"copyright sm-text-center\">\r\n                <p class=\"small no-margin pull-left sm-pull-reset\"><span class=\"hint-text\">Copyright © 2014</span> <span class=\"font-montserrat\">REVOX</span>. <span class=\"hint-text\">All rights reserved.</span> <span class=\"sm-block\"><a class=\"m-l-10 m-r-10\" href=\"javascript:void(0)\">Terms of use</a> | <a class=\"m-l-10\" href=\"javascript:void(0)\">Privacy Policy</a></span></p>\r\n                <p class=\"small no-margin pull-right sm-pull-reset\"><a href=\"javascript:void(0)\">Hand-crafted</a> <span class=\"hint-text\">&amp; Made with Love ®</span></p>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2xheW91dHMvc2Vjb25kYXJ5LWhvcml6b250YWwvc2Vjb25kYXJ5LWhvcml6b250YWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SecondaryHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryHorizontalComponent", function() { return SecondaryHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryHorizontalComponent = /** @class */ (function () {
    function SecondaryHorizontalComponent(toggler) {
        this.toggler = toggler;
        this._secondarySideBar = false;
        this.menuItems = [
            {
                label: "Collection",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "layers",
                badgeCount: "5"
            },
            {
                label: "Playlist",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "award",
            },
            {
                label: "Case Study",
                routerLink: "/",
                iconType: "fi",
                iconName: "inbox",
                toggle: "open",
                submenu: [
                    {
                        label: "Bootstrap 4",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "B4",
                    },
                    {
                        label: "Made with Pages",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "MP",
                    }
                ]
            }
        ];
    }
    SecondaryHorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
            _this.toggler.setPageContainer("full-height");
            _this.toggler.setContent("full-height");
        });
    };
    SecondaryHorizontalComponent.prototype.toggleSecondarySideBar = function (event) {
        this._secondarySideBar = (this._secondarySideBar == true ? false : true);
        //Pass event object to position it to the toggle button
        var subData = {
            $event: event,
            open: this._secondarySideBar
        };
        this.toggler.toggleSecondarySideBar(subData);
    };
    SecondaryHorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secondary-horizontal',
            template: __webpack_require__(/*! ./secondary-horizontal.component.html */ "./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.html"),
            styles: [__webpack_require__(/*! ./secondary-horizontal.component.scss */ "./src/.pages/layouts/secondary-horizontal/secondary-horizontal.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondaryHorizontalComponent);
    return SecondaryHorizontalComponent;
}());



/***/ }),

/***/ "./src/.pages/layouts/secondary-light/secondary.component.html":
/*!*********************************************************************!*\
  !*** ./src/.pages/layouts/secondary-light/secondary.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\r\n<pg-secondary-sidebar extraClass=\"light\">\r\n  <div class=\" m-b-30 m-l-30 m-r-30 d-sm-none d-md-block d-lg-block d-xl-block\">\r\n      <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block btn-compose\">Compose</a>\r\n    </div>\r\n    <p class=\"menu-title\">BROWSE</p>\r\n    <ul class=\"main-menu\">\r\n      <li class=\"active\">\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"\">\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\r\n        </a>\r\n        <ul class=\"sub-menu no-padding\">\r\n          <li>\r\n            <a href=\"javascript:void(0);\">\r\n              <span class=\"title\">Important</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0);\">\r\n              <span class=\"title\">Labeled</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\r\n          <span class=\"badge pull-right\">10</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\r\n    <ul class=\"sub-menu no-padding\">\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Documents</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Flagged</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Images</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n</pg-secondary-sidebar>\r\n<!-- END SECONDARY SIDEBAR MENU -->\r\n<div class=\"inner-content full-height\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/.pages/layouts/secondary-light/secondary.component.scss":
/*!*********************************************************************!*\
  !*** ./src/.pages/layouts/secondary-light/secondary.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2xheW91dHMvc2Vjb25kYXJ5LWxpZ2h0L3NlY29uZGFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/layouts/secondary-light/secondary.component.ts":
/*!*******************************************************************!*\
  !*** ./src/.pages/layouts/secondary-light/secondary.component.ts ***!
  \*******************************************************************/
/*! exports provided: SecondaryComponentLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryComponentLight", function() { return SecondaryComponentLight; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryComponentLight = /** @class */ (function () {
    function SecondaryComponentLight(toggler) {
        this.toggler = toggler;
    }
    SecondaryComponentLight.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
        this.toggler.setHeaderClass("light");
    };
    SecondaryComponentLight = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secondary',
            template: __webpack_require__(/*! ./secondary.component.html */ "./src/.pages/layouts/secondary-light/secondary.component.html"),
            styles: [__webpack_require__(/*! ./secondary.component.scss */ "./src/.pages/layouts/secondary-light/secondary.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondaryComponentLight);
    return SecondaryComponentLight;
}());



/***/ }),

/***/ "./src/.pages/layouts/secondary/secondary.component.html":
/*!***************************************************************!*\
  !*** ./src/.pages/layouts/secondary/secondary.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\r\n<pg-secondary-sidebar>\r\n  <div class=\" m-b-30 m-l-30 m-r-30 d-sm-none d-md-block d-lg-block d-xl-block\">\r\n      <a href=\"javascript:void(0);\" class=\"btn btn-complete btn-block btn-compose\">Compose</a>\r\n    </div>\r\n    <p class=\"menu-title\">BROWSE</p>\r\n    <ul class=\"main-menu\">\r\n      <li class=\"active\">\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"\">\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\r\n        </a>\r\n        <ul class=\"sub-menu no-padding\">\r\n          <li>\r\n            <a href=\"javascript:void(0);\">\r\n              <span class=\"title\">Important</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0);\">\r\n              <span class=\"title\">Labeled</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0);\">\r\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\r\n          <span class=\"badge pull-right\">10</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\r\n    <ul class=\"sub-menu no-padding\">\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Documents</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Flagged</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Images</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n</pg-secondary-sidebar>\r\n<!-- END SECONDARY SIDEBAR MENU -->\r\n<div class=\"inner-content full-height\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/.pages/layouts/secondary/secondary.component.scss":
/*!***************************************************************!*\
  !*** ./src/.pages/layouts/secondary/secondary.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2xheW91dHMvc2Vjb25kYXJ5L3NlY29uZGFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/layouts/secondary/secondary.component.ts":
/*!*************************************************************!*\
  !*** ./src/.pages/layouts/secondary/secondary.component.ts ***!
  \*************************************************************/
/*! exports provided: SecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryComponent", function() { return SecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryComponent = /** @class */ (function () {
    function SecondaryComponent(toggler) {
        this.toggler = toggler;
    }
    SecondaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
    };
    SecondaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secondary',
            template: __webpack_require__(/*! ./secondary.component.html */ "./src/.pages/layouts/secondary/secondary.component.html"),
            styles: [__webpack_require__(/*! ./secondary.component.scss */ "./src/.pages/layouts/secondary/secondary.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondaryComponent);
    return SecondaryComponent;
}());



/***/ }),

/***/ "./src/.pages/layouts/teknik-tabs/teknik-tabs.component.html":
/*!*******************************************************************!*\
  !*** ./src/.pages/layouts/teknik-tabs/teknik-tabs.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\r\n  <div class=\"jumbotron\">\r\n    <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\r\n      <div class=\"inner\" pg-parallax>\r\n        <!-- START BREADCRUMB -->\r\n         <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\r\n          <li class=\"breadcrumb-item active\">Teknik Tabs</li>\r\n        </ol>\r\n        <!-- END BREADCRUMB --> \r\n      </div>\r\n    </pg-container>\r\n  </div>\r\n  <!-- END JUMBOTRON -->\r\n  <!-- START CONTAINER FLUID -->\r\n  <pg-container>\r\n    <!-- BEGIN PlACE PAGE CONTENT HERE -->\r\n    <!-- END PLACE PAGE CONTENT HERE -->\r\n  </pg-container>\r\n  <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/.pages/layouts/teknik-tabs/teknik-tabs.component.scss":
/*!*******************************************************************!*\
  !*** ./src/.pages/layouts/teknik-tabs/teknik-tabs.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2xheW91dHMvdGVrbmlrLXRhYnMvdGVrbmlrLXRhYnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/layouts/teknik-tabs/teknik-tabs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/layouts/teknik-tabs/teknik-tabs.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeknikTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeknikTabsComponent", function() { return TeknikTabsComponent; });
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

var TeknikTabsComponent = /** @class */ (function () {
    function TeknikTabsComponent() {
    }
    TeknikTabsComponent.prototype.ngOnInit = function () {
    };
    TeknikTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./teknik-tabs.component.html */ "./src/.pages/layouts/teknik-tabs/teknik-tabs.component.html"),
            styles: [__webpack_require__(/*! ./teknik-tabs.component.scss */ "./src/.pages/layouts/teknik-tabs/teknik-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeknikTabsComponent);
    return TeknikTabsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-layouts-module.js.map