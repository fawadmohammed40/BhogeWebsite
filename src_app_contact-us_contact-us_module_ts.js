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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-us.page.html */ 420);
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss */ 6926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);





let ContactUsPage = class ContactUsPage {
    constructor(authService) {
        this.authService = authService;
        this.helplineEmail = null;
        this.helplinePhone = null;
        this.address = null;
    }
    ngOnInit() {
        this.authService.getAboutUs().subscribe((res) => {
            this.data = res["data"];
            this.helplineEmail = this.data.helpline_email;
            this.helplinePhone = this.data.helpline_number;
            this.address = this.data.address;
        });
    }
};
ContactUsPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a {\n  margin-right: 30px;\n}\n\n.navbar {\n  padding-left: 110px;\n}\n\n.navbar a:hover {\n  color: white !important;\n}\n\n.active {\n  color: #30bb9e !important;\n}\n\n.navbar-nav .nav-link:hover {\n  border-radius: 6px;\n  background: #30bb9e;\n  padding: 9px 3;\n}\n\n/*===== Header top =====*/\n\n.header-top {\n  background-color: #30bb9e;\n  padding-top: 10px;\n}\n\n.header-contact ul li {\n  display: inline-block;\n  margin-right: 60px;\n}\n\n.header-contact ul li:last-child {\n  margin-right: 0;\n}\n\n.header-contact ul li span {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.header-opening-time p {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 150px;\n}\n\n/*--------------------------------------------------------------\n# Services\n--------------------------------------------------------------*/\n\n.services .icon-box {\n  margin-bottom: 20px;\n  padding: 30px;\n  border-radius: 6px;\n}\n\n.services .icon-box i {\n  float: left;\n  color: #30bb9e;\n  font-size: 40px;\n}\n\n.services .icon-box h4 {\n  margin-left: 70px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 18px;\n}\n\n.services .icon-box h4 a {\n  color: #556270;\n  transition: 0.3s;\n}\n\n.services .icon-box p {\n  margin-left: 70px;\n  line-height: 24px;\n  font-size: 14px;\n}\n\n.services .icon-box:hover h4 a {\n  color: #30bb9e;\n}\n\n/*--------------------------------------------------------------\n# Sections General\n--------------------------------------------------------------*/\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-bg, .services .icon-box {\n  background-color: #f8f9fa;\n}\n\n.section-title {\n  padding-bottom: 40px;\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.section-title h2::after {\n  content: \"\";\n  width: 120px;\n  height: 1px;\n  display: inline-block;\n  background: #e6636a;\n  margin: 4px 10px;\n}\n\n.section-title p {\n  margin: 0;\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  color: #556270;\n}\n\n/*--------------------------------------------------------------\n#4.1\tcontact-pg-section\n--------------------------------------------------------------*/\n\n.contact-pg-section {\n  padding-bottom: 35px;\n}\n\n@media (max-width: 991px) {\n  .contact-pg-section {\n    padding-bottom: 100px;\n  }\n}\n\n@media (max-width: 767px) {\n  .contact-pg-section {\n    padding-bottom: 80px;\n  }\n}\n\n.contact-pg-section .office-info {\n  border: solid #30bb9e;\n  position: relative;\n  padding: 55px 55px;\n  margin-top: 10px;\n  margin-left: 50px;\n}\n\n@media (max-width: 1199px) {\n  .contact-pg-section .office-info {\n    margin-left: 20;\n  }\n}\n\n@media (max-width: 991px) {\n  .contact-pg-section .office-info {\n    margin-top: 20;\n  }\n}\n\n.contact-pg-section .office-info > div {\n  position: relative;\n}\n\n.contact-pg-section .office-info > div + div {\n  padding-top: 30px;\n  margin-top: 30px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.contact-pg-section .office-info h3 {\n  font-size: 18px;\n  font-size: 1.125rem;\n  font-weight: normal;\n  color: #000;\n  margin: 0 0 0.8em;\n}\n\n.contact-pg-section .office-info li {\n  font-size: 14px;\n  font-size: 0.875rem;\n  color: #000;\n}\n\n.contact-pg-section .office-info ul > li + li {\n  margin-top: 8px;\n}\n\n.contact-map-section .contact-map {\n  height: 550px;\n}\n\n.contact-map-section iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: 0;\n}\n\n.footer {\n  background: #30bb9e;\n}\n\n.form-control::placeholder {\n  font-size: 0.95rem;\n  color: #30bb9e;\n  font-style: italic;\n}\n\n.form-control.shadow-0:focus {\n  box-shadow: none;\n}\n\n.footeri {\n  color: #524c4c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQUE7RUFBVSx1QkFBQTtBQUdWOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFBQztFQUdHLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0EseUJBQUE7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBTUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIRDs7QUFPQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRyxtQkFBQTtBQUpKOztBQVNBOzsrREFBQTs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7QUFORjs7QUFVQTs7K0RBQUE7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFQRjs7QUFTQTs7K0RBQUE7O0FBR0E7RUFDRSxvQkFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxxQkFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLG9CQUFBO0VBUEY7QUFDRjs7QUFrQkE7RUFFRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBakJGOztBQW9CQTtFQUNFO0lBQ0UsZUFBQTtFQWpCRjtBQUNGOztBQW9CQTtFQUNFO0lBQ0UsY0FBQTtFQWxCRjtBQUNGOztBQXFCQTtFQUNFLGtCQUFBO0FBbkJGOztBQXNCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBbkJGOztBQXdCQTtFQUNFLGVBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsYUFBQTtBQXJCRjs7QUF3QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBckJGOztBQTBCQTtFQUNFLG1CQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGdCQUFBO0FBdkJGOztBQXlCQTtFQUNFLGNBQUE7QUF0QkYiLCJmaWxlIjoiY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xyXG5hOmhvdmVyIHsgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IH1cclxuXHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzMwYmI5ZSAhaW1wb3J0YW50XHJcbiAgfVxyXG4vLyAgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSxcclxuIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XHJcbiAgICAvLyBib3JkZXItdG9wOiAgc29saWQgI2ZmZmZmZjtcclxuICAgIC8vIGJvcmRlci1ib3R0b206ICBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZDojMzBiYjllO1xyXG4gICAgcGFkZGluZzogOXB4IDM7XHJcbn1cclxuXHJcblxyXG4vKj09PT09IEhlYWRlciB0b3AgPT09PT0qL1xyXG5cclxuLmhlYWRlci10b3B7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiYjllO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uaGVhZGVyLWNvbnRhY3R7fVxyXG4uaGVhZGVyLWNvbnRhY3QgdWx7fVxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbn1cclxuLmhlYWRlci1jb250YWN0IHVsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFjdCB1bCBsaSBpbWd7fVxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGkgc3BhbiB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItb3BlbmluZy10aW1le31cclxuLmhlYWRlci1vcGVuaW5nLXRpbWUgcCB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBTZXJ2aWNlc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5zZXJ2aWNlcyAuaWNvbi1ib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuaWNvbi1ib3ggaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICMzMGJiOWU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IGg0IHtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IGg0IGEge1xyXG4gIGNvbG9yOiAjNTU2MjcwO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuaWNvbi1ib3ggcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94OmhvdmVyIGg0IGEge1xyXG4gIGNvbG9yOiAjMzBiYjllO1xyXG59XHJcblxyXG4gIFxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgU2VjdGlvbnMgR2VuZXJhbFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VjdGlvbi1iZywgLnNlcnZpY2VzIC5pY29uLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2FhYWFhYTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIGgyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNlNjYzNmE7XHJcbiAgbWFyZ2luOiA0cHggMTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzU1NjI3MDtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiM0LjFcdGNvbnRhY3QtcGctc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5jb250YWN0LXBnLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuY29udGFjdC1wZy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb250YWN0LXBnLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gLm9mZmljZS1pbmZvIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxZTRhO1xyXG4gIGJvcmRlcjogc29saWQgIzMwYmI5ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNTVweCA1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuY29udGFjdC1wZy1zZWN0aW9uIC5vZmZpY2UtaW5mbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuY29udGFjdC1wZy1zZWN0aW9uIC5vZmZpY2UtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gLm9mZmljZS1pbmZvID4gZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gLm9mZmljZS1pbmZvID4gZGl2ICsgZGl2IHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5jb250YWN0LXBnLXNlY3Rpb24gLm9mZmljZS1pbmZvIGgzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbjogMCAwIDAuOGVtO1xyXG59XHJcblxyXG4uY29udGFjdC1wZy1zZWN0aW9uIC5vZmZpY2UtaW5mbyBsaSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhY3QtcGctc2VjdGlvbiAub2ZmaWNlLWluZm8gdWwgPiBsaSArIGxpIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LW1hcC1zZWN0aW9uIC5jb250YWN0LW1hcCB7XHJcbiAgaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtbWFwLXNlY3Rpb24gaWZyYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi8vIGZvb3RlclxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjMzBiYjllO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGNvbG9yOiAjMzBiYjllO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5zaGFkb3ctMDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZm9vdGVyaXtcclxuICBjb2xvcjogcmdiKDgyLCA3NiwgNzYpO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"header-top d-none d-lg-block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"header-contact text-lg-left text-center\">\n                    <ul>\n                        <li><img src=\"../../assets/maps.png\" alt=\"icon\"><span>127/5 Mark street, New york</span></li>\n                        <li><img src=\"../../assets/email.png\" alt=\"icon\"><span>info@yourmail.com</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div  class=\"header-opening-time text-lg-right text-center\">\n                    <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>\n                </div>\n            </div>\n        </div> <!-- row -->\n    </div> <!-- container -->\n</div> \n<!-- header top -->\n\n\n\n\n  <nav class=\"navbar  navbar-expand-md navbar-light  \"  >\n    <div class=\"container-fluid \">\n      <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n      <a href=\"\" class=\"logo me-auto\"><img src=\"../../assets/BhogeBlueLogo.png\" alt=\"\" class=\"img-fluid\"></a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a style=\"color: rgb(15, 14, 14);\" class=\"nav-link \" aria-current=\"page\" href=\"#\">Home</a>\n          <a style=\"color: rgb(20, 18, 18);\" class=\"nav-link\" routerLink=\"/about-us\" href=\"#\">About Us</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link \" routerLink=\"/faculties\" href=\"#\">Faculties</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/download\" href=\"#\">Download</a>\n          <a style=\"color: rgb(12, 9, 9);\" class=\"nav-link active\" routerLink=\"/contact-us\" href=\"#\">Contact Us</a>\n        \n           </div>\n           <div class=\"ion-text-left\">\n            <a target=\"blank\" style=\"background-color: #30bb9e; color: white; \" href=\"http://193.46.199.224/educationAdmin/Auth/login\" class=\"btn btn-md \" role=\"button\" >Login</a>\n          </div>\n      </div>\n    </div>\n    \n  </nav>\n  \n        <!-- start contact-pg-section -->\n        <section class=\"contact-pg-section section-padding\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col col-lg-5 col-md-6 col-sm-8\">\n                      <div class=\"section-title\">\n                          <h2>Contact Us</h2>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                \n\n                  <div class=\"col col-md-12\">\n                      <div class=\"office-info\">\n                          <div>\n                              <h3 style=\"color: #30bb9e;\">Bhoge Academy</h3>\n                              <ion-item lines=\"none\">\n                                <p > <ion-icon style=\"padding-right: 8px;\" name=\"call-outline\"></ion-icon>Phone : {{helplinePhone}}</p>\n                              </ion-item>\n                              <ion-item lines=\"none\">\n                                <p><ion-icon style=\"padding-right: 8px;\" name=\"mail-outline\"></ion-icon>Email : {{helplineEmail}} </p>\n                            </ion-item>\n                            <ion-item lines=\"none\">\n                              <p><ion-icon style=\"padding-right: 8px;\" name=\"location\"></ion-icon>Address : {{address}}</p>\n                            </ion-item>\n                          </div>\n                        \n                      </div>\n                  </div>                  \n              </div>\n          </div> <!-- end container -->\n      </section>\n      <!-- end contact-pg-section -->\n\n\n      <!--  start contact-map -->\n      <section class=\"contact-map-section\">\n          <h2 class=\"hidden\">Contact map</h2>\n          <div class=\"contact-map\">\n              <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671\" allowfullscreen></iframe>\n          </div>\n      </section>\n      <!-- end contact-map -->\n\n\n     \n\n  <!-- Footer -->\n <footer class=\"footer\">\n  <div class=\"container py-5\">\n    <div class=\"row py-4\">\n      <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0 \"> \n        <h2>BHOGE ACADEMY</h2>\n        <p   style=\"color: #fff; text-align: justify;\" class=\"font-italic \">Bhoge Career development Academy was founded by Shri. Krishna Bhoge (Rtd. IAS) in the year 2006.\n          Bhoge Career development Academy has been continuously guiding the students who have been studying\n          for the competitive exams. We are sincerely working on students to realize their future goals.</p>\n        <ul class=\"list-inline mt-4\">\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"instagram\"><i class=\"fa fa-instagram\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"vimeo\"><i class=\"fa fa-vimeo\"></i></a></li>\n        </ul>\n      </div>\n      <div  class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Shop</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Women</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Men</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Stores</a></li>\n          <li class=\"mb-2\"><a  class=\"footeri\"href=\"#\"  >Our Blog</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Company</h6>\n        <ul class=\"list-unstyled mb-0\">\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Login</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Register</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Wishlist</a></li>\n          <li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Our Products</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-4 col-md-6 mb-lg-0\">\n        <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Newsletter</h6>\n        <p style=\"color: #fff\" class=\" mb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>\n        <div class=\"p-1 rounded border\">\n          <div class=\"input-group\">\n            <input type=\"email\" placeholder=\"Enter your email address\" aria-describedby=\"button-addon1\" class=\"form-control border-0 shadow-0\">\n            <div class=\"input-group-append\">\n              <button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link\"><i class=\"fa fa-paper-plane\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Copyrights -->\n  <div class=\"bg-light py-2\">\n    <div class=\"container text-center\">\n      <p class=\"text-muted mb-0 py-9\">© 2021 JMK INFOSOFT</p>\n    </div>\n  </div>\n</footer>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_contact-us_contact-us_module_ts.js.map