(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_contact-us_contact-us_module_ts"],{

/***/ 2294:
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 1432);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 3648:
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 2294);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 1432);







let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
    })
], ContactUsPageModule);



/***/ }),

/***/ 1432:
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-us.page.html */ 420);
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss */ 6926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ContactUsPage = class ContactUsPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactUsPage);



/***/ }),

/***/ 6926:
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a {\n  margin-right: 30px;\n}\n\n.navbar {\n  padding-left: 110px;\n}\n\n.navbar a:hover {\n  color: white !important;\n}\n\n.active {\n  color: #30bb9e !important;\n}\n\n.navbar-nav .nav-link:hover {\n  border-radius: 6px;\n  background: #30bb9e;\n  padding: 9px 3;\n}\n\n/*===== Header top =====*/\n\n.header-top {\n  background-color: #30bb9e;\n  padding-top: 10px;\n}\n\n.header-contact ul li {\n  display: inline-block;\n  margin-right: 60px;\n}\n\n.header-contact ul li:last-child {\n  margin-right: 0;\n}\n\n.header-contact ul li span {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.header-opening-time p {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 150px;\n}\n\n/*--------------------------------------------------------------\n# Services\n--------------------------------------------------------------*/\n\n.services .icon-box {\n  margin-bottom: 20px;\n  padding: 30px;\n  border-radius: 6px;\n}\n\n.services .icon-box i {\n  float: left;\n  color: #30bb9e;\n  font-size: 40px;\n}\n\n.services .icon-box h4 {\n  margin-left: 70px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 18px;\n}\n\n.services .icon-box h4 a {\n  color: #556270;\n  transition: 0.3s;\n}\n\n.services .icon-box p {\n  margin-left: 70px;\n  line-height: 24px;\n  font-size: 14px;\n}\n\n.services .icon-box:hover h4 a {\n  color: #30bb9e;\n}\n\n/*--------------------------------------------------------------\n# Sections General\n--------------------------------------------------------------*/\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-bg, .services .icon-box {\n  background-color: #f8f9fa;\n}\n\n.section-title {\n  padding-bottom: 40px;\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.section-title h2::after {\n  content: \"\";\n  width: 120px;\n  height: 1px;\n  display: inline-block;\n  background: #e6636a;\n  margin: 4px 10px;\n}\n\n.section-title p {\n  margin: 0;\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  color: #556270;\n}\n\n/*--------------------------------------------------------------\n#4.1\tcontact-pg-section\n--------------------------------------------------------------*/\n\n.contact-pg-section {\n  padding-bottom: 35px;\n}\n\n@media (max-width: 991px) {\n  .contact-pg-section {\n    padding-bottom: 100px;\n  }\n}\n\n@media (max-width: 767px) {\n  .contact-pg-section {\n    padding-bottom: 80px;\n  }\n}\n\n.contact-pg-section form input,\n.contact-pg-section form select,\n.contact-pg-section form textarea {\n  background: #fff;\n  width: 100%;\n  height: 55px;\n  border: 2px solid #ebedef;\n  border-radius: 0;\n  box-shadow: none !important;\n}\n\n@media (max-width: 991px) {\n  .contact-pg-section form input,\n.contact-pg-section form select,\n.contact-pg-section form textarea {\n    height: 45px;\n  }\n}\n\n.contact-pg-section form input:focus,\n.contact-pg-section form select:focus,\n.contact-pg-section form textarea:focus {\n  border-color: #fd5f17;\n}\n\n.contact-pg-section form textarea {\n  height: 180px;\n}\n\n.contact-pg-section form {\n  margin: 0 -15px;\n  overflow: hidden;\n}\n\n.contact-pg-section form ::-webkit-input-placeholder {\n  font-style: 15px;\n  font-style: normal;\n  color: #9d9c9c;\n}\n\n.contact-pg-section form :-moz-placeholder {\n  font-style: 15px;\n  font-style: normal;\n  color: #9d9c9c;\n}\n\n.contact-pg-section form ::-moz-placeholder {\n  font-style: 15px;\n  font-style: normal;\n  color: #9d9c9c;\n}\n\n.contact-pg-section form :-ms-input-placeholder {\n  font-style: 15px;\n  font-style: normal;\n  color: #9d9c9c;\n}\n\n.contact-pg-section form select {\n  display: inline-block;\n  color: #a9a9a9;\n  cursor: pointer;\n  opacity: 1;\n  padding: 6px 12px;\n  font-size: 15px;\n  font-size: 0.9375rem;\n}\n\n.contact-pg-section form > div {\n  width: calc(50% - 30px);\n  float: left;\n  margin: 0 15px 30px;\n}\n\n@media (max-width: 600px) {\n  .contact-pg-section form > div {\n    width: calc(100% - 30px);\n    float: none;\n  }\n}\n\n.contact-pg-section form .fullwidth {\n  width: calc(100% - 30px);\n  float: none;\n  clear: both;\n}\n\n.contact-pg-section .office-info {\n  border: solid #30bb9e;\n  position: relative;\n  padding: 55px 55px;\n  margin-top: -30px;\n  margin-left: 50px;\n}\n\n@media (max-width: 1199px) {\n  .contact-pg-section .office-info {\n    margin-left: 0;\n  }\n}\n\n@media (max-width: 991px) {\n  .contact-pg-section .office-info {\n    margin-top: 0;\n  }\n}\n\n.contact-pg-section .office-info > div {\n  position: relative;\n}\n\n.contact-pg-section .office-info > div + div {\n  padding-top: 30px;\n  margin-top: 30px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.contact-pg-section .office-info h3 {\n  font-size: 18px;\n  font-size: 1.125rem;\n  font-weight: normal;\n  color: #000;\n  margin: 0 0 0.8em;\n}\n\n.contact-pg-section .office-info li {\n  font-size: 14px;\n  font-size: 0.875rem;\n  color: #000;\n}\n\n.contact-pg-section .office-info li i {\n  color: #fd5f17;\n  display: inline-block;\n  padding-right: 5px;\n}\n\n.contact-pg-section .office-info ul > li + li {\n  margin-top: 8px;\n}\n\n.contact-map-section .contact-map {\n  height: 550px;\n}\n\n.contact-map-section iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: 0;\n}\n\n.footer {\n  background: #30bb9e;\n}\n\n#button-addon1 {\n  color: #ffc371;\n}\n\ni {\n  color: #ffc371;\n}\n\n.form-control::placeholder {\n  font-size: 0.95rem;\n  color: #30bb9e;\n  font-style: italic;\n}\n\n.form-control.shadow-0:focus {\n  box-shadow: none;\n}\n\n.footeri {\n  color: #524c4c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQUE7RUFBVSx1QkFBQTtBQUdWOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFBQztFQUdHLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0EseUJBQUE7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBTUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIRDs7QUFPQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRyxtQkFBQTtBQUpKOztBQVNBOzsrREFBQTs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7QUFORjs7QUFVQTs7K0RBQUE7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFQRjs7QUFTQTs7K0RBQUE7O0FBR0E7RUFDRSxvQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxxQkFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLG9CQUFBO0VBUEY7QUFDRjs7QUFVQTs7O0VBR0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQkFBQTtBQVJGOztBQVdBO0VBQ0U7OztJQUdFLFlBQUE7RUFSRjtBQUNGOztBQVdBOzs7RUFHRSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVRGOztBQVlBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxXQUFBO0VBVEY7QUFDRjs7QUFZQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFWRjs7QUFhQTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFO0lBQ0UsY0FBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLGFBQUE7RUFaRjtBQUNGOztBQWVBO0VBQ0Usa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7QUFiRjs7QUFnQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWJGOztBQWdCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFiRjs7QUFnQkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWJGOztBQWdCQTtFQUNFLGVBQUE7QUFiRjs7QUFnQkE7RUFDRSxhQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWJGOztBQWtCQTtFQUNFLG1CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtBQWZGOztBQWtCQTtFQUNFLGNBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWZGOztBQWtCQTtFQUNFLGdCQUFBO0FBZkY7O0FBaUJBO0VBQ0UsY0FBQTtBQWRGIiwiZmlsZSI6ImNvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMTBweDtcclxuYTpob3ZlciB7IGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XHJcblxyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMzMGJiOWUgIWltcG9ydGFudFxyXG4gIH1cclxuLy8gIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsXHJcbiAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgLy8gYm9yZGVyLXRvcDogIHNvbGlkICNmZmZmZmY7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAgc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IzMwYmI5ZTtcclxuICAgIHBhZGRpbmc6IDlweCAzO1xyXG59XHJcblxyXG5cclxuLyo9PT09PSBIZWFkZXIgdG9wID09PT09Ki9cclxuXHJcbi5oZWFkZXItdG9we1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmI5ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhlYWRlci1jb250YWN0e31cclxuLmhlYWRlci1jb250YWN0IHVse31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGkgaW1ne31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW9wZW5pbmctdGltZXt9XHJcbi5oZWFkZXItb3BlbmluZy10aW1lIHAge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgU2VydmljZXNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc2VydmljZXMgLmljb24tYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjMzBiYjllO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBoNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBoNCBhIHtcclxuICBjb2xvcjogIzU1NjI3MDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IHAge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveDpob3ZlciBoNCBhIHtcclxuICBjb2xvcjogIzMwYmI5ZTtcclxufVxyXG5cclxuICBcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIFNlY3Rpb25zIEdlbmVyYWxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlY3Rpb24tYmcsIC5zZXJ2aWNlcyAuaWNvbi1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZTY2MzZhO1xyXG4gIG1hcmdpbjogNHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM1NTYyNzA7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jNC4xXHRjb250YWN0LXBnLXNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uY29udGFjdC1wZy1zZWN0aW9uIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmNvbnRhY3QtcGctc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFjdC1wZy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiBmb3JtIGlucHV0LFxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gc2VsZWN0LFxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlYmVkZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSBpbnB1dCxcclxuICAuY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gc2VsZWN0LFxyXG4gIC5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gaW5wdXQ6Zm9jdXMsXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSBzZWxlY3Q6Zm9jdXMsXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmQ1ZjE3O1xyXG59XHJcblxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSB7XHJcbiAgbWFyZ2luOiAwIC0xNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc3R5bGU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjOWQ5YzljO1xyXG59XHJcblxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc3R5bGU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjOWQ5YzljO1xyXG59XHJcblxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBmb250LXN0eWxlOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzlkOWM5YztcclxufVxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiBmb3JtIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc3R5bGU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjOWQ5YzljO1xyXG59XHJcblxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gc2VsZWN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNhOWE5YTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1wZy1zZWN0aW9uIGZvcm0gPiBkaXYge1xyXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDMwcHgpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAxNXB4IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSA+IGRpdiB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gZm9ybSAuZnVsbHdpZHRoIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gLm9mZmljZS1pbmZvIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZTRhO1xyXG4gIGJvcmRlcjogc29saWQgIzMwYmI5ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNTVweCA1NXB4O1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmNvbnRhY3QtcGctc2VjdGlvbiAub2ZmaWNlLWluZm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuY29udGFjdC1wZy1zZWN0aW9uIC5vZmZpY2UtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiAub2ZmaWNlLWluZm8gPiBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiAub2ZmaWNlLWluZm8gPiBkaXYgKyBkaXYge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiAub2ZmaWNlLWluZm8gaDMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luOiAwIDAgMC44ZW07XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gLm9mZmljZS1pbmZvIGxpIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiAub2ZmaWNlLWluZm8gbGkgaSB7XHJcbiAgY29sb3I6ICNmZDVmMTc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiAub2ZmaWNlLWluZm8gdWwgPiBsaSArIGxpIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LW1hcC1zZWN0aW9uIC5jb250YWN0LW1hcCB7XHJcbiAgaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtbWFwLXNlY3Rpb24gaWZyYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi8vIGZvb3RlclxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjMzBiYjllO1xyXG59XHJcblxyXG4jYnV0dG9uLWFkZG9uMSB7XHJcbiAgY29sb3I6ICNmZmMzNzE7XHJcbn1cclxuXHJcbmkge1xyXG4gIGNvbG9yOiAjZmZjMzcxO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGNvbG9yOiAjMzBiYjllO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5zaGFkb3ctMDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZm9vdGVyaXtcclxuICBjb2xvcjogcmdiKDgyLCA3NiwgNzYpO1xyXG59Il19 */");

/***/ }),

/***/ 420:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"header-top d-none d-lg-block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"header-contact text-lg-left text-center\">\n                    <ul>\n                        <li><img src=\"../../assets/maps.png\" alt=\"icon\"><span>127/5 Mark street, New york</span></li>\n                        <li><img src=\"../../assets/email.png\" alt=\"icon\"><span>info@yourmail.com</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div  class=\"header-opening-time text-lg-right text-center\">\n                    <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>\n                </div>\n            </div>\n        </div> <!-- row -->\n    </div> <!-- container -->\n</div> \n<!-- header top -->\n\n\n\n\n  <nav class=\"navbar  navbar-expand-md navbar-light  \"  >\n    <div class=\"container-fluid \">\n      <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n      <a href=\"\" class=\"logo me-auto\"><img src=\"../../assets/BhogeBlueLogo.png\" alt=\"\" class=\"img-fluid\"></a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a style=\"color: rgb(15, 14, 14);\" class=\"nav-link \" aria-current=\"page\" href=\"#\">Home</a>\n          <a style=\"color: rgb(20, 18, 18);\" class=\"nav-link\" routerLink=\"/about-us\" href=\"#\">About Us</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link \" routerLink=\"/faculties\" href=\"#\">Faculties</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/download\" href=\"#\">Download</a>\n          <a style=\"color: rgb(12, 9, 9);\" class=\"nav-link active\" routerLink=\"/contact-us\" href=\"#\">Contact Us</a>\n        \n           </div>\n           <div class=\"ion-text-left\">\n            <a target=\"blank\" style=\"background-color: #30bb9e; color: white; \" href=\"http://193.46.199.224/educationAdmin/Auth/login\" class=\"btn btn-md \" role=\"button\" >Login</a>\n          </div>\n      </div>\n    </div>\n    \n  </nav>\n  \n        <!-- start contact-pg-section -->\n        <section class=\"contact-pg-section section-padding\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col col-lg-5 col-md-6 col-sm-8\">\n                      <div class=\"section-title\">\n                          <h2>Call Us Or Fill The Form</h2>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col col-md-7\">\n                      <form method=\"post\" class=\"contact-validation-active\" id=\"contact-form-main\">\n                          <div>\n                              <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Name*\">\n                          </div>\n                          <div>\n                              <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email*\">\n                          </div>\n                          <div>\n                              <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" placeholder=\"Phone*\">\n                          </div>\n                          <div>\n                              <select name=\"subject\" class=\"form-control\">\n                                  <option disabled=\"disabled\" selected>Contact subject</option>\n                                  <option>Subject 1</option>\n                                  <option>Subject 2</option>\n                                  <option>Subject 3</option>\n                              </select>\n                          </div>\n                          <div class=\"fullwidth\">\n                              <textarea class=\"form-control\" name=\"note\"  id=\"note\" placeholder=\"Case Description...\"></textarea>\n                          </div>\n                          <div class=\"submit-area\">\n                              <button style=\"background-color: #30bb9e; color: #fff;\" type=\"submit\" class=\"btn\">Submit</button>\n                              <div id=\"loader\">\n                                  <i class=\"ti-reload\"></i>\n                              </div>\n                          </div>\n                          <!-- <div class=\"clearfix error-handling-messages\">\n                              <div id=\"success\">Thank you</div>\n                              <div id=\"error\"> Error occurred while sending email. Please try again later. </div>\n                          </div> -->\n                      </form>\n                  </div>  \n\n                  <div class=\"col col-md-5\">\n                      <div class=\"office-info\">\n                          <div>\n                              <h3 style=\"color: #30bb9e;\">Bhoge Academy</h3>\n                              <ul>\n                                  <li><i class=\"ti-location-pin\"></i> Sudarshan Residency, Tilak Nagar,Aurangabad, Maharashtra 431001</li>\n                                  <li><i class=\"ti-mobile\"></i> 099238 03408</li>\n                                  <li><i class=\"ti-email\"></i> bhogeacad@gmail.com</li>\n                              </ul>\n                          </div>\n                        \n                      </div>\n                  </div>                  \n              </div>\n          </div> <!-- end container -->\n      </section>\n      <!-- end contact-pg-section -->\n\n\n      <!--  start contact-map -->\n      <section class=\"contact-map-section\">\n          <h2 class=\"hidden\">Contact map</h2>\n          <div class=\"contact-map\">\n              <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671\" allowfullscreen></iframe>\n          </div>\n      </section>\n      <!-- end contact-map -->\n\n\n     \n\n  <!-- Footer -->\n <footer class=\"footer\">\n  <div class=\"container py-5\">\n    <div class=\"row py-4\">\n      <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0 \"> \n        <h2>BHOGE ACADEMY</h2>\n        <p   style=\"color: #fff; text-align: justify;\" class=\"font-italic \">Bhoge Career development Academy was founded by Shri. Krishna Bhoge (Rtd. IAS) in the year 2006.\n          Bhoge Career development Academy has been continuously guiding the students who have been studying\n          for the competitive exams. We are sincerely working on students to realize their future goals.</p>\n        <ul class=\"list-inline mt-4\">\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"instagram\"><i class=\"fa fa-instagram\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"vimeo\"><i class=\"fa fa-vimeo\"></i></a></li>\n        </ul>\n      </div>\n      <div  class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Shop</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Women</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Men</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Stores</a></li>\n          <li class=\"mb-2\"><a  class=\"footeri\"href=\"#\"  >Our Blog</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Company</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Login</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Register</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Wishlist</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Our Products</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-lg-0\">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Newsletter</h6>\n        <p style=\"color: #fff\" class=\" mb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>\n        <div class=\"p-1 rounded border\">\n          <div class=\"input-group\">\n            <input type=\"email\" placeholder=\"Enter your email address\" aria-describedby=\"button-addon1\" class=\"form-control border-0 shadow-0\">\n            <div class=\"input-group-append\">\n              <button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link\"><i class=\"fa fa-paper-plane\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Copyrights -->\n  <div class=\"bg-light py-2\">\n    <div class=\"container text-center\">\n      <p class=\"text-muted mb-0 py-9\">© 2021 JMK INFOSOFT</p>\n    </div>\n  </div>\n</footer>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_contact-us_contact-us_module_ts.js.map