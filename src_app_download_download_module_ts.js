(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_download_download_module_ts"],{

/***/ 3204:
/*!*****************************************************!*\
  !*** ./src/app/download/download-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageRoutingModule": () => (/* binding */ DownloadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.page */ 7445);




const routes = [
    {
        path: '',
        component: _download_page__WEBPACK_IMPORTED_MODULE_0__.DownloadPage
    }
];
let DownloadPageRoutingModule = class DownloadPageRoutingModule {
};
DownloadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DownloadPageRoutingModule);



/***/ }),

/***/ 7976:
/*!*********************************************!*\
  !*** ./src/app/download/download.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageModule": () => (/* binding */ DownloadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _download_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-routing.module */ 3204);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page */ 7445);







let DownloadPageModule = class DownloadPageModule {
};
DownloadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _download_routing_module__WEBPACK_IMPORTED_MODULE_0__.DownloadPageRoutingModule
        ],
        declarations: [_download_page__WEBPACK_IMPORTED_MODULE_1__.DownloadPage]
    })
], DownloadPageModule);



/***/ }),

/***/ 7445:
/*!*******************************************!*\
  !*** ./src/app/download/download.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPage": () => (/* binding */ DownloadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_download_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./download.page.html */ 7814);
/* harmony import */ var _download_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page.scss */ 748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DownloadPage = class DownloadPage {
    constructor() { }
    ngOnInit() {
    }
};
DownloadPage.ctorParameters = () => [];
DownloadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-download',
        template: _raw_loader_download_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_download_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DownloadPage);



/***/ }),

/***/ 748:
/*!*********************************************!*\
  !*** ./src/app/download/download.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a {\n  margin-right: 30px;\n}\n\n.navbar {\n  padding-left: 110px;\n}\n\n.navbar a:hover {\n  color: white !important;\n}\n\n.active {\n  color: #30bb9e !important;\n}\n\n.navbar-nav .nav-link:hover {\n  border-radius: 6px;\n  background: #30bb9e;\n  padding: 9px 3;\n}\n\n/*===== Header top =====*/\n\n.header-top {\n  background-color: #30bb9e;\n  padding-top: 10px;\n}\n\n.header-contact ul li {\n  display: inline-block;\n  margin-right: 60px;\n}\n\n.header-contact ul li:last-child {\n  margin-right: 0;\n}\n\n.header-contact ul li span {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.header-opening-time p {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 150px;\n}\n\n/*--------------------------------------------------------------\n# Services\n--------------------------------------------------------------*/\n\n.services .icon-box {\n  margin-bottom: 20px;\n  padding: 30px;\n  border-radius: 6px;\n}\n\n.services .icon-box i {\n  float: left;\n  color: #30bb9e;\n  font-size: 40px;\n}\n\n.services .icon-box h4 {\n  margin-left: 70px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 18px;\n}\n\n.services .icon-box h4 a {\n  color: #556270;\n  transition: 0.3s;\n}\n\n.services .icon-box p {\n  margin-left: 70px;\n  line-height: 24px;\n  font-size: 14px;\n}\n\n.services .icon-box:hover h4 a {\n  color: #30bb9e;\n}\n\n/*--------------------------------------------------------------\n# Sections General\n--------------------------------------------------------------*/\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-bg, .services .icon-box {\n  background-color: #f8f9fa;\n}\n\n.section-title {\n  padding-bottom: 40px;\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.section-title h2::after {\n  content: \"\";\n  width: 120px;\n  height: 1px;\n  display: inline-block;\n  background: #e6636a;\n  margin: 4px 10px;\n}\n\n.section-title p {\n  margin: 0;\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  color: #556270;\n}\n\n.footer {\n  background: #30bb9e;\n}\n\n#button-addon1 {\n  color: #ffc371;\n}\n\ni {\n  color: #ffc371;\n}\n\n.form-control::placeholder {\n  font-size: 0.95rem;\n  color: #30bb9e;\n  font-style: italic;\n}\n\n.form-control.shadow-0:focus {\n  box-shadow: none;\n}\n\n.footeri {\n  color: #524c4c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUFBO0VBQVUsdUJBQUE7QUFHVjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBQUM7RUFHRyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBLHlCQUFBOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQU1BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQU1BO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSEQ7O0FBT0E7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0csbUJBQUE7QUFKSjs7QUFTQTs7K0RBQUE7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBVUE7OytEQUFBOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSx5QkFBQTtBQVBGOztBQVVBO0VBQ0Usb0JBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBUEY7O0FBWUE7RUFDRSxtQkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0FBVEY7O0FBV0E7RUFDRSxjQUFBO0FBUkYiLCJmaWxlIjoiZG93bmxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMTBweDtcclxuYTpob3ZlciB7IGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XHJcblxyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMzMGJiOWUgIWltcG9ydGFudFxyXG4gIH1cclxuLy8gIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsXHJcbiAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgLy8gYm9yZGVyLXRvcDogIHNvbGlkICNmZmZmZmY7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAgc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IzMwYmI5ZTtcclxuICAgIHBhZGRpbmc6IDlweCAzO1xyXG59XHJcblxyXG5cclxuLyo9PT09PSBIZWFkZXIgdG9wID09PT09Ki9cclxuXHJcbi5oZWFkZXItdG9we1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmI5ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhlYWRlci1jb250YWN0e31cclxuLmhlYWRlci1jb250YWN0IHVse31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGkgaW1ne31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW9wZW5pbmctdGltZXt9XHJcbi5oZWFkZXItb3BlbmluZy10aW1lIHAge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgU2VydmljZXNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc2VydmljZXMgLmljb24tYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjMzBiYjllO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBoNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveCBoNCBhIHtcclxuICBjb2xvcjogIzU1NjI3MDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2VydmljZXMgLmljb24tYm94IHAge1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5pY29uLWJveDpob3ZlciBoNCBhIHtcclxuICBjb2xvcjogIzMwYmI5ZTtcclxufVxyXG5cclxuICBcclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIFNlY3Rpb25zIEdlbmVyYWxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlY3Rpb24tYmcsIC5zZXJ2aWNlcyAuaWNvbi1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZTY2MzZhO1xyXG4gIG1hcmdpbjogNHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM1NTYyNzA7XHJcbn1cclxuXHJcbi8vIGZvb3RlclxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjMzBiYjllO1xyXG59XHJcblxyXG4jYnV0dG9uLWFkZG9uMSB7XHJcbiAgY29sb3I6ICNmZmMzNzE7XHJcbn1cclxuXHJcbmkge1xyXG4gIGNvbG9yOiAjZmZjMzcxO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGNvbG9yOiAjMzBiYjllO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5zaGFkb3ctMDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZm9vdGVyaXtcclxuICBjb2xvcjogcmdiKDgyLCA3NiwgNzYpO1xyXG59Il19 */");

/***/ }),

/***/ 7814:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/download/download.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"header-top d-none d-lg-block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"header-contact text-lg-left text-center\">\n                    <ul>\n                        <li><img src=\"../../assets/maps.png\" alt=\"icon\"><span>127/5 Mark street, New york</span></li>\n                        <li><img src=\"../../assets/email.png\" alt=\"icon\"><span>info@yourmail.com</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div  class=\"header-opening-time text-lg-right text-center\">\n                    <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>\n                </div>\n            </div>\n        </div> <!-- row -->\n    </div> <!-- container -->\n</div> \n<!-- header top -->\n\n\n\n\n  <nav class=\"navbar  navbar-expand-md navbar-light  \"  >\n    <div class=\"container-fluid \">\n      <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n      <a href=\"\" class=\"logo me-auto\"><img src=\"../../assets/BhogeBlueLogo.png\" alt=\"\" class=\"img-fluid\"></a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a style=\"color: rgb(15, 14, 14);\" class=\"nav-link \" aria-current=\"page\" href=\"#\">Home</a>\n          <a style=\"color: rgb(20, 18, 18);\" class=\"nav-link\" routerLink=\"/about-us\" href=\"#\">About Us</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/faculties\" href=\"#\">Faculties</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link active\" routerLink=\"/download\" href=\"#\">Download</a>\n          <a style=\"color: rgb(12, 9, 9);\" class=\"nav-link\" routerLink=\"/contact-us\" href=\"#\">Contact Us</a>\n        \n           </div>\n           <div class=\"ion-text-left\">\n            <a target=\"blank\" style=\"background-color: #30bb9e; color: white; \" href=\"http://193.46.199.224/educationAdmin/Auth/login\" class=\"btn btn-md \" role=\"button\" >Login</a>\n          </div>\n      </div>\n    </div>\n    \n  </nav>\n\n \n\n  <div style=\"padding: 60px;\"  class=\"row \">\n    <div class=\"row\">\n      <div class=\"col col-lg-5 col-md-6 col-sm-8\">\n          <div class=\"section-title\">\n              <h2>Access the links form here!</h2>\n          </div>\n      </div>\n  </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Science</h5>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia in assumenda sapiente, molestias illo distinctio aspernatur porro quo ratione?.</p>\n          <a target=\"_blank\" href=\"../../assets/Erstellen Portfolio.pdf\" style=\"background-color:#30bb9e;color: white;\" class=\"btn btn-sm\" >Access Link</a>\n          <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Maths</h5>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus fuga nesciunt impedit ipsam sit doloribus laborum nam fugiat perferendis..</p>\n          <a target=\"_blank\" href=\"../../assets/Erstellen Portfolio.pdf\" style=\"background-color: #30bb9e; color: white;\" class=\"btn btn-sm \">Access Link</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_download_download_module_ts.js.map