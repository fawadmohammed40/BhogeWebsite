(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_about-us_about-us_module_ts"],{

/***/ 1728:
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 8844);




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ 8310:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 1728);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 8844);







let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage]
    })
], AboutUsPageModule);



/***/ }),

/***/ 8844:
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about-us.page.html */ 2460);
/* harmony import */ var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss */ 3571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);





let AboutUsPage = class AboutUsPage {
    //  initiatives : String = null
    constructor(authService) {
        this.authService = authService;
        this.aboutUs = null;
        this.directorMsg = null;
        this.goal = null;
        this.helplinePhone = null;
        this.helplineEmail = null;
        this.mission = null;
        this.vision = null;
        this.achievement = null;
        this.objective = null;
        this.director_image = null;
    }
    ngOnInit() {
        this.authService.getAboutUs().subscribe((res) => {
            this.data = res["data"];
            this.aboutUs = this.data.aboutus;
            this.directorMsg = this.data.director_message;
            this.goal = this.data.goal;
            this.helplineEmail = this.data.helpline_email;
            this.helplinePhone = this.data.helpline_number;
            this.mission = this.data.mission;
            this.vision = this.data.vision;
            this.achievement = this.data.achievement;
            this.objective = this.data.objective;
            this.director_image = this.data.director_image;
        });
    }
};
AboutUsPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-about-us',
        template: _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutUsPage);



/***/ }),

/***/ 3571:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a {\n  margin-right: 30px;\n}\n\n.navbar {\n  padding-left: 110px;\n}\n\n.navbar a:hover {\n  color: white !important;\n}\n\n.active {\n  color: #30bb9e !important;\n}\n\n.navbar-nav .nav-link:hover {\n  border-radius: 6px;\n  background: #30bb9e;\n  padding: 9px 3;\n}\n\n/*===== Header top =====*/\n\n.header-top {\n  background-color: #30bb9e;\n  padding-top: 10px;\n}\n\n.header-contact ul li {\n  display: inline-block;\n  margin-right: 60px;\n}\n\n.header-contact ul li:last-child {\n  margin-right: 0;\n}\n\n.header-contact ul li span {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.header-opening-time p {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 150px;\n}\n\n/*--------------------------------------------------------------\n# Services\n--------------------------------------------------------------*/\n\n.services .icon-box {\n  margin-bottom: 20px;\n  padding: 30px;\n  border-radius: 6px;\n}\n\n.services .icon-box i {\n  float: left;\n  color: #30bb9e;\n  font-size: 40px;\n}\n\n.services .icon-box h4 {\n  margin-left: 70px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 18px;\n}\n\n.services .icon-box h4 a {\n  color: #556270;\n  transition: 0.3s;\n}\n\n.services .icon-box p {\n  margin-left: 70px;\n  line-height: 24px;\n  font-size: 14px;\n}\n\n.services .icon-box:hover h4 a {\n  color: #30bb9e;\n}\n\n/*--------------------------------------------------------------\n# Sections General\n--------------------------------------------------------------*/\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-bg, .services .icon-box {\n  background-color: #f8f9fa;\n}\n\n.section-title {\n  padding-bottom: 40px;\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.section-title h2::after {\n  content: \"\";\n  width: 120px;\n  height: 1px;\n  display: inline-block;\n  background: #e6636a;\n  margin: 4px 10px;\n}\n\n.section-title p {\n  margin: 0;\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  color: #556270;\n}\n\n/*--------------------------------------------------------------\n# Features\n--------------------------------------------------------------*/\n\n.features {\n  overflow: hidden;\n}\n\n.features .nav-tabs {\n  border: 0;\n}\n\n.features .nav-link {\n  border: 0;\n  padding: 12px 15px 12px 0;\n  transition: 0.3s;\n  color: #556270;\n  border-radius: 0;\n  border-right: 2px solid white;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.features .nav-link:hover {\n  color: #d9232d;\n}\n\n.features .nav-link.active {\n  color: #d9232d;\n  border-color: #d9232d;\n}\n\n.features .tab-pane.active {\n  animation: fadeIn 0.5s ease-out;\n}\n\n.features .details h3 {\n  font-size: 26px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  color: #556270;\n}\n\n.features .details p {\n  color: #777777;\n}\n\n.features .details p:last-child {\n  margin-bottom: 0;\n}\n\n@media (max-width: 992px) {\n  .features .nav-link {\n    border: 0;\n    padding: 15px;\n  }\n\n  .features .nav-link.active {\n    color: #fff;\n    background: #d9232d;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUFBO0VBQVUsdUJBQUE7QUFHVjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBQUM7RUFHRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBLHlCQUFBOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQU1BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQU1BO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSEQ7O0FBT0E7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0csbUJBQUE7QUFKSjs7QUFTQTs7K0RBQUE7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBVUE7OytEQUFBOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSx5QkFBQTtBQVBGOztBQVVBO0VBQ0Usb0JBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBUEY7O0FBWUE7OytEQUFBOztBQUdBO0VBQ0UsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLFNBQUE7QUFURjs7QUFZQTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBO0VBRUUsK0JBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7QUFURjs7QUFZQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLGFBQUE7RUFURjs7RUFXQTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQVJGO0FBQ0YiLCJmaWxlIjoiYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMTBweDtcclxuYTpob3ZlciB7IGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XHJcblxyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMzMGJiOWUgIWltcG9ydGFudFxyXG4gIH1cclxuLy8gIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsXHJcbiAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgLy8gYm9yZGVyLXRvcDogIHNvbGlkICNmZmZmZmY7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAgc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IzMwYmI5ZTtcclxuICAgIHBhZGRpbmc6IDlweCAzO1xyXG59XHJcblxyXG5cclxuLyo9PT09PSBIZWFkZXIgdG9wID09PT09Ki9cclxuXHJcbi5oZWFkZXItdG9we1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmI5ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhlYWRlci1jb250YWN0e31cclxuLmhlYWRlci1jb250YWN0IHVse31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGkgaW1ne31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW9wZW5pbmctdGltZXt9XHJcbi5oZWFkZXItb3BlbmluZy10aW1lIHAge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgU2VydmljZXNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc2VydmljZXMgLmljb24tYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjMzBiYjllO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBoNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBoNCBhIHtcclxuICBjb2xvcjogIzU1NjI3MDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IHAge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveDpob3ZlciBoNCBhIHtcclxuICBjb2xvcjogIzMwYmI5ZTtcclxufVxyXG5cclxuICBcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIFNlY3Rpb25zIEdlbmVyYWxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlY3Rpb24tYmcsIC5zZXJ2aWNlcyAuaWNvbi1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZTY2MzZhO1xyXG4gIG1hcmdpbjogNHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM1NTYyNzA7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIEZlYXR1cmVzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmZlYXR1cmVzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZmVhdHVyZXMgLm5hdi10YWJzIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5mZWF0dXJlcyAubmF2LWxpbmsge1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHggMTJweCAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgY29sb3I6ICM1NTYyNzA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmZlYXR1cmVzIC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6ICNkOTIzMmQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlcyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogI2Q5MjMyZDtcclxuICBib3JkZXItY29sb3I6ICNkOTIzMmQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlcyAudGFiLXBhbmUuYWN0aXZlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmZlYXR1cmVzIC5kZXRhaWxzIGgzIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjNTU2MjcwO1xyXG59XHJcblxyXG4uZmVhdHVyZXMgLmRldGFpbHMgcCB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuXHJcbi5mZWF0dXJlcyAuZGV0YWlscyBwOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5mZWF0dXJlcyAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgLmZlYXR1cmVzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDkyMzJkO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2460:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"header-top d-none d-lg-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <div class=\"header-contact text-lg-left text-center\">\n            <ul>\n              <li><img src=\"../../assets/maps.png\" alt=\"icon\"><span>127/5 Mark street, New york</span></li>\n              <li><img src=\"../../assets/email.png\" alt=\"icon\"><span>info@yourmail.com</span></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"header-opening-time text-lg-right text-center\">\n            <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>\n          </div>\n        </div>\n      </div> <!-- row -->\n    </div> <!-- container -->\n  </div>\n  <!-- header top -->\n\n\n\n\n  <nav class=\"navbar  navbar-expand-md navbar-light  \">\n    <div class=\"container-fluid \">\n      <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n      <a href=\"\" class=\"logo me-auto\"><img src=\"../../assets/BhogeBlueLogo.png\" alt=\"\" class=\"img-fluid\"></a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\"\n        aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a style=\"color: rgb(15, 14, 14);\" class=\"nav-link \" aria-current=\"page\" href=\"#\">Home</a>\n          <a style=\"color: rgb(20, 18, 18);\" class=\"nav-link active\" routerLink=\"/about-us\" href=\"#\">About Us</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/faculties\" href=\"#\">Faculties</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/download\" href=\"#\">Download</a>\n          <a style=\"color: rgb(12, 9, 9);\" class=\"nav-link\" routerLink=\"/contact-us\" href=\"#\">Contact Us</a>\n\n        </div>\n        <div class=\"ion-text-left\">\n          <a target=\"blank\" style=\"background-color: #30bb9e; color: white; \" href=\"http://193.46.199.224/educationAdmin/Auth/login\" class=\"btn btn-md \" role=\"button\" >Login</a>\n        </div>\n      </div>\n    </div>\n\n  </nav>\n\n\n  <!-- ======= Features Section ======= -->\n  <section id=\"features\" class=\"features\">\n    <div class=\"container\">\n\n      <div class=\"section-title\">\n        <h2>About Us</h2>\n        <!-- <p>Take a sneak peek into Bhoge Academy</p> -->\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-3\">\n          <ul class=\"nav nav-tabs flex-column\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active show\" data-bs-toggle=\"tab\" href=\"#tab-1\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab-2\">Director's Word</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab-3\">Vision</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab-4\">Mission</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab-5\">Objectives</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab-6\">Achievement</a>\n            </li>    \n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab-7\">Our initiatives</a>\n            </li> -->\n          </ul>\n        </div>\n        <div class=\"col-lg-9 mt-4 mt-lg-0\">\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active show\" id=\"tab-1\">\n              <div class=\"row\">\n                <div class=\"col-lg-8 details order-2 order-lg-1\">\n                  <h3>About Us</h3>\n\n                  <p>  {{aboutUs}}\n                  </p>\n                </div>\n                <div class=\"col-lg-4 text-center order-1 order-lg-2\">\n                  <img src=\"../../assets/about_us.jpg\" alt=\"\" class=\"img-fluid\">\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"tab-2\">\n              <div class=\"row\">\n                <div class=\"col-lg-8 details order-2 order-lg-1\">\n                  <h3>Director's Word</h3>\n\n                  <p>  {{directorMsg}} </p>\n                </div>\n                <div class=\"col-lg-4 text-center order-1 order-lg-2 pt-5\">\n                  <img style=\"border: solid #30bb9e\" src=\"{{director_image}}\" alt=\"\" class=\"img-fluid\">\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"tab-3\">\n              <div class=\"row\">\n                <div class=\"col-lg-8 details order-2 order-lg-1\">\n                  <h3>Vision</h3>\n\n                  <p>{{vision}}</p>\n                </div>\n                <div class=\"col-lg-4 text-center order-1 order-lg-2\">\n                  <img src=\"../../assets/goal.jpg\" alt=\"\" class=\"img-fluid\">\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"tab-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-8 details order-2 order-lg-1\">\n                  <h3>Mission</h3>\n                    <p> {{mission}}</p>\n                  <!-- <p>1) Our Mission is to provide our best to every student and focus on providing the best possible comprehensive education facilities to them.</p>\n                    <p> 2) We prioritize on combining the talent and dedication of the aspirant students with the help of various learning sessions.</p>\n                      <p> 3) We provide support to the dedicated students to achieve their goals by initiating learning sessions, self learning, enhancing their skills and inculcating the spirit of hard work in them.</p>\n                       <p>4) Our skills include continuous focusing, transparency and honesty in our teaching methods, excellence, and integrity</p> -->\n                </div>\n                <div class=\"col-lg-4 text-center order-1 order-lg-2\">\n                  <img src=\"../../assets/mission.jpg\" alt=\"\" class=\"img-fluid\">\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"tab-5\">\n              <div class=\"row\">\n                <div class=\"col-lg-8 details order-2 order-lg-1\">\n                  <h3>Objectives</h3>\n<p>{{objective}}</p>\n                  <!-- <p>To become the most trusted name with the highest student satisfaction.</p>\n                  <p>  To produce quality results both in terms of quality and quantity</p>\n                  <p>  To create a dependable and qualitative coaching institute</p>\n                   <p> To act as a catalyst for the growth of students by taking care of minor to major thing</p>\n                  <p> To deliver the best in quality, so that students should get all his expectations fulfilled.</p> -->\n                </div>\n                <div class=\"col-lg-4 text-center order-1 order-lg-2\">\n                  <img src=\"../../assets/objectives.jpg\" alt=\"\" class=\"img-fluid\">\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"tab-6\">\n              <div class=\"row\">\n                <div class=\"col-lg-8 details order-2 order-lg-1\">\n                  <h3>Achievements</h3>\n\n                  <p>{{achievement}}</p>\n               \n                </div>\n                <div class=\"col-lg-4 text-center order-1 order-lg-2\">\n                  <img src=\"../../assets/achievement.jpg\" alt=\"\" class=\"img-fluid\">\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"tab-pane\" id=\"tab-7\">\n              <div class=\"row\">\n                <div class=\"col-lg-8 details order-2 order-lg-1\">\n                  <h3>Our Initiatives</h3>\n\n                  <p></p>\n                \n                </div>\n                <div class=\"col-lg-4 text-center order-1 order-lg-2\">\n                  <img src=\"../../assets/initiatives.jpg\" alt=\"\" class=\"img-fluid\">\n                </div>\n              </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section><!-- End Features Section -->\n<!-- Footer -->\n<footer class=\"footer\">\n  <div class=\"container py-5\">\n    <div class=\"row py-4\">\n      <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0 \"> \n        <h2>BHOGE ACADEMY</h2>\n        <p   style=\"color: #fff; text-align: justify;\" class=\"font-italic \">Bhoge Career development Academy was founded by Shri. Krishna Bhoge (Rtd. IAS) in the year 2006.\n          Bhoge Career development Academy has been continuously guiding the students who have been studying\n          for the competitive exams. We are sincerely working on students to realize their future goals.</p>\n        <ul class=\"list-inline mt-4\">\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"instagram\"><i class=\"fa fa-instagram\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"vimeo\"><i class=\"fa fa-vimeo\"></i></a></li>\n        </ul>\n      </div>\n      <div  class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Shop</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Women</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Men</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Stores</a></li>\n          <li class=\"mb-2\"><a  class=\"footeri\"href=\"#\"  >Our Blog</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Company</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Login</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Register</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Wishlist</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Our Products</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-lg-0\">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Newsletter</h6>\n        <p style=\"color: #fff\" class=\" mb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>\n        <div class=\"p-1 rounded border\">\n          <div class=\"input-group\">\n            <input type=\"email\" placeholder=\"Enter your email address\" aria-describedby=\"button-addon1\" class=\"form-control border-0 shadow-0\">\n            <div class=\"input-group-append\">\n              <button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link\"><i class=\"fa fa-paper-plane\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Copyrights -->\n  <div class=\"bg-light py-2\">\n    <div class=\"container text-center\">\n      <p class=\"text-muted mb-0 py-9\">?? 2021 JMK INFOSOFT</p>\n    </div>\n  </div>\n</footer>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_about-us_about-us_module_ts.js.map