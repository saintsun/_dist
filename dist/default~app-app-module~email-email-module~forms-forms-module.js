(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-app-module~email-email-module~forms-forms-module"],{

/***/ "./src/.pages/@pages/components/tag/tag.component.ts":
/*!***********************************************************!*\
  !*** ./src/.pages/@pages/components/tag/tag.component.ts ***!
  \***********************************************************/
/*! exports provided: pgTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTagComponent", function() { return pgTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_tag_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/tag-animations */ "./src/.pages/@pages/animations/tag-animations.ts");
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



var pgTagComponent = /** @class */ (function () {
    function pgTagComponent(_elementRef, _render) {
        this._elementRef = _elementRef;
        this._render = _render;
        this._closable = false;
        this._prefixCls = 'label';
        this._closed = false;
        this._colorclass = "label-info";
        /** Event: emit before close */
        this.BeforeClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // TODO: AnimationEvent is not subclass of Event, but all payloads should be unified
        /** Event: emit after close */
        this.Close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(pgTagComponent.prototype, "Closable", {
        get: function () {
            return this._closable;
        },
        /** Whether tag is closable */
        set: function (value) {
            this._closable = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTagComponent.prototype, "ColorClass", {
        set: function (value) {
            this._colorclass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTagComponent.prototype, "_dataShow", {
        get: function () {
            return !this._closed;
        },
        enumerable: true,
        configurable: true
    });
    pgTagComponent.prototype._afterClose = function (event) {
        if (this._closed) {
            this.Close.emit(event);
        }
    };
    Object.defineProperty(pgTagComponent.prototype, "_textClass", {
        get: function () {
            return this._prefixCls + "-text";
        },
        enumerable: true,
        configurable: true
    });
    pgTagComponent.prototype._close = function (event) {
        this.BeforeClose.emit(event);
        if (event.defaultPrevented) {
            return;
        }
        this._closed = true;
    };
    pgTagComponent.prototype.ngAfterViewInit = function () {
        this._render.addClass(this._elementRef.nativeElement, this._prefixCls + "-wrapper");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTagComponent.prototype, "Closable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTagComponent.prototype, "ColorClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgTagComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTagComponent.prototype, "BeforeClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTagComponent.prototype, "Close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.data-show'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], pgTagComponent.prototype, "_dataShow", null);
    pgTagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tag',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                _animations_tag_animations__WEBPACK_IMPORTED_MODULE_1__["tagAnimation"]
            ],
            template: "\n    <span *ngIf=\"!_closed\"\n      class=\"label\"\n      [ngClass]=\"_colorclass\"\n      [@tagAnimation]\n      (@tagAnimation.done)=\"_afterClose($event)\">\n      <span [class]=\"_textClass\"><ng-content></ng-content></span>\n      <i class=\"pg pg-close\" (click)=\"_close($event)\" *ngIf=\"Closable\"></i>\n    </span>\n  ",
            styles: [__webpack_require__(/*! ./tag.scss */ "./src/.pages/@pages/components/tag/tag.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], pgTagComponent);
    return pgTagComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tag/tag.control.component.html":
/*!*********************************************************************!*\
  !*** ./src/.pages/@pages/components/tag/tag.control.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tags-control\" #wrapper>\r\n<pg-tag *ngFor=\"let tag of _tags; let i = index;\"\r\n      [Closable]=\"i !== 0\"\r\n      (Close)=\"handleClose(tag)\">\r\n      {{sliceTagName(tag)}}\r\n    </pg-tag>\r\n    <input class=\"form-control\" type=\"text\"\r\n      [(ngModel)]=\"inputValue\"\r\n      style=\"width: 78px;\"\r\n      (blur)=\"handleInputConfirm()\" (keydown.enter)=\"handleInputConfirm()\" (keydown.backspace)=\"handleInputBack()\" (focus)=\"handleFocus()\" (focusout)=\"handleFocusOut()\" placeholder=\"{{_placeholder}}\">\r\n    </div>"

/***/ }),

/***/ "./src/.pages/@pages/components/tag/tag.control.component.ts":
/*!*******************************************************************!*\
  !*** ./src/.pages/@pages/components/tag/tag.control.component.ts ***!
  \*******************************************************************/
/*! exports provided: pgTagControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTagControl", function() { return pgTagControl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pgTagControl = /** @class */ (function () {
    function pgTagControl() {
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this._tags = [];
        this.inputValue = '';
        this._placeholder = '';
    }
    pgTagControl_1 = pgTagControl;
    Object.defineProperty(pgTagControl.prototype, "placeholder", {
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    pgTagControl.prototype.handleClose = function (removedTag) {
        this._tags = this._tags.filter(function (tag) { return tag !== removedTag; });
    };
    pgTagControl.prototype.sliceTagName = function (tag) {
        var isLongTag = tag.length > 20;
        return isLongTag ? tag.slice(0, 20) + "..." : tag;
    };
    pgTagControl.prototype.handleInputConfirm = function () {
        if (this.inputValue) {
            this._tags.push(this.inputValue);
        }
        this.inputValue = '';
    };
    pgTagControl.prototype.handleFocus = function () {
        this.wrapper.nativeElement.parentNode.parentNode.classList.add('focused');
    };
    pgTagControl.prototype.handleFocusOut = function () {
        this.wrapper.nativeElement.parentNode.parentNode.classList.remove('focused');
    };
    pgTagControl.prototype.handleInputBack = function () {
        if (!this.inputValue) {
            this._tags.splice(-1, 1);
        }
    };
    pgTagControl.prototype.updateValue = function (value) {
        this._tags = value;
    };
    pgTagControl.prototype.writeValue = function (value) {
        this.updateValue(value);
    };
    pgTagControl.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgTagControl.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgTagControl.prototype.ngOnInit = function () {
    };
    var pgTagControl_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgTagControl.prototype, "wrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTagControl.prototype, "placeholder", null);
    pgTagControl = pgTagControl_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tag-control',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return pgTagControl_1; }),
                    multi: true
                }
            ],
            template: __webpack_require__(/*! ./tag.control.component.html */ "./src/.pages/@pages/components/tag/tag.control.component.html"),
            styles: [__webpack_require__(/*! ./tag.scss */ "./src/.pages/@pages/components/tag/tag.scss")]
        })
    ], pgTagControl);
    return pgTagControl;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tag/tag.module.ts":
/*!********************************************************!*\
  !*** ./src/.pages/@pages/components/tag/tag.module.ts ***!
  \********************************************************/
/*! exports provided: pgTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTagModule", function() { return pgTagModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag.component */ "./src/.pages/@pages/components/tag/tag.component.ts");
/* harmony import */ var _tag_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag.control.component */ "./src/.pages/@pages/components/tag/tag.control.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pgTagModule = /** @class */ (function () {
    function pgTagModule() {
    }
    pgTagModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [
                _tag_control_component__WEBPACK_IMPORTED_MODULE_4__["pgTagControl"], _tag_component__WEBPACK_IMPORTED_MODULE_3__["pgTagComponent"]
            ],
            exports: [
                _tag_control_component__WEBPACK_IMPORTED_MODULE_4__["pgTagControl"], _tag_component__WEBPACK_IMPORTED_MODULE_3__["pgTagComponent"]
            ]
        })
    ], pgTagModule);
    return pgTagModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/tag/tag.scss":
/*!***************************************************!*\
  !*** ./src/.pages/@pages/components/tag/tag.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL3RhZy90YWcuc2NzcyJ9 */"

/***/ })

}]);
//# sourceMappingURL=default~app-app-module~email-email-module~forms-forms-module.js.map