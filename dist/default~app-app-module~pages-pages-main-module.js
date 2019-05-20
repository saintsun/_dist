(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-app-module~pages-pages-main-module"],{

/***/ "./src/.pages/@pages/animations/fade-animations.ts":
/*!*********************************************************!*\
  !*** ./src/.pages/@pages/animations/fade-animations.ts ***!
  \*********************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
]);


/***/ }),

/***/ "./src/.pages/@pages/components/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/.pages/@pages/components/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header {{extraClass}} {{_headerClass}}\" >\r\n  <div *ngIf=\"boxed; else nonBoxedBlock\" class=\"container\">\r\n    <div class=\"header-inner\"  *ngIf=\"!isHorizontalLayout; else boxedHorizontal\">\r\n      <ng-container *ngTemplateOutlet=\"nonBoxedBlock\"></ng-container>\r\n    </div>\r\n    <ng-template #boxedHorizontal>\r\n        <ng-container *ngTemplateOutlet=\"nonBoxedBlock\"></ng-container>\r\n    </ng-template>\r\n  </div>\r\n  <ng-template #nonBoxedBlock><ng-content></ng-content>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/.pages/@pages/components/header/header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/.pages/@pages/components/header/header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/@pages/components/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/@pages/components/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(toggler) {
        this.toggler = toggler;
        this._headerClass = "";
        this.boxed = false;
        this.extraClass = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isHorizontalLayout = pg.isHorizontalLayout;
        this._service = this.toggler.headerClass
            .subscribe(function (state) {
            _this._headerClass = state;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._service.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "boxed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "extraClass", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/.pages/@pages/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/.pages/@pages/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.html":
/*!*************************************************************************************!*\
  !*** ./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-bar header-sm-height\" #menuWrapper [class.open]=\"_horizontalMobileMenu\">\r\n  <a href=\"javascript:void(0)\" (click)=\"toggleHorizontalMenu()\" class=\"btn-link toggle-sidebar d-lg-none pg pg-close\">\r\n  </a>\r\n  <ul (cdkObserveContent)=\"_onContentChanges()\">\r\n      <li *ngFor=\"let item of _renduerMenuItems\" [class.open]=\"item.open || item.mToggle ==='open'\" [class.opening]=\"item.opening\" [class.more]=\"item.type\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a href=\"javascript:void(0);\" *ngIf=\"item.submenu;else singleLink\" (click)=\"toggleLink($event,item)\">\r\n            <span class=\"title\" >\r\n              <ng-template [ngIf]=\"item.type != 'more'\">{{ item.label }}</ng-template>\r\n              <i *ngIf=\"item.type\" class=\"pg pg-more\"></i>  \r\n            </span>\r\n            <span  *ngIf=\"item.submenu && !item.type\" class=\" arrow\" [class.open]=\"item.mToggle ==='open'\"></span>\r\n        </a>\r\n        <ng-template #singleLink>\r\n          <a *ngIf=\"item.routerLink\" [routerLink]=\"[item.routerLink]\"><span class=\"title\">{{ item.label }}</span>\r\n          </a>\r\n          <a *ngIf=\"item.externalLink\" href=\"{{item.externalLink}}\" [attr.target]=\"item.target\" ><span class=\"title\">{{ item.label }}</span>\r\n          </a>\r\n        </ng-template>\r\n        <ul *ngIf=\"item.submenu\">\r\n            <li *ngFor=\"let child of item.submenu\">\r\n              <a href=\"javascript:void(0);\" *ngIf=\"child.submenu;else singleLinkChild\"><span class=\"title\">{{ child.label }}</span>\r\n                  <span  *ngIf=\"item.submenu\" class=\" arrow\" [class.open]=\"item.mToggle ==='open'\"></span>\r\n              </a>\r\n              <ng-template #singleLinkChild>\r\n                <a *ngIf=\"child.routerLink\" [routerLink]=\"[child.routerLink]\"><span class=\"title\">{{ child.label }}</span>\r\n                </a>\r\n                <a *ngIf=\"child.externalLink\" href=\"{{child.externalLink}}\" [attr.target]=\"child.target\"><span class=\"title\">{{ child.label }}</span>\r\n                </a>\r\n              </ng-template>\r\n                <ul *ngIf=\"child.submenu\" class=\"sub-menu\">\r\n                    <li *ngFor=\"let lvl2 of child.submenu\">\r\n                        <a *ngIf=\"lvl2.routerLink\" [routerLink]=\"[lvl2.routerLink]\"><span class=\"title\">{{ lvl2.label }}</span>\r\n                        </a>\r\n                        <a *ngIf=\"lvl2.externalLink\" [routerLink]=\"[lvl2.externalLink]\" [attr.target]=\"lvl2.target\" ><span class=\"title\">{{ item.label }}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <div class=\"ghost-nav-dropdown\" [ngStyle]=\"item.ghost\"></div>\r\n      </li>\r\n  </ul>\r\n  <ul #menuItemsList class=\"ghost-ul d-none d-lg-block\">\r\n      <li *ngFor=\"let item of menuItems\">\r\n          <a href=\"javascript:void(0);\">\r\n            <span class=\"title\">{{ item.label }}</span>\r\n            <span  *ngIf=\"item.submenu\" class=\" arrow\"></span>\r\n          </a>\r\n        </li>\r\n  </ul>\r\n  <ng-template [ngTemplateOutlet]=\"mobileSidebarFooter\"></ng-template>\r\n</div>\r\n<div class=\"horizontal-menu-backdrop-dekstop\" [style.display]=\"(currentItem?.open) ? 'block':'none'\" (click)=\"closeHorizontalMenu()\"></div>\r\n<div class=\"horizontal-menu-backdrop\" [style.display]=\"_horizontalMobileMenu ? 'block':'none'\" (click)=\"toggleHorizontalMenu()\"></div>"

/***/ }),

/***/ "./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-app-menu .menu-bar > ul {\n  flex-flow: row; }\n\n.horizontal-app-menu .ghost-nav-dropdown {\n  height: 0; }\n\n.horizontal-app-menu .ghost-ul {\n  visibility: hidden;\n  position: absolute;\n  pointer-events: none; }\n\n.horizontal-app-menu .horizontal-menu-backdrop-dekstop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy8ucGFnZXMvQHBhZ2VzL2NvbXBvbmVudHMvaG9yaXpvbnRhbC1tZW51L0U6XFxUVE1TLTNcXEVLVlQvc3JjXFwucGFnZXNcXEBwYWdlc1xcY29tcG9uZW50c1xcaG9yaXpvbnRhbC1tZW51XFxob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFjLEVBQ2I7O0FBSEw7RUFLUSxVQUFTLEVBQ1o7O0FBTkw7RUFRUSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLHFCQUFvQixFQUN2Qjs7QUFYTDtFQWFRLGdCQUFlO0VBQ2YsT0FBSztFQUNMLFVBQVM7RUFDVCxTQUFRO0VBQ1IsUUFBTztFQUNQLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL2hvcml6b250YWwtbWVudS9ob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9yaXpvbnRhbC1hcHAtbWVudSB7XHJcbiAgICAubWVudS1iYXIgPiB1bHtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgfVxyXG4gICAgLmdob3N0LW5hdi1kcm9wZG93bntcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZ2hvc3QtdWx7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtYmFja2Ryb3AtZGVrc3RvcHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(toggler) {
        var _this = this;
        this.toggler = toggler;
        this.menuItems = [];
        this._renduerMenuItems = [];
        this._hideExtra = 0;
        this.currentItem = null;
        this._horizontalMobileMenu = false;
        //Simple hack flag to check if its wrapped
        this._wrapped = false;
        this._service = this.toggler.mobileHorizontaMenu
            .subscribe(function (state) {
            _this._horizontalMobileMenu = state;
            _this.closeHorizontalMenu();
        });
    }
    Object.defineProperty(HorizontalMenuComponent.prototype, "HideExtra", {
        set: function (value) {
            this._hideExtra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalMenuComponent.prototype, "Items", {
        set: function (value) {
            this.menuItems = value;
            this._renduerMenuItems = this.menuItems.slice();
        },
        enumerable: true,
        configurable: true
    });
    HorizontalMenuComponent.prototype.ngOnInit = function () {
    };
    HorizontalMenuComponent.prototype.ngOnDestroy = function () {
        this._service.unsubscribe();
    };
    HorizontalMenuComponent.prototype.ngAfterContentInit = function () {
    };
    HorizontalMenuComponent.prototype.ngOnChanges = function () {
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (pg.isVisibleSm() || pg.isVisibleXs())
                return false;
            _this._onContentChanges();
        });
    };
    HorizontalMenuComponent.prototype.closeHorizontalMenu = function () {
        if (!this.currentItem) {
            return;
        }
        this.currentItem["open"] = false;
        this.currentItem["opening"] = false;
        this.currentItem["ghost"] = {
            visibility: "hidden"
        };
    };
    HorizontalMenuComponent.prototype.toggleLink = function (event, item) {
        //Mobile
        if (pg.isVisibleSm() || pg.isVisibleXs()) {
            if (this.currentItem && this.currentItem != item) {
                this.currentItem["mToggle"] = 'close';
            }
            this.currentItem = item;
            item.mToggle = (item.mToggle === 'close' ? 'open' : 'close');
            return false;
        }
        //Desktop
        if (this.currentItem && this.currentItem != item) {
            this.currentItem["open"] = false;
            this.currentItem["opening"] = false;
            this.currentItem["ghost"] = {
                visibility: "hidden"
            };
        }
        this.currentItem = item;
        var elParent = event.currentTarget.parentNode;
        if (item["open"]) {
            var el = elParent.querySelector("ul");
            var rect = el.getBoundingClientRect();
            item.ghost = {
                width: rect.width + 'px',
                height: 0,
                zIndex: "auto"
            };
            item["open"] = false;
            setTimeout(function () {
                item["opening"] = false;
            }, 240);
        }
        else {
            item["open"] = true;
            setTimeout(function () {
                var el = elParent.querySelector("ul");
                var rect = el.getBoundingClientRect();
                item.ghost = {
                    height: "0",
                    width: rect.width + 'px',
                    zIndex: "auto"
                };
                item.ghost = {
                    width: rect.width + 'px',
                    height: rect.height + 'px',
                    zIndex: "auto"
                };
                setTimeout(function () {
                    item["opening"] = true;
                }, 140);
            }, 0);
        }
    };
    HorizontalMenuComponent.prototype.onResize = function (event) {
        var _this = this;
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(function () {
            if (pg.isVisibleSm() || pg.isVisibleXs()) {
                _this._renduerMenuItems = _this.menuItems.slice();
                return false;
            }
            _this._onContentChanges();
        }, 140);
    };
    HorizontalMenuComponent.prototype._onContentChanges = function () {
        //Cache User Items
        this._renduerMenuItems = this.menuItems.slice();
        var parentWidth = this._menuItemsList.nativeElement.offsetWidth;
        var children = this._menuItemsList.nativeElement.childNodes;
        var totalChildrenWidth = 0;
        var liCount = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i]["nodeName"] == "LI") {
                totalChildrenWidth = totalChildrenWidth + children[i].offsetWidth;
                if (totalChildrenWidth > this._menuWrapper.nativeElement.offsetWidth) {
                    this.wrap(liCount);
                    break;
                }
                liCount++;
            }
        }
        //@TODO:Will Force Wrap
        if (!this._wrapped)
            this.wrap(liCount);
    };
    HorizontalMenuComponent.prototype.wrap = function (startIndex) {
        this._wrapped = true;
        startIndex--;
        startIndex = startIndex - this._hideExtra;
        var temp = {
            type: "more",
            toggle: "close",
            submenu: []
        };
        for (var i = startIndex; i < this._renduerMenuItems.length; i++) {
            temp["submenu"].push(this._renduerMenuItems[i]);
        }
        this._renduerMenuItems.splice(startIndex, this._renduerMenuItems.length);
        this._renduerMenuItems.push(temp);
    };
    HorizontalMenuComponent.prototype.toggleHorizontalMenu = function () {
        if (this._horizontalMobileMenu) {
            this._horizontalMobileMenu = false;
        }
        else {
            this._horizontalMobileMenu = true;
        }
        this.toggler.toggleMobileHorizontalMenu(this._horizontalMobileMenu);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuItemsList'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HorizontalMenuComponent.prototype, "_menuItemsList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HorizontalMenuComponent.prototype, "_menuWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('mobileSidebarFooter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], HorizontalMenuComponent.prototype, "mobileSidebarFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HorizontalMenuComponent.prototype, "HideExtra", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HorizontalMenuComponent.prototype, "Items", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HorizontalMenuComponent.prototype, "onResize", null);
    HorizontalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-horizontal-menu',
            template: __webpack_require__(/*! ./horizontal-menu.component.html */ "./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/.pages/@pages/components/horizontal-menu/horizontal-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/list-view/list-view.module.ts":
/*!********************************************************************!*\
  !*** ./src/.pages/@pages/components/list-view/list-view.module.ts ***!
  \********************************************************************/
/*! exports provided: pgListViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgListViewModule", function() { return pgListViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var pgListViewModule = /** @class */ (function () {
    function pgListViewModule() {
    }
    pgListViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]
            ],
            declarations: []
        })
    ], pgListViewModule);
    return pgListViewModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/quickview/message.ts":
/*!***********************************************************!*\
  !*** ./src/.pages/@pages/components/quickview/message.ts ***!
  \***********************************************************/
/*! exports provided: chatMessage, chatHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatMessage", function() { return chatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatHistory", function() { return chatHistory; });
//Sample Note Class 
var chatMessage = /** @class */ (function () {
    function chatMessage() {
    }
    return chatMessage;
}());

var chatHistory = /** @class */ (function () {
    function chatHistory() {
    }
    return chatHistory;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/quickview/note.ts":
/*!********************************************************!*\
  !*** ./src/.pages/@pages/components/quickview/note.ts ***!
  \********************************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
//Sample Note Class 
var Note = /** @class */ (function () {
    function Note() {
    }
    return Note;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/quickview/quickview.component.html":
/*!*************************************************************************!*\
  !*** ./src/.pages/@pages/components/quickview/quickview.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"quickview\" class=\"quickview-wrapper\" [class.open]=isOpen>\r\n<!-- Nav tabs -->\r\n<tabset>\r\n\t<tab heading=\"Notes\" id=\"quickview-notes\" customClass=\"full-height\">\r\n\t  <div class=\"view-port clearfix quickview-notes\" [class.push]=\"isNoteOpen\" id=\"note-views\">\r\n\t    <!-- BEGIN Note List !-->\r\n\t    <div class=\"view\" id=\"quick-note-list\">\r\n\t\t\t\t<div class=\"full-height d-flex flex-column list\">\r\n\t\t\t\t\t<div class=\"toolbar clearfix\">\r\n\t\t\t\t\t\t<ul class=\"pull-right \">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a class=\"delete-note-link\" (click)=\"deleteMode()\" [class.selected]=\"deleteNoteMode\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a class=\"new-note-link\" (click)=\"composeNote()\" [class.hide]=\"deleteNoteMode\"><i class=\"fa fa-plus\"></i></a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<button class=\"btn-remove-notes btn btn-xs btn-block\" [class.hide]=\"!deleteNoteMode\" (click)=\"deleteNote()\"><i class=\"fa fa-times\"></i> Delete</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ul perfectScrollbar class=\"full-height\">\r\n\t\t\t\t\t\t<!-- BEGIN Note Item !-->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- END Note List !-->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t    </div>\r\n\t    <!-- END Note List !-->\r\n\t    <div class=\"view note\" id=\"quick-note\">\r\n\t\t\t\t\t<div class=\"extra-component\" *ngIf=\"selectedNote\">\r\n\t\t\t\t\t\t\t<div class=\"top\">\r\n\t\t\t\t\t\t\t\t<span>{{selectedNote.date | date:'dd LLLL yyyy'}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<quill-editor class=\"full-height full-width\" placeholder=\"\" [(ngModel)]=\"noteText\">\r\n\t\t\t\t\t\t\t<ul quill-editor-toolbar class=\"ql-toolbar ql-snow\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<button (click)=\"toggleNotesView()\" class=\"close-note-link\"><i class=\"pg pg-arrow_left\"></i></button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"ql-bold\" [title]=\"'Bold'\"></button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"ql-italic\" [title]=\"'Italic'\"></button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"ql-formats\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"ql-link\" [title]=\"'Link'\"></button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</quill-editor>\r\n\t    </div>\r\n\t  </div>\r\n\t\t\r\n\t</tab>\r\n\t<tab heading=\"Alerts\" id=\"quickview-alerts\" customClass=\"full-height\">\r\n\t  <div class=\"view-port clearfix\" id=\"alerts\">\r\n\t    <!-- BEGIN Alerts View !-->\r\n\t    <div class=\"view bg-white\">\r\n\t\t\t\t<div class=\"full-height d-flex flex-column\">\r\n\t\t\t\t\t<!-- BEGIN View Header !-->\r\n\t\t\t\t\t<div class=\"navbar navbar-default navbar-sm\">\r\n\t\t\t\t\t\t<div class=\"navbar-inner\">\r\n\t\t\t\t\t\t\t<!-- BEGIN Header Controler !-->\r\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"inline action p-l-10 link text-master\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\r\n\t\t\t\t\t\t\t\t<i class=\"pg pg-more\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<!-- END Header Controler !-->\r\n\t\t\t\t\t\t\t<div class=\"view-heading\">\r\n\t\t\t\t\t\t\t\tNotications\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- BEGIN Header Controler !-->\r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"inline action p-r-10 pull-right link text-master\">\r\n\t\t\t\t\t\t\t\t<i class=\"pg pg-search\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<!-- END Header Controler !-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- END View Header !-->\r\n\t\t\t\t\t<!-- BEGIN Alert List !-->\r\n\t\t\t\t\t<div perfectScrollbar class=\"full-height list-view boreded no-top-border\">\r\n\t\t\t\t\t\t<!-- BEGIN List Group !-->\r\n\t\t\t\t\t\t<div class=\"list-view-group-container\">\r\n\t\t\t\t\t\t\t<!-- BEGIN List Group Header!-->\r\n\t\t\t\t\t\t\t<div class=\"list-view-group-header text-uppercase\">\r\n\t\t\t\t\t\t\t\tCalendar\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END List Group Header!-->\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\r\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\r\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning fs-10\"><i class=\"fa fa-circle\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-l-10 overflow-ellipsis fs-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master\">David Nester Birthday</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-r-10 ml-auto fs-12 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning\">Today <br></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master\">All Day</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\r\n\t\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\r\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\r\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\r\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning fs-10\"><i class=\"fa fa-circle\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-l-10 overflow-ellipsis fs-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master\">Meeting at 2:30</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-r-10 ml-auto fs-12 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning\">Today</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- END List Group !-->\r\n\t\t\t\t\t\t<div class=\"list-view-group-container\">\r\n\t\t\t\t\t\t\t<!-- BEGIN List Group Header!-->\r\n\t\t\t\t\t\t\t<div class=\"list-view-group-header text-uppercase\">\r\n\t\t\t\t\t\t\t\tSocial\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END List Group Header!-->\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\r\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\r\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"p-t-10 p-b-10 align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-complete fs-10\"><i class=\"fa fa-circle\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"col overflow-ellipsis fs-12 p-l-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master link\">Jame Smith commented on your status<br></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master\">“Perfection Simplified - Company Revox\"</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\r\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\r\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\r\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"p-t-10 p-b-10 align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-complete fs-10\"><i class=\"fa fa-circle\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"col overflow-ellipsis fs-12 p-l-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master link\">Jame Smith commented on your status<br></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master\">“Perfection Simplified - Company Revox\"</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"list-view-group-container\">\r\n\t\t\t\t\t\t\t<!-- BEGIN List Group Header!-->\r\n\t\t\t\t\t\t\t<div class=\"list-view-group-header text-uppercase\">\r\n\t\t\t\t\t\t\t\tSever Status\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END List Group Header!-->\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\r\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\r\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"p-t-10 p-b-10 align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-danger fs-10\"><i class=\"fa fa-circle\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"col overflow-ellipsis fs-12 p-l-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master link\">12:13AM GTM, 10230, ID:WR174s<br></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master\">Server Load Exceeted. Take action</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- END Alert List !-->\r\n\t\t\t\t</div>\r\n\t    </div>\r\n\t    <!-- EEND Alerts View !-->\r\n\t  </div>\r\n\t</tab>\r\n\t<tab heading=\"Chat\" id=\"quickview-chat\" active=\"true\" customClass=\"full-height\"> \r\n\t  <div class=\"view-port clearfix\" id=\"chat\">\r\n\t    <div class=\"view bg-white\">\r\n\t      <!-- BEGIN View Header !-->\r\n\t      <div class=\"navbar navbar-default\">\r\n\t        <div class=\"navbar-inner\">\r\n\t          <!-- BEGIN Header Controler !-->\r\n\t          <a href=\"javascript:;\" class=\"inline action p-l-10 link text-master\"  pg-view-trigger parentView=\"chat\" animationType=\"push-parrallax\">\r\n\t            <i class=\"pg pg-plus\"></i>\r\n\t          </a>\r\n\t          <!-- END Header Controler !-->\r\n\t          <div class=\"view-heading\">\r\n\t            Chat List\r\n\t            <div class=\"fs-11\">Show All</div>\r\n\t          </div>\r\n\t          <!-- BEGIN Header Controler !-->\r\n\t          <a href=\"javascript:void(0)\" class=\"inline action p-r-10 pull-right link text-master\">\r\n\t            <i class=\"pg pg-more\"></i>\r\n\t          </a>\r\n\t          <!-- END Header Controler !-->\r\n\t        </div>\r\n\t      </div>\r\n\t      <!-- END View Header !-->\r\n\t      <pg-list-view-container class=\"scrollable full-height\">\r\n\t\t\t\t\t\t<pg-list-item *ngFor=\"let group of userList\">\r\n\t\t\t\t\t\t\t\t<ng-template #ItemHeading>\r\n\t\t\t\t\t\t\t\t\t\t{{group.group}}\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<li class=\"chat-user-list clearfix\"  *ngFor=\"let user of group.users\">\r\n\t\t\t\t\t\t\t\t<a pg-view-trigger parentView=\"chat\" animationType=\"push-parrallax\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"thumbnail-wrapper d32 circular bg-success\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"34\" height=\"34\" alt=\"\" src=\"{{user.img}}\" class=\"col-top\">\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-l-10 \">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-master\">{{user.username}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"block text-master hint-text fs-12\">{{user.lastMessage}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</pg-list-item>\r\n\t\t\t\t</pg-list-view-container>\r\n\t    </div>\r\n\t    <!-- BEGIN Conversation View  !-->\r\n\t    <div class=\"view chat-view bg-white clearfix\">\r\n\t      <!-- BEGIN Header  !-->\r\n\t      <div class=\"navbar navbar-default\">\r\n\t        <div class=\"navbar-inner\" *ngIf=\"chatHistory\">\r\n\t          <a href=\"javascript:;\" class=\"link text-master inline action p-l-10 p-r-10\" pg-view-trigger parentView=\"chat\" animationType=\"push-parrallax\">\r\n\t            <i class=\"pg pg-arrow_left\"></i>\r\n\t          </a>\r\n\t          <div class=\"view-heading\">\r\n\t            {{chatHistory.username}}\r\n\t            <div class=\"fs-11 hint-text\">{{chatHistory.status}}</div>\r\n\t          </div>\r\n\t          <a href=\"javascript:void(0)\" class=\"link text-master inline action p-r-10 pull-right \">\r\n\t            <i class=\"pg pg-more\"></i>\r\n\t          </a>\r\n\t        </div>\r\n\t      </div>\r\n\t      <!-- END Header  !-->\r\n\t      <!-- BEGIN Conversation  !-->\r\n\t      <div class=\"chat-inner\" perfectScrollbar #chatHistoryWrapper>\r\n\t        <!-- BEGIN Message  !-->\r\n\t        <div class=\"message clearfix\"  *ngFor=\"let message of chatHistory?.log\">\r\n\t\t\t\t\t\t<div class=\"profile-img-wrapper m-t-5 inline\" *ngIf=\"message.from != 'me'\">\r\n\t\t\t\t\t\t\t<img class=\"col-top\" width=\"30\" height=\"30\" src=\"{{chatHistory.img}}\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"chat-bubble from-them\"  [class.from-me]=\"message.from == 'me'\" [class.from-them]=\"message.from != 'me'\">\r\n\t\t\t\t\t\t\t{{message.message}}\r\n\t\t\t\t\t\t</div>\r\n\t        </div>\r\n\t        <!-- END Message  !-->\r\n\t      </div>\r\n\t      <!-- BEGIN Conversation  !-->\r\n\t      <!-- BEGIN Chat Input  !-->\r\n\t      <div class=\"b-t b-grey bg-white clearfix p-l-10 p-r-10\">\r\n\t        <div class=\"row\">\r\n\t          <div class=\"col-1 p-t-15\">\r\n\t            <a href=\"javascript:void(0)\" class=\"link text-master\"><i class=\"fa fa-plus-circle\"></i></a>\r\n\t          </div>\r\n\t          <div class=\"col-8 no-padding\">\r\n\t            <input type=\"text\" class=\"form-control chat-input\" [(ngModel)]=\"userMessage\" (keypress)=\"onMessageKeyPress($event)\" placeholder=\"Say something\">\r\n\t          </div>\r\n\t          <div class=\"col-2 link text-master m-l-10 m-t-15 p-l-10 b-l b-grey col-top\">\r\n\t            <a href=\"javascript:void(0)\" class=\"link text-master\"><i class=\"pg pg-camera\"></i></a>\r\n\t          </div>\r\n\t        </div>\r\n\t      </div>\r\n\t      <!-- END Chat Input  !-->\r\n\t    </div>\r\n\t    <!-- END Conversation View  !-->\r\n\t  </div>\r\n\t</tab>\r\n</tabset>\r\n<a class=\"btn-link quickview-toggle\" (click)=\"toggle()\"><i class=\"pg pg-close\"></i></a>\r\n</div>"

/***/ }),

/***/ "./src/.pages/@pages/components/quickview/quickview.component.scss":
/*!*************************************************************************!*\
  !*** ./src/.pages/@pages/components/quickview/quickview.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quickview-wrapper quill-editor {\n  display: table;\n  height: 100%;\n  width: 100%; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow {\n    background: #fcfcfa;\n    height: 35px;\n    width: 100%;\n    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.33); }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow button {\n      width: 39px;\n      padding: 0;\n      transition: all .2s ease; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow button svg {\n        padding-top: 10px;\n        padding-bottom: 10px; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow button:hover {\n        background-color: #fffaf6; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow button:hover .ql-stroke {\n          stroke: #a5a5a5; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow button.ql-active {\n        background-color: #fffaf6; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow .close-note-link {\n      text-align: center;\n      color: #a5a5a5; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow .close-note-link i {\n        padding-top: 10px; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow .ql-formats {\n      height: 35px; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow li {\n      border-right: 1px solid #edecec;\n      width: 40px;\n      margin: 0;\n      padding: 0; }\n  .quickview-wrapper quill-editor .ql-toolbar.ql-snow .ql-stroke {\n      stroke: #a5a5a5; }\n  .quickview-wrapper .ql-editor {\n  padding: 51px 20px 0 45px;\n  font-size: 12px; }\n  .quickview-wrapper .extra-component {\n  position: absolute;\n  top: 51px;\n  text-align: center; }\n  .quickview-wrapper .extra-component .top span {\n    font-style: italic;\n    color: #b0b0a8;\n    font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy8ucGFnZXMvQHBhZ2VzL2NvbXBvbmVudHMvcXVpY2t2aWV3L0U6XFxUVE1TLTNcXEVLVlQvc3JjXFwucGFnZXNcXEBwYWdlc1xcY29tcG9uZW50c1xccXVpY2t2aWV3XFxxdWlja3ZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxlQUFjO0VBQ2QsYUFBWTtFQUNaLFlBQVcsRUE0Q2Q7RUFoREw7SUFNWSxvQkFBa0I7SUFDbEIsYUFBVztJQUNYLFlBQVU7SUFDViwrQ0FBOEMsRUFzQ2pEO0VBL0NUO01BV2dCLFlBQVc7TUFDWCxXQUFVO01BQ1YseUJBQXdCLEVBYzNCO0VBM0JiO1FBZW9CLGtCQUFpQjtRQUNqQixxQkFBb0IsRUFDdkI7RUFqQmpCO1FBbUJvQiwwQkFBeUIsRUFJNUI7RUF2QmpCO1VBcUJ3QixnQkFBYyxFQUNqQjtFQXRCckI7UUF5Qm9CLDBCQUF5QixFQUM1QjtFQTFCakI7TUE2QmdCLG1CQUFrQjtNQUNsQixlQUFhLEVBSWhCO0VBbENiO1FBZ0NvQixrQkFBaUIsRUFDcEI7RUFqQ2pCO01Bb0NnQixhQUFZLEVBQ2Y7RUFyQ2I7TUF1Q2dCLGdDQUErQjtNQUMvQixZQUFXO01BQ1gsVUFBUTtNQUNSLFdBQVUsRUFDYjtFQTNDYjtNQTZDZ0IsZ0JBQWMsRUFDakI7RUE5Q2I7RUFtRFEsMEJBQXlCO0VBQ3pCLGdCQUFlLEVBQ2xCO0VBckRMO0VBdURRLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsbUJBQWtCLEVBUXJCO0VBakVMO0lBNERnQixtQkFBa0I7SUFDbEIsZUFBYztJQUNkLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy8ucGFnZXMvQHBhZ2VzL2NvbXBvbmVudHMvcXVpY2t2aWV3L3F1aWNrdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0cmEgc3R5bGVzXHJcbi5xdWlja3ZpZXctd3JhcHBlcntcclxuICAgIHF1aWxsLWVkaXRvcntcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnFsLXRvb2xiYXIucWwtc25vd3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZmNmY2ZhO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM5cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWY2O1xyXG4gICAgICAgICAgICAgICAgICAgIC5xbC1zdHJva2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTojYTVhNWE1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYucWwtYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsb3NlLW5vdGUtbGlua3tcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNhNWE1YTU7XHJcbiAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xbC1mb3JtYXRze1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWNlYztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xbC1zdHJva2V7XHJcbiAgICAgICAgICAgICAgICBzdHJva2U6I2E1YTVhNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnFsLWVkaXRvcntcclxuICAgICAgICBwYWRkaW5nOiA1MXB4IDIwcHggMCA0NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5leHRyYS1jb21wb25lbnR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnRvcHtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjBiMGE4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/.pages/@pages/components/quickview/quickview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/.pages/@pages/components/quickview/quickview.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewComponent", function() { return QuickviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
/* harmony import */ var _quickview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickview.service */ "./src/.pages/@pages/components/quickview/quickview.service.ts");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note */ "./src/.pages/@pages/components/quickview/note.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/.pages/@pages/components/quickview/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuickviewComponent = /** @class */ (function () {
    function QuickviewComponent(_service, http, toggler) {
        var _this = this;
        this._service = _service;
        this.http = http;
        this.toggler = toggler;
        this.subscriptions = [];
        this.isOpen = false;
        this.noteList = [];
        this.noteDeleteList = [];
        this.noteText = "";
        //List for deleting or CRUD functions
        this.deleteNoteMode = false;
        this.isNoteOpen = false;
        this.userList = [];
        this.subscriptions.push(this.toggler.quickViewToggle.subscribe(function (message) { _this.toggle(); }));
    }
    QuickviewComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    QuickviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.subscriptions.push(this._service.getNotes().subscribe(function (notes) {
            _this.noteList = notes;
        }));
        this.subscriptions.push(this._service.getUsers().subscribe(function (users) {
            _this.userList = users;
        }));
        this.subscriptions.push(this._service.getChatMessages().subscribe(function (messages) {
            _this.chatHistory = messages;
        }));
    };
    QuickviewComponent.prototype.toggle = function () {
        if (this.isOpen) {
            this.isOpen = false;
        }
        else {
            this.isOpen = true;
        }
    };
    QuickviewComponent.prototype.popNote = function (item) {
        var index = this.noteDeleteList.indexOf(item);
        if (index !== -1) {
            this.noteDeleteList.splice(index, 1);
        }
    };
    QuickviewComponent.prototype.pushNote = function (item) {
        this.noteDeleteList.push(item);
    };
    QuickviewComponent.prototype.onSelectNote = function (item) {
        if (!this.deleteNoteMode) {
            this.selectedNote = item;
            this.noteText = this.selectedNote.notes;
            this.isNoteOpen = true;
        }
    };
    QuickviewComponent.prototype.toggleNotesView = function () {
        if (this.isNoteOpen) {
            this.isNoteOpen = false;
            this.saveNote();
        }
        else
            this.isNoteOpen = true;
    };
    QuickviewComponent.prototype.onCheck = function (e, item) {
        if (e.target.checked) {
            this.pushNote(item);
        }
        else {
            this.popNote(item);
        }
    };
    QuickviewComponent.prototype.composeNote = function () {
        this.isNoteOpen = true;
        this.selectedNote = new _note__WEBPACK_IMPORTED_MODULE_4__["Note"];
        this.selectedNote.id = this.noteList.length + 1;
        this.selectedNote.date = new Date();
        this.selectedNote.notes = "";
        this.noteText = "";
        this.noteList.push(this.selectedNote);
    };
    QuickviewComponent.prototype.saveNote = function () {
        this.selectedNote.notes = this.noteText;
    };
    QuickviewComponent.prototype.deleteMode = function () {
        if (this.deleteNoteMode)
            this.deleteNoteMode = false;
        else
            this.deleteNoteMode = true;
    };
    QuickviewComponent.prototype.deleteNote = function () {
        var _this = this;
        this.noteList = this.noteList.filter(function (item) { return _this.noteDeleteList.indexOf(item) === -1; });
    };
    QuickviewComponent.prototype.onMessageKeyPress = function (event) {
        if (event.keyCode == 13) {
            if (this.userMessage) {
                this.newMessage = new _message__WEBPACK_IMPORTED_MODULE_5__["chatMessage"];
                this.newMessage.from = "me";
                this.newMessage.date = "";
                this.newMessage.message = this.userMessage;
                this.chatHistory["log"].push(this.newMessage);
                this.userMessage = "";
                this.chatHistoryWrapper.nativeElement.scrollTop = this.chatHistoryWrapper.nativeElement.scrollHeight;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatHistoryWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuickviewComponent.prototype, "chatHistoryWrapper", void 0);
    QuickviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quickview',
            template: __webpack_require__(/*! ./quickview.component.html */ "./src/.pages/@pages/components/quickview/quickview.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./quickview.component.scss */ "./src/.pages/@pages/components/quickview/quickview.component.scss")]
        }),
        __metadata("design:paramtypes", [_quickview_service__WEBPACK_IMPORTED_MODULE_3__["QuickviewService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"]])
    ], QuickviewComponent);
    return QuickviewComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/search-overlay/search-overlay.component.html":
/*!***********************************************************************************!*\
  !*** ./src/.pages/@pages/components/search-overlay/search-overlay.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" [class.hide]=!isVisible [@fadeAnimation]=\"isVisible\">\r\n\t<!-- BEGIN Overlay Content !-->\r\n\r\n\t<div class=\"overlay-content has-results m-t-20\">\r\n\t\t<!-- BEGIN Overlay Header !-->\r\n\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<!-- BEGIN Overlay Logo !-->\r\n\t\t\t<img alt=\"logo\" class=\"overlay-brand\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" height=\"22\" src=\r\n\t\t\t\"assets/img/logo.png\" width=\"78\"> <!-- END Overlay Logo !-->\r\n\t\t\t <!-- BEGIN Overlay Close !-->\r\n\t\t\t <a class=\"close-icon-light overlay-close text-black fs-16\" href=\"javascript:void(0)\" (click)=\"close($event)\"><i class=\"pg pg-close\"></i></a> <!-- END Overlay Close !-->\r\n\t\t</div>\r\n\t\t<!-- END Overlay Header !-->\r\n\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<!-- BEGIN Overlay Controls !-->\r\n\t\t\t<input autocomplete=\"off\" #searchField (keyup)=\"searchKeyPress($event)\" class=\"no-border overlay-search bg-transparent\" [(ngModel)]=\"value\" placeholder=\"Search...\" spellcheck=\r\n\t\t\t\"false\"><br>\r\n\r\n\t\t\t<div class=\"inline-block\">\r\n\t\t\t\t<div class=\"checkbox right\">\r\n\t\t\t\t\t<input checked=\"checked\" id=\"checkboxn\" type=\"checkbox\" value=\"1\"> <label for=\"checkboxn\"><i class=\"fa fa-search\"></i> Search within\r\n\t\t\t\t\tpage</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"inline-block m-l-10\">\r\n\t\t\t\t<p class=\"fs-13\">\r\n\t\t\t\t\tPress enter to search\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<!-- END Overlay Controls !-->\r\n\t\t</div>\r\n\t\t<!-- BEGIN Overlay Search Results, This part is for demo purpose, you can add anything you like !-->\r\n\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<span><strong>suggestions :</strong></span> {{value}}<br>\r\n\r\n\t\t\t<div class=\"search-results m-t-40\">\r\n\t\t\t\t<p class=\"bold\">\r\n\t\t\t\t\tPages Search Results\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\r\n\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-success text-white inline m-t-10\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar.jpg\" src2x=\"assets/img/profiles/avatar2x.jpg\" height=\"50\" src=\r\n\t\t\t\t\t\t\t\t\t\"assets/img/profiles/avatar.jpg\" width=\"50\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"p-l-10 inline p-t-5\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> on pages\r\n\t\t\t\t\t\t\t\t</h5>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\r\n\t\t\t\t\t\t\t\t\tvia john smith\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- END Search Result Item !-->\r\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\r\n\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-success text-white inline m-t-10\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\tT\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"p-l-10 inline p-t-5\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> related topics\r\n\t\t\t\t\t\t\t\t</h5>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\r\n\t\t\t\t\t\t\t\t\tvia pages\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- END Search Result Item !-->\r\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\r\n\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-success text-white inline m-t-10\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-headphones large-text\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"p-l-10 inline p-t-5\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> music\r\n\t\t\t\t\t\t\t\t</h5>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\r\n\t\t\t\t\t\t\t\t\tvia pagesmix\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- END Search Result Item !-->\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\r\n\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-info text-white inline m-t-10\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook large-text\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"p-l-10 inline p-t-5\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> on facebook\r\n\t\t\t\t\t\t\t\t</h5>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\r\n\t\t\t\t\t\t\t\t\tvia facebook\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- END Search Result Item !-->\r\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\r\n\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-complete text-white inline m-t-10\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter large-text\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"p-l-10 inline p-t-5\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\r\n\t\t\t\t\t\t\t\t\tTweats on <span class=\"semi-bold result-name\">{{value}}</span>\r\n\t\t\t\t\t\t\t\t</h5>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\r\n\t\t\t\t\t\t\t\t\tvia twitter\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- END Search Result Item !-->\r\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\r\n\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular text-white bg-danger inline m-t-10\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus large-text\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\r\n\r\n\t\t\t\t\t\t\t<div class=\"p-l-10 inline p-t-5\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\r\n\t\t\t\t\t\t\t\t\tCircles on <span class=\"semi-bold result-name\">{{value}}</span>\r\n\t\t\t\t\t\t\t\t</h5>\r\n\r\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\r\n\t\t\t\t\t\t\t\t\tvia google plus\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- END Search Result Item !-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- END Overlay Search Results !-->\r\n\t</div>\r\n\t<!-- END Overlay Content !-->\r\n</div>\r\n<!-- END OVERLAY -->"

/***/ }),

/***/ "./src/.pages/@pages/components/search-overlay/search-overlay.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/.pages/@pages/components/search-overlay/search-overlay.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL3NlYXJjaC1vdmVybGF5L3NlYXJjaC1vdmVybGF5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/.pages/@pages/components/search-overlay/search-overlay.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/.pages/@pages/components/search-overlay/search-overlay.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOverlayComponent", function() { return SearchOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_fade_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/fade-animations */ "./src/.pages/@pages/animations/fade-animations.ts");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchOverlayComponent = /** @class */ (function () {
    function SearchOverlayComponent(el, toggler) {
        var _this = this;
        this.el = el;
        this.toggler = toggler;
        this._isEnabled = false;
        this.isVisible = false;
        this.value = "";
        this.toggleSubscription = this.toggler.searchToggle.subscribe(function (toggleValue) { _this.open(); });
    }
    SearchOverlayComponent.prototype.ngOnDestroy = function () {
        this.toggleSubscription.unsubscribe();
    };
    Object.defineProperty(SearchOverlayComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (isEnabled) {
            this.isEnabled = isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    SearchOverlayComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.isVisible = false;
        this.value = "";
    };
    SearchOverlayComponent.prototype.open = function () {
        var _this = this;
        this.isVisible = true;
        this.value = "";
        setTimeout(function () {
            _this.searchField.nativeElement.focus();
        }, 200);
    };
    SearchOverlayComponent.prototype.onKeydownHandler = function (e) {
        var nodeName = e.target.nodeName;
        //Ignore When focus on input, textarea & contenteditable
        if (nodeName == 'INPUT' || nodeName == 'TEXTAREA' || e.target.contentEditable == "true") {
            return;
        }
        //Ignore Escape
        if (this.isVisible && e.keyCode == 27) {
            this.isVisible = false;
            this.value = "";
        }
        //Ignore Keyes
        if (e.which !== 0 && e.charCode !== 0 && !e.ctrlKey && !e.metaKey && !e.altKey && e.keyCode != 27) {
            this.isVisible = true;
            if (!this.value)
                this.value = String.fromCharCode(e.keyCode | e.charCode);
            this.searchField.nativeElement.focus();
        }
    };
    SearchOverlayComponent.prototype.searchKeyPress = function (event) {
        if (this.isVisible && event.keyCode == 27) {
            this.isVisible = false;
            this.value = "";
        }
    };
    SearchOverlayComponent.prototype.fadeInComplete = function () {
        console.log("compelete");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SearchOverlayComponent.prototype, "isEnabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchField'),
        __metadata("design:type", Object)
    ], SearchOverlayComponent.prototype, "searchField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SearchOverlayComponent.prototype, "onKeydownHandler", null);
    SearchOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-overlay',
            template: __webpack_require__(/*! ./search-overlay.component.html */ "./src/.pages/@pages/components/search-overlay/search-overlay.component.html"),
            animations: [
                _animations_fade_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]
            ],
            styles: [__webpack_require__(/*! ./search-overlay.component.scss */ "./src/.pages/@pages/components/search-overlay/search-overlay.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"]])
    ], SearchOverlayComponent);
    return SearchOverlayComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/sidebar/sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/.pages/@pages/components/sidebar/sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->\r\n      <div class=\"sidebar-overlay-slide from-top\" [class.show]=\"drawer\" >\r\n        <ng-template [ngTemplateOutlet]=\"sideBarOverlay\"></ng-template>\r\n      </div>\r\n      <!-- END SIDEBAR MENU TOP TRAY CONTENT-->\r\n      <!-- BEGIN SIDEBAR MENU HEADER-->\r\n      <div class=\"sidebar-header\">\r\n        <ng-template [ngTemplateOutlet]=\"sideBarHeader\"></ng-template>\r\n      </div>\r\n      <!-- END SIDEBAR MENU HEADER-->\r\n      <!-- START SIDEBAR MENU -->\r\n      <div class=\"sidebar-menu\">\r\n        <ng-template [ngTemplateOutlet]=\"menuItems\"></ng-template>\r\n        <!-- BEGIN SIDEBAR MENU ITEMS-->\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n      <!-- END SIDEBAR MENU -->\r\n"

/***/ }),

/***/ "./src/.pages/@pages/components/sidebar/sidebar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/.pages/@pages/components/sidebar/sidebar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/@pages/components/sidebar/sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/.pages/@pages/components/sidebar/sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appSidebar, toggler) {
        var _this = this;
        this.appSidebar = appSidebar;
        this.toggler = toggler;
        this.subscriptions = [];
        this.pin = false;
        this.drawer = false;
        this.sideBarWidth = 280;
        this.sideBarWidthCondensed = 280 - 70;
        this.subscriptions.push(this.toggler.sideBarToggle.subscribe(function (toggle) { _this.toggleMobile(toggle); }));
        this.subscriptions.push(this.toggler.pageContainerHover.subscribe(function (message) { _this.closeSideBar(); }));
        this.subscriptions.push(this.toggler.menuDrawer.subscribe(function (message) { _this.toggleDrawer(); }));
        this.mobileSidebar = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subs = _a[_i];
            subs.unsubscribe();
        }
        clearTimeout(this.timer);
    };
    SidebarComponent.prototype.openSideBar = function () {
        if (pg.isVisibleSm() || pg.isVisibleXs())
            return false;
        if (this.pin)
            return false;
        this.style = 'translate3d(' + this.sideBarWidthCondensed + 'px, 0,0)';
        pg.addClass(document.body, "sidebar-visible");
    };
    SidebarComponent.prototype.closeSideBar = function () {
        if (pg.isVisibleSm() || pg.isVisibleXs())
            return false;
        if (this.pin)
            return false;
        this.style = 'translate3d(0,0,0)';
        pg.removeClass(document.body, "sidebar-visible");
        //this.drawer = false;
    };
    SidebarComponent.prototype.toggleMenuPin = function () {
        if (this.pin)
            this.pin = false;
        else
            this.pin = true;
    };
    SidebarComponent.prototype.toggleDrawer = function () {
        if (this.drawer)
            this.drawer = false;
        else
            this.drawer = true;
    };
    SidebarComponent.prototype.toggleMobile = function (toggle) {
        var _this = this;
        clearTimeout(this.timer);
        if (toggle) {
            this.mobileSidebar = toggle;
        }
        else {
            this.timer = setTimeout(function () {
                _this.mobileSidebar = toggle;
            }, 400);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.transform'),
        __metadata("design:type", String)
    ], SidebarComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('sideBarOverlay'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SidebarComponent.prototype, "sideBarOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('sideBarHeader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SidebarComponent.prototype, "sideBarHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('menuItems'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SidebarComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.visible'),
        __metadata("design:type", Boolean)
    ], SidebarComponent.prototype, "mobileSidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter', ["$event"]),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SidebarComponent.prototype, "openSideBar", null);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/.pages/@pages/components/sidebar/sidebar.component.html"),
            host: {
                'class': 'page-sidebar',
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/.pages/@pages/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/.pages/tab-page1/tab-page1.component.css":
/*!******************************************************!*\
  !*** ./src/.pages/tab-page1/tab-page1.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL3RhYi1wYWdlMS90YWItcGFnZTEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/.pages/tab-page1/tab-page1.component.html":
/*!*******************************************************!*\
  !*** ./src/.pages/tab-page1/tab-page1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <p>We tested almost every web font to see which font gets render best in comparisan to the operating system.\r\n        Better visibility, clarity and compatibility is fully ensured as we have paid detailed attention in making\r\n        for perfect reading. </p>\r\n    </div>\r\n  </div>\r\n</pg-container>"

/***/ }),

/***/ "./src/.pages/tab-page1/tab-page1.component.ts":
/*!*****************************************************!*\
  !*** ./src/.pages/tab-page1/tab-page1.component.ts ***!
  \*****************************************************/
/*! exports provided: TabPage1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPage1Component", function() { return TabPage1Component; });
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

var TabPage1Component = /** @class */ (function () {
    function TabPage1Component() {
    }
    TabPage1Component.prototype.ngOnInit = function () {
    };
    TabPage1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-page1',
            template: __webpack_require__(/*! ./tab-page1.component.html */ "./src/.pages/tab-page1/tab-page1.component.html"),
            styles: [__webpack_require__(/*! ./tab-page1.component.css */ "./src/.pages/tab-page1/tab-page1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabPage1Component);
    return TabPage1Component;
}());



/***/ }),

/***/ "./src/.pages/tab-page2/tab-page2.component.css":
/*!******************************************************!*\
  !*** ./src/.pages/tab-page2/tab-page2.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL3RhYi1wYWdlMi90YWItcGFnZTIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/.pages/tab-page2/tab-page2.component.html":
/*!*******************************************************!*\
  !*** ./src/.pages/tab-page2/tab-page2.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tab-page2 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/.pages/tab-page2/tab-page2.component.ts":
/*!*****************************************************!*\
  !*** ./src/.pages/tab-page2/tab-page2.component.ts ***!
  \*****************************************************/
/*! exports provided: TabPage2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPage2Component", function() { return TabPage2Component; });
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

var TabPage2Component = /** @class */ (function () {
    function TabPage2Component() {
    }
    TabPage2Component.prototype.ngOnInit = function () {
    };
    TabPage2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-page2',
            template: __webpack_require__(/*! ./tab-page2.component.html */ "./src/.pages/tab-page2/tab-page2.component.html"),
            styles: [__webpack_require__(/*! ./tab-page2.component.css */ "./src/.pages/tab-page2/tab-page2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabPage2Component);
    return TabPage2Component;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-app-module~pages-pages-main-module.js.map