(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/shared/app-component-base.ts":
/*!******************************************!*\
  !*** ./src/shared/app-component-base.ts ***!
  \******************************************/
/*! exports provided: AppComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentBase", function() { return AppComponentBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/auth/permission-checker.service */ "./node_modules/abp-ng2-module/dist/src/auth/permission-checker.service.js");
/* harmony import */ var _abp_features_feature_checker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/features/feature-checker.service */ "./node_modules/abp-ng2-module/dist/src/features/feature-checker.service.js");
/* harmony import */ var _abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/notify/notify.service */ "./node_modules/abp-ng2-module/dist/src/notify/notify.service.js");
/* harmony import */ var _abp_settings_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/settings/setting.service */ "./node_modules/abp-ng2-module/dist/src/settings/setting.service.js");
/* harmony import */ var _abp_message_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abp/message/message.service */ "./node_modules/abp-ng2-module/dist/src/message/message.service.js");
/* harmony import */ var _abp_multi_tenancy_abp_multi_tenancy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/multi-tenancy/abp-multi-tenancy.service */ "./node_modules/abp-ng2-module/dist/src/multi-tenancy/abp-multi-tenancy.service.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/auth/auth.service */ "./src/shared/auth/auth.service.ts");









var AppComponentBase = /** @class */ (function () {
    function AppComponentBase(injector) {
        this.localizationSourceName = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].localization.defaultLocalizationSourceName;
        this.permission = injector.get(_abp_auth_permission_checker_service__WEBPACK_IMPORTED_MODULE_2__["PermissionCheckerService"]);
        this.feature = injector.get(_abp_features_feature_checker_service__WEBPACK_IMPORTED_MODULE_3__["FeatureCheckerService"]);
        this.notify = injector.get(_abp_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]);
        this.setting = injector.get(_abp_settings_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]);
        this.message = injector.get(_abp_message_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]);
        this.multiTenancy = injector.get(_abp_multi_tenancy_abp_multi_tenancy_service__WEBPACK_IMPORTED_MODULE_7__["AbpMultiTenancyService"]);
        this.elementRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        this.authService = injector.get(_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]);
    }
    // l(key: string, ...args: any[]): string {
    //     let localizedText = this.localization.localize(key, this.localizationSourceName);
    //     if (!localizedText) {
    //         localizedText = key;
    //     }
    //     if (!args || !args.length) {
    //         return localizedText;
    //     }
    //     args.unshift(localizedText);
    //     return abp.utils.formatString.apply(this, args);
    // }
    AppComponentBase.prototype.isGranted = function (permissionName) {
        return this.permission.isGranted(permissionName);
    };
    return AppComponentBase;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map