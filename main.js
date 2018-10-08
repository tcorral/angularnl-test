(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n.open-close-container {\n    border: 1px solid #dddddd;\n    margin-top: 1em;\n    padding: 20px 20px 0px 20px;\n    color: #000000;\n    font-weight: bold;\n    font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div appThemeLoader>\n  <app-header [config]=\"config\"></app-header>\n  <app-landing [config]=\"config\"></app-landing>\n  <app-mission [config]=\"config\"></app-mission>\n  <app-speakers [config]=\"config\"></app-speakers>\n  <app-location [config]=\"config\"></app-location>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/config-loader.service */ "./src/app/services/config-loader.service.ts");
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
    function AppComponent(configLoaderService) {
        this.configLoaderService = configLoaderService;
        this.title = 'app';
        this.toState = 'state1';
        this.config = this.configLoaderService.config;
    }
    AppComponent.prototype.changeState = function (state) {
        this.toState = state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__["ConfigLoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_config_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/config-loader.service */ "./src/app/services/config-loader.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _directives_theme_loader_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/theme-loader.directive */ "./src/app/directives/theme-loader.directive.ts");
/* harmony import */ var _components_landing_background_landing_background_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/landing-background/landing-background.component */ "./src/app/components/landing-background/landing-background.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mission/mission.component */ "./src/app/components/mission/mission.component.ts");
/* harmony import */ var _components_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/speakers/speakers.component */ "./src/app/components/speakers/speakers.component.ts");
/* harmony import */ var _components_speaker_speaker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/speaker/speaker.component */ "./src/app/components/speaker/speaker.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _components_test_animation_test_animation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/test-animation/test-animation.component */ "./src/app/components/test-animation/test-animation.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _directives_theme_loader_directive__WEBPACK_IMPORTED_MODULE_7__["ThemeLoaderDirective"],
                _components_landing_background_landing_background_component__WEBPACK_IMPORTED_MODULE_8__["LandingBackgroundComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_10__["MissionComponent"],
                _components_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_11__["SpeakersComponent"],
                _components_speaker_speaker_component__WEBPACK_IMPORTED_MODULE_12__["SpeakerComponent"],
                _components_location_location_component__WEBPACK_IMPORTED_MODULE_13__["LocationComponent"],
                _components_test_animation_test_animation_component__WEBPACK_IMPORTED_MODULE_14__["TestAnimationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_config_loader_service__WEBPACK_IMPORTED_MODULE_5__["ConfigLoaderService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: function (cls) { return function () { return cls.load(); }; },
                    deps: [_services_config_loader_service__WEBPACK_IMPORTED_MODULE_5__["ConfigLoaderService"]],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentWrapper hidden\" #headerEl>\n  <div class=\"leftMenu\">\n    <a class=\"burgerIcon\" #burgerIcon (click)=\"openingDropdown(burgerIcon)\">\n      <span></span>\n    </a>\n    <a *ngIf=\"config.event\" [href]=\"config.event.url\" class=\"logoMain\">\n      <span class=\"logo\"></span>\n    </a>\n    <div class=\"dropdown\" #dropdownEl>\n      <div class=\"intro\"></div>\n      <div class=\"dropdownContent\">\n        <a *ngFor=\"let event of config.other_events\" [href]=\"event.url\">\n          <figure [ngClass]=\"event.className\"></figure> <span>{{ event.label }}</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"navigationList\">\n    <ul class=\"innerNavigationList\">\n      <li *ngFor=\"let route of routes\" class=\"optionWrapper\">\n        <a [href]=\"route.path\" class=\"option\">\n          {{ route.label }}\n        </a>\n      </li>\n    </ul>\n    <div class=\"socialWrapper\">\n      <div class=\"innerSocialWrapper\">\n        <div class=\"ticketButtonContainer\">\n          <div class=\"ticketButtonWrapper\">\n            <a *ngIf=\"config.event\" [href]=\"config.event.tickets.url\" class=\"ticketButton\">\n              <span>{{ config.event.tickets.label }}</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <nav class=\"navigation\">\n    <a *ngFor=\"let route of routes\" [href]=\"route.path\" class=\"option\">\n      {{ route.label }}\n    </a>\n    <a #ticketButtonEl *ngIf=\"config.event\" [href]=\"config.event.tickets.url\" class=\"ticketButton\">\n      <span>{{ config.event.tickets.label }}</span>\n    </a>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_routes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/routes.service */ "./src/app/services/routes.service.ts");
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
    function HeaderComponent(routesService) {
        this.routesService = routesService;
        this.routes = this.routesService.get();
    }
    HeaderComponent.prototype.openingDropdown = function (element) {
        element.classList.toggle('active');
        this.dropdownEl.nativeElement.classList.toggle('show');
    };
    HeaderComponent.prototype.ngAfterViewChecked = function () {
        this.headerEl.nativeElement.classList.remove('hidden');
        this.headerEl.nativeElement.classList.add('show');
        if (this.ticketButtonEl) {
            this.ticketButtonEl.nativeElement.classList.add('show');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('headerEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "headerEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ticketButtonEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "ticketButtonEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdownEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "dropdownEl", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_routes_service__WEBPACK_IMPORTED_MODULE_1__["RoutesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-background/landing-background.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/landing-background/landing-background.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/landing-background/landing-background.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/landing-background/landing-background.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"config\">\n  <div class=\"contentWrapper\" [ngClass]=\"{ video: isVideo(), image: isImage(), mobile: mobile, ie: ie }\">\n    <div *ngIf=\"isImage()\" class=\"background\">\n      <div class=\"background back1\"></div>\n      <div class=\"background back2\"></div>\n      <div class=\"background back3\"></div>\n      <div class=\"background back4\"></div>>\n    </div>\n    <video *ngIf=\"isVideo() && !mobile && !ie\" [src]=\"config.event.background.url\" class=\"background\"\n      autoplay muted onloadedmetadata=\"muted = true\" ref=\"video\" loop=\"false\"></video>\n    <div *ngIf=\"isVideo && (mobile || ie)\" class=\"backgroundMobile\"></div>\n    <div class=\"logoContainer\">\n      <div class=\"logo\" [style]=\"getLogoStyle()\" #logoEl></div>\n    </div>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/landing-background/landing-background.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/landing-background/landing-background.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LandingBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingBackgroundComponent", function() { return LandingBackgroundComponent; });
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

var LandingBackgroundComponent = /** @class */ (function () {
    function LandingBackgroundComponent() {
    }
    LandingBackgroundComponent.prototype.isVideo = function () {
        var event = this.config.event;
        var result = false;
        if (event) {
            result = event.background.type === 'video';
        }
        return result;
    };
    LandingBackgroundComponent.prototype.isImage = function () {
        var event = this.config.event;
        var result = false;
        if (event) {
            result = event.background.type === 'image';
        }
        return result;
    };
    LandingBackgroundComponent.prototype.getLogoStyle = function () {
        var event = this.config.event;
        var result = {};
        if (event) {
            result = {
                backgroundImage: "url(" + this.config.event.background.logo + ");"
            };
        }
        return result;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LandingBackgroundComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('logoEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingBackgroundComponent.prototype, "logoEl", void 0);
    LandingBackgroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-background',
            template: __webpack_require__(/*! ./landing-background.component.html */ "./src/app/components/landing-background/landing-background.component.html"),
            styles: [__webpack_require__(/*! ./landing-background.component.css */ "./src/app/components/landing-background/landing-background.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingBackgroundComponent);
    return LandingBackgroundComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box,\n.scrollCtaWrapper {\n    height: 40px;\n    margin: auto;\n    overflow: hidden;\n    position: relative;\n}\n\nul,\n.scrollCta {\n    margin: 0;\n    padding: 0;\n    -webkit-animation: scrollDown 1.5s .16s infinite forwards;\n    animation: scrollDown 1.5s .16s infinite forwards;\n}\n\nul li,\nul div,\n.scrollCta li,\n.scrollCta div {\n    opacity: 1;\n    height: 20px;\n    padding: 20px;\n    list-style: none;\n}\n\n@-webkit-keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes scrollDown {\n    from {\n        -webkit-transform: translateY(-60%);\n        transform: translateY(-60%);\n    }\n    to {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n  }\n\n@keyframes scrollDown {\n    from {\n        -webkit-transform: translateY(-60%);\n        transform: translateY(-60%)\n    }\n    to {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contentWrapper scroll-section full-height\" #landingEl>\n  <div class=\"innerContentWrapper\" *ngIf=\"config && config.event\" >\n    <app-landing-background [config]=\"config\"></app-landing-background>\n    <div class=\"innerContentCopy page\">\n      <p class=\"header\"></p>\n      <div class=\"mainTitle\">\n        <h1 class=\"title page\">{{ config.event.name }}</h1>\n      </div>\n      <div class=\"infoLocationDate copy\">\n        {{ config.event.date + ' ' + config.event.year }}\n      </div>\n    </div>\n    <div class=\"scrollCtaWrapper page\" >\n      <div class=\"scrollCta\">\n        <div>Scroll Down</div>\n        <div>Scroll Down</div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngAfterViewChecked = function () {
        this.landingEl.nativeElement.classList.add('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LandingComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('landingEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingComponent.prototype, "landingEl", void 0);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/location/location.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/location/location.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/location/location.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"isinviewport isfullyinviewport scroll-section contentWrapper\" #locationEl>\n  <div class=\"background\"></div>\n</section>"

/***/ }),

/***/ "./src/app/components/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config-loader.service */ "./src/app/services/config-loader.service.ts");
/* harmony import */ var _services_wp_categories_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wp-categories-api.service */ "./src/app/services/wp-categories-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationComponent = /** @class */ (function () {
    function LocationComponent(configLoaderService, wpCategoriesApiService) {
        var _this = this;
        this.configLoaderService = configLoaderService;
        this.wpCategoriesApiService = wpCategoriesApiService;
        var config = this.configLoaderService.config;
        this.wpCategoriesApiService
            .get(config['categories'].location)
            .subscribe(function (posts) { return _this.mission = posts[0].content.rendered; });
    }
    LocationComponent.prototype.ngAfterViewChecked = function () {
        this.locationEl.nativeElement.classList.add('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LocationComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('locationEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LocationComponent.prototype, "locationEl", void 0);
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/components/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [_services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__["ConfigLoaderService"], _services_wp_categories_api_service__WEBPACK_IMPORTED_MODULE_2__["WpCategoriesApiService"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/mission/mission.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/mission/mission.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mission/mission.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/mission/mission.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contentWrapper scroll-section section-padding\" #missionEl>\n  <div class=\"innerContentWrapper inner-header-section\">\n    <header class=\"header-section\" [ngClass]=\"'color-' + config.event.header_color\">\n      <h2>\n        <span class=\"header-image\"></span>\n      </h2>\n    </header>\n    <div class=\"copyWrapper\">\n      <div [ngClass]=\"{ showUnderline: showUnderline }\" class=\"content copy-description blue\" #missionContentEl></div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/mission/mission.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/mission/mission.component.ts ***!
  \*********************************************************/
/*! exports provided: MissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionComponent", function() { return MissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config-loader.service */ "./src/app/services/config-loader.service.ts");
/* harmony import */ var _services_wp_categories_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wp-categories-api.service */ "./src/app/services/wp-categories-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MissionComponent = /** @class */ (function () {
    function MissionComponent(configLoaderService, wpCategoriesApiService, sanitizer) {
        var _this = this;
        this.configLoaderService = configLoaderService;
        this.wpCategoriesApiService = wpCategoriesApiService;
        this.sanitizer = sanitizer;
        var config = this.configLoaderService.config;
        this.wpCategoriesApiService
            .get(config['categories'].mission)
            .subscribe(function (posts) { return _this.mission = posts[0].content.rendered; });
    }
    MissionComponent.prototype.ngAfterViewChecked = function () {
        this.missionEl.nativeElement.classList.add('show');
        this.missionContentEl.nativeElement.innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.mission);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MissionComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('missionEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MissionComponent.prototype, "missionEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('missionContentEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MissionComponent.prototype, "missionContentEl", void 0);
    MissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mission',
            template: __webpack_require__(/*! ./mission.component.html */ "./src/app/components/mission/mission.component.html"),
            styles: [__webpack_require__(/*! ./mission.component.css */ "./src/app/components/mission/mission.component.css")]
        }),
        __metadata("design:paramtypes", [_services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__["ConfigLoaderService"],
            _services_wp_categories_api_service__WEBPACK_IMPORTED_MODULE_2__["WpCategoriesApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"]])
    ], MissionComponent);
    return MissionComponent;
}());



/***/ }),

/***/ "./src/app/components/speaker/speaker.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/speaker/speaker.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/speaker/speaker.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/speaker/speaker.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ speaker.title.rendered }}"

/***/ }),

/***/ "./src/app/components/speaker/speaker.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/speaker/speaker.component.ts ***!
  \*********************************************************/
/*! exports provided: SpeakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerComponent", function() { return SpeakerComponent; });
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

var SpeakerComponent = /** @class */ (function () {
    function SpeakerComponent() {
    }
    SpeakerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeakerComponent.prototype, "speaker", void 0);
    SpeakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speaker',
            template: __webpack_require__(/*! ./speaker.component.html */ "./src/app/components/speaker/speaker.component.html"),
            styles: [__webpack_require__(/*! ./speaker.component.css */ "./src/app/components/speaker/speaker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakerComponent);
    return SpeakerComponent;
}());



/***/ }),

/***/ "./src/app/components/speakers/speakers.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/speakers/speakers.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/speakers/speakers.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/speakers/speakers.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contentWrapper scroll-section\" #speakersEl>\n  <div class=\"noise\"></div>\n  <div class=\"inner-header-section section-padding innerContentWrapperHeader\">\n    <header class=\"header-section\" [ngClass]=\"'color-' + config.event.header_color\">\n      <h2>\n        <span class=\"header-image\"></span>\n      </h2>\n    </header>\n    <div class=\"navigation\">\n      <a class=\"option copy-big navigation-option-1\" [ngClass]=\"{ selected: hostsSelected }\">\n        Discover<br><span>our hosts</span>\n      </a>\n    </div>\n  </div>\n  <div class=\"speakerListWrapper\">\n    <app-speaker *ngFor=\"let speaker of speakers\" [speaker]=\"speaker\"></app-speaker>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/speakers/speakers.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/speakers/speakers.component.ts ***!
  \***********************************************************/
/*! exports provided: SpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersComponent", function() { return SpeakersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config-loader.service */ "./src/app/services/config-loader.service.ts");
/* harmony import */ var _services_wp_categories_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wp-categories-api.service */ "./src/app/services/wp-categories-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent(configLoaderService, wpCategoriesApiService) {
        var _this = this;
        this.configLoaderService = configLoaderService;
        this.wpCategoriesApiService = wpCategoriesApiService;
        var config = this.configLoaderService.config;
        this.wpCategoriesApiService
            .get(config['categories'].speakers)
            .subscribe(function (posts) { return _this.speakers = posts; });
    }
    SpeakersComponent.prototype.ngAfterViewChecked = function () {
        this.speakersEl.nativeElement.classList.add('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeakersComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('speakersEl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SpeakersComponent.prototype, "speakersEl", void 0);
    SpeakersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speakers',
            template: __webpack_require__(/*! ./speakers.component.html */ "./src/app/components/speakers/speakers.component.html"),
            styles: [__webpack_require__(/*! ./speakers.component.css */ "./src/app/components/speakers/speakers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_config_loader_service__WEBPACK_IMPORTED_MODULE_1__["ConfigLoaderService"], _services_wp_categories_api_service__WEBPACK_IMPORTED_MODULE_2__["WpCategoriesApiService"]])
    ], SpeakersComponent);
    return SpeakersComponent;
}());



/***/ }),

/***/ "./src/app/components/test-animation/test-animation.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/test-animation/test-animation.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myblock {\n    background-color: green;\n    width: 300px;\n    height: 200px;\n    border-radius: 5px;\n    margin: 5rem;\n}"

/***/ }),

/***/ "./src/app/components/test-animation/test-animation.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/test-animation/test-animation.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@changeState]=\"currentState\" class=\"myblock mx-auto\">\n\n</div>"

/***/ }),

/***/ "./src/app/components/test-animation/test-animation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/test-animation/test-animation.component.ts ***!
  \***********************************************************************/
/*! exports provided: TestAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAnimationComponent", function() { return TestAnimationComponent; });
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


var TestAnimationComponent = /** @class */ (function () {
    function TestAnimationComponent() {
    }
    TestAnimationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestAnimationComponent.prototype, "currentState", void 0);
    TestAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-animation',
            template: __webpack_require__(/*! ./test-animation.component.html */ "./src/app/components/test-animation/test-animation.component.html"),
            styles: [__webpack_require__(/*! ./test-animation.component.css */ "./src/app/components/test-animation/test-animation.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('changeState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('state1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: 'green',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('state2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundColor: 'red',
                        transform: 'scale(1.5)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>state1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*=>state2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2000ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TestAnimationComponent);
    return TestAnimationComponent;
}());



/***/ }),

/***/ "./src/app/directives/theme-loader.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/theme-loader.directive.ts ***!
  \******************************************************/
/*! exports provided: ThemeLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeLoaderDirective", function() { return ThemeLoaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_config_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config-loader.service */ "./src/app/services/config-loader.service.ts");
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



var ThemeLoaderDirective = /** @class */ (function () {
    function ThemeLoaderDirective(document, configLoaderService) {
        this.document = document;
        this.configLoaderService = configLoaderService;
        var config = this.configLoaderService.config;
        if (!config['theme']) {
            config['theme'] = '/assets/css/styles.css';
        }
        var head = this.document.querySelector('head');
        var link = this.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = config['theme'];
        head.appendChild(link);
        document.body.querySelector('#loading').classList.add('hidden');
        document.body.querySelector('app-root').classList.remove('hidden');
    }
    ThemeLoaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appThemeLoader]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _services_config_loader_service__WEBPACK_IMPORTED_MODULE_2__["ConfigLoaderService"]])
    ], ThemeLoaderDirective);
    return ThemeLoaderDirective;
}());



/***/ }),

/***/ "./src/app/services/config-loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/config-loader.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigLoaderService", function() { return ConfigLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigLoaderService = /** @class */ (function () {
    function ConfigLoaderService(http) {
        this.http = http;
    }
    ConfigLoaderService.prototype.load = function () {
        var _this = this;
        return this.http
            .get('http://tcorral.github.io/cdn/configs/angularnl.json')
            .toPromise()
            .then(function (config) {
            _this.config = config;
        });
    };
    ConfigLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigLoaderService);
    return ConfigLoaderService;
}());



/***/ }),

/***/ "./src/app/services/routes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/routes.service.ts ***!
  \********************************************/
/*! exports provided: RoutesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesService", function() { return RoutesService; });
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

var RoutesService = /** @class */ (function () {
    function RoutesService() {
    }
    RoutesService.prototype.get = function () {
        return [
            {
                path: '/about',
                label: 'About us'
            },
            {
                path: '/speakers',
                label: 'Speakers'
            },
            {
                path: '/location',
                label: 'Location'
            },
            {
                path: '/sponsors',
                label: 'Sponsors'
            }
        ];
    };
    RoutesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RoutesService);
    return RoutesService;
}());



/***/ }),

/***/ "./src/app/services/wp-categories-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/wp-categories-api.service.ts ***!
  \*******************************************************/
/*! exports provided: WpCategoriesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpCategoriesApiService", function() { return WpCategoriesApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-loader.service */ "./src/app/services/config-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WpCategoriesApiService = /** @class */ (function () {
    function WpCategoriesApiService(http, configLoaderService) {
        this.http = http;
        this.configLoaderService = configLoaderService;
        var wp = this.configLoaderService.config['wp'];
        this.prefixUrl = wp.protocol + wp.domain + wp.categories_api;
    }
    WpCategoriesApiService.prototype.get = function (categoryId) {
        return this.http
            .get(this.prefixUrl + categoryId);
    };
    WpCategoriesApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_loader_service__WEBPACK_IMPORTED_MODULE_2__["ConfigLoaderService"]])
    ], WpCategoriesApiService);
    return WpCategoriesApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomascorralcasas/projects/passionate-people/white-labelled-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map