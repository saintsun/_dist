(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-app-module~forms-forms-module"],{

/***/ "./node_modules/angular2-text-mask/dist/angular2TextMask.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular2-text-mask/dist/angular2TextMask.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var textMaskCore_1 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
var TextMaskConfig = /** @class */ (function () {
    function TextMaskConfig() {
    }
    return TextMaskConfig;
}());
exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
var MaskedInputDirective = /** @class */ (function () {
    function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype._setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
    MaskedInputDirective.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    };
    MaskedInputDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)'
                    },
                    selector: '[textMask]',
                    exportAs: 'textMask',
                    providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [forms_1.COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = /** @class */ (function () {
    function TextMaskModule() {
    }
    TextMaskModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MaskedInputDirective],
                    exports: [MaskedInputDirective]
                },] },
    ];
    /** @nocollapse */
    TextMaskModule.ctorParameters = function () { return []; };
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "./node_modules/text-mask-addons/dist/createNumberMask.js":
/*!****************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/createNumberMask.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/.pages/@pages/components/calendar-view/calendar.component.html":
/*!****************************************************************************!*\
  !*** ./src/.pages/@pages/components/calendar-view/calendar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"header\" *ngIf=\"ShowHeader\">\r\n        <pg-select\r\n          class=\"year-select\" style=\"width: 75px;\"\r\n          [ngModel]=\"_showYear\"\r\n          (ngModelChange)=\"_showYear = $event;_buildCalendar()\">\r\n          <pg-option\r\n            *ngFor=\"let year of _listOfYearName\"\r\n            [Label]=\"year\"\r\n            [Value]=\"year\">\r\n          </pg-option>\r\n        </pg-select>\r\n        <pg-select\r\n          class=\"month-select\"\r\n          style=\"width: 70px;\"\r\n          *ngIf=\"Mode == 'month'\"\r\n          [ngModel]=\"_showMonth\"\r\n          (ngModelChange)=\"_showMonth = $event;_buildCalendar()\">\r\n          <pg-option\r\n            *ngFor=\"let _month of _listOfMonthName;let i = index;\"\r\n            [Label]=\"_month\"\r\n            [Value]=\"i\">\r\n          </pg-option>\r\n        </pg-select>\r\n\r\n      </div>\r\n          <table\r\n            [class.table]=\"!DatePicker\"\r\n            [class.calendar-table]=\"DatePicker\"\r\n            [class.patch-full-height]=\"DatePicker\"\r\n            *ngIf=\"Mode == 'month'\">\r\n            <thead>\r\n            <tr>\r\n              <th\r\n                *ngFor=\"let _min of _listOfWeekName\"\r\n                [class.column-header]=\"!DatePicker\"\r\n                [class.calendar-column-header]=\"DatePicker\">\r\n                <span class=\"column-header-inner\">{{ _min }}</span>\r\n              </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody\r\n              [class.fullcalendartbody]=\"!DatePicker\"\r\n              [class.calendartbody]=\"DatePicker\">\r\n            <tr *ngFor=\"let week of _weeksCalendar\">\r\n              <ng-template [ngIf]=\"!DatePicker\">\r\n                <td\r\n                  [attr.title]=\"day.title\"\r\n                  *ngFor=\"let day of week.days\"\r\n                  class=\"cell\"\r\n                  [class.disabled-cell-first-of-row]=\"day.firstDisabled\"\r\n                  [class.disabled-cell-last-of-row]=\"day.lastDisabled\"\r\n                  [class.disabled-cell]=\"day.disabled\"\r\n                  [class.last-month-cell]=\"day.isLastMonth\"\r\n                  [class.next-month-btn-day]=\"day.isNextMonth\"\r\n                  [class.selected-day]=\"day.isSelectedDay\"\r\n                  [class.in-range-cell]=\"day.isInRange && !day.isSelectedDay\"\r\n                  [class.today]=\"day.isCurrentDay\">\r\n                  <div class=\"date\">\r\n                    <div class=\"value\" (click)=\"_clickDay($event,day)\">{{ day.number }}</div>\r\n                    <div class=\"content\">\r\n                      <ng-template\r\n                        *ngIf=\"dateCell\"\r\n                        [ngTemplateOutlet]=\"dateCell\"\r\n                        [ngTemplateOutletContext]=\"{ $implicit: day}\">\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </ng-template>\r\n              <ng-template [ngIf]=\"DatePicker\">\r\n                <td\r\n                  [attr.title]=\"day.title\"\r\n                  *ngFor=\"let day of week.days\"\r\n                  class=\"cell\"\r\n                  [class.disabled-cell-first-of-row]=\"day.firstDisabled\"\r\n                  [class.disabled-cell-last-of-row]=\"day.lastDisabled\"\r\n                  [class.disabled-cell]=\"day.disabled\"\r\n                  [class.last-month-cell]=\"day.isLastMonth\"\r\n                  [class.next-month-btn-day]=\"day.isNextMonth\"\r\n                  [class.selected-day]=\"day.isSelectedDay\"\r\n                  [class.in-range-cell]=\"day.isInRange && !day.isSelectedDay\"\r\n                  [class.today]=\"day.isCurrentDay\"\r\n                  (mouseenter)=\"_onDayHover($event, day)\">\r\n                  <div class=\"date\">\r\n                       <div class=\"value s\" (click)=\"_clickDay($event,day)\">{{ day.number }}</div>\r\n                  </div>\r\n                </td>\r\n              </ng-template>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div\r\n            class=\"d-flex flex-column justify-content-between full-height \"\r\n            [class.month-panel-table]=\"!DatePicker\"\r\n            [class.calendar-month-panel-table]=\"DatePicker\"\r\n            *ngIf=\"Mode == 'year'\">\r\n            <div class=\"d-flex justify-content-between flex-1\" *ngFor=\"let quarter of _quartersCalendar\">\r\n              <ng-template [ngIf]=\"!DatePicker\">\r\n                <div\r\n                  *ngFor=\"let month of quarter\"\r\n                  [attr.title]=\"month.name\"\r\n                  class=\"cell grid-cell\"\r\n                  [class.current-cell]=\"month.isCurrentMonth\"\r\n                  [class.selected-cell]=\"month.isSelectedMonth\">\r\n                  <a href=\"javascript:void(0)\" class=\"date\" (click)=\"_clickMonth($event,month)\"><span class=\"value\">{{ month.name }}</span></a>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template [ngIf]=\"DatePicker\">\r\n                <div\r\n                  *ngFor=\"let month of quarter\"\r\n                  [attr.title]=\"month.name\"\r\n                  class=\"cell\"\r\n                  [class.selected-cell]=\"month.isSelectedMonth\"\r\n                  [class.cell-disabled]=\"month.disabled\"\r\n                  [class.current-cell]=\"month.isCurrentMonth\">\r\n                  <div class=\"date\"(click)=\"_clickMonth($event,month)\">\r\n                    <span class=\"value\">{{ month.name }}</span>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/.pages/@pages/components/calendar-view/calendar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/.pages/@pages/components/calendar-view/calendar.component.ts ***!
  \**************************************************************************/
/*! exports provided: RangePart, pgCalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePart", function() { return RangePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCalendarViewComponent", function() { return pgCalendarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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
/*
Author : NG-ZORRO
Profile : https://github.com/NG-ZORRO
Repository : https://github.com/NG-ZORRO/ng-zorro-antd
version :
Modifed : Yes
*/



var RangePart;
(function (RangePart) {
    RangePart[RangePart["Start"] = 0] = "Start";
    RangePart[RangePart["End"] = 1] = "End";
})(RangePart || (RangePart = {}));
var pgCalendarViewComponent = /** @class */ (function () {
    function pgCalendarViewComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._clearTime = true;
        this._datePicker = false;
        this._fullScreen = true;
        this._showHeader = true;
        this._isRange = false;
        this._weeksCalendar = [];
        this._quartersCalendar = [];
        this._listOfWeekName = [];
        this._listOfMonthName = [];
        this._listOfYearName = [];
        this._yearUnit = '0';
        this._monthUnit = '0';
        this._showMonth = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).month();
        this._showYear = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).year();
        this._value = new Date();
        this._rangeValue = [null, null];
        this._locale = 'en';
        this.ClickDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ClickMonth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.HoverDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ClearTime = true;
        this.Mode = 'month';
        this._el = this._elementRef.nativeElement;
    }
    Object.defineProperty(pgCalendarViewComponent.prototype, "FullScreen", {
        get: function () {
            return this._fullScreen;
        },
        set: function (value) {
            this._fullScreen = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "ShowHeader", {
        get: function () {
            return this._showHeader;
        },
        set: function (value) {
            this._showHeader = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "IsRange", {
        get: function () {
            return this._isRange;
        },
        set: function (value) {
            this._isRange = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "DisabledDate", {
        get: function () {
            return this._disabledDate;
        },
        set: function (value) {
            this._disabledDate = value;
            this._buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "DatePicker", {
        get: function () {
            return this._datePicker;
        },
        set: function (value) {
            this._datePicker = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "Value", {
        get: function () {
            return this._value || new Date();
        },
        set: function (value) {
            if (this._value === value) {
                return;
            }
            this._value = value || new Date();
            this._showMonth = moment__WEBPACK_IMPORTED_MODULE_1__(this._value).month();
            this._showYear = moment__WEBPACK_IMPORTED_MODULE_1__(this._value).year();
            this._buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "RangeValue", {
        get: function () {
            return this._rangeValue;
        },
        set: function (value) {
            this._rangeValue = value;
            this._buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "HoveringSelectValue", {
        get: function () {
            return this._hoveringSelectValue;
        },
        set: function (value) {
            if (this._hoveringSelectValue === value) {
                return;
            }
            this._hoveringSelectValue = value;
            this._buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "ShowYear", {
        get: function () {
            return this._showYear;
        },
        set: function (value) {
            this._showYear = value;
            this._buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "ShowMonth", {
        get: function () {
            return this._showMonth;
        },
        set: function (value) {
            this._showMonth = value;
            this._buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCalendarViewComponent.prototype, "Locale", {
        get: function () {
            return this._locale;
        },
        set: function (value) {
            this._locale = value;
            moment__WEBPACK_IMPORTED_MODULE_1__["locale"](this._locale);
        },
        enumerable: true,
        configurable: true
    });
    pgCalendarViewComponent.prototype._removeTime = function (date) {
        if (this.ClearTime) {
            return date.hour(0).minute(0).second(0).millisecond(0);
        }
        else {
            return date;
        }
    };
    pgCalendarViewComponent.prototype._clickDay = function ($event, day) {
        $event.preventDefault();
        $event.stopPropagation();
        if (day.disabled) {
            return;
        }
        this.ClickDay.emit(day);
    };
    pgCalendarViewComponent.prototype._clickMonth = function ($event, month) {
        $event.preventDefault();
        $event.stopPropagation();
        if (month.disabled) {
            return;
        }
        this.ClickMonth.emit(month);
    };
    pgCalendarViewComponent.prototype._onDayHover = function ($event, day) {
        $event.preventDefault();
        $event.stopPropagation();
        if (day.disabled || day.date.isSame(this._hoveringSelectValue)) {
            return;
        }
        this.HoverDay.emit(day);
    };
    pgCalendarViewComponent.prototype._isSelectedDay = function (date, month) {
        if (this.IsRange) {
            return (date.isSame(this._rangeValue[RangePart.Start], 'day')
                || date.isSame(this._rangeValue[RangePart.End], 'day')
                || date.isSame(this._hoveringSelectValue, 'day'))
                && date.month() === month.month();
        }
        else {
            return date.isSame(this.Value, 'day');
        }
    };
    pgCalendarViewComponent.prototype._isInRange = function (date, month) {
        var ghostDate;
        if (this.IsRange && date.month() === month.month()) {
            if (this._rangeValue.every(function (e) { return moment__WEBPACK_IMPORTED_MODULE_1__(e).isValid(); })) {
                return date.isBetween.apply(date, this._rangeValue);
            }
            ghostDate = this._rangeValue.find(function (e) { return moment__WEBPACK_IMPORTED_MODULE_1__(e).isValid(); });
            if (ghostDate && this._hoveringSelectValue) {
                var start = moment__WEBPACK_IMPORTED_MODULE_1__["min"](moment__WEBPACK_IMPORTED_MODULE_1__(ghostDate), moment__WEBPACK_IMPORTED_MODULE_1__(this._hoveringSelectValue)).toDate();
                var end = moment__WEBPACK_IMPORTED_MODULE_1__["max"](moment__WEBPACK_IMPORTED_MODULE_1__(ghostDate), moment__WEBPACK_IMPORTED_MODULE_1__(this._hoveringSelectValue)).toDate();
                return date.isBetween(start, end);
            }
            return false;
        }
        else {
            return false;
        }
    };
    pgCalendarViewComponent.prototype._buildMonth = function (d) {
        var weeks = [];
        var _rawDate = this._removeTime(d);
        var start = _rawDate.clone().date(1).day(0);
        var month = _rawDate.clone();
        var done = false;
        var date = start.clone();
        var monthIndex = date.month();
        var count = 0;
        while (!done) {
            weeks.push({ days: this._buildWeek(date.clone(), month) });
            date.add(1, 'w');
            done = count++ > 4;
            monthIndex = date.month();
        }
        return weeks;
    };
    pgCalendarViewComponent.prototype._buildWeek = function (firstDate, month) {
        var date = firstDate;
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                number: date.date(),
                isLastMonth: date.month() < month.month(),
                isNextMonth: date.month() > month.month(),
                isCurrentDay: date.isSame(new Date(), 'day'),
                isSelectedDay: this._isSelectedDay(date, month),
                isInRange: this._isInRange(date, month),
                title: date.format('YYYY-MM-DD'),
                date: date,
                disabled: this.DisabledDate && this.DisabledDate(date.toDate()),
                firstDisabled: this.DisabledDate && this.DisabledDate(date.toDate()) && (date.day() === 0 || (date.day() !== 0 && this.DisabledDate && !this.DisabledDate(date.clone().subtract(1, 'day').toDate()))),
                lastDisabled: this.DisabledDate && this.DisabledDate(date.toDate()) && (date.day() === 6 || (date.day() !== 6 && this.DisabledDate && !this.DisabledDate(date.clone().add(1, 'day').toDate())))
            });
            date = date.clone();
            date.add(1, 'd');
        }
        return days;
    };
    pgCalendarViewComponent.prototype._buildYears = function (date) {
        var quarters = [];
        var months = [];
        for (var i = 0; i < 12; i++) {
            months.push({
                index: i,
                name: this._listOfMonthName[i],
                year: date.year(),
                isCurrentMonth: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).month() === i && date.isSame(new Date(), 'year'),
                isSelectedMonth: this._showMonth === i,
                disabled: this.DisabledDate && this.DisabledDate(date.month(i).toDate())
            });
            if ((i + 1) % 3 === 0) {
                quarters.push(months);
                months = [];
            }
        }
        return quarters;
    };
    pgCalendarViewComponent.prototype._buildCalendar = function () {
        moment__WEBPACK_IMPORTED_MODULE_1__["locale"](this._locale);
        this._listOfYearName = this._generateYears(this._showYear);
        this._listOfWeekName = moment__WEBPACK_IMPORTED_MODULE_1__["weekdaysMin"]();
        this._listOfMonthName = moment__WEBPACK_IMPORTED_MODULE_1__["monthsShort"]();
        var date = moment__WEBPACK_IMPORTED_MODULE_1__(this.Value).year(this._showYear).month(this._showMonth);
        this._weeksCalendar = this._buildMonth(date);
        this._quartersCalendar = this._buildYears(date);
    };
    pgCalendarViewComponent.prototype._generateYears = function (year) {
        var listOfYears = [];
        for (var _i = 0, _a = Array.from(Array(20).keys()); _i < _a.length; _i++) {
            var i = _a[_i];
            listOfYears.push(i - 10 + year);
        }
        return listOfYears;
    };
    pgCalendarViewComponent.prototype.ngOnInit = function () {
        this._buildCalendar();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('dateCell'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgCalendarViewComponent.prototype, "dateCell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('monthCell'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgCalendarViewComponent.prototype, "monthCell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgCalendarViewComponent.prototype, "ClickDay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgCalendarViewComponent.prototype, "ClickMonth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgCalendarViewComponent.prototype, "HoverDay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgCalendarViewComponent.prototype, "ClearTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgCalendarViewComponent.prototype, "Mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCalendarViewComponent.prototype, "FullScreen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCalendarViewComponent.prototype, "ShowHeader", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCalendarViewComponent.prototype, "IsRange", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], pgCalendarViewComponent.prototype, "DisabledDate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.pg-patch-full-height'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCalendarViewComponent.prototype, "DatePicker", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], pgCalendarViewComponent.prototype, "Value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], pgCalendarViewComponent.prototype, "RangeValue", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], pgCalendarViewComponent.prototype, "HoveringSelectValue", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], pgCalendarViewComponent.prototype, "ShowYear", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], pgCalendarViewComponent.prototype, "ShowMonth", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCalendarViewComponent.prototype, "Locale", null);
    pgCalendarViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-calendar-view',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/.pages/@pages/components/calendar-view/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.scss */ "./src/.pages/@pages/components/calendar-view/calendar.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], pgCalendarViewComponent);
    return pgCalendarViewComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/calendar-view/calendar.module.ts":
/*!***********************************************************************!*\
  !*** ./src/.pages/@pages/components/calendar-view/calendar.module.ts ***!
  \***********************************************************************/
/*! exports provided: pgCalendarViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCalendarViewModule", function() { return pgCalendarViewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _select_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select/select.module */ "./src/.pages/@pages/components/select/select.module.ts");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.component */ "./src/.pages/@pages/components/calendar-view/calendar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Author : NG-ZORRO
Profile : https://github.com/NG-ZORRO
Repository : https://github.com/NG-ZORRO/ng-zorro-antd
version : 0.6
Modifed : Yes
*/





var pgCalendarViewModule = /** @class */ (function () {
    function pgCalendarViewModule() {
    }
    pgCalendarViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _select_select_module__WEBPACK_IMPORTED_MODULE_3__["pgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_4__["pgCalendarViewComponent"]],
            exports: [_calendar_component__WEBPACK_IMPORTED_MODULE_4__["pgCalendarViewComponent"]]
        })
    ], pgCalendarViewModule);
    return pgCalendarViewModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/calendar-view/calendar.scss":
/*!******************************************************************!*\
  !*** ./src/.pages/@pages/components/calendar-view/calendar.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXcvY2FsZW5kYXIuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/date.ts":
/*!*********************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/date.ts ***!
  \*********************************************************/
/*! exports provided: RangePart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePart", function() { return RangePart; });
var RangePart;
(function (RangePart) {
    RangePart[RangePart["Start"] = 0] = "Start";
    RangePart[RangePart["End"] = 1] = "End";
})(RangePart || (RangePart = {}));


/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/datepicker-scroller.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/datepicker-scroller.component.ts ***!
  \**********************************************************************************/
/*! exports provided: pgDateScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgDateScroller", function() { return pgDateScroller; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datepicker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker.component */ "./src/.pages/@pages/components/datepicker/datepicker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgDateScroller = /** @class */ (function () {
    function pgDateScroller(_elementRef, _renderer, picker) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.picker = picker;
        this._monthList = [];
        this._List = [];
        this._yearList = [];
        this._mode = 'month';
        this.onDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._el = this._elementRef.nativeElement;
    }
    pgDateScroller.prototype._generate = function () {
        var _t = [];
        if (this._mode == "month") {
            for (var i = 0; i < 12; i++) {
                this._monthList.push(i);
            }
            this._List = this._monthList;
        }
        else {
            for (var i = 0; i < 10; i++) {
                this._yearList.push(i);
            }
            this._List = this._yearList;
        }
    };
    pgDateScroller.prototype.ngOnInit = function () {
        this._generate();
    };
    pgDateScroller.prototype.ngAfterViewInit = function () {
        this.alignToElement();
    };
    Object.defineProperty(pgDateScroller.prototype, "selectedMonth", {
        set: function (value) {
            this._selectedMonth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgDateScroller.prototype, "Mode", {
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgDateScroller.prototype, "selectedYear", {
        set: function (value) {
            this._selectedYear = value;
        },
        enumerable: true,
        configurable: true
    });
    pgDateScroller.prototype._getMonthForamated = function (value) {
        return moment__WEBPACK_IMPORTED_MODULE_1__().month(value).format("MMMM");
    };
    pgDateScroller.prototype._onContentChanges = function () {
        this.alignToElement();
    };
    pgDateScroller.prototype._changeMonthView = function () {
        this.picker._changeMonthView();
    };
    pgDateScroller.prototype._changeMonth = function (value) {
        if (this._selectedMonth > value) {
            this.picker._showMonth = this.picker._showMonth - (this._selectedMonth - value);
        }
        else {
            this.picker._showMonth = this.picker._showMonth + (value - this._selectedMonth);
        }
        this._selectedMonth = value;
    };
    pgDateScroller.prototype.alignToElement = function () {
        // if(this._selectedMonth == 0 || this._selectedMonth == 11){
        //     return;
        // }
        var rect = this._el.querySelector(".wrap-scroller").getBoundingClientRect();
        var offset = this._selectedElement ? this._selectedElement.nativeElement.offsetLeft + 'px' : '0';
        var realOffset = -(parseFloat(offset) - (rect.width / 2 - this._selectedElement.nativeElement.offsetWidth / 2)) + 'px';
        this._renderer.setStyle(this._monthSlider.nativeElement, 'transform', "translate3d(" + realOffset + ", 0px, 0px)");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectedElement'),
        __metadata("design:type", Object)
    ], pgDateScroller.prototype, "_selectedElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('monthSlider'),
        __metadata("design:type", Object)
    ], pgDateScroller.prototype, "_monthSlider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wrapper'),
        __metadata("design:type", Object)
    ], pgDateScroller.prototype, "_wrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgDateScroller.prototype, "onDateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], pgDateScroller.prototype, "selectedMonth", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgDateScroller.prototype, "Mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], pgDateScroller.prototype, "selectedYear", null);
    pgDateScroller = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-datepicker-scroller',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n  <div class=\"wrap-scroller\" #wrapper>\n    <div class=\"horizontal-dates\" style=\"position: relative;\" >\n    <div class=\"d-flex flex-row full-width\" #monthSlider  (cdkObserveContent)=\"_onContentChanges()\">\n        <ng-container *ngFor=\"let monthIndex of _List\">\n            <ng-container *ngIf=\"(monthIndex === _selectedMonth || monthIndex == _showMonth); else determineBlock\">\n                <a class=\"month-select selected-date\" title=\"\" #selectedElement  (click)=\"_changeMonthView()\">\n                    {{ _getMonthForamated(monthIndex) }}\n                </a>\n            </ng-container>\n            <ng-template #determineBlock>\n                <a class=\"month-select\" title=\"\" (click)=\"_changeMonth(monthIndex)\">\n                    {{ _getMonthForamated(monthIndex) }}\n                </a>\n            </ng-template>\n        </ng-container>\n        </div>             \n    </div>\n</div>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _datepicker_component__WEBPACK_IMPORTED_MODULE_2__["pgDatePickerComponent"]])
    ], pgDateScroller);
    return pgDateScroller;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/datepicker.component.html":
/*!***************************************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/datepicker.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style=\"display: block\" (click)=\"_openCalendar()\" cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" #trigger>\r\n  <input type=\"input\" (blur)=\"onTouched()\" class=\"form-control\" [attr.placeholder]=\"_placeHolder\"\r\n    [value]=\"_value|pgDate:Format\" readonly>\r\n  <i class=\"picker-clear anticon anticon-cross-circle\" *ngIf=\"_showClearIcon\" (click)=\"onTouched();_clearValue($event)\">\r\n  </i>\r\n  <span class=\"picker-icon\"></span>\r\n</span>\r\n<ng-template cdkConnectedOverlay cdkConnectedOverlayHasBackdrop [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\" (backdropClick)=\"_closeCalendar()\" (detach)=\"_closeCalendar()\"\r\n  (positionChange)=\"onPositionChange($event)\" [cdkConnectedOverlayOpen]=\"_open\">\r\n  <div class=\"dropdown open show\" [class.top]=\"_dropDownPosition==='top'\" [class.bottom]=\"_dropDownPosition==='bottom'\"\r\n    [@dropDownAnimation]=\"_dropDownPosition\">\r\n    <div class=\"pg-calendar dropdown-menu show bg-white\" tabindex=\"0\" [class.time]=\"ShowTime\">\r\n      <div class=\"date-panel\">\r\n        <div class=\"calendar-header\">\r\n          <div class=\"d-flex flex-row \" style=\"position: relative;\" *ngIf=\"_mode!='time'\">\r\n            <!-- <a class=\"prev-month-btn\" title=\"\" (click)=\"_preMonth()\">\r\n                <i class=\"pg  pg-arrow_left\"></i>\r\n              </a> -->\r\n            <span class=\"d-flex flex-row full-width justify-content-center\">\r\n              <a href=\"javascript:void(0);\" class=\"year-select\" title=\"\"\r\n                (click)=\"_changeDecadeView($event)\">{{_showYear }}</a>\r\n            </span>\r\n            <!-- <a class=\"next-year-btn\" title=\"\" (click)=\"_nextYear()\">\r\n                <i class=\"pg  pg-arrow_right\"></i>\r\n              </a> -->\r\n          </div>\r\n          <pg-datepicker-scroller [selectedMonth]=\"_showMonth\" *ngIf=\"_mode!='time'\"></pg-datepicker-scroller>\r\n\r\n          <div style=\"position: relative;\" *ngIf=\"_mode=='time'\">\r\n            <span class=\"block text-center\">\r\n              <a href=\"javascript:void(0);\" class=\"year-select\" title=\"Choose a month\">{{_selectedYear}}</a>\r\n              <a href=\"javascript:void(0);\" class=\"year-select p-l-15\" title=\"Choose a month\">{{ _showMonth + 1 }}</a>\r\n              <a href=\"javascript:void(0);\" class=\"year-select p-l-15\">{{ _selectedDate }}</a>\r\n            </span>\r\n          </div>\r\n          <!-- smonth : {{_selectedMonth}}\r\n            showmonth {{_showMonth}}\r\n            showyear {{_showYear}}\r\n            selected year {{_selectedYear}} -->\r\n          <div class=\"card overlay-view\" *ngIf=\"_mode=='month'\">\r\n            <!-- <span class=\"month-panel-year-select-arrow\">x</span> -->\r\n            <div class=\"card-header month-header\">\r\n              <div class=\"d-flex flex-row justify-content-around\" style=\"position: relative;\">\r\n                <a href=\"javascript:void(0);\" class=\"month-panel-prev-year-btn\" title=\"\" (click)=\"_preYear()\">\r\n                  <i class=\"pg  pg-arrow_left\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0);\" class=\"month-panel-year-select year-select\" title=\"\"\r\n                  (click)=\"_changeDecadeView($event)\">\r\n                  <span class=\"\">{{ _showYear }}</span>\r\n                </a>\r\n                <a href=\"javascript:void(0);\" class=\"month-panel-next-year-btn\" title=\"\" (click)=\"_nextYear()\">\r\n                  <i class=\"pg  pg-arrow_right\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body relative\">\r\n              <pg-calendar-view [ClearTime]=\"!ShowTime\" [DisabledDate]=\"DisabledDate\" (ClickDay)=\"_clickDay($event)\"\r\n                [ShowMonth]=\"_showMonth\" [ShowYear]=\"_showYear\" [Value]=\"_value\" (ClickMonth)=\"_clickMonth($event)\"\r\n                [Mode]=\"'year'\" [FullScreen]=\"false\" [ShowHeader]=\"false\" pgDatePicker>\r\n              </pg-calendar-view>\r\n            </div>\r\n          </div>\r\n          <div class=\"card overlay-view year-panel\" *ngIf=\"_mode=='decade'\">\r\n            <div class=\"card-header decade\">\r\n              <div class=\"d-flex flex-row justify-content-around\" style=\"position: relative;\">\r\n                <a class=\"year-panel-prev-decade-btn\" title=\"\" (click)=\"_preDecade()\">\r\n                  <i class=\"pg  pg-arrow_left\"></i>\r\n                </a>\r\n                <a class=\"year-panel-decade-select\" title=\"\">\r\n                  <span class=\"year-panel-decade-select-content\">{{ _startDecade }}-{{ _startDecade + 9 }}</span>\r\n                </a>\r\n                <a class=\"year-panel-next-decade-btn\" title=\"\" (click)=\"_nextDecade()\">\r\n                  <i class=\"pg  pg-arrow_right\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body relative\">\r\n              <div class=\"pg-calendar-view\">\r\n                <div class=\"d-flex flex-column justify-content-between full-height\">\r\n                  <div class=\"d-flex justify-content-between flex-1\" *ngFor=\"let tr of _yearPanel\">\r\n                    <ng-template ngFor let-td [ngForOf]=\"tr\">\r\n                      <div class=\"cell grid-cell year-panel-last-decade-cell\" *ngIf=\"td=='start'\">\r\n                        <a class=\"date\" (click)=\"_preDecade()\"><span class=\"value\">{{ _startDecade - 1 }}</span></a>\r\n                      </div>\r\n                      <div *ngIf=\"(td!='start')&&(td!='end')\" [attr.title]=\"_startDecade+td\" class=\"cell grid-cell\"\r\n                        [ngClass]=\"{'selected-cell':(_startDecade+td==_showYear)}\">\r\n                        <a class=\"date\" (click)=\"_setShowYear(_startDecade+td,$event)\"><span\r\n                            class=\"value\">{{ _startDecade + td }}</span></a>\r\n                      </div>\r\n                      <div class=\"cell grid-cell year-panel-next-decade-cell\" *ngIf=\"td=='end'\">\r\n                        <a class=\"date\" (click)=\"_nextDecade()\"><span class=\"value\">{{ _startDecade + 10 }}</span></a>\r\n                      </div>\r\n                    </ng-template>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"calendar-body\">\r\n          <pg-timepicker-inner [Format]=\"ShowTime&&ShowTime.Format||'HH:mm:ss'\"\r\n            [Disabled]=\"ShowTime&&ShowTime.Disabled||false\" [DisabledHours]=\"ShowTime&&ShowTime.DisabledHours||null\"\r\n            [DisabledMinutes]=\"ShowTime&&ShowTime.DisabledMinutes||null\"\r\n            [DisabledSeconds]=\"ShowTime&&ShowTime.DisabledSeconds||null\"\r\n            [HideDisabledOptions]=\"ShowTime&&ShowTime.HideDisabledOptions||false\" [ngModel]=\"_value\"\r\n            (ngModelChange)=\"_changeTime($event)\" *ngIf=\"ShowTime&&(_mode == 'time')\"></pg-timepicker-inner>\r\n          <pg-calendar-view [ClearTime]=\"!ShowTime\" [DisabledDate]=\"DisabledDate\" (ClickDay)=\"_clickDay($event)\"\r\n            [ShowMonth]=\"_showMonth\" [ShowYear]=\"_showYear\" [Value]=\"_value\" (ClickMonth)=\"_clickMonth($event)\"\r\n            [Mode]=\"'month'\" [FullScreen]=\"false\" [ShowHeader]=\"false\" pgDatePicker></pg-calendar-view>\r\n        </div>\r\n        <div class=\"footer row m-t-10\" *ngIf=\"!HideFooter\">\r\n          <a class=\"btn btn-link col\" (click)=\"_changeTimeView($event)\" *ngIf=\"(_mode != 'time')&&ShowTime\">Choose\r\n            Time</a>\r\n          <a class=\"btn btn-link col\" (click)=\"_changeYearView($event)\" *ngIf=\"(_mode == 'time')&&ShowTime\">Select\r\n            Date</a>\r\n          <a class=\"btn btn-link btn-sm col\" *ngIf=\"ShowTime\" (click)=\"_closeCalendar()\">Ok</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/datepicker.component.ts":
/*!*************************************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/datepicker.component.ts ***!
  \*************************************************************************/
/*! exports provided: pgDatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgDatePickerComponent", function() { return pgDatePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/.pages/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _utils_overlay_position_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/overlay-position-map */ "./src/.pages/@pages/utils/overlay-position-map.ts");
/* harmony import */ var _time_picker_timepicker_inner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../time-picker/timepicker-inner.component */ "./src/.pages/@pages/components/time-picker/timepicker-inner.component.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var pgDatePickerComponent = /** @class */ (function () {
    function pgDatePickerComponent(_elementRef, _cdr, _renderer, _ngZone) {
        this._elementRef = _elementRef;
        this._cdr = _cdr;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._allowClear = true;
        this._disabled = false;
        this._showTime = null;
        this._open = false;
        this._mode = 'year';
        this._dropDownPosition = 'bottom';
        this._placeHolder = 'Select Date';
        this._value = null;
        this._today = new Date();
        this._selectedMonth = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).month();
        this._selectedYear = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).year();
        this._selectedDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).date();
        this._showMonth = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).month();
        this._showYear = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).year();
        this._startDecade = Math.floor(this._showYear / 10) * 10;
        this._yearPanel = [];
        this._monthList = [];
        this._positions = _utils_overlay_position_map__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_DATEPICKER_POSITIONS"].slice();
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.Format = 'DD.MM.YYYY';
        this.Size = '';
        this.Mode = 'day';
        this.HideFooter = true;
        this._el = this._elementRef.nativeElement;
    }
    pgDatePickerComponent_1 = pgDatePickerComponent;
    Object.defineProperty(pgDatePickerComponent.prototype, "ShowTime", {
        get: function () {
            return this._showTime;
        },
        set: function (value) {
            if (typeof value === 'string' || typeof value === 'boolean') {
                this._showTime = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value) ? {} : null;
                this.HideFooter = false;
            }
            else {
                this._showTime = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgDatePickerComponent.prototype, "Placeholder", {
        set: function (value) {
            this._placeHolder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgDatePickerComponent.prototype, "AllowClear", {
        get: function () {
            return this._allowClear;
        },
        set: function (value) {
            this._allowClear = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgDatePickerComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this._closeCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgDatePickerComponent.prototype, "DisabledDate", {
        get: function () {
            if (this._mode === 'month' && this.Mode === 'day') {
                return;
            }
            return this._disabledDate;
        },
        set: function (value) {
            this._disabledDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgDatePickerComponent.prototype, "_disabledToday", {
        get: function () {
            if (this._disabledDate) {
                return this._disabledDate(new Date());
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    pgDatePickerComponent.prototype.onPositionChange = function (position) {
        var _position = position.connectionPair.originY === 'bottom' ? 'top' : 'bottom';
        if (this._dropDownPosition !== _position) {
            this._dropDownPosition = _position;
            this._cdr.detectChanges();
        }
    };
    Object.defineProperty(pgDatePickerComponent.prototype, "Value", {
        get: function () {
            return this._value || new Date();
        },
        set: function (value) {
            this._updateValue(value);
        },
        enumerable: true,
        configurable: true
    });
    pgDatePickerComponent.prototype._changeTime = function ($event) {
        this._value = $event;
    };
    pgDatePickerComponent.prototype._blurInput = function (box) {
        if (Date.parse(box.value)) {
            this.Value = new Date(box.value);
            this.onChange(this._value);
        }
    };
    pgDatePickerComponent.prototype._preYear = function () {
        this._showYear = this._showYear - 1;
    };
    pgDatePickerComponent.prototype._nextYear = function () {
        this._showYear = this._showYear + 1;
    };
    pgDatePickerComponent.prototype._preMonth = function () {
        if (this._showMonth - 1 < 0) {
            this._showMonth = 11;
            this._preYear();
        }
        else {
            this._showMonth = this._showMonth - 1;
        }
    };
    pgDatePickerComponent.prototype._nextMonth = function () {
        if (this._showMonth + 1 > 11) {
            this._showMonth = 0;
            this._nextYear();
        }
        else {
            this._showMonth = this._showMonth + 1;
        }
    };
    pgDatePickerComponent.prototype._setShowYear = function (year, $event) {
        $event.stopPropagation();
        this._showYear = year;
        this._mode = this.Mode === 'day' ? 'year' : 'month';
    };
    pgDatePickerComponent.prototype._preDecade = function () {
        this._startDecade = this._startDecade - 10;
    };
    pgDatePickerComponent.prototype._nextDecade = function () {
        this._startDecade = this._startDecade + 10;
    };
    pgDatePickerComponent.prototype._clearValue = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.Value = null;
        this.onChange(this._value);
    };
    pgDatePickerComponent.prototype._changeToToday = function () {
        if (!this._disabledToday) {
            this.Value = new Date();
            this.onChange(this._value);
            this._closeCalendar();
        }
    };
    pgDatePickerComponent.prototype._clickDay = function (day) {
        if (!this.ShowTime) {
            this._closeCalendar();
            this.Value = day.date.toDate();
            this.onChange(this._value);
        }
        else {
            this.Value = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).year(day.date.year()).month(day.date.month()).date(day.date.date()).toDate();
            this.onChange(this._value);
        }
    };
    pgDatePickerComponent.prototype._clickMonth = function (month) {
        if (this.Mode === 'month') {
            this._closeCalendar();
            this.Value = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).year(this._showYear).month(month.index).toDate();
            this.onChange(this._value);
        }
        else {
            this._showMonth = month.index;
            this._mode = 'year';
        }
    };
    pgDatePickerComponent.prototype._openCalendar = function () {
        if (this.Disabled) {
            return;
        }
        this._mode = this.Mode === 'day' ? 'year' : 'month';
        this._open = true;
    };
    pgDatePickerComponent.prototype._closeCalendar = function () {
        if (!this._open) {
            return;
        }
        if (this.ShowTime) {
            this._updateValue(this._value);
            this.onChange(this._value);
        }
        this._open = false;
    };
    pgDatePickerComponent.prototype._changeMonthView = function () {
        this._mode = 'month';
    };
    pgDatePickerComponent.prototype._changeDecadeView = function ($event) {
        $event.stopPropagation();
        this._mode = 'decade';
    };
    pgDatePickerComponent.prototype._changeTimeView = function ($event) {
        var _this = this;
        $event.stopPropagation();
        this._mode = 'time';
        setTimeout(function (_) {
            _this.timePickerInner._initPosition();
        });
    };
    pgDatePickerComponent.prototype._changeYearView = function ($event) {
        $event.stopPropagation();
        this._mode = 'year';
    };
    Object.defineProperty(pgDatePickerComponent.prototype, "_showClearIcon", {
        get: function () {
            return this._value && !this.Disabled && this.AllowClear;
        },
        enumerable: true,
        configurable: true
    });
    pgDatePickerComponent.prototype._generateYearPanel = function () {
        var _t = [];
        for (var i = 0; i < 10; i++) {
            if (i === 1 || i === 4 || i === 7 || i === 9) {
                _t.push(i);
                this._yearPanel.push(_t);
                _t = [];
            }
            else {
                _t.push(i);
            }
        }
        this._yearPanel[0].unshift('start');
        this._yearPanel[3].push('end');
    };
    pgDatePickerComponent.prototype.ngOnInit = function () {
        this._generateYearPanel();
    };
    pgDatePickerComponent.prototype.writeValue = function (value) {
        // this.Value = value;
        this._updateValue(value);
    };
    pgDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgDatePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgDatePickerComponent.prototype._updateValue = function (value) {
        if (this._value === value) {
            return;
        }
        if (this._disabledDate && this._disabledDate(value)) {
            return;
        }
        this._value = value;
        this._selectedMonth = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).month();
        this._selectedYear = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).year();
        this._selectedDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).date();
        this._showYear = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).year();
        this._showMonth = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).month();
        this._startDecade = Math.floor(this._showYear / 10) * 10;
    };
    var pgDatePickerComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgDatePickerComponent.prototype, "Format", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgDatePickerComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgDatePickerComponent.prototype, "Mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trigger'),
        __metadata("design:type", Object)
    ], pgDatePickerComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_time_picker_timepicker_inner_component__WEBPACK_IMPORTED_MODULE_5__["pgTimePickerInnerComponent"]),
        __metadata("design:type", _time_picker_timepicker_inner_component__WEBPACK_IMPORTED_MODULE_5__["pgTimePickerInnerComponent"])
    ], pgDatePickerComponent.prototype, "timePickerInner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('monthSlider'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgDatePickerComponent.prototype, "_monthSlider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], pgDatePickerComponent.prototype, "ShowTime", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], pgDatePickerComponent.prototype, "Placeholder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgDatePickerComponent.prototype, "HideFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgDatePickerComponent.prototype, "AllowClear", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgDatePickerComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], pgDatePickerComponent.prototype, "DisabledDate", null);
    pgDatePickerComponent = pgDatePickerComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-datepicker',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_3__["dropDownAnimation"],
                _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_3__["scaleInAnimation"]
            ],
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/.pages/@pages/components/datepicker/datepicker.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return pgDatePickerComponent_1; }),
                    multi: true
                }
            ],
            host: {
                '[class.ant-calendar-picker]': 'true'
            },
            styles: [__webpack_require__(/*! ./datepicker.scss */ "./src/.pages/@pages/components/datepicker/datepicker.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], pgDatePickerComponent);
    return pgDatePickerComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/datepicker.module.ts":
/*!**********************************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/datepicker.module.ts ***!
  \**********************************************************************/
/*! exports provided: pgDatePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgDatePickerModule", function() { return pgDatePickerModule; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker.component */ "./src/.pages/@pages/components/datepicker/datepicker.component.ts");
/* harmony import */ var _rangepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rangepicker.component */ "./src/.pages/@pages/components/datepicker/rangepicker.component.ts");
/* harmony import */ var _calendar_view_calendar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calendar-view/calendar.module */ "./src/.pages/@pages/components/calendar-view/calendar.module.ts");
/* harmony import */ var _time_picker_timepicker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../time-picker/timepicker.module */ "./src/.pages/@pages/components/time-picker/timepicker.module.ts");
/* harmony import */ var _util_pg_util_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/pg-util.module */ "./src/.pages/@pages/components/util/pg-util.module.ts");
/* harmony import */ var _datepicker_scroller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datepicker-scroller.component */ "./src/.pages/@pages/components/datepicker/datepicker-scroller.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var pgDatePickerModule = /** @class */ (function () {
    function pgDatePickerModule() {
    }
    pgDatePickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _time_picker_timepicker_module__WEBPACK_IMPORTED_MODULE_8__["pgTimePickerModule"], _calendar_view_calendar_module__WEBPACK_IMPORTED_MODULE_7__["pgCalendarViewModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _util_pg_util_module__WEBPACK_IMPORTED_MODULE_9__["pgUtilModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"]],
            declarations: [_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["pgDatePickerComponent"], _rangepicker_component__WEBPACK_IMPORTED_MODULE_6__["pgRangePickerComponent"], _datepicker_scroller_component__WEBPACK_IMPORTED_MODULE_10__["pgDateScroller"]],
            exports: [_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["pgDatePickerComponent"], _rangepicker_component__WEBPACK_IMPORTED_MODULE_6__["pgRangePickerComponent"]]
        })
    ], pgDatePickerModule);
    return pgDatePickerModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/datepicker.scss":
/*!*****************************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/datepicker.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5zY3NzIn0= */"

/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/rangepicker.component.html":
/*!****************************************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/rangepicker.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"pg-calendar-picker\"\r\n(click)=\"_openCalendar()\"\r\ncdkOverlayOrigin\r\n#origin=\"cdkOverlayOrigin\"\r\n#trigger>\r\n<span class=\"pg-calendar-picker-input pg-input\"\r\n  [class.pg-input-disabled]=\"Disabled\"\r\n  [class.pg-input-sm]=\"Size === 'small'\"\r\n  [class.pg-input-lg]=\"Size === 'large'\">\r\n<ng-container *ngTemplateOutlet=\"inputRangePart; context: { part: _part.Start }\"></ng-container>\r\n<span class=\"pg-calendar-range-picker-separator\"> ~ </span>\r\n<ng-container *ngTemplateOutlet=\"inputRangePart; context: { part: _part.End }\"></ng-container>\r\n</span>\r\n<i class=\"pg-calendar-picker-clear anticon anticon-cross-circle\"\r\n*ngIf=\"showClearIcon\"\r\n(click)=\"onTouched();\r\n_clearValue($event)\">\r\n</i>\r\n<span class=\"pg-calendar-picker-icon\"></span>\r\n</span>\r\n\r\n<ng-template cdkConnectedOverlay\r\n       cdkConnectedOverlayHasBackdrop\r\n       [cdkConnectedOverlayOffsetX]=\"_offsetX\"\r\n       [cdkConnectedOverlayPositions]=\"_positions\"\r\n       [cdkConnectedOverlayOrigin]=\"origin\"\r\n       (backdropClick)=\"_closeCalendar()\"\r\n       (detach)=\"_closeCalendar()\"\r\n       (positionChange)=\"onPositionChange($event)\"\r\n       (attach)=\"onAttach()\"\r\n       [cdkConnectedOverlayOpen]=\"_open\">\r\n<div class=\"dropdown open show\"\r\n [class.top]=\"_dropDownPosition === 'top'\"\r\n [class.bottom]=\"_dropDownPosition === 'bottom'\"\r\n [@dropDownAnimation]=\"_dropDownPosition\">\r\n  <div class=\"pg-calendar dropdown-menu show bg-white calendar-range\"\r\n    [class.pg-calendar-time]=\"ShowTime\"\r\n    [class.pg-calendar-show-time-picker]=\"_mode[_part.Start] === 'time' || _mode[_part.End] === 'time'\"\r\n    tabindex=\"0\">\r\n    <div class=\"date-panel\">\r\n      <div class=\"pg-calendar-range-panel\">\r\n        <ng-container *ngTemplateOutlet=\"calendarRangePart; context: { part: _part.Start }\"></ng-container>\r\n        <span class=\"pg-calendar-range-middle\">~</span>\r\n        <ng-container *ngTemplateOutlet=\"calendarRangePart; context: { part: _part.End }\"></ng-container>\r\n      </div>\r\n      <div class=\"footer d-flex\">\r\n          <span class=\"pg-calendar-footer-btn\">\r\n            <a class=\"pg-calendar-time-picker-btn\"\r\n              [class.pg-calendar-time-picker-btn-disabled]=\"!_isComplete()\"\r\n              (click)=\"_changeTimeView($event)\"\r\n              *ngIf=\"_mode[_part.Start] !== 'time' && ShowTime\">\r\n              Chose Time\r\n            </a>\r\n            <a class=\"pg-calendar-time-picker-btn\"\r\n              (click)=\"_changeYearView($event)\"\r\n              *ngIf=\"_mode[_part.Start] === 'time' && ShowTime\">\r\n              Choose Date\r\n            </a>\r\n            <a class=\"pg-calendar-ok-btn\"\r\n              [class.pg-calendar-ok-btn-disabled]=\"!_isComplete()\"\r\n              *ngIf=\"ShowTime\" (click)=\"_closeCalendar()\">\r\n              Ok\r\n            </a>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ng-template>\r\n\r\n<!-- input template -->\r\n<ng-template #inputRangePart let-part=\"part\">\r\n  <input class=\"pg-calendar-range-picker-input\">\r\n</ng-template>\r\n\r\n<!-- calendar template -->\r\n<ng-template #calendarRangePart let-part=\"part\">\r\n  <div class=\"pg-calendar-range-part\"\r\n  [class.calendar-range-left]=\"part === _part.Start\"\r\n  [class.calendar-range-right]=\"part === _part.End\">\r\n  <div class=\"pg-calendar-input-wrap\">\r\n    <div class=\"pg-calendar-date-input-wrap\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"calendar-header\">\r\n    <div style=\"position: relative;\" *ngIf=\"_mode[part] !== 'time'\">\r\n      <a class=\"pg-calendar-prev-year-btn\"\r\n        *ngIf=\"part !== _part.End || _showBtn(part)\"\r\n        (click)=\"_preYear(part)\"></a>\r\n      <a class=\"pg-calendar-prev-month-btn\"\r\n        *ngIf=\"_mode[part] !== 'month' && (part !== _part.End ||_showBtn(part))\"\r\n        (click)=\"_preMonth(part)\"></a>\r\n      <span class=\"pg-calendar-ym-select\">\r\n                  <a class=\"pg-calendar-month-select\"\r\n                    *ngIf=\"_mode[part] !== 'month'\"\r\n                    (click)=\"_mode[part] = 'month'; _bindDisabledDateToPart()\">\r\n                    {{_showMonth[part] + 1 }}\r\n                  </a>\r\n                  <a class=\"pg-calendar-year-select\"\r\n                    (click)=\"_mode[part] = 'decade'\">\r\n                    {{ _showYear[part] }}</a>\r\n                </span>\r\n      <a class=\"pg-calendar-next-month-btn\"\r\n        *ngIf=\"_mode[part] !== 'month' && (part !== _part.Start || _showBtn(part))\"\r\n        (click)=\"_nextMonth(part)\"></a>\r\n      <a class=\"pg-calendar-next-year-btn\"\r\n        *ngIf=\"part !== _part.Start || _showBtn(part)\"\r\n        (click)=\"_nextYear(part)\"></a>\r\n    </div>\r\n    <div style=\"position: relative;\" *ngIf=\"_mode[part] === 'time'\">\r\n        <span class=\"pg-calendar-my-select\">\r\n          <a class=\"pg-calendar-year-select\"\r\n            title=\"Choose a month\">{{ _selectedYear[part] }}</a>\r\n          <a class=\"pg-calendar-month-select\"\r\n            title=\"Choose a month\">{{ _showMonth[part] + 1 }}</a>\r\n          <a class=\"pg-calendar-day-select\">{{ _selectedDate[part] }}</a>\r\n        </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"pg-calendar-year-panel\" *ngIf=\"_mode[part] === 'decade'\">\r\n    <div>\r\n    <div class=\"pg-calendar-year-panel-header\">\r\n      <a class=\"pg-calendar-year-panel-prev-decade-btn\" \r\n        (click)=\"_preDecade(part)\"></a>\r\n      <a class=\"pg-calendar-year-panel-decade-select\">\r\n        <span class=\"pg-calendar-year-panel-decade-select-content\">\r\n          {{ _startDecade[part] }}-{{ _startDecade[part] + 9 }}</span>\r\n        <span class=\"pg-calendar-year-panel-decade-select-arrow\">x</span>\r\n      </a>\r\n      <a class=\"pg-calendar-year-panel-next-decade-btn\"\r\n        (click)=\"_nextDecade(part)\"></a>\r\n    </div>\r\n    <div class=\"pg-calendar-year-panel-body\">\r\n      <table class=\"pg-calendar-year-panel-table\" cellspacing=\"0\" role=\"grid\">\r\n        <tbody class=\"pg-calendar-year-panel-tbody\">\r\n        <tr *ngFor=\"let tr of _yearPanel\">\r\n          <ng-template ngFor let-td [ngForOf]=\"tr\">\r\n            <td class=\"pg-calendar-year-panel-cell pg-calendar-year-panel-last-decade-cell\"\r\n                *ngIf=\"td === 'start'\">\r\n              <a class=\"pg-calendar-year-panel-year\" (click)=\"_preDecade()\">{{ _startDecade[part] - 1 }}</a>\r\n            </td>\r\n            <td *ngIf=\"(td !== 'start') && (td !== 'end')\" [attr.title]=\"_startDecade[part] + td\"\r\n                class=\"pg-calendar-year-panel-cell\"\r\n                [ngClass]=\"{'pg-calendar-year-panel-selected-cell':(_startDecade[part] + td === _showYear[part])}\">\r\n              <a class=\"pg-calendar-year-panel-year\"\r\n                (click)=\"_setShowYear(_startDecade[part] + td, part, $event)\">{{ _startDecade[part] + td }}</a>\r\n            </td>\r\n            <td class=\"pg-calendar-year-panel-cell pg-calendar-year-panel-next-decade-cell\"\r\n                *ngIf=\"td === 'end'\">\r\n              <a class=\"pg-calendar-year-panel-year\" (click)=\"_nextDecade()\">{{ _startDecade[part] + 10 }}</a>\r\n            </td>\r\n          </ng-template>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"calendar-body\">\r\n    <pg-calendar-view\r\n      (ClickMonth)=\"_clickMonth($event, part)\"\r\n      (ClickDay)=\"_clickDay($event, part)\"\r\n      [ClearTime]=\"!ShowTime\"\r\n      (HoverDay)=\"_hoverDay($event)\"\r\n      [HoveringSelectValue]=\"hoveringSelectValue\"\r\n      [RangeValue]=\"Value\"\r\n      [ShowMonth]=\"_showMonth[part]\"\r\n      [ShowYear]=\"_showYear[part]\"\r\n      [Mode]=\"_mode[part] === 'decade' ? 'year' : _mode[part]\"\r\n      [DisabledDate]=\"_disabledDatePart[part]\"\r\n      [FullScreen]=\"false\"\r\n      [ShowHeader]=\"false\"\r\n      [IsRange]=\"true\"\r\n      [DatePicker]=\"true\">\r\n    </pg-calendar-view>\r\n  </div>\r\n  <div class=\"pg-calendar-time-picker-body\" *ngIf=\"ShowTime && _mode[part] === 'time'\">\r\n    <pg-timepicker-inner\r\n      [PlaceHolder]=\"'Choose Time'\"\r\n      [Format]=\"ShowTime && ShowTime.Format||'HH:mm:ss'\"\r\n      [Disabled]=\"ShowTime && ShowTime.Disabled||false\"\r\n      [DisabledHours]=\"ShowTime && ShowTime.DisabledHours||null\"\r\n      [DisabledMinutes]=\"ShowTime && ShowTime.DisabledMinutes||null\"\r\n      [DisabledSeconds]=\"ShowTime && ShowTime.DisabledSeconds||null\"\r\n      [HideDisabledOptions]=\"ShowTime && ShowTime.HideDisabledOptions||false\"\r\n      [ngModel]=\"Value[part]\" (ngModelChange)=\"_changeTime($event, part)\"></pg-timepicker-inner>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/.pages/@pages/components/datepicker/rangepicker.component.ts":
/*!**************************************************************************!*\
  !*** ./src/.pages/@pages/components/datepicker/rangepicker.component.ts ***!
  \**************************************************************************/
/*! exports provided: pgRangePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgRangePickerComponent", function() { return pgRangePickerComponent; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./src/.pages/@pages/components/datepicker/date.ts");
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/.pages/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _utils_overlay_position_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/overlay-position-map */ "./src/.pages/@pages/utils/overlay-position-map.ts");
/* harmony import */ var _time_picker_timepicker_inner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../time-picker/timepicker-inner.component */ "./src/.pages/@pages/components/time-picker/timepicker-inner.component.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
/* harmony import */ var _util_mesureScrollBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/mesureScrollBar */ "./src/.pages/@pages/components/util/mesureScrollBar.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var pgRangePickerComponent = /** @class */ (function () {
    function pgRangePickerComponent(_elementRef, _cdr) {
        this._elementRef = _elementRef;
        this._cdr = _cdr;
        this._disabled = false;
        this._showTime = null;
        this._now = moment__WEBPACK_IMPORTED_MODULE_3__();
        this._oldValue = this._defaultRangeValue;
        this._value = this._defaultRangeValue;
        this._part = _date__WEBPACK_IMPORTED_MODULE_4__["RangePart"]; // provided to template
        this._disabledDatePart = [null, null];
        this._mode = ['month', 'month'];
        this._selectedMonth = [];
        this._selectedYear = [];
        this._selectedDate = [];
        this._showMonth = [this._now.month(), this._now.clone().add(1, 'month').month()];
        this._showYear = [this._now.year(), this._now.year()];
        this._yearPanel = [];
        this._startDecade = new Array(2).fill(Math.floor(this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] / 10) * 10);
        this._triggerWidth = 0;
        this._dropDownPosition = 'bottom';
        this._positions = _utils_overlay_position_map__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_DATEPICKER_POSITIONS"].slice();
        this._offsetX = 0;
        this.onTouched = function () { return null; };
        this.onChange = function () { return null; };
        this.Size = '';
        this.Format = 'YYYY-MM-DD';
        this.AllowClear = true;
        this._el = this._elementRef.nativeElement;
    }
    pgRangePickerComponent_1 = pgRangePickerComponent;
    Object.defineProperty(pgRangePickerComponent.prototype, "_defaultRangeValue", {
        // avoid reference types
        get: function () {
            return [null, null];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRangePickerComponent.prototype, "start", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_3__(this._value[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRangePickerComponent.prototype, "end", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_3__(this._value[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRangePickerComponent.prototype, "showClearIcon", {
        get: function () {
            return this._isComplete() && !this.Disabled && this.AllowClear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRangePickerComponent.prototype, "ShowTime", {
        get: function () {
            return this._showTime;
        },
        set: function (value) {
            if (typeof value === 'string' || typeof value === 'boolean') {
                this._showTime = Object(_util_convert__WEBPACK_IMPORTED_MODULE_8__["toBoolean"])(value) ? {} : null;
            }
            else {
                this._showTime = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRangePickerComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_8__["toBoolean"])(value);
            this._closeCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRangePickerComponent.prototype, "Value", {
        get: function () {
            return this._value || this._defaultRangeValue;
        },
        set: function (value) {
            this._updateValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRangePickerComponent.prototype, "DisabledDate", {
        get: function () {
            return this._disabledDate;
        },
        set: function (value) {
            this._disabledDate = value;
            this._bindDisabledDateToPart();
        },
        enumerable: true,
        configurable: true
    });
    pgRangePickerComponent.prototype.ngOnInit = function () {
        this._generateYearPanel();
    };
    pgRangePickerComponent.prototype._bindDisabledDateToPart = function () {
        // when the mode is month, not needed disable it
        this._disabledDatePart[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] = this._mode[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] === 'month' ? null : this._disabledDate;
        this._disabledDatePart[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] = this._mode[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] === 'month' ? null : this._disabledDate;
    };
    pgRangePickerComponent.prototype._generateYearPanel = function () {
        var _t = [];
        for (var i = 0; i < 10; i++) {
            if (i === 1 || i === 4 || i === 7 || i === 9) {
                _t.push(i);
                this._yearPanel.push(_t);
                _t = [];
            }
            else {
                _t.push(i);
            }
        }
        this._yearPanel[0].unshift('start');
        this._yearPanel[3].push('end');
    };
    pgRangePickerComponent.prototype._openCalendar = function () {
        if (this.Disabled) {
            return;
        }
        this._mode = ['month', 'month'];
        this._open = true;
        this._setTriggerWidth();
        this._initShow();
    };
    pgRangePickerComponent.prototype._closeCalendar = function () {
        if (!this._open) {
            return;
        }
        if (this._isComplete()) {
            this._onChange();
        }
        else {
            this._value = this._oldValue.slice();
        }
        this._open = false;
    };
    pgRangePickerComponent.prototype._clearValue = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.Value = this._defaultRangeValue;
        this.onChange(this._value);
    };
    pgRangePickerComponent.prototype._setTriggerWidth = function () {
        this._triggerWidth = this.trigger.nativeElement.getBoundingClientRect().width;
    };
    pgRangePickerComponent.prototype._setShowYear = function (year, part, $event) {
        $event.stopPropagation();
        this._showYear[part] = year;
        this._mode[part] = 'month';
    };
    pgRangePickerComponent.prototype._isValid = function (part) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(this._value[part]).isValid();
    };
    pgRangePickerComponent.prototype._isComplete = function () {
        return this.start.isValid() && this.end.isValid();
    };
    pgRangePickerComponent.prototype._changeTime = function ($event, part) {
        this._value[part] = $event;
    };
    pgRangePickerComponent.prototype._blurInput = function (box, part) {
        if (Date.parse(box.value)) {
            this._value[part] = new Date(box.value);
            this._onChange();
        }
    };
    pgRangePickerComponent.prototype._hoverDay = function (day) {
        if (!this._isComplete() && this._value.some(function (e) { return moment__WEBPACK_IMPORTED_MODULE_3__(e).isValid(); })) {
            this.hoveringSelectValue = day.date.toDate();
        }
        else {
            this.hoveringSelectValue = null;
        }
    };
    pgRangePickerComponent.prototype._clickDay = function (day, part) {
        var newDate = day.date.toDate();
        // if have completed, then reset
        if (this._isComplete()) {
            this._value = this._defaultRangeValue;
            this._value[part] = newDate;
            this.rangeValueSort();
            return;
        }
        if (moment__WEBPACK_IMPORTED_MODULE_3__(this._value[part]).isValid()) {
            if (part === _date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start) {
                this._value[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] = newDate;
            }
            else {
                this._value[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] = newDate;
            }
        }
        else {
            this._value[part] = newDate;
        }
        // the result depends the before step
        if (this._isComplete()) {
            this.rangeValueSort();
            if (!this.ShowTime) {
                this._closeCalendar();
                return;
            }
            this._initShow();
        }
        this.rangeValueSort();
    };
    pgRangePickerComponent.prototype._clickMonth = function (month, part) {
        this._showMonth[part] = month.index;
        this._mode[part] = 'year';
        this._bindDisabledDateToPart();
        this.adjustShowMonth();
    };
    pgRangePickerComponent.prototype._changeTimeView = function ($event) {
        var _this = this;
        $event.stopPropagation();
        this._mode = ['time', 'time'];
        this.setSelectedValue();
        setTimeout(function (_) {
            _this.timePickerInner.forEach(function (e) { return e._initPosition(); });
        });
    };
    pgRangePickerComponent.prototype._changeYearView = function ($event) {
        $event.stopPropagation();
        this._mode = ['year', 'year'];
    };
    pgRangePickerComponent.prototype._showBtn = function (part) {
        if (this._mode[part] === 'month') {
            return true;
        }
        var showStart = moment__WEBPACK_IMPORTED_MODULE_3__().month(this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start]).year(this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start]);
        var showEnd = moment__WEBPACK_IMPORTED_MODULE_3__().month(this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End]).year(this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End]);
        return !showStart.add(1, 'month').isSame(showEnd, 'month');
    };
    pgRangePickerComponent.prototype._preYear = function (part) {
        this._showYear[part] = this._showYear[part] - 1;
        this.adjustShowMonth();
    };
    pgRangePickerComponent.prototype._nextYear = function (part) {
        this._showYear[part] = this._showYear[part] + 1;
        this.adjustShowMonth();
    };
    pgRangePickerComponent.prototype._preMonth = function (part) {
        if (this._showMonth[part] - 1 < 0) {
            this._showMonth[part] = 11;
            this._preYear(part);
        }
        else {
            this._showMonth[part] = this._showMonth[part] - 1;
        }
    };
    pgRangePickerComponent.prototype._nextMonth = function (part) {
        if (this._showMonth[part] + 1 > 11) {
            this._showMonth[part] = 0;
            this._nextYear(part);
        }
        else {
            this._showMonth[part] = this._showMonth[part] + 1;
        }
    };
    pgRangePickerComponent.prototype._preDecade = function (part) {
        this._startDecade[part] = this._startDecade[part] - 10;
    };
    pgRangePickerComponent.prototype._nextDecade = function (part) {
        this._startDecade[part] = this._startDecade[part] + 10;
    };
    pgRangePickerComponent.prototype.rangeValueSort = function () {
        if (this.start.isValid() && this.end.isValid() && this.start.isAfter(this.end)) {
            this._value = this._value.reverse();
        }
        else {
            this._value = this._value.concat();
        }
    };
    pgRangePickerComponent.prototype._initShow = function () {
        if (this.start.isValid()) {
            this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] = this.start.month();
            this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] = this.start.year();
        }
        else {
            this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] = this._now.month();
            this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] = this._now.year();
        }
        if (this.end.isValid() && !this.start.isSameOrAfter(this.end, 'month')) {
            this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] = this.end.month();
            this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] = this.end.year();
        }
        else {
            var nextMonthOfStart = this.start.clone().add(1, 'month');
            var nextMonthOfNow = this._now.clone().add(1, 'month');
            this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] = this.start.isValid() ? nextMonthOfStart.month() : nextMonthOfNow.month();
            this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] = this.start.isValid() ? nextMonthOfStart.year() : nextMonthOfNow.year();
        }
        this._showMonth = this._showMonth.concat();
        this._showYear = this._showYear.concat();
    };
    pgRangePickerComponent.prototype.adjustShowMonth = function () {
        if (this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] === this._showYear[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End] && this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start] === this._showMonth[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End]) {
            this._nextMonth(_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End);
        }
    };
    pgRangePickerComponent.prototype.reposition = function () {
        if (typeof window !== 'undefined' && this._open && this._cdkOverlay && this._cdkOverlay.overlayRef) {
            var originElement = this._cdkOverlay.origin.elementRef.nativeElement;
            var overlayElement = this._cdkOverlay.overlayRef.overlayElement;
            var originX = originElement.getBoundingClientRect().x;
            var overlayWidth = overlayElement.getBoundingClientRect().width;
            var margin = window.innerWidth - originX - overlayWidth;
            this._offsetX = margin > 0 ? 0 : margin - (Object(_util_mesureScrollBar__WEBPACK_IMPORTED_MODULE_9__["measureScrollbar"])() || 15);
            this._cdr.detectChanges();
        }
    };
    pgRangePickerComponent.prototype.onAttach = function () {
        this.reposition();
    };
    pgRangePickerComponent.prototype.onPositionChange = function (position) {
        this.reposition();
        var _position = position.connectionPair.originY === 'bottom' ? 'top' : 'bottom';
        if (this._dropDownPosition !== _position) {
            this._dropDownPosition = _position;
            this._cdr.detectChanges();
        }
    };
    pgRangePickerComponent.prototype.setSelectedValue = function () {
        this._selectedYear = [this.start.year(), this.end.year()];
        this._selectedMonth = [this.start.month(), this.end.month()];
        this._selectedDate = [this.start.date(), this.end.date()];
    };
    pgRangePickerComponent.prototype.isValueChange = function () {
        var _this = this;
        return this._value.some(function (value, index) {
            return _this._oldValue[index] === null
                || (moment__WEBPACK_IMPORTED_MODULE_3__["isDate"](_this._oldValue[index])
                    && moment__WEBPACK_IMPORTED_MODULE_3__["isDate"](value)
                    && _this._oldValue[index].getTime() !== value.getTime());
        });
    };
    pgRangePickerComponent.prototype.writeValue = function (value) {
        this._updateValue(value);
    };
    pgRangePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgRangePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgRangePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgRangePickerComponent.prototype._updateValue = function (value) {
        if (Array.isArray(value) && value.length === 2) {
            this._value = [value[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start], value[_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End]];
        }
        else {
            this._value = this._defaultRangeValue;
        }
        this._oldValue = this._value.slice();
    };
    pgRangePickerComponent.prototype._onChange = function () {
        if (this._isValid(_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].Start) && this._isValid(_date__WEBPACK_IMPORTED_MODULE_4__["RangePart"].End) && this.isValueChange()) {
            this.onChange(this._value);
            this._oldValue = this._value.slice();
        }
    };
    var pgRangePickerComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]),
        __metadata("design:type", _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"])
    ], pgRangePickerComponent.prototype, "_cdkOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trigger'),
        __metadata("design:type", Object)
    ], pgRangePickerComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], pgRangePickerComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], pgRangePickerComponent.prototype, "Format", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], pgRangePickerComponent.prototype, "AllowClear", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_time_picker_timepicker_inner_component__WEBPACK_IMPORTED_MODULE_7__["pgTimePickerInnerComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], pgRangePickerComponent.prototype, "timePickerInner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], pgRangePickerComponent.prototype, "ShowTime", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgRangePickerComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], pgRangePickerComponent.prototype, "DisabledDate", null);
    pgRangePickerComponent = pgRangePickerComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-rangepicker',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [
                _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_5__["dropDownAnimation"]
            ],
            template: __webpack_require__(/*! ./rangepicker.component.html */ "./src/.pages/@pages/components/datepicker/rangepicker.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return pgRangePickerComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./datepicker.scss */ "./src/.pages/@pages/components/datepicker/datepicker.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], pgRangePickerComponent);
    return pgRangePickerComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/select/option.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/@pages/components/select/option.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgOptionComponent", function() { return pgOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.component */ "./src/.pages/@pages/components/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pgOptionComponent = /** @class */ (function () {
    function pgOptionComponent(_Select) {
        this._Select = _Select;
        this._disabled = false;
    }
    Object.defineProperty(pgOptionComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value === value) {
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            if (this._label === value) {
                return;
            }
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgOptionComponent.prototype.ngOnInit = function () {
        this._Select.addOption(this);
    };
    pgOptionComponent.prototype.ngOnDestroy = function () {
        this._Select.removeOption(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('OptionTemplate'),
        __metadata("design:type", Object)
    ], pgOptionComponent.prototype, "OptionTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Label", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgOptionComponent.prototype, "Disabled", null);
    pgOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-option',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [_select_component__WEBPACK_IMPORTED_MODULE_2__["pgSelectComponent"]])
    ], pgOptionComponent);
    return pgOptionComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/select/option.pipe.ts":
/*!************************************************************!*\
  !*** ./src/.pages/@pages/components/select/option.pipe.ts ***!
  \************************************************************/
/*! exports provided: OptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionPipe", function() { return OptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:no-any */

var OptionPipe = /** @class */ (function () {
    function OptionPipe() {
    }
    // TODO: enable type checking for this method
    OptionPipe.prototype.transform = function (options, value) {
        if (value.searchText) {
            var _options = options.filter(function (option) { return option.Label && (option.Label.toLowerCase().indexOf(value.searchText.toLowerCase()) !== -1); });
            if (value.tags) {
                _options = options.filter(function (option) { return option.Label && (option.Label.toLowerCase() === value.searchText.toLowerCase()); });
            }
            if (_options.length) {
                return _options;
            }
            else {
                return [{
                        Value: value.value,
                        _value: value.value,
                        Disabled: value.disabled,
                        _disabled: value.disabled,
                        Label: value.notFoundContent,
                        _label: value.notFoundContent,
                    }
                ];
            }
        }
        else {
            return options;
        }
    };
    OptionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'OptionPipe' })
    ], OptionPipe);
    return OptionPipe;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/select/select.component.html":
/*!*******************************************************************!*\
  !*** ./src/.pages/@pages/components/select/select.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n      tabindex=\"0\"\r\n      #trigger\r\n      cdkOverlayOrigin\r\n      #origin=\"cdkOverlayOrigin\"\r\n      [ngClass]=\"_selectionClassMap\"\r\n      (keydown.Enter)=\"handleKeyEnterEvent($event)\"\r\n      (keydown.Backspace)=\"handleKeyBackspaceEvent($event)\"\r\n      (keydown.ArrowUp)=\"handleKeyUpEvent($event)\"\r\n      (keydown.ArrowDown)=\"handleKeyDownEvent($event)\">\r\n      <div class=\"pg-select-selection__rendered\" *ngIf=\"!ShowSearch\">\r\n        <div class=\"pg-select-selection__placeholder\">\r\n          <ng-template [ngIf]=\"!_selectedOption\">\r\n            {{ PlaceHolder }}\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"pg-select-selection-selected-value\">\r\n          {{ _selectedOption?.Label }}\r\n        </div>\r\n      </div>\r\n      <div class=\"pg-select-selection__rendered\" *ngIf=\"ShowSearch\">\r\n        <div\r\n          [hidden]=\"_searchText||(!Open&&_selectedOption)||_selectedOptions.size\"\r\n          class=\"pg-select-selection__placeholder\">\r\n          <ng-template [ngIf]=\"(!_composing)&&_selectedOption\">\r\n            {{ _selectedOption.Label }}\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"(!_composing)&&(!_selectedOption)\">\r\n            {{ PlaceHolder }}\r\n          </ng-template>\r\n        </div>\r\n        <ul *ngIf=\"Multiple\">\r\n          <li\r\n            *ngFor=\"let option of _selectedOptions\"\r\n            [@tagAnimation]\r\n            [attr.title]=\"option?.Label || option?.Value\"\r\n            class=\"pg-select-selection__choice\" style=\"-webkit-user-select: none;\">\r\n            <span class=\"pg-select-selection__choice__remove\" (click)=\"unSelectMultipleOption(option,$event)\"></span><div class=\"pg-select-selection__choice__content\">{{ option?.Label }}</div>\r\n          </li>\r\n          <li class=\"pg-select-search pg-select-search--inline\">\r\n            <div class=\"pg-select-search__field__wrap\">\r\n              <input\r\n                class=\"pg-select-search__field\"\r\n                (compositionstart)=\"compositionStart()\"\r\n                (compositionend)=\"compositionEnd();updateWidth(searchInput,_searchText);\"\r\n                [(ngModel)]=\"_searchText\"\r\n                (ngModelChange)=\"updateFilterOption();onSearchChange($event);\"\r\n                (keydown)=\"updateWidth(searchInput,_searchText)\"\r\n                (input)=\"updateWidth(searchInput,_searchText)\"\r\n                (blur)=\"onTouched()\"\r\n                #searchInput>\r\n              <span class=\"pg-select-search__field__mirror\"></span></div>\r\n          </li>\r\n        </ul>\r\n        <div\r\n          *ngIf=\"!Multiple\"\r\n          class=\"pg-select-selection-selected-value\"\r\n          [hidden]=\"!(_selectedOption?.Label)||Open\">\r\n          {{ _selectedOption?.Label }}\r\n        </div>\r\n        <div *ngIf=\"!Multiple\" [hidden]=\"!Open\" class=\"pg-select-search pg-select-search--inline\">\r\n          <div class=\"pg-select-search__field__wrap\">\r\n            <input\r\n              class=\"pg-select-search__field\"\r\n              (blur)=\"onTouched()\"\r\n              (compositionstart)=\"compositionStart()\"\r\n              (compositionend)=\"compositionEnd()\"\r\n              [(ngModel)]=\"_searchText\"\r\n              (ngModelChange)=\"updateFilterOption();onSearchChange($event);\"\r\n              #searchInput>\r\n            <span class=\"pg-select-search__field__mirror\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <span\r\n        (click)=\"onTouched();clearSelect($event)\"\r\n        class=\"pg-select-selection__clear\"\r\n        style=\"-webkit-user-select: none;\"\r\n        *ngIf=\"_selectedOption?.Label&&AllowClear&&!Multiple\">\r\n      </span>\r\n      <span class=\"pg-select-arrow\"><b></b></span></div>\r\n    <ng-template\r\n      cdkConnectedOverlay\r\n      cdkConnectedOverlayHasBackdrop\r\n      [cdkConnectedOverlayOrigin]=\"origin\"\r\n      (backdropClick)=\"closeDropDown()\"\r\n      (detach)=\"closeDropDown();\"\r\n      (positionChange)=\"onPositionChange($event)\"\r\n      [cdkConnectedOverlayWidth]=\"_triggerWidth\"\r\n      [cdkConnectedOverlayOpen]=\"_isOpen\"\r\n    >\r\n      <div\r\n        [ngClass]=\"_dropDownClassMap\" [@dropDownAnimation]=\"_dropDownPosition\">\r\n        <div style=\"overflow: auto;\">\r\n          <ul class=\"pg-select-dropdown-menu pg-select-dropdown-menu-vertical pg-select-dropdown-menu-root\" #dropdownUl (scroll)=\"dropDownScroll(dropdownUl)\">\r\n            <li\r\n              *ngFor=\"let option of _filterOptions\"\r\n              [class.pg-select-dropdown-menu-item-disabled]=\"option.Disabled\"\r\n              [class.pg-select-dropdown-menu-item-active]=\"option.Value == _activeFilterOption?.Value\"\r\n              [class.pg-select-dropdown-menu-item-selected]=\"(option.Value==(_selectedOption?.Value))||(isInSet(_selectedOptions,option))\"\r\n              class=\"pg-select-dropdown-menu-item\"\r\n              (click)=\"clickOption(option,$event)\">\r\n              <ng-template\r\n                *ngIf=\"option.OptionTemplate\"\r\n                [ngTemplateOutlet]=\"option.OptionTemplate\">\r\n              </ng-template>\r\n              <ng-template [ngIf]=\"!option.OptionTemplate\">\r\n                {{ option.Label }}\r\n              </ng-template>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </ng-template>"

/***/ }),

/***/ "./src/.pages/@pages/components/select/select.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/@pages/components/select/select.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectComponent", function() { return pgSelectComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/.pages/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/tag-animations */ "./src/.pages/@pages/animations/tag-animations.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./option.pipe */ "./src/.pages/@pages/components/select/option.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * complex but work well
 * TODO: rebuild latter
 */






//import { LocaleService } from '../locale/index';


var pgSelectComponent = /** @class */ (function () {
    function pgSelectComponent(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._allowClear = false;
        this._disabled = false;
        this._isTags = false;
        this._isMultiple = false;
        this._keepUnListOptions = false;
        this._showSearch = false;
        this._isOpen = false;
        this._prefixCls = 'pg-select';
        this._classList = [];
        this._dropDownPrefixCls = this._prefixCls + "-dropdown";
        this._selectionPrefixCls = this._prefixCls + "-selection";
        this._placeholder = 'placeholder';
        this._notFoundContent = "No Content";
        this._searchText = '';
        this._triggerWidth = 0;
        this._selectedOptions = new Set();
        this._options = [];
        this._cacheOptions = [];
        this._filterOptions = [];
        this._tagsOptions = [];
        this._isMultiInit = false;
        this._dropDownPosition = 'bottom';
        this._composing = false;
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.SearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.OpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.ScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.Filter = true;
        this.MaxMultiple = Infinity;
        /** new -option insert or new tags insert */
        this.addOption = function (option) {
            _this._options.push(option);
            if (!_this._isTags) {
                if (option.Value) {
                    _this.updateSelectedOption(_this._value);
                }
                else {
                    _this.forceUpdateSelectedOption(_this._value);
                }
            }
        };
        /** cancel select multiple option */
        this.unSelectMultipleOption = function (option, $event, emitChange) {
            if (emitChange === void 0) { emitChange = true; }
            _this._operatingMultipleOption = option;
            _this._selectedOptions.delete(option);
            if (emitChange) {
                _this.emitMultipleOptions();
            }
            // 对Tag进行特殊处理
            if (_this._isTags && (_this._options.indexOf(option) !== -1) && (_this._tagsOptions.indexOf(option) !== -1)) {
                _this.removeOption(option);
                _this._tagsOptions.splice(_this._tagsOptions.indexOf(option), 1);
            }
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        };
        this._el = this._elementRef.nativeElement;
    }
    pgSelectComponent_1 = pgSelectComponent;
    Object.defineProperty(pgSelectComponent.prototype, "AllowClear", {
        get: function () {
            return this._allowClear;
        },
        set: function (value) {
            this._allowClear = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "KeepUnListOptions", {
        get: function () {
            return this._keepUnListOptions;
        },
        set: function (value) {
            this._keepUnListOptions = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Mode", {
        set: function (value) {
            this._mode = value;
            if (this._mode === 'multiple') {
                this.Multiple = true;
            }
            else if (this._mode === 'tags') {
                this.Tags = true;
            }
            else if (this._mode === 'combobox') {
                this.ShowSearch = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Multiple", {
        get: function () {
            return this._isMultiple;
        },
        set: function (value) {
            this._isMultiple = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            if (this._isMultiple) {
                this.ShowSearch = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "PlaceHolder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "NotFoundContent", {
        get: function () {
            return this._notFoundContent;
        },
        set: function (value) {
            this._notFoundContent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = { large: 'lg', small: 'sm' }[value];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "ShowSearch", {
        get: function () {
            return this._showSearch;
        },
        set: function (value) {
            this._showSearch = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Tags", {
        get: function () {
            return this._isTags;
        },
        set: function (value) {
            var isTags = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this._isTags = isTags;
            this.Multiple = isTags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this.closeDropDown();
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Open", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            var isOpen = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            if (this._isOpen === isOpen) {
                return;
            }
            if (isOpen) {
                this.scrollToActive();
                this._setTriggerWidth();
            }
            this._isOpen = isOpen;
            this.OpenChange.emit(this._isOpen);
            this.setClassMap();
            if (this._isOpen) {
                setTimeout(function () {
                    _this.checkDropDownScroll();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /** -option remove or tags remove */
    pgSelectComponent.prototype.removeOption = function (option) {
        this._options.splice(this._options.indexOf(option), 1);
        if (!this._isTags) {
            this.forceUpdateSelectedOption(this._value);
        }
    };
    /** dropdown position changed */
    pgSelectComponent.prototype.onPositionChange = function (position) {
        this._dropDownPosition = position.connectionPair.originY;
    };
    pgSelectComponent.prototype.compositionStart = function () {
        this._composing = true;
    };
    pgSelectComponent.prototype.compositionEnd = function () {
        this._composing = false;
    };
    /** clear single selected option */
    pgSelectComponent.prototype.clearSelect = function ($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._selectedOption = null;
        this.Value = null;
        this.onChange(null);
    };
    /** click dropdown option by user */
    pgSelectComponent.prototype.clickOption = function (option, $event) {
        if (!option) {
            return;
        }
        this.chooseOption(option, true, $event);
        this.clearSearchText();
        if (!this._isMultiple) {
            this.Open = false;
        }
    };
    /** choose option */
    pgSelectComponent.prototype.chooseOption = function (option, isUserClick, $event) {
        if (isUserClick === void 0) { isUserClick = false; }
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._activeFilterOption = option;
        if (option && !option.Disabled) {
            if (!this.Multiple) {
                this._selectedOption = option;
                this._value = option.Value;
                if (isUserClick) {
                    this.onChange(option.Value);
                }
            }
            else {
                if (isUserClick) {
                    this.isInSet(this._selectedOptions, option) ? this.unSelectMultipleOption(option) : this.selectMultipleOption(option);
                }
            }
        }
    };
    pgSelectComponent.prototype.updateWidth = function (element, text) {
        var _this = this;
        if (text) {
            /** wait for scroll width change */
            setTimeout(function (_) {
                _this._renderer.setStyle(element, 'width', element.scrollWidth + "px");
            });
        }
        else {
            this._renderer.removeStyle(element, 'width');
        }
    };
    /** determine if option in set */
    pgSelectComponent.prototype.isInSet = function (set, option) {
        return (Array.from(set).find(function (data) { return data.Value === option.Value; }));
    };
    /** select multiple option */
    pgSelectComponent.prototype.selectMultipleOption = function (option, $event) {
        /** if tags do push to tag option */
        if (this._isTags && (this._options.indexOf(option) === -1) && (this._tagsOptions.indexOf(option) === -1)) {
            this.addOption(option);
            this._tagsOptions.push(option);
        }
        this._operatingMultipleOption = option;
        if (this._selectedOptions.size < this.MaxMultiple) {
            this._selectedOptions.add(option);
        }
        this.emitMultipleOptions();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    /** emit multiple options */
    pgSelectComponent.prototype.emitMultipleOptions = function () {
        if (this._isMultiInit) {
            return;
        }
        var arrayOptions = Array.from(this._selectedOptions);
        this._value = arrayOptions.map(function (item) { return item.Value; });
        this.onChange(this._value);
    };
    /** update selected option when add remove option etc */
    pgSelectComponent.prototype.updateSelectedOption = function (currentModelValue, triggerByNgModel) {
        var _this = this;
        if (triggerByNgModel === void 0) { triggerByNgModel = false; }
        if (currentModelValue == null) {
            return;
        }
        if (this.Multiple) {
            var selectedOptions = this._options.filter(function (item) {
                return (item != null) && (currentModelValue.indexOf(item.Value) !== -1);
            });
            if ((this.KeepUnListOptions || this.Tags) && (!triggerByNgModel)) {
                var _selectedOptions_1 = Array.from(this._selectedOptions);
                selectedOptions.forEach(function (option) {
                    var _exist = _selectedOptions_1.some(function (item) { return item._value === option._value; });
                    if (!_exist) {
                        _this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(function (option) {
                    _this._selectedOptions.add(option);
                });
            }
        }
        else {
            var selectedOption = this._options.filter(function (item) {
                return (item != null) && (item.Value === currentModelValue);
            });
            this.chooseOption(selectedOption[0]);
        }
    };
    pgSelectComponent.prototype.forceUpdateSelectedOption = function (value) {
        var _this = this;
        /** trigger dirty check */
        setTimeout(function (_) {
            _this.updateSelectedOption(value);
        });
    };
    Object.defineProperty(pgSelectComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._updateValue(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSelectComponent.prototype.clearAllSelectedOption = function (emitChange) {
        var _this = this;
        if (emitChange === void 0) { emitChange = true; }
        this._selectedOptions.forEach(function (item) {
            _this.unSelectMultipleOption(item, null, emitChange);
        });
    };
    pgSelectComponent.prototype.handleKeyEnterEvent = function (event) {
        /** when composing end */
        if (!this._composing && this._isOpen) {
            event.preventDefault();
            event.stopPropagation();
            this.updateFilterOption(false);
            this.clickOption(this._activeFilterOption);
        }
    };
    pgSelectComponent.prototype.handleKeyBackspaceEvent = function (event) {
        if ((!this._searchText) && (!this._composing) && (this._isMultiple)) {
            event.preventDefault();
            var lastOption = Array.from(this._selectedOptions).pop();
            this.unSelectMultipleOption(lastOption);
        }
    };
    pgSelectComponent.prototype.handleKeyDownEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.nextOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectComponent.prototype.handleKeyUpEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.preOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectComponent.prototype.preOption = function (option, options) {
        return options[options.indexOf(option) - 1] || options[options.length - 1];
    };
    pgSelectComponent.prototype.nextOption = function (option, options) {
        return options[options.indexOf(option) + 1] || options[0];
    };
    pgSelectComponent.prototype.clearSearchText = function () {
        this._searchText = '';
        this.updateFilterOption();
    };
    pgSelectComponent.prototype.updateFilterOption = function (updateActiveFilter) {
        if (updateActiveFilter === void 0) { updateActiveFilter = true; }
        if (this.Filter) {
            this._filterOptions = new _option_pipe__WEBPACK_IMPORTED_MODULE_7__["OptionPipe"]().transform(this._options, {
                'searchText': this._searchText,
                'tags': this._isTags,
                'notFoundContent': this._isTags ? this._searchText : this._notFoundContent,
                'disabled': !this._isTags,
                'value': this._isTags ? this._searchText : 'disabled'
            });
        }
        else {
            this._filterOptions = this._options;
        }
        /** TODO: cause pre & next key selection not work */
        if (updateActiveFilter && !this._selectedOption) {
            this._activeFilterOption = this._filterOptions[0];
        }
    };
    pgSelectComponent.prototype.onSearchChange = function (searchValue) {
        this.SearchChange.emit(searchValue);
    };
    pgSelectComponent.prototype.onClick = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this._disabled) {
            this.Open = !this.Open;
            if (this.ShowSearch) {
                /** wait for search display */
                setTimeout(function (_) {
                    _this.searchInputElementRef.nativeElement.focus();
                });
            }
        }
    };
    pgSelectComponent.prototype.onKeyDown = function (e) {
        var _this = this;
        var keyCode = e.keyCode;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && this.Open) {
            this.Open = false;
            return;
        }
        if ((keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DOWN_ARROW"] && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) || this.Open) {
            return;
        }
        e.preventDefault();
        if (!this._disabled) {
            this.Open = true;
            if (this.ShowSearch) {
                /** wait for search display */
                setTimeout(function (_) {
                    _this.searchInputElementRef.nativeElement.focus();
                });
            }
        }
    };
    pgSelectComponent.prototype.closeDropDown = function () {
        if (!this.Open) {
            return;
        }
        this.onTouched();
        if (this.Multiple) {
            this._renderer.removeStyle(this.searchInputElementRef.nativeElement, 'width');
        }
        this.clearSearchText();
        this.Open = false;
    };
    pgSelectComponent.prototype.setClassMap = function () {
        var _this = this;
        var _a;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this._prefixCls,
            (this._mode === 'combobox') && this._prefixCls + "-combobox",
            (!this._disabled) && this._prefixCls + "-enabled",
            (this._disabled) && this._prefixCls + "-disabled",
            this._isOpen && this._prefixCls + "-open",
            this._showSearch && this._prefixCls + "-show-search",
            this._size && this._prefixCls + "-" + this._size
        ].filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
        this._selectionClassMap = (_a = {},
            _a[this._selectionPrefixCls] = true,
            _a[this._selectionPrefixCls + "--single"] = !this.Multiple,
            _a[this._selectionPrefixCls + "--multiple"] = this.Multiple,
            _a);
    };
    pgSelectComponent.prototype.setDropDownClassMap = function () {
        var _a;
        this._dropDownClassMap = (_a = {},
            _a[this._dropDownPrefixCls] = true,
            _a['component-select'] = this._mode === 'combobox',
            _a[this._dropDownPrefixCls + "--single"] = !this.Multiple,
            _a[this._dropDownPrefixCls + "--multiple"] = this.Multiple,
            _a[this._dropDownPrefixCls + "-placement-bottomLeft"] = this._dropDownPosition === 'bottom',
            _a[this._dropDownPrefixCls + "-placement-topLeft"] = this._dropDownPosition === 'top',
            _a);
    };
    pgSelectComponent.prototype.scrollToActive = function () {
        var _this = this;
        /** wait for dropdown display */
        setTimeout(function (_) {
            if (_this._activeFilterOption && _this._activeFilterOption.Value) {
                var index = _this._filterOptions.findIndex(function (option) { return option.Value === _this._activeFilterOption.Value; });
                try {
                    var scrollPane = _this.dropdownUl.nativeElement.children[index];
                    // TODO: scrollIntoViewIfNeeded is not a standard API, why doing so?
                    /* tslint:disable-next-line:no-any */
                    scrollPane.scrollIntoViewIfNeeded(false);
                }
                catch (e) {
                }
            }
        });
    };
    pgSelectComponent.prototype.flushComponentState = function () {
        this.updateFilterOption();
        if (!this.Multiple) {
            this.updateSelectedOption(this._value);
        }
        else {
            if (this._value) {
                this.updateSelectedOption(this._value);
            }
        }
    };
    pgSelectComponent.prototype._setTriggerWidth = function () {
        this._triggerWidth = this._getTriggerRect().width;
        /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
        if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
            this._cdkOverlay.overlayRef.updateSize({
                width: this._triggerWidth
            });
        }
    };
    pgSelectComponent.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    pgSelectComponent.prototype.writeValue = function (value) {
        this._updateValue(value, false);
    };
    pgSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgSelectComponent.prototype.dropDownScroll = function (ul) {
        if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectComponent.prototype.checkDropDownScroll = function () {
        if (this.dropdownUl && (this.dropdownUl.nativeElement.scrollHeight === this.dropdownUl.nativeElement.clientHeight)) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectComponent.prototype.ngAfterContentInit = function () {
        if (this._value != null) {
            this.flushComponentState();
        }
    };
    pgSelectComponent.prototype.ngOnInit = function () {
        this.updateFilterOption();
        this.setClassMap();
        this.setDropDownClassMap();
    };
    pgSelectComponent.prototype.ngAfterContentChecked = function () {
        if (this._cacheOptions !== this._options) {
            /** update filter option after every content check cycle */
            this.updateFilterOption();
            this._cacheOptions = this._options;
        }
        else {
            this.updateFilterOption(false);
        }
    };
    pgSelectComponent.prototype._updateValue = function (value, emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        if (this._value === value) {
            return;
        }
        if ((value == null) && this.Multiple) {
            this._value = [];
        }
        else {
            this._value = value;
        }
        if (!this.Multiple) {
            if (value == null) {
                this._selectedOption = null;
            }
            else {
                this.updateSelectedOption(value);
            }
        }
        else {
            if (value) {
                if (value.length === 0) {
                    this.clearAllSelectedOption(emitChange);
                }
                else {
                    this.updateSelectedOption(value, true);
                }
            }
            else if (value == null) {
                this.clearAllSelectedOption(emitChange);
            }
        }
    };
    var pgSelectComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], pgSelectComponent.prototype, "searchInputElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trigger'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dropdownUl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectComponent.prototype, "dropdownUl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectComponent.prototype, "SearchChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectComponent.prototype, "OpenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectComponent.prototype, "ScrollToBottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectComponent.prototype, "Filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectComponent.prototype, "MaxMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"]),
        __metadata("design:type", _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"])
    ], pgSelectComponent.prototype, "_cdkOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "AllowClear", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "KeepUnListOptions", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "Mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Multiple", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "PlaceHolder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "NotFoundContent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "Size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "ShowSearch", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Tags", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Open", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectComponent.prototype, "onKeyDown", null);
    pgSelectComponent = pgSelectComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'pg-select',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return pgSelectComponent_1; }),
                    multi: true
                }
            ],
            animations: [
                _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__["dropDownAnimation"],
                _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__["tagAnimation"]
            ],
            template: __webpack_require__(/*! ./select.component.html */ "./src/.pages/@pages/components/select/select.component.html"),
            styles: [__webpack_require__(/*! ./style/index.scss */ "./src/.pages/@pages/components/select/style/index.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]])
    ], pgSelectComponent);
    return pgSelectComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/select/select.module.ts":
/*!**************************************************************!*\
  !*** ./src/.pages/@pages/components/select/select.module.ts ***!
  \**************************************************************/
/*! exports provided: pgSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectModule", function() { return pgSelectModule; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option.component */ "./src/.pages/@pages/components/select/option.component.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option.pipe */ "./src/.pages/@pages/components/select/option.pipe.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.component */ "./src/.pages/@pages/components/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var pgSelectModule = /** @class */ (function () {
    function pgSelectModule() {
    }
    pgSelectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]],
            declarations: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectComponent"]],
            exports: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectComponent"]]
        })
    ], pgSelectModule);
    return pgSelectModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/select/style/index.scss":
/*!**************************************************************!*\
  !*** ./src/.pages/@pages/components/select/style/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL3NlbGVjdC9zdHlsZS9pbmRleC5zY3NzIn0= */"

/***/ }),

/***/ "./src/.pages/@pages/components/time-picker/timepicker-inner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/.pages/@pages/components/time-picker/timepicker-inner.component.ts ***!
  \********************************************************************************/
/*! exports provided: pgTimePickerInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTimePickerInnerComponent", function() { return pgTimePickerInnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/.pages/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _util_request_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/request-animation */ "./src/.pages/@pages/components/util/request-animation.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var pgTimePickerInnerComponent = /** @class */ (function () {
    function pgTimePickerInnerComponent(_cdr) {
        this._cdr = _cdr;
        this._disabled = false;
        this._hideDisabledOptions = false;
        this._now = new Date();
        this._open = false;
        this._hourList = [];
        this._minuteList = [];
        this._secondList = [];
        this._value = null;
        this._format = 'HH:mm:ss';
        this._formats = this._format.split(":");
        this._selectedHour = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__(this._now).format(this._formats[0]));
        this._selectedMinute = moment__WEBPACK_IMPORTED_MODULE_2__(this._now).minutes();
        this._selectedSecond = moment__WEBPACK_IMPORTED_MODULE_2__(this._now).seconds();
        this._selectedAMPM = moment__WEBPACK_IMPORTED_MODULE_2__(this._now).format("a") == 'am' ? 0 : 1;
        this._ampmList = [];
        this._showHour = this._formats.length >= 1;
        this._showMinute = this._formats.length >= 2;
        this._showSecond = this._formats.length >= 3;
        this._showAMPM = this._formats[0] === ("h" || false) ? true : false;
        this._width = (+this._showHour + +this._showMinute + +this._showSecond + +this._showAMPM) * 56 + 1 + "px";
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.PlaceHolder = "Select Time";
        this.Size = 'default';
    }
    pgTimePickerInnerComponent_1 = pgTimePickerInnerComponent;
    Object.defineProperty(pgTimePickerInnerComponent.prototype, "HideDisabledOptions", {
        get: function () {
            return this._hideDisabledOptions;
        },
        set: function (value) {
            this._hideDisabledOptions = Object(_util_convert__WEBPACK_IMPORTED_MODULE_5__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTimePickerInnerComponent.prototype, "DisabledHours", {
        get: function () {
            return this._DisabledHours;
        },
        set: function (fun) {
            this._DisabledHours = fun;
            this._buildHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTimePickerInnerComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_5__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTimePickerInnerComponent.prototype, "Format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value;
            this._formats = this._format.split(":");
            this._selectedHour = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__(this._now).format(this._formats[0]));
            console.log(this._selectedHour);
            this._showHour = this._formats.length >= 1;
            this._showMinute = this._formats.length >= 2;
            this._showSecond = this._formats.length >= 3;
            this._showAMPM = this._formats[0] === ("h" || false) ? true : false;
            this._width = (+this._showHour + +this._showMinute + +this._showSecond + +this._showAMPM) * 56 + 1 + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTimePickerInnerComponent.prototype, "Value", {
        get: function () {
            return this._value || this._now;
        },
        set: function (value) {
            if (this._value === value) {
                return;
            }
            this._value = value;
            this._selectedHour = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).format(this._formats[0]));
            this._selectedMinute = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).minutes();
            this._selectedSecond = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).seconds();
            this._selectedAMPM = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).format("a") == 'am' ? 0 : 1;
        },
        enumerable: true,
        configurable: true
    });
    pgTimePickerInnerComponent.prototype._scrollToSelected = function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        var _transIndex = this._translateIndex(index, unit);
        var currentOption = (instance.children[0].children[_transIndex] || instance.children[0].children[0]);
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    // got from rc-timepicker
    pgTimePickerInnerComponent.prototype.scrollTo = function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;
        Object(_util_request_animation__WEBPACK_IMPORTED_MODULE_4__["reqAnimFrame"])(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        });
    };
    pgTimePickerInnerComponent.prototype._selectHour = function (instance, index, disabled) {
        if (disabled) {
            return;
        }
        this._scrollToSelected(instance, index, 120, 'hour');
        this._selectedHour = index;
        this.Value = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).hour(index).toDate();
        this.onChange(this._value);
        this._buildMinutes();
        this._buildSeconds();
    };
    pgTimePickerInnerComponent.prototype._selectMinute = function (instance, index, disabled) {
        if (disabled) {
            return;
        }
        this._scrollToSelected(instance, index, 120, 'minute');
        this._selectedMinute = index;
        this.Value = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).minute(index).toDate();
        this.onChange(this._value);
        this._buildSeconds();
    };
    pgTimePickerInnerComponent.prototype._selectSecond = function (instance, index, disabled) {
        if (disabled) {
            return;
        }
        this._scrollToSelected(instance, index, 120, 'second');
        this._selectedSecond = index;
        this.Value = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).second(index).toDate();
        this.onChange(this._value);
    };
    pgTimePickerInnerComponent.prototype._selectAMPM = function (instance, index, disabled) {
        if (disabled) {
            return;
        }
        this._scrollToSelected(instance, index, 120, 'second');
        this._selectedAMPM = index;
        var tempDateString = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).format("YYYY MM DD") + "," + moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).format(this._format) + " " + this._ampmList[index].name;
        this.Value = moment__WEBPACK_IMPORTED_MODULE_2__(tempDateString).toDate();
        this.onChange(this._value);
    };
    pgTimePickerInnerComponent.prototype._translateIndex = function (index, unit) {
        if (!this.HideDisabledOptions) {
            if (unit === 'hour') {
                index = this._formats[0] === ("h" || false) ? index - 1 : index;
            }
            return index;
        }
        if (unit === 'hour') {
            var disabledHours = this.DisabledHours && this.DisabledHours();
            return this._calcIndex(disabledHours, index);
        }
        else if (unit === 'minute') {
            var disabledMinutes = this.DisabledMinutes && this.DisabledMinutes(this._selectedHour);
            return this._calcIndex(disabledMinutes, index);
        }
        else if (unit === 'second') {
            var disabledSeconds = this.DisabledSeconds && this.DisabledSeconds(this._selectedHour, this._selectedMinute);
            return this._calcIndex(disabledSeconds, index);
        }
    };
    pgTimePickerInnerComponent.prototype._calcIndex = function (array, index) {
        if (array && array.length) {
            return index - array.reduce(function (pre, value) {
                return pre + (value < index ? 1 : 0);
            }, 0);
        }
        else {
            return index;
        }
    };
    pgTimePickerInnerComponent.prototype._initPosition = function () {
        this._selectedHour = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).format(this._formats[0]));
        this._selectedMinute = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).minutes();
        this._selectedSecond = moment__WEBPACK_IMPORTED_MODULE_2__(this.Value).seconds();
        if (this._showHour) {
            this._scrollToSelected(this._hourListInstance.nativeElement, this._selectedHour, 0, 'hour');
        }
        if (this._showMinute) {
            this._scrollToSelected(this._minuteListInstance.nativeElement, this._selectedMinute, 0, 'minute');
        }
        if (this._showSecond) {
            this._scrollToSelected(this._secondListInstance.nativeElement, this._selectedSecond, 0, 'second');
        }
    };
    pgTimePickerInnerComponent.prototype._buildTime = function () {
        this._buildHours();
        this._buildMinutes();
        this._buildSeconds();
        this._buildAMPM();
    };
    pgTimePickerInnerComponent.prototype._buildHours = function () {
        this._hourList = [];
        var dayLength = this._formats[0] === ("h" || false) ? 11 : 23;
        for (var i = 0; i <= dayLength; i++) {
            this._hourList.push({
                disabled: this.DisabledHours && (this.DisabledHours().indexOf(i) !== -1),
                name: "",
                index: i
            });
            if (dayLength == 11) {
                this._hourList[i]["name"] = moment__WEBPACK_IMPORTED_MODULE_2__().startOf('day').add(i + 1, "hours").format(this._format[0]);
                this._hourList[i]["index"] = i + 1;
            }
            else {
                this._hourList[i]["name"] = i.toString().length === 0 ? (moment__WEBPACK_IMPORTED_MODULE_2__().startOf('day').format(this._format[0])) : (moment__WEBPACK_IMPORTED_MODULE_2__().startOf('day').add(i, "hours").format(this._format[0]));
            }
        }
    };
    pgTimePickerInnerComponent.prototype._buildMinutes = function () {
        this._minuteList = [];
        for (var i = 0; i <= 59; i++) {
            this._minuteList.push({
                disabled: this.DisabledMinutes && (this.DisabledMinutes(this._selectedHour).indexOf(i) !== -1),
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    pgTimePickerInnerComponent.prototype._buildSeconds = function () {
        this._secondList = [];
        for (var i = 0; i <= 59; i++) {
            this._secondList.push({
                disabled: this.DisabledSeconds && (this.DisabledSeconds(this._selectedHour, this._selectedMinute).indexOf(i) !== -1),
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    pgTimePickerInnerComponent.prototype._buildAMPM = function () {
        this._ampmList = [];
        this._ampmList.push({
            disabled: false,
            name: "am",
            index: 0
        });
        this._ampmList.push({
            disabled: false,
            name: "pm",
            index: 1
        });
    };
    pgTimePickerInnerComponent.prototype.writeValue = function (value) {
        this.Value = value;
    };
    pgTimePickerInnerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgTimePickerInnerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgTimePickerInnerComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgTimePickerInnerComponent.prototype.ngOnInit = function () {
        this._buildTime();
    };
    var pgTimePickerInnerComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hourListInstance'),
        __metadata("design:type", Object)
    ], pgTimePickerInnerComponent.prototype, "_hourListInstance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('minuteListInstance'),
        __metadata("design:type", Object)
    ], pgTimePickerInnerComponent.prototype, "_minuteListInstance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputTimeInstance'),
        __metadata("design:type", Object)
    ], pgTimePickerInnerComponent.prototype, "_inputTimeInstance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('secondListInstance'),
        __metadata("design:type", Object)
    ], pgTimePickerInnerComponent.prototype, "_secondListInstance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTimePickerInnerComponent.prototype, "HideDisabledOptions", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTimePickerInnerComponent.prototype, "PlaceHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgTimePickerInnerComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], pgTimePickerInnerComponent.prototype, "DisabledHours", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgTimePickerInnerComponent.prototype, "DisabledMinutes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgTimePickerInnerComponent.prototype, "DisabledSeconds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTimePickerInnerComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTimePickerInnerComponent.prototype, "Format", null);
    pgTimePickerInnerComponent = pgTimePickerInnerComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-timepicker-inner',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n      <div\n        class=\"time-picker-panel\"\n        [@dropDownAnimation]=\"'bottom'\">\n        <div class=\"time-picker-inner\"\n          [class.time-picker-column-3]=\"_showHour&&_showMinute&&_showSecond\"\n          [class.time-picker-column-2]=\"_showHour&&_showMinute&&!_showSecond\"\n          [class.time-picker-column-1]=\"_showHour&&(!_showMinute)&&(!_showSecond)\">\n        <div class=\"time-picker-panel-combobox d-flex flex-row\">\n          <div\n            class=\"select-panel\"\n            #hourListInstance\n            *ngIf=\"_showHour\">\n            <ul class=\"no-style no-padding text-center\">\n              <ng-template\n                ngFor\n                let-_hour\n                [ngForOf]=\"_hourList\"\n                let-i=\"index\">\n                 <li>\n                  <span class=\"btn btn-link\"\n                   [ngClass]=\"_hour.name\"\n                   *ngIf=\"!(HideDisabledOptions&&_hour.disabled)\"\n                   [class.active]=\"_hour.index===_selectedHour\"\n                   [class.option-disabled]=\"_hour.disabled\"\n                   (click)=\"_selectHour(hourListInstance,_hour.index,_hour.disabled)\">\n                   {{ _hour.name }}\n                   </span>\n                 </li>\n              </ng-template>\n            </ul>\n          </div>\n          <div\n            class=\"select-panel\"\n            #minuteListInstance\n            *ngIf=\"_showMinute\">\n            <ul class=\"no-style no-padding text-center\">\n              <ng-template\n                ngFor\n                let-_minute\n                [ngForOf]=\"_minuteList\"\n                let-i=\"index\">\n                 <li>\n                  <span class=\"btn btn-link\"\n                   [ngClass]=\"_minute.name\"\n                   *ngIf=\"!(HideDisabledOptions&&_minute.disabled)\"\n                   [class.active]=\"_minute.index===_selectedMinute\"\n                   [class.option-disabled]=\"_minute.disabled\"\n                   (click)=\"_selectMinute(minuteListInstance,_minute.index,_minute.disabled)\">\n                   {{ _minute.name }}\n                   </span>\n                 </li>\n              </ng-template>\n            </ul>\n          </div>\n          <div\n            class=\"select-panel\"\n            #secondListInstance\n            *ngIf=\"_showSecond\">\n            <ul class=\"no-style no-padding text-center\">\n              <ng-template\n                ngFor\n                let-_second\n                [ngForOf]=\"_secondList\"\n                let-i=\"index\">\n                 <li>\n                  <span class=\"btn btn-link\"\n                   [ngClass]=\"_second.name\"\n                   *ngIf=\"!(HideDisabledOptions&&_second.disabled)\"\n                   [class.active]=\"_second.index===_selectedSecond\"\n                   [class.option-disabled]=\"_second.disabled\"\n                   (click)=\"_selectSecond(secondListInstance,_second.index,_second.disabled)\">\n                   {{ _second.name }}\n                  </span>\n                 </li>\n              </ng-template>\n            </ul>\n          </div>\n          <div class=\"select-panel\"\n          #ampmListInstance *ngIf=\"_showAMPM\"\n          (mouseover)=\"_overSecond()\">\n            <ul class=\"no-style no-padding text-center\">\n              <ng-template\n                ngFor\n                let-_ampm\n                [ngForOf]=\"_ampmList\"\n                let-i=\"index\">\n                <li\n                class=\"btn btn-link\"\n                  [ngClass]=\"_ampm.name\"\n                  [class.active]=\"_ampm.index===_selectedAMPM\"\n                  [class.disabled]=\"_ampm.disabled\"\n                  *ngIf=\"!(HideDisabledOptions&&_ampm.disabled)\"\n                  (click)=\"_selectAMPM(ampmListInstance,_ampm.index,_ampm.disabled)\">\n                  {{ _ampm.name }}\n                </li>\n              </ng-template>\n            </ul>\n          </div>\n        </div>\n      </div>\n      </div>",
            animations: [
                _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_3__["dropDownAnimation"]
            ],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return pgTimePickerInnerComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./timepicker.scss */ "./src/.pages/@pages/components/time-picker/timepicker.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], pgTimePickerInnerComponent);
    return pgTimePickerInnerComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/time-picker/timepicker.component.html":
/*!****************************************************************************!*\
  !*** ./src/.pages/@pages/components/time-picker/timepicker.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <span\r\n    class=\"time-picker\"\r\n    [class.time-picker-large]=\"Size=='large'\"\r\n    [class.time-picker-small]=\"Size=='small'\"\r\n    cdkOverlayOrigin #origin=\"cdkOverlayOrigin\"\r\n    #trigger>\r\n    <input\r\n      [disabled]=\"Disabled\"\r\n      class=\"time-picker-input form-control\"\r\n      [attr.placeholder]=\"PlaceHolder\"\r\n      (click)=\"_openCalendar()\"\r\n      (blur)=\"onTouched()\"\r\n      [value]=\"_value|pgDate:_format\"\r\n      readonly>\r\n  </span>\r\n  <ng-template\r\n    cdkConnectedOverlay\r\n    cdkConnectedOverlayHasBackdrop\r\n    [cdkConnectedOverlayPositions]=\"_positions\"\r\n    [cdkConnectedOverlayOrigin]=\"origin\"\r\n    (backdropClick)=\"_closeCalendar()\"\r\n    (detach)=\"_closeCalendar()\"\r\n    (positionChange)=\"onPositionChange($event)\"\r\n    [cdkConnectedOverlayOpen]=\"_open\"\r\n  >\r\n    <div class=\"time-picker-panel dropdown show open\"\r\n      [class.top]=\"_dropDownPosition==='top'\"\r\n      [class.bottom]=\"_dropDownPosition==='bottom'\"\r\n      [style.width]=\"_width\"\r\n      [@dropDownAnimation]=\"_dropDownPosition\">\r\n      <div class=\"dropdown-menu show bg-white\">\r\n        <div class=\"time-picker-panel-input-wrap\">\r\n          <input class=\"time-picker-panel-input\"\r\n            [attr.placeholder]=\"PlaceHolder\"\r\n            #inputTimeInstance\r\n            [value]=\"_value|pgDate:_format\"\r\n            (blur)=\"_manualChangeInput(inputTimeInstance)\"\r\n            (keydown.Enter)=\"_manualChangeInput(inputTimeInstance)\">\r\n          <a class=\"time-picker-panel-clear-btn\" title=\"select time\" (click)=\"_clearValue()\"></a>\r\n        </div>\r\n        <div class=\"time-picker-panel-combobox d-flex flex-row\">\r\n          <div class=\"select-panel\" perfectScrollbar\r\n            #hourListInstance *ngIf=\"_showHour\"\r\n            (mouseover)=\"_overHour()\">\r\n            <ul class=\"no-style no-padding text-center\">\r\n              <ng-template\r\n                ngFor\r\n                let-_hour\r\n                [ngForOf]=\"_hourList\"\r\n                let-i=\"index\">\r\n                <li\r\n                  class=\"btn btn-link\"\r\n                  [class.active]=\"_hour.index===_selectedHour\"\r\n                  [class.disabled]=\"_hour.disabled\"\r\n                  [ngClass]=\"_hour.name\"\r\n                  *ngIf=\"!(HideDisabledOptions&&_hour.disabled)\"\r\n                  (click)=\"_selectHour(hourListInstance,_hour.index,_hour.disabled)\">\r\n                  {{ _hour.name }}\r\n                </li>\r\n              </ng-template>\r\n            </ul>\r\n          </div>\r\n          <div class=\"select-panel\" perfectScrollbar\r\n            #minuteListInstance\r\n            *ngIf=\"_showMinute\"\r\n            (mouseover)=\"_overMinute()\">\r\n            <ul class=\"no-style no-padding text-center\">\r\n              <ng-template\r\n                ngFor\r\n                let-_minute\r\n                [ngForOf]=\"_minuteList\"\r\n                let-i=\"index\">\r\n                <li\r\n                class=\"btn btn-link\"\r\n                  [ngClass]=\"_minute.name\"\r\n                  *ngIf=\"!(HideDisabledOptions&&_minute.disabled)\"\r\n                  [class.active]=\"_minute.index===_selectedMinute\"\r\n                  [class.disabled]=\"_minute.disabled\"\r\n                  (click)=\"_selectMinute(minuteListInstance,_minute.index,_minute.disabled)\">\r\n                  {{ _minute.name }}\r\n                </li>\r\n              </ng-template>\r\n            </ul>\r\n          </div>\r\n          <div class=\"select-panel\" perfectScrollbar\r\n            #secondListInstance *ngIf=\"_showSecond\"\r\n            (mouseover)=\"_overSecond()\">\r\n            <ul class=\"no-style no-padding text-center\">\r\n              <ng-template\r\n                ngFor\r\n                let-_second\r\n                [ngForOf]=\"_secondList\"\r\n                let-i=\"index\">\r\n                <li\r\n                 class=\"btn btn-link\"\r\n                  [ngClass]=\"_second.name\"\r\n                  [class.active]=\"_second.index===_selectedSecond\"\r\n                  [class.disabled]=\"_second.disabled\"\r\n                  *ngIf=\"!(HideDisabledOptions&&_second.disabled)\"\r\n                  (click)=\"_selectSecond(secondListInstance,_second.index,_second.disabled)\">\r\n                  {{ _second.name }}\r\n                </li>\r\n              </ng-template>\r\n            </ul>\r\n          </div>\r\n          <div class=\"select-panel\" perfectScrollbar\r\n          #ampmListInstance *ngIf=\"_showAMPM\"\r\n          (mouseover)=\"_overSecond()\">\r\n            <ul class=\"no-style no-padding text-center\">\r\n              <ng-template\r\n                ngFor\r\n                let-_ampm\r\n                [ngForOf]=\"_ampmList\"\r\n                let-i=\"index\">\r\n                <li\r\n                class=\"btn btn-link\"\r\n                  [ngClass]=\"_ampm.name\"\r\n                  [class.active]=\"_ampm.index===_selectedAMPM\"\r\n                  [class.disabled]=\"_ampm.disabled\"\r\n                  *ngIf=\"!(HideDisabledOptions&&_ampm.disabled)\"\r\n                  (click)=\"_selectAMPM(ampmListInstance,_ampm.index,_ampm.disabled)\">\r\n                  {{ _ampm.name }}\r\n                </li>\r\n              </ng-template>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>"

/***/ }),

/***/ "./src/.pages/@pages/components/time-picker/timepicker.component.ts":
/*!**************************************************************************!*\
  !*** ./src/.pages/@pages/components/time-picker/timepicker.component.ts ***!
  \**************************************************************************/
/*! exports provided: pgTimePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTimePickerComponent", function() { return pgTimePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/.pages/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _utils_overlay_position_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/overlay-position-map */ "./src/.pages/@pages/utils/overlay-position-map.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
/* harmony import */ var _timepicker_inner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timepicker-inner.component */ "./src/.pages/@pages/components/time-picker/timepicker-inner.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var pgTimePickerComponent = /** @class */ (function (_super) {
    __extends(pgTimePickerComponent, _super);
    function pgTimePickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timePickerDisabled = false;
        _this._dropDownPosition = 'bottom';
        _this._positions = _utils_overlay_position_map__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_DATEPICKER_POSITIONS"].slice();
        return _this;
    }
    pgTimePickerComponent_1 = pgTimePickerComponent;
    Object.defineProperty(pgTimePickerComponent.prototype, "Disabled", {
        get: function () {
            return this._timePickerDisabled;
        },
        set: function (value) {
            this._timePickerDisabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_5__["toBoolean"])(value);
            this._closeCalendar();
        },
        enumerable: true,
        configurable: true
    });
    pgTimePickerComponent.prototype.onPositionChange = function (position) {
        var _position = position.connectionPair.originY === 'bottom' ? 'top' : 'bottom';
        if (this._dropDownPosition !== _position) {
            this._dropDownPosition = _position;
            this._cdr.detectChanges();
        }
    };
    pgTimePickerComponent.prototype._manualChangeInput = function (box) {
        var _tempMoment = moment__WEBPACK_IMPORTED_MODULE_2__(box.value, this._format);
        if (Date.parse(_tempMoment.toDate().toString())) {
            this.Value = new Date((moment__WEBPACK_IMPORTED_MODULE_2__(this._value).hour(_tempMoment.hour()).minute(_tempMoment.minute()).second(_tempMoment.second())).toDate().getTime());
            this.onChange(this._value);
        }
        // this._closeCalendar();
    };
    pgTimePickerComponent.prototype._overHour = function () {
        var _start = this._format.indexOf('HH');
        var _end = _start + 2;
        this._inputTimeInstance.nativeElement.setSelectionRange(_start, _end);
    };
    pgTimePickerComponent.prototype._overMinute = function () {
        var _start = this._format.indexOf('mm');
        var _end = _start + 2;
        this._inputTimeInstance.nativeElement.setSelectionRange(_start, _end);
    };
    pgTimePickerComponent.prototype._overSecond = function () {
        var _start = this._format.indexOf('ss');
        var _end = _start + 2;
        this._inputTimeInstance.nativeElement.setSelectionRange(_start, _end);
    };
    pgTimePickerComponent.prototype._clearValue = function () {
        this.Value = null;
        this._selectedHour = null;
        this._selectedMinute = null;
        this.onChange(this._value);
        this._selectedSecond = null;
    };
    pgTimePickerComponent.prototype._openCalendar = function () {
        var _this = this;
        this._open = true;
        setTimeout(function (_) {
            _this._initPosition();
            _this._inputTimeInstance.nativeElement.setSelectionRange(0, 8);
        });
    };
    pgTimePickerComponent.prototype._closeCalendar = function () {
        if (!this._open) {
            return;
        }
        this._open = false;
    };
    pgTimePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    var pgTimePickerComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trigger'),
        __metadata("design:type", Object)
    ], pgTimePickerComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTimePickerComponent.prototype, "Disabled", null);
    pgTimePickerComponent = pgTimePickerComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-timepicker',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_3__["dropDownAnimation"]
            ],
            template: __webpack_require__(/*! ./timepicker.component.html */ "./src/.pages/@pages/components/time-picker/timepicker.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return pgTimePickerComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./timepicker.scss */ "./src/.pages/@pages/components/time-picker/timepicker.scss")]
        })
    ], pgTimePickerComponent);
    return pgTimePickerComponent;
}(_timepicker_inner_component__WEBPACK_IMPORTED_MODULE_6__["pgTimePickerInnerComponent"]));



/***/ }),

/***/ "./src/.pages/@pages/components/time-picker/timepicker.module.ts":
/*!***********************************************************************!*\
  !*** ./src/.pages/@pages/components/time-picker/timepicker.module.ts ***!
  \***********************************************************************/
/*! exports provided: pgTimePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTimePickerModule", function() { return pgTimePickerModule; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timepicker_inner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timepicker-inner.component */ "./src/.pages/@pages/components/time-picker/timepicker-inner.component.ts");
/* harmony import */ var _timepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timepicker.component */ "./src/.pages/@pages/components/time-picker/timepicker.component.ts");
/* harmony import */ var _util_pg_util_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/pg-util.module */ "./src/.pages/@pages/components/util/pg-util.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pgTimePickerModule = /** @class */ (function () {
    function pgTimePickerModule() {
    }
    pgTimePickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _util_pg_util_module__WEBPACK_IMPORTED_MODULE_5__["pgUtilModule"]],
            declarations: [_timepicker_component__WEBPACK_IMPORTED_MODULE_4__["pgTimePickerComponent"], _timepicker_inner_component__WEBPACK_IMPORTED_MODULE_3__["pgTimePickerInnerComponent"]],
            exports: [_timepicker_component__WEBPACK_IMPORTED_MODULE_4__["pgTimePickerComponent"], _timepicker_inner_component__WEBPACK_IMPORTED_MODULE_3__["pgTimePickerInnerComponent"]]
        })
    ], pgTimePickerModule);
    return pgTimePickerModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/time-picker/timepicker.scss":
/*!******************************************************************!*\
  !*** ./src/.pages/@pages/components/time-picker/timepicker.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL3RpbWUtcGlja2VyL3RpbWVwaWNrZXIuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/@pages/components/upload/upload-btn.component.ts":
/*!*********************************************************************!*\
  !*** ./src/.pages/@pages/components/upload/upload-btn.component.ts ***!
  \*********************************************************************/
/*! exports provided: pgUploadBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgUploadBtnComponent", function() { return pgUploadBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
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
// tslint:disable:no-any ordered-imports



var pgUploadBtnComponent = /** @class */ (function () {
    // endregion
    function pgUploadBtnComponent(http, _el, _renderer, cd) {
        this.http = http;
        this._el = _el;
        this._renderer = _renderer;
        this.cd = cd;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // region: fields
        this.classes = [];
        // region: styles
        this._prefixCls = 'ant-upload';
        this._classList = [];
        if (!http)
            throw new Error("Not found 'HttpClient', You can import 'HttpClientModel' in your root module.");
    }
    // endregion
    pgUploadBtnComponent.prototype.onClick = function () {
        if (this.options.disabled || !this.file)
            return;
        this.file.nativeElement.click();
    };
    pgUploadBtnComponent.prototype.onKeyDown = function (e) {
        if (this.options.disabled)
            return;
        if (e.key === 'Enter') {
            this.onClick();
        }
    };
    pgUploadBtnComponent.prototype.onFileDrop = function (e) {
        var _this = this;
        if (this.options.disabled)
            return;
        if (e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        var files = Array.prototype.slice.call(e.dataTransfer.files).filter(function (file) { return _this.attrAccept(file, _this.options.accept); });
        this.uploadFiles(files);
        e.preventDefault();
    };
    pgUploadBtnComponent.prototype.onChange = function (e) {
        if (this.options.disabled)
            return;
        this.uploadFiles(e.target.files);
        e.target.value = '';
    };
    pgUploadBtnComponent.prototype.attrAccept = function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            var acceptedFilesArray = Array.isArray(acceptedFiles)
                ? acceptedFiles
                : acceptedFiles.split(',');
            var fileName_1 = file.name || '';
            var mimeType_1 = file.type || '';
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some(function (type) {
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return fileName_1.toLowerCase().indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1;
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            });
        }
        return true;
    };
    pgUploadBtnComponent.prototype.uploadFiles = function (fileList) {
        var _this = this;
        var postFiles = Array.prototype.slice.call(fileList);
        this.options.filters.forEach(function (f) { return postFiles = f.fn(postFiles); });
        postFiles.forEach(function (file) {
            file.uid = Math.random().toString(36).substring(2);
            _this.upload(file, postFiles);
        });
    };
    pgUploadBtnComponent.prototype.upload = function (file, fileList) {
        var _this = this;
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        var before = this.options.beforeUpload(file, fileList);
        if (before instanceof rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            before.subscribe(function (processedFile) {
                var processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    _this.post(processedFile);
                }
                else {
                    _this.post(file);
                }
            }, function (err) {
                // tslint:disable-next-line:no-unused-expression
                console && console.log(err);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    };
    pgUploadBtnComponent.prototype.post = function (file) {
        var _this = this;
        if (this.destroy)
            return;
        var opt = this.options;
        var request = opt.customRequest || this.xhr;
        var uid = file.uid;
        var data = opt.data;
        // if (typeof data === 'function') {
        //   data = data(file);
        // }
        this.reqs[uid] = (opt.customRequest || this.xhr).call(this, {
            action: opt.action,
            name: opt.name,
            headers: opt.headers,
            file: file,
            data: data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress ? function (e) {
                opt.onProgress(e, file);
            } : null,
            onSuccess: function (ret, xhr) {
                delete _this.reqs[uid];
                opt.onSuccess(ret, file, xhr);
            },
            onError: function (xhr) {
                delete _this.reqs[uid];
                opt.onError(xhr, file);
            }
        });
        opt.onStart(file);
    };
    pgUploadBtnComponent.prototype.xhr = function (args) {
        var _this = this;
        var formData = new FormData();
        formData.append(args.name, args.file);
        if (args.data) {
            Object.keys(args.data).map(function (key) {
                formData.append(key, args.data[key]);
            });
        }
        if (!args.headers)
            args.headers = {};
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = "XMLHttpRequest";
        }
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](args.headers)
        });
        return this.http.request(req).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                if (event.total > 0) {
                    event.percent = event.loaded / event.total * 100;
                }
                args.onProgress(event);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                args.onSuccess(event.body, event);
            }
        }, function (err) {
            _this.abort(args);
            args.onError(err);
        });
    };
    pgUploadBtnComponent.prototype.abort = function (file) {
        var _this = this;
        if (file) {
            var uid = file;
            if (file && file.uid) {
                uid = file.uid;
            }
            if (this.reqs[uid]) {
                this.reqs[uid].unsubscribe();
                delete this.reqs[uid];
            }
        }
        else {
            Object.keys(this.reqs).forEach(function (uid) {
                if (_this.reqs[uid]) {
                    _this.reqs[uid].unsubscribe();
                }
                delete _this.reqs[uid];
            });
        }
    };
    pgUploadBtnComponent.prototype._setClassMap = function () {
        var _this = this;
        this._classList.forEach(function (cls) { return _this._renderer.removeClass(_this._el.nativeElement, cls); });
        this._classList = [
            this._prefixCls,
            this.options.disabled && this._prefixCls + "-disabled"
        ].concat(this.classes).filter(function (item) { return !!item; });
        this._classList.forEach(function (cls) { return _this._renderer.addClass(_this._el.nativeElement, cls); });
        this.cd.detectChanges();
    };
    pgUploadBtnComponent.prototype.ngOnInit = function () {
        this.inited = true;
        this._setClassMap();
    };
    pgUploadBtnComponent.prototype.ngOnChanges = function (changes) {
        if (this.inited) {
            this._setClassMap();
        }
    };
    pgUploadBtnComponent.prototype.ngOnDestroy = function () {
        this.destroy = true;
        this.abort();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgUploadBtnComponent.prototype, "file", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], pgUploadBtnComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgUploadBtnComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], pgUploadBtnComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], pgUploadBtnComponent.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], pgUploadBtnComponent.prototype, "onFileDrop", null);
    pgUploadBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[pg-upload-btn]',
            template: "\n  <input type=\"file\" #file (change)=\"onChange($event)\"\n    [attr.accept]=\"options.accept\" [multiple]=\"options.multiple\" style=\"display: none;\">\n  <ng-content></ng-content>\n  ",
            host: {
                '[class.upload]': 'true',
                '[attr.tabindex]': '"0"',
                '[attr.role]': '"button"'
            },
            preserveWhitespaces: false
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], pgUploadBtnComponent);
    return pgUploadBtnComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/upload/upload-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/.pages/@pages/components/upload/upload-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: pgUploadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgUploadListComponent", function() { return pgUploadListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:ordered-imports no-any


var pgUploadListComponent = /** @class */ (function () {
    // endregion
    function pgUploadListComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        // endregion
        // region: styles
        this._prefixCls = 'upload-list';
        this._classList = [];
        // endregion
        // region: render
        this.locale = {
            uploading: "Uploading",
            previewFile: "Preview File",
            removeFile: "Remove File",
        };
    }
    pgUploadListComponent.prototype._setClassMap = function () {
        var _this = this;
        this._classList.forEach(function (cls) { return _this._renderer.removeClass(_this._el.nativeElement, cls); });
        this._classList = [
            this._prefixCls,
            this._prefixCls + "-" + this.listType
        ].filter(function (item) { return !!item; });
        this._classList.forEach(function (cls) { return _this._renderer.addClass(_this._el.nativeElement, cls); });
    };
    pgUploadListComponent.prototype.handlePreview = function (file, e) {
        if (!this.onPreview)
            return;
        e.preventDefault();
        return this.onPreview(file);
    };
    pgUploadListComponent.prototype.handleClose = function (file) {
        if (this.onRemove)
            this.onRemove(file);
    };
    pgUploadListComponent.prototype.ngOnInit = function () {
    };
    pgUploadListComponent.prototype.ngOnChanges = function (changes) {
        this._setClassMap();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadListComponent.prototype, "listType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], pgUploadListComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgUploadListComponent.prototype, "icons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadListComponent.prototype, "progressType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgUploadListComponent.prototype, "onPreview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgUploadListComponent.prototype, "onRemove", void 0);
    pgUploadListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-upload-list',
            template: "\n  <div *ngFor=\"let file of items\" class=\"list-group-item upload-{{file.status}}\" @itemState>\n    <ng-template #icon>\n      <ng-container *ngIf=\"listType === 'picture' || listType === 'picture-card'; else defIcon\">\n        <ng-container *ngIf=\"file.status === 'uploading' || (!file.thumbUrl && !file.url); else thumbIcon\">\n          <div *ngIf=\"listType === 'picture-card'\" class=\"upload-list-item-uploading-text\">{{ locale.uploading }}</div>\n          <i *ngIf=\"listType !== 'picture-card'\" class=\"anticon anticon-picture upload-list-item-thumbnail\"></i>\n        </ng-container>\n      </ng-container>\n      <ng-template #defIcon>\n        <pg-progress *ngIf=\"file.status === 'uploading'\" type=\"circle\" indeterminate=\"true\"></pg-progress>\n        <i *ngIf=\"file.status !== 'uploading'\" class=\"fa fa-paperclip p-l-5 p-r-5\"></i>\n      </ng-template>\n      <ng-template #thumbIcon>\n        <a class=\"img-thumbnail\" target=\"_blank\" rel=\"noopener noreferrer\"\n          [href]=\"file.thumbUrl || file.url\"\n          (click)=\"handlePreview(file, $event)\">\n          <img [src]=\"file.thumbUrl || file.url\" [attr.alt]=\"file.name\" />\n        </a>\n      </ng-template>\n    </ng-template>\n    <ng-template #preview>\n      <ng-container *ngIf=\"file.url; else prevText\">\n        <a [href]=\"file.thumbUrl || file.url\" target=\"_blank\" rel=\"noopener noreferrer\"\n          (click)=\"handlePreview(file, $event)\" class=\"list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</a>\n      </ng-container>\n      <ng-template #prevText>\n        <span (click)=\"handlePreview(file, $event)\" class=\"list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</span>\n      </ng-template>\n    </ng-template>\n    <div class=\"list-group-item-inner justify-content-between\">\n    <div class=\"d-flex\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n    </div>\n    <ng-container *ngIf=\"listType === 'picture-card' && file.status !== 'uploading'; else cross\">\n      <span class=\"upload-list-item-actions\">\n        <a *ngIf=\"icons.showPreviewIcon\" [href]=\"file.thumbUrl || file.url\"\n          target=\"_blank\" rel=\"noopener noreferrer\"\n          title=\"{{ locale.previewFile }}\"\n          [ngStyle]=\"!(file.url || file.thumbUrl) && {'opacity': .5, 'pointer-events': 'none'}\"\n          (click)=\"handlePreview(file, $event)\">\n            <i class=\"fa fa-eye\"></i>\n        </a>\n        <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleClose(file)\" class=\"pg pg-close\" title=\"{{ locale.removeFile }}\"></i>\n      </span>\n    </ng-container>\n    <ng-template #cross>\n      <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleClose(file)\" class=\"pg pg-close\" title=\"{{ locale.removeFile }}\"></i>\n    </ng-template>\n    </div>\n    <div *ngIf=\"file.status === 'uploading' && progressType !== 'circle';\" class=\"item-progress\">\n      <div *ngIf=\"listType === 'picture-card';else determineBlock\">\n        <pg-progress type=\"circle\" indeterminate=\"true\"></pg-progress>\n      </div>\n      <ng-template #determineBlock>\n        <pg-progress *ngIf=\"file.percent == 0\" type=\"bar\" indeterminate=\"true\"></pg-progress>\n        <pg-progress *ngIf=\"file.percent != 0\" type=\"bar\" indeterminate=\"false\" value=\"file.percent\"></pg-progress>\n      </ng-template>\n    </div>\n  </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', width: '0', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', width: '*', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', width: '0', opacity: 0 }))
                    ])
                ])
            ],
            host: {
                '[class.list-group]': 'true',
                '[class.upload-list]': 'true'
            },
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], pgUploadListComponent);
    return pgUploadListComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/upload/upload.component.html":
/*!*******************************************************************!*\
  !*** ./src/.pages/@pages/components/upload/upload.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #list>\r\n    <pg-upload-list *ngIf=\"ShowUploadList\"\r\n      [listType]=\"ListType\"\r\n      [items]=\"FileList\"\r\n      [icons]=\"ShowUploadList\"\r\n      [onPreview]=\"Preview\"\r\n      [onRemove]=\"onRemove\"\r\n      [progressType]=\"progressType\"></pg-upload-list>\r\n  </ng-template>\r\n  <ng-template #con><ng-content></ng-content></ng-template>\r\n  <ng-template #btn>\r\n    <div [ngClass]=\"_classList\" [style.display]=\"ShowButton ? '' : 'none'\">\r\n      <div pg-upload-btn #upload [options]=\"_btnOptions\">\r\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-container *ngIf=\"Type === 'drag'; else select\">\r\n    <div [ngClass]=\"_classList\"\r\n        (drop)=\"fileDrop($event)\"\r\n        (dragover)=\"fileDrop($event)\"\r\n        (dragleave)=\"fileDrop($event)\"\r\n        class=\"{{extraClass}}\"\r\n        >\r\n        <div pg-upload-btn #upload [options]=\"_btnOptions\" [classes]=\"['upload-btn']\">\r\n          <div class=\"upload-drag-container\">\r\n            <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n  </ng-container>\r\n  <ng-template #select>\r\n    <ng-container *ngIf=\"ListType === 'picture-card'; else pic\">\r\n      <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n      <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n    </ng-container>\r\n  </ng-template>\r\n  <ng-template #pic>\r\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n  </ng-template>"

/***/ }),

/***/ "./src/.pages/@pages/components/upload/upload.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/@pages/components/upload/upload.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgUploadComponent", function() { return pgUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/convert */ "./src/.pages/@pages/components/util/convert.ts");
/* harmony import */ var _upload_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-btn.component */ "./src/.pages/@pages/components/upload/upload-btn.component.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:ordered-imports no-any






var pgUploadComponent = /** @class */ (function () {
    // endregion
    function pgUploadComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.inited = false;
        // region: fields
        this.Type = 'select';
        this.Limit = 0;
        this.Size = 0;
        this.Filter = [];
        this.FileList = [];
        this.FileListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._disabled = false;
        this.ListType = 'text';
        this._multiple = false;
        this.Name = 'file';
        this._showUploadList = true;
        this._showBtn = true;
        this._withCredentials = false;
        this.Change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadErrorText = "Error Upload";
        this.onStart = function (file) {
            if (!_this.FileList)
                _this.FileList = [];
            var targetItem = _this.fileToObject(file);
            targetItem.status = 'uploading';
            _this.FileList.push(targetItem);
            _this.genThumb(targetItem);
            _this.FileListChange.emit(_this.FileList);
            _this.Change.emit({ file: targetItem, fileList: _this.FileList });
            // fix ie progress
            if (!window.FormData) {
                _this.autoUpdateProgress(targetItem);
            }
            _this.cd.detectChanges();
        };
        this.onProgress = function (e, file) {
            var fileList = _this.FileList;
            var targetItem = _this.getFileItem(file, fileList);
            // removed
            if (!targetItem)
                return;
            targetItem.percent = e.percent;
            _this.Change.emit({
                event: e,
                file: __assign({}, targetItem),
                fileList: _this.FileList,
            });
            _this.cd.detectChanges();
        };
        this.onSuccess = function (res, file, xhr) {
            _this.clearProgressTimer();
            var fileList = _this.FileList;
            var targetItem = _this.getFileItem(file, fileList);
            // removed
            if (!targetItem)
                return;
            targetItem.status = 'complete';
            targetItem.response = res;
            _this.Change.emit({
                file: __assign({}, targetItem),
                fileList: fileList,
            });
            _this.cd.detectChanges();
        };
        this.onError = function (err, file) {
            _this.clearProgressTimer();
            var fileList = _this.FileList;
            var targetItem = _this.getFileItem(file, fileList);
            // removed
            if (!targetItem)
                return;
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem.message = _this.genErr(file);
            _this.Change.emit({
                file: __assign({}, targetItem),
                fileList: fileList,
            });
            _this.cd.detectChanges();
        };
        // endregion
        // region: list
        this.onRemove = function (file) {
            _this.upload.abort(file);
            file.status = 'removed';
            (_this.Remove ? _this.Remove instanceof rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] ? _this.Remove : Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.Remove(file)) : Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(true))
                .pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (res) { return res; }))
                .subscribe(function (res) {
                var removedFileList = _this.removeFileItem(file, _this.FileList);
                if (removedFileList) {
                    _this.FileList = removedFileList;
                    _this.Change.emit({
                        file: file,
                        fileList: removedFileList
                    });
                    _this.FileListChange.emit(_this.FileList);
                    _this.cd.detectChanges();
                }
            });
        };
        // endregion
        // region: styles
        this._prefixCls = 'upload';
        this._classList = [];
    }
    Object.defineProperty(pgUploadComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgUploadComponent.prototype, "Multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgUploadComponent.prototype, "ShowUploadList", {
        get: function () {
            return this._showUploadList;
        },
        set: function (value) {
            this._showUploadList = typeof value === 'boolean' ? Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgUploadComponent.prototype, "ShowButton", {
        get: function () {
            return this._showBtn;
        },
        set: function (value) {
            this._showBtn = Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgUploadComponent.prototype, "WithCredentials", {
        get: function () {
            return this._withCredentials;
        },
        set: function (value) {
            this._withCredentials = Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgUploadComponent.prototype.zipOptions = function () {
        var _this = this;
        if (typeof this.ShowUploadList === 'boolean' && this.ShowUploadList) {
            this.ShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        // filters
        var filters = this.Filter.slice();
        if (this.Multiple && this.Limit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
            filters.push({
                name: 'limit',
                fn: function (fileList) { return fileList.slice(-_this.Limit); }
            });
        }
        if (this.Size > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
            filters.push({
                name: 'size',
                fn: function (fileList) { return fileList.filter(function (w) { return (w.size / 1024) <= _this.Size; }); }
            });
        }
        if (this.FileType && this.FileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
            var types_1 = this.FileType.split(',');
            filters.push({
                name: 'type',
                fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
            });
        }
        this._btnOptions = {
            disabled: this.Disabled,
            accept: this.Accept,
            action: this.Action,
            beforeUpload: this.BeforeUpload,
            customRequest: this.CustomRequest,
            data: this.Data,
            headers: this.Headers,
            name: this.Name,
            multiple: this.Multiple,
            withCredentials: this.WithCredentials,
            filters: filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    };
    // region: upload
    pgUploadComponent.prototype.fileToObject = function (file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            originFileObj: file
        };
    };
    pgUploadComponent.prototype.getFileItem = function (file, fileList) {
        var matchKey = file.uid !== undefined ? 'uid' : 'name';
        return fileList.filter(function (item) { return item[matchKey] === file[matchKey]; })[0];
    };
    pgUploadComponent.prototype.removeFileItem = function (file, fileList) {
        var matchKey = file.uid !== undefined ? 'uid' : 'name';
        var removed = fileList.filter(function (item) { return item[matchKey] !== file[matchKey]; });
        if (removed.length === fileList.length) {
            return null;
        }
        return removed;
    };
    pgUploadComponent.prototype.genErr = function (file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.uploadErrorText;
    };
    pgUploadComponent.prototype.clearProgressTimer = function () {
        clearInterval(this.progressTimer);
    };
    pgUploadComponent.prototype.genPercentAdd = function () {
        var k = 0.1;
        var i = 0.01;
        var end = 0.98;
        return function (s) {
            var start = s;
            if (start >= end) {
                return start;
            }
            start += k;
            k = k - i;
            if (k < 0.001) {
                k = 0.001;
            }
            return start * 100;
        };
    };
    pgUploadComponent.prototype.autoUpdateProgress = function (file) {
        var _this = this;
        var getPercent = this.genPercentAdd();
        var curPercent = 0;
        this.clearProgressTimer();
        this.progressTimer = setInterval(function () {
            curPercent = getPercent(curPercent);
            _this.onProgress({
                percent: curPercent,
            }, file);
        }, 200);
    };
    pgUploadComponent.prototype.genThumb = function (file) {
        if (typeof document === 'undefined' ||
            typeof window === 'undefined' ||
            !window.FileReader || !window.File ||
            !(file.originFileObj instanceof File) ||
            file.thumbUrl !== undefined) {
            return;
        }
        file.thumbUrl = '';
        var reader = new FileReader();
        reader.onloadend = function () { return file.thumbUrl = reader.result; };
        reader.readAsDataURL(file.originFileObj);
    };
    pgUploadComponent.prototype.fileDrop = function (e) {
        if (e.type === this.dragState)
            return;
        this.dragState = e.type;
        this._setClassMap();
    };
    pgUploadComponent.prototype._setClassMap = function () {
        var isDrag = this.Type === 'drag';
        var subCls = [];
        if (this.Type === 'drag') {
            subCls = [
                this.FileList.some(function (file) { return file.status === 'uploading'; }) && this._prefixCls + "-drag-uploading",
                this.dragState === 'dragover' && this._prefixCls + "-drag-hover"
            ];
        }
        else {
            subCls = [
                this._prefixCls + "-select-" + this.ListType
            ];
        }
        this._classList = [
            this._prefixCls,
            this._prefixCls + "-" + this.Type
        ].concat(subCls, [
            this.Disabled && this._prefixCls + "-disabled"
        ]).filter(function (item) { return !!item; });
        this.cd.detectChanges();
    };
    // endregion
    pgUploadComponent.prototype.ngOnInit = function () {
        this.inited = true;
    };
    pgUploadComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.FileList)
            (this.FileList || []).forEach(function (file) { return file.message = _this.genErr(file); });
        this.zipOptions()._setClassMap();
    };
    pgUploadComponent.prototype.ngOnDestroy = function () {
        this.clearProgressTimer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('upload'),
        __metadata("design:type", _upload_btn_component__WEBPACK_IMPORTED_MODULE_5__["pgUploadBtnComponent"])
    ], pgUploadComponent.prototype, "upload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadComponent.prototype, "Type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgUploadComponent.prototype, "Limit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], pgUploadComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadComponent.prototype, "FileType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadComponent.prototype, "Accept", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadComponent.prototype, "Action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadComponent.prototype, "progressType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgUploadComponent.prototype, "BeforeUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgUploadComponent.prototype, "CustomRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgUploadComponent.prototype, "Data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], pgUploadComponent.prototype, "Filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], pgUploadComponent.prototype, "FileList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgUploadComponent.prototype, "FileListChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgUploadComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgUploadComponent.prototype, "Headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadComponent.prototype, "ListType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgUploadComponent.prototype, "extraClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgUploadComponent.prototype, "Multiple", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgUploadComponent.prototype, "Name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], pgUploadComponent.prototype, "ShowUploadList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgUploadComponent.prototype, "ShowButton", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgUploadComponent.prototype, "WithCredentials", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgUploadComponent.prototype, "Remove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], pgUploadComponent.prototype, "Preview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgUploadComponent.prototype, "Change", void 0);
    pgUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/.pages/@pages/components/upload/upload.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./upload.scss */ "./src/.pages/@pages/components/upload/upload.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], pgUploadComponent);
    return pgUploadComponent;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/upload/upload.module.ts":
/*!**************************************************************!*\
  !*** ./src/.pages/@pages/components/upload/upload.module.ts ***!
  \**************************************************************/
/*! exports provided: pgUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgUploadModule", function() { return pgUploadModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _progress_progress_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../progress/progress.module */ "./src/.pages/@pages/components/progress/progress.module.ts");
/* harmony import */ var _upload_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-btn.component */ "./src/.pages/@pages/components/upload/upload-btn.component.ts");
/* harmony import */ var _upload_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-list.component */ "./src/.pages/@pages/components/upload/upload-list.component.ts");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload.component */ "./src/.pages/@pages/components/upload/upload.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_interceptors_token_interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/interceptors/token.interceptors */ "./src/shared/interceptors/token.interceptors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var pgUploadModule = /** @class */ (function () {
    function pgUploadModule() {
    }
    pgUploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], _progress_progress_module__WEBPACK_IMPORTED_MODULE_4__["ProgressModule"]],
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_7__["pgUploadComponent"], _upload_btn_component__WEBPACK_IMPORTED_MODULE_5__["pgUploadBtnComponent"], _upload_list_component__WEBPACK_IMPORTED_MODULE_6__["pgUploadListComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_7__["pgUploadComponent"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_token_interceptors__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptors"], multi: true }
            ]
        })
    ], pgUploadModule);
    return pgUploadModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/upload/upload.scss":
/*!*********************************************************!*\
  !*** ./src/.pages/@pages/components/upload/upload.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL0BwYWdlcy9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/@pages/components/util/mesureScrollBar.ts":
/*!**************************************************************!*\
  !*** ./src/.pages/@pages/components/util/mesureScrollBar.ts ***!
  \**************************************************************/
/*! exports provided: measureScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
var scrollbarWidth;
// Measure scrollbar width for padding body during modal show/hide
var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px',
    overflow: 'scroll',
};
function measureScrollbar() {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    if (scrollbarWidth) {
        return scrollbarWidth;
    }
    var scrollDiv = document.createElement('div');
    for (var scrollProp in scrollbarMeasure) {
        if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
            scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
        }
    }
    document.body.appendChild(scrollDiv);
    var width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    scrollbarWidth = width;
    return scrollbarWidth;
}


/***/ }),

/***/ "./src/.pages/@pages/components/util/pg-date.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/.pages/@pages/components/util/pg-date.pipe.ts ***!
  \***********************************************************/
/*! exports provided: pgDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgDatePipe", function() { return pgDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var pgDatePipe = /** @class */ (function () {
    function pgDatePipe() {
    }
    pgDatePipe.prototype.transform = function (value, formatString) {
        if (moment__WEBPACK_IMPORTED_MODULE_1__(value).isValid()) {
            return moment__WEBPACK_IMPORTED_MODULE_1__(value).format(formatString);
        }
        else {
            return '';
        }
    };
    pgDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'pgDate' })
    ], pgDatePipe);
    return pgDatePipe;
}());



/***/ }),

/***/ "./src/.pages/@pages/components/util/pg-util.module.ts":
/*!*************************************************************!*\
  !*** ./src/.pages/@pages/components/util/pg-util.module.ts ***!
  \*************************************************************/
/*! exports provided: pgUtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgUtilModule", function() { return pgUtilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pg_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pg-date.pipe */ "./src/.pages/@pages/components/util/pg-date.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var pgUtilModule = /** @class */ (function () {
    function pgUtilModule() {
    }
    pgUtilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_pg_date_pipe__WEBPACK_IMPORTED_MODULE_1__["pgDatePipe"]],
            exports: [_pg_date_pipe__WEBPACK_IMPORTED_MODULE_1__["pgDatePipe"]]
        })
    ], pgUtilModule);
    return pgUtilModule;
}());



/***/ }),

/***/ "./src/.pages/@pages/utils/overlay-position-map.ts":
/*!*********************************************************!*\
  !*** ./src/.pages/@pages/utils/overlay-position-map.ts ***!
  \*********************************************************/
/*! exports provided: POSITION_MAP, DEFAULT_4_POSITIONS, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_DATEPICKER_POSITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITION_MAP", function() { return POSITION_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_4_POSITIONS", function() { return DEFAULT_4_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DROPDOWN_POSITIONS", function() { return DEFAULT_DROPDOWN_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DATEPICKER_POSITIONS", function() { return DEFAULT_DATEPICKER_POSITIONS; });
var POSITION_MAP = {
    'top': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topCenter': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topLeft': {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    'topRight': {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    'right': {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
    },
    'rightTop': {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
    },
    'rightBottom': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
    },
    'bottom': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomCenter': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomLeft': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
    },
    'bottomRight': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
    },
    'left': {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
    },
    'leftTop': {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
    },
    'leftBottom': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
    },
};
// TODO: The whole logic does not make sense here, _objectValues just returns a copy of original array
var DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left]);
var DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP.bottomLeft, POSITION_MAP.topLeft]);
var DEFAULT_DATEPICKER_POSITIONS = [
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
    },
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
    }
];
function arrayMap(array, iteratee) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
function baseValues(object, props) {
    return arrayMap(props, function (key) {
        return object[key];
    });
}
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}


/***/ }),

/***/ "./src/.pages/forms/form-elements/form-elements.component.html":
/*!*********************************************************************!*\
  !*** ./src/.pages/forms/form-elements/form-elements.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header separator \">\r\n          <h5>Form - 1/3</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5>\r\n            Traditional Standard Style\r\n          </h5>\r\n          <form role=\"form\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Your name</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Password</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"password\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Email</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Placeholder</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Disabled</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header separator\">\r\n          <h5>Form - 2/3</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5>\r\n            Traditional Standard Style\r\n          </h5>\r\n          <form role=\"form\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Your name</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Password</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"password\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Email</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Placeholder</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Disabled</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header separator\">\r\n          <h5>Form - 3/3</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5>\r\n            Traditional Standard Style\r\n          </h5>\r\n          <form role=\"form\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Your name</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Password</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"password\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Email</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Placeholder</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Disabled</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-6\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header separator \">\r\n          <h5>Form - 1/2</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5>\r\n            Traditional Standard Style\r\n          </h5>\r\n          <form role=\"form\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Your name</label>\r\n                <span class=\"help\">e.g. \"Mona Lisa Portrait\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Password</label>\r\n                <span class=\"help\">e.g. \"Mona Lisa Portrait\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"password\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Email</label>\r\n                <span class=\"help\">e.g. \"some@example.com\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Placeholder</label>\r\n                <span class=\"help\">e.g. \"some@example.com\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Disabled</label>\r\n                <span class=\"help\">e.g. \"some@example.com\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header separator\">\r\n          <h5>Form - 2/2</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5>\r\n            Traditional Standard Style\r\n          </h5>\r\n          <form role=\"form\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Your name</label>\r\n                <span class=\"help\">e.g. \"Mona Lisa Portrait\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Password</label>\r\n                <span class=\"help\">e.g. \"Mona Lisa Portrait\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"password\" class=\"form-control\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Email</label>\r\n                <span class=\"help\">e.g. \"some@example.com\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Placeholder</label>\r\n                <span class=\"help\">e.g. \"some@example.com\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                <label class=\"m-b-0\">Disabled</label>\r\n                <span class=\"help\">e.g. \"some@example.com\"</span>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-12\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header separator \">\r\n          <h5>Form - 1/1</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5>\r\n            Traditional Standard Style\r\n          </h5>\r\n          <form role=\"form\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-4 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Your name</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-4 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Password</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"password\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-4 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Email</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-4 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Placeholder</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-4 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Disabled</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n              </div>\r\n              <div class=\"form-group col-sm-4 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Disabled</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n              </div>\r\n            </div>\r\n            <hr />\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Your name</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Password</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"password\" class=\"form-control\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Email</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Placeholder</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"ex: some@example.com\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Disabled</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n              </div>\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Disabled</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n              </div>\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Disabled</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n              </div>\r\n              <div class=\"form-group col-sm-3 row\">\r\n                <div class=\"col-sm-3  d-flex align-items-start flex-column\">\r\n                  <label class=\"m-b-0\">Disabled</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"email\" class=\"form-control\" value=\"You can put anything here\" disabled></div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n  </div>\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header \">\r\n          <div class=\"card-title\">Form Options\r\n          </div>\r\n          <div class=\"tools\">\r\n            <a class=\"collapse\" href=\"javascript:;\"></a>\r\n            <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n            <a class=\"reload\" href=\"javascript:;\"></a>\r\n            <a class=\"remove\" href=\"javascript:;\"></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5>Form\r\n            <span class=\"semi-bold\">Controls</span>\r\n          </h5>\r\n          <p>Adding on top of existing browser controls, Bootstrap includes other useful form components. Add text or\r\n            buttons before or after any text-based input. Do note that select elements are not supported here.</p>\r\n          <br>\r\n          <div class=\"input-group transparent\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text transparent\"><i class=\"fa fa-instagram\"></i>\r\n              </span>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Username\" class=\"form-control\">\r\n          </div>\r\n          <br>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text primary\"><i class=\"fa fa-align-justify\"></i>\r\n              </span>\r\n            </div>\r\n            <input type=\"text\" placeholder=\"Username\" class=\"form-control\">\r\n          </div>\r\n          <br>\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text primary\"><i class=\"fa fa-align-justify\"></i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header \">\r\n          <div class=\"card-title\">Size options\r\n          </div>\r\n          <div class=\"tools\">\r\n            <a class=\"collapse\" href=\"javascript:;\"></a>\r\n            <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n            <a class=\"reload\" href=\"javascript:;\"></a>\r\n            <a class=\"remove\" href=\"javascript:;\"></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-md-12\">\r\n              <h5>Standard control sizes\r\n              </h5>\r\n              <form role=\"form\">\r\n                <div class=\"form-group m-b-10\" pgFormGroupDefault>\r\n                  <input type=\"text\" placeholder=\".input-lg\" class=\"form-control input-lg\">\r\n                </div>\r\n                <div class=\"form-group m-b-10\" pgFormGroupDefault>\r\n                  <input type=\"text\" placeholder=\"Default input\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group m-b-10\" pgFormGroupDefault>\r\n                  <input type=\"text\" placeholder=\".input-sm\" class=\"form-control input-sm\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n  </div>\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">Checkbox controls\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a class=\"collapse\" href=\"javascript:;\"></a>\r\n        <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n        <a class=\"reload\" href=\"javascript:;\"></a>\r\n        <a class=\"remove\" href=\"javascript:;\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <h5>Color\r\n            <span class=\"semi-bold\">Options</span>\r\n          </h5>\r\n          <p>Our very own image-less pure CSS and retina compatible check box. These check boxes are customized and\r\n            aviable in all boostrap color classes</p>\r\n          <br>\r\n          <div class=\"checkbox \">\r\n            <input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\r\n            <label for=\"checkbox1\">Keep Me Signed in</label>\r\n          </div>\r\n          <div class=\"checkbox check-success  \">\r\n            <input type=\"checkbox\" checked=\"checked\" value=\"1\" id=\"checkbox2\">\r\n            <label for=\"checkbox2\">I agree</label>\r\n          </div>\r\n          <div class=\"checkbox check-primary\">\r\n            <input type=\"checkbox\" value=\"1\" id=\"checkbox3\">\r\n            <label for=\"checkbox3\">Mark</label>\r\n          </div>\r\n          <div class=\"checkbox check-info\">\r\n            <input type=\"checkbox\" value=\"1\" id=\"checkbox4\">\r\n            <label for=\"checkbox4\">Steve Jobs</label>\r\n          </div>\r\n          <div class=\"checkbox check-warning\">\r\n            <input type=\"checkbox\" checked=\"checked\" value=\"1\" id=\"checkbox5\">\r\n            <label for=\"checkbox5\">Action</label>\r\n          </div>\r\n          <div class=\"checkbox check-danger\">\r\n            <input type=\"checkbox\" checked=\"checked\" value=\"1\" id=\"checkbox6\">\r\n            <label for=\"checkbox6\">Mark as read</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>Shape\r\n            <span class=\"semi-bold\">Options</span>\r\n          </h5>\r\n          <p>Bored with traditional boxed shape check boxes? Here is a circle one simply add the class\r\n            <code>.checkbox-circle</code>to change it</p>\r\n          <br>\r\n          <div class=\"checkbox  checkbox-circle\">\r\n            <input type=\"checkbox\" checked=\"checked\" value=\"1\" id=\"checkbox7\">\r\n            <label for=\"checkbox7\">Keep Me Signed in</label>\r\n          </div>\r\n          <div class=\"checkbox check-success checkbox-circle\">\r\n            <input type=\"checkbox\" value=\"1\" id=\"checkbox8\">\r\n            <label for=\"checkbox8\">I agree</label>\r\n          </div>\r\n          <div class=\"checkbox check-primary checkbox-circle\">\r\n            <input type=\"checkbox\" checked=\"checked\" value=\"1\" id=\"checkbox9\">\r\n            <label for=\"checkbox9\">Mark</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>State\r\n            <span class=\"semi-bold\">Options</span>\r\n          </h5>\r\n          <p>These act the same way as normal HTML check boxes. Here are some states that</p>\r\n          <br>\r\n          <div class=\"checkbox check-success\">\r\n            <input type=\"checkbox\" disabled=\"disabled\" value=\"check1\" name=\"check\" id=\"check1\">\r\n            <label for=\"check1\">Checkbox No. 1</label>\r\n            <br>\r\n            <input type=\"checkbox\" disabled=\"disabled\" checked=\"checked\" value=\"check2\" name=\"check\" id=\"check2\">\r\n            <label for=\"check2\">Checkbox No. 2</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">Toggle controls\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a class=\"collapse\" href=\"javascript:;\"></a>\r\n        <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n        <a class=\"reload\" href=\"javascript:;\"></a>\r\n        <a class=\"remove\" href=\"javascript:;\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <h5>Color\r\n            <span class=\"semi-bold\">Options</span>\r\n          </h5>\r\n          <p>Pure CSS radio button with a cool animation. These are available in all primary colors in bootstrap\r\n          </p>\r\n          <br>\r\n          <div class=\"radio radio-success\">\r\n            <input type=\"radio\" value=\"yes\" name=\"optionyes\" id=\"yes\">\r\n            <label for=\"yes\">Agree</label>\r\n            <input type=\"radio\" checked=\"checked\" value=\"no\" name=\"optionyes\" id=\"no\">\r\n            <label for=\"no\">Disagree</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>State\r\n            <span class=\"semi-bold\">Options</span>\r\n          </h5>\r\n          <p>Use of different color opacity helps to destigues between different states such as disable\r\n          </p>\r\n          <br>\r\n          <div class=\"radio radio-primary\">\r\n            <input type=\"radio\" disabled=\"disabled\" value=\"Disabled\" name=\"Disabled\" id=\"Disabled\">\r\n            <label for=\"Disabled\">Disabled</label>\r\n            <input type=\"radio\" disabled=\"disabled\" checked=\"checked\" value=\"ADisabled\" name=\"ADisabled\" id=\"ADisabled\">\r\n            <label for=\"ADisabled\">Disabled</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>Slide\r\n            <span class=\"semi-bold\">Toggle</span>\r\n          </h5>\r\n          <p>A cool iOS slide toggle. These are cutomize for all boostrap colors</p>\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <pg-switch [ngModel]=\"true\" [Color]=\"'success'\" [Disabled]=\"true\" [ngModel]=\"true\"></pg-switch>\r\n              <pg-switch [ngModel]=\"false\" [Color]=\"'success'\"></pg-switch>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <pg-switch [ngModel]=\"true\" [Size]=\"'small'\" [Color]=\"'primary'\" [ngModel]=\"true\"></pg-switch>\r\n              <pg-switch [Color]=\"'primary'\"></pg-switch>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">Dropdown Controls\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a href=\"javascript:;\" class=\"collapse\"></a>\r\n        <a href=\"#grid-config\" data-toggle=\"modal\" class=\"config\"></a>\r\n        <a href=\"javascript:;\" class=\"reload\"></a>\r\n        <a href=\"javascript:;\" class=\"remove\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <p>We've simplified our dropdown buttons by getting rid of the dedicated dropdown associated with them, this\r\n            looks more clean and also available in all different colors</p>\r\n          <br>\r\n          <pg-select-fx style=\"width: 110px\" [(ngModel)]=\"selectedOptionCS\" [PlaceHolder]=\"'Select'\" AllowClear>\r\n            <pg-selectfx-option *ngFor=\"let option of csoptions\" [Label]=\"option.label\" [Value]=\"option\"\r\n              [Disabled]=\"option.disabled\">\r\n            </pg-selectfx-option>\r\n          </pg-select-fx>\r\n          <br>\r\n          <br>\r\n          <p class=\"small\">The button will be automatically sized according to the visible content size. Make sure there\r\n            is enough room for the hidden content to show</p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h5>\r\n            Simple dropdowns\r\n          </h5>\r\n          <p>These are highly customizable dropdowns that come with search option for use to search</p>\r\n          <div class=\"form-group \">\r\n            <pg-select style=\"width: 100%;\" [(ngModel)]=\"selectedOption\" [PlaceHolder]=\"'Select Option'\" AllowClear\r\n              ShowSearch>\r\n              <pg-option *ngFor=\"let option of options\" [Label]=\"option.label\" [Value]=\"option\"\r\n                [Disabled]=\"option.disabled\">\r\n              </pg-option>\r\n            </pg-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h5>\r\n            Multi select\r\n          </h5>\r\n          <p>Fancy multiselect option box. Customized for the anypreference</p>\r\n          <br>\r\n          <div class=\"form-group \">\r\n            <pg-select style=\"width: 100%;\" [Mode]=\"'multiple'\" [PlaceHolder]=\"'Select'\"\r\n              [(ngModel)]=\"selectedMultipleOption\" [NotFoundContent]=\"'Not found'\">\r\n              <pg-option *ngFor=\"let option of searchOptions\" [Label]=\"option.label\" [Value]=\"option.value\"\r\n                [Disabled]=\"option.disabled\">\r\n              </pg-option>\r\n            </pg-select>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">Typehead\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a href=\"javascript:;\" class=\"collapse\"></a>\r\n        <a href=\"#grid-config\" data-toggle=\"modal\" class=\"config\"></a>\r\n        <a href=\"javascript:;\" class=\"reload\"></a>\r\n        <a href=\"javascript:;\" class=\"remove\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <p>You the following input will give suggestion as you type, you can fetch your list from an external data\r\n            source.</p>\r\n          <br>\r\n          <div class=\"form-group typehead\">\r\n            <input placeholder=\"States of USA\" [(ngModel)]=\"selectedState\" [typeahead]=\"states\"\r\n              [typeaheadScrollable]=\"true\" [typeaheadOptionsInScrollableView]=\"5\" class=\"form-control\">\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <p class=\"small\">A useful feature in this typehead is autofill as you type</p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h5>\r\n            Supporting Different Styles\r\n          </h5>\r\n          <p>Supports both attached form layouts and also traditional input text fields</p>\r\n          <div class=\"form-group typehead\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"States of USA\" [(ngModel)]=\"selectedStateTwo\"\r\n              [typeahead]=\"states\" [typeaheadScrollable]=\"true\" [typeaheadOptionsInScrollableView]=\"5\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h5>\r\n            Advance Options\r\n          </h5>\r\n          <p>Want to customize how the data is display, you can do that too with tyephead custom templates</p>\r\n          <br>\r\n          <div class=\"form-group\" id=\"custom-templates\">\r\n            <input class=\"typeahead form-control\" type=\"text\" placeholder=\"Oscar winners for Best Picture\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">Date Controls\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a class=\"collapse\" href=\"javascript:;\"></a>\r\n        <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n        <a class=\"reload\" href=\"javascript:;\"></a>\r\n        <a class=\"remove\" href=\"javascript:;\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <h5>Simple Date\r\n            <span class=\"semi-bold\">Picker</span>\r\n          </h5>\r\n          <p>Date picker is powered by boostrap date picker, this is customized in way that it suites our theme and\r\n            design, Have a look!</p>\r\n          <br>\r\n          <div id=\"datepicker-component\" class=\"input-group date col-md-8 p-l-0\">\r\n            <pg-datepicker ShowTime=\"true\"></pg-datepicker>\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"fa fa-calendar\"></i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>Date\r\n            <span class=\"semi-bold\">Range</span>\r\n          </h5>\r\n          <p>Date range can be set by the same plugin, this is use full when taking two dates at a time\r\n          </p>\r\n          <br>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group date\">\r\n                <pg-datepicker (ngModelChange)=\"_startDate=$event;_startValueChange()\" Placeholder=\"Start Date\"\r\n                  [ngModel]=\"_startDate\" [DisabledDate]=\"_disabledStartDate\" [Format]=\"'YYYY-MM-DD'\"></pg-datepicker>\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group date sm-m-t-10\">\r\n                <pg-datepicker (ngModelChange)=\"_endDate=$event;_endValueChange()\" Placeholder=\"End Date\"\r\n                  [ngModel]=\"_endDate\" [DisabledDate]=\"_disabledEndDate\" [Format]=\"'YYYY-MM-DD'\"></pg-datepicker>\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <p>Time Picker</p>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group date\">\r\n                <pg-timepicker [(ngModel)]=\"_date\"></pg-timepicker>\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text transparent\">\r\n                    <i class=\"pg pg-clock\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"input-group date sm-m-t-10\">\r\n                <pg-timepicker [(ngModel)]=\"_date_time\" [Format]=\"'h:mm'\"></pg-timepicker>\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text transparent\">\r\n                    <i class=\"pg pg-clock\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>Advance\r\n            <span class=\"semi-bold\">Settings</span>\r\n          </h5>\r\n          <p>Some advance setting that you can do with this calender, like disabling future or past dates</p>\r\n          <br>\r\n          <div class=\"input-group date col-md-8 p-l-0\">\r\n            <pg-datepicker [(ngModel)]=\"_advance_date\" [DisabledDate]=\"_advance_disabledDate\"></pg-datepicker>\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"fa fa-calendar\"></i>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">Input helpers\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a href=\"javascript:;\" class=\"collapse\"></a>\r\n        <a href=\"#grid-config\" data-toggle=\"modal\" class=\"config\"></a>\r\n        <a href=\"javascript:;\" class=\"reload\"></a>\r\n        <a href=\"javascript:;\" class=\"remove\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <h5>\r\n            Input masks\r\n          </h5>\r\n          <p>These assure the user will never enter invalid phone no, email or anything that has a pattern even without\r\n            validations</p>\r\n          <br>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Date</label>\r\n              <span class=\"help\">e.g. \"25/12/2013\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: mask.date}\" type=\"text\" id=\"date\" class=\"form-control\" guide=\"true\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Telephone</label>\r\n              <span class=\"help\">e.g. \"(324) 234-3243\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: mask.telephone}\" type=\"text\" id=\"phone\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Custom</label>\r\n              <span class=\"help\">e.g. \"23-4324324\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: mask.custom}\" type=\"text\" id=\"tin\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Social Security Number</label>\r\n              <span class=\"help\">e.g. \"432-43-2432\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: mask.ssn}\" type=\"text\" id=\"ssn\" class=\"form-control\"\r\n                placeholder=\"You can put anything here\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <h5>Input autonumeric\r\n          </h5>\r\n          <p>Do you forget small things? here is something that helps to automatically placed forgotten dollar signs,\r\n            decimal places and even comma separates and many more!</p>\r\n          <br>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Decimal place and comma separator</label>\r\n              <span class=\"help\">e.g. \"53,000.00\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" [textMask]=\"{mask: numberMask}\" class=\"autonumeric form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Weird way but works</label>\r\n              <span class=\"help\">e.g. \"45.000,00\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" [textMask]=\"{mask: wierdMask}\" class=\"autonumeric form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Dollar prefix</label>\r\n              <span class=\"help\">e.g. \"$45.50\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" [textMask]=\"{mask: dollarPrefix}\" class=\"autonumeric form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3 d-flex align-items-start flex-column\">\r\n              <label class=\"m-b-0\">Range</label>\r\n              <span class=\"help\">e.g. \"0 - 9,999\"</span>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" [textMask]=\"{mask: range}\" class=\"autonumeric form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">WYSIWYG editors\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a class=\"collapse\" href=\"javascript:;\"></a>\r\n        <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n        <a class=\"reload\" href=\"javascript:;\"></a>\r\n        <a class=\"remove\" href=\"javascript:;\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body no-scroll card-toolbar\">\r\n      <h5>Quill Editor</h5>\r\n      <div class=\"b-a b-grey\">\r\n        <quill-editor [style]=\"{height: '350px'}\" placeholder=\"\"></quill-editor>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header \">\r\n          <div class=\"card-title\">Tag Input\r\n          </div>\r\n          <div class=\"tools\">\r\n            <a class=\"collapse\" href=\"javascript:;\"></a>\r\n            <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n            <a class=\"reload\" href=\"javascript:;\"></a>\r\n            <a class=\"remove\" href=\"javascript:;\"></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p>Do you use tags to organize content on your site? This plugin will turn your boring tag list into a magical\r\n            input that turns each tag into a style-able object with its own delete link.\r\n          </p>\r\n          <br>\r\n          <div class=\"m-b-10\">\r\n            <pg-tag>Tag 1</pg-tag>\r\n            <pg-tag Closable (Close)=\"onClose($event)\">Tag 2</pg-tag>\r\n          </div>\r\n          <br>\r\n          <div class=\"form-group tag-group\">\r\n            <label>Recipient</label>\r\n            <span class=\"help\">e.g. \"john@smith.com\"</span>\r\n            <pg-tag-control [(ngModel)]=\"tags\"></pg-tag-control>\r\n          </div>\r\n          <br>\r\n          <div class=\"form-group tag-group form-group-default required \">\r\n            <label>Tags</label>\r\n            <pg-tag-control [(ngModel)]=\"tags\"></pg-tag-control>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <!-- START card -->\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header \">\r\n          <div class=\"card-title\">\r\n            Drag n' drop uploader\r\n          </div>\r\n          <div class=\"tools\">\r\n            <a class=\"collapse\" href=\"javascript:;\"></a>\r\n            <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n            <a class=\"reload\" href=\"javascript:;\"></a>\r\n            <a class=\"remove\" href=\"javascript:;\"></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body no-scroll no-padding\">\r\n          <pg-upload Type=\"drag\" [Multiple]=\"true\" [Limit]=\"2\" Action=\"https://jsonplaceholder.typicode.com/posts/\"\r\n            (Change)=\"handleChange($event)\" extraClass=\"dropzone\" progressType=\"circle\">\r\n            <div class=\"d-flex flex-column align-items-center\">\r\n              <h4 class=\"semi-bold no-margin\">Drop files to Upload</h4>\r\n              <p>or click here</p>\r\n            </div>\r\n          </pg-upload>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n  </div>\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">File Upload\r\n      </div>\r\n      <div class=\"tools\">\r\n        <a class=\"collapse\" href=\"javascript:;\"></a>\r\n        <a class=\"config\" data-toggle=\"modal\" href=\"#grid-config\"></a>\r\n        <a class=\"reload\" href=\"javascript:;\"></a>\r\n        <a class=\"remove\" href=\"javascript:;\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <h5>Photo Wall\r\n            <span class=\"semi-bold\">Picker</span>\r\n          </h5>\r\n          <p>Gallery like file uploader for images that looks cool! Simply use <code>ListType=\"picture-card\"</code></p>\r\n          <br>\r\n          <pg-upload ListType=\"picture-card\" [(FileList)]=\"fileList\" [ShowButton]=\"fileList.length < 3\"\r\n            [Preview]=\"handlePreview\">\r\n            <div class=\"pic-placeholder\">\r\n              <i class=\"fa fa-cloud-upload p-b-5\" style=\"font-size: 21px;\"></i>\r\n              <div class=\"fs-12\">Upload</div>\r\n            </div>\r\n          </pg-upload>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>Image\r\n            <span class=\"semi-bold\">List</span>\r\n          </h5>\r\n          <p>Have a horizontal list of image uploader as you need, you can limit the type and size of the files you wish\r\n            by using <code>Limit = 2</code> and <code>FileType = \"image/png\"</code>\r\n          </p>\r\n          <br>\r\n\r\n          <pg-upload Action=\"https://jsonplaceholder.typicode.com/posts/\" ListType=\"picture\" [(FileList)]=\"fileList1\">\r\n            <button class=\"btn btn-defalt btn-cons\">\r\n              <i class=\"fa fa-upload m-r-10\"></i><span>Upload</span>\r\n            </button>\r\n          </pg-upload>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <h5>Simple\r\n            <span class=\"semi-bold\">List</span>\r\n          </h5>\r\n          <p>The most common way of upload control. Use any custom button and style you wish</p>\r\n          <br>\r\n          <pg-upload Action=\"https://jsonplaceholder.typicode.com/posts/\" [FileList]=\"fileList2\">\r\n            <button class=\"btn btn-success btn-cons\">\r\n              <i class=\"fa fa-upload m-r-10\"></i><span>Upload</span>\r\n            </button>\r\n          </pg-upload>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>"

/***/ }),

/***/ "./src/.pages/forms/form-elements/form-elements.component.scss":
/*!*********************************************************************!*\
  !*** ./src/.pages/forms/form-elements/form-elements.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2Zvcm1zL2Zvcm0tZWxlbWVudHMvZm9ybS1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/forms/form-elements/form-elements.component.ts":
/*!*******************************************************************!*\
  !*** ./src/.pages/forms/form-elements/form-elements.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsComponent", function() { return FormElementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormElementsComponent = /** @class */ (function () {
    function FormElementsComponent() {
        var _this = this;
        this.options = [
            { value: 'jack', label: 'Jacks' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'disabled', label: 'Disabled', disabled: true }
        ];
        this.csoptions = [
            { value: 'Web-safe', label: 'Web-safe' },
            { value: 'Helvetica', label: 'Helvetica' },
            { value: 'SegeoUI', label: 'SegeoUI' },
        ];
        this.tags = ["Smith", "Jane"];
        this.searchOptions = [
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'tom', label: 'Tom' }
        ];
        this.selectedMultipleOption = ['Tom', 'Jack'];
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
        this._date = null;
        this._date_time = null;
        //Input Examples Masks
        this.mask = {
            date: [/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
            telephone: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            custom: [/[1-9]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
            ssn: [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        };
        this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default()({
            prefix: '$ ',
            suffix: ''
        });
        this.wierdMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default()({
            prefix: '',
            suffix: '',
            thousandsSeparatorSymbol: '.',
            allowDecimal: true,
            decimalSymbol: ','
        });
        this.dollarPrefix = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default()({
            prefix: '$ ',
            suffix: '',
            allowDecimal: true
        });
        this.range = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_1___default()({
            prefix: '',
            suffix: '',
            integerLimit: 4
        });
        this.fileList = [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'http://pages.revox.io/dashboard/3.0.0/html/condensed/assets/img/profiles/avatar_small2x.jpg',
            }];
        this.previewImage = '';
        this.previewVisible = false;
        this.fileList1 = [];
        this.fileList2 = [];
        //Date Range Setup
        this._startDate = null;
        this._endDate = null;
        this.newArray = function (len) {
            var result = [];
            for (var i = 0; i < len; i++) {
                result.push(i);
            }
            return result;
        };
        this._startValueChange = function () {
            if (_this._startDate > _this._endDate) {
                _this._endDate = null;
            }
        };
        this._endValueChange = function () {
            if (_this._startDate > _this._endDate) {
                _this._startDate = null;
            }
        };
        this._disabledStartDate = function (startValue) {
            if (!startValue || !_this._endDate) {
                return false;
            }
            return startValue.getTime() >= _this._endDate.getTime();
        };
        this._disabledEndDate = function (endValue) {
            if (!endValue || !_this._startDate) {
                return false;
            }
            return endValue.getTime() <= _this._startDate.getTime();
        };
        //END Date Range
        //Advance Date Option - Disable Dates
        //All Future Dates
        this._advance_date = null;
    }
    FormElementsComponent.prototype.ngOnInit = function () {
    };
    //Fileupload HandleChange
    FormElementsComponent.prototype.handleChange = function (event) {
    };
    //Tag OnClose CallBack
    FormElementsComponent.prototype.onClose = function (event) {
        console.log(event);
    };
    Object.defineProperty(FormElementsComponent.prototype, "_isSameDay", {
        get: function () {
            return this._startDate && this._endDate && moment__WEBPACK_IMPORTED_MODULE_2__(this._startDate).isSame(this._endDate, 'day');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormElementsComponent.prototype, "_endTime", {
        get: function () {
            var _this = this;
            return {
                nzHideDisabledOptions: true,
                nzDisabledHours: function () {
                    return _this._isSameDay ? _this.newArray(_this._startDate.getHours()) : [];
                },
                nzDisabledMinutes: function (h) {
                    if (_this._isSameDay && h === _this._startDate.getHours()) {
                        return _this.newArray(_this._startDate.getMinutes());
                    }
                    return [];
                },
                nzDisabledSeconds: function (h, m) {
                    if (_this._isSameDay && h === _this._startDate.getHours() && m === _this._startDate.getMinutes()) {
                        return _this.newArray(_this._startDate.getSeconds());
                    }
                    return [];
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    FormElementsComponent.prototype._advance_disabledDate = function (current) {
        //Future
        return current && current.getTime() < Date.now();
    };
    FormElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-elements',
            template: __webpack_require__(/*! ./form-elements.component.html */ "./src/.pages/forms/form-elements/form-elements.component.html"),
            styles: [__webpack_require__(/*! ./form-elements.component.scss */ "./src/.pages/forms/form-elements/form-elements.component.scss")]
        })
    ], FormElementsComponent);
    return FormElementsComponent;
}());



/***/ }),

/***/ "./src/.pages/forms/form-layouts/form-layouts.component.html":
/*!*******************************************************************!*\
  !*** ./src/.pages/forms/form-layouts/form-layouts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START BREADCRUMB -->\r\n  <pg-breadcrumb>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\">Form layouts</li>\r\n    </ol>\r\n  </pg-breadcrumb>\r\n\r\n  <!-- END BREADCRUMB --> \r\n  <div class=\"row\">\r\n    <div class=\"col-xl-7 col-lg-6 \">\r\n      <!-- START card -->\r\n      <div class=\"card card-transparent\">\r\n        <div class=\"card-body\">\r\n          <form id=\"form-personal\" role=\"form\" autocomplete=\"off\" #basicForm=\"ngForm\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-md-6\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default required\" [class.has-error]=\"basicFormfname.invalid && (basicFormfname.dirty || basicFormfname.touched)\" >\r\n                  <label>First name</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"fName\" name=\"fName\" [(ngModel)]=\"fName\"  #basicFormfname=\"ngModel\" required >\r\n                </div>\r\n                <div *ngIf=\"basicFormfname.invalid && (basicFormfname.dirty || basicFormfname.touched)\" >\r\n                  <label  *ngIf=\"basicFormfname.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"basicFormLName.invalid && (basicFormLName.dirty || basicFormLName.touched)\">\r\n                  <label>Last name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"lName\"  #basicFormLName=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"basicFormLName.invalid && (basicFormLName.dirty || basicFormLName.touched)\" >\r\n                  <label  *ngIf=\"basicFormLName.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default input-group\" [class.has-error]=\"basicFormUsername.invalid && (basicFormUsername.dirty || basicFormUsername.touched)\">\r\n                  <div class=\"form-input-group\">\r\n                    <label>Pages username</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"yourname.pages.com (this can be changed later)\" [(ngModel)]=\"username\"  #basicFormUsername=\"ngModel\" required>\r\n                  </div>\r\n                  <div class=\"input-group-append \">\r\n                      <span class=\"input-group-text\">.pages.com\r\n                      </span>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"basicFormUsername.invalid && (basicFormUsername.dirty || basicFormUsername.touched)\" >\r\n                  <label  *ngIf=\"basicFormUsername.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"basicFormPassword.invalid && (basicFormPassword.dirty || basicFormPassword.touched)\">\r\n                  <label>Password</label>\r\n                  <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Minimum of 4 characters.\" [(ngModel)]=\"password\"  #basicFormPassword=\"ngModel\" required minlength=\"4\" > \r\n                </div>\r\n                <div *ngIf=\"basicFormPassword.invalid && (basicFormPassword.dirty || basicFormPassword.touched)\" >\r\n                  <label  *ngIf=\"basicFormPassword.errors.required\" class=\"error\" >This field is required.</label>\r\n                  <label  *ngIf=\"basicFormPassword.errors.minlength\" class=\"error\" >Minimum Length is 4</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"basicFormEmail.invalid && (basicFormEmail.dirty || basicFormEmail.touched)\">\r\n                  <label>Email</label>\r\n                  <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"We’ll send your login details to this address\" [(ngModel)]=\"email\"  #basicFormEmail=\"ngModel\" required > \r\n                </div>\r\n                <div *ngIf=\"basicFormEmail.invalid && (basicFormEmail.dirty || basicFormEmail.touched)\" >\r\n                  <label  *ngIf=\"basicFormEmail.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <p class=\"pull-left\">\r\n              I agree to the <a href=\"javascript:void(0)\">Pages Terms</a> and <a href=\"javascript:void(0)\">Privacy</a>.\r\n            </p>\r\n            <p class=\"pull-right\">\r\n              <a href=\"javascript:void(0)\">Help? Contact Support</a>\r\n            </p>\r\n            <div class=\"clearfix\"></div>\r\n            <button class=\"btn btn-primary\" type=\"submit\" [class.disabled]=\"basicForm.invalid\">Create a new account</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n    <div class=\"col-xl-5 col-lg-6\">\r\n      <!-- START card -->\r\n      <div class=\"card card-transparent\">\r\n        <div class=\"card-header \">\r\n          <div class=\"card-title\">Validation\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3>Showcase and guide users with a <br>\r\n            better User Interface &amp; Experience.</h3>\r\n          <p>Forms are one of the most important components\r\n            <br> when it comes to a dashboard. Recognizing that fact, users are\r\n            <br>able work in a maximum content width.</p>\r\n          <br>\r\n          <p class=\"small hint-text m-t-5\">VIA senior product manager\r\n            <br> for UI/UX at REVOX</p>\r\n          <button class=\"btn btn-primary btn-cons\">More</button>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n  </div>\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container extraClass=\"bg-white\" extraHorizontalClass=\"bg-white\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <!-- START card -->\r\n      <div class=\"card card-transparent\">\r\n        <div class=\"card-header \">\r\n          <div class=\"card-title\">Attached form layouts\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3>Attach your Forms to Organize\r\n    &amp; Create Contemporary feels</h3>\r\n          <p>Despite the UI, We thought of the User experience, With attached From Layouts you can simply categories Important fields and prioritize them.</p>\r\n          <br>\r\n          <div>\r\n            <div class=\"profile-img-wrapper m-t-5 inline\">\r\n              <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\r\n              <div class=\"chat-status available\">\r\n              </div>\r\n            </div>\r\n            <div class=\"inline m-l-10\">\r\n              <p class=\"small hint-text\">VIA senior product manage\r\n                <br> for UI/UX at REVOX</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <!-- START card -->\r\n      <div class=\"card card-transparent\">\r\n        <div class=\"card-body\">\r\n          <form id=\"form-project\" role=\"form\" autocomplete=\"off\" [formGroup]=\"attachedForm\" (ngSubmit)=\"_submitForm()\">\r\n            <p>Basic Information</p>\r\n            <div class=\"form-group-attached\">\r\n              <div pgFormGroupDefault class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('projectName').invalid && (getFormControl('projectName').dirty || getFormControl('projectName').touched)\">\r\n                <label>Project name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"projectName\" formControlName=\"projectName\">\r\n                <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('projectName').invalid && (getFormControl('projectName').dirty || getFormControl('projectName').touched)\">\r\n                  This field is required.\r\n                </div>\r\n              </div>\r\n              <div class=\"row clearfix\">\r\n                <div class=\"col-md-6\">\r\n                  <div pgFormGroupDefault class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('firstName').invalid && (getFormControl('firstName').dirty || getFormControl('firstName').touched)\">\r\n                    <label>First name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"firstName\" formControlName=\"firstName\">\r\n                    <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('firstName').invalid && (getFormControl('firstName').dirty || getFormControl('firstName').touched)\">\r\n                        This field is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div pgFormGroupDefault class=\"form-group form-group-default\">\r\n                    <label>Last name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"lastName\" formControlName=\"lastName\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <p class=\"m-t-10\">Advanced Information</p>\r\n            <div class=\"form-group-attached\">\r\n              <div pgFormGroupDefault class=\"form-group form-group-default\">\r\n                <label>Investor <i class=\"fa fa-info text-complete m-l-5\"></i>\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" name=\"investor\" formControlName=\"investor\">\r\n              </div>\r\n              <div class=\"row clearfix\">\r\n                <div class=\"col-md-6\">\r\n                  <div pgFormGroupDefault class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('startDate').invalid && (getFormControl('startDate').dirty || getFormControl('startDate').touched)\">\r\n                    <label>Starting date</label>\r\n                    <pg-datepicker formControlName=\"startDate\"></pg-datepicker>\r\n                    <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('startDate').invalid && (getFormControl('startDate').dirty || getFormControl('startDate').touched)\">\r\n                        This field is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group form-group-default\">\r\n                    <label>Deadline</label>\r\n                    <pg-datepicker formControlName=\"endDate\"></pg-datepicker>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div pgFormGroupDefault class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('url').invalid && (getFormControl('url').dirty || getFormControl('url').touched)\">\r\n                    <label>Website</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"url\" formControlName=\"url\">\r\n                    <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('url').invalid && (getFormControl('url').dirty || getFormControl('url').touched)\">\r\n                        This field is required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group form-group-default input-group\">\r\n                    <div class=\"form-input-group\">\r\n                      <label class=\"inline\">Availability</label>\r\n                    </div>\r\n                    <div class=\"input-group-append  bg-transparent m-r-10 align-items-center\">\r\n                        <pg-switch [Size]=\"'small'\" [Color]=\"'primary'\"></pg-switch>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div pgFormGroupDefault class=\"form-group form-group-default input-group\">\r\n                    <div class=\"form-input-group\">\r\n                      <label>Budget</label>\r\n                      <input type=\"text\" class=\"form-control usd\" formControlName=\"budget\">\r\n                    </div>\r\n                    <div class=\"input-group-append \">\r\n                        <span class=\"input-group-text\">USD\r\n                        </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div pgFormGroupDefault class=\"form-group form-group-default input-group\">\r\n                    <div class=\"form-input-group\">\r\n                      <label>Profit</label>\r\n                      <input type=\"text\" class=\"form-control usd\" formControlName=\"profit\"> \r\n                    </div>\r\n                    <div class=\"input-group-append \">\r\n                        <span class=\"input-group-text\">USD\r\n                        </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div pgFormGroupDefault class=\"form-group form-group-default input-group\">\r\n                    <div class=\"form-input-group\">\r\n                      <label>Revenue</label>\r\n                      <input type=\"text\" class=\"form-control usd\" formControlName=\"revenue\">\r\n                    </div>\r\n                    <div class=\"input-group-append \">\r\n                        <span class=\"input-group-text\">USD\r\n                        </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"pull-left\">\r\n              <div class=\"checkbox check-success  \">\r\n                <input type=\"checkbox\" checked=\"checked\" value=\"1\" id=\"checkbox-agree\">\r\n                <label for=\"checkbox-agree\">I hereby certify that the information above is true and accurate\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <button class=\"btn btn-success\" type=\"submit\" >Submit</button>&nbsp;\r\n            <button class=\"btn btn-default\"><i class=\"pg pg-close\"></i> Clear</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- END card -->\r\n    </div>\r\n  </div>\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->\r\n<!-- START CONTAINER FLUID -->\r\n<pg-container>\r\n  <!-- START card -->\r\n  <div class=\"card card-transparent\">\r\n    <div class=\"card-header \">\r\n      <div class=\"card-title\">Separated form layouts\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n          <h3>Simple but not simpler, Seperate your forms and create diversified info graphic</h3>\r\n          <p>Want it to be more Descriptive and User Friendly, We Made it possible, Use Seperated Form Layouts Structure to Presentate your Form Fields.\r\n          </p>\r\n          <br>\r\n\r\n          <p class=\"small hint-text\">To Add A full Width Portlet - Class - card-full This can be used in any\r\n            <br> widget or situation, Highly Recomended on Forms and tables</p>\r\n          <form id=\"horizontalForm\" class=\"form-horizontal\" role=\"form\" autocomplete=\"off\" #horizontalForm=\"ngForm\">\r\n            <div class=\"form-group row\" [class.has-error]=\"HorizontalFormfname.invalid && (HorizontalFormfname.dirty || HorizontalFormfname.touched)\">\r\n              <label for=\"fname\" class=\"col-md-3 control-label\">Name</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"fname2\" placeholder=\"Full name\" name=\"fname2\" [(ngModel)]=\"HorizontalfName\"  #HorizontalFormfname=\"ngModel\" required>\r\n                <div *ngIf=\"HorizontalFormfname.invalid && (HorizontalFormfname.dirty || HorizontalFormfname.touched)\" >\r\n                  <label  *ngIf=\"HorizontalFormfname.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 control-label\">Your gender</label>\r\n              <div class=\"col-md-9\">\r\n                <div class=\"radio radio-success\">\r\n                  <input type=\"radio\" value=\"male\" name=\"optionyes\" id=\"male\">\r\n                  <label for=\"male\">Male</label>\r\n                  <input type=\"radio\" checked=\"checked\" value=\"female\" name=\"optionyes\" id=\"female\">\r\n                  <label for=\"female\">Female</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" [class.has-error]=\"HorizontalFormWork.invalid && (HorizontalFormWork.dirty || HorizontalFormWork.touched)\">\r\n              <label class=\"col-md-3 control-label\">Work</label>\r\n              <div class=\"col-md-9\">\r\n                <p>Have you Worked at page Inc. before, Or joined the Pages Supirior Club?</p>\r\n                <p class=\"hint-text small\">If yes State which Place, if yes note date and Job CODE / Membership Number</p>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-5\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"work\" [(ngModel)]=\"HorizontalWork\"  #HorizontalFormWork=\"ngModel\" required>\r\n                    <div *ngIf=\"HorizontalFormWork.invalid && (HorizontalFormWork.dirty || HorizontalFormWork.touched)\" >\r\n                      <label  *ngIf=\"HorizontalFormWork.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 sm-m-t-10\">\r\n                    <input type=\"text\" placeholder=\"Code/Number\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\" [class.has-error]=\"HorizontalFormPostion.invalid && (HorizontalFormPostion.dirty || HorizontalFormPostion.touched)\">\r\n              <label for=\"position\" class=\"col-md-3 control-label\">Position applying for</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" class=\"form-control\" id=\"position\" name=\"position\" placeholder=\"Designation\" [(ngModel)]=\"HorizontalPosition\"  #HorizontalFormPostion=\"ngModel\" required>\r\n                <div *ngIf=\"HorizontalFormPostion.invalid && (HorizontalFormPostion.dirty || HorizontalFormPostion.touched)\" >\r\n                  <label  *ngIf=\"HorizontalFormPostion.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"name\" class=\"col-md-3 control-label\">Description</label>\r\n              <div class=\"col-md-9\">\r\n                <textarea class=\"form-control\" id=\"name\" placeholder=\"Briefly Describe your Abilities\"></textarea>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <p>I hereby certify that the information above is true and accurate. </p>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <button class=\"btn btn-success\" type=\"submit\" [class.disabled]=\"horizontalForm.invalid\">Submit</button>\r\n                <button class=\"btn btn-default\"><i class=\"pg pg-close\"></i> Clear</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END card -->\r\n</pg-container>\r\n<!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/.pages/forms/form-layouts/form-layouts.component.scss":
/*!*******************************************************************!*\
  !*** ./src/.pages/forms/form-layouts/form-layouts.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2Zvcm1zL2Zvcm0tbGF5b3V0cy9mb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/forms/form-layouts/form-layouts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/.pages/forms/form-layouts/form-layouts.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutsComponent", function() { return FormLayoutsComponent; });
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


var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent(fb) {
        this.fb = fb;
        this.attachedForm = this.fb.group({
            projectName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            investor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            profit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            revenue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    FormLayoutsComponent.prototype.ngOnInit = function () {
    };
    FormLayoutsComponent.prototype.isFieldValid = function (field) {
        return !this.attachedForm.get(field).valid && this.attachedForm.get(field).touched;
    };
    FormLayoutsComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    FormLayoutsComponent.prototype.getFormControl = function (name) {
        return this.attachedForm.controls[name];
    };
    FormLayoutsComponent.prototype._submitForm = function () {
        for (var i in this.attachedForm.controls) {
            this.attachedForm.controls[i].markAsDirty();
        }
    };
    FormLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-layouts',
            template: __webpack_require__(/*! ./form-layouts.component.html */ "./src/.pages/forms/form-layouts/form-layouts.component.html"),
            styles: [__webpack_require__(/*! ./form-layouts.component.scss */ "./src/.pages/forms/form-layouts/form-layouts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormLayoutsComponent);
    return FormLayoutsComponent;
}());



/***/ }),

/***/ "./src/.pages/forms/form-wizard/form-wizard.component.html":
/*!*****************************************************************!*\
  !*** ./src/.pages/forms/form-wizard/form-wizard.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pg-container>\r\n  <div class=\"m-t-50\">\r\n    <pg-tabset tabAnimation=\"slide-left\" Type=\"linetriangle\" extraTabClass=\"no-border\" extraTabContentClass=\"bg-white b-t b-light\" [SelectedIndex]=\"selectedStep\">\r\n      <pg-tab>\r\n        <ng-template #TabHeading><i class=\"fa fa-shopping-cart tab-icon\"></i> <span>Your cart</span></ng-template>\r\n          <div class=\"row row-same-height\">\r\n            <div class=\"col-md-5 b-r b-dashed b-grey sm-b-b\">\r\n              <div class=\"padding-30 sm-padding-5 sm-m-t-15 m-t-50\">\r\n                <i class=\"fa fa-shopping-cart fa-2x hint-text\"></i>\r\n                <h2>Your Bags are ready to check out!</h2>\r\n                <p>Discover goods you'll love from brands that inspire. The easiest way to open your own online store. Discover amazing stuff or open your own store for free!</p>\r\n                <p class=\"small hint-text\">Below is a sample page for your cart , Created using pages design UI Elementes</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <div class=\"padding-30 sm-padding-5\">\r\n                <table class=\"table table-condensed\">\r\n                  <tr>\r\n                    <td class=\"col-lg-8 col-md-6 col-sm-7 \">\r\n                      <a href=\"javascript:void(0)\" class=\"remove-item\"><i class=\"pg pg-close\"></i></a>\r\n                      <span class=\"m-l-10 font-montserrat fs-11 all-caps\">Webarch UI Framework</span>\r\n                      <span class=\"m-l-10 \">Dashboard UI Pack</span>\r\n                    </td>\r\n                    <td class=\" col-lg-2 col-md-3 col-sm-3 text-right\">\r\n                      <span>Qty 1</span>\r\n                    </td>\r\n                    <td class=\" col-lg-2 col-md-3 col-sm-2 text-right\">\r\n                      <h4 class=\"text-primary no-margin font-montserrat\">$27</h4>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"col-lg-8 col-md-6 col-sm-7\">\r\n                      <a href=\"javascript:void(0)\" class=\"remove-item\"><i class=\"pg pg-close\"></i></a>\r\n                      <span class=\"m-l-10 font-montserrat fs-11 all-caps\">Pages UI Framework</span>\r\n                      <span class=\"m-l-10 \">Next Gen UI Pack</span>\r\n                    </td>\r\n                    <td class=\"col-lg-2 col-md-3 col-sm-3 text-right\">\r\n                      <span>Qty 1</span>\r\n                    </td>\r\n                    <td class=\" col-lg-2 col-md-3 col-sm-2 text-right\">\r\n                      <h4 class=\"text-primary no-margin font-montserrat\">$27</h4>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n                <h5>Donation</h5>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-7 col-md-6\">\r\n                    <p class=\"no-margin\">Donate now and give clean, safe water to those in need. </p>\r\n                    <p class=\"small hint-text\">\r\n                      100% of your donation goes to the field, and you can track the progress of every dollar spent. <a href=\"javascript:void(0)\">Click Here</a>\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"col-lg-5 col-md-6\">\r\n                      <form role=\"form\"  autocomplete=\"off\" [formGroup]=\"pricingOptForm\" class=\"form-inline\">\r\n                          <div class=\"btn-group\" btnRadioGroup formControlName=\"pricingPick\">\r\n                            <Label btnRadio=\"A\" class=\"btn btn-default\"> <span class=\"fs-16\">$0</span></Label>\r\n                            <Label btnRadio=\"B\" class=\"btn btn-default\"> <span class=\"fs-16\">$10</span></Label>\r\n                            <Label btnRadio=\"C\" class=\"btn btn-default\"><span class=\"fs-16\">$20</span></Label>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row b-a b-grey no-margin\">\r\n                  <div class=\"col-md-3 p-l-10 sm-padding-15 align-items-center d-flex\">\r\n                    <div>\r\n                      <h5 class=\"font-montserrat all-caps small no-margin hint-text bold\">Discount (10%)</h5>\r\n                      <p class=\"no-margin\">$10</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-7 col-middle sm-padding-15 align-items-center d-flex\">\r\n                    <div>\r\n                      <h5 class=\"font-montserrat all-caps small no-margin hint-text bold\">Donations</h5>\r\n                      <p class=\"no-margin\">$0</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-2 text-right bg-primary padding-10\">\r\n                    <h5 class=\"font-montserrat all-caps small no-margin hint-text text-white bold\">Total</h5>\r\n                    <h4 class=\"no-margin text-white\">$44</h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-end p-t-20 p-b-20\">\r\n            <button class=\"btn btn-primary btn-cons pull-right btn-animated from-left fa fa-credit-card\" type=\"button\" (click)=\"navigateToShipping()\">\r\n            <span>Next</span>\r\n            </button>\r\n          </div>\r\n            <div class=\"wizard-footer padding-20 bg-master-light\">\r\n              <p class=\"small hint-text pull-left no-margin\">\r\n                The Top Content Is Soley Created using pages UI Elements such as Invoice, Tabs, Form Layouts etc. and are prior for representation Purpose Only.\r\n              </p>\r\n              <div class=\"pull-right\">\r\n                <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n        </pg-tab>\r\n      <pg-tab [Disabled]=\"disabledTabs.shippingTab\">\r\n        <ng-template #TabHeading><i class=\"fa fa-truck tab-icon\"></i> <span>Shipping information</span></ng-template>\r\n          <div class=\"row row-same-height\">\r\n            <div class=\"col-md-5 b-r b-dashed b-grey \">\r\n              <div class=\"padding-30 sm-padding-5 sm-m-t-15 m-t-50\">\r\n                <h2>Your Information is safe with us!</h2>\r\n                <p>We respect your privacy and protect it with strong encryption, plus strict policies . Two-step verification, which we encourage all our customers to use.</p>\r\n                <p class=\"small hint-text\">Below is a sample page for your cart , Created using pages design UI Elementes</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <div class=\"padding-30 sm-padding-5\">\r\n                <form role=\"form\"  autocomplete=\"off\" [formGroup]=\"shippingForm\">\r\n                  <p>Name and Email Address</p>\r\n                  <div class=\"form-group-attached\">\r\n                    <div class=\"row clearfix\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('firstName').invalid && (getFormControl('firstName').dirty || getFormControl('firstName').touched)\">\r\n                          <Label>First name</Label>\r\n                          <input  pgFormGroupDefault type=\"text\" class=\"form-control\" name=\"firstName\" formControlName=\"firstName\">\r\n                          <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('firstName').invalid && (getFormControl('firstName').dirty || getFormControl('firstName').touched)\">\r\n                              This field is required.\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group form-group-default\">\r\n                          <Label>Last name</Label>\r\n                          <input type=\"text\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('email').invalid && (getFormControl('email').dirty || getFormControl('email').touched)\">\r\n                        <Label>Email</Label>\r\n                        <input  pgFormGroupDefault type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"email\">\r\n                        <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('email').invalid && (getFormControl('email').dirty || getFormControl('email').touched)\">\r\n                            This field is required.\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                  <br>\r\n                  <p>Billing Address</p>\r\n                  <div class=\"form-group-attached\">\r\n                    <div class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('address').invalid && (getFormControl('address').dirty || getFormControl('address').touched)\">\r\n                        <Label>Address</Label>\r\n                        <input  pgFormGroupDefault type=\"text\" class=\"form-control\" name=\"address\" formControlName=\"address\" placeholder=\"Current address\">\r\n                        <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('address').invalid && (getFormControl('address').dirty || getFormControl('address').touched)\">\r\n                            This field is required.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row clearfix\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group form-group-default required form-group-default-selectFx\">\r\n                          <Label>Country</Label>\r\n                          <pg-select-fx class=\"cs-select cs-skin-slide cs-transparent form-control\" [PlaceHolder]=\"'Select'\">\r\n                            <pg-selectfx-option Value=\"AF\" Label=\"Afghanistan\">Afghanistan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AX\" Label=\"Åland Islands\">Åland Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AL\" Label=\"Albania\">Albania</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"DZ\" Label=\"Algeria\">Algeria</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AS\" Label=\"American Samoa\">American Samoa</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AD\" Label=\"Andorra\">Andorra</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AO\" Label=\"Angola\">Angola</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AI\" Label=\"Anguilla\">Anguilla</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AQ\" Label=\"Antarctica\">Antarctica</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AG\" Label=\"Antigua and Barbuda\">Antigua and Barbuda</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AR\" Label=\"Argentina\">Argentina</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AM\" Label=\"Armenia\">Armenia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AW\" Label=\"Aruba\">Aruba</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AU\" Label=\"Australia\">Australia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AT\" Label=\"Austria\">Austria</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AZ\" Label=\"Azerbaijan\">Azerbaijan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BS\" Label=\"Bahamas\">Bahamas</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BH\" Label=\"Bahrain\">Bahrain</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BD\" Label=\"Bangladesh\">Bangladesh</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BB\" Label=\"Barbados\">Barbados</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BY\" Label=\"Belarus\">Belarus</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BE\" Label=\"Belgium\">Belgium</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BZ\" Label=\"Belize\">Belize</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BJ\" Label=\"Benin\">Benin</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BM\" Label=\"Bermuda\">Bermuda</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BT\" Label=\"Bhutan\">Bhutan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BO\" Label=\"Bolivia, Plurinational State of\">Bolivia, Plurinational State of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BQ\" Label=\"Bonaire, Sint Eustatius and Saba\">Bonaire, Sint Eustatius and Saba</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BA\" Label=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BW\" Label=\"Botswana\">Botswana</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BV\" Label=\"Bouvet Island\">Bouvet Island</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BR\" Label=\"Brazil\">Brazil</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IO\" Label=\"British Indian Ocean Territory\">British Indian Ocean Territory</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BN\" Label=\"Brunei Darussalam\">Brunei Darussalam</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BG\" Label=\"Bulgaria\">Bulgaria</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BF\" Label=\"Burkina Faso\">Burkina Faso</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BI\" Label=\"Burundi\">Burundi</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KH\" Label=\"Cambodia\">Cambodia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CM\" Label=\"Cameroon\">Cameroon</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CA\" Label=\"Canada\">Canada</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CV\" Label=\"Cape Verde\">Cape Verde</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KY\" Label=\"Cayman Islands\">Cayman Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CF\" Label=\"Central African Republic\">Central African Republic</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TD\" Label=\"Chad\">Chad</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CL\" Label=\"Chile\">Chile</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CN\" Label=\"China\">China</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CX\" Label=\"Christmas Island\">Christmas Island</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CC\" Label=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CO\" Label=\"Colombia\">Colombia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KM\" Label=\"Comoros\">Comoros</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CG\" Label=\"Congo\">Congo</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CD\" Label=\"Congo, the Democratic Republic of the\">Congo, the Democratic Republic of the</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CK\" Label=\"Cook Islands\">Cook Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CR\" Label=\"Costa Rica\">Costa Rica</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CI\" Label=\"Côte d'Ivoire\">Côte d'Ivoire</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"HR\" Label=\"Croatia\">Croatia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CU\" Label=\"Cuba\">Cuba</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CW\" Label=\"Curaçao\">Curaçao</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CY\" Label=\"Cyprus\">Cyprus</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CZ\" Label=\"Czech Republic\">Czech Republic</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"DK\" Label=\"Denmark\">Denmark</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"DJ\" Label=\"Djibouti\">Djibouti</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"DM\" Label=\"Dominica\">Dominica</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"DO\" Label=\"Dominican Republic\">Dominican Republic</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"EC\" Label=\"Ecuador\">Ecuador</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"EG\" Label=\"Egypt\">Egypt</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SV\" Label=\"El Salvador\">El Salvador</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GQ\" Label=\"Equatorial Guinea\">Equatorial Guinea</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ER\" Label=\"Eritrea\">Eritrea</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"EE\" Label=\"Estonia\">Estonia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ET\" Label=\"Ethiopia\">Ethiopia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"FK\" Label=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"FO\" Label=\"Faroe Islands\">Faroe Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"FJ\" Label=\"Fiji\">Fiji</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"FI\" Label=\"Finland\">Finland</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"FR\" Label=\"France\">France</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GF\" Label=\"French Guiana\">French Guiana</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PF\" Label=\"French Polynesia\">French Polynesia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TF\" Label=\"French Southern Territories\">French Southern Territories</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GA\" Label=\"Gabon\">Gabon</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GM\" Label=\"Gambia\">Gambia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GE\" Label=\"Georgia\">Georgia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"DE\" Label=\"Germany\">Germany</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GH\" Label=\"Ghana\">Ghana</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GI\" Label=\"Gibraltar\">Gibraltar</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GR\" Label=\"Greece\">Greece</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GL\" Label=\"Greenland\">Greenland</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GD\" Label=\"Grenada\">Grenada</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GP\" Label=\"Guadeloupe\">Guadeloupe</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GU\" Label=\"Guam\">Guam</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GT\" Label=\"Guatemala\">Guatemala</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GG\" Label=\"Guernsey\">Guernsey</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GN\" Label=\"Guinea\">Guinea</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GW\" Label=\"Guinea-Bissau\">Guinea-Bissau</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GY\" Label=\"Guyana\">Guyana</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"HT\" Label=\"Haiti\">Haiti</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"HM\" Label=\"Heard Island and McDonald Islands\">Heard Island and McDonald Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"VA\" Label=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"HN\" Label=\"Honduras\">Honduras</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"HK\" Label=\"Hong Kong\">Hong Kong</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"HU\" Label=\"Hungary\">Hungary</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IS\" Label=\"Iceland\">Iceland</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IN\" Label=\"India\">India</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ID\" Label=\"Indonesia\">Indonesia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IR\" Label=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IQ\" Label=\"Iraq\">Iraq</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IE\" Label=\"Ireland\">Ireland</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IM\" Label=\"Isle of Man\">Isle of Man</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IL\" Label=\"Israel\">Israel</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"IT\" Label=\"Italy\">Italy</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"JM\" Label=\"Jamaica\">Jamaica</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"JP\" Label=\"Japan\">Japan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"JE\" Label=\"Jersey\">Jersey</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"JO\" Label=\"Jordan\">Jordan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KZ\" Label=\"Kazakhstan\">Kazakhstan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KE\" Label=\"Kenya\">Kenya</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KI\" Label=\"Kiribati\">Kiribati</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KP\" Label=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KR\" Label=\"Korea, Republic of\">Korea, Republic of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KW\" Label=\"Kuwait\">Kuwait</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KG\" Label=\"Kyrgyzstan\">Kyrgyzstan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LA\" Label=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LV\" Label=\"Latvia\">Latvia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LB\" Label=\"Lebanon\">Lebanon</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LS\" Label=\"Lesotho\">Lesotho</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LR\" Label=\"Liberia\">Liberia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LY\" Label=\"Libya\">Libya</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LI\" Label=\"Liechtenstein\">Liechtenstein</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LT\" Label=\"Lithuania\">Lithuania</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LU\" Label=\"Luxembourg\">Luxembourg</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MO\" Label=\"Macao\">Macao</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MK\" Label=\"Macedonia, the former Yugoslav Republic of\">Macedonia, the former Yugoslav Republic of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MG\" Label=\"Madagascar\">Madagascar</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MW\" Label=\"Malawi\">Malawi</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MY\" Label=\"Malaysia\">Malaysia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MV\" Label=\"Maldives\">Maldives</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ML\" Label=\"Mali\">Mali</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MT\" Label=\"Malta\">Malta</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MH\" Label=\"Marshall Islands\">Marshall Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MQ\" Label=\"Martinique\">Martinique</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MR\" Label=\"Mauritania\">Mauritania</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MU\" Label=\"Mauritius\">Mauritius</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"YT\" Label=\"Mayotte\">Mayotte</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MX\" Label=\"Mexico\">Mexico</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"FM\" Label=\"Micronesia, Federated States of\">Micronesia, Federated States of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MD\" Label=\"Moldova, Republic of\">Moldova, Republic of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MC\" Label=\"Monaco\">Monaco</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MN\" Label=\"Mongolia\">Mongolia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ME\" Label=\"Montenegro\">Montenegro</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MS\" Label=\"Montserrat\">Montserrat</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MA\" Label=\"Morocco\">Morocco</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MZ\" Label=\"Mozambique\">Mozambique</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MM\" Label=\"Myanmar\">Myanmar</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NA\" Label=\"Namibia\">Namibia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NR\" Label=\"Nauru\">Nauru</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NP\" Label=\"Nepal\">Nepal</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NL\" Label=\"Netherlands\">Netherlands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NC\" Label=\"New Caledonia\">New Caledonia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NZ\" Label=\"New Zealand\">New Zealand</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NI\" Label=\"Nicaragua\">Nicaragua</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NE\" Label=\"Niger\">Niger</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NG\" Label=\"Nigeria\">Nigeria</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NU\" Label=\"Niue\">Niue</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NF\" Label=\"Norfolk Island\">Norfolk Island</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MP\" Label=\"Northern Mariana Islands\">Northern Mariana Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"NO\" Label=\"Norway\">Norway</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"OM\" Label=\"Oman\">Oman</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PK\" Label=\"Pakistan\">Pakistan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PW\" Label=\"Palau\">Palau</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PS\" Label=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PA\" Label=\"Panama\">Panama</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PG\" Label=\"Papua New Guinea\">Papua New Guinea</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PY\" Label=\"Paraguay\">Paraguay</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PE\" Label=\"Peru\">Peru</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PH\" Label=\"Philippines\">Philippines</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PN\" Label=\"Pitcairn\">Pitcairn</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PL\" Label=\"Poland\">Poland</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PT\" Label=\"Portugal\">Portugal</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PR\" Label=\"Puerto Rico\">Puerto Rico</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"QA\" Label=\"Qatar\">Qatar</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"RE\" Label=\"Réunion\">Réunion</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"RO\" Label=\"Romania\">Romania</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"RU\" Label=\"Russian Federation\">Russian Federation</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"RW\" Label=\"Rwanda\">Rwanda</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"BL\" Label=\"Saint Barthélemy\">Saint Barthélemy</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SH\" Label=\"Saint Helena, Ascension and Tristan da Cunha\">Saint Helena, Ascension and Tristan da Cunha</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"KN\" Label=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LC\" Label=\"Saint Lucia\">Saint Lucia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"MF\" Label=\"Saint Martin (French part)\">Saint Martin (French part)</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"PM\" Label=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"VC\" Label=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"WS\" Label=\"Samoa\">Samoa</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SM\" Label=\"San Marino\">San Marino</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ST\" Label=\"Sao Tome and Principe\">Sao Tome and Principe</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SA\" Label=\"Saudi Arabia\">Saudi Arabia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SN\" Label=\"Senegal\">Senegal</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"RS\" Label=\"Serbia\">Serbia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SC\" Label=\"Seychelles\">Seychelles</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SL\" Label=\"Sierra Leone\">Sierra Leone</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SG\" Label=\"Singapore\">Singapore</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SX\" Label=\"Sint Maarten (Dutch part)\">Sint Maarten (Dutch part)</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SK\" Label=\"Slovakia\">Slovakia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SI\" Label=\"Slovenia\">Slovenia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SB\" Label=\"Solomon Islands\">Solomon Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SO\" Label=\"Somalia\">Somalia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ZA\" Label=\"South Africa\">South Africa</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GS\" Label=\"South Georgia and the South Sandwich Islands\">South Georgia and the South Sandwich Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SS\" Label=\"South Sudan\">South Sudan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ES\" Label=\"Spain\">Spain</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"LK\" Label=\"Sri Lanka\">Sri Lanka</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SD\" Label=\"Sudan\">Sudan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SR\" Label=\"Suriname\">Suriname</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SJ\" Label=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SZ\" Label=\"Swaziland\">Swaziland</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SE\" Label=\"Sweden\">Sweden</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"CH\" Label=\"Switzerland\">Switzerland</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"SY\" Label=\"Syrian Arab Republic\">Syrian Arab Republic</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TW\" Label=\"Taiwan, Province of China\">Taiwan, Province of China</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TJ\" Label=\"Tajikistan\">Tajikistan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TZ\" Label=\"Tanzania, United Republic of\">Tanzania, United Republic of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TH\" Label=\"Thailand\">Thailand</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TL\" Label=\"Timor-Leste\">Timor-Leste</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TG\" Label=\"Togo\">Togo</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TK\" Label=\"Tokelau\">Tokelau</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TO\" Label=\"Tonga\">Tonga</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TT\" Label=\"Trinidad and Tobago\">Trinidad and Tobago</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TN\" Label=\"Tunisia\">Tunisia</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TR\" Label=\"Turkey\">Turkey</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TM\" Label=\"Turkmenistan\">Turkmenistan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TC\" Label=\"Turks and Caicos Islands\">Turks and Caicos Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"TV\" Label=\"Tuvalu\">Tuvalu</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"UG\" Label=\"Uganda\">Uganda</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"UA\" Label=\"Ukraine\">Ukraine</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"AE\" Label=\"United Arab Emirates\">United Arab Emirates</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"GB\" Label=\"United Kingdom\">United Kingdom</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"US\" Label=\"United States\">United States</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"UM\" Label=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"UY\" Label=\"Uruguay\">Uruguay</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"UZ\" Label=\"Uzbekistan\">Uzbekistan</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"VU\" Label=\"Vanuatu\">Vanuatu</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"VE\" Label=\"Venezuela, Bolivarian Republic of\">Venezuela, Bolivarian Republic of</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"VN\" Label=\"Viet Nam\">Viet Nam</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"VG\" Label=\"Virgin Islands, British\">Virgin Islands, British</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"VI\" Label=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"WF\" Label=\"Wallis and Futuna\">Wallis and Futuna</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"EH\" Label=\"Western Sahara\">Western Sahara</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"YE\" Label=\"Yemen\">Yemen</pg-selectfx-option>\r\n                            <pg-selectfx-option Value=\"ZM\" Label=\"Zambia\">Zambia</pg-selectfx-option>\r\n                        \t  <pg-selectfx-option Value=\"ZW\" Label=\"Zimbabwe\">Zimbabwe</pg-selectfx-option>\r\n                          </pg-select-fx>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group form-group-default\">\r\n                          <Label>City</Label>\r\n                          <input type=\"text\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row clearfix\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group form-group-default required\" [class.has-error]=\"getFormControl('state').invalid && (getFormControl('state').dirty || getFormControl('state').touched)\">\r\n                          <Label>State/Province</Label>\r\n                          <input  pgFormGroupDefault type=\"text\" class=\"form-control\" name=\"state\" formControlName=\"state\"  placeholder=\"Outside US/Canada\">\r\n                          <div class=\"invalid-tooltip\" *ngIf=\"getFormControl('state').invalid && (getFormControl('state').dirty || getFormControl('state').touched)\">\r\n                              This field is required.\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group form-group-default\">\r\n                          <Label>Zip code</Label>\r\n                          <input type=\"text\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-end p-t-20 p-b-20\">\r\n            <button class=\"btn btn-default btn-cons pull-right btn-animated from-left fa fa-shopping-cart\" type=\"button\" (click)=\"prevTab()\">\r\n            <span>Previous</span>\r\n            </button>\r\n            <button class=\"btn btn-primary btn-cons pull-right btn-animated from-left fa fa-credit-card\" [class.disabled]=\"shippingForm.invalid\" type=\"button\" (click)=\"navigateToPayment()\">\r\n            <span>Next</span>\r\n            </button>\r\n          </div>\r\n        <div class=\"wizard-footer padding-20 bg-master-light\">\r\n          <p class=\"small hint-text pull-left no-margin\">\r\n            The Top Content Is Soley Created using pages UI Elements such as Invoice, Tabs, Form Layouts etc. and are prior for representation Purpose Only.\r\n          </p>\r\n          <div class=\"pull-right\">\r\n            <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </pg-tab>\r\n      <pg-tab [Disabled]=\"disabledTabs.paymentTab\">\r\n        <ng-template #TabHeading><i class=\"fa fa-credit-card tab-icon\"></i> <span>Payment details</span></ng-template>\r\n          <div class=\"row row-same-height\">\r\n            <div class=\"col-md-5 b-r b-dashed b-grey \">\r\n              <div class=\"padding-30 sm-padding-5 sm-m-t-15 m-t-50\">\r\n                <h2>We Secured Your Line</h2>\r\n                <p>Below is a sample page for your cart , Created using pages design UI Elementes</p>\r\n                <p class=\"small hint-text\">Below is a sample page for your cart , Created using pages design UI Elementes</p>\r\n                <table class=\"table table-condensed\">\r\n                  <tr>\r\n                    <td class=\" col-md-9\">\r\n                      <span class=\"m-l-10 font-montserrat fs-11 all-caps\">Webarch UI Framework</span>\r\n                      <span class=\"m-l-10 \">Dashboard UI Pack</span>\r\n                    </td>\r\n                    <td class=\" col-md-3 text-right\">\r\n                      <span>Qty 1</span>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\" col-md-9\">\r\n                      <span class=\"m-l-10 font-montserrat fs-11 all-caps\">Pages UI Framework</span>\r\n                      <span class=\"m-l-10 \">Next Gen UI Pack</span>\r\n                    </td>\r\n                    <td class=\" col-md-3 text-right\">\r\n                      <span>Qty 1</span>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td colspan=\"2\" class=\" col-md-3 text-right\">\r\n                      <h4 class=\"text-primary no-margin font-montserrat\">$27</h4>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n                <p class=\"small\">Invoice are issued on the date of despatch. Payment terms: Pre-orders: within 10 days of invoice date with 4% discount, from the 11th to the 30th day net. Re-orders: non-reduced stock items are payable net after 20 days. </p>\r\n                <p class=\"small\">By pressing Pay Now You will Agree to the Payment <a href=\"javascript:void(0)\">Terms &amp; Conditions</a></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <div class=\"padding-30 sm-padding-5\">\r\n                <ul class=\"list-unstyled list-inline m-l-30\">\r\n                  <li><a href=\"javascript:void(0)\" class=\"p-r-30 text-black\">Credit card</a></li>\r\n                  <li><a href=\"javascript:void(0)\" class=\"p-r-30 text-black  hint-text\">PayPal</a></li>\r\n                  <li><a href=\"javascript:void(0)\" class=\"p-r-30 text-black  hint-text\">Wire transfer</a></li>\r\n                </ul>\r\n                <form role=\"form\"  [formGroup]=\"billingForm\" >\r\n                  <div class=\"bg-master-light padding-30 b-rad-lg\">\r\n                    <h2 class=\"pull-left no-margin\">Credit Card</h2>\r\n                    <ul class=\"list-unstyled pull-right list-inline no-margin\">\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img width=\"51\" height=\"32\" src2x=\"assets/img/form-wizard/visa2x.png\" pgRetina src1x=\"assets/img/form-wizard/visa.png\" class=\"brand\" alt=\"logo\" src=\"assets/img/form-wizard/visa.png\">\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\" class=\"hint-text\">\r\n                          <img width=\"51\" height=\"32\" src2x=\"assets/img/form-wizard/amex2x.png\" pgRetina src1x=\"assets/img/form-wizard/amex.png\" class=\"brand\" alt=\"logo\" src=\"assets/img/form-wizard/amex.png\">\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\" class=\"hint-text\">\r\n                          <img width=\"51\" height=\"32\" src2x=\"assets/img/form-wizard/mastercard2x.png\" pgRetina src1x=\"assets/img/form-wizard/mastercard.png\" class=\"brand\" alt=\"logo\" src=\"assets/img/form-wizard/mastercard.png\">\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"form-group form-group-default required m-t-25\" [class.has-error]=\"getFormControlBilling('cardHolderName').invalid && (getFormControlBilling('cardHolderName').dirty || getFormControlBilling('cardHolderName').touched)\">\r\n                      <Label>Card holder's name</Label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Name on the card\"  name=\"cardHolderName\" formControlName=\"cardHolderName\">\r\n                      <div class=\"invalid-tooltip\" *ngIf=\"getFormControlBilling('cardHolderName').invalid && (getFormControlBilling('cardHolderName').dirty || getFormControlBilling('cardHolderName').touched)\">\r\n                          This field is required.\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group form-group-default required\" [class.has-error]=\"getFormControlBilling('cardNumber').invalid && (getFormControlBilling('cardNumber').dirty || getFormControlBilling('cardNumber').touched)\">\r\n                      <Label>Card number</Label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"8888-8888-8888-8888\" name=\"cardNumber\" formControlName=\"cardNumber\">\r\n                      <div class=\"invalid-tooltip\" *ngIf=\"getFormControlBilling('cardNumber').invalid && (getFormControlBilling('cardNumber').dirty || getFormControlBilling('cardNumber').touched)\">\r\n                          This field is required.\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <Label>Expiration</Label>\r\n                        <br>\r\n                        <pg-select-fx [PlaceHolder]=\"'Select'\">\r\n                          <pg-selectfx-option>Jan (01)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Feb (02)\">Feb (02)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Mar (03)\">Mar (03)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Apr (04)\">Apr (04)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"May (05)\">May (05)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Jun (06)\">Jun (06)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Jul (07)\">Jul (07)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Aug (08)\">Aug (08)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Sep (09)\">Sep (09)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Oct (10)\">Oct (10)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Nov (11)\">Nov (11)</pg-selectfx-option>\r\n                          <pg-selectfx-option Label=\"Dec (12)\">Dec (12)</pg-selectfx-option>\r\n                        </pg-select-fx>\r\n                        <pg-select-fx [PlaceHolder]=\"'Select'\">\r\n                          <pg-selectfx-option value=\"2014\" Label=\"2014\">2014</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2015\" Label=\"2015\">2015</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2016\" Label=\"2016\">2016</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2017\" Label=\"2017\">2017</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2018\" Label=\"2018\">2018</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2019\" Label=\"2019\">2019</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2020\" Label=\"2020\">2020</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2021\" Label=\"2021\">2021</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2022\" Label=\"2022\">2022</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2023\" Label=\"2023\">2023</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2024\" Label=\"2024\">2024</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2025\" Label=\"2025\">2025</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2026\" Label=\"2026\">2026</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2027\" Label=\"2027\">2027</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2028\" Label=\"2028\">2028</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2029\" Label=\"2029\">2029</pg-selectfx-option>\r\n                          <pg-selectfx-option value=\"2030\" Label=\"2030\">2030</pg-selectfx-option>\r\n                        </pg-select-fx>\r\n                      </div>\r\n                      <div class=\"col-md-2 offset-md-4\">\r\n                        <div class=\"form-group required\">\r\n                          <Label>CVC Code</Label>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"000\" required>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-end p-t-20 p-b-20\">\r\n            <button class=\"btn btn-default btn-cons pull-right btn-animated from-left fa fa-truck\" type=\"button\" (click)=\"prevTab()\">\r\n              <span>Previous</span>\r\n            </button>\r\n            <button class=\"btn btn-primary btn-cons pull-right btn-animated from-left fa fa-check\" [class.disabled]=\"billingForm.invalid\" type=\"button\" (click)=\"navigateToFinal()\">\r\n            <span>Next</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"wizard-footer padding-20 bg-master-light\">\r\n            <p class=\"small hint-text pull-left no-margin\">\r\n              The Top Content Is Soley Created using pages UI Elements such as Invoice, Tabs, Form Layouts etc. and are prior for representation Purpose Only.\r\n            </p>\r\n            <div class=\"pull-right\">\r\n              <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n      </pg-tab>\r\n      <pg-tab [Disabled]=\"disabledTabs.FinalTab\">\r\n        <ng-template #TabHeading><i class=\"fa fa-check tab-icon\"></i> <span>Summary</span></ng-template>\r\n        <h1>Thank you.</h1>\r\n        <div class=\"d-flex justify-content-end p-t-20 p-b-20\">\r\n            <button class=\"btn btn-white btn-cons pull-right\" type=\"button\" (click)=\"prevTab()\">\r\n            <span>Previous</span>\r\n            </button>\r\n            <button class=\"btn btn-primary btn-cons pull-right\" type=\"button\" >\r\n            <span>Finish</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"wizard-footer padding-20 bg-master-light\">\r\n              <p class=\"small hint-text pull-left no-margin\">\r\n                The Top Content Is Soley Created using pages UI Elements such as Invoice, Tabs, Form Layouts etc. and are prior for representation Purpose Only.\r\n              </p>\r\n              <div class=\"pull-right\">\r\n                <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n      </pg-tab>\r\n    </pg-tabset>\r\n  </div>\r\n</pg-container>"

/***/ }),

/***/ "./src/.pages/forms/form-wizard/form-wizard.component.scss":
/*!*****************************************************************!*\
  !*** ./src/.pages/forms/form-wizard/form-wizard.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs .nav-link.active {\n  background: transparent !important;\n  box-shadow: none !important;\n  border-color: transparent !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy8ucGFnZXMvZm9ybXMvZm9ybS13aXphcmQvRTpcXFRUTVMtM1xcRUtWVC9zcmNcXC5wYWdlc1xcZm9ybXNcXGZvcm0td2l6YXJkXFxmb3JtLXdpemFyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFrQztFQUNsQyw0QkFBMkI7RUFDM0IscUNBQW9DLEVBQ3ZDIiwiZmlsZSI6InNyYy8ucGFnZXMvZm9ybXMvZm9ybS13aXphcmQvZm9ybS13aXphcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/.pages/forms/form-wizard/form-wizard.component.ts":
/*!***************************************************************!*\
  !*** ./src/.pages/forms/form-wizard/form-wizard.component.ts ***!
  \***************************************************************/
/*! exports provided: FormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function() { return FormWizardComponent; });
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


var FormWizardComponent = /** @class */ (function () {
    function FormWizardComponent(fb) {
        this.fb = fb;
        this.disabledTabs = {
            shippingTab: true,
            paymentTab: true,
            FinalTab: true,
        };
        //Current Tab Index
        this.selectedStep = 0;
        this.shippingForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.billingForm = this.fb.group({
            cardHolderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    FormWizardComponent.prototype.ngOnInit = function () {
        this.pricingOptForm = this.fb.group({
            pricingPick: 'C'
        });
    };
    FormWizardComponent.prototype.navigateToShipping = function () {
        //validate here then
        this.disabledTabs.shippingTab = false;
        this.selectedStep = 1;
    };
    FormWizardComponent.prototype.navigateToPayment = function () {
        //validate here then
        if (!this.shippingForm.invalid) {
            this.disabledTabs.shippingTab = false;
            this.selectedStep = 2;
        }
        else {
            this.shippingForm;
        }
    };
    FormWizardComponent.prototype.navigateToFinal = function () {
        //validate here then
        if (!this.billingForm.invalid) {
            this.disabledTabs.paymentTab = false;
            this.selectedStep = 3;
        }
        else {
            this.billingForm;
        }
    };
    //Prev
    FormWizardComponent.prototype.prevTab = function () {
        if (this.selectedStep > 0)
            this.selectedStep--;
    };
    //Next
    FormWizardComponent.prototype.nextTab = function () {
        this.selectedStep++;
    };
    //Shipping Control GET
    FormWizardComponent.prototype.getFormControl = function (name) {
        return this.shippingForm.controls[name];
    };
    //Billing Control GET
    FormWizardComponent.prototype.getFormControlBilling = function (name) {
        return this.billingForm.controls[name];
    };
    FormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-wizard',
            template: __webpack_require__(/*! ./form-wizard.component.html */ "./src/.pages/forms/form-wizard/form-wizard.component.html"),
            styles: [__webpack_require__(/*! ./form-wizard.component.scss */ "./src/.pages/forms/form-wizard/form-wizard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormWizardComponent);
    return FormWizardComponent;
}());



/***/ }),

/***/ "./src/.pages/forms/forms.module.ts":
/*!******************************************!*\
  !*** ./src/.pages/forms/forms.module.ts ***!
  \******************************************/
/*! exports provided: FormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.routing */ "./src/.pages/forms/forms.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/.pages/@pages/components/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/index.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@pages/components/select/select.module */ "./src/.pages/@pages/components/select/select.module.ts");
/* harmony import */ var _pages_components_tag_tag_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@pages/components/tag/tag.module */ "./src/.pages/@pages/components/tag/tag.module.ts");
/* harmony import */ var _pages_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@pages/components/switch/switch.module */ "./src/.pages/@pages/components/switch/switch.module.ts");
/* harmony import */ var _pages_components_time_picker_timepicker_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@pages/components/time-picker/timepicker.module */ "./src/.pages/@pages/components/time-picker/timepicker.module.ts");
/* harmony import */ var _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@pages/components/tabs/tabs.module */ "./src/.pages/@pages/components/tabs/tabs.module.ts");
/* harmony import */ var _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@pages/components/cs-select/select.module */ "./src/.pages/@pages/components/cs-select/select.module.ts");
/* harmony import */ var _pages_components_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@pages/components/datepicker/datepicker.module */ "./src/.pages/@pages/components/datepicker/datepicker.module.ts");
/* harmony import */ var _pages_components_upload_upload_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@pages/components/upload/upload.module */ "./src/.pages/@pages/components/upload/upload.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form-wizard/form-wizard.component */ "./src/.pages/forms/form-wizard/form-wizard.component.ts");
/* harmony import */ var _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form-elements/form-elements.component */ "./src/.pages/forms/form-elements/form-elements.component.ts");
/* harmony import */ var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-layouts/form-layouts.component */ "./src/.pages/forms/form-layouts/form-layouts.component.ts");
/* harmony import */ var _pages_ui_typopage_typopage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! .pages/ui/typopage/typopage.component */ "./src/.pages/ui/typopage/typopage.component.ts");
/* harmony import */ var _pages_ui_colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! .pages/ui/colorspage/colorspage.component */ "./src/.pages/ui/colorspage/colorspage.component.ts");
/* harmony import */ var _pages_ui_buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! .pages/ui/buttonspage/buttonspage.component */ "./src/.pages/ui/buttonspage/buttonspage.component.ts");
/* harmony import */ var _pages_ui_iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! .pages/ui/iconspage/iconspage.component */ "./src/.pages/ui/iconspage/iconspage.component.ts");
/* harmony import */ var _pages_ui_modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! .pages/ui/modalspage/modalspage.component */ "./src/.pages/ui/modalspage/modalspage.component.ts");
/* harmony import */ var _pages_ui_tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! .pages/ui/tabspage/tabspage.component */ "./src/.pages/ui/tabspage/tabspage.component.ts");
/* harmony import */ var _pages_ui_notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! .pages/ui/notificationspage/notificationspage.component */ "./src/.pages/ui/notificationspage/notificationspage.component.ts");
/* harmony import */ var _pages_ui_treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! .pages/ui/treeviewpage/treeviewpage.component */ "./src/.pages/ui/treeviewpage/treeviewpage.component.ts");
/* harmony import */ var _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! .pages/cards/cards.component */ "./src/.pages/cards/cards.component.ts");
/* harmony import */ var _pages_ui_iconspage_icons_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! .pages/ui/iconspage/icons.service */ "./src/.pages/ui/iconspage/icons.service.ts");
/* harmony import */ var _pages_pages_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! .pages/@pages/components/datepicker/datepicker.component */ "./src/.pages/@pages/components/datepicker/datepicker.component.ts");
/* harmony import */ var _pages_pages_components_datepicker_rangepicker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! .pages/@pages/components/datepicker/rangepicker.component */ "./src/.pages/@pages/components/datepicker/rangepicker.component.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _pages_pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! .pages/@pages/components/message/message.service */ "./src/.pages/@pages/components/message/message.service.ts");
/* harmony import */ var _pages_pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! .pages/@pages/components/message/message.module */ "./src/.pages/@pages/components/message/message.module.ts");
/* harmony import */ var _pages_pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! .pages/@pages/components/progress/progress.module */ "./src/.pages/@pages/components/progress/progress.module.ts");
/* harmony import */ var _pages_pages_components_card_card_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! .pages/@pages/components/card/card.module */ "./src/.pages/@pages/components/card/card.module.ts");
/* harmony import */ var _pages_pages_components_card_social_card_social_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! .pages/@pages/components/card-social/card-social.module */ "./src/.pages/@pages/components/card-social/card-social.module.ts");
/* harmony import */ var _pages_pages_components_select_option_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! .pages/@pages/components/select/option.component */ "./src/.pages/@pages/components/select/option.component.ts");
/* harmony import */ var _pages_pages_components_select_select_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! .pages/@pages/components/select/select.component */ "./src/.pages/@pages/components/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Dependencies




// Router

// Core Pages Layout Components

// Bootstrap Components by ngx-bootstrap






// Thirdparty Treeview component

// Pages Components by ace








// Thirdparty components


// Sample Demo pages













// Required for Date Pickers


// Required for Buttons








var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_4__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__["ButtonsModule"].forRoot(),
                _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_9__["pgSelectModule"],
                _pages_components_tag_tag_module__WEBPACK_IMPORTED_MODULE_10__["pgTagModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__["TextMaskModule"],
                _pages_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_11__["pgSwitchModule"],
                _pages_components_time_picker_timepicker_module__WEBPACK_IMPORTED_MODULE_12__["pgTimePickerModule"],
                _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_13__["pgTabsModule"],
                _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_14__["pgSelectfx"],
                _pages_components_upload_upload_module__WEBPACK_IMPORTED_MODULE_16__["pgUploadModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TypeaheadModule"].forRoot(),
                _pages_components_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_15__["pgDatePickerModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_18__["QuillModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_34__["FilterPipeModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _pages_pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_36__["MessageModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_8__["TreeModule"].forRoot(),
                _pages_pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_37__["ProgressModule"],
                _pages_pages_components_card_card_module__WEBPACK_IMPORTED_MODULE_38__["pgCardModule"],
                _pages_pages_components_card_social_card_social_module__WEBPACK_IMPORTED_MODULE_39__["pgCardSocialModule"]
            ],
            declarations: [
                _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_19__["FormWizardComponent"],
                _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_20__["FormElementsComponent"],
                _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_21__["FormLayoutsComponent"],
                _pages_ui_typopage_typopage_component__WEBPACK_IMPORTED_MODULE_22__["TypopageComponent"],
                _pages_ui_colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_23__["ColorspageComponent"],
                _pages_ui_buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_24__["ButtonspageComponent"],
                _pages_ui_iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_25__["IconspageComponent"],
                _pages_ui_notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_28__["NotificationspageComponent"],
                _pages_ui_modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_26__["ModalspageComponent"],
                _pages_ui_tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_27__["TabspageComponent"],
                _pages_ui_treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_29__["TreeviewpageComponent"],
                _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_30__["CardsComponentPage"],
            ],
            exports: [
                _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_19__["FormWizardComponent"],
                _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_20__["FormElementsComponent"],
                _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_21__["FormLayoutsComponent"],
                _pages_ui_typopage_typopage_component__WEBPACK_IMPORTED_MODULE_22__["TypopageComponent"],
                _pages_ui_colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_23__["ColorspageComponent"],
                _pages_ui_buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_24__["ButtonspageComponent"],
                _pages_ui_iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_25__["IconspageComponent"],
                _pages_ui_notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_28__["NotificationspageComponent"],
                _pages_ui_modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_26__["ModalspageComponent"],
                _pages_ui_tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_27__["TabspageComponent"],
                _pages_ui_treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_29__["TreeviewpageComponent"],
                _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_30__["CardsComponentPage"],
                _pages_pages_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_32__["pgDatePickerComponent"],
                _pages_pages_components_datepicker_rangepicker_component__WEBPACK_IMPORTED_MODULE_33__["pgRangePickerComponent"],
                _pages_pages_components_select_option_component__WEBPACK_IMPORTED_MODULE_40__["pgOptionComponent"],
                _pages_pages_components_select_select_component__WEBPACK_IMPORTED_MODULE_41__["pgSelectComponent"],
                _pages_pages_components_datepicker_rangepicker_component__WEBPACK_IMPORTED_MODULE_33__["pgRangePickerComponent"]
            ],
            providers: [
                _pages_ui_iconspage_icons_service__WEBPACK_IMPORTED_MODULE_31__["IconsService"],
                _pages_pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_35__["MessageService"]
            ]
        })
    ], FormsPageModule);
    return FormsPageModule;
}());



/***/ }),

/***/ "./src/.pages/forms/forms.routing.ts":
/*!*******************************************!*\
  !*** ./src/.pages/forms/forms.routing.ts ***!
  \*******************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-wizard/form-wizard.component */ "./src/.pages/forms/form-wizard/form-wizard.component.ts");
/* harmony import */ var _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-elements/form-elements.component */ "./src/.pages/forms/form-elements/form-elements.component.ts");
/* harmony import */ var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-layouts/form-layouts.component */ "./src/.pages/forms/form-layouts/form-layouts.component.ts");



var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'elements',
                component: _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_1__["FormElementsComponent"],
                data: {
                    title: 'forms'
                }
            }, {
                path: 'layouts',
                component: _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_2__["FormLayoutsComponent"],
                data: {
                    title: 'form layouts'
                }
            }, {
                path: 'wizard',
                component: _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_0__["FormWizardComponent"],
                data: {
                    title: 'form wizard'
                }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=default~app-app-module~forms-forms-module.js.map