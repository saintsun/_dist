(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"],{

/***/ "./src/.pages/@pages/animations/tag-animations.ts":
/*!********************************************************!*\
  !*** ./src/.pages/@pages/animations/tag-animations.ts ***!
  \********************************************************/
/*! exports provided: tagAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagAnimation", function() { return tagAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var tagAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tagAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms linear')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms linear')
    ])
]);


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

/***/ "./src/.pages/email/compose/compose.component.html":
/*!*********************************************************!*\
  !*** ./src/.pages/email/compose/compose.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pg-secondary-sidebar>\r\n  <div class=\" m-b-30 m-l-30 m-r-30 d-none d-sm-block\">\r\n      <a [routerLink]=\"['../compose']\" class=\"btn btn-complete btn-block btn-compose\">Compose</a>\r\n    </div>\r\n    <p class=\"menu-title\">BROWSE</p>\r\n    <ul class=\"main-menu\">\r\n      <li class=\"active\">\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"\">\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\r\n        </a>\r\n        <ul class=\"sub-menu no-padding\">\r\n          <li>\r\n            <a [routerLink]=\"['../list']\">\r\n              <span class=\"title\">Important</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['../list']\">\r\n              <span class=\"title\">Labeled</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\r\n          <span class=\"badge pull-right\">10</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\r\n    <ul class=\"sub-menu no-padding\">\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Documents</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Flagged</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Images</span>\r\n        </a>\r\n      </li>\r\n    </ul>  \r\n</pg-secondary-sidebar>\r\n<div class=\"inner-content full-height\">\r\n\t<!-- START COMPOSE EMAIL -->\r\n  <div class=\"email-composer container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 no-padding\">\r\n        <div class=\"wysiwyg5-wrapper email-toolbar-wrapper\">\r\n        </div>\r\n          <div class=\"form-group-attached\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group form-group-default\">\r\n                  <label>TO:</label>\r\n                  <pg-tag-control></pg-tag-control>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group form-group-default\">\r\n                  <label>CC:</label>\r\n                  <pg-tag-control placeholder=\"Add Carbon Copy\"></pg-tag-control>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group form-group-default\">\r\n              <label>Subject</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"subject\">\r\n            </div>\r\n          </div>\r\n        <div class=\"email-body-wrapper\">\r\n            <quill-editor [style]=\"{height: '350px'}\" placeholder=\"Reply\" [modules]=\"editorModules\">\r\n            </quill-editor>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row p-b-20\">\r\n      <div class=\"col-md-11 d-sm-flex\">\r\n        <div>\r\n          <button class=\"btn btn-white btn-cons\">Cancel</button>\r\n          <button class=\"btn btn-complete btn-cons m-l-10\">Send</button>\r\n        </div>\r\n        <div class=\"checkbox d-md-flex d-none m-l-20\">\r\n          <input type=\"checkbox\" value=\"1\" id=\"sendCC\">\r\n          <label for=\"sendCC\" class=\"hint-text d-none d-lg-block\">Send a <span class=\"text-complete\">Carbon Copy</span> CC to my Primary email address.</label>\r\n          <label for=\"sendCC\" class=\"hint-text d-md-none\">Send me a CC</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <div class=\"checkbox pull-left d-md-none\">\r\n          <input type=\"checkbox\" value=\"1\" id=\"sendCC\">\r\n          <label for=\"sendCC\" class=\"hint-text d-none d-lg-block\">Send a <span class=\"text-complete\">Carbon Copy</span> CC to my Primary email address.</label>\r\n          <label for=\"sendCC\" class=\"hint-text d-md-none\">Send me a CC</label>\r\n        </div>\r\n        <button class=\"btn btn-complete pull-right\">\r\n          <i class=\"pg pg-save\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END COMPOSE EMAIL -->\r\n</div>  "

/***/ }),

/***/ "./src/.pages/email/compose/compose.component.scss":
/*!*********************************************************!*\
  !*** ./src/.pages/email/compose/compose.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2VtYWlsL2NvbXBvc2UvY29tcG9zZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/email/compose/compose.component.ts":
/*!*******************************************************!*\
  !*** ./src/.pages/email/compose/compose.component.ts ***!
  \*******************************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
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


var ComposeComponent = /** @class */ (function () {
    function ComposeComponent(toggler) {
        this.toggler = toggler;
        this.editorModules = {
            //https://github.com/KillerCodeMonkey/ngx-quill
            toolbar: [
                [{ 'header': [1, 2, 3, 4, false] }],
                ['bold', 'italic', 'underline'],
                ['link', 'image']
            ]
        };
    }
    ComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        this.timeout = setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
        this.toggler.setPageContainer("full-height");
        this.toggler.setContent("full-height");
    };
    ComposeComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    ComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'email-compose',
            template: __webpack_require__(/*! ./compose.component.html */ "./src/.pages/email/compose/compose.component.html"),
            styles: [__webpack_require__(/*! ./compose.component.scss */ "./src/.pages/email/compose/compose.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "./src/.pages/email/email.module.ts":
/*!******************************************!*\
  !*** ./src/.pages/email/email.module.ts ***!
  \******************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _email_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.routing */ "./src/.pages/email/email.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/.pages/@pages/components/shared.module.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _pages_components_tag_tag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@pages/components/tag/tag.module */ "./src/.pages/@pages/components/tag/tag.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/list.component */ "./src/.pages/email/list/list.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compose/compose.component */ "./src/.pages/email/compose/compose.component.ts");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email.service */ "./src/.pages/email/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Core Pages Layout Components







var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
                _pages_components_tag_tag_module__WEBPACK_IMPORTED_MODULE_9__["pgTagModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_email_routing__WEBPACK_IMPORTED_MODULE_6__["emailRoute"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(),
            ],
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_11__["EmailListComponent"], _compose_compose_component__WEBPACK_IMPORTED_MODULE_12__["ComposeComponent"]],
            providers: [_email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"]]
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ }),

/***/ "./src/.pages/email/email.routing.ts":
/*!*******************************************!*\
  !*** ./src/.pages/email/email.routing.ts ***!
  \*******************************************/
/*! exports provided: emailRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRoute", function() { return emailRoute; });
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose/compose.component */ "./src/.pages/email/compose/compose.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/.pages/email/list/list.component.ts");


var emailRoute = [
    {
        path: '',
        children: [{
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["EmailListComponent"],
                data: {
                    layoutOption: 'email'
                }
            }, {
                path: 'compose',
                component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_0__["ComposeComponent"],
                data: {
                    layoutOption: 'email'
                }
            },
            //Light Version
            {
                path: 'list/:type',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["EmailListComponent"],
                data: {
                    layoutOption: 'email'
                }
            }, {
                path: 'compose/:type',
                component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_0__["ComposeComponent"],
                data: {
                    layoutOption: 'email'
                }
            }]
    }
];


/***/ }),

/***/ "./src/.pages/email/email.service.ts":
/*!*******************************************!*\
  !*** ./src/.pages/email/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
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



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    // Get all emails from the API
    EmailService.prototype.getEmails = function () {
        return this.http.get('assets/data/email.json')
            .map(function (res) { return res.json(); });
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/.pages/email/list/list.component.html":
/*!***************************************************!*\
  !*** ./src/.pages/email/list/list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\r\n<pg-secondary-sidebar>\r\n  <div class=\" m-b-30 m-l-30 m-r-30 d-none d-sm-block\">\r\n      <a [routerLink]=\"['../compose']\" class=\"btn btn-complete btn-block btn-compose\">Compose</a>\r\n    </div>\r\n    <p class=\"menu-title\">BROWSE</p>\r\n    <ul class=\"main-menu\">\r\n      <li class=\"active\">\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"\">\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\r\n        </a>\r\n        <ul class=\"sub-menu no-padding\">\r\n          <li>\r\n            <a [routerLink]=\"['../list']\">\r\n              <span class=\"title\">Important</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['../list']\">\r\n              <span class=\"title\">Labeled</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['../list']\">\r\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\r\n          <span class=\"badge pull-right\">10</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\r\n    <ul class=\"sub-menu no-padding\">\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Documents</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Flagged</span>\r\n          <span class=\"badge pull-right\">5</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <span class=\"title\">Images</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n</pg-secondary-sidebar>\r\n<!-- END SECONDARY SIDEBAR MENU -->\r\n<div class=\"inner-content full-height\">\r\n    <div class=\"split-view\">\r\n      <!-- START SPLIT LIST VIEW -->\r\n      <div class=\"split-list\" [class.slideLeft]=\"isEmailSelected\">\r\n        <a class=\"list-refresh\" href=\"javascript:void(0)\"><i class=\"fa fa-refresh\"></i></a>\r\n\t      <pg-list-view-container  class=\"scrollable full-height\">\r\n\t\t\t\t\t\t<pg-list-item *ngFor=\"let emailGroup of emailList\">\r\n\t\t\t\t\t\t\t\t<ng-template #ItemHeading>\r\n\t\t\t\t\t\t\t\t\t\t{{emailGroup.group}}\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n                <li class=\"item padding-15\" *ngFor=\"let item of emailGroup.list\" (click)=\"onSelect(item)\"  [class.active]=\"item === selectedEmail\">\r\n                    <div class=\"thumbnail-wrapper d32 circular\"><img alt=\"\" height=\"40\" src=\"{{item.dp}}\" width=\"40\"></div>\r\n                    <div class=\"checkbox no-margin p-l-10\">\r\n                      <input id=\"emailcheckbox-0-{{item.id}}\" type=\"checkbox\" value=\"1\"> <label for=\"emailcheckbox-0-{{item.id}}\"></label>\r\n                    </div>\r\n                    <div class=\"inline m-l-15\">\r\n                      <p class=\"recipients no-margin hint-text small\">{{item.from}}</p>\r\n                      <p class=\"subject no-margin\">{{item.subject}}</p>\r\n                      <p class=\"body no-margin\" innerHTML=\"{{item.body}}\"></p>\r\n                    </div>\r\n                    <div class=\"datetime\">\r\n                      11:23am\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </li>\r\n\t\t\t\t\t\t</pg-list-item>\r\n\t\t\t\t</pg-list-view-container>\r\n\r\n      </div>\r\n      <!-- END SPLIT LIST VIEW -->\r\n      <!-- START SPLIT DETAILS -->\r\n      <div class=\"split-details\">\r\n        <ng-template #noResultBlock>\r\n          <div class=\"no-result\" >\r\n            <h1>No email has been selected</h1>\r\n          </div>\r\n        </ng-template>\r\n        <div *ngIf=\"selectedEmail; else noResultBlock\" class=\"email-content-wrapper\">\r\n          <div class=\"actions-wrapper menuclipper bg-master-lightest scrollable\">\r\n            <ul class=\"actions menuclipper-menu no-margin p-l-20 d-flex\">\r\n              <li class=\"d-lg-none d-xl-none\">\r\n                <a href=\"javascript:void(0;)\" (click)=\"onBack()\" class=\"split-list-toggle\"><i class=\"fa fa-angle-left\"></i> All Inboxes</a>\r\n              </li>\r\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\" class=\"text-info\">Reply</a>\r\n              </li>\r\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\">Reply all</a>\r\n              </li>\r\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\">Forward</a>\r\n              </li>\r\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\">Mark as read</a>\r\n              </li>\r\n              <li class=\"no-padding \"><a href=\"javascript:void(0)\" class=\"text-danger\">Delete</a>\r\n              </li>\r\n            </ul>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n          <div class=\"email-content\">\r\n            <div class=\"email-content-header\">\r\n              <div class=\"thumbnail-wrapper d48 circular bordered\">\r\n                <img width=\"40\" height=\"40\" alt=\"\" src=\"{{selectedEmail.dp}}\">\r\n              </div>\r\n              <div class=\"sender inline m-l-10\">\r\n                <p class=\"name no-margin bold\">\r\n                    {{selectedEmail.from}}\r\n                </p>\r\n                <p class=\"datetime no-margin\">\r\n                    {{selectedEmail.datetime}}\r\n                </p>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <div class=\"subject m-t-20 m-b-20 semi-bold\">\r\n                  {{selectedEmail.subject}}\r\n              </div>\r\n              <div class=\"fromto\">\r\n                <div class=\"pull-left\">\r\n                  <div class=\"btn-group dropdown-default\" dropdown>\r\n                    <a class=\"btn dropdown-toggle btn-small btn-rounded\" dropdownToggle>{{selectedEmail.from}} </a>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Friend</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Report</a>\r\n                    </div>\r\n                  </div>\r\n                  <label class=\"inline\">\r\n                    <span class=\"muted\">&nbsp;&nbsp;to&nbsp;</span>\r\n                    <span class=\" small-text\">johnsmith@skyace.com</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"email-content-body m-t-20\" innerHTML=\"{{selectedEmail.body}}\">\r\n            </div>\r\n            <div class=\"wysiwyg5-wrapper b-a b-grey m-t-30\">\r\n              <quill-editor [style]=\"{height: '200px'}\" placeholder=\"Reply\" [modules]=\"editorModules\">\r\n              </quill-editor>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- END SPLIT DETAILS -->\r\n      <!-- START COMPOSE BUTTON FOR TABS -->\r\n      <div class=\"compose-wrapper d-md-none\">\r\n        <a class=\"compose-email text-info pull-right m-r-10 m-t-10\" [routerLink]=\"['../compose']\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n      </div>\r\n      <!-- END COMPOSE BUTTON -->\r\n    </div>\r\n</div>  \r\n<!-- END APP -->"

/***/ }),

/***/ "./src/.pages/email/list/list.component.scss":
/*!***************************************************!*\
  !*** ./src/.pages/email/list/list.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL2VtYWlsL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/email/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/.pages/email/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: EmailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListComponent", function() { return EmailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/.pages/@pages/services/toggler.service.ts");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email.service */ "./src/.pages/email/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailListComponent = /** @class */ (function () {
    function EmailListComponent(_service, http, toggler) {
        this._service = _service;
        this.http = http;
        this.toggler = toggler;
        this.emailList = [];
        this.isMobile = pg.getUserAgent() === 'mobile';
        this.config = {};
        this.editorModules = {
            //https://github.com/KillerCodeMonkey/ngx-quill
            toolbar: [
                [{ 'header': [1, 2, 3, 4, false] }],
                ['bold', 'italic', 'underline'],
                ['link', 'image']
            ]
        };
        this.isEmailSelected = false;
    }
    EmailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.subscription = this._service.getEmails().subscribe(function (list) {
            _this.emailList = list.emails;
        });
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        this.timeout = setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
        this.toggler.setPageContainer("full-height");
        this.toggler.setContent("full-height");
    };
    EmailListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        clearTimeout(this.timeout);
    };
    EmailListComponent.prototype.onSelect = function (item) {
        this.selectedEmail = item;
        this.isEmailSelected = true;
    };
    EmailListComponent.prototype.onBack = function () {
        this.isEmailSelected = false;
    };
    EmailListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'email-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/.pages/email/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/.pages/email/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"]])
    ], EmailListComponent);
    return EmailListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=email-email-module.js.map