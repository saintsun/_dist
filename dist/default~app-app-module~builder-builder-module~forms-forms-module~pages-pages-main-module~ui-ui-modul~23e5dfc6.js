(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-app-module~builder-builder-module~forms-forms-module~pages-pages-main-module~ui-ui-modul~23e5dfc6"],{

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var old = this._dir;
            /** @type {?} */
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[attr.dir]': '_rawDir' },
                    exportAs: 'dir',
                },] },
    ];
    Dir.propDecorators = {
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
        dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/fromEvent.js ***!
  \****************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"]; });


//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/merge.js ***!
  \************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"]; });


//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/of.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/of.js ***!
  \*********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; });


//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/auditTime.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/auditTime.js ***!
  \***************************************************************/
/*! exports provided: auditTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTime", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["auditTime"]; });


//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/map.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/map.js ***!
  \*********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"]; });


//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/startWith.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/startWith.js ***!
  \***************************************************************/
/*! exports provided: startWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWith", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"]; });


//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tab-body.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tab-body.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgTabBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabBodyComponent", function() { return pgTabBodyComponent; });
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

var pgTabBodyComponent = /** @class */ (function () {
    function pgTabBodyComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabBodyComponent.prototype, "content", void 0);
    pgTabBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tab-body',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n  ",
        })
    ], pgTabBodyComponent);
    return pgTabBodyComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tab-label.directive.ts":
/*!******************************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tab-label.directive.ts ***!
  \******************************************************************/
/*! exports provided: pgTabLabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabLabelDirective", function() { return pgTabLabelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgTabLabelDirective = /** @class */ (function () {
    function pgTabLabelDirective(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
    }
    Object.defineProperty(pgTabLabelDirective.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgTabLabelDirective.prototype.getOffsetLeft = function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    pgTabLabelDirective.prototype.getOffsetWidth = function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    pgTabLabelDirective.prototype.getOffsetTop = function () {
        return this.elementRef.nativeElement.offsetTop;
    };
    pgTabLabelDirective.prototype.getOffsetHeight = function () {
        return this.elementRef.nativeElement.offsetHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.nav-item-disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabLabelDirective.prototype, "disabled", null);
    pgTabLabelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pg-tab-label]',
            host: {
                '[class.nav-item]': 'true'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], pgTabLabelDirective);
    return pgTabLabelDirective;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tab.component.ts":
/*!************************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tab.component.ts ***!
  \************************************************************/
/*! exports provided: pgTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabComponent", function() { return pgTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabset.component */ "./src/.pages/@pages/components/tabs/tabset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgTabComponent = /** @class */ (function () {
    function pgTabComponent(pgTabSetComponent) {
        this.pgTabSetComponent = pgTabSetComponent;
        this.disabled = false;
        this.position = null;
        this.origin = null;
        this.pgSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pgClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pgDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(pgTabComponent.prototype, "Disabled", {
        get: function () {
            return this.disabled;
        },
        set: function (value) {
            this.disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    pgTabComponent.prototype.ngOnInit = function () {
        this.pgTabSetComponent._tabs.push(this);
    };
    pgTabComponent.prototype.ngOnDestroy = function () {
        this.pgTabSetComponent._tabs.splice(this.pgTabSetComponent._tabs.indexOf(this), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTabComponent.prototype, "pgSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTabComponent.prototype, "pgClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTabComponent.prototype, "pgDeselect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('TabHeading'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabComponent.prototype, "_tabHeading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabComponent.prototype, "_content", void 0);
    pgTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tab',
            template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
            host: {
                '[class.ant-tabs-tabpane]': 'true'
            }
        }),
        __metadata("design:paramtypes", [_tabset_component__WEBPACK_IMPORTED_MODULE_2__["pgTabSetComponent"]])
    ], pgTabComponent);
    return pgTabComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tabs-ink-bar.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tabs-ink-bar.directive.ts ***!
  \*********************************************************************/
/*! exports provided: pgTabsInkBarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabsInkBarDirective", function() { return pgTabsInkBarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_request_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/request-animation */ "./src/.pages/@pages/components/util/request-animation.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgTabsInkBarDirective = /** @class */ (function () {
    function pgTabsInkBarDirective(_renderer, _elementRef, _ngZone) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._animated = false;
        this.PositionMode = 'horizontal';
    }
    Object.defineProperty(pgTabsInkBarDirective.prototype, "Animated", {
        get: function () {
            return this._animated;
        },
        set: function (value) {
            this._animated = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgTabsInkBarDirective.prototype.alignToElement = function (element) {
        var _this = this;
        this.show();
        this._ngZone.runOutsideAngular(function () {
            Object(_util_request_animation__WEBPACK_IMPORTED_MODULE_1__["reqAnimFrame"])(function () {
                /** when horizontal remove height style and add transfrom left **/
                if (_this.PositionMode === 'horizontal') {
                    _this._renderer.removeStyle(_this._elementRef.nativeElement, 'height');
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'transform', "translate3d(" + _this._getLeftPosition(element) + ", 0px, 0px)");
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'width', _this._getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transfrom top **/
                    _this._renderer.removeStyle(_this._elementRef.nativeElement, 'width');
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'transform', "translate3d(0px, " + _this._getTopPosition(element) + ", 0px)");
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'height', _this._getElementHeight(element));
                }
            });
        });
    };
    pgTabsInkBarDirective.prototype.show = function () {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'visible');
    };
    pgTabsInkBarDirective.prototype.setDisplay = function (value) {
        this._renderer.setStyle(this._elementRef.nativeElement, 'display', value);
    };
    pgTabsInkBarDirective.prototype.hide = function () {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    };
    pgTabsInkBarDirective.prototype._getLeftPosition = function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    pgTabsInkBarDirective.prototype._getElementWidth = function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    pgTabsInkBarDirective.prototype._getTopPosition = function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    pgTabsInkBarDirective.prototype._getElementHeight = function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.nav-item-animated'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsInkBarDirective.prototype, "Animated", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgTabsInkBarDirective.prototype, "PositionMode", void 0);
    pgTabsInkBarDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pg-tabs-ink-bar]',
            host: {
                '[class.nav-item]': 'true'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], pgTabsInkBarDirective);
    return pgTabsInkBarDirective;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tabs-nav.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tabs-nav.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgTabsNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabsNavComponent", function() { return pgTabsNavComponent; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs-compat/_esm5/observable/merge.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators_auditTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/auditTime */ "./node_modules/rxjs-compat/_esm5/operators/auditTime.js");
/* harmony import */ var rxjs_operators_startWith__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators/startWith */ "./node_modules/rxjs-compat/_esm5/operators/startWith.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
/* harmony import */ var _tab_label_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab-label.directive */ "./src/.pages/@pages/components/tabs/tab-label.directive.ts");
/* harmony import */ var _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs-ink-bar.directive */ "./src/.pages/@pages/components/tabs/tabs-ink-bar.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** code from https://github.com/angular/material2 */










var EXAGGERATED_OVERSCROLL = 64;
var pgTabsNavComponent = /** @class */ (function () {
    function pgTabsNavComponent(_elementRef, _ngZone, _renderer, _dir) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._dir = _dir;
        this._animated = true;
        this._hideBar = false;
        this._showPagination = true;
        this._showPaginationControls = false;
        this._disableScrollAfter = true;
        this._disableScrollBefore = true;
        this._scrollDistance = 0;
        this._selectedIndexChanged = false;
        this._realignInkBar = null;
        this._selectedIndex = 0;
        this._tabPositionMode = 'horizontal';
        this._tabPosition = 'top';
        this.Size = 'default';
        this._type = 'line';
    }
    Object.defineProperty(pgTabsNavComponent.prototype, "Animated", {
        get: function () {
            return this._animated;
        },
        set: function (value) {
            this._animated = Object(_util_convert__WEBPACK_IMPORTED_MODULE_7__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "Position", {
        get: function () {
            return this._tabPosition;
        },
        set: function (value) {
            this._tabPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "HideBar", {
        get: function () {
            return this._hideBar;
        },
        set: function (value) {
            this._hideBar = Object(_util_convert__WEBPACK_IMPORTED_MODULE_7__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "Type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "ShowPagination", {
        get: function () {
            return this._showPagination;
        },
        set: function (value) {
            this._showPagination = Object(_util_convert__WEBPACK_IMPORTED_MODULE_7__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "PositionMode", {
        get: function () {
            return this._tabPositionMode;
        },
        set: function (value) {
            this._tabPositionMode = value;
            this._alignInkBarToSelectedTab();
            if (this.ShowPagination) {
                this._updatePagination();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this._selectedIndexChanged = this._selectedIndex !== value;
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    pgTabsNavComponent.prototype._onContentChanges = function () {
        if (this.ShowPagination) {
            this._updatePagination();
        }
        this._alignInkBarToSelectedTab();
    };
    pgTabsNavComponent.prototype._scrollHeader = function (scrollDir) {
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix / 3;
    };
    pgTabsNavComponent.prototype.ngAfterContentChecked = function () {
        if (this._tabLabelCount !== this._labelWrappers.length) {
            if (this.ShowPagination) {
                this._updatePagination();
            }
            this._tabLabelCount = this._labelWrappers.length;
        }
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            if (this.ShowPagination) {
                this._checkScrollingControls();
            }
            this._alignInkBarToSelectedTab();
            this._selectedIndexChanged = false;
        }
        if (this._scrollDistanceChanged) {
            if (this.ShowPagination) {
                this._updateTabScrollPosition();
            }
            this._scrollDistanceChanged = false;
        }
    };
    pgTabsNavComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._realignInkBar = this._ngZone.runOutsideAngular(function () {
            var dirChange = _this._dir ? _this._dir.change : Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            var resize = typeof window !== 'undefined' ?
                Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators_auditTime__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(10)) :
                Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            return Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__["merge"])(dirChange, resize).pipe(Object(rxjs_operators_startWith__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(function () {
                if (_this.ShowPagination) {
                    _this._updatePagination();
                }
                _this._alignInkBarToSelectedTab();
            });
        });
    };
    pgTabsNavComponent.prototype._updateTabScrollPosition = function () {
        var scrollDistance = this.scrollDistance;
        if (this.PositionMode === 'horizontal') {
            var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this._renderer.setStyle(this._tabList.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
        }
        else {
            this._renderer.setStyle(this._tabList.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
        }
    };
    pgTabsNavComponent.prototype._updatePagination = function () {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
    };
    pgTabsNavComponent.prototype._checkPaginationEnabled = function () {
        this._showPaginationControls =
            this.tabListScrollWidthHeightPix > this.elementRefOffSetWidthHeight;
        if (!this._showPaginationControls) {
            this.scrollDistance = 0;
        }
    };
    pgTabsNavComponent.prototype._scrollToLabel = function (labelIndex) {
        var selectedLabel = this._labelWrappers
            ? this._labelWrappers.toArray()[labelIndex]
            : null;
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        var labelBeforePos;
        var labelAfterPos;
        if (this.PositionMode === 'horizontal') {
            if (this._getLayoutDirection() === 'ltr') {
                labelBeforePos = selectedLabel.getOffsetLeft();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
            }
            else {
                labelAfterPos = this._tabList.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
            }
        }
        else {
            labelBeforePos = selectedLabel.getOffsetTop();
            labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
        }
        var beforeVisiblePos = this.scrollDistance;
        var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    };
    pgTabsNavComponent.prototype._checkScrollingControls = function () {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance === 0;
        this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    pgTabsNavComponent.prototype._getMaxScrollDistance = function () {
        return (this.tabListScrollWidthHeightPix - this.viewWidthHeightPix) || 0;
    };
    Object.defineProperty(pgTabsNavComponent.prototype, "scrollDistance", {
        get: function () {
            return this._scrollDistance;
        },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: function (v) {
            this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this._scrollDistanceChanged = true;
            this._checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "viewWidthHeightPix", {
        get: function () {
            var PAGINATION_PIX = 0;
            if (this._showPaginationControls) {
                PAGINATION_PIX = 64;
            }
            if (this.PositionMode === 'horizontal') {
                return this._tabListContainer.nativeElement.offsetWidth - PAGINATION_PIX;
            }
            else {
                return this._tabListContainer.nativeElement.offsetHeight - PAGINATION_PIX;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
        get: function () {
            if (this.PositionMode === 'horizontal') {
                return this._tabList.nativeElement.scrollWidth;
            }
            else {
                return this._tabList.nativeElement.scrollHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "elementRefOffSetWidthHeight", {
        get: function () {
            if (this.PositionMode === 'horizontal') {
                return this._elementRef.nativeElement.offsetWidth;
            }
            else {
                return this._elementRef.nativeElement.offsetHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    pgTabsNavComponent.prototype._getLayoutDirection = function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    pgTabsNavComponent.prototype._alignInkBarToSelectedTab = function () {
        if (this.Type !== 'fillup') {
            var selectedLabelWrapper = this._labelWrappers && this._labelWrappers.length
                ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this._inkBar) {
                this._inkBar.alignToElement(selectedLabelWrapper);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabsNavComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsNavComponent.prototype, "Animated", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabsNavComponent.prototype, "Position", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsNavComponent.prototype, "HideBar", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabsNavComponent.prototype, "Type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('tabBarExtraContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], pgTabsNavComponent.prototype, "_tabBarExtraContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tab_label_directive__WEBPACK_IMPORTED_MODULE_8__["pgTabLabelDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], pgTabsNavComponent.prototype, "_labelWrappers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_9__["pgTabsInkBarDirective"]),
        __metadata("design:type", _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_9__["pgTabsInkBarDirective"])
    ], pgTabsNavComponent.prototype, "_inkBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabListContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], pgTabsNavComponent.prototype, "_tabListContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabList'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], pgTabsNavComponent.prototype, "_tabList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsNavComponent.prototype, "ShowPagination", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabsNavComponent.prototype, "PositionMode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], pgTabsNavComponent.prototype, "selectedIndex", null);
    pgTabsNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-tabs-nav',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: "\n  \n    <div class=\"nav-tabs-wrapper\" [class.scrolling]=\"_showPaginationControls\" #tabListContainer>\n      <span class=\"nav-tabs-navigator left btn btn-link\" (click)=\"_scrollHeader('before')\" [class.disabled]=\"_disableScrollBefore\" *ngIf=\"_showPaginationControls\">\n        <i class=\"pg pg-arrow_left\"></i>\n      </span>\n      <div class=\"nav-wrap\">\n          <ul class=\"nav nav-tabs nav-tabs-{{_type}} nav-tabs-{{_tabPosition}}\" [class.tabs-nav-animated]=\"Animated\" #tabList (cdkObserveContent)=\"_onContentChanges()\">\n            <div class=\"active-bar\" pg-tabs-ink-bar [hidden]=\"HideBar\" [Animated]=\"Animated\" [PositionMode]=\"PositionMode\" style=\"display: block;\"></div>\n            <ng-content></ng-content>\n          </ul>\n      </div>\n      <span class=\"nav-tabs-navigator right btn btn-link\" (click)=\"_scrollHeader('after')\" [class.disabled]=\"_disableScrollAfter\" *ngIf=\"_showPaginationControls\">\n        <i class=\"pg pg-arrow_right\"></i>\n      </span>\n    </div> \n  ",
            host: {}
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"]])
    ], pgTabsNavComponent);
    return pgTabsNavComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tabs.module.ts":
/*!**********************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tabs.module.ts ***!
  \**********************************************************/
/*! exports provided: pgTabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabsModule", function() { return pgTabsModule; });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-body.component */ "./src/.pages/@pages/components/tabs/tab-body.component.ts");
/* harmony import */ var _tab_label_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-label.directive */ "./src/.pages/@pages/components/tabs/tab-label.directive.ts");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab.component */ "./src/.pages/@pages/components/tabs/tab.component.ts");
/* harmony import */ var _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-ink-bar.directive */ "./src/.pages/@pages/components/tabs/tabs-ink-bar.directive.ts");
/* harmony import */ var _tabs_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs-nav.component */ "./src/.pages/@pages/components/tabs/tabs-nav.component.ts");
/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabset.component */ "./src/.pages/@pages/components/tabs/tabset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { PortalModule } from '@angular/cdk/portal';








var pgTabsModule = /** @class */ (function () {
    function pgTabsModule() {
    }
    pgTabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_tab_component__WEBPACK_IMPORTED_MODULE_5__["pgTabComponent"], _tabset_component__WEBPACK_IMPORTED_MODULE_8__["pgTabSetComponent"], _tabs_nav_component__WEBPACK_IMPORTED_MODULE_7__["pgTabsNavComponent"], _tab_label_directive__WEBPACK_IMPORTED_MODULE_4__["pgTabLabelDirective"], _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__["pgTabsInkBarDirective"], _tab_body_component__WEBPACK_IMPORTED_MODULE_3__["pgTabBodyComponent"]],
            exports: [_tab_component__WEBPACK_IMPORTED_MODULE_5__["pgTabComponent"], _tabset_component__WEBPACK_IMPORTED_MODULE_8__["pgTabSetComponent"], _tabs_nav_component__WEBPACK_IMPORTED_MODULE_7__["pgTabsNavComponent"], _tab_label_directive__WEBPACK_IMPORTED_MODULE_4__["pgTabLabelDirective"], _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__["pgTabsInkBarDirective"], _tab_body_component__WEBPACK_IMPORTED_MODULE_3__["pgTabBodyComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]]
        })
    ], pgTabsModule);
    return pgTabsModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tabs.scss":
/*!*****************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tabs.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL3RhYnMvdGFicy5zY3NzIn0= */"

/***/ }),

/***/ "./src/.pages/@pages/components/tabs/tabset.component.ts":
/*!***************************************************************!*\
  !*** ./src/.pages/@pages/components/tabs/tabset.component.ts ***!
  \***************************************************************/
/*! exports provided: TabChangeEvent, pgTabSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabChangeEvent", function() { return TabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabSetComponent", function() { return pgTabSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _tabs_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-nav.component */ "./src/.pages/@pages/components/tabs/tabs-nav.component.ts");
/** code from https://github.com/angular/material2 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabChangeEvent = /** @class */ (function () {
    function TabChangeEvent() {
    }
    return TabChangeEvent;
}());

var pgTabSetComponent = /** @class */ (function () {
    function pgTabSetComponent(_renderer) {
        this._renderer = _renderer;
        this._prefixCls = 'nav-tabs';
        this._tabPosition = 'top';
        this._tabPositionMode = 'horizontal';
        this._indexToSelect = 0;
        this._selectedIndex = null;
        this._isViewInit = false;
        this._tabs = [];
        this._tabAnimation = "";
        this._extra_tab_class = "";
        this._extra_tabcontent_class = "";
        this.Animated = true;
        this.ShowPagination = true;
        this.Hide = false;
        this.SelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.Size = 'default';
        this._type = 'line';
        this.tabs = [];
    }
    Object.defineProperty(pgTabSetComponent.prototype, "SelectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this._indexToSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "SelectedIndexChange", {
        get: function () {
            return this.SelectChange.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) { return event.index; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "TabPosition", {
        get: function () {
            return this._tabPosition;
        },
        set: function (value) {
            this._tabPosition = value;
            if ((this._tabPosition === 'top') || (this._tabPosition === 'bottom')) {
                this._tabPositionMode = 'horizontal';
            }
            else {
                this._tabPositionMode = 'vertical';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "extraTabClass", {
        set: function (value) {
            this._extra_tab_class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "extraTabContentClass", {
        set: function (value) {
            this._extra_tabcontent_class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "Type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (this._type === value) {
                return;
            }
            this._type = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "tabAnimation", {
        set: function (value) {
            this._tabAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    pgTabSetComponent.prototype._setPosition = function (value) {
    };
    pgTabSetComponent.prototype._setClassMap = function () {
    };
    pgTabSetComponent.prototype.clickLabel = function (index) {
        if (this._tabs[index].Disabled) {
        }
        else {
            this.SelectedIndex = index;
            this._tabs[index].pgClick.emit();
        }
    };
    pgTabSetComponent.prototype.ngOnInit = function () {
        this._setClassMap();
    };
    pgTabSetComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // Clamp the next selected index to the bounds of 0 and the tabs length. Note the `|| 0`, which
        // ensures that values like NaN can't get through and which would otherwise throw the
        // component into an infinite loop (since Math.max(NaN, 0) === NaN).
        var indexToSelect = this._indexToSelect =
            Math.min(this._tabs.length - 1, Math.max(this._indexToSelect || 0, 0));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex !== indexToSelect && this._selectedIndex != null) {
            this.SelectChange.emit(this._createChangeEvent(indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach(function (tab, index) {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - _this._selectedIndex;
            }
        });
        this._selectedIndex = indexToSelect;
    };
    pgTabSetComponent.prototype.ngAfterViewInit = function () {
        this._isViewInit = true;
    };
    pgTabSetComponent.prototype._createChangeEvent = function (index) {
        var event = new TabChangeEvent();
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs[index];
            this._tabs.forEach(function (item, i) {
                if (i !== index) {
                    item.pgDeselect.emit();
                }
            });
            event.tab.pgSelect.emit();
        }
        return event;
    };
    Object.defineProperty(pgTabSetComponent.prototype, "inkBarAnimated", {
        get: function () {
            return (this.Animated === true) || (this.Animated.inkBar === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "tabPaneAnimated", {
        get: function () {
            return (this.Animated === true) || (this.Animated.tabPane === true);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabSetComponent.prototype, "TabBarExtraTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('TabBarExtraContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabSetComponent.prototype, "TabBarExtraContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabNav'),
        __metadata("design:type", _tabs_nav_component__WEBPACK_IMPORTED_MODULE_3__["pgTabsNavComponent"])
    ], pgTabSetComponent.prototype, "_tabNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgTabSetComponent.prototype, "_tabContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hostContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgTabSetComponent.prototype, "_hostContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "Animated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "ShowPagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "Hide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], pgTabSetComponent.prototype, "SelectedIndex", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]),
        __metadata("design:paramtypes", [])
    ], pgTabSetComponent.prototype, "SelectedIndexChange", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgTabSetComponent.prototype, "SelectChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "TabPosition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "extraTabClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "extraTabContentClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "Type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "tabAnimation", null);
    pgTabSetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tabset',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"tab-header-content tab-wrapper tab-{{_tabPositionMode}} {{_tabPosition}} {{_type}} {{_extra_tab_class}}\"  #hostContent>\n      <pg-tabs-nav\n        #tabNav\n        [Size]=\"Size\"\n        [Type]=\"Type\"\n        [ShowPagination]=\"ShowPagination\"\n        [PositionMode]=\"_tabPositionMode\"\n        [Position]=\"_tabPosition\"\n        [Animated]=\"inkBarAnimated\"\n        [HideBar]=\"Hide\"\n        [selectedIndex]=\"SelectedIndex\"\n        class=\" top-header-content\"\n        >\n        <ng-template #tabBarExtraContent>\n          <ng-template [ngTemplateOutlet]=\"TabBarExtraTemplate || TabBarExtraContent\"></ng-template>\n        </ng-template>\n        <li\n          pg-tab-label\n          [disabled]=\"tab.disabled\"\n          (click)=\"clickLabel(i)\"\n          *ngFor=\"let tab of _tabs; let i = index\">\n          <a href=\"javascript:void(0);\" class=\"\" [class.active]=\"(SelectedIndex == i)&&!Hide\">\n          <ng-template [ngTemplateOutlet]=\"tab._tabHeading\"></ng-template>\n          </a>\n        </li>\n      </pg-tabs-nav>\n      <div class=\"tab-content-wrapper {{_extra_tabcontent_class}}\">\n        <div class=\"tab-content {{_tabAnimation}}\"\n          #tabContent\n          [class.animated]=\"tabPaneAnimated\"\n          [class.not-animated]=\"!tabPaneAnimated\"\n          [style.margin-left.%]=\"tabPaneAnimated&&(-SelectedIndex*100)\">\n          <pg-tab-body\n            class=\"tab-pane\"\n            [class.active]=\"(SelectedIndex == i)&&!Hide\"\n            [class.inactive]=\"(SelectedIndex != i)||Hide\"\n            [content]=\"tab.content\"\n            *ngFor=\"let tab of _tabs; let i = index\">\n          </pg-tab-body>\n        </div>\n      </div>\n    </div>",
            styles: [__webpack_require__(/*! ./tabs.scss */ "./src/.pages/@pages/components/tabs/tabs.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], pgTabSetComponent);
    return pgTabSetComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/util/convert.ts":
/*!******************************************************!*\
  !*** ./src/.pages/@pages/components/util/convert.ts ***!
  \******************************************************/
/*! exports provided: toBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
function toBoolean(value) {
    return value === '' || (value && value !== 'false');
}


/***/ }),

/***/ "./src/.pages/@pages/components/util/request-animation.ts":
/*!****************************************************************!*\
  !*** ./src/.pages/@pages/components/util/request-animation.ts ***!
  \****************************************************************/
/*! exports provided: reqAnimFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqAnimFrame", function() { return reqAnimFrame; });
var availablePrefixs = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    var lastTime = 0;
    return function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    var prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix
        ? window[prefix + "RequestAnimationFrame"]
        : requestAnimationFramePolyfill();
}
var reqAnimFrame = getRequestAnimationFrame();


/***/ })

}]);
//# sourceMappingURL=default~app-app-module~builder-builder-module~forms-forms-module~pages-pages-main-module~ui-ui-modul~23e5dfc6.js.map