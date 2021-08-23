(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);





let HomePage = class HomePage {
    constructor(authService) {
        this.authService = authService;
        //Configuration for each Slider
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        };
        this.slideOptsTwo = {
            initialSlide: 1,
            slidesPerView: 2,
            loop: true,
            centeredSlides: true,
            spaceBetween: 10
        };
        this.slideOptsThree = {
            initialSlide: 0,
            slidesPerView: 3
        };
        //Item object for Nature
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: []
            };
        //Item object for Food
        this.sliderTwo =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: []
            };
        //Item object for Fashion
        this.sliderThree =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: []
            };
    }
    ngOnInit() {
        this.authService.getBanners().subscribe((res) => {
            this.data = res["data"];
        });
    }
    //Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
        ;
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    }
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
            object.isEndSlide = istrue;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
HomePage.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slideWithNav', { static: false },] }],
    slideWithNav2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slideWithNav2', { static: false },] }],
    slideWithNav3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slideWithNav3', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a {\n  margin-right: 30px;\n}\n\n.navbar {\n  padding-left: 110px;\n}\n\n.navbar a:hover {\n  color: white !important;\n}\n\n.active {\n  color: #30bb9e !important;\n}\n\n.navbar-nav .nav-link:hover {\n  border-radius: 6px;\n  background: #30bb9e;\n  padding: 9px 3;\n}\n\n/*===== Header top =====*/\n\n.header-top {\n  background-color: #30bb9e;\n  padding-top: 10px;\n}\n\n.header-contact ul li {\n  display: inline-block;\n  margin-right: 60px;\n}\n\n.header-contact ul li:last-child {\n  margin-right: 0;\n}\n\n.header-contact ul li span {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.header-opening-time p {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 150px;\n}\n\n/*--------------------------------------------------------------\n# Services\n--------------------------------------------------------------*/\n\n.services .icon-box {\n  margin-bottom: 20px;\n  padding: 30px;\n  border-radius: 6px;\n}\n\n.services .icon-box i {\n  float: left;\n  color: #30bb9e;\n  font-size: 40px;\n}\n\n.services .icon-box h4 {\n  margin-left: 70px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 18px;\n}\n\n.services .icon-box h4 a {\n  color: #556270;\n  transition: 0.3s;\n}\n\n.services .icon-box p {\n  margin-left: 70px;\n  line-height: 24px;\n  font-size: 14px;\n}\n\n.services .icon-box:hover h4 a {\n  color: #30bb9e;\n}\n\n/*--------------------------------------------------------------\n# Sections General\n--------------------------------------------------------------*/\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-bg, .services .icon-box {\n  background-color: #f8f9fa;\n}\n\n.section-title {\n  padding-bottom: 40px;\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.section-title h2::after {\n  content: \"\";\n  width: 120px;\n  height: 1px;\n  display: inline-block;\n  background: #e6636a;\n  margin: 4px 10px;\n}\n\n.section-title p {\n  margin: 0;\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  color: #556270;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQUE7RUFBVSx1QkFBQTtBQUdWOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFBQztFQUdHLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0EseUJBQUE7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBTUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIRDs7QUFPQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRyxtQkFBQTtBQUpKOztBQVNBOzsrREFBQTs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7QUFORjs7QUFVQTs7K0RBQUE7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFQRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbmE6aG92ZXIgeyBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxyXG5cclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMzBiYjllICFpbXBvcnRhbnRcclxuICB9XHJcbi8vICAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLFxyXG4gLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIC8vIGJvcmRlci10b3A6ICBzb2xpZCAjZmZmZmZmO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogIHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMGJiOWU7XHJcbiAgICBwYWRkaW5nOiA5cHggMztcclxufVxyXG5cclxuXHJcbi8qPT09PT0gSGVhZGVyIHRvcCA9PT09PSovXHJcblxyXG4uaGVhZGVyLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJiOWU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdHt9XHJcbi5oZWFkZXItY29udGFjdCB1bHt9XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxufVxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWN0IHVsIGxpIGltZ3t9XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaSBzcGFuIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci1vcGVuaW5nLXRpbWV7fVxyXG4uaGVhZGVyLW9wZW5pbmctdGltZSBwIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIFNlcnZpY2VzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLnNlcnZpY2VzIC5pY29uLWJveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogIzMwYmI5ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuaWNvbi1ib3ggaDQge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuaWNvbi1ib3ggaDQgYSB7XHJcbiAgY29sb3I6ICM1NTYyNzA7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBwIHtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuaWNvbi1ib3g6aG92ZXIgaDQgYSB7XHJcbiAgY29sb3I6ICMzMGJiOWU7XHJcbn1cclxuXHJcbiAgXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBTZWN0aW9ucyBHZW5lcmFsXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zZWN0aW9uLWJnLCAuc2VydmljZXMgLmljb24tYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIGgyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjYWFhYWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2U2NjM2YTtcclxuICBtYXJnaW46IDRweCAxMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjNTU2MjcwO1xyXG59XHJcblxyXG4vLyBmb290ZXJcclxuXHJcbi8vIHRlc3RpbW9uaWFsXHJcbiJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"header-top d-none d-lg-block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"header-contact text-lg-left text-center\">\n                    <ul>\n                        <li><img src=\"../../assets/maps.png\" alt=\"icon\"><span>127/5 Mark street, New york</span></li>\n                        <li><img src=\"../../assets/email.png\" alt=\"icon\"><span>info@yourmail.com</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div  class=\"header-opening-time text-lg-right text-center\">\n                    <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>\n                </div>\n            </div>\n        </div> <!-- row -->\n    </div> <!-- container -->\n</div> \n<!-- header top -->\n\n\n\n\n  <nav class=\"navbar  navbar-expand-md navbar-light  \"  >\n    <div class=\"container-fluid \">\n      <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n      <a href=\"\" class=\"logo me-auto\"><img src=\"../../assets/BhogeBlueLogo.png\" alt=\"\" class=\"img-fluid\"></a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a style=\"color: rgb(15, 14, 14);\" class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n          <a style=\"color: rgb(20, 18, 18);\" class=\"nav-link\" routerLink=\"/about-us\" href=\"#\">About Us</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/faculties\" href=\"#\">Faculties</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/download\" href=\"#\">Download</a>\n          <a style=\"color: rgb(12, 9, 9);\" class=\"nav-link\" routerLink=\"/contact-us\" href=\"#\">Contact Us</a>\n        \n           </div>\n           <div class=\"ion-text-left\">\n            <a target=\"blank\" style=\"background-color: #30bb9e; color: white; \" href=\"http://193.46.199.224/educationAdmin/\"  class=\"btn btn-md \" role=\"button\" >Login</a>\n          </div>\n      </div>\n    </div>\n    \n  </nav>\n  \n  <!-- ======= Hero Section ======= -->\n  <ion-grid >\n    <ion-row >\n      <ion-col size=\"12\">\n        <ion-slides   pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav\n          (ionSlideDidChange)=\"SlideDidChange(sliderOne,slideWithNav)\">\n          <ion-slide  *ngFor=\"let banner of data\">\n            <img  src=\"{{banner.banner_image}}\">\n          </ion-slide>\n          \n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n <!-- ======= Services Section ======= -->\n <section id=\"services\" class=\"services\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"icon-box\">\n          <i class=\"bi bi-laptop\"></i>\n          <h4><a routerLink=\"/tlive\">Live Session</a></h4>\n          <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\n        </div>\n      </div>\n      <div class=\"col-md-6 mt-4 mt-md-0\">\n        <div class=\"icon-box\">\n          <i class=\"bi bi-journal-album\"></i>\n                    <h4><a routerLink=\"/courses\">Courses Offered</a></h4>\n          <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n        </div>\n      </div>\n      <div class=\"col-md-6 mt-4 mt-md-0\">\n        <div class=\"icon-box\">\n          <i class=\"bi bi-file-slides\"></i>\n          <h4><a routerLink=\"/workshops\">Workshops</a></h4>\n          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\n        </div>\n      </div>\n      <div class=\"col-md-6 mt-4 mt-md-0\">\n        <div class=\"icon-box\">\n          <i class=\"bi bi-megaphone\"></i>\n          <h4><a routerLink=\"/announcements\">Announcements</a></h4>\n          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\n        </div>\n      </div>\n   \n\n  </div>\n  </div>\n</section><!-- End Services Section -->\n\n\t\t\t\n\n <!-- Footer -->\n <footer class=\"footer\">\n  <div class=\"container py-5\">\n    <div class=\"row py-4\">\n      <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0 \"> \n        <h2>BHOGE ACADEMY</h2>\n        <p   style=\"color: #fff; text-align: justify;\" class=\"font-italic \">Bhoge Career development Academy was founded by Shri. Krishna Bhoge (Rtd. IAS) in the year 2006.\n          Bhoge Career development Academy has been continuously guiding the students who have been studying\n          for the competitive exams. We are sincerely working on students to realize their future goals.</p>\n        <ul class=\"list-inline mt-4\">\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"instagram\"><i class=\"fa fa-instagram\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"vimeo\"><i class=\"fa fa-vimeo\"></i></a></li>\n        </ul>\n      </div>\n      <div  class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Shop</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Women</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Men</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Stores</a></li>\n          <li class=\"mb-2\"><a  class=\"footeri\"href=\"#\"  >Our Blog</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Company</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Login</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Register</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Wishlist</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Our Products</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-lg-0\">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Newsletter</h6>\n        <p style=\"color: #fff\" class=\" mb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>\n        <div class=\"p-1 rounded border\">\n          <div class=\"input-group\">\n            <input type=\"email\" placeholder=\"Enter your email address\" aria-describedby=\"button-addon1\" class=\"form-control border-0 shadow-0\">\n            <div class=\"input-group-append\">\n              <button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link\"><i class=\"fa fa-paper-plane\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Copyrights -->\n  <div class=\"bg-light py-2\">\n    <div class=\"container text-center\">\n      <p class=\"text-muted mb-0 py-9\">© 2021 JMK INFOSOFT</p>\n    </div>\n  </div>\n</footer>\n\n<!-- End -->\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map