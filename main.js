(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+0I5":
/*!**************************************************************!*\
  !*** ./src/app/providers/testimonial/testimonial.service.ts ***!
  \**************************************************************/
/*! exports provided: TestimonialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialService", function() { return TestimonialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestimonialService = /** @class */ (function () {
    function TestimonialService(http) {
        var _this = this;
        this.http = http;
        this.getTestimonialData = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/home/viewtestimonial';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getAlltestimonial = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/home/alltestimonial';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getMatchDetails = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/match/frontview';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
    }
    TestimonialService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TestimonialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestimonialService);
    return TestimonialService;
}());



/***/ }),

/***/ "+GGL":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "vG3S");
/* harmony import */ var _nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleoicons.component.scss */ "IBmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nucleoicons',
            template: _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/pixtar/pixtar-web/src/main.ts */"zUnb");


/***/ }),

/***/ "0CVK":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/culture/culture.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>culture works!</p>\n");

/***/ }),

/***/ "0Inq":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1E4i":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n");

/***/ }),

/***/ "1RpN":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div>\n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "4R/m":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "4Wxn":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5TFM":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"vh-100\">\n<div class=\"container\">\n  <div class=\"banner vh-100\">\n    <div class=\"d-flex flex-row justify-content-center align-items-center h-100\">\n      <h1>Hey, we’re PIXTAR </h1>\n      <img src=\"../../assets/img/about-us/hand.png\" alt=\"\" width=\"86\" height=\"99\">\n    </div>\n    <div class=\"d-flex flex-column justify-content-center align-items-center  bottom-block\">\n   <p>  Research <span></span> Strategy Design</p>  \n  <p>  Development Delivery Support</p> \n    </div>\n  </div>\n</div>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"col-lg-8 offset-lg-2\">\n      <div class=\"img-block d-flex justify-content-center\">\n        <img src=\"../../assets/img/about-us/pixtar-diagram-1-wiggle.gif\" alt=\"\">\n        <div class=\"content d-flex flex-column position-absolute start-31\">\n          <h1>Research</h1>\n          <p>We start every project by reviewing and analyzing industry Competitor, relevant projects and sustainable\n            references. Feedback to the client for continual input for both parties.</p>\n        </div>\n      </div>\n      <div class=\"img-block d-flex justify-content-center\">\n        <div class=\"content d-flex flex-column position-absolute start-31\">\n          <h1>Research</h1>\n          <p>We start every project by reviewing and analyzing industry Competitor, relevant projects and sustainable\n            references. Feedback to the client for continual input for both parties.</p>\n        </div>\n        <img src=\"../../assets/img/about-us/pixtar-diagram-2.gif\" alt=\"\">\n      </div>\n\n\n      <div class=\"img-block d-flex justify-content-center\">\n        <img src=\"../../assets/img/about-us/pixtar-diagram-3.gif\" alt=\"\">\n        <div class=\"content d-flex flex-column position-absolute start-31\">\n          <h1>Research</h1>\n          <p>We start every project by reviewing and analyzing industry Competitor, relevant projects and sustainable\n            references. Feedback to the client for continual input for both parties.</p>\n        </div>\n      </div>\n\n      <div class=\"img-block d-flex justify-content-center\">\n        <div class=\"content d-flex flex-column position-absolute start-31\">\n          <h1>Research</h1>\n          <p>We start every project by reviewing and analyzing industry Competitor, relevant projects and sustainable\n            references. Feedback to the client for continual input for both parties.</p>\n        </div>\n        <img src=\"../../assets/img/about-us/pixtar-diagram-4.gif\" alt=\"\">\n      </div>\n\n      <div class=\"img-block d-flex justify-content-center\">\n        <img src=\"../../assets/img/about-us/pixtar-diagram-5.gif\" alt=\"\">\n        <div class=\"content d-flex flex-column position-absolute start-31\">\n          <h1>Research</h1>\n          <p>We start every project by reviewing and analyzing industry Competitor, relevant projects and sustainable\n            references. Feedback to the client for continual input for both parties.</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"help-block\">\n          <div class=\"d-flex flex-column justify-content-center align-items-center\">\n            <p class=\"mb-0\">Support</p>\n            <h1 class=\"mt-0\">We keep helping you As long </h1>\n            <h1 class=\"mt-0\">As you need us</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "P6R5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    NgbdModalContent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "7pPp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./about.component.html */ "5TFM");
/* harmony import */ var _about_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss */ "ijUo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ctorParameters = function () { return []; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _providers_testimonial_testimonial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/testimonial/testimonial.service */ "+0I5");
/* harmony import */ var _providers_page_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/page/page.service */ "m0SB");
/* harmony import */ var _providers_blog_blog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/blog/blog.service */ "Qxqj");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lazysizes */ "s+lh");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Services




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, _platformId, testimonialService, pageservice, metaTagService, titleService, blogService, formBuilder) {
        this.renderer = renderer;
        this._platformId = _platformId;
        this.testimonialService = testimonialService;
        this.pageservice = pageservice;
        this.metaTagService = metaTagService;
        this.titleService = titleService;
        this.blogService = blogService;
        this.formBuilder = formBuilder;
        this.page = 4;
        this.page1 = 5;
        this.invalidNumber = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // inviteForm: FormGroup;
        this.submitted = false;
        this.imagepath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/public/';
        this.get_PageMeta();
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
        $("li").removeClass("main-menu__item--active");
        $("#home").addClass("main-menu__item--active");
    };
    ComponentsComponent.prototype.get_PageMeta = function () {
        var _this = this;
        var obj = { pageName: 'home' };
        this.pageservice.getpageWithName(obj).subscribe(function (response) {
            if (response.body.code == 200) {
                _this.titleService.setTitle(response === null || response === void 0 ? void 0 : response.body.result.meta_title);
                _this.metaTagService.addTags([
                    { name: 'description', content: response === null || response === void 0 ? void 0 : response.body.result.meta_description },
                    { name: 'keywords', content: response === null || response === void 0 ? void 0 : response.body.result.meta_keywords },
                ]);
            }
            else if (response.body.code == 400) {
            }
            else {
            }
        });
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _providers_testimonial_testimonial_service__WEBPACK_IMPORTED_MODULE_6__["TestimonialService"] },
        { type: _providers_page_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _providers_blog_blog_service__WEBPACK_IMPORTED_MODULE_8__["BlogService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object,
            _providers_testimonial_testimonial_service__WEBPACK_IMPORTED_MODULE_6__["TestimonialService"],
            _providers_page_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _providers_blog_blog_service__WEBPACK_IMPORTED_MODULE_8__["BlogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "9GRG":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>Example page</h1>\n            <h3>Start designing your landing page here.</h3>\n            <br />\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Let's talk product</h2>\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Henry Ford</h4>\n                                <h6 class=\"card-category\">Product Manager</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Sophie West</h4>\n                                <h6 class=\"card-category\">Designer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Robert Orben</h4>\n                                <h6 class=\"card-category\">Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "9ldr":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notification.component.html */ "1E4i");
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ "oy3u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NotificationComponent.ctorParameters = function () { return []; };
    NotificationComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notification',
            template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _providers_testimonial_testimonial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/testimonial/testimonial.service */ "+0I5");
/* harmony import */ var _providers_page_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/page/page.service */ "m0SB");
/* harmony import */ var _providers_blog_blog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/blog/blog.service */ "Qxqj");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lazysizes */ "s+lh");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Services






var HomeComponent = /** @class */ (function () {
    function HomeComponent(renderer, _platformId, testimonialService, pageservice, metaTagService, titleService, blogService, formBuilder, http) {
        this.renderer = renderer;
        this._platformId = _platformId;
        this.testimonialService = testimonialService;
        this.pageservice = pageservice;
        this.metaTagService = metaTagService;
        this.titleService = titleService;
        this.blogService = blogService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.limit = 10; // <==== Edit this number to limit API results
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            margin: 14,
            responsive: {
                0: {
                    items: 4
                },
                400: {
                    items: 6
                },
                740: {
                    items: 8
                },
                940: {
                    items: 10
                }
            },
            nav: false
        };
        this.slides = [
            { id: 1, img: "../../assets/img/home/veritcal-images/01.jpg" },
            { id: 2, img: "../../assets/img/home/veritcal-images/02.jpg" },
            { id: 3, img: "../../assets/img/home/veritcal-images/03.jpg" },
            { id: 4, img: "../../assets/img/home/veritcal-images/04.jpg" },
            { id: 5, img: "../../assets/img/home/veritcal-images/05.jpg" },
            { id: 6, img: "../../assets/img/home/veritcal-images/06.jpg" },
            { id: 7, img: "../../assets/img/home/veritcal-images/07.jpg" },
            { id: 8, img: "../../assets/img/home/veritcal-images/08.jpg" },
            { id: 9, img: "../../assets/img/home/veritcal-images/09.jpg" },
            { id: 10, img: "../../assets/img/home/veritcal-images/10.jpg" },
            { id: 11, img: "../../assets/img/home/veritcal-images/11.jpg" },
            { id: 12, img: "../../assets/img/home/veritcal-images/12.jpg" },
            { id: 13, img: "../../assets/img/home/veritcal-images/13.png" },
            { id: 14, img: "../../assets/img/home/veritcal-images/14.jpg" },
            { id: 15, img: "../../assets/img/home/veritcal-images/15.jpg" },
            { id: 16, img: "../../assets/img/home/veritcal-images/16.jpg" },
            { id: 17, img: "../../assets/img/home/veritcal-images/17.jpg" },
            { id: 18, img: "../../assets/img/home/veritcal-images/18.jpg" },
            { id: 19, img: "../../assets/img/home/veritcal-images/19.jpg" },
            { id: 20, img: "../../assets/img/home/veritcal-images/20.jpg" },
            { id: 21, img: "../../assets/img/home/veritcal-images/21.jpg" },
            { id: 22, img: "../../assets/img/home/veritcal-images/22.jpg" },
            { id: 23, img: "../../assets/img/home/veritcal-images/23.jpg" }
        ];
        this.page = 4;
        this.page1 = 5;
        this.invalidNumber = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // inviteForm: FormGroup;
        this.submitted = false;
        this.imageData = [{
                albumId: 1,
                id: 1,
                thumbnailUrl: "https://via.placeholder.com/150/92c952",
                title: "accusamus beatae ad facilis cum similique qui sunt",
                url: "https://via.placeholder.com/600/92c952"
            }, {
                albumId: 1,
                id: 2,
                thumbnailUrl: "https://via.placeholder.com/150/92c952",
                title: "accusamus beatae ad facilis cum similique qui sunt",
                url: "https://via.placeholder.com/600/771796"
            }];
        this.imagepath = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/public/';
        this.get_PageMeta();
    }
    HomeComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    HomeComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.fetch();
        aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
        $("li").removeClass("main-menu__item--active");
        $("#home").addClass("main-menu__item--active");
    };
    HomeComponent.prototype.get_PageMeta = function () {
        var _this = this;
        var obj = { pageName: 'home' };
        this.pageservice.getpageWithName(obj).subscribe(function (response) {
            if (response.body.code == 200) {
                _this.titleService.setTitle(response === null || response === void 0 ? void 0 : response.body.result.meta_title);
                _this.metaTagService.addTags([
                    { name: 'description', content: response === null || response === void 0 ? void 0 : response.body.result.meta_description },
                    { name: 'keywords', content: response === null || response === void 0 ? void 0 : response.body.result.meta_keywords },
                ]);
            }
            else if (response.body.code == 400) {
            }
            else {
            }
        });
    };
    HomeComponent.prototype.fetch = function () {
        var _this = this;
        var api = "https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=" + this.limit;
        var http$ = this.http.get(api);
        http$.subscribe(function (res) { return _this.apiData = res; }, function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["throwError"])(err); });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] },
        { type: _providers_testimonial_testimonial_service__WEBPACK_IMPORTED_MODULE_7__["TestimonialService"] },
        { type: _providers_page_page_service__WEBPACK_IMPORTED_MODULE_8__["PageService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
        { type: _providers_blog_blog_service__WEBPACK_IMPORTED_MODULE_9__["BlogService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], Object,
            _providers_testimonial_testimonial_service__WEBPACK_IMPORTED_MODULE_7__["TestimonialService"],
            _providers_page_page_service__WEBPACK_IMPORTED_MODULE_8__["PageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _providers_blog_blog_service__WEBPACK_IMPORTED_MODULE_9__["BlogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "ARBA":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AXTl":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "9GRG");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "ARBA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000',
    // baseUrl:'http://5.161.96.184:3000',
    recaptcha_key: '6Le_lT4cAAAAAK9VEk4nEBoKy0ydYrE-P9A_wj2U',
};


/***/ }),

/***/ "BGiY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"contact-content vh-100\">\n          <div class=\"d-flex flex-column justify-content-center align-items-center h-100\">\n          <div class=\"describe d-flex flex-row justify-content-center align-items-center \">\n            <img src=\"../../../assets/img/home/qrcode.webp\" alt=\"qrcode\" width=\"104\" height=\"108\">\n            <div class=\"call\">\n              <h1 class=\"m-0 ms-4\">Call</h1>\n              <h1 class=\"m-0 ms-4\">Pixtar.</h1>\n            </div>\n          </div>\n          <p class=\"short-desc\">Describe your project and leave us your contact info, we’ll get back to you ASAP.</p>\n        </div>\n          \n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"contact-form\">\n          <div class=\"form vh-100 w-100\">\n            <div class=\"d-flex flex-column justify-content-center align-items-start h-100\">\n              <form action=\"#\">\n                <div class=\"form-floating mb-3\">\n                  <input type=\"name\" class=\"form-control\" id=\"floatingInput\" placeholder=\"name\">\n                  <label for=\"floatingInput\" class=\"mt-0\">Name</label>\n                </div>\n                <div class=\"form-floating mb-3\">\n                  <input type=\"email\" class=\"form-control\" id=\"floatingInput\" placeholder=\"name@example.com\">\n                  <label for=\"floatingInput\" class=\"mt-0\">Email address</label>\n                </div>\n\n                <div class=\"form-floating mb-3\">\n                  <input type=\"tel\" class=\"form-control\" id=\"floatingInput\" placeholder=\"mobile\">\n                  <label for=\"floatingInput\" class=\"mt-0\">Mobile</label>\n                </div>\n                <div class=\"detail w-100\">\n                  <ul class=\"d-flex flex-row justify-content-space-between align-items-center pl-0\">\n                    <li><a href=\"#\">Website</a></li>\n                    <li><a href=\"#\">Branding</a></li>\n                    <li><a href=\"#\">SEO</a></li>\n                    <li><a href=\"#\">Enterprise Solution</a></li>\n                  </ul>\n                </div>\n                <div class=\"form-floating\">\n                  <textarea class=\"form-control\" placeholder=\"Leave a comment here\" id=\"floatingTextarea\"></textarea>\n                  <label for=\"floatingTextarea\" class=\"mt-0\">Comments</label>\n                </div>\n                <div class=\"w-100 text-right\">\n                <input type=\"submit\" name=\"submit\" value=\"Send\" class=\"float-end mt-5 submit\">\n              </div>\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "ENsn":
/*!*****************************************************!*\
  !*** ./src/app/examples/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "Nc++");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ "mS3H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.ctorParameters = function () { return []; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"cbanner\">\n\t<div class=\"container-fluid\">\n\t\t<!-- <h1 class=\" d-flex flex-row align-items-center logotext\"><span> Pixtar </span></h1> -->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1\">\n\n\t\t\t\t<div class=\"banner vh-100\">\n\t\t\t\t\t<div class=\"d-flex flex-column justify-content-center h-100\">\n\t\t\t\t\t\t<!-- <h1 class=\"h1\">Brand.Ui/Ux.<span class=\"barcely\">Design.</span></h1> -->\n\t\t\t\t\t\t<h1 class=\"h1\">Brand.Ui/Ux.<span class=\"barcely\">Design</span><span class=\"dot\">.</span></h1>\n\t\t\t\t\t\t<h1 class=\"h1\">E-com.Development. </h1>\n\t\t\t\t\t\t<!-- <h1 class=\"h1\">Brand.Ui/Ux.Design</h1> -->\n\t\t\t\t\t\t<h1 class=\"h1\">SEO&More...</h1>\n\t\t\t\t\t\t<p>Wherever you are in your journey, we take care of the creative needs of your business to help you grow\n\t\t\t\t\t\t\tit.</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"position-absolute  banner-left-content\">\n\t\t\t<p>Creative agency based in Dubai, </p>\n\t\t\t<p>United Arab Emirates</p>\n\t\t\t<p class=\"text-color\">+971 52 7930781</p>\n\t\t</div>\n\t\t<div class=\"position-absolute start-50 translate-middle down-arrow\">\n\t\t\t<p><a href=\"#strategy\"> <img src=\"../../assets/img/home/downarrow.webp\" alt=\"\" width=\"30\"></a> </p>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"toppadding\" id=\"strategy\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 m-auto\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"content d-flex flex-column justify-content-center h-100\">\n\t\t\t\t\t\t\t<p>But In today’s chaotic world its a struggle for every brand to understand its creative needs.\n\t\t\t\t\t\t\t\t<br><br>Let’s simplify…</p>\n\t\t\t\t\t\t\t<div class=\"actn\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"bthw\">How ?</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"custom-collapse\">\n\t\t\t\t\t\t\t<div class=\"accordion\" id=\"accordionExample\">\n\t\t\t\t\t\t\t\t<div class=\"accordion-item\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"accordion-header\" id=\"headingOne\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\"\n\t\t\t\t\t\t\t\t\t\t\tdata-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t\t\t\t\t\t\tBranding/Re-branding\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t\t<div id=\"collapseOne\" class=\"accordion-collapse collapse show\" aria-labelledby=\"headingOne\"\n\t\t\t\t\t\t\t\t\t\tdata-bs-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"accordion-body\">\n\t\t\t\t\t\t\t\t\t\t\tWe start each new design with an in‑depth discovery phase to immerse ourselves in your business.\n\t\t\t\t\t\t\t\t\t\t\tOur UX designers interview stakeholders, conduct user research, analyse your competition, and\n\t\t\t\t\t\t\t\t\t\t\tconsolidate content. The result is an action plan on executing a holistic brand and user\n\t\t\t\t\t\t\t\t\t\t\texperience.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"accordion-item\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"accordion-header\" id=\"headingThree\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n\t\t\t\t\t\t\t\t\t\t\tdata-bs-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n\t\t\t\t\t\t\t\t\t\t\tUX/UI Design\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t\t<div id=\"collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\n\t\t\t\t\t\t\t\t\t\tdata-bs-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"accordion-body\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>This is the third item's accordion body.</strong> It is hidden by default, until the\n\t\t\t\t\t\t\t\t\t\t\tcollapse plugin adds the appropriate classes that we use to style each element. These classes\n\t\t\t\t\t\t\t\t\t\t\tcontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can\n\t\t\t\t\t\t\t\t\t\t\tmodify any of this with custom CSS or overriding our default variables. It's also worth noting\n\t\t\t\t\t\t\t\t\t\t\tthat\n\t\t\t\t\t\t\t\t\t\t\tjust about any HTML can go within the <code>.accordion-body</code>, though the transition does\n\t\t\t\t\t\t\t\t\t\t\tlimit\n\t\t\t\t\t\t\t\t\t\t\toverflow.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"accordion-item\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"accordion-header\" id=\"headingFour\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n\t\t\t\t\t\t\t\t\t\t\tdata-bs-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n\t\t\t\t\t\t\t\t\t\t\teCommerce Solutions\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t\t<div id=\"collapseFour\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\n\t\t\t\t\t\t\t\t\t\tdata-bs-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"accordion-body\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>This is the third item's accordion body.</strong> It is hidden by default, until the\n\t\t\t\t\t\t\t\t\t\t\tcollapse plugin adds the appropriate classes that we use to style each element. These classes\n\t\t\t\t\t\t\t\t\t\t\tcontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can\n\t\t\t\t\t\t\t\t\t\t\tmodify any of this with custom CSS or overriding our default variables. It's also worth noting\n\t\t\t\t\t\t\t\t\t\t\tthat\n\t\t\t\t\t\t\t\t\t\t\tjust about any HTML can go within the <code>.accordion-body</code>, though the transition does\n\t\t\t\t\t\t\t\t\t\t\tlimit\n\t\t\t\t\t\t\t\t\t\t\toverflow.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"accordion-item\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"accordion-header\" id=\"headingSix\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n\t\t\t\t\t\t\t\t\t\t\tdata-bs-target=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n\t\t\t\t\t\t\t\t\t\t\tWeb Application\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t\t<div id=\"collapseFive\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\n\t\t\t\t\t\t\t\t\t\tdata-bs-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"accordion-body\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>This is the third item's accordion body.</strong> It is hidden by default, until the\n\t\t\t\t\t\t\t\t\t\t\tcollapse plugin adds the appropriate classes that we use to style each element. These classes\n\t\t\t\t\t\t\t\t\t\t\tcontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can\n\t\t\t\t\t\t\t\t\t\t\tmodify any of this with custom CSS or overriding our default variables. It's also worth noting\n\t\t\t\t\t\t\t\t\t\t\tthat\n\t\t\t\t\t\t\t\t\t\t\tjust about any HTML can go within the <code>.accordion-body</code>, though the transition does\n\t\t\t\t\t\t\t\t\t\t\tlimit\n\t\t\t\t\t\t\t\t\t\t\toverflow.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"accordion-item\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"accordion-header\" id=\"headingSix\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\"\n\t\t\t\t\t\t\t\t\t\t\tdata-bs-target=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n\t\t\t\t\t\t\t\t\t\t\tSEO\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t\t<div id=\"collapseSix\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingThree\"\n\t\t\t\t\t\t\t\t\t\tdata-bs-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"accordion-body\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>This is the third item's accordion body.</strong> It is hidden by default, until the\n\t\t\t\t\t\t\t\t\t\t\tcollapse plugin adds the appropriate classes that we use to style each element. These classes\n\t\t\t\t\t\t\t\t\t\t\tcontrol the overall appearance, as well as the showing and hiding via CSS transitions. You can\n\t\t\t\t\t\t\t\t\t\t\tmodify any of this with custom CSS or overriding our default variables. It's also worth noting\n\t\t\t\t\t\t\t\t\t\t\tthat\n\t\t\t\t\t\t\t\t\t\t\tjust about any HTML can go within the <code>.accordion-body</code>, though the transition does\n\t\t\t\t\t\t\t\t\t\t\tlimit\n\t\t\t\t\t\t\t\t\t\t\toverflow.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"topdist bannerdrk hard-work\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 offset-md-1\">\n\t\t\t\t<div class=\"d-flex justify-content-start align-items-center cmargin\">\n\t\t\t\t\t<h1 class=\"text-white h1\">\n\t\t\t\t\t\t<div class=\"line\"></div> Recent Works\n\t\t\t\t\t</h1>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-9 m-auto\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"imgblock\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/home/beyou.webp\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"box-name text-center\">\n\t\t\t\t\t\t\t\t<p class=\"mb-0 text-white h2\">BeYou</p>\n\t\t\t\t\t\t\t\t<p><span>Branding.UI/UX.Technology</span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"imgblock\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/home/cups.webp\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"box-name text-center\">\n\t\t\t\t\t\t\t\t<p class=\"mb-0 text-white h2\">BeYou</p>\n\t\t\t\t\t\t\t\t<p><span>Branding.UI/UX.Technology</span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"imgblock\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/home/bcard22.webp\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"box-name text-center\">\n\t\t\t\t\t\t\t\t<p class=\"mb-0 text-white h2\">BeYou</p>\n\t\t\t\t\t\t\t\t<p><span>Branding.UI/UX.Technology</span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"imgblock\">\n\t\t\t\t\t\t\t<img src=\"../../assets/img/home/vendetta2.webp\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"box-name text-center\">\n\t\t\t\t\t\t\t\t<p class=\"mb-0 text-white h2\">BeYou</p>\n\t\t\t\t\t\t\t\t<p><span>Branding.UI/UX.Technology</span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- lets talk more -->\n<section class=\"bannerdrk talk\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 m-auto\">\n\t\t\t\t<div class=\"d-flex flex-column justify-content-center align-items-center video-block\">\n\t\t\t\t\t<a href=\"#\" class=\"more\">More</a>\n\t\t\t\t\t<h1 class=\"mt-3 mb-3\"><a href=\"#\">Let's <span class=\"\">Talk</span></a></h1>\n\t\t\t\t\t<!-- <video width=\"320\" height=\"240\" controls poster=\"../../assets/img/home/play-shape.webp\">\n\t\t\t\t\t\t<source src=\"https://www.youtube.com/embed/LcSevy6HUQc\" type=\"video/mp4\">\n\t\t\t\t\t\t<source src=\"https://www.youtube.com/embed/LcSevy6HUQc\" type=\"video/ogg\">\n\t\t\t\t\t\tYour browser does not support the video tag.\n\t\t\t\t\t</video> -->\n\t\t\t\t\t<iframe width=\"800\" height=\"400\" src=\"https://www.youtube.com/embed/LcSevy6HUQc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen poster=\"../../assets/img/home/play-shape.webp\"></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- lets talk more -->\n<!-- dark creativit section -->\n<section class=\" bannerdrk creativity\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 m-auto\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"creative\">\n\t\t\t\t\t\t\t<!-- <h1><span>Creativity</span><br />is at the soul of all our projects.</h1> -->\n\t\t\t\t\t\t\t<h1>Creative Solutions <span class=\"barcy\"> Simplified </span></h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"d-flex justify-content-center align-items-center h-100\">\n\t\t\t\t\t\t\t<p class=\"mb-0\">As a full-service design agency, we work closely with you to understand, define, design &\n\t\t\t\t\t\t\t\tdevelop transformative creative solutions for your business.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- dark creativit section -->\n<!-- slider -->\n<!-- <style>\n\t\t::ng-deep .owl-carousel .owl-item img {\n\t\tmargin-top: 10px;\n\t\topacity: 0.9;\n\t}\n\t::ng-deep .owl-theme .owl-dots .owl-dot span {\n   background: #D6D6D6!important; /* dots color*/\n }\n\n</style> -->\n<section class=\"story\">\n\t<div class=\"container-fluid p-0\">\n\t\t<!-- <div class=\"row\"> -->\n\t\t\t<div class=\"col-md-12 p-0\">\n\t\t\t\t<div class=\"d-flex flex-column align-items-center\">\n\t\t\t\t\t<div class=\"content-block\">\n\t\t\t\t\t\t<h1>And our creativity comes </h1>\n\t\t\t\t\t\t<h1>comes from <span>your story</span></h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"customslider\">\n\t\t\t\t\t<owl-carousel-o [options]=\"customOptions\" [ngClass]=\"{ item: true }\">\n\n\t\t\t\t\t\t<ng-container *ngFor=\"let slide of slides\" [ngClass]=\"{ item: true }\">\n\t\t\t\t\t\t\t<ng-template carouselSlide [id]=\"slide.id\">\n\t\t\t\t\t\t\t\t<img [src]=\"slide.img\">\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t</owl-carousel-o>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<!-- </div> -->\n\t</div>\n</section>\n<!-- slider -->");

/***/ }),

/***/ "IBmT":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "KfLr":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./services.component.html */ "b44A");
/* harmony import */ var _services_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.component.scss */ "mMT2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.ctorParameters = function () { return []; };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-services',
            template: _raw_loader_services_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_services_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <img src=\"assets/img/angular2-logo.png\" alt=\"\">\n                    </div>\n                    <h1 class=\"presentation-title\">Paper Kit 2 Angular</h1>\n                    <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">Free Bootstrap 4 UI Kit for Angular 7</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n        <h6 class=\" category-absolute ml-auto mr-auto\">Designed and coded by\n        <!-- <h6 class=\"category category-absolute\">Designed and coded by -->\n\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\">\n            </a>\n        </h6>\n    </div>\n    <div class=\"main\">\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Progress Bar</h3>\n                          <br/>\n                      </div>\n                      <ngb-progressbar type=\"success\" class=\"mt-0\" [value]=\"25\">25</ngb-progressbar><br>\n                      <ngb-progressbar type=\"info\" class=\"mt-0\" [value]=\"50\"><span class=\"h6 mb-0\">Copying file <b>2 of 4</b> ...</span></ngb-progressbar><br>\n                      <ngb-progressbar type=\"warning\" class=\"mt-0\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                      <ngb-progressbar type=\"danger\" class=\"mt-0\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Pagination</h3>\n                          <br/>\n                      </div>\n                      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Navigation Tabs</h3>\n                      </div>\n\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <ngb-tabset [justify]=\"'center'\">\n                                  <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                          <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here is your profile.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here are your messages.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                              </ngb-tabset>\n                          </div>\n                      </div>\n\n                  </div>\n\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Labels</h3>\n                      </div>\n                      <span class=\"label label-default\">Default</span>\n                      <span class=\"label label-primary\">Primary</span>\n                      <span class=\"label label-info\">Info</span>\n                      <span class=\"label label-success\">Success</span>\n                      <span class=\"label label-warning\">Warning</span>\n                      <span class=\"label label-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div data-aos=\"fade-up\" class=\"section section-notifications\" id=\"notifications\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Notification</h3>\n              </div>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section javascript-components\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h2>Angular Native Components</h2>\n              </div>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Modal</h3>\n                      </div>\n                      <app-modal-component></app-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Popovers</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                          on right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          on top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          on left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          on bottom\n                      </button>\n\n                  </div>\n                  <br/>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Datepicker</h3>\n                      </div>\n                      <div class=\"row\">\n                          <div class='col-sm-6'>\n                              <form class=\"form-inline\">\n                                  <div class=\"form-group\">\n                                      <div class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                               name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\n                                          <div class=\"input-group-append\">\n                                              <span class=\"glyphicon glyphicon-calendar input-group-text\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                              </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </form>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Tooltips</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         on right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                        on left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         on top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                         on bottom\n                      </button>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"carousel\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Carousel</h3>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-8 mr-auto ml-auto\">\n                      <div class=\"card page-carousel\">\n                          <ngb-carousel>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere else</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Here it is</p>\n                                  </div>\n                              </ng-template>\n                          </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n        <div class=\"section section-dark section-nucleo-icons\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-12\">\n                        <h2 class=\"title\">Nucleo Icons</h2><br/>\n                        <p class=\"description\">\n                            Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                        </p><br/>\n                        <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>\n                        <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"icons-container\">\n                            <i class=\"nc-icon nc-time-alarm\"></i>\n                            <i class=\"nc-icon nc-atom\"></i>\n                            <i class=\"nc-icon nc-camera-compact\"></i>\n                            <i class=\"nc-icon nc-watch-time\"></i>\n                            <i class=\"nc-icon nc-key-25\"></i>\n                            <i class=\"nc-icon nc-diamond\"></i>\n                            <i class=\"nc-icon nc-user-run\"></i>\n                            <i class=\"nc-icon nc-layout-11\"></i>\n                            <i class=\"nc-icon nc-badge\"></i>\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                            <i class=\"nc-icon nc-favourite-28\"></i>\n                            <i class=\"nc-icon nc-planet\"></i>\n                            <i class=\"nc-icon nc-tie-bow\"></i>\n                            <i class=\"nc-icon nc-zoom-split\"></i>\n                            <i class=\"nc-icon nc-cloud-download-93\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Completed with examples</h2>\n                        <p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-image section-login\" style=\"background-image: url('assets/img/login-image.jpg');\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                  </div>\n\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n\n                                <label>Password</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-key-25\"></i>\n                                    </span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                        <div class=\"col text-center\" routerLinkActive=\"active\">\n                            <a [routerLink]=\"['/signup']\" class=\"btn btn-outline-neutral btn-round btn-lg\">View Register Page</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row example-page\">\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/landing']\">\n                            <img src=\"./assets/img/examples/landing-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/landing']\" class=\"btn btn-outline-neutral btn-round\">Landing Page</a>\n                        </a>\n                    </div>\n\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/user-profile']\">\n                            <img src=\"./assets/img/examples/profile-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/user-profile']\" class=\"btn btn-outline-neutral btn-round\">Profile Page</a>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Do you like what you see?</h2>\n                        <p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 download-area ml-auto mr-auto\">\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>\n                    </div>\n                </div>\n                <div class=\"row justify-content-md-center sharing-area text-center\">\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <h3>Thank you for supporting us!</h3>\n                    </div>\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-google-plus\"></i> Google\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-facebook-square\"></i> Facebook\n                        </a>\n                        <a href=\"https://github.com/creativetimofficial/paper-kit\" class=\"btn btn-github-bg btn-github sharrre btn-round\" rel=\"tooltip\" title=\"Star on Github\">\n                            <i class=\"fa fa-github\"></i> Star\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Nc++":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/signup/signup.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                      <div class=\"card card-register\">\n                          <h3 class=\"title\">Welcome</h3>\n                          <div class=\"social-line text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                  <i class=\"fa fa-facebook-square\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                  <i class=\"fa fa-google-plus\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                  <i class=\"fa fa-twitter\"></i>\n                              </a>\n                          </div>\n                          <form class=\"register-form\">\n                              <label>Email</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-email-85\"></i>\n                                  </span>\n                                </div>\n\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                              </div>\n\n                              <label>Password</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-key-25\"></i>\n                                  </span>\n                                </div>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                              </div>\n                              <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                          </form>\n                          <div class=\"forgot\">\n                              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n                </div>\n            </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Np+I":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-form form input {\n  color: #878787;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #DDDDDD;\n}\n.contact-form form input:focus {\n  border-color: #878787;\n}\n.contact-form form textarea {\n  color: #878787;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #DDDDDD;\n}\n.contact-form form textarea:focus {\n  border-color: #878787;\n}\n.contact-form form .detail {\n  width: 100%;\n}\n.contact-form form .detail ul {\n  list-style: none;\n  padding-left: 0;\n}\n.contact-form form .detail ul li {\n  margin: 0px 10px 0 0;\n}\n.contact-form form .detail ul li a {\n  padding: 5px 20px;\n  text-decoration: none;\n  border: 1px solid #707070;\n  color: #878787;\n  border-radius: 30px;\n}\n.contact-form form .detail ul li a:hover {\n  color: #da9777;\n  background: #1d1d1f;\n}\n.contact-form form .detail ul li a:focus {\n  color: #da9777;\n  background: #1d1d1f;\n}\n.contact-form form .detail ul li a:active {\n  color: #da9777;\n  background: #1d1d1f;\n}\n@media (max-width: 1199px) {\n  .contact-form form .detail ul li a {\n    padding: 4px 10px;\n  }\n}\n.contact-form form .submit {\n  background: transparent;\n  color: #DA9777;\n  border: 2px solid #DA9777;\n  padding: 5px 30px;\n  border-radius: 30px;\n  font-weight: 600;\n}\n.contact-form form .submit:hover {\n  background: #DA9777;\n  color: #fff;\n}\n.contact-form form .submit:focus {\n  background: #DA9777;\n  color: #fff;\n}\n.contact-content .describe img {\n  width: 150px;\n  height: 150px;\n}\n@media (max-width: 991px) {\n  .contact-content .describe img {\n    width: 100px;\n    height: 100px;\n  }\n}\n.contact-content .describe .call h1 {\n  font-size: 106px;\n  font-weight: 800;\n  color: #000;\n}\n@media (max-width: 1199px) {\n  .contact-content .describe .call h1 {\n    font-size: 80px;\n  }\n}\n@media (max-width: 991px) {\n  .contact-content .describe .call h1 {\n    font-size: 60px;\n  }\n}\n.contact-content .short-desc {\n  width: 530px;\n  font-size: 22px;\n  font-weight: 500;\n}\n@media (max-width: 1199px) {\n  .contact-content .short-desc {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFETjtBQUVNO0VBQ0UscUJBQUE7QUFBUjtBQUdJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBRE47QUFFTTtFQUNFLHFCQUFBO0FBQVI7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUVNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNFLG9CQUFBO0FBQ1Y7QUFBVTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVaO0FBRFk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFHZDtBQURZO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBR2Q7QUFEWTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUdkO0FBRFk7RUFsQkY7SUFtQkksaUJBQUE7RUFJWjtBQUNGO0FBQ0k7RUFDRSx1QkFBQTtFQUNGLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFFTjtBQUFJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBRU47QUFLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRk47QUFHTTtFQUhGO0lBSUksWUFBQTtJQUNGLGFBQUE7RUFBSjtBQUNGO0FBRUk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFOO0FBQ007RUFKRjtJQUtJLGVBQUE7RUFFTjtBQUNGO0FBRE07RUFQRjtJQVFJLGVBQUE7RUFJTjtBQUNGO0FBREU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0o7QUFGSTtFQUpGO0lBS0ksV0FBQTtFQUtKO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm17XG4gIGZvcm17XG4gICAgaW5wdXR7XG4gICAgICBjb2xvcjogIzg3ODc4NztcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREREREREO1xuICAgICAgJjpmb2N1c3tcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODc4Nzg3O1xuICAgICAgfVxuICAgIH1cbiAgICB0ZXh0YXJlYXtcbiAgICAgIGNvbG9yOiAjODc4Nzg3O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNEREREREQ7XG4gICAgICAmOmZvY3Vze1xuICAgICAgICBib3JkZXItY29sb3I6ICM4Nzg3ODc7XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXRhaWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHggMCAwO1xuICAgICAgICAgIGEge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgICAgICAgICAgY29sb3I6ICM4Nzg3ODc7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZGE5Nzc3O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQxZDFmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZGE5Nzc3O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQxZDFmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICBjb2xvcjogI2RhOTc3NztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFkMWQxZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6MTE5OXB4KXtcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgICAuc3VibWl0e1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNEQTk3Nzc7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0RBOTc3NztcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQ6ICNEQTk3Nzc7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgJjpmb2N1c3tcbiAgICAgIGJhY2tncm91bmQ6ICNEQTk3Nzc7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgfVxuICB9XG59ICBcbi5jb250YWN0LWNvbnRlbnR7XG4gIC5kZXNjcmliZXtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYWxsIGgxe1xuICAgICAgZm9udC1zaXplOiAxMDZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6MTE5OXB4KXtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnNob3J0LWRlc2N7XG4gICAgd2lkdGg6NTMwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgQG1lZGlhKG1heC13aWR0aDoxMTk5cHgpe1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59Il19 */");

/***/ }),

/***/ "P6R5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n");

/***/ }),

/***/ "QhSr":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "4R/m");
/* harmony import */ var _typography_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component.scss */ "0Inq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "Qxqj":
/*!************************************************!*\
  !*** ./src/app/providers/blog/blog.service.ts ***!
  \************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogService = /** @class */ (function () {
    function BlogService(http) {
        var _this = this;
        this.http = http;
        this.getblogDetails = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/viewblog';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getAllblog = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/allblog';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getblogWithId = function (moreData) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/blogdetail';
            return _this.http
                .post(endpoint, moreData, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getNextblogWithId = function (moreData) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/nextblogdetail';
            return _this.http
                .post(endpoint, moreData, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getBlogWithString = function (moreData) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/searchblog';
            return _this.http
                .post(endpoint, moreData, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getAllvideoBlog = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/allvideoblog';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getTagDetails = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/viewtag';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getDownloadLink = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/home/download';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.addInvites = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/blog/addinvite';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
    }
    BlogService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        aos__WEBPACK_IMPORTED_MODULE_7___default.a.init();
        aos__WEBPACK_IMPORTED_MODULE_7___default.a.refresh();
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/examples.module */ "ieWF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _culture_culture_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./culture/culture.component */ "iBZ1");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/services.component */ "KfLr");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "84zG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _culture_culture_component__WEBPACK_IMPORTED_MODULE_14__["CultureComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_11__["ExamplesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aMQp":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"cst-tabs p-0\">\n  <div class=\"col-md-12\">\n    \n    <!-- Nav pills -->\n    <ul class=\"nav nav-pills\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active \" data-bs-toggle=\"pill\" href=\"#all\"  data-aos=\"fade-in\" data-aos-duration=\"2000\">All</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-bs-toggle=\"pill\" href=\"#branding\">Branding</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-bs-toggle=\"pill\" href=\"#ui-ux\">UX/UI</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-bs-toggle=\"pill\" href=\"#ecommerce\">eCommerce</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-bs-toggle=\"pill\" href=\"#seo\">SEO</a>\n      </li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\" >\n      <div id=\"all\" class=\" tab-pane active\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div class=\"project-block\">\n                <img src=\"../../assets/img/projects/project1.png\" alt=\"\" data-aos=\"fade-up\"\n                data-aos-anchor-placement=\"bottom-bottom\">\n                <div class=\"content\">\n                  <h3>BeYou</h3>\n                  <p>Branding.UI/UX.Technology</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"project-right-block\">\n                <img src=\"../../assets/img/services/service1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>UrbanEx</h3>\n                  <p>Branding</p>\n                </div>\n              </div>\n            </div>\n            <a href=\"#\" class=\"more\">More</a>\n          </div>\n        </div>\n      </div>\n      <div id=\"branding\" class=\"tab-pane fade\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div class=\"project-block\">\n                <img src=\"../../assets/img/projects/project1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>BeYou</h3>\n                  <p>Branding.UI/UX.Technology</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"project-right-block\">\n                <img src=\"../../assets/img/services/service1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>UrbanEx</h3>\n                  <p>Branding</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"ui-ux\" class=\"tab-pane fade\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div class=\"project-block\">\n                <img src=\"../../assets/img/projects/project1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>BeYou</h3>\n                  <p>Branding.UI/UX.Technology</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"project-right-block\">\n                <img src=\"../../assets/img/services/service1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>UrbanEx</h3>\n                  <p>Branding</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"ecommerce\" class=\"tab-pane fade\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div class=\"project-block\">\n                <img src=\"../../assets/img/projects/project1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>BeYou</h3>\n                  <p>Branding.UI/UX.Technology</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"project-right-block\">\n                <img src=\"../../assets/img/services/service1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>UrbanEx</h3>\n                  <p>Branding</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"seo\" class=\"tab-pane fade\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <div class=\"project-block\">\n                <img src=\"../../assets/img/projects/project1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>BeYou</h3>\n                  <p>Branding.UI/UX.Technology</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"project-right-block\">\n                <img src=\"../../assets/img/services/service1.png\" alt=\"\">\n                <div class=\"content\">\n                  <h3>UrbanEx</h3>\n                  <p>Branding</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>");

/***/ }),

/***/ "b44A":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"service-banner\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-8 offset-xl-2\">\n        <div class=\"vh-100\">\n          <div class=\"block-content d-flex flex-column justify-content-center h-100\">\n            <!-- <div class=\"text-center position-absolute w-100 start-0  end-0\">\n              <img src=\"../../assets/img/services/white.svg\" alt=\"\" class=\"\">\n            </div> -->\n            <h1>Creativity.Identity.</h1>\n            <h1>Visual.GoulBrand.</h1>\n            <h1>Customer</h1>\n            <p>Whether it’s a birth or an evolution of a brand, nothing stands out unless it has a soul. </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- banner content ends-->\n<!-- we do section-->\n<section id=\"wedo-section\" class=\"wedo-section\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 offset-xl-1\">\n        <div class=\"we-do\">\n          <div class=\"row\">\n            <div class=\"col-xxl-3 col-xl-4 p-xl-end-0\">\n              We do it real\n            </div>\n            <div class=\"col-xxl-9 col-xl-8 p-xl-start-0\">\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium velit corporis itaque illo\n              quisquam libero molestiae quo perferendis, eum quod rem possimus eos saepe, et aut similique amet totam?\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Services section-->\n<!--First service starts-->\n<section id=\"services1\" class=\"services\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 offset-xl-1\">\n        <div class=\"row\">\n          <div class=\"col-xl-7 offset-xl-1\">\n            <div class=\"d-flex flex-column justify-content-between h-100 service-content\">\n              <h1>Branding that lets you in & gets you an ear</h1>\n              <div class=\"points\">\n                <p>Research | Strategy | Design</p>\n                <p>Identity | Brandbook <a href=\"\">& more…</a></p>\n              </div>\n              <p class=\"barcelony\">Let us listen to your story</p>\n            </div>\n          </div>\n          <div class=\"col-xl-4\">\n            <div class=\"img-block\">\n              <img src=\"../../assets/img/services/service1.png\" alt=\"\" class=\"w-100\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--First service ends-->\n<!--Second service starts-->\n<section id=\"services2\" class=\"services\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 offset-xl-1\">\n        <div class=\"row\">\n          <div class=\"col-xl-4\">\n            <div class=\"img-block\">\n              <img src=\"../../assets/img/services/service2.png\" alt=\"\" class=\"w-100\">\n            </div>\n          </div>\n          <div class=\"col-xl-6 offset-xl-1\">\n            <div class=\"d-flex flex-column justify-content-between h-100 service-content\">\n              <h1>Website that tells your story which connects</h1>\n              <div class=\"points\">\n                <p>Static | Dynamic</p>\n                <p>Ui/Ux <a href=\"\">& more…</a></p>\n              </div>\n              <p class=\"barcelony\">Let’s tell your story</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Second service ends-->\n\n\n<!--third service starts-->\n<section id=\"services3\" class=\"services\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 offset-xl-1\">\n        <div class=\"row\">\n          <div class=\"col-xl-7 offset-xl-1\">\n            <div class=\"d-flex flex-column justify-content-between h-100 service-content\">\n              <h1>eCommerce that helps you sale</h1>\n              <div class=\"points\">\n                <p>Magento 2++ Website Development</p>\n                <p>Customised eCommerce Solutions</p>\n                <p>Payment Gateway Integration</p>\n                <p><a href=\"\">& more…</a></p>\n              </div>\n              <p class=\"barcelony\">Let us help you sell</p>\n            </div>\n          </div>\n          <div class=\"col-xl-4\">\n            <div class=\"img-block\">\n              <img src=\"../../assets/img/services/service1.png\" alt=\"\" class=\"w-100\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--third service ends-->\n\n<!--fourth service starts-->\n<section id=\"services4\" class=\"services\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 offset-xl-1\">\n        <div class=\"row\">\n          <div class=\"col-xl-4\">\n            <div class=\"img-block\">\n              <img src=\"../../assets/img/services/service2.png\" alt=\"\" class=\"w-100\">\n            </div>\n          </div>\n          <div class=\"col-xl-6 offset-xl-1\">\n            <div class=\"d-flex flex-column justify-content-between h-100 service-content\">\n              <h1>Enterprise Solutions that automates your process</h1>\n              <div class=\"points\">\n                <p>Web Based Apps</p>\n                <p>eCom Management Solutions</p>\n                <p>Business Management Solutions</p>\n                <p><a href=\"\">& more…</a></p>\n              </div>\n              <p class=\"barcelony\">Let us listen to your story</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--fourth service ends-->\n<!--fifth service starts-->\n<section id=\"services5\" class=\"services\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-10 offset-xl-1\">\n        <div class=\"row\">\n          <div class=\"col-xl-7 offset-xl-1\">\n            <div class=\"d-flex flex-column justify-content-between h-100 service-content\">\n              <h1>SEO solution that spreads the word</h1>\n              <div class=\"points\">\n                <p>Organic SEO | Site Mapping</p>\n                <p>Google Ads | Social Media Integration</p> \n                <p><a href=\"\">& more…</a></p>\n              </div>\n              <p class=\"barcelony\">Let us spread your word</p>\n            </div>\n          </div>\n          <div class=\"col-xl-4\">\n            <div class=\"img-block\">\n              <img src=\"../../assets/img/services/service1.png\" alt=\"\" class=\"w-100\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--fifth service ends-->\n<!-- Services section-->");

/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".barcy {\n  font-family: \"barcelony\", sans-serif;\n}\n\n.text-color {\n  color: #DA9777;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.h1 {\n  color: #101010;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 106px;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.h1 .barcely {\n  font-weight: 100;\n  color: #DA9777;\n}\n\n@media (max-width: 1600px) {\n  .h1 {\n    font-size: 90px;\n  }\n}\n\n@media (max-width: 1440px) {\n  .h1 {\n    font-size: 80px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .h1 {\n    font-size: 70px;\n  }\n}\n\n@media (max-width: 1024px) {\n  .h1 {\n    font-size: 54px;\n  }\n}\n\n@media (max-width: 767px) {\n  .h1 {\n    font-size: 40px;\n  }\n}\n\n.cbanner {\n  min-height: 100vh;\n  height: 100%;\n  background: url('pixtar-splitlogo.svg');\n  background-repeat: no-repeat;\n  background-position: 100% 107%;\n  background-size: auto;\n  padding: 0 !important;\n}\n\n.cbanner .dot {\n  color: #DE9B7A;\n}\n\n.logotext {\n  position: relative;\n  top: 5px;\n  left: -24px;\n  font-weight: bold;\n  color: #000;\n}\n\n.banner p {\n  font-size: 32px;\n  font-weight: 500;\n}\n\n@media (max-width: 1440px) {\n  .banner p {\n    font-size: 28px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .banner p {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 1024px) {\n  .banner p {\n    font-size: 18px;\n  }\n}\n\n@media (max-width: 767px) {\n  .banner p {\n    font-size: 14px;\n  }\n}\n\n@font-face {\n  font-family: \"barcelony\";\n  src: local(\"barcelony\"), url('barcelony.ttf') format(\"truetype\");\n}\n\n.barcely {\n  font-family: \"barcelony\";\n}\n\n.banner-left-content {\n  left: 5% !important;\n  bottom: 3% !important;\n}\n\n@media (max-width: 767px) {\n  .banner-left-content {\n    position: relative !important;\n    left: 5% !important;\n  }\n}\n\n.banner-left-content p.text-color {\n  font-weight: 600;\n}\n\n.down-arrow {\n  bottom: 8%;\n}\n\n@media (max-width: 767px) {\n  .down-arrow {\n    position: relative !important;\n  }\n}\n\n.custom-collapse {\n  padding: 20px;\n  overflow: hidden;\n  border-radius: 30px;\n  background: #fbfbfd;\n  box-shadow: 0 0 15px #0000000d;\n}\n\n.custom-collapse .accordion {\n  --bs-accordion-bg: transparent;\n  border-radius: 30px;\n  overflow: hidden;\n  border: none;\n  padding: 20px;\n}\n\n.custom-collapse .accordion .accordion-item {\n  border: none;\n}\n\n.custom-collapse .accordion .accordion-item .accordion-header {\n  margin-top: 0;\n}\n\n.custom-collapse .accordion .accordion-item .accordion-button {\n  outline: none;\n  border: none;\n  box-shadow: none;\n  background: transparent;\n  border-bottom: 1px solid #878787;\n  border-radius: 0;\n  font-size: 32px;\n  color: #000;\n  font-weight: bold;\n}\n\n.custom-collapse .accordion .accordion-item .accordion-button:focus {\n  outline: none;\n  color: #000;\n}\n\n.custom-collapse .accordion .accordion-item .accordion-button:active {\n  color: #000;\n  outline: none;\n}\n\n@media (max-width: 1366px) {\n  .custom-collapse .accordion .accordion-item .accordion-button {\n    font-size: 24px;\n  }\n}\n\n.custom-collapse .accordion .accordion-item ::after {\n  background-image: url('downarrow.webp');\n  margin-top: 10px;\n}\n\n.custom-collapse .accordion .accordion-item .accordion-body {\n  color: #707070;\n}\n\n.toppadding {\n  padding-top: 80px;\n}\n\n.bannerdrk {\n  background-color: #000;\n}\n\n.imgblock {\n  padding: 10px 30px;\n}\n\n.imgblock img {\n  width: 100%;\n}\n\n.imgblock p {\n  color: #E5E5E3;\n  font-size: 26px;\n}\n\n@media (max-width: 1366px) {\n  .imgblock p {\n    font-size: 20px;\n  }\n}\n\n.imgblock p span {\n  color: #878787;\n}\n\n.hard-work {\n  margin: 0;\n  padding: 50px 0 30px 0px;\n}\n\n.hard-work .h2 {\n  font-size: 32px;\n  margin-top: 15px;\n  color: #878787;\n  font-weight: 600;\n}\n\n@media (max-width: 1366px) {\n  .hard-work .h2 {\n    font-size: 28px;\n  }\n}\n\n.hard-work .h1 {\n  color: #fff;\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.hard-work .rlimg {\n  width: 30px;\n}\n\n.hard-work .cmargin {\n  padding: 30px 10px 30px 0px;\n}\n\n.hard-work .cmargin h1 {\n  display: flex;\n}\n\n.hard-work .cmargin h1::before {\n  content: \"\";\n  background: #DE9B7A;\n  height: 33px;\n  width: 6px;\n  position: relative;\n  left: -10px;\n}\n\n.creativity {\n  padding: 80px 0px;\n}\n\n.creativity .creative h1 {\n  color: #fff;\n  font-size: 65px;\n  font-weight: 600;\n  margin-top: 0;\n}\n\n.creativity .creative h1 span {\n  color: #DE9B7A;\n  font-weight: 100;\n}\n\n@media (max-width: 1366px) {\n  .creativity .creative h1 {\n    font-size: 55px;\n  }\n}\n\n.creativity p {\n  color: #878787;\n  font-size: 24px;\n}\n\n@media (max-width: 1366px) {\n  .creativity p {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .creativity {\n    padding: 50px 0px;\n  }\n}\n\n.story .customslider {\n  padding-bottom: 30px;\n}\n\n.story .customslider::ng-deep .owl-carousel .owl-item:nth-child(2) img {\n  margin-top: 10px;\n}\n\n.story .customslider .owl-carousel .owl-item:nth-child(2) img {\n  margin-top: 10px;\n}\n\n.story h1 {\n  margin-top: 0;\n}\n\n.story .content-block {\n  padding: 80px 0px;\n}\n\n.story .content-block h1 {\n  font-size: 90px;\n  font-weight: 600;\n  color: #000;\n}\n\n.story .content-block h1 span {\n  font-family: \"barcelony\", sans-serif;\n  font-weight: 100;\n  color: #DA9777;\n}\n\n@media (max-width: 1366px) {\n  .story .content-block h1 {\n    font-size: 70px;\n  }\n}\n\n::ng-deep .owl-carousel .owl-item:nth-child(2) img {\n  margin-top: 10px;\n}\n\n#strategy .content p {\n  font-size: 24px;\n}\n\n#strategy .content .actn {\n  text-align: right;\n  margin: 15px 0px;\n}\n\n#strategy .content .actn .bthw {\n  text-decoration: none;\n  color: #000;\n  border: 2px solid #000;\n  text-align: center;\n  padding: 3px 24px;\n  margin-top: 20px;\n  border-radius: 30px;\n  font-weight: bold;\n}\n\n#strategy .content .actn .bthw:hover {\n  background: #000;\n  color: #DE9B7A;\n  border-color: #000;\n}\n\n#strategy .content .actn .bthw:focus {\n  border-color: #000;\n  background: #000;\n  color: #DE9B7A;\n}\n\n.talk a.more {\n  border: 2px solid #e1a181;\n  display: flex;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  justify-content: center;\n  margin: 0 auto;\n  border-radius: 50px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 28px;\n  font-weight: bold;\n  align-items: center;\n}\n\n.talk h1 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 42px;\n}\n\n.talk h1 a {\n  font-weight: bold;\n  text-decoration: none;\n  color: #fff;\n  border-bottom: 1px solid;\n}\n\n.talk h1 a span {\n  color: #DE9B7A;\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxvQ0FISztBQUpQOztBQVNBO0VBQ0UsY0FMVztBQURiOztBQVFBO0VBQ0UscUNBQUE7QUFMRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBSkY7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGNBbEJTO0FBZWI7O0FBS0U7RUFWRjtJQVdJLGVBQUE7RUFGRjtBQUNGOztBQUdFO0VBYkY7SUFjSSxlQUFBO0VBQUY7QUFDRjs7QUFDRTtFQWhCRjtJQWlCSSxlQUFBO0VBRUY7QUFDRjs7QUFERTtFQW5CRjtJQW9CSSxlQUFBO0VBSUY7QUFDRjs7QUFIRTtFQXRCRjtJQXVCSSxlQUFBO0VBTUY7QUFDRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFPRjs7QUFORTtFQUNFLGNBQUE7QUFRSjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFRRjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVFKOztBQVBJO0VBSEY7SUFJSSxlQUFBO0VBVUo7QUFDRjs7QUFUSTtFQU5GO0lBT0ksZUFBQTtFQVlKO0FBQ0Y7O0FBWEk7RUFURjtJQVVJLGVBQUE7RUFjSjtBQUNGOztBQWJJO0VBWkY7SUFhSSxlQUFBO0VBZ0JKO0FBQ0Y7O0FBYkE7RUFDRSx3QkFBQTtFQUNBLGdFQUFBO0FBZ0JGOztBQWJBO0VBQ0Usd0JBQUE7QUFlRjs7QUFaQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFlRjs7QUFkRTtFQUhGO0lBSUksNkJBQUE7SUFDQSxtQkFBQTtFQWlCRjtBQUNGOztBQWhCRTtFQUNFLGdCQUFBO0FBa0JKOztBQWZBO0VBQ0UsVUFBQTtBQWtCRjs7QUFqQkU7RUFGRjtJQUdJLDZCQUFBO0VBb0JGO0FBQ0Y7O0FBakJBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBb0JGOztBQW5CRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBcUJKOztBQXBCSTtFQUNFLFlBQUE7QUFzQk47O0FBcEJNO0VBQ0UsYUFBQTtBQXNCUjs7QUFwQk07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXNCUjs7QUFyQlE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQXVCVjs7QUFyQlE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQXVCVjs7QUFyQlE7RUFsQkY7SUFtQkksZUFBQTtFQXdCUjtBQUNGOztBQXJCTTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7QUF1QlI7O0FBckJNO0VBQ0UsY0F6SkU7QUFnTFY7O0FBbEJBO0VBQ0UsaUJBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usc0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0Usa0JBQUE7QUF1QkY7O0FBdEJFO0VBQ0UsV0FBQTtBQXdCSjs7QUF0QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXdCSjs7QUF2Qkk7RUFIRjtJQUlJLGVBQUE7RUEwQko7QUFDRjs7QUF6Qkk7RUFDRSxjQS9LSTtBQTBNVjs7QUF2QkE7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7QUEwQkY7O0FBekJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBMkJKOztBQTFCSTtFQUxGO0lBTUYsZUFBQTtFQTZCRTtBQUNGOztBQTNCRTtFQUVFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE0Qko7O0FBekJFO0VBQ0UsV0FBQTtBQTJCSjs7QUF6QkU7RUFFRSwyQkFBQTtBQTBCSjs7QUF6Qkk7RUFDRSxhQUFBO0FBMkJOOztBQXpCSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBMkJOOztBQXRCQTtFQUNFLGlCQUFBO0FBeUJGOztBQXZCSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBeUJOOztBQXhCTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQTBCUjs7QUF4Qk07RUFURjtJQVVJLGVBQUE7RUEyQk47QUFDRjs7QUF2QkU7RUFDRSxjQTdPTTtFQThPTixlQUFBO0FBeUJKOztBQXhCSTtFQUhGO0lBSUksZUFBQTtFQTJCSjtBQUNGOztBQXpCRTtFQXpCRjtJQTBCSSxpQkFBQTtFQTRCRjtBQUNGOztBQXpCRTtFQUVFLG9CQUFBO0FBMkJKOztBQTFCSTtFQUNFLGdCQUFBO0FBNEJOOztBQW5CSTtFQUNFLGdCQUFBO0FBcUJOOztBQWxCRTtFQUNFLGFBQUE7QUFvQko7O0FBbEJFO0VBQ0UsaUJBQUE7QUFvQko7O0FBbkJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXFCTjs7QUFwQk07RUFDRSxvQ0E5UUQ7RUErUUQsZ0JBQUE7RUFDQSxjQS9RTztBQXFTYjs7QUFwQk07RUFURjtJQVVKLGVBQUE7RUF1QkU7QUFDRjs7QUFuQkE7RUFDRSxnQkFBQTtBQXNCRjs7QUFsQkk7RUFDRSxlQUFBO0FBcUJOOztBQW5CSTtFQUNFLGlCQUFBO0VBQ0YsZ0JBQUE7QUFxQko7O0FBcEJJO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBcUJOOztBQXBCTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBc0JSOztBQXBCTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBc0JSOztBQVpFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFlSjs7QUFiRTtFQUNFLHFDQWhWUztFQWlWWCxlQUFBO0FBZUY7O0FBZEk7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBZ0JOOztBQWZNO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FBaUJSIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3I3MDogIzcwNzA3MDtcbiRjb2xvcjg3OiAjODc4Nzg3O1xuJGNvbG9yYzM6ICNjM2MzYzM7XG4vLyAkY29sb3JzZWE6IzAwRTJGRjtcbiRjb2xvcnNlYTogIzFhMjdjOTtcbiRmb250LWZhbWlseTpcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiRicmN5OiBcImJhcmNlbG9ueVwiLCBzYW5zLXNlcmlmO1xuJGZhbWUtb3JhbmdlOiNEQTk3Nzc7XG4uYmFyY3l7XG4gIGZvbnQtZmFtaWx5OiAkYnJjeTtcbn1cbi50ZXh0LWNvbG9ye1xuICBjb2xvcjogJGZhbWUtb3JhbmdlO1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi5oMSB7XG4gIGNvbG9yOiAjMTAxMDEwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwO1xuICAuYmFyY2VseSB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBjb2xvcjogJGZhbWUtb3JhbmdlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDkwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBmb250LXNpemU6IDU0cHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG4uY2Jhbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9waXh0YXItc3BsaXRsb2dvLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDclO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgLmRvdHtcbiAgICBjb2xvcjojREU5QjdBO1xuICB9XG59XG4ubG9nb3RleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAtMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmJhbm5lciB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJhcmNlbG9ueVwiO1xuICBzcmM6IGxvY2FsKFwiYmFyY2Vsb255XCIpLFxuICAgIHVybCguLi8uLi9hc3NldHMvZm9udHMvYmFyY2Vsb255LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4uYmFyY2VseSB7XG4gIGZvbnQtZmFtaWx5OiBcImJhcmNlbG9ueVwiO1xufVxuXG4uYmFubmVyLWxlZnQtY29udGVudCB7XG4gIGxlZnQ6IDUlICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMyUgIWltcG9ydGFudDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNSUgIWltcG9ydGFudDtcbiAgfVxuICBwLnRleHQtY29sb3J7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuLmRvd24tYXJyb3cge1xuICBib3R0b206IDglO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY3VzdG9tLWNvbGxhcHNlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZiZmJmZDtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDAwMDBkO1xuICAuYWNjb3JkaW9uIHtcbiAgICAtLWJzLWFjY29yZGlvbi1iZzogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5hY2NvcmRpb24taXRlbSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgIC5hY2NvcmRpb24taGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICAgIC5hY2NvcmRpb24tYnV0dG9uIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvcjg3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjEzNjZweCl7XG4gICAgICAgICAgZm9udC1zaXplOjI0cHg7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9kb3duYXJyb3cud2VicFwiKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5hY2NvcmRpb24tYm9keSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3I3MDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi50b3BwYWRkaW5ne1xuICBwYWRkaW5nLXRvcDogODBweDsgXG59XG4uYmFubmVyZHJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5pbWdibG9jayB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogI0U1RTVFMztcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgQG1lZGlhKG1heC13aWR0aDoxMzY2cHgpe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAkY29sb3I4NztcbiAgICB9XG4gIH1cbn1cbi5oYXJkLXdvcmsge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDUwcHggMCAzMHB4IDBweCA7XG4gIC5oMiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6ICM4Nzg3ODc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBAbWVkaWEobWF4LXdpZHRoOjEzNjZweCl7XG5mb250LXNpemU6IDI4cHg7XG4gICAgfVxuICB9XG4gIC5oMSB7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gIH1cbiAgLnJsaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuICAuY21hcmdpbiB7XG4gICAgLy8gbWFyZ2luOiAwIDAgNTBweCAzMHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMTBweCAzMHB4IDBweCA7XG4gICAgaDF7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJjo6YmVmb3Jle1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kOiAjREU5QjdBO1xuICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IC0xMHB4O1xuICAgIH1cbiAgfVxuICB9XG59XG4uY3JlYXRpdml0eSB7XG4gIHBhZGRpbmc6IDgwcHggMHB4O1xuICAuY3JlYXRpdmUge1xuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNERTlCN0E7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOjEzNjZweCl7XG4gICAgICAgIGZvbnQtc2l6ZTogNTVweDtcblxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwIHtcbiAgICBjb2xvcjogJGNvbG9yODc7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIEBtZWRpYShtYXgtd2lkdGg6MTM2NnB4KXtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhKG1heC13aWR0aDoxMzY2cHgpe1xuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xuICB9XG59XG4uc3Rvcnkge1xuICAuY3VzdG9tc2xpZGVyIHtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkzOTM5MztcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAmOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtOm50aC1jaGlsZCgyKSBpbWcge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAvLyAgICAgJGVsZW1lbnRzOiAyMztcbiAgICAvLyBAZm9yICRpIGZyb20gMCB0byAkZWxlbWVudHMge1xuICAgIC8vICAgZGl2Om50aC1jaGlsZCgjeyRpICsgMX0pIHtcbiAgICAvLyAgICAgIGJhY2tncm91bmQ6IHJnYigkaSwgJGksICRpKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW06bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuICBoMXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5jb250ZW50LWJsb2Nre1xuICAgIHBhZGRpbmc6IDgwcHggMHB4O1xuICAgIGgxe1xuICAgICAgZm9udC1zaXplOiA5MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgc3BhbntcbiAgICAgICAgZm9udC1mYW1pbHk6ICRicmN5O1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIGNvbG9yOiAkZmFtZS1vcmFuZ2U7XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOjEzNjZweCl7XG5mb250LXNpemU6IDcwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG46Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW06bnRoLWNoaWxkKDIpIGltZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jc3RyYXRlZ3l7XG4gIC5jb250ZW50IHtcbiAgICBwe1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuYWN0bntcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMTVweCAwcHg7XG4gICAgLmJ0aHd7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyB3aWR0aDogMTAwcHg7XG4gICAgICBwYWRkaW5nOiAzcHggMjRweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogI0RFOUI3QTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiMwMDA7XG4gICAgICB9XG4gICAgICAmOmZvY3Vze1xuICAgICAgICBib3JkZXItY29sb3I6IzAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgY29sb3I6ICNERTlCN0E7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIH1cbiAgXG4gIFxufVxuLnRhbGsgXG57XG4gIGEubW9yZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFhMTgxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIGgxe1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogNDJweDsgXG4gICAgYXtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgICBzcGFue1xuICAgICAgICBjb2xvcjogI0RFOUI3QTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/profile/profile.component */ "xQKc");
/* harmony import */ var _examples_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/signup/signup.component */ "ENsn");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/landing/landing.component */ "AXTl");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "+GGL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _culture_culture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./culture/culture.component */ "iBZ1");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "KfLr");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "84zG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'culture', component: _culture_culture_component__WEBPACK_IMPORTED_MODULE_9__["CultureComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
    { path: 'user-profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'signup', component: _examples_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_7__["NucleoiconsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "BGiY");
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss */ "Np+I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.ctorParameters = function () { return []; };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contact',
            template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background: transparent;\n  box-shadow: none;\n}\n.navbar .logo1 {\n  display: none !important;\n}\n.navbar .logo1 .ptext {\n  position: relative;\n  top: 5px;\n}\n.navbar .logo2 {\n  display: block !important;\n}\n.navbar .menu-list h3 {\n  color: #000;\n}\n.navbar ul {\n  list-style: none;\n}\n.navbar ul li i {\n  transition: all 0.4s ease;\n  opacity: 0;\n}\n.navbar ul li a {\n  color: #000;\n  text-decoration: none;\n}\n.navbar ul li:hover i, .navbar ul li:focus i, .navbar ul li:active i, .navbar ul li:visited i {\n  color: #d16a4c;\n  opacity: 1;\n  transform: rotateZ(60deg);\n}\n.navbar ul li:hover a, .navbar ul li:focus a, .navbar ul li:active a, .navbar ul li:visited a {\n  color: #d16a4c;\n}\n.navbar h1 {\n  font-family: \"Montserrat\", sans-serif !important;\n  font-weight: bold;\n  color: #000;\n}\n.navbar.navbar-transparent {\n  border-bottom: none;\n  box-shadow: none;\n  padding-top: 0;\n}\n.navbar.navbar-transparent .logo1 {\n  display: block !important;\n}\n.navbar.navbar-transparent .logo2 {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUdFO0VBQ0Usd0JBQUE7QUFESjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBQU47QUFHRTtFQUNFLHlCQUFBO0FBREo7QUFJSTtFQUNFLFdBQUE7QUFGTjtBQUtFO0VBQ0UsZ0JBQUE7QUFISjtBQUtNO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0FBSFI7QUFLTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUhSO0FBZ0JRO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQWRWO0FBZ0JRO0VBQ0UsY0FBQTtBQWRWO0FBbUJFO0VBQ0UsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFqQko7QUFvQkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWpCRjtBQWtCRTtFQUNFLHlCQUFBO0FBaEJKO0FBa0JFO0VBQ0Usd0JBQUE7QUFoQkoiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAvLyAubWVudS1ibG9ja3tcbiAgLy8gICBwYWRkaW5nOjBweCA4MHB4O1xuICAvLyB9XG4gIC5sb2dvMSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC5wdGV4dHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogNXB4O1xuICAgIH1cbiAgfVxuICAubG9nbzIge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lbnUtbGlzdHtcbiAgICBoM3tcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaSB7XG4gICAgICBpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAvLyAmOjpiZWZvcmV7XG4gICAgICAgIC8vICAgY29udGVudDogJ1xcMjE5MCc7XG4gICAgICAgIC8vICAgd2lkdGg6MTAwcHg7XG4gICAgICAgIC8vICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAvLyAgIHRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKC40MDUsMCwuMDI1LDEpO1xuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KSByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgLy8gICB9XG4gICAgICB9XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6YWN0aXZlLFxuICAgICAgJjp2aXNpdGVkIHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICNkMTZhNGM7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjZDE2YTRjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGgxe1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG59XG4ubmF2YmFyLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctdG9wOjAgO1xuICAubG9nbzEge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxvZ28yIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "eEW7":
/*!***********************************************!*\
  !*** ./src/app/culture/culture.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWx0dXJlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer .social-links ul {\n  padding: 0;\n  list-style: none;\n}\n.footer .social-links ul li a {\n  margin: 0px 5px;\n}\n@media (max-width: 1366px) {\n  .footer .social-links ul li a img {\n    width: 38px;\n    height: 38px;\n  }\n}\n.footer .desb {\n  font-size: 32px;\n}\n@media (max-width: 1366px) {\n  .footer .desb {\n    font-size: 26px;\n  }\n}\n.footer .describe {\n  margin: 20px 0px 50px 0px;\n}\n@media (max-width: 1366px) {\n  .footer .describe .qrcode {\n    width: 150px;\n    height: 150px;\n  }\n}\n.footer .describe .call h2 {\n  font-family: \"barcelony\", sans-serif;\n  font-size: 78px;\n  color: #000;\n}\n@media (max-width: 1366px) {\n  .footer .describe .call h2 {\n    font-size: 60px;\n  }\n}\n.footer .describe .call h1 {\n  color: #000;\n  font-size: 90px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n@media (max-width: 1366px) {\n  .footer .describe .call h1 {\n    font-size: 70px;\n  }\n}\n.footer .footer-block .d-flex1 p {\n  font-size: 20px;\n}\n@media (max-width: 1366px) {\n  .footer .footer-block .d-flex1 p {\n    font-size: 18px;\n  }\n}\n.footer .footer-block .d-flex2 ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n}\n.footer .footer-block .d-flex2 ul li {\n  margin: 0px 10px;\n}\n.footer .footer-block .d-flex2 ul li a {\n  text-decoration: none;\n  color: #000;\n  font-size: 18px;\n}\n.footer .footer-block .d-flex2 ul li a:hover {\n  color: #dd9a7a;\n}\n.footer .footer-block .d-flex2 ul li a:focus {\n  color: #dd9a7a;\n}\n@media (max-width: 1366px) {\n  .footer .footer-block .d-flex2 ul li a {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUROO0FBRU07RUFDRSxlQUFBO0FBQVI7QUFHUTtFQURGO0lBRUksV0FBQTtJQUNBLFlBQUE7RUFBUjtBQUNGO0FBSUU7RUFDRSxlQUFBO0FBRko7QUFHSTtFQUZGO0lBR0ksZUFBQTtFQUFKO0FBQ0Y7QUFFRTtFQUNFLHlCQUFBO0FBQUo7QUFFTTtFQURGO0lBRUksWUFBQTtJQUNBLGFBQUE7RUFDTjtBQUNGO0FBRU07RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUpGO0lBS0ksZUFBQTtFQUVSO0FBQ0Y7QUFBTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRFE7RUFMRjtJQU1JLGVBQUE7RUFJUjtBQUNGO0FBRU07RUFDRSxlQUFBO0FBQVI7QUFDUTtFQUZGO0lBR0ksZUFBQTtFQUVSO0FBQ0Y7QUFFTTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0UsZ0JBQUE7QUFDVjtBQUFVO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUVaO0FBRFk7RUFDRSxjQUFBO0FBR2Q7QUFEWTtFQUNFLGNBQUE7QUFHZDtBQURZO0VBVkY7SUFXSSxlQUFBO0VBSVo7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgLnNvY2lhbC1saW5rcyB7XG4gICAgdWwge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBsaSBhIHtcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgfVxuICAgICAgbGkgYSBpbWcge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kZXNiIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgfVxuICAuZGVzY3JpYmUge1xuICAgIG1hcmdpbjogMjBweCAwcHggNTBweCAwcHg7XG4gICAgLnFyY29kZSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhbGwge1xuICAgICAgaDIge1xuICAgICAgICBmb250LWZhbWlseTogXCJiYXJjZWxvbnlcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiA3OHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiA5MHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZm9vdGVyLWJsb2NrIHtcbiAgICAuZC1mbGV4MSB7XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kLWZsZXgyIHtcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2RkOWE3YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBjb2xvcjogI2RkOWE3YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "iBZ1":
/*!**********************************************!*\
  !*** ./src/app/culture/culture.component.ts ***!
  \**********************************************/
/*! exports provided: CultureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureComponent", function() { return CultureComponent; });
/* harmony import */ var _raw_loader_culture_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./culture.component.html */ "0CVK");
/* harmony import */ var _culture_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./culture.component.css */ "eEW7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CultureComponent = /** @class */ (function () {
    function CultureComponent() {
    }
    CultureComponent.prototype.ngOnInit = function () {
    };
    CultureComponent.ctorParameters = function () { return []; };
    CultureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-culture',
            template: _raw_loader_culture_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_culture_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CultureComponent);
    return CultureComponent;
}());



/***/ }),

/***/ "ieWF":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "AXTl");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "xQKc");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "ENsn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "ijUo":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section .banner img {\n  width: auto;\n}\n\nsection {\n  background-color: #000;\n}\n\nsection .start-31 {\n  left: 31%;\n}\n\nsection .content {\n  width: 400px;\n}\n\nsection img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtBQUROOztBQUtBO0VBQ0Usc0JBQUE7QUFGRjs7QUFHRTtFQUNBLFNBQUE7QUFERjs7QUFHRTtFQUNFLFlBQUE7QUFESjs7QUFHRTtFQUNFLFdBQUE7QUFESiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG4gIC5iYW5uZXJ7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG59XG5zZWN0aW9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAuc3RhcnQtMzF7XG4gIGxlZnQ6IDMxJTtcbiAgfVxuICAuY29udGVudHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbiAgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "o8F2");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "mvyS");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ "QhSr");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "+GGL");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.component */ "93si");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.component */ "9ldr");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "j5By":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section.cst-tabs {\n  margin-top: 15rem;\n}\nsection.cst-tabs .nav-pills {\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: center;\n}\nsection.cst-tabs .nav-pills .nav-item .nav-link {\n  border: none;\n  color: #000;\n  font-weight: 100;\n}\nsection.cst-tabs .nav-pills .nav-item .nav-link.active {\n  background: transparent;\n  font-weight: 600;\n}\nsection.cst-tabs .tab-content {\n  background-color: #000;\n  padding: 50px 0px;\n}\nsection.cst-tabs .tab-content .project-block img {\n  width: 100%;\n}\nsection.cst-tabs .tab-content .project-right-block img {\n  width: 100%;\n}\nsection.cst-tabs .tab-content a.more {\n  border: 2px solid #e1a181;\n  display: flex;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  justify-content: center;\n  margin: 0 auto;\n  border-radius: 50px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 28px;\n  font-weight: bold;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdOO0FBREk7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBR047QUFBRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0FBR047QUFESTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR04iLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uLmNzdC10YWJzIHtcbiAgbWFyZ2luLXRvcDogMTVyZW07XG4gIC5uYXYtcGlsbHMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG4gICAgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuICAudGFiLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogNTBweCAwcHg7XG4gICAgLnByb2plY3QtYmxvY2sgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucHJvamVjdC1yaWdodC1ibG9jayBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIGEubW9yZSB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFhMTgxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-11 m-auto\">\n\t\t\t\t<p class=\"text-center desb\">Describe your project</p>\n\t\t\t\t<div class=\"describe d-flex flex-row justify-content-center\">\n\t\t\t\t\t<img class=\"qrcode\" src=\"../../../assets/img/home/qrcode.webp\" alt=\"qrcode\" width=\"188\" height=\"188\">\n\t\t\t\t\t<div class=\"call\">\n\t\t\t\t\t\t<h2 class=\"m-0 ms-3\">Call</h2>\n\t\t\t\t\t\t<h1 class=\"m-0 ms-3\">Pixtar.</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t<nav class=\"footer-nav\">\n\t\t\t\t<!-- <ul>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n\t\t\t\t\t<li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n\t\t\t\t\t<li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n\t\t\t\t</ul> -->\n\t\t\t\t<div class=\"d-flex justify-content-between footer-block\">\n\t\t\t\t\t<div class=\"d-flex1 \">\n\t\t\t\t\t\t<p>Pixtar Branding Services LLC.</p>\n\t\t\t\t\t\t<p>Dubai United Arab Emirates</p>\n\t\t\t\t\t\t<p>+971527930781</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex2\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\">Projects</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Services</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">About</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"social-links\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/img/home/facebook.svg\" alt=\"\" width=\"48\" height=\"48\"> </a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/img/home/instagram.svg\" alt=\"\" width=\"48\" height=\"48\"> </a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/img/home/twitter.svg\" alt=\"\" width=\"48\" height=\"48\"> </a>\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"../../../assets/img/home/linkedin.svg\" alt=\"\" width=\"48\" height=\"48\"> </a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</nav>\n\t\t</div>\n\t\t\t<div class=\"credits ml-auto\">\n\t\t\t\t<span class=\"copyright\">\n\t\t\t\t\t© {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Ingeniouspix.com\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "m0SB":
/*!************************************************!*\
  !*** ./src/app/providers/page/page.service.ts ***!
  \************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageService = /** @class */ (function () {
    function PageService(http) {
        var _this = this;
        this.http = http;
        this.getpageWithName = function (moreData) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/home/getpagewithName';
            return _this.http
                .post(endpoint, moreData, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getHomepageWithName = function (moreData) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/home/gethomepagewithName';
            return _this.http
                .post(endpoint, moreData, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
        this.getAboutNoticeDetails = function (data) {
            var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/api/home/frountAboutNoticeDetails';
            return _this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }));
        };
    }
    PageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "mMT2":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".service-banner .block-content {\n  background: url('white.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 30%;\n  opacity: 0.5;\n}\n.service-banner .block-content h1 {\n  font-size: 60px;\n  font-weight: bold;\n}\n.service-banner .block-content p {\n  font-size: 32px;\n  font-weight: 500;\n}\n.services .service-content h1 {\n  font-size: 60px;\n  font-weight: bold;\n}\n.services .service-content p {\n  font-size: 34px;\n  font-weight: 500;\n}\n.color1 {\n  color: #DA9777;\n}\n.barcelony {\n  font-family: \"barcelony\";\n  font-size: 52px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQUY7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREo7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUE7RUFDRSxjQUFBO0FBREY7QUFHQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFBQSIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWJhbm5lcntcbiAgLmJsb2NrLWNvbnRlbnR7IFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvc2VydmljZXMvd2hpdGUuc3ZnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAzMCU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgaDF7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIHB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbn1cbi5zZXJ2aWNlcyAuc2VydmljZS1jb250ZW50e1xuICBoMXtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgcHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuLmNvbG9yMXtcbiAgY29sb3I6ICNEQTk3Nzc7XG59XG4uYmFyY2Vsb255e1xuZm9udC1mYW1pbHk6IFwiYmFyY2Vsb255XCI7XG5mb250LXNpemU6IDUycHggIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "mS3H":
/*!*******************************************************!*\
  !*** ./src/app/examples/signup/signup.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "7pPp");
/* harmony import */ var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.scss */ "r7bM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.ctorParameters = function () { return []; };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation',
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "o8F2":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./basicelements.component.html */ "1RpN");
/* harmony import */ var _basicelements_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicelements.component.scss */ "4Wxn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent.ctorParameters = function () { return []; };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-basicelements',
            template: _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_basicelements_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "oy3u":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "q3QT":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Jane Faker<br /></h4>\n                    <h6 class=\"description\">Music Producer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Follows\">\n                            <ng-template ngbTabContent >\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n                                        <ul class=\"list-unstyled follows\">\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Banks<br /><small>Singer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Following\">\n                            <ng-template ngbTabContent>\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                <br>\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "r7bM":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "vG3S":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n");

/***/ }),

/***/ "xQKc":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "q3QT");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ "zXGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row w-100\">\n\t\t\t<div class=\"col-lg-10 offset-lg-1\">\n\t\t\t\t<div class=\"menu-container\" style=\"width:100%;\">\n\t\t\t\t\t<div class=\"d-flex justify-content-between menu-block\">\n\t\t\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<!-- <img src=\"assets/img/logos/foiled.svg\" alt=\"pixtar-logo\" width=\"40\" class=\"logo1\"> -->\n\t\t\t\t\t\t<h1 class=\" d-flex flex-row align-items-center logo1\"><img src=\"../../assets/img/logos/pixtar-logo.svg\"\n\t\t\t\t\t\t\t\talt=\"pixtar logo\" width=\"70\"> <span  class=\"ptext opacity-1\"> Pixtar </span></h1>\n\t\t\t\t\t\t<!-- <img class=\"logo2\" src=\"assets/img/logos/pixtar-black-logo.svg\" alt=\"\" width=\"55\"> -->\n\t\t\t\t\t\t<h1 class=\" d-flex flex-row align-items-center logo2\"><img src=\"../../assets/img/logos/pixtar-logo-w-b.svg\"\n\t\t\t\t\t\t\talt=\"pixtar logo\" width=\"70\" > <span class=\"opacity-0\"> Pixtar </span></h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"menu-list\">\n\t\t\t\t\t\t\t<h3>Menu</h3>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li> <i class=\"fa fa-arrow-left\"></i> <a href=\"#/projects\">Projects</a> </li>\n\t\t\t\t\t\t\t\t<li> <i class=\"fa fa-arrow-left\"></i> <a href=\"#/services\">Service</a> </li>\n\t\t\t\t\t\t\t\t<li> <i class=\"fa fa-arrow-left\"></i> <a href=\"#/about\">About</a> </li>\n\t\t\t\t\t\t\t\t<li> <i class=\"fa fa-arrow-left\"></i> <a href=\"#/contact\">Contact</a> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</nav>");

/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./projects.component.html */ "aMQp");
/* harmony import */ var _projects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.scss */ "j5By");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.ctorParameters = function () { return []; };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-projects',
            template: _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_projects_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zXGc":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map