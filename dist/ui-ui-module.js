(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-ui-module"],{

/***/ "./src/.pages/ui/progresspage/progresspage.component.html":
/*!****************************************************************!*\
  !*** ./src/.pages/ui/progresspage/progresspage.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- START JUMBOTRON -->\r\n   <div class=\"jumbotron\">\r\n   <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\r\n      <div class=\"inner\" pg-parallax>\r\n        <!-- START BREADCRUMB -->\r\n        <pg-breadcrumb>\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\r\n            <li class=\"breadcrumb-item active\">Progress bars</li>\r\n          </ol>\r\n        </pg-breadcrumb>\r\n        <!-- END BREADCRUMB --> \r\n        <div class=\"m-b-20\">\r\n          <div class=\"row m-0\">\r\n            <div class=\"col-xl-5 col-lg-6\">\r\n              <!-- START card -->\r\n              <div class=\"card card-transparent\">\r\n                <div class=\"card-header \">\r\n                  <div class=\"card-title\">Getting started\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <h3>Custom built for anyone, anywhere.</h3>\r\n                  <p>As always, in keeping with our policy of making UX easier and more user-friendly, we have customized this feature with a lightwieight SVG indicator. Also this is highly adaptable and offers a range of progress bar options to suit your preference. </p>\r\n                  <br>\r\n                  <div>\r\n                    <div class=\"profile-img-wrapper m-t-5 inline\">\r\n                      <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"Avatar\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\r\n                      <div class=\"chat-status available\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"inline m-l-10\">\r\n                      <p class=\"small hint-text m-t-5\">VIA senior product manage\r\n                        <br> for UI/UX at REVOX</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- END card -->\r\n            </div>\r\n            <div class=\"col-xl-7 col-lg-6 bg-white\">\r\n              <!-- START card -->\r\n              <div class=\"full-height d-flex justify-content-center align-items-center\">\r\n                <div class=\"card-body text-center\">\r\n                  <img class=\"image-responsive-height demo-mw-50\" src=\"assets/img/demo/progress.svg\" alt=\"Progress\">\r\n                </div>\r\n              </div>\r\n              <!-- END card -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n   </pg-container>\r\n  </div>\r\n  <!-- END JUMBOTRON -->\r\n  <!-- START CONTAINER FLUID -->\r\n  <pg-container>\r\n    <!-- START card -->\r\n    <div class=\"card card-transparent\">\r\n      <div class=\"card-header \">\r\n        <div class=\"card-title\">Linear progress\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <p>A progress bar is a visual way of showing how much of a curtain task has being completed. We made it light weighted and simple as possible just for a better user experience.A progress can be indeterminate or determinate according to the length of a task. </p>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <p class=\"small hint-text\">Indeterminate progress</p>\r\n                <pg-progress type=\"bar\" indeterminate=\"true\" thick=\"true\"></pg-progress>\r\n                <br>\r\n                <p class=\"small hint-text\">Determinate progress</p>\r\n                <pg-progress type=\"bar\" value=\"45\" thick=\"true\"></pg-progress>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"card card-default\">\r\n              <div class=\"card-body text-center no-padding\">\r\n                <img alt=\"Determinate bar\" src=\"assets/img/demo/determinate_bar.gif\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"card card-default\">\r\n              <div class=\"card-body text-center no-padding\">\r\n                <img alt=\"Indeterminate bar\" src=\"assets/img/demo/indeterminate_bar.gif\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END card -->\r\n  </pg-container>\r\n  <!-- END CONTAINER FLUID -->\r\n  <!-- START CONTAINER FLUID -->\r\n  <pg-container>\r\n    <!-- START card -->\r\n    <div class=\"card card-transparent\">\r\n      <div class=\"card-header \">\r\n        <div class=\"card-title\">Linear progress options\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <h5>Indeterminate progress bar</h5>\r\n            <p>This progress is used when the length of the task is unknown. Thus shows a repetitive cycle. With the use of a scalable vector graphic we made it light weighted and simple for a better UX.\r\n            </p>\r\n            <h5>Determinate progress bar</h5>\r\n            <p>This progress is used when the length of the task can be measured and visually shown.Thus for linear progress determinate is used frequently. To use simply use .progress-bar-determinate</p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h5>Colour options</h5>\r\n            <p>You can also apply any colour suited according to the nature of the task. </p>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <pg-progress type=\"bar\" color=\"primary\" value=\"35\" thick=\"true\"></pg-progress>\r\n                <pg-progress type=\"bar\" color=\"complete\" value=\"45\" thick=\"true\"></pg-progress>\r\n                <pg-progress type=\"bar\" color=\"success\" value=\"55\" thick=\"true\"></pg-progress>\r\n                <pg-progress type=\"bar\" color=\"warning\" value=\"65\" thick=\"true\"></pg-progress>\r\n                <pg-progress type=\"bar\" color=\"danger\" value=\"75\" thick=\"true\"></pg-progress>\r\n              </div>\r\n            </div>\r\n            <p class=\"small hint-text\">All the colours included in pages color pallete is applicable.</p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h5>Bar sizes</h5>\r\n            <p>You can also use a thinner version of the default progress by simple changing thick=\"falses\" </p>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                  <pg-progress type=\"bar\" color=\"success\" value=\"45\"></pg-progress>\r\n                  <pg-progress type=\"bar\" color=\"success\" value=\"45\" thick=\"true\"></pg-progress>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END card -->\r\n  </pg-container>\r\n  <!-- END CONTAINER FLUID -->\r\n  <!-- START CONTAINER FLUID -->\r\n  <pg-container>\r\n    <!-- START card -->\r\n    <div class=\"card card-transparent\">\r\n      <div class=\"card-header \">\r\n        <div class=\"card-title\">Circular progress\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <p>Circular progress is frequently used to show a repetitive cycle for its shape. But breaking convention a circular progress can be indeterminate or determinate according to a task.We developed it mainly for a better UX. </p>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 text-center p-t-45\">\r\n                <pg-progress type=\"circle\" indeterminate=\"true\" class=\"\"></pg-progress>\r\n                <br>\r\n                <p class=\"small hint-text\">Indeterminate Progress</p>\r\n              </div>\r\n              <div class=\"col-md-6 text-center\">\r\n                <div class=\"m-t-45\">\r\n                  <pg-progress type=\"circle\" value=\"40\" ></pg-progress>\r\n                </div>\r\n                <br>\r\n                <p class=\"small hint-text\">Determinate Progress</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"card card-default\">\r\n              <div class=\"card-body text-center no-padding\">\r\n                <img alt=\"Determinate circle\" src=\"assets/img/demo/determinate_circle.gif\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"card card-default\">\r\n              <div class=\"card-body text-center no-padding\">\r\n                <img alt=\"Indeterminate circle\" src=\"assets/img/demo/indeterminate_circle.gif\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END card -->\r\n  </pg-container>\r\n  <!-- END CONTAINER FLUID -->\r\n  <!-- START CONTAINER FLUID -->\r\n  <pg-container>\r\n    <!-- START card -->\r\n    <div class=\"card card-transparent\">\r\n      <div class=\"card-header \">\r\n        <div class=\"card-title\">Circular progress options\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <h5>Indeterminate progress</h5>\r\n            <p>This is mostly used for its repetitive circular shape for tasks which the time cannot be measured. With the use of SVG the size can be scaled to any preferred amount by the user without any quality loss. We developed a custom animation with different timescales for a better user experience. </p>\r\n            <br>\r\n            <h5>Determinate progress</h5>\r\n            <p>Similar to the determinate progress bar, circular progress can also be used to show the length of a task. The determinate circular progress indicator can be initialised without writing a single line of Javascript code. </p>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h5>Color options</h5>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\r\n                <pg-progress type=\"circle\" color=\"complete\" value=\"75\" ></pg-progress>\r\n              </div>\r\n              <div class=\"col-md-8 p-t-10\">\r\n                <p>Complete Progress bar color</p>\r\n                <p class=\"small hint-text\">\r\n                  Set data attribute <code>color</code> to \"complete\"\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\r\n                <pg-progress type=\"circle\" color=\"primary\" value=\"75\"></pg-progress>\r\n              </div>\r\n              <div class=\"col-md-8 p-t-10\">\r\n                <p>Complete Progress bar color</p>\r\n                <p class=\"small hint-text\">\r\n                  Set data attribute <code>color</code> to \"primary\"\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <p class=\"small hint-text\">All the colours included in pages color pallete is applicable</p>\r\n            <br>\r\n            <button class=\"btn btn-success\">See color palette</button>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h5>Circular progress sizes</h5>\r\n            <p>In circular progress you can change the stroke width</p>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\r\n                <pg-progress type=\"circle\" value=\"75\"></pg-progress>\r\n              </div>\r\n              <div class=\"col-md-8 p-t-10\">\r\n                <p class=\"small hint-text\">Default progress with a stroke of 3px</p>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 text-center p-t-15 p-b-10\">\r\n                  <pg-progress type=\"circle\" value=\"75\" thick=\"true\"></pg-progress>\r\n              </div>\r\n              <div class=\"col-md-8 p-t-10\">\r\n                <p class=\"small hint-text\">Progress with a stroke of 3px</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END card -->\r\n  </pg-container>\r\n  <!-- END CONTAINER FLUID -->  "

/***/ }),

/***/ "./src/.pages/ui/progresspage/progresspage.component.scss":
/*!****************************************************************!*\
  !*** ./src/.pages/ui/progresspage/progresspage.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL3VpL3Byb2dyZXNzcGFnZS9wcm9ncmVzc3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/.pages/ui/progresspage/progresspage.component.ts":
/*!**************************************************************!*\
  !*** ./src/.pages/ui/progresspage/progresspage.component.ts ***!
  \**************************************************************/
/*! exports provided: ProgresspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresspageComponent", function() { return ProgresspageComponent; });
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

var ProgresspageComponent = /** @class */ (function () {
    function ProgresspageComponent() {
    }
    ProgresspageComponent.prototype.ngOnInit = function () {
    };
    ProgresspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progresspage',
            template: __webpack_require__(/*! ./progresspage.component.html */ "./src/.pages/ui/progresspage/progresspage.component.html"),
            styles: [__webpack_require__(/*! ./progresspage.component.scss */ "./src/.pages/ui/progresspage/progresspage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgresspageComponent);
    return ProgresspageComponent;
}());



/***/ }),

/***/ "./src/.pages/ui/sliderpage/sliderpage.component.html":
/*!************************************************************!*\
  !*** ./src/.pages/ui/sliderpage/sliderpage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "           <!-- START JUMBOTRON -->\r\n           <div class=\"jumbotron\">\r\n              <pg-container extraHorizontalClass=\"p-l-0 p-r-0\">\r\n                <div class=\"inner\" pg-parallax>\r\n                  <!-- START BREADCRUMB -->\r\n                  <pg-breadcrumb>\r\n                    <ol class=\"breadcrumb\">\r\n                      <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">UI Elements</a></li>\r\n                      <li class=\"breadcrumb-item active\">Sliders</li>\r\n                    </ol>\r\n                  </pg-breadcrumb>\r\n                  <!-- END BREADCRUMB --> \r\n                  <div class=\"container-md-height m-b-20\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xl-7 col-lg-6 bg-white\">\r\n                        <!-- START card -->\r\n                        <div class=\"full-height\">\r\n                          <div class=\"card-body text-center\">\r\n                            <img class=\"image-responsive-height demo-mw-300\" src=\"assets/img/demo/slider_hero.gif\" alt=\"\">\r\n                          </div>\r\n                        </div>\r\n                        <!-- END card -->\r\n                      </div>\r\n                      <div class=\"col-xl-5 col-lg-6\">\r\n                        <!-- START card -->\r\n                        <div class=\"card card-transparent\">\r\n                          <div class=\"card-header \">\r\n                            <div class=\"card-title\">Getting started\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <h3>Sometimes small things matter the most in life!</h3>\r\n                            <p>A slider, also known as a track bar, allows users to set or adjust a value. When the user changes the value, it does not change the format of the interface or other info on the screen.</p>\r\n                            <br>\r\n                            <div>\r\n                              <div class=\"profile-img-wrapper m-t-5 inline\">\r\n                                <img width=\"35\" height=\"35\" src=\"assets/img/profiles/avatar_small.jpg\" alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar_small.jpg\" src2x=\"assets/img/profiles/avatar_small2x.jpg\">\r\n                                <div class=\"chat-status available\">\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"inline m-l-10\">\r\n                                <p class=\"small hint-text m-t-5\">VIA senior product manage\r\n                                  <br> for UI/UX at REVOX</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- END card -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </pg-container>\r\n            </div>\r\n            <!-- END JUMBOTRON -->\r\n            <!-- START CONTAINER FLUID -->\r\n            <pg-container>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                  <!-- START card -->\r\n                  <div class=\"card card-transparent\">\r\n                    <div class=\"card-header \">\r\n                      <div class=\"card-title\">Pages slider\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <p class=\"m-b-20\">Pages is a range slider without bloat. It offers a ton off features, and it is as small, lightweight and minimal as possible, which is great for mobile use on the many supported devices.\r\n                        <br>\r\n                        <br>\r\n                      </p>\r\n                      <div class=\"col-lg-8 disable-hover-scale no-padding m-t-20\">\r\n                        <div class=\"bg-master m-b-10\" id=\"slider-tooltips\"></div>\r\n\r\n                        <pg-slider [DefaultValue]=\"30\" Tooltip=\"true\" TooltipForceVisiblity=\"true\"></pg-slider>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- END card -->\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <!-- START card -->\r\n                      <div class=\"card card-transparent\">\r\n                        <div class=\"card-header \">\r\n                          <div class=\"card-title\">Responsive All Around\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <p>Pages works with pretty much any device, mouse, touchscreen or both, and it'll work beautifully in responsive designs.</p>\r\n                          <br>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <a href=\"https://docs.pages.revox.io/v/angular/ui-components/sliders\" target=\"_blank\" class=\"btn btn-complete\">See Plugin</a>\r\n                              <p class=\"small hint-text m-t-20 col-middle\">\r\n                                see the plugin for uiSlider\r\n                                <br> https://docs.pages.revox.io/v/angular/ui-components/sliders\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- END card -->\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <!-- START card -->\r\n                      <div class=\"card card-transparent\">\r\n                        <div class=\"card-header \">\r\n                          <div class=\"card-title\">Compatible with all browsers\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <p>Pages Sliders supports IE9 and up, and of course the latest versions of the 'evergreen' browsers: Chrome, Safari, Firefox and Opera.</p>\r\n                        </div>\r\n                      </div>\r\n                      <!-- END card -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- START card -->\r\n              <div class=\"card card-transparent\">\r\n                <div class=\"card-header \">\r\n                  <div class=\"card-title\">Slider options\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"card card-transparent\">\r\n                        <div class=\"card-body no-top-padding\">\r\n                          <h5>Connect</h5>\r\n                          <p>Basic slider with different color options, use of the below classes to quickly create a styled slider. Uses native boostrap colors scheme classes\r\n                          </p>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-5 col-xl-5 padding-20\">\r\n                              <pg-slider [DefaultValue]=\"90\" ></pg-slider>\r\n                              <br>\r\n                              <pg-slider [DefaultValue]=\"70\" [Color]=\"'danger'\" ></pg-slider>\r\n                              <br>\r\n                              <pg-slider [DefaultValue]=\"20\" [Color]=\"'warning'\" ></pg-slider>\r\n                              <br>\r\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'success'\" ></pg-slider>\r\n                              <br>\r\n                              <pg-slider [DefaultValue]=\"30\" [Color]=\"'complete'\" ></pg-slider>\r\n                              <br>\r\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'primary'\" ></pg-slider>\r\n                              <br>\r\n                            </div>\r\n                            <div class=\"col-lg-5\">\r\n                              <p class=\"small hint-text\">All the colours included in pages color pallete is applicable to the default pages slider.</p>\r\n                              <a href=\"javascript:void(0)\" class=\"btn btn-warning\">See color Pallete</a>\r\n                            </div>\r\n                          </div>\r\n                          <br>\r\n                          <p>The slider variations are made by the ciours included as the base clours excluding the menue base color.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card card-transparent\">\r\n                        <div class=\"card-body no-top-padding\">\r\n                          <h5>Limit</h5>\r\n                          <p>The limit option is the oposite of the margin option, limiting the maximum distance between two handles. As with the margin option, the limit option can only be used on linear sliders.</p>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-5 padding-20\">\r\n                              <pg-slider [Color]=\"'success'\" [(ngModel)]=\"value2\" [Min]=\"1\" [Max]=\"20\" ></pg-slider>\r\n                              <div class=\"m-t-10\">{{value2}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-5\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card card-transparent\">\r\n                        <div class=\"card-body no-top-padding\">\r\n                          <h5>Step</h5>\r\n                          <p>By default, the slider slides fluently. In order to make the handles jump between intervals, you can use this option. The step option is relative to the values provided to range.\r\n                          </p>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-5 padding-20\">\r\n                                <pg-slider Range [Color]=\"'danger'\" [(ngModel)]=\"rangeValue\" [Step]=\"10\" [DefaultValue]=\"[20, 50]\"></pg-slider>\r\n                                <div class=\"m-t-10\">{{rangeValue}}</div>\r\n                            </div>\r\n                            <div class=\"col-lg-5\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"card card-transparent\">\r\n                        <div class=\"card-body no-top-padding\">\r\n                          <h5>Connect</h5>\r\n                          <p>The connect setting can be used to control the bar between the handles, or the edges of the slider. Use \"lower\" to connect to the lower side, or \"upper\" to connect to the upper side. Setting true sets the bar between the handles.\r\n                          </p>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-5 padding-20\">\r\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'primary'\" [(ngModel)]=\"value1\"></pg-slider>\r\n                              <br>\r\n                              <pg-slider [DefaultValue]=\"50\" [Color]=\"'complete'\" [(ngModel)]=\"value1\"></pg-slider>\r\n                            </div>\r\n                            <div class=\"col-lg-5 d-flex align-items-center\">\r\n                                <div class=\"form-group\" style=\"width:50px\">\r\n                                  <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"value1\">\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card card-transparent\">\r\n                        <div class=\"card-body no-top-padding\">\r\n                          <h5>Labeled</h5>\r\n                          <p>Option to segment and label the sliders with specific positions. You will have the ability to step to segment or free form slide as show in the examples.\r\n                          </p>\r\n                          <div class=\"m-b-15 p-b-10\">\r\n                              <p>Enable stepping with markers by adding <code>Step</code> attribute</p> \r\n                              <div class=\"col-lg-8 p-t-15\">\r\n                              <pg-slider [Marks]=\"marks\" [Step]=\"10\" [DefaultValue]=\"37\" [Color]=\"'success'\"></pg-slider>\r\n                              </div>\r\n                          </div>\r\n\r\n                          <div class=\"m-b-15 p-b-10\">\r\n                              <p>Allowing snap to markers can be adding <code>Dots</code> attribute</p> \r\n                              <div class=\"col-lg-8 p-t-15\">\r\n                              <pg-slider [Marks]=\"marks\" Dots [DefaultValue]=\"26\" [Color]=\"'danger'\"></pg-slider>\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      \r\n                      <div class=\"card card-transparent\">\r\n                          <div class=\"card-body no-top-padding\">\r\n                            <h5>Orientation</h5>\r\n                            <p>The orientation setting can be used to set the slider to \"vertical\" or \"horizontal\".Set dimensions! Vertical sliders don't assume a default height, so you'll need to set one. You can use any unit you want, including % or px.\r\n                            </p>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-5 padding-20 d-flex\">\r\n                                <div [ngStyle]=\"{ height: '150px' }\">\r\n                                  <pg-slider Vertical [DefaultValue]=\"30\"></pg-slider>\r\n                                </div>\r\n                                <div [ngStyle]=\"{ height: '150px' }\">\r\n                                    <pg-slider Vertical Range [Color]=\"'danger'\" [Step]=\"10\" [DefaultValue]=\"[20, 50]\"></pg-slider>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-lg-5\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </pg-container>\r\n            <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/.pages/ui/sliderpage/sliderpage.component.scss":
/*!************************************************************!*\
  !*** ./src/.pages/ui/sliderpage/sliderpage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvLnBhZ2VzL3VpL3NsaWRlcnBhZ2Uvc2xpZGVycGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/.pages/ui/sliderpage/sliderpage.component.ts":
/*!**********************************************************!*\
  !*** ./src/.pages/ui/sliderpage/sliderpage.component.ts ***!
  \**********************************************************/
/*! exports provided: SliderpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderpageComponent", function() { return SliderpageComponent; });
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

var SliderpageComponent = /** @class */ (function () {
    function SliderpageComponent() {
        this.value1 = 20;
        this.value2 = 10;
        this.marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: '100°C'
        };
    }
    SliderpageComponent.prototype.ngOnInit = function () {
    };
    SliderpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slider-page',
            template: __webpack_require__(/*! ./sliderpage.component.html */ "./src/.pages/ui/sliderpage/sliderpage.component.html"),
            styles: [__webpack_require__(/*! ./sliderpage.component.scss */ "./src/.pages/ui/sliderpage/sliderpage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderpageComponent);
    return SliderpageComponent;
}());



/***/ }),

/***/ "./src/.pages/ui/ui.module.ts":
/*!************************************!*\
  !*** ./src/.pages/ui/ui.module.ts ***!
  \************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _ui_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui.routing */ "./src/.pages/ui/ui.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/.pages/@pages/components/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/index.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@pages/components/tabs/tabs.module */ "./src/.pages/@pages/components/tabs/tabs.module.ts");
/* harmony import */ var _pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@pages/components/message/message.module */ "./src/.pages/@pages/components/message/message.module.ts");
/* harmony import */ var _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@pages/components/message/message.service */ "./src/.pages/@pages/components/message/message.service.ts");
/* harmony import */ var _pages_components_collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@pages/components/collapse */ "./src/.pages/@pages/components/collapse/index.ts");
/* harmony import */ var _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@pages/components/progress/progress.module */ "./src/.pages/@pages/components/progress/progress.module.ts");
/* harmony import */ var _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@pages/components/slider/slider.module */ "./src/.pages/@pages/components/slider/slider.module.ts");
/* harmony import */ var _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@pages/components/cs-select/select.module */ "./src/.pages/@pages/components/cs-select/select.module.ts");
/* harmony import */ var _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./typopage/typopage.component */ "./src/.pages/ui/typopage/typopage.component.ts");
/* harmony import */ var _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./iconspage/iconspage.component */ "./src/.pages/ui/iconspage/iconspage.component.ts");
/* harmony import */ var _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notificationspage/notificationspage.component */ "./src/.pages/ui/notificationspage/notificationspage.component.ts");
/* harmony import */ var _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modalspage/modalspage.component */ "./src/.pages/ui/modalspage/modalspage.component.ts");
/* harmony import */ var _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./progresspage/progresspage.component */ "./src/.pages/ui/progresspage/progresspage.component.ts");
/* harmony import */ var _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tabspage/tabspage.component */ "./src/.pages/ui/tabspage/tabspage.component.ts");
/* harmony import */ var _buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./buttonspage/buttonspage.component */ "./src/.pages/ui/buttonspage/buttonspage.component.ts");
/* harmony import */ var _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./colorspage/colorspage.component */ "./src/.pages/ui/colorspage/colorspage.component.ts");
/* harmony import */ var _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sliderpage/sliderpage.component */ "./src/.pages/ui/sliderpage/sliderpage.component.ts");
/* harmony import */ var _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./treeviewpage/treeviewpage.component */ "./src/.pages/ui/treeviewpage/treeviewpage.component.ts");
/* harmony import */ var _iconspage_icons_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./iconspage/icons.service */ "./src/.pages/ui/iconspage/icons.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Dependencies





//Requires Forms to be imported for Checkbox buttons



//Core Pages Layout Components

//Bootstrap Components by ngx-bootstrap






//Thirdparty Treeview component

//Pages Components by ace







//Sample Demo pages










//Services

var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_ui_routing__WEBPACK_IMPORTED_MODULE_7__["uiRoute"]),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                _pages_components_collapse__WEBPACK_IMPORTED_MODULE_15__["pgCollapseModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_16__["ProgressModule"].forRoot(),
                _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_12__["pgTabsModule"],
                _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_18__["pgSelectfx"],
                _pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_13__["MessageModule"],
                _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_17__["pgSliderModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_11__["TreeModule"]
            ],
            declarations: [_buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_25__["ButtonspageComponent"],
                _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_26__["ColorspageComponent"],
                _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_19__["TypopageComponent"],
                _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_20__["IconspageComponent"],
                _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_21__["NotificationspageComponent"],
                _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_22__["ModalspageComponent"],
                _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_23__["ProgresspageComponent"],
                _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_24__["TabspageComponent"],
                _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_27__["SliderpageComponent"],
                _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_28__["TreeviewpageComponent"]],
            providers: [_iconspage_icons_service__WEBPACK_IMPORTED_MODULE_29__["IconsService"], _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/.pages/ui/ui.routing.ts":
/*!*************************************!*\
  !*** ./src/.pages/ui/ui.routing.ts ***!
  \*************************************/
/*! exports provided: uiRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiRoute", function() { return uiRoute; });
/* harmony import */ var _buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonspage/buttonspage.component */ "./src/.pages/ui/buttonspage/buttonspage.component.ts");
/* harmony import */ var _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorspage/colorspage.component */ "./src/.pages/ui/colorspage/colorspage.component.ts");
/* harmony import */ var _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typopage/typopage.component */ "./src/.pages/ui/typopage/typopage.component.ts");
/* harmony import */ var _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconspage/iconspage.component */ "./src/.pages/ui/iconspage/iconspage.component.ts");
/* harmony import */ var _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notificationspage/notificationspage.component */ "./src/.pages/ui/notificationspage/notificationspage.component.ts");
/* harmony import */ var _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modalspage/modalspage.component */ "./src/.pages/ui/modalspage/modalspage.component.ts");
/* harmony import */ var _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progresspage/progresspage.component */ "./src/.pages/ui/progresspage/progresspage.component.ts");
/* harmony import */ var _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabspage/tabspage.component */ "./src/.pages/ui/tabspage/tabspage.component.ts");
/* harmony import */ var _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliderpage/sliderpage.component */ "./src/.pages/ui/sliderpage/sliderpage.component.ts");
/* harmony import */ var _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treeviewpage/treeviewpage.component */ "./src/.pages/ui/treeviewpage/treeviewpage.component.ts");
//Sample Demo pages










var uiRoute = [
    {
        path: '',
        children: [{
                path: 'color',
                component: _colorspage_colorspage_component__WEBPACK_IMPORTED_MODULE_1__["ColorspageComponent"],
                data: {
                    title: 'color'
                }
            }, {
                path: 'typography',
                component: _typopage_typopage_component__WEBPACK_IMPORTED_MODULE_2__["TypopageComponent"],
                data: {
                    title: 'typography'
                }
            }, {
                path: 'icons',
                component: _iconspage_iconspage_component__WEBPACK_IMPORTED_MODULE_3__["IconspageComponent"],
                data: {
                    title: 'icons'
                }
            }, {
                path: 'buttons',
                component: _buttonspage_buttonspage_component__WEBPACK_IMPORTED_MODULE_0__["ButtonspageComponent"],
                data: {
                    title: 'buttons'
                }
            }, {
                path: 'notifications',
                component: _notificationspage_notificationspage_component__WEBPACK_IMPORTED_MODULE_4__["NotificationspageComponent"],
                data: {
                    title: 'notification'
                }
            }, {
                path: 'modal',
                component: _modalspage_modalspage_component__WEBPACK_IMPORTED_MODULE_5__["ModalspageComponent"],
                data: {
                    title: 'modals'
                }
            }, {
                path: 'progress',
                component: _progresspage_progresspage_component__WEBPACK_IMPORTED_MODULE_6__["ProgresspageComponent"],
                data: {
                    title: 'progress'
                }
            }, {
                path: 'tabs',
                component: _tabspage_tabspage_component__WEBPACK_IMPORTED_MODULE_7__["TabspageComponent"],
                data: {
                    title: 'tabs & accordians'
                }
            }, {
                path: 'sliders',
                component: _sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_8__["SliderpageComponent"],
                data: {
                    title: 'sliders'
                }
            }, {
                path: 'tree',
                component: _treeviewpage_treeviewpage_component__WEBPACK_IMPORTED_MODULE_9__["TreeviewpageComponent"],
                data: {
                    title: 'treeview'
                }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=ui-ui-module.js.map