(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-extra-module"],{

/***/ "./node_modules/ng-scrollreveal/directives/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/index.js ***!
  \**********************************************************/
/*! exports provided: NgsRevealDirective, NgsRevealSetDirective, AbstractNgsRevealDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngs_reveal_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngs-reveal.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return _ngs_reveal_directive__WEBPACK_IMPORTED_MODULE_0__["NgsRevealDirective"]; });

/* harmony import */ var _ngs_reveal_set_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngs-reveal-set.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-set.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return _ngs_reveal_set_directive__WEBPACK_IMPORTED_MODULE_1__["NgsRevealSetDirective"]; });

/* harmony import */ var _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngs-reveal-common.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractNgsRevealDirective", function() { return _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__["AbstractNgsRevealDirective"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js ***!
  \********************************************************************************/
/*! exports provided: AbstractNgsRevealDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNgsRevealDirective", function() { return AbstractNgsRevealDirective; });
/**
 * Base directive class shared by the concrete ScrollReveal directives.
 */
var AbstractNgsRevealDirective = (function () {
    function AbstractNgsRevealDirective(ngsRevealService) {
        this.ngsRevealService = ngsRevealService;
    }
    AbstractNgsRevealDirective.prototype._initConfig = function (value) {
        if (value && typeof value === 'string') {
            this.config = JSON.parse(value);
        }
        else if (value && typeof value === 'object') {
            this.config = value;
        }
    };
    return AbstractNgsRevealDirective;
}());
//# sourceMappingURL=ngs-reveal-common.directive.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/directives/ngs-reveal-set.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/ngs-reveal-set.directive.js ***!
  \*****************************************************************************/
/*! exports provided: NgsRevealSetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return NgsRevealSetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ngs-reveal.service */ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js");
/* harmony import */ var _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngs-reveal-common.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js");
var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Directive to add 'ScrollReveal' functionality to a <b>set of DOM elements</b> (identify via the `[ngsSelector]` attribute) in the page.
 * This directive is meant to be placed on the <b>parent node</b> that contains the child elements to reveal.
 * You can optionally add the `[ngsInterval]` attribute to reveal items sequentially, following the given interval(in milliseconds).
 * You can optionally add the `[ngsSync]` attribute to reveal new child elements that may have been added in the parent node asynchronously.
 *
 */
var NgsRevealSetDirective = (function (_super) {
    __extends(NgsRevealSetDirective, _super);
    function NgsRevealSetDirective(elementRef, ngsRevealService) {
        _super.call(this, ngsRevealService);
        this.elementRef = elementRef;
    }
    Object.defineProperty(NgsRevealSetDirective.prototype, "_config", {
        /**
         * Custom configuration to use when revealing this set of elements
         */
        set: function (value) {
            this._initConfig(value);
        },
        enumerable: true,
        configurable: true
    });
    NgsRevealSetDirective.prototype.ngOnInit = function () {
        if (!this.ngsSelector && console) {
            var item = this.elementRef.nativeElement ? this.elementRef.nativeElement.className : '';
            console.error("[ng-scrollreveal] You must set \"[ngsSelector]\" attribute on item '" + item + "' when using \"ngsRevealSet\"");
            return;
        }
        this.ngsRevealService.revealSet(this.elementRef, this.ngsSelector, this.ngsInterval, this.config);
    };
    NgsRevealSetDirective.prototype.ngOnChanges = function (changes) {
        var ngsSyncProp = 'ngsSync';
        if (ngsSyncProp in changes
            && !changes[ngsSyncProp].isFirstChange()
            && !changes[ngsSyncProp].currentValue()) {
            this.ngsRevealService.sync();
        }
    };
    NgsRevealSetDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngsRevealSet]'
                },] },
    ];
    /** @nocollapse */
    NgsRevealSetDirective.ctorParameters = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__["NgsRevealService"], },
    ];
    NgsRevealSetDirective.propDecorators = {
        '_config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngsRevealSet',] },],
        'ngsSelector': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'ngsInterval': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'ngsSync': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgsRevealSetDirective;
}(_ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__["AbstractNgsRevealDirective"]));
//# sourceMappingURL=ngs-reveal-set.directive.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/directives/ngs-reveal.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/ngs-reveal.directive.js ***!
  \*************************************************************************/
/*! exports provided: NgsRevealDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return NgsRevealDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ngs-reveal.service */ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js");
/* harmony import */ var _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngs-reveal-common.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js");
var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Directive to add 'ScrollReveal' functionality to a <b>single DOM element</b> in the page.
 */
var NgsRevealDirective = (function (_super) {
    __extends(NgsRevealDirective, _super);
    function NgsRevealDirective(elementRef, ngsRevealService) {
        _super.call(this, ngsRevealService);
        this.elementRef = elementRef;
        this.visibility = 'hidden';
    }
    Object.defineProperty(NgsRevealDirective.prototype, "_config", {
        /**
         * Custom configuration to use when revealing this element
         */
        set: function (value) {
            this._initConfig(value);
        },
        enumerable: true,
        configurable: true
    });
    NgsRevealDirective.prototype.ngOnInit = function () {
        this.ngsRevealService.reveal(this.elementRef, this.config);
    };
    NgsRevealDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngsReveal]'
                },] },
    ];
    /** @nocollapse */
    NgsRevealDirective.ctorParameters = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__["NgsRevealService"], },
    ];
    NgsRevealDirective.propDecorators = {
        'visibility': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.visibility',] },],
        '_config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngsReveal',] },],
    };
    return NgsRevealDirective;
}(_ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__["AbstractNgsRevealDirective"]));
//# sourceMappingURL=ngs-reveal.directive.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng-scrollreveal/index.js ***!
  \***********************************************/
/*! exports provided: WindowService, NgsRevealService, NgsRevealConfig, NgsRevealDirective, NgsRevealSetDirective, NgsRevealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngs-reveal.module */ "./node_modules/ng-scrollreveal/ngs-reveal.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["WindowService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealSetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealModule", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/ngs-reveal.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng-scrollreveal/ngs-reveal.module.js ***!
  \***********************************************************/
/*! exports provided: WindowService, NgsRevealService, NgsRevealConfig, NgsRevealDirective, NgsRevealSetDirective, NgsRevealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealModule", function() { return NgsRevealModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/index */ "./node_modules/ng-scrollreveal/services/index.js");
/* harmony import */ var _directives_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/index */ "./node_modules/ng-scrollreveal/directives/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_2__["WindowService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealSetDirective"]; });







/**
 * Main module of the library
 */
var NgsRevealModule = (function () {
    function NgsRevealModule() {
    }
    NgsRevealModule.forRoot = function () {
        return {
            ngModule: NgsRevealModule,
            providers: [_services_index__WEBPACK_IMPORTED_MODULE_2__["WindowService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealConfig"]]
        };
    };
    NgsRevealModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    exports: [_directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealSetDirective"]],
                    declarations: [_directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealSetDirective"]]
                },] },
    ];
    /** @nocollapse */
    NgsRevealModule.ctorParameters = [];
    return NgsRevealModule;
}());
//# sourceMappingURL=ngs-reveal.module.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/index.js ***!
  \********************************************************/
/*! exports provided: NgsRevealService, NgsRevealConfig, WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngs_reveal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngs-reveal.service */ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return _ngs_reveal_service__WEBPACK_IMPORTED_MODULE_0__["NgsRevealService"]; });

/* harmony import */ var _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngs-reveal-config */ "./node_modules/ng-scrollreveal/services/ngs-reveal-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__["NgsRevealConfig"]; });

/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.service */ "./node_modules/ng-scrollreveal/services/window.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/ngs-reveal-config.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/ngs-reveal-config.js ***!
  \********************************************************************/
/*! exports provided: NgsRevealConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return NgsRevealConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgScrollReveal directives.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ngsReveal directives used in the application.
 */
var NgsRevealConfig = (function () {
    function NgsRevealConfig() {
        // 'bottom', 'left', 'top', 'right'
        this.origin = 'bottom';
        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        this.distance = '20px';
        // Time in milliseconds.
        this.duration = 500;
        this.delay = 0;
        // Starting angles in degrees, will transition from these values to 0 in all axes.
        this.rotate = { x: 0, y: 0, z: 0 };
        // Starting opacity value, before transitioning to the computed opacity.
        this.opacity = 0;
        // Starting scale value, will transition from this value to 1
        this.scale = 0.9;
        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        this.easing = 'cubic-bezier(0.6, 0.2, 0.1, 1)';
        // true/false to control reveal animations on mobile.
        this.mobile = true;
        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        this.reset = false;
        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        this.useDelay = 'always';
        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        this.viewFactor = 0.2;
        // Pixel values that alter the container boundaries.
        // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
        // --
        // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
        this.viewOffset = { top: 0, right: 0, bottom: 0, left: 0 };
    }
    NgsRevealConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgsRevealConfig.ctorParameters = [];
    return NgsRevealConfig;
}());
//# sourceMappingURL=ngs-reveal-config.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/ngs-reveal.service.js ***!
  \*********************************************************************/
/*! exports provided: NgsRevealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return NgsRevealService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngs-reveal-config */ "./node_modules/ng-scrollreveal/services/ngs-reveal-config.js");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.service */ "./node_modules/ng-scrollreveal/services/window.service.js");



/**
 * Service to inject in directives to use ScrollReveal JS.
 * It delegates the work to SR, when DOM manipulation is possible (i.e app is not running in a web worker for e.g).
 * If not possible, most methods simply do nothing, as DOM elements are not available anyway.
 */
var NgsRevealService = (function () {
    function NgsRevealService(config, windowService) {
        this.config = config;
        this.windowService = windowService;
        this.window = windowService.nativeWindow;
        if (this.window) {
            // init the scrollReveal library with injected config
            var srConfig = Object.assign({}, config || {});
            this.sr = ScrollReveal(srConfig);
        }
    }
    /**
     * Method to reveal a single DOM element.
     * @param elementRef  a reference to the element to reveal
     * @param config      (optional) custom configuration to use when revealing this element
     */
    NgsRevealService.prototype.reveal = function (elementRef, config) {
        if (!this.window) {
            return null;
        }
        return elementRef.nativeElement ?
            this.sr.reveal(elementRef.nativeElement, config) : this.sr;
    };
    /**
     * Method to reveal a set of DOM elements.
     * @param parentElementRef  the parent DOM element encaspulating the child elements to reveal
     * @param selector          a list of CSS selectors (comma-separated) that identifies child elements to reveal
     * @param interval          (optional) interval in milliseconds, to animate child elemnts sequentially
     * @param config            (optional) custom configuration to use when revealing this set of elements
     */
    NgsRevealService.prototype.revealSet = function (parentElementRef, selector, interval, config) {
        if (!this.window) {
            return null;
        }
        return parentElementRef.nativeElement ?
            this.sr.reveal(selector, config, interval) : this.sr;
    };
    /**
     * Method to synchronize and consider newly added child elements (for e.g when child elements were added asynchronously to parent DOM) .
     */
    NgsRevealService.prototype.sync = function () {
        if (this.window) {
            this.sr.sync();
        }
    };
    NgsRevealService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgsRevealService.ctorParameters = [
        { type: _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__["NgsRevealConfig"], },
        { type: _window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"], },
    ];
    return NgsRevealService;
}());
//# sourceMappingURL=ngs-reveal.service.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/window.service.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/window.service.js ***!
  \*****************************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Service to interact with the window object.
 */
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    WindowService.ctorParameters = [];
    return WindowService;
}());
function _window() {
    // Return the global native browser window object
    return typeof window !== 'undefined' ? window : undefined;
}
//# sourceMappingURL=window.service.js.map

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

/***/ "./node_modules/rxjs-compat/_esm5/operators/filter.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/filter.js ***!
  \************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"]; });


//# sourceMappingURL=filter.js.map

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

/***/ "./src/.pages/extra/blankpage/blankpage.component.css":
/*!************************************************************!*\
  !*** ./src/.pages/extra/blankpage/blankpage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2V4dHJhL2JsYW5rcGFnZS9ibGFua3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/.pages/extra/blankpage/blankpage.component.html":
/*!*************************************************************!*\
  !*** ./src/.pages/extra/blankpage/blankpage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  blankpage works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/.pages/extra/blankpage/blankpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/.pages/extra/blankpage/blankpage.component.ts ***!
  \***********************************************************/
/*! exports provided: BlankpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankpageComponent", function() { return BlankpageComponent; });
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

var BlankpageComponent = /** @class */ (function () {
    function BlankpageComponent() {
    }
    BlankpageComponent.prototype.ngOnInit = function () {
    };
    BlankpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blankpage',
            template: __webpack_require__(/*! ./blankpage.component.html */ "./src/.pages/extra/blankpage/blankpage.component.html"),
            styles: [__webpack_require__(/*! ./blankpage.component.css */ "./src/.pages/extra/blankpage/blankpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankpageComponent);
    return BlankpageComponent;
}());



/***/ }),

/***/ "./src/.pages/extra/extra.module.ts":
/*!******************************************!*\
  !*** ./src/.pages/extra/extra.module.ts ***!
  \******************************************/
/*! exports provided: ExtraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraModule", function() { return ExtraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _extra_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra.routing */ "./src/.pages/extra/extra.routing.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ng_scrollreveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-scrollreveal */ "./node_modules/ng-scrollreveal/index.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-isotope */ "./node_modules/ngx-isotope/ngx-isotope.umd.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_isotope__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@pages/components/slider/slider.module */ "./src/.pages/@pages/components/slider/slider.module.ts");
/* harmony import */ var _blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blankpage/blankpage.component */ "./src/.pages/extra/blankpage/blankpage.component.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/.pages/@pages/components/shared.module.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/.pages/extra/gallery/gallery.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/.pages/extra/timeline/timeline.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/.pages/extra/invoice/invoice.component.ts");
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gallery/gallery.service */ "./src/.pages/extra/gallery/gallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//NGX Bootstrap Components


//Thirdparty



// Dependant of pg-slider


var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

//Demo Page






var ExtraModule = /** @class */ (function () {
    function ExtraModule() {
    }
    ExtraModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_extra_routing__WEBPACK_IMPORTED_MODULE_3__["ExtraRouts"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ng_scrollreveal__WEBPACK_IMPORTED_MODULE_5__["NgsRevealModule"].forRoot(),
                ngx_isotope__WEBPACK_IMPORTED_MODULE_6__["IsotopeModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_9__["pgSliderModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            providers: [_gallery_gallery_service__WEBPACK_IMPORTED_MODULE_15__["GalleryService"], {
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }],
            declarations: [_blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_10__["BlankpageComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__["InvoiceComponent"]]
        })
    ], ExtraModule);
    return ExtraModule;
}());



/***/ }),

/***/ "./src/.pages/extra/extra.routing.ts":
/*!*******************************************!*\
  !*** ./src/.pages/extra/extra.routing.ts ***!
  \*******************************************/
/*! exports provided: ExtraRouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraRouts", function() { return ExtraRouts; });
/* harmony import */ var _blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blankpage/blankpage.component */ "./src/.pages/extra/blankpage/blankpage.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/.pages/extra/timeline/timeline.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/.pages/extra/invoice/invoice.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/.pages/extra/gallery/gallery.component.ts");




//Routes
var ExtraRouts = [
    {
        path: '',
        children: [{
                path: 'blank',
                component: _blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_0__["BlankpageComponent"]
            }, {
                path: 'timeline',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"],
                data: {
                    title: 'timeline'
                }
            }, {
                path: 'invoice',
                component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"],
                data: {
                    title: 'invoice'
                }
            }, {
                path: 'gallery',
                component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"],
                data: {
                    title: 'gallery'
                }
            },
            {
                // Used for demo purpose
                // Only in casual and executive
                path: 'timeline/:type',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"],
                data: {
                    title: 'timeline'
                }
            }]
    }
];


/***/ }),

/***/ "./src/.pages/extra/gallery/gallery.component.html":
/*!*********************************************************!*\
  !*** ./src/.pages/extra/gallery/gallery.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-fixed-lg p-l-0 p-r-0\">\r\n    <pg-container>\r\n      <isotope-grid class=\"gallery\" [options]=\"galleryOptions\" [@enterAnimation]=\"_isLoading == true ?'loading':'ready'\">\r\n          <div class=\"gallery-filters p-t-20 p-b-10\">\r\n              <ul class=\"list-inline text-right\">\r\n                <li class=\"hint-text\">Sort by: </li>&nbsp;\r\n                <li><a href=\"javascript:void(0)\" class=\"active text-master p-r-5 p-l-5\">Name</a></li>&nbsp;\r\n                <li><a href=\"javascript:void(0)\" class=\"text-master hint-text p-r-5 p-l-5\">Views</a></li>&nbsp;\r\n                <li><a href=\"javascript:void(0)\" class=\"text-master hint-text p-r-5 p-l-5\">Cost</a></li>&nbsp;\r\n                <li>\r\n                  <button class=\"btn btn-primary m-l-10\" (click)=\"slideRight.show()\">More filters</button>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          <isotope-item *ngFor=\"let item of feed; let isFirst = first\" class=\"\">\r\n            <div class=\"gallery-item\"  [class.first] = \"isFirst\" [attr.data-width]=\"item.featured ? 2 : 1\" [attr.data-height]=\"item.featured ? 2 : 1\" (click)=\"toggleModal()\">\r\n              <!-- START PREVIEW -->\r\n              <img *ngIf=\"item.thumbnail.length === 1\" src=\"{{item.thumbnail}}\" alt=\"\" class=\"image-responsive-height\">\r\n\r\n              <div *ngIf=\"item.thumbnail.length > 1\" class=\"swiper-container full-height\" [swiper]=\"config\" [(index)]=\"index\">\r\n                  <div class=\"swiper-wrapper full-height\">\r\n                      <div class=\"swiper-slide slide-front full-height\" [ngStyle] = \"{'background-image': 'url('+item.thumbnail[0]+')'}\">\r\n                        </div>\r\n                        <div class=\" swiper-slide  slide-back full-height\" [ngStyle] = \"{'background-image': 'url('+item.thumbnail[1]+')'}\">\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n              \r\n              <!-- END PREVIEW -->\r\n              <!-- START ITEM OVERLAY DESCRIPTION -->\r\n              <div class=\"overlayer bottom-left full-width\">\r\n                <div class=\"overlayer-wrapper item-info \">\r\n                  <div class=\"gradient-grey p-l-20 p-r-20 p-t-20 p-b-5\">\r\n                    <div *ngIf=\"item.featured !== true\">\r\n                      <p class=\"pull-left bold text-white fs-14 p-t-10\">{{item.title}}</p>\r\n                      <h5 class=\"pull-right semi-bold text-white font-montserrat bold\">{{item.price}}</h5>\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"item.featured === true\">\r\n                        <h3 class=\"pull-left bold text-white no-margin\">{{item.title}}</h3>\r\n                        <h3 class=\"pull-right semi-bold text-white font-montserrat bold no-margin\">{{item.price}}</h3>\r\n                        <div class=\"clearfix\"></div>\r\n                        <span class=\"hint-text pull-left text-white\">{{item.caption}}</span>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"\">\r\n                        <h5 class=\"text-white light\">{{item.description}}</h5>\r\n                      </div>\r\n\r\n\r\n                    <div class=\"m-t-10\">\r\n                      <div class=\"thumbnail-wrapper d32 circular m-t-5\">\r\n                        <img width=\"40\" height=\"40\" src=\"{{item.author.avatar}}\" data-src=\"{{item.author.avatar}}\" pgRetina src2x=\"{{item.author.avatar2x}}\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"inline m-l-10\">\r\n                        <p class=\"no-margin text-white fs-12\">Designed by {{item.author.name}}</p>\r\n                        <p class=\"rating\">\r\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\r\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\r\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\r\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\r\n                          <i class=\"fa fa-star\"></i>\r\n                        </p>\r\n                      </div>\r\n                      <div class=\"pull-right m-t-10\">\r\n                        <button class=\"btn btn-white btn-xs btn-mini bold fs-14\" type=\"button\">+</button>\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- END PRODUCT OVERLAY DESCRIPTION -->\r\n            </div>\r\n          </isotope-item>\r\n      </isotope-grid>\r\n    </pg-container>\r\n  </div>\r\n  \r\n  <!-- Modal -->\r\n  <div bsModal #fadInModal=\"bs-modal\" class=\"modal item-modal fade fill-in\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n\r\n      <div class=\"modal-dialog \">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body\">\r\n              <div class=\"container-fluid\">\r\n                  <div class=\"row dialog__overview\">\r\n                    <div class=\"col-md-7 no-padding item-slideshow-wrapper full-height\">\r\n     \r\n                      <div class=\"swiper-container full-height\" [swiper]=\"configModal\" [(index)]=\"index2\">\r\n                          <div class=\"swiper-wrapper full-height\">\r\n                              <div class=\"swiper-slide slide-front full-height\" [ngStyle] = \"{'background-image': 'url(assets/img/gallery/item-square.jpg)'}\">\r\n                                </div>\r\n                                <div class=\" swiper-slide  slide-back full-height\" [ngStyle] = \"{'background-image': 'url(assets/img/gallery/item-square.jpg)'}\">\r\n                                </div>\r\n                          </div>\r\n                        \r\n                          <div class=\"swiper-pagination\"></div>\r\n                        \r\n                          <div class=\"swiper-button swiper-button-prev\" (click)=\"prevSlide()\">\r\n                            <i class=\"fa fa-chevron-left\"></i>\r\n                          </div>\r\n                          <div class=\"swiper-button swiper-button-next\" (click)=\"nextSlide()\">\r\n                            <i class=\"fa fa-chevron-right\"></i>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"col-md-12 d-md-none d-lg-none d-xl-none bg-info-dark\">\r\n                      <div class=\"container-xs-height\">\r\n                        <div class=\"row row-xs-height\">\r\n                          <div class=\"col-8 col-xs-height col-middle no-padding\">\r\n                            <div class=\"thumbnail-wrapper d32 circular inline\">\r\n                              <img width=\"32\" height=\"32\" src=\"assets/img/profiles/2.jpg\" data-src=\"assets/img/profiles/2.jpg\" data-src-retina=\"assets/img/profiles/2x.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"inline m-l-15\">\r\n                              <p class=\"text-white no-margin\">Alex Nester</p>\r\n                              <p class=\"hint-text text-white no-margin fs-12\">Senior UI/UX designer</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-4 col-xs-height col-middle text-right  no-padding\">\r\n                            <h2 class=\"bold text-white price font-montserrat\">$20.00</h2>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 p-r-35 p-t-35 p-l-35 full-height item-description\">\r\n                      <h2 class=\"semi-bold no-margin font-montserrat\">Happy Ninja</h2>\r\n                      <p class=\"rating fs-12 m-t-5\">\r\n                        <i class=\"fa fa-star \"></i>&nbsp;\r\n                        <i class=\"fa fa-star \"></i>&nbsp;\r\n                        <i class=\"fa fa-star \"></i>&nbsp;\r\n                        <i class=\"fa fa-star-o\"></i>&nbsp;\r\n                        <i class=\"fa fa-star-o\"></i>&nbsp;\r\n                      </p>\r\n                      <p class=\"fs-13\">When it comes to digital design, the lines between functionality, aesthetics, and psychology are inseparably blurred. Without the constraints of the physical world, there’s no natural form to fall back on, and every bit of constraint and affordance must be introduced intentionally. Good design makes a product useful.\r\n                      </p>\r\n                      <div class=\"row m-b-20 m-t-20\">\r\n                        <div class=\"col-6\"><span class=\"font-montserrat all-caps fs-11\">Price ranges</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">$20.00 - $40.00</div>\r\n                      </div>\r\n                      <div class=\"row m-t-20 m-b-10\">\r\n                        <div class=\"col-6\"><span class=\"font-montserrat all-caps fs-11\">Paint sizes</span>\r\n                        </div>\r\n                      </div>\r\n                      <button class=\"btn btn-white\">S</button>&nbsp;\r\n                      <button class=\"btn btn-white\">M</button>&nbsp;\r\n                      <button class=\"btn btn-white\">L</button>&nbsp;\r\n                      <button class=\"btn btn-white\">XL</button>&nbsp;\r\n                      <br>\r\n                      <button class=\"btn btn-primary buy-now\">Buy Now</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row dialog__footer bg-info-dark d-sm-none d-none d-sm-flex d-lg-flex d-xl-flex\">\r\n                    <div class=\"col-md-7 full-height separator\">\r\n                      <div class=\"container-xs-height\">\r\n                        <div class=\"row row-xs-height\">\r\n                          <div class=\"col-7 col-xs-height col-middle no-padding\">\r\n                            <div class=\"thumbnail-wrapper d48 circular inline\">\r\n                              <img width=\"48\" height=\"48\" src=\"assets/img/profiles/2.jpg\" data-src=\"assets/img/profiles/2.jpg\" data-src-retina=\"assets/img/profiles/2x.jpg\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"inline m-l-15\">\r\n                              <p class=\"text-white no-margin\">Alex Nester</p>\r\n                              <p class=\"hint-text text-white no-margin fs-12\">Senior UI/UX designer</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-5 col-xs-height col-middle text-right  no-padding\">\r\n                            <h2 class=\"bold text-white price font-montserrat\">$20.00</h2>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 full-height\">\r\n                      <ul class=\"recommended list-inline pull-right m-t-10 m-b-0\">\r\n                        <li>\r\n                          <a href=\"javascript:void(0)\"><img src=\"assets/img/gallery/thumb-1.jpg\"></a>\r\n                        </li>\r\n                        <li>\r\n                          <a href=\"javascript:void(0)\"><img src=\"assets/img/gallery/thumb-2.jpg\"></a>\r\n                        </li>\r\n                        <li>\r\n                          <a href=\"javascript:void(0)\"><img src=\"assets/img/gallery/thumb-3.jpg\"></a>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <button class=\"close action top-right\" (click)=\"fadInModal.hide()\"><i class=\"pg pg-close fs-14\"></i>\r\n                </button>\r\n                \r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n\r\n\r\n    <!-- MODAL STICK UP SMALL ALERT -->\r\n    <div bsModal #slideRight=\"bs-modal\" class=\"modal filters-modal fade slide-right\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content-wrapper\">\r\n          <div class=\"modal-content\">\r\n            \r\n            <div class=\"padding-40 \">\r\n              <a (click)=\"slideRight.hide()\" class=\"filter-close quickview-toggle pg pg-close\" href=\"javascript:void(0)\"></a>\r\n              <form class=\"\" role=\"form\">\r\n                <h5 class=\"all-caps font-montserrat fs-12 m-b-20\">Advance filters</h5>\r\n                <div class=\"form-group form-group-default \" pgFormGroupDefault>\r\n                  <label>Project</label>\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Type of select a label\">\r\n                </div>\r\n                <h5 class=\"all-caps font-montserrat fs-12 m-b-20 m-t-25\">Advance filters</h5>\r\n                <div class=\"radio radio-danger\">\r\n                  <input type=\"radio\" checked=\"checked\" value=\"1\" name=\"filter\" id=\"asc\">\r\n                  <label for=\"asc\">Ascending order</label>\r\n                  <br>\r\n                  <input type=\"radio\" value=\"2\" name=\"filter\" id=\"views\">\r\n                  <label for=\"views\">Most viewed</label>\r\n                  <br>\r\n                  <input type=\"radio\" value=\"3\" name=\"filter\" id=\"cost\">\r\n                  <label for=\"cost\">Cost</label>\r\n                  <br>\r\n                  <input type=\"radio\" value=\"4\" name=\"filter\" id=\"latest\">\r\n                  <label for=\"latest\">Latest</label>\r\n                </div>\r\n                <h5 class=\"all-caps font-montserrat fs-12 m-b-20 m-t-25\">Price range</h5>\r\n                <pg-slider name=\"filter-slider\" Range [Color]=\"'danger'\" [(ngModel)]=\"rangeValue\" [Step]=\"10\" [DefaultValue]=\"[20, 50]\"></pg-slider>\r\n                <button (click)=\"slideRight.hide()\" class=\"pull-right btn btn-danger btn-cons m-t-40\">Apply</button>\r\n              </form>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n    <!-- END MODAL STICK UP SMALL ALERT -->"

/***/ }),

/***/ "./src/.pages/extra/gallery/gallery.component.scss":
/*!*********************************************************!*\
  !*** ./src/.pages/extra/gallery/gallery.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Swiper 4.5.0\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: February 22, 2019\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}\n.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s top,.2s -webkit-transform;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s left,.2s -webkit-transform;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s right,.2s -webkit-transform;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\n.item-modal.fade.fill-in.show {\n  background: rgba(55, 58, 71, 0.9); }\n.item-modal .modal-dialog {\n  width: 845px;\n  max-width: 845px; }\n.item-modal .modal-dialog .dialog__overview {\n    background: white;\n    padding: 0;\n    text-align: left;\n    border: 1px solid rgba(0, 0, 0, 0.8);\n    height: 516px; }\n.item-modal .modal-dialog .dialog__overview .buy-now {\n      position: absolute;\n      bottom: 20px;\n      right: 35px; }\n.item-modal .modal-dialog .close {\n    top: 15px;\n    right: 15px;\n    z-index: 100; }\n.item-modal .modal-body {\n  padding: 0;\n  background: #fff; }\n.item-modal .dialog__footer {\n  height: 75px; }\n.item-modal .slide {\n  width: 516px;\n  height: 516px;\n  display: block;\n  overflow: hidden;\n  background-image: url(/assets/img/gallery/item-square.jpg);\n  background-size: cover; }\n.item-modal .swiper-button {\n  background: transparent;\n  color: white;\n  font-size: 18px;\n  opacity: .8;\n  height: 22px;\n  margin-top: -5px; }\n:host /deep/ .swiper-pagination {\n  text-align: right;\n  padding-right: 25px; }\n:host /deep/ .swiper-pagination .swiper-pagination-bullet {\n    background: rgba(0, 0, 0, 0.3);\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    display: inline-block;\n    margin-left: 6px; }\n:host /deep/ .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {\n      background: #fff; }\n.filter-close {\n  position: absolute;\n  right: 12px;\n  top: 2px;\n  color: #788195;\n  padding: 6px;\n  opacity: .4; }\n@media (max-width: 920px) {\n  .gallery-item.first {\n    display: none; } }\n@media (max-width: 767px) {\n  .item-modal .modal-dialog {\n    width: 400px;\n    max-width: 400px;\n    margin: 0 auto; }\n    .item-modal .modal-dialog .container-fluid {\n      height: 100%;\n      padding-left: 30px;\n      padding-right: 30px; }\n    .item-modal .modal-dialog .dialog__overview {\n      height: 100%;\n      margin-right: -30px;\n      margin-left: -30px;\n      border: none; }\n    .item-modal .modal-dialog .modal-body {\n      height: 90%;\n      overflow-y: auto; }\n  .item-slideshow-wrapper {\n    height: 515px !important; }\n  .item-description {\n    height: auto !important; }\n    .item-description .buy-now {\n      position: static !important;\n      float: right;\n      margin-bottom: 20px; }\n  .swiper-container .swiper-slide {\n    width: 100% !important; }\n  .dialog__footer {\n    display: none !important; } }\n@media (max-width: 420px) {\n  .gallery {\n    margin-top: 80px; }\n  .gallery-filters {\n    top: -90px; }\n  .item-modal .modal-body {\n    width: 100%;\n    max-width: 100%; } }\n@media (max-width: 610px) {\n  .gallery-item, .gallery {\n    width: 100% !important; } }\n@media (min-width: 768px) {\n  .item-modal .modal-body .container-fluid > .row {\n    margin-left: -30px;\n    margin-right: -30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MiLCJzcmMvLnBhZ2VzL2V4dHJhL2dhbGxlcnkvRTpcXFRUTVMtM1xcRUtWVC9zcmNcXC5wYWdlc1xcZXh0cmFcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILGtCQUFrQixjQUFjLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLFVBQVUsU0FBUyxDQUFDO0FBQUEsMkNBQTJDLFVBQVUsQ0FBQztBQUFBLDJDQUE0SixxQkFBcUIsQ0FBQztBQUFBLGdCQUFnQixrQkFBa0IsV0FBVyxZQUFZLFVBQVUsQUFBNkQsYUFBYSxBQUE4QyxzQ0FBc0MsQUFBaUMsOEJBQThCLEFBQTlCLGlEQUE4QixnREFBZ0QsQUFBK0Isc0JBQXNCLENBQUM7QUFBQSx3REFBd0QscUNBQXFDLDRCQUE0QixDQUFDO0FBQUEsMkNBQXFGLGNBQWMsQ0FBQztBQUFBLDRDQUErSCxvQ0FBb0MsYUFBYSxDQUFDO0FBQUEsY0FBd0QsY0FBYyxXQUFXLFlBQVksa0JBQWtCLEFBQThDLHNDQUFzQyxBQUFpQyw4QkFBOEIsQUFBOUIsaURBQThCLCtDQUErQyxDQUFDO0FBQUEsOEJBQThCLGlCQUFpQixDQUFDO0FBQUEsd0VBQXdFLFdBQVcsQ0FBQztBQUFBLDZDQUF5SCx1QkFBdUIsQUFBcUQsNkNBQTZDLEFBQXdDLHFDQUFxQyxzREFBc0QsQ0FBQztBQUFBLHFCQUFxQiwyQkFBMkIsa0JBQWtCLENBQUM7QUFBQSwrU0FBK1Msb0NBQW9DLDJCQUEyQixDQUFDO0FBQUEsOExBQThMLGtCQUFrQixPQUFPLE1BQU0sV0FBVyxZQUFZLG9CQUFvQixVQUFVLENBQUM7QUFBQSwrQ0FBd1Msc0VBQXNFLENBQUM7QUFBQSxnREFBdVMsdUVBQXVFLENBQUM7QUFBQSw4Q0FBMlMscUVBQXFFLENBQUM7QUFBQSxpREFBd1Msd0VBQXdFLENBQUM7QUFBQSxrRkFBeUcsa0JBQWtCLENBQUM7QUFBQSw4RUFBcUcsa0JBQWtCLENBQUM7QUFBQSx3Q0FBd0Msa0JBQWtCLFFBQVEsV0FBVyxZQUFZLGlCQUFpQixXQUFXLGVBQWUsMEJBQTBCLDJCQUEyQiwyQkFBMkIsQ0FBQztBQUFBLHNGQUFzRixZQUFZLFlBQVksbUJBQW1CLENBQUM7QUFBQSw4REFBOEQsb1JBQW9SLFVBQVUsVUFBVSxDQUFDO0FBQUEsOERBQThELG9SQUFvUixXQUFXLFNBQVMsQ0FBQztBQUFBLHNHQUFzRyxtUkFBbVIsQ0FBQztBQUFBLHNHQUFzRyxtUkFBbVIsQ0FBQztBQUFBLHNHQUFzRyxtUkFBbVIsQ0FBQztBQUFBLHNHQUFzRyxtUkFBbVIsQ0FBQztBQUFBLG9CQUFvQixZQUFZLENBQUM7QUFBQSxtQkFBbUIsa0JBQWtCLGtCQUFrQixBQUF5RCx1QkFBdUIscUNBQXFDLDZCQUE2QixVQUFVLENBQUM7QUFBQSw0Q0FBNEMsU0FBUyxDQUFDO0FBQUEsOEdBQThHLFlBQVksT0FBTyxVQUFVLENBQUM7QUFBQSxtQ0FBbUMsZ0JBQWdCLFdBQVcsQ0FBQztBQUFBLDZEQUE2RCw2QkFBNkIsQUFBeUIscUJBQXFCLGlCQUFpQixDQUFDO0FBQUEsb0VBQW9FLDJCQUEyQixBQUF1QixrQkFBa0IsQ0FBQztBQUFBLHlFQUF5RSwyQkFBMkIsQUFBdUIsa0JBQWtCLENBQUM7QUFBQSx5RUFBeUUsNkJBQTZCLEFBQXlCLG9CQUFvQixDQUFDO0FBQUEsOEVBQThFLDZCQUE2QixBQUF5QixvQkFBb0IsQ0FBQztBQUFBLHlFQUF5RSw2QkFBNkIsQUFBeUIsb0JBQW9CLENBQUM7QUFBQSw4RUFBOEUsNkJBQTZCLEFBQXlCLG9CQUFvQixDQUFDO0FBQUEsMEJBQTBCLFVBQVUsV0FBVyxxQkFBcUIsbUJBQW1CLGdCQUFnQixVQUFVLENBQUM7QUFBQSxnQ0FBZ0MsWUFBWSxTQUFTLFVBQVUsQUFBd0IsZ0JBQWdCLHdCQUF3QixxQkFBcUIsZUFBZSxDQUFDO0FBQUEsdURBQXVELGNBQWMsQ0FBQztBQUFBLGlDQUFpQyxVQUFVLGtCQUFrQixDQUFDO0FBQUEsc0RBQXNELFdBQVcsUUFBUSx3Q0FBd0MsK0JBQStCLENBQUM7QUFBQSxnRkFBZ0YsYUFBYSxhQUFhLENBQUM7QUFBQSx3RkFBd0YsUUFBUSxtQ0FBbUMsQUFBK0IsMkJBQTJCLFNBQVMsQ0FBQztBQUFBLGtIQUFrSCxxQkFBcUIsQUFBaUQseUNBQXlDLEFBQW9DLGlDQUFpQyxzREFBc0QsQ0FBQztBQUFBLGtGQUFrRixZQUFZLENBQUM7QUFBQSwwRkFBMEYsU0FBUyxtQ0FBbUMsQUFBK0IsMkJBQTJCLGtCQUFrQixDQUFDO0FBQUEsb0hBQXNLLDBDQUEwQyxBQUFxQyxrQ0FBa0MsdURBQXVELENBQUM7QUFBQSwrR0FBa0ssMkNBQTJDLEFBQXNDLG1DQUFtQyx3REFBd0QsQ0FBQztBQUFBLCtCQUErQiwyQkFBMkIsaUJBQWlCLENBQUM7QUFBQSxtRUFBbUUsbUJBQW1CLGtCQUFrQixPQUFPLE1BQU0sV0FBVyxZQUFZLDJCQUEyQixBQUF1QixtQkFBbUIsa0NBQWtDLEFBQThCLHlCQUF5QixDQUFDO0FBQUEseUZBQXlGLG1DQUFtQyxBQUErQiwwQkFBMEIsQ0FBQztBQUFBLDZKQUE2SixXQUFXLFdBQVcsT0FBTyxLQUFLLENBQUM7QUFBQSw2SkFBNkosVUFBVSxZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQUEsMERBQTBELGVBQWUsQ0FBQztBQUFBLHVEQUF1RCxnQ0FBZ0MsQ0FBQztBQUFBLDJGQUEyRixlQUFlLENBQUM7QUFBQSwwREFBMEQsZUFBZSxDQUFDO0FBQUEsdURBQXVELDBCQUEwQixDQUFDO0FBQUEsMkZBQTJGLGVBQWUsQ0FBQztBQUFBLHdCQUF3QixZQUFZLENBQUM7QUFBQSxrQkFBa0IsbUJBQW1CLGtCQUFrQixzQkFBc0IseUJBQXlCLENBQUM7QUFBQSwrQ0FBK0Msa0JBQWtCLFFBQVEsV0FBVyxXQUFXLFdBQVcsU0FBUyxDQUFDO0FBQUEsNkNBQTZDLGtCQUFrQixVQUFVLE9BQU8sV0FBVyxVQUFVLFVBQVUsQ0FBQztBQUFBLHVCQUF1QixZQUFZLFdBQVcsa0JBQWtCLDBCQUEwQixtQkFBbUIsT0FBTyxLQUFLLENBQUM7QUFBQSw4QkFBOEIsV0FBVyxDQUFDO0FBQUEsdUJBQXVCLFlBQVksQ0FBQztBQUFBLHVCQUF1QixXQUFXLFlBQVksQUFBNkQsYUFBYSxBQUE0RSx1QkFBdUIsQUFBMEUsbUJBQW1CLGlCQUFpQixDQUFDO0FBQUEsb0ZBQW9GLGVBQWUsZ0JBQWdCLHNCQUFzQixrQkFBa0IsQ0FBQztBQUFBLHFCQUFxQixXQUFXLENBQUM7QUFBQSx1QkFBdUIsV0FBVyxZQUFZLGtCQUFrQixTQUFTLFFBQVEsa0JBQWtCLGlCQUFpQixXQUFXLDZCQUE2QixBQUF5QixxQkFBcUIsa0VBQWtFLHlEQUF5RCxDQUFDO0FBQUEsNkJBQTZCLGNBQWMsV0FBVyxXQUFXLFlBQVkseTdDQUF5N0Msd0JBQXdCLHFCQUFxQiwyQkFBMkIsQ0FBQztBQUFBLG1DQUFtQyxxN0NBQXE3QyxDQUFDO0FBQUEseUNBQXlDLEtBQUssaUNBQWlDLHdCQUF3QixDQUFDLENBQUM7QUFBQSxpQ0FBaUMsS0FBSyxpQ0FBaUMsd0JBQXdCLENBQUMsQ0FBQztBQUFBLHVDQUF1QyxrQkFBa0IsT0FBTyxNQUFNLG9CQUFvQixVQUFVLGFBQWEsQ0FBQztBQUFBLGdFQUFtSixtQ0FBbUMsQ0FBQztBQUFBLHFDQUFxQyxvQkFBb0IsQUFBbUUsMkJBQTJCLENBQUM7QUFBQSxtREFBbUQsbUJBQW1CLENBQUM7QUFBQSw2R0FBNkcsbUJBQW1CLENBQUM7QUFBQSx1QkFBdUIsZ0JBQWdCLENBQUM7QUFBQSxxQ0FBcUMsb0JBQW9CLG1DQUFtQywyQkFBMkIsVUFBVSxrQkFBa0IsNkJBQTZCLEFBQXlCLHFCQUFxQixXQUFXLFdBQVcsQ0FBQztBQUFBLG1EQUFtRCxtQkFBbUIsQ0FBQztBQUFBLDBEQUEwRCxnQ0FBZ0MsQUFBNEIsdUJBQXVCLENBQUM7QUFBQSw2R0FBNkcsbUJBQW1CLENBQUM7QUFBQSx3TEFBd0wsb0JBQW9CLGtCQUFrQixDQUFDO0FBQUEsc01BQXNNLFVBQVUsbUNBQW1DLDBCQUEwQixDQUFDO0FBQUEsMkNBQTJDLGtCQUFrQixPQUFPLFNBQVMsV0FBVyxZQUFZLGdCQUFnQixXQUFXLDBCQUEwQixrQkFBa0IsU0FBUyxDQUFDO0FBQUEsdUJBQXVCLGdCQUFnQixDQUFDO0FBQUEscUNBQXFDLG9CQUFvQixtQ0FBbUMsMkJBQTJCLFNBQVMsQ0FBQztBQUFBLG1EQUFtRCxtQkFBbUIsQ0FBQztBQUFBLDZHQUE2RyxtQkFBbUIsQ0FBQztBQUFBLHNNQUFzTSxVQUFVLG1DQUFtQywwQkFBMEIsQ0FBQztBQUFBLDRDQUE0QyxzQkFBc0IsQ0FBQztBQ1R4am1CO0VBRVEsa0NBQTZCLEVBQ2hDO0FBSEw7RUFLUSxhQUFZO0VBQ1osaUJBQWdCLEVBb0JuQjtBQTFCTDtJQVNZLGtCQUFpQjtJQUNqQixXQUFVO0lBQ1YsaUJBQWdCO0lBQ2hCLHFDQUFnQztJQUNoQyxjQUFhLEVBT2hCO0FBcEJUO01BZWdCLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osWUFBVyxFQUNkO0FBbEJiO0lBc0JZLFVBQVM7SUFDVCxZQUFXO0lBQ1gsYUFBWSxFQUNmO0FBekJUO0VBNEJRLFdBQVU7RUFDVixpQkFBZ0IsRUFDbkI7QUE5Qkw7RUFnQ1EsYUFBWSxFQUNmO0FBakNMO0VBbUNRLGFBQVk7RUFDWixjQUFhO0VBQ2IsZUFBYztFQUNkLGlCQUFnQjtFQUNoQiwyREFBMEQ7RUFDMUQsdUJBQXNCLEVBQ3pCO0FBekNMO0VBMkNRLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQixFQUNuQjtBQUdMO0VBQ0ksa0JBQWlCO0VBQ2pCLG9CQUFtQixFQVl0QjtBQWREO0lBSVEsK0JBQTBCO0lBQzFCLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixpQkFBZ0IsRUFJbkI7QUFiTDtNQVdZLGlCQUFnQixFQUNuQjtBQUlUO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxTQUFRO0VBQ1IsZUFBYztFQUNkLGFBQVk7RUFDWixZQUFXLEVBQ2Q7QUFFRDtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBO0FBRUw7RUFDSTtJQUVRLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsZUFBYyxFQWdCakI7SUFwQkw7TUFNWSxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLG9CQUFtQixFQUN0QjtJQVRUO01BV1ksYUFBWTtNQUNaLG9CQUFtQjtNQUNuQixtQkFBa0I7TUFDbEIsYUFBWSxFQUNmO0lBZlQ7TUFpQlksWUFBVztNQUNYLGlCQUFnQixFQUNuQjtFQUVMO0lBQ0kseUJBQXdCLEVBQzNCO0VBQ0Q7SUFDSSx3QkFBdUIsRUFNMUI7SUFQRDtNQUdRLDRCQUEyQjtNQUMzQixhQUFZO01BQ1osb0JBQW1CLEVBQ3RCO0VBRUw7SUFFUSx1QkFBc0IsRUFDekI7RUFFTDtJQUNJLHlCQUF3QixFQUMzQixFQUFBO0FBR1Q7RUFDSTtJQUNJLGlCQUFnQixFQUNuQjtFQUNEO0lBQ0ksV0FBVSxFQUNiO0VBQ0Q7SUFFUSxZQUFXO0lBQ1gsZ0JBQWUsRUFDbEIsRUFBQTtBQUlUO0VBQ0k7SUFDSSx1QkFBc0IsRUFDekIsRUFBQTtBQUVMO0VBQ0k7SUFDSSxtQkFBa0I7SUFDbEIsb0JBQW1CLEVBQ3RCLEVBQUEiLCJmaWxlIjoic3JjLy5wYWdlcy9leHRyYS9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN3aXBlciA0LjUuMFxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvc3dpcGVyL1xuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMTkgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogRmVicnVhcnkgMjIsIDIwMTlcbiAqL1xuLnN3aXBlci1jb250YWluZXJ7bWFyZ2luOjAgYXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MDt6LWluZGV4OjF9LnN3aXBlci1jb250YWluZXItbm8tZmxleGJveCAuc3dpcGVyLXNsaWRle2Zsb2F0OmxlZnR9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyey13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zd2lwZXItY29udGFpbmVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9LnN3aXBlci1jb250YWluZXItbXVsdGlyb3c+LnN3aXBlci13cmFwcGVyey13ZWJraXQtZmxleC13cmFwOndyYXA7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDttYXJnaW46MCBhdXRvfS5zd2lwZXItc2xpZGV7LXdlYmtpdC1mbGV4LXNocmluazowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5re3Zpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRle2hlaWdodDphdXRvfS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1jb250YWluZXItM2R7LXdlYmtpdC1wZXJzcGVjdGl2ZToxMjAwcHg7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixyaWdodCB0b3AsbGVmdCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQocmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9te2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItd3A4LWhvcml6b250YWwsLnN3aXBlci1jb250YWluZXItd3A4LWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyey1tcy10b3VjaC1hY3Rpb246cGFuLXk7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbCwuc3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWw+LnN3aXBlci13cmFwcGVyey1tcy10b3VjaC1hY3Rpb246cGFuLXg7dG91Y2gtYWN0aW9uOnBhbi14fS5zd2lwZXItYnV0dG9uLW5leHQsLnN3aXBlci1idXR0b24tcHJldntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3dpZHRoOjI3cHg7aGVpZ2h0OjQ0cHg7bWFyZ2luLXRvcDotMjJweDt6LWluZGV4OjEwO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToyN3B4IDQ0cHg7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCwuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWR7b3BhY2l0eTouMzU7Y3Vyc29yOmF1dG87cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWJ1dHRvbi1wcmV2LC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0e2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyMzAwN2FmZiclMkYlM0UlM0MlMkZzdmclM0VcIik7bGVmdDoxMHB4O3JpZ2h0OmF1dG99LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldntiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnonJTIwZmlsbCUzRCclMjMwMDdhZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpO3JpZ2h0OjEwcHg7bGVmdDphdXRvfS5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRle2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyM2ZmZmZmZiclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKX0uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFja3tiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjMwMDAwMDAnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjaywuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNre2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1wYWdpbmF0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjouM3Mgb3BhY2l0eTstby10cmFuc2l0aW9uOi4zcyBvcGFjaXR5O3RyYW5zaXRpb246LjNzIG9wYWNpdHk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7ei1pbmRleDoxMH0uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVue29wYWNpdHk6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9ue2JvdHRvbToxMHB4O2xlZnQ6MDt3aWR0aDoxMDAlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTowfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMzMpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY2KTstbXMtdHJhbnNmb3JtOnNjYWxlKC42Nik7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTstbXMtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42Nik7LW1zLXRyYW5zZm9ybTpzY2FsZSguNjYpO3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSguMzMpO3RyYW5zZm9ybTpzY2FsZSguMzMpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7d2lkdGg6OHB4O2hlaWdodDo4cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czoxMDAlO2JhY2tncm91bmQ6IzAwMDtvcGFjaXR5Oi4yfWJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2N1cnNvcjpwb2ludGVyfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle29wYWNpdHk6MTtiYWNrZ3JvdW5kOiMwMDdhZmZ9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7cmlnaHQ6MTBweDt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjZweCAwO2Rpc3BsYXk6YmxvY2t9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6OHB4fS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtdHJhbnNpdGlvbjouMnMgdG9wLC4ycyAtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uOi4ycyB0b3AsLjJzIC13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wLC4ycyAtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjAgNHB4fS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjouMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbjouMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgbGVmdDt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnQsLjJzIC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjouMnMgcmlnaHQsLjJzIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb246LjJzIHJpZ2h0LC4ycyAtd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHQ7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyByaWdodCwuMnMgLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiMwMDdhZmY7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7LW1zLXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9LnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhciwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGV7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXJ7d2lkdGg6NHB4O2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDojZmZmfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZXtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjI1KX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDojZmZmfS5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDB9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNre2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiMwMDB9LnN3aXBlci1wYWdpbmF0aW9uLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItc2Nyb2xsYmFye2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKX0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItc2Nyb2xsYmFye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MSU7Ym90dG9tOjNweDt6LWluZGV4OjUwO2hlaWdodDo1cHg7d2lkdGg6OTglfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItc2Nyb2xsYmFye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjNweDt0b3A6MSU7ei1pbmRleDo1MDt3aWR0aDo1cHg7aGVpZ2h0Ojk4JX0uc3dpcGVyLXNjcm9sbGJhci1kcmFne2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtib3JkZXItcmFkaXVzOjEwcHg7bGVmdDowO3RvcDowfS5zd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFne2N1cnNvcjptb3ZlfS5zd2lwZXItc2Nyb2xsYmFyLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItem9vbS1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyfS5zd2lwZXItem9vbS1jb250YWluZXI+Y2FudmFzLC5zd2lwZXItem9vbS1jb250YWluZXI+aW1nLC5zd2lwZXItem9vbS1jb250YWluZXI+c3Zne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWlufS5zd2lwZXItc2xpZGUtem9vbWVke2N1cnNvcjptb3ZlfS5zd2lwZXItbGF6eS1wcmVsb2FkZXJ7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbi1sZWZ0Oi0yMXB4O21hcmdpbi10b3A6LTIxcHg7ei1pbmRleDoxMDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJTstd2Via2l0LWFuaW1hdGlvbjpzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsZW5kKSBpbmZpbml0ZTthbmltYXRpb246c3dpcGVyLXByZWxvYWRlci1zcGluIDFzIHN0ZXBzKDEyLGVuZCkgaW5maW5pdGV9LnN3aXBlci1sYXp5LXByZWxvYWRlcjphZnRlcntkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6Jyc7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyMzZjNmM2YyclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZTphZnRlcntiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyM2ZmZiclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3BpbnsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb257cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3otaW5kZXg6LTEwMDB9LnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eX0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWN1YmV7b3ZlcmZsb3c6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3otaW5kZXg6MTt2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAwOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItY3ViZS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXNsaWRley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7LW1zLXRyYW5zZm9ybS1vcmlnaW46MTAwJSAwO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAwfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQrLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldntwb2ludGVyLWV2ZW50czphdXRvO3Zpc2liaWxpdHk6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6LjY7LXdlYmtpdC1maWx0ZXI6Ymx1cig1MHB4KTtmaWx0ZXI6Ymx1cig1MHB4KTt6LWluZGV4OjB9LnN3aXBlci1jb250YWluZXItZmxpcHtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7ei1pbmRleDowOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItY292ZXJmbG93IC5zd2lwZXItd3JhcHBlcnstbXMtcGVyc3BlY3RpdmU6MTIwMHB4fSIsIkBpbXBvcnQgJ35zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MnO1xyXG5cclxuLml0ZW0tbW9kYWx7XHJcbiAgICAmLmZhZGUuZmlsbC1pbi5zaG93e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTUsNTgsNzEsLjkpO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgICAgd2lkdGg6IDg0NXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogODQ1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRpYWxvZ19fb3ZlcnZpZXd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC44KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MTZweDtcclxuICAgICAgICAgICAgLmJ1eS1ub3d7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tb2RhbC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIC5kaWFsb2dfX2Zvb3RlcntcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgd2lkdGg6IDUxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNTE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvZ2FsbGVyeS9pdGVtLXNxdWFyZS5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnN3aXBlci1wYWdpbmF0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICYuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXItY2xvc2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgY29sb3I6ICM3ODgxOTU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBvcGFjaXR5OiAuNDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgICAuZ2FsbGVyeS1pdGVtLmZpcnN0e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuaXRlbS1tb2RhbCAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGlhbG9nX19vdmVydmlldyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2RhbC1ib2R5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtLXNsaWRlc2hvdy13cmFwcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAuYnV5LW5vdyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaWFsb2dfX2Zvb3RlcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuZ2FsbGVyeXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnktZmlsdGVyc3tcclxuICAgICAgICB0b3A6IC05MHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbW9kYWx7XHJcbiAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgICAuZ2FsbGVyeS1pdGVtLCAuZ2FsbGVyeSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5pdGVtLW1vZGFsIC5tb2RhbC1ib2R5IC5jb250YWluZXItZmx1aWQgPiAucm93IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/.pages/extra/gallery/gallery.component.ts":
/*!*******************************************************!*\
  !*** ./src/.pages/extra/gallery/gallery.component.ts ***!
  \*******************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.service */ "./src/.pages/extra/gallery/gallery.service.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(_service) {
        this._service = _service;
        this.feed = [];
        this.index = 0;
        this.index2 = 0;
        this._isLoading = true;
        this.galleryOptions = {
            itemSelector: '.gallery-item',
            masonry: {
                columnWidth: 280,
                gutter: 10,
                fitWidth: true
            }
        };
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getFeed().subscribe(function (feed) {
            _this.feed = feed;
            setTimeout(function () {
                _this._isLoading = false;
            }, 2000);
        });
        this.config = {
            init: false,
            observer: true,
            direction: 'vertical',
            autoplay: {
                delay: 5000,
            }
        };
        this.configModal = {
            init: false,
            observer: true,
            direction: 'horizontal',
            pagination: true
        };
    };
    GalleryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiperViewes.forEach(function (dir) {
                dir.init();
            });
            _this.swiperViewes.first.startAutoplay();
        }, 1);
    };
    GalleryComponent.prototype.nextSlide = function () {
        this.swiperViewes.last.nextSlide();
    };
    GalleryComponent.prototype.prevSlide = function () {
        this.swiperViewes.last.prevSlide();
    };
    GalleryComponent.prototype.toggleModal = function () {
        var _this = this;
        this._modal.show();
        setTimeout(function () {
            _this.swiperViewes.last.update();
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GalleryComponent.prototype, "swiperViewes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "_slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fadInModal'),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "_modal", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/.pages/extra/gallery/gallery.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '0',
                        transform: 'translateY(8%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '1',
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('loading => ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.1, 0.0, 0.2, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/.pages/extra/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/.pages/extra/gallery/gallery.service.ts":
/*!*****************************************************!*\
  !*** ./src/.pages/extra/gallery/gallery.service.ts ***!
  \*****************************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryService = /** @class */ (function () {
    function GalleryService(http) {
        this.http = http;
    }
    // Get social feed posts
    GalleryService.prototype.getFeed = function () {
        return this.http.get('assets/data/gallery.json')
            .map(function (res) { return res.json(); });
    };
    GalleryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/.pages/extra/invoice/invoice.component.html":
/*!*********************************************************!*\
  !*** ./src/.pages/extra/invoice/invoice.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-master-lighter sm-padding-10 full-width p-t-0 p-b-0\" role=\"navigation\">\r\n  <div class=\"full-width\">\r\n    <pg-container>\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header text-center\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed btn btn-link no-padding\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"sub-nav\">\r\n            <i class=\"pg pg-more v-align-middle\"></i>\r\n          </button>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"sub-nav\" [collapse]=\"isCollapsed\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <ul class=\"navbar-nav col-sm-12 col-md-12  col-lg-7 \">\r\n                <li class=\"nav-item dropdown\" dropdown>\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" id=\"navbarDropdownMenuLink\" dropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-file-text m-r-10\"></i> Squarespace\r\n                  </a>\r\n                  <div class=\"dropdown-menu\"   *dropdownMenu aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    <div class=\"divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Separated link</a>\r\n                    <div class=\"divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">One more separated link</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <ul class=\"navbar-nav d-flex flex-row\">\r\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\">Open</a></li>\r\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Print\"><i class=\"fa fa-print\"></i></a></li>\r\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download\"><i class=\"fa fa-download\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <ul class=\"navbar-nav d-flex flex-row justify-content-sm-end\">\r\n                <li class=\"nav-item\">\r\n                  <a href=\"javascript:void(0)\" class=\"p-r-10\"><img width=\"25\" height=\"25\" alt=\"\" class=\"icon-pdf\" src2x=\"assets/img/invoice/pdf2x.png\" pgRetina src1x=\"assets/img/invoice/pdf.png\" src=\"assets/img/invoice/pdf2x.png\"></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a href=\"javascript:void(0)\" class=\"p-r-10\"><img width=\"25\" height=\"25\" alt=\"\" class=\"icon-image\" src2x=\"assets/img/invoice/image2x.png\" pgRetina src1x=\"assets/img/invoice/image.png\" src=\"assets/img/invoice/image2x.png\"></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a href=\"javascript:void(0)\" class=\"p-r-10\"><img width=\"25\" height=\"25\" alt=\"\" class=\"icon-doc\" src2x=\"assets/img/invoice/doc2x.png\" pgRetina src1x=\"assets/img/invoice/doc.png\" src=\"assets/img/invoice/doc2x.png\"></a>\r\n                </li>\r\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\" class=\"p-r-10\" (click)=\"setFullScreen()\"><i class=\"fa fa-expand\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </pg-container>\r\n  </div>\r\n  <!-- /.container-fluid -->\r\n</nav>\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default m-t-20\">\r\n    <div class=\"card-body\">\r\n      <div class=\"invoice padding-50 sm-padding-10\">\r\n        <div>\r\n          <div class=\"pull-left\">\r\n            <img width=\"235\" height=\"47\" alt=\"\" class=\"invoice-logo\" src2x=\"assets/img/invoice/squarespace2x.png\" pgRetina src1x=\"assets/img/invoice/squarespace.png\" src=\"assets/img/invoice/squarespace2x.png\">\r\n            <address class=\"m-t-10\">\r\n                            Apple Enterprise Sales\r\n                            <br>(877) 412-7753.\r\n                            <br>\r\n                        </address>\r\n          </div>\r\n          <div class=\"pull-right sm-m-t-20\">\r\n            <h2 class=\"font-montserrat all-caps hint-text\">Invoice</h2>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"col-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-9 col-sm-height sm-no-padding\">\r\n              <p class=\"small no-margin\">Invoice to</p>\r\n              <h5 class=\"semi-bold m-t-0\">Darren Forthway</h5>\r\n              <address>\r\n                                    <strong>Pages Incoperated.</strong>\r\n                                    <br>page.inc\r\n                                    <br>\r\n                                    1600 Amphitheatre Pkwy, Mountain View,<br>\r\n                                    CA 94043, United States\r\n                                </address>\r\n            </div>\r\n            <div class=\"col-lg-3 sm-no-padding sm-p-b-20 d-flex align-items-end justify-content-between\">\r\n              <div>\r\n                <div class=\"font-montserrat bold all-caps\">Invoice No :</div>\r\n                <div class=\"font-montserrat bold all-caps\">Invoice date :</div>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <div class=\"\">0047</div>  \r\n                <div class=\"\">29/09/14</div>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"table-responsive table-invoice\">\r\n          <table class=\"table m-t-50\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"\">Task Description</th>\r\n                <th class=\"text-center\">Rate</th>\r\n                <th class=\"text-center\">Hours</th>\r\n                <th class=\"text-right\">Total</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"\">\r\n                  <p class=\"text-black\">Character Illustration</p>\r\n                  <p class=\"small hint-text\">\r\n                    Character Design projects from the latest top online portfolios on Behance.\r\n                  </p>\r\n                </td>\r\n                <td class=\"text-center\">$65.00</td>\r\n                <td class=\"text-center\">84</td>\r\n                <td class=\"text-right\">$5,376.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"\">\r\n                  <p class=\"text-black\">Cross Heart Charity Branding</p>\r\n                  <p class=\"small hint-text\">\r\n                    Attempt to attach higher credibility to a new product by associating it with a well established company name\r\n                  </p>\r\n                </td>\r\n                <td class=\"text-center\">$89.00</td>\r\n                <td class=\"text-center\">100</td>\r\n                <td class=\"text-right\">$8,900.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"\">\r\n                  <p class=\"text-black\">iOs App</p>\r\n                  <p class=\"small hint-text\">\r\n                    A video game franchise Inspired primarily by a sketch of stylized wingless - Including Branding / Graphics / Motion Picture &amp; Videos\r\n                  </p>\r\n                </td>\r\n                <td class=\"text-center\">$100.00</td>\r\n                <td class=\"text-center\">500</td>\r\n                <td class=\"text-right\">$50,000.00</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div>\r\n          <img width=\"150\" height=\"58\" alt=\"\" class=\"invoice-signature\" src2x=\"assets/img/invoice/signature2x.png\" pgRetina src1x=\"assets/img/invoice/signature.png\" src=\"assets/img/invoice/signature2x.png\">\r\n          <p>Designer’s Identity</p>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"p-l-15 p-r-15\">\r\n          <div class=\"row b-a b-grey\">\r\n            <div class=\"col-md-2 p-l-15 sm-p-t-15 clearfix sm-p-b-15 d-flex flex-column justify-content-center p-r-0\">\r\n              <h5 class=\"font-montserrat all-caps small no-margin hint-text bold\">Advance</h5>\r\n              <h3 class=\"no-margin\">$21,000.00</h3>\r\n            </div>\r\n            <div class=\"col-md-5 clearfix sm-p-b-15 d-flex flex-column justify-content-center\">\r\n              <h5 class=\"font-montserrat all-caps small no-margin hint-text bold\">Discount (10%)</h5>\r\n              <h3 class=\"no-margin\">$645.00</h3>\r\n            </div>\r\n            <div class=\"col-md-5 text-right bg-master-darker col-sm-height padding-15 d-flex flex-column justify-content-center align-items-end\">\r\n              <h5 class=\"font-montserrat all-caps small no-margin hint-text text-white bold\">Total</h5>\r\n              <h1 class=\"no-margin text-white\">$64,276.00</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <p class=\"small hint-text\">Services will be invoiced in accordance with the Service Description. You must pay all undisputed invoices in full within 30 days of the invoice date, unless otherwise specified under the Special Terms and Conditions. All payments must reference the invoice number. Unless otherwise specified, all invoices shall be paid in the currency of the invoice</p>\r\n        <p class=\"small hint-text\">Insight retains the right to decline to extend credit and to require that the applicable purchase price be paid prior to performance of Services based on changes in insight's credit policies or your financial condition and/or payment record. Insight reserves the right to charge interest of 1.5% per month or the maximum allowable by applicable law, whichever is less, for any undisputed past due invoices. You are responsible for all costs of collection, including reasonable attorneys' fees, for any payment default on undisputed invoices. In addition, Insight may terminate all further work if payment is not received in a timely manner.</p>\r\n        <br>\r\n        <hr>\r\n        <div>\r\n          <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">&nbsp;\r\n          <span class=\"m-l-70 text-black sm-pull-right\">+34 346 4546 445</span>\r\n          <span class=\"m-l-40 text-black sm-pull-right\">support@revox.io</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/.pages/extra/invoice/invoice.component.scss":
/*!*********************************************************!*\
  !*** ./src/.pages/extra/invoice/invoice.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2V4dHJhL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/extra/invoice/invoice.component.ts":
/*!*******************************************************!*\
  !*** ./src/.pages/extra/invoice/invoice.component.ts ***!
  \*******************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
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

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
        this.isCollapsed = false;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        this.toggleNavbar();
    };
    InvoiceComponent.prototype.setFullScreen = function () {
        pg.setFullScreen(document.querySelector('html'));
    };
    InvoiceComponent.prototype.onResize = function () {
        this.toggleNavbar();
    };
    InvoiceComponent.prototype.toggleNavbar = function () {
        this.isCollapsed = window.innerWidth < 1025;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InvoiceComponent.prototype, "onResize", null);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/.pages/extra/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/.pages/extra/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/.pages/extra/timeline/timeline.component.html":
/*!***********************************************************!*\
  !*** ./src/.pages/extra/timeline/timeline.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-master-lighter \">\r\n  <div class=\"timeline-container top-circle\">\r\n    <section class=\"timeline\" ngsRevealSet [ngsSelector]=\"'.timeline-block'\">\r\n      <div class=\"timeline-block\">\r\n        <div class=\"timeline-point success\">\r\n          <i class=\"pg pg-map\"></i>\r\n        </div>\r\n        <!-- timeline-point -->\r\n        <div class=\"timeline-content\">\r\n          <div class=\"card social-card share full-width\">\r\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\r\n            </div>\r\n            <div class=\"card-header clearfix\">\r\n              <div class=\"user-pic\">\r\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/8x.jpg\" pgRetina src1x=\"assets/img/profiles/8.jpg\" src=\"assets/img/profiles/8x.jpg\">\r\n              </div>\r\n              <h5>Jeff Curtis</h5>\r\n              <h6>Shared a Tweet\r\n                      <span class=\"location semi-bold\"><i class=\"fa fa-map-marker\"></i> SF, California</span>\r\n                  </h6>\r\n            </div>\r\n            <div class=\"card-description\">\r\n              <p>What you think, you become. What you feel, you attract. What you imagine, you create - Buddha. <a href=\"javascript:void(0)\">#quote</a> </p>\r\n              <div class=\"via\">via Twitter</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"event-date\">\r\n            <h6 class=\"font-montserrat all-caps hint-text m-t-0\">Apple Inc</h6>\r\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\r\n          </div>\r\n        </div>\r\n        <!-- timeline-content -->\r\n      </div>\r\n      <!-- timeline-block -->\r\n      <div class=\"timeline-block\">\r\n        <div class=\"timeline-point small\">\r\n        </div>\r\n        <!-- timeline-point -->\r\n        <div class=\"timeline-content\">\r\n          <div class=\"card  social-card share full-width\">\r\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\r\n            </div>\r\n            <div class=\"card-header clearfix\">\r\n              <div class=\"user-pic\">\r\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/5x.jpg\" pgRetina src1x=\"assets/img/profiles/5.jpg\" src=\"assets/img/profiles/5x.jpg\">\r\n              </div>\r\n              <h5>Shannon Williams</h5>\r\n              <h6>Shared a photo\r\n                      <span class=\"location semi-bold\"><i class=\"fa fa-map-marker\"></i> NYC, New York</span>\r\n                  </h6>\r\n            </div>\r\n            <div class=\"card-description\">\r\n              <p>Inspired by : good design is obvious, great design is transparent</p>\r\n              <div class=\"via\">via themeforest</div>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <ul class=\"buttons \">\r\n                <li>\r\n                  <a href=\"javascript:void(0)\"><i class=\"fa fa-expand\"></i>\r\n                          </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\"><i class=\"fa fa-heart-o\"></i>\r\n                          </a>\r\n                </li>\r\n              </ul>\r\n              <img alt=\"Social post\" src=\"assets/img/social-post-image.png\">\r\n            </div>\r\n            <div class=\"card-footer clearfix\">\r\n              <div class=\"time\">few seconds ago</div>\r\n              <ul class=\"reactions\">\r\n                <li><a href=\"javascript:void(0)\">5,345 <i class=\"fa fa-comment-o\"></i></a>\r\n                </li>\r\n                <li><a href=\"javascript:void(0)\">23K <i class=\"fa fa-heart-o\"></i></a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"event-date\">\r\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\r\n          </div>\r\n        </div>\r\n        <!-- timeline-content -->\r\n      </div>\r\n      <!-- timeline-block -->\r\n      <div class=\"timeline-block\">\r\n        <div class=\"timeline-point warning\">\r\n          <i class=\"pg pg-social\"></i>\r\n        </div>\r\n        <!-- timeline-point -->\r\n        <div class=\"timeline-content\">\r\n          <div class=\"card social-card share full-width \">\r\n            <div class=\"card-header clearfix\">\r\n              <h5 class=\"text-warning-dark pull-left fs-12\">Stock Market <i class=\"fa fa-circle text-warning-dark fs-11\"></i></h5>\r\n              <div class=\"pull-right small hint-text\">\r\n                5,345 <i class=\"fa fa-comment-o\"></i>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"card-description\">\r\n              <h5 class='hint-text no-margin'>Apple Inc.</h5>\r\n              <h5 class=\"small hint-text no-margin\">NASDAQ: AAPL - Nov 13 8:37 AM ET</h5>\r\n              <h3>111.25 <span class=\"text-warning-dark\"><i class=\"fa fa-sort-up small text-warning-dark\"></i> 0.15 (0.13%)</span></h3>\r\n            </div>\r\n            <div class=\"card-footer clearfix\">\r\n              <div class=\"pull-left\">by <span class=\"text-warning-dark\">John Smith</span></div>\r\n              <div class=\"pull-right hint-text\">\r\n                Apr 23\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"event-date\">\r\n            <h6 class=\"font-montserrat all-caps hint-text m-t-0\">Shared</h6>\r\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\r\n          </div>\r\n        </div>\r\n        <!-- timeline-content -->\r\n      </div>\r\n      <!-- timeline-block -->\r\n      <div class=\"timeline-block\">\r\n        <div class=\"timeline-point small\">\r\n        </div>\r\n        <!-- timeline-point -->\r\n        <div class=\"timeline-content\">\r\n          <div class=\"card social-card share full-width \">\r\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\r\n            </div>\r\n            <div class=\"card-header clearfix\">\r\n              <div class=\"user-pic\">\r\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/6x.jpg\" pgRetina src1x=\"assets/img/profiles/6.jpg\" src=\"assets/img/profiles/6x.jpg\">\r\n              </div>\r\n              <h5>Nathaniel Hamilton</h5>\r\n              <h6>Shared a Tweet\r\n                      <span class=\"location semi-bold\"><i class=\"icon-map\"></i>  NYC, New York</span>\r\n                  </h6>\r\n            </div>\r\n            <div class=\"card-description\">\r\n              <p>Testing can show the presense of bugs, but not their absence.</p>\r\n              <div class=\"via\">via Twitter</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"event-date\">\r\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\r\n          </div>\r\n        </div>\r\n        <!-- timeline-content -->\r\n      </div>\r\n      <!-- timeline-block -->\r\n      <div class=\"timeline-block\">\r\n        <div class=\"timeline-point small\">\r\n        </div>\r\n        <!-- timeline-point -->\r\n        <div class=\"timeline-content\">\r\n          <div class=\"card social-card share full-width\">\r\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\r\n            </div>\r\n            <div class=\"card-header clearfix\">\r\n              <div class=\"user-pic\">\r\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/4x.jpg\" pgRetina src1x=\"assets/img/profiles/4.jpg\" src=\"assets/img/profiles/4x.jpg\">\r\n              </div>\r\n              <h5>Andy Young</h5>\r\n              <h6>Updated his status\r\n                      <span class=\"location semi-bold\"><i class=\"icon-map\"></i> NYC, New York</span>\r\n                  </h6>\r\n            </div>\r\n            <div class=\"card-description\">\r\n              <p>What a lovely day! I think I should go and play outside.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"event-date\">\r\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\r\n          </div>\r\n        </div>\r\n        <!-- timeline-content -->\r\n      </div>\r\n      <!-- timeline-block -->\r\n    </section>\r\n    <!-- timeline -->\r\n  </div>\r\n  <!-- -->\r\n</div>"

/***/ }),

/***/ "./src/.pages/extra/timeline/timeline.component.scss":
/*!***********************************************************!*\
  !*** ./src/.pages/extra/timeline/timeline.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2V4dHJhL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/.pages/extra/timeline/timeline.component.ts":
/*!*********************************************************!*\
  !*** ./src/.pages/extra/timeline/timeline.component.ts ***!
  \*********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_scrollreveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-scrollreveal */ "./node_modules/ng-scrollreveal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = /** @class */ (function () {
    //Config Docs
    //https://tinesoft.github.io/ng-scrollreveal/doc/injectables/NgsRevealConfig.html
    function TimelineComponent(config, route) {
        this.config = config;
        this.route = route;
        //Only for demo - Casual and Executive layout
        this.route.params.subscribe(function (params) {
            if (params['type'] == "container") {
                config.container = document.querySelector(".page-container");
            }
            config.distance = "0";
        });
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/.pages/extra/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/.pages/extra/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_scrollreveal__WEBPACK_IMPORTED_MODULE_2__["NgsRevealConfig"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ })

}]);
//# sourceMappingURL=extra-extra-module.js.map