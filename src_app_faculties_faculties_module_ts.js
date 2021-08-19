(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_faculties_faculties_module_ts"],{

/***/ 5200:
/*!*******************************************************!*\
  !*** ./src/app/faculties/faculties-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacultiesPageRoutingModule": () => (/* binding */ FacultiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _faculties_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faculties.page */ 4212);




const routes = [
    {
        path: '',
        component: _faculties_page__WEBPACK_IMPORTED_MODULE_0__.FacultiesPage
    }
];
let FacultiesPageRoutingModule = class FacultiesPageRoutingModule {
};
FacultiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FacultiesPageRoutingModule);



/***/ }),

/***/ 5130:
/*!***********************************************!*\
  !*** ./src/app/faculties/faculties.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacultiesPageModule": () => (/* binding */ FacultiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _faculties_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faculties-routing.module */ 5200);
/* harmony import */ var _faculties_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faculties.page */ 4212);







let FacultiesPageModule = class FacultiesPageModule {
};
FacultiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faculties_routing_module__WEBPACK_IMPORTED_MODULE_0__.FacultiesPageRoutingModule
        ],
        declarations: [_faculties_page__WEBPACK_IMPORTED_MODULE_1__.FacultiesPage]
    })
], FacultiesPageModule);



/***/ }),

/***/ 4212:
/*!*********************************************!*\
  !*** ./src/app/faculties/faculties.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacultiesPage": () => (/* binding */ FacultiesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_faculties_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./faculties.page.html */ 378);
/* harmony import */ var _faculties_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faculties.page.scss */ 2150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FacultiesPage = class FacultiesPage {
    constructor() { }
    ngOnInit() {
    }
};
FacultiesPage.ctorParameters = () => [];
FacultiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-faculties',
        template: _raw_loader_faculties_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faculties_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FacultiesPage);



/***/ }),

/***/ 2150:
/*!***********************************************!*\
  !*** ./src/app/faculties/faculties.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a {\n  margin-right: 30px;\n}\n\n.navbar {\n  padding-left: 110px;\n}\n\n.navbar a:hover {\n  color: white !important;\n}\n\n.active {\n  color: #30bb9e !important;\n}\n\n.navbar-nav .nav-link:hover {\n  border-radius: 6px;\n  background: #30bb9e;\n  padding: 9px 3;\n}\n\n/*===== Header top =====*/\n\n.header-top {\n  background-color: #30bb9e;\n  padding-top: 10px;\n}\n\n.header-contact ul li {\n  display: inline-block;\n  margin-right: 60px;\n}\n\n.header-contact ul li:last-child {\n  margin-right: 0;\n}\n\n.header-contact ul li span {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.header-opening-time p {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 150px;\n}\n\n/* Testimonial Block Two */\n\n.testimonial-page-section {\n  padding: 20px 50px 20px 50px;\n}\n\n.testimonial-block-two {\n  position: relative;\n}\n\n.testimonial-block-two .inner-box {\n  position: relative;\n  padding: 30px 30px;\n  border-radius: 7px;\n  background-color: #ffffff;\n}\n\n.testimonial-block-two .inner-box .quote-icon {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  color: #efefef;\n  font-size: 100px;\n  line-height: 1em;\n}\n\n.testimonial-block-two .inner-box .text {\n  position: relative;\n  color: #777777;\n  font-size: 14px;\n  line-height: 1.8em;\n  padding-top: 30px;\n  margin-bottom: 10px;\n  height: 80px;\n}\n\n.testimonial-block-two .inner-box .author-info {\n  position: relative;\n}\n\n.testimonial-block-two .inner-box .author-info .info-inner {\n  position: relative;\n  padding-left: 135px;\n  min-height: 100px;\n  padding-top: 25px;\n}\n\n.testimonial-block-two .inner-box .author-info .info-inner .author-image {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);\n}\n\n.testimonial-block-two .inner-box .author-info .info-inner h6 {\n  position: relative;\n  color: #000048;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.3em;\n}\n\n.testimonial-block-two .inner-box .author-info .info-inner .qualification {\n  position: relative;\n  color: #ffaa00;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3em;\n  margin-top: 6px;\n}\n\n.testimonial-block-two.style-two {\n  margin-bottom: 30px;\n}\n\n.testimonial-block-two.style-two .inner-box {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3VsdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFBQTtFQUFVLHVCQUFBO0FBR1Y7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQUFDO0VBR0csa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQSx5QkFBQTs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFLQTtFQUNJLGVBQUE7QUFGSjs7QUFNQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhEOztBQU9BO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNHLG1CQUFBO0FBSko7O0FBWUEsMEJBQUE7O0FBRUE7RUFDRSw0QkFBQTtBQVZGOztBQWFBO0VBQ0Msa0JBQUE7QUFWRDs7QUFhQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBVkQ7O0FBYUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWRDs7QUFhQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNDLGlCQUFBO0VBQ0QsbUJBQUE7RUFDQyxZQUFBO0FBVkY7O0FBYUE7RUFDQyxrQkFBQTtBQVZEOztBQWFBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFWRDs7QUFhQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQVZEOztBQWFBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFWRDs7QUFhQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVZEOztBQWFBO0VBQ0MsbUJBQUE7QUFWRDs7QUFhQTtFQUNDLDJDQUFBO0FBVkQ7O0FBYUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUFWRCIsImZpbGUiOiJmYWN1bHRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMTBweDtcclxuYTpob3ZlciB7IGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XHJcblxyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMzMGJiOWUgIWltcG9ydGFudFxyXG4gIH1cclxuLy8gIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsXHJcbiAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgLy8gYm9yZGVyLXRvcDogIHNvbGlkICNmZmZmZmY7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAgc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IzMwYmI5ZTtcclxuICAgIHBhZGRpbmc6IDlweCAzO1xyXG59XHJcblxyXG5cclxuLyo9PT09PSBIZWFkZXIgdG9wID09PT09Ki9cclxuXHJcbi5oZWFkZXItdG9we1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmI5ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhlYWRlci1jb250YWN0e31cclxuLmhlYWRlci1jb250YWN0IHVse31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGkgaW1ne31cclxuLmhlYWRlci1jb250YWN0IHVsIGxpIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW9wZW5pbmctdGltZXt9XHJcbi5oZWFkZXItb3BlbmluZy10aW1lIHAge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBUZXN0aW1vbmlhbCBCbG9jayBUd28gKi9cclxuXHJcbi50ZXN0aW1vbmlhbC1wYWdlLXNlY3Rpb257XHJcbiAgcGFkZGluZzogMjBweCA1MHB4IDIwcHggNTBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWJsb2NrLXR3b3tcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWJsb2NrLXR3byAuaW5uZXItYm94e1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHBhZGRpbmc6MzBweCAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6N3B4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWJsb2NrLXR3byAuaW5uZXItYm94IC5xdW90ZS1pY29ue1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHJpZ2h0OjE1cHg7XHJcblx0dG9wOjE1cHg7XHJcblx0Y29sb3I6I2VmZWZlZjtcclxuXHRmb250LXNpemU6MTAwcHg7XHJcblx0bGluZS1oZWlnaHQ6MWVtO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwtYmxvY2stdHdvIC5pbm5lci1ib3ggLnRleHR7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0Y29sb3I6Izc3Nzc3NztcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRsaW5lLWhlaWdodDoxLjhlbTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuXHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwtYmxvY2stdHdvIC5pbm5lci1ib3ggLmF1dGhvci1pbmZve1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwtYmxvY2stdHdvIC5pbm5lci1ib3ggLmF1dGhvci1pbmZvIC5pbmZvLWlubmVye1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHBhZGRpbmctbGVmdDoxMzVweDtcclxuXHRtaW4taGVpZ2h0OjEwMHB4O1xyXG5cdHBhZGRpbmctdG9wOjI1cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1ibG9jay10d28gLmlubmVyLWJveCAuYXV0aG9yLWluZm8gLmluZm8taW5uZXIgLmF1dGhvci1pbWFnZXtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjBweDtcclxuXHR0b3A6MHB4O1xyXG5cdHdpZHRoOjEwMHB4O1xyXG5cdGhlaWdodDoxMDBweDtcclxuXHRvdmVyZmxvdzpoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0Ym94LXNoYWRvdzowcHggMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWJsb2NrLXR3byAuaW5uZXItYm94IC5hdXRob3ItaW5mbyAuaW5mby1pbm5lciBoNntcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRjb2xvcjojMDAwMDQ4O1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRsaW5lLWhlaWdodDoxLjNlbTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWJsb2NrLXR3byAuaW5uZXItYm94IC5hdXRob3ItaW5mbyAuaW5mby1pbm5lciAucXVhbGlmaWNhdGlvbntcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRjb2xvcjojZmZhYTAwO1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRsaW5lLWhlaWdodDoxLjNlbTtcclxuXHRtYXJnaW4tdG9wOjZweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWJsb2NrLXR3by5zdHlsZS10d297XHJcblx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwtYmxvY2stdHdvLnN0eWxlLXR3byAuaW5uZXItYm94e1xyXG5cdGJveC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4xMCk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIGgyIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcHg7XHJcblx0bWFyZ2luOiAwIDAgNXB4IDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiAjYWFhYWFhO1xyXG5cdGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICB9Il19 */");

/***/ }),

/***/ 378:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculties/faculties.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"header-top d-none d-lg-block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"header-contact text-lg-left text-center\">\n                    <ul>\n                        <li><img src=\"../../assets/maps.png\" alt=\"icon\"><span>127/5 Mark street, New york</span></li>\n                        <li><img src=\"../../assets/email.png\" alt=\"icon\"><span>info@yourmail.com</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div  class=\"header-opening-time text-lg-right text-center\">\n                    <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>\n                </div>\n            </div>\n        </div> <!-- row -->\n    </div> <!-- container -->\n</div> \n<!-- header top -->\n\n\n\n\n  <nav class=\"navbar  navbar-expand-md navbar-light  \"  >\n    <div class=\"container-fluid \">\n      <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n      <a href=\"\" class=\"logo me-auto\"><img src=\"../../assets/BhogeBlueLogo.png\" alt=\"\" class=\"img-fluid\"></a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a style=\"color: rgb(15, 14, 14);\" class=\"nav-link \" aria-current=\"page\" href=\"#\">Home</a>\n          <a style=\"color: rgb(20, 18, 18);\" class=\"nav-link\" routerLink=\"/about-us\" href=\"#\">About Us</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link active\" routerLink=\"/faculties\" href=\"#\">Faculties</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/download\" href=\"#\">Download</a>\n          <a style=\"color: rgb(12, 9, 9);\" class=\"nav-link\" routerLink=\"/contact-us\" href=\"#\">Contact Us</a>\n        \n           </div>\n           <div class=\"ion-text-left\">\n            <a target=\"blank\" style=\"background-color: #30bb9e; color: white; \" href=\"http://193.46.199.224/educationAdmin/Auth/login\" class=\"btn btn-md \" role=\"button\" >Login</a>\n          </div>\n      </div>\n    </div>\n    \n  </nav>\n\n  <!-- Testimonial Page Section -->\n\t<section class=\"testimonial-page-section\">\n\t\t<div class=\"auto-container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div style=\"padding-top:30px ;\" class=\"col col-lg-5 col-md-6 col-sm-8 \">\n\t\t\t\t\t<div class=\"section-title\">\n\t\t\t\t\t\t<h2>Our valuable faculty</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t\n\t\t\t\t<!-- Testimonial Block Two -->\n       \n\t\t\t\t<div class=\"testimonial-block-two style-two col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"inner-box\">\n\t\t\t\t\t\t\n            <div class=\"author-info\">\n\t\t\t\t\t\t\t<div class=\"info-inner\">\n\t\t\t\t\t\t\t\t<div class=\"author-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/author-1.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h6>Mr Henry</h6>\n\t\t\t\t\t\t\t\t<div class=\"qualification\">Ceo</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"quote-icon flaticon-quote-1\"></div>\n\t\t\t\t\t\t<div class=\"text  overflow-auto\"> during the Industrial Revolution, upsetting previous mercantile.</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!-- Testimonial Block Two -->\n\t\t\t\t<div class=\"testimonial-block-two style-two col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"inner-box\">\n            <div class=\"author-info\">\n\t\t\t\t\t\t\t<div class=\"info-inner\">\n\t\t\t\t\t\t\t\t<div class=\"author-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/author-2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h6>Mr James</h6>\n\t\t\t\t\t\t\t\t<div class=\"qualification\">Marketing Director</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"quote-icon flaticon-quote-1\"></div>\n\t\t\t\t\t\t<div class=\"text overflow-auto\">Manufacturing industry became a key sector Manufacturing industry became a key sector Manufacturing industry became a key sector Manufacturing industry became a key sector of production and North American countries during the Industrial Revolution, upsetting previous mercantile.</div>\n\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!-- Testimonial Block Two -->\n\t\t\t\t<div class=\"testimonial-block-two style-two col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"inner-box\">\n            <div class=\"author-info\">\n\t\t\t\t\t\t\t<div class=\"info-inner\">\n\t\t\t\t\t\t\t\t<div class=\"author-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/author-3.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h6>Mrs Monal</h6>\n\t\t\t\t\t\t\t\t<div class=\"qualification\">Seo Officer</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"quote-icon flaticon-quote-1\"></div>\n\t\t\t\t\t\t<div class=\"text  overflow-auto\">Manufacturing industry became a key sector of production and North American countries during the Industrial Revolution, upsetting previous mercantile.</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!-- Testimonial Block Two -->\n\t\t\t\t<div class=\"testimonial-block-two style-two col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"inner-box\">\n            <div class=\"author-info\">\n\t\t\t\t\t\t\t<div class=\"info-inner\">\n\t\t\t\t\t\t\t\t<div class=\"author-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/author-4.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h6>Mr Raj</h6>\n\t\t\t\t\t\t\t\t<div class=\"qualification\">Ceo</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"quote-icon flaticon-quote-1\"></div>\n\t\t\t\t\t\t<div class=\"text  overflow-auto\">Manufacturing industry became a key sector of production and North American countries during the Industrial Revolution, upsetting previous mercantile.</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n        \t\t<!-- Testimonial Block Two -->\n\t\t\t\t<div class=\"testimonial-block-two style-two col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"inner-box\">\n            <div class=\"author-info\">\n\t\t\t\t\t\t\t<div class=\"info-inner\">\n\t\t\t\t\t\t\t\t<div class=\"author-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/author-1.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h6>Mr Raj</h6>\n\t\t\t\t\t\t\t\t<div class=\"qualification\">Ceo</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"quote-icon flaticon-quote-1\"></div>\n\t\t\t\t\t\t<div class=\"text  overflow-auto\">Manufacturing industry became a key sector of production and North American countries during the Industrial Revolution, upsetting previous mercantile.</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        \t\t<!-- Testimonial Block Two -->\n\t\t\t\t<div class=\"testimonial-block-two style-two col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"inner-box\">\n            <div class=\"author-info\">\n\t\t\t\t\t\t\t<div class=\"info-inner\">\n\t\t\t\t\t\t\t\t<div class=\"author-image\">\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/author-2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h6>Mr Raj</h6>\n\t\t\t\t\t\t\t\t<div class=\"qualification\">Ceo</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"quote-icon flaticon-quote-1\"></div>\n\t\t\t\t\t\t<div class=\"text  overflow-auto\">Manufacturing industry became a key sector of production and North American countries during the Industrial Revolution, upsetting previous mercantile.</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\n\t\t\t\t\n\t\t\t\n\t\t\t\t\n\t\n\t\t\t\t\n\t\t\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!-- End Testimonial Page Section -->\n\t<!-- Footer -->\n\t<footer class=\"footer\">\n\t\t<div class=\"container py-5\">\n\t\t  <div class=\"row py-4\">\n\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0 \"> \n\t\t\t  <h2>BHOGE ACADEMY</h2>\n\t\t\t  <p   style=\"color: #fff; text-align: justify;\" class=\"font-italic \">Bhoge Career development Academy was founded by Shri. Krishna Bhoge (Rtd. IAS) in the year 2006.\n\t\t\t\tBhoge Career development Academy has been continuously guiding the students who have been studying\n\t\t\t\tfor the competitive exams. We are sincerely working on students to realize their future goals.</p>\n\t\t\t  <ul class=\"list-inline mt-4\">\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"instagram\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"vimeo\"><i class=\"fa fa-vimeo\"></i></a></li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t\t<div  class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n\t\t\t  <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Shop</h6>\n\t\t\t  <ul class=\"list-unstyled mb-0\">\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Women</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Men</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Stores</a></li>\n\t\t\t\t<li class=\"mb-2\"><a  class=\"footeri\"href=\"#\"  >Our Blog</a></li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n\t\t\t  <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Company</h6>\n\t\t\t  <ul class=\"list-unstyled mb-0\">\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Login</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Register</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Wishlist</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Our Products</a></li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-6 mb-lg-0\">\n\t\t\t  <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Newsletter</h6>\n\t\t\t  <p style=\"color: #fff\" class=\" mb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>\n\t\t\t  <div class=\"p-1 rounded border\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t  <input type=\"email\" placeholder=\"Enter your email address\" aria-describedby=\"button-addon1\" class=\"form-control border-0 shadow-0\">\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t<button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link\"><i class=\"fa fa-paper-plane\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  \n\t\t<!-- Copyrights -->\n\t\t<div class=\"bg-light py-2\">\n\t\t  <div class=\"container text-center\">\n\t\t\t<p class=\"text-muted mb-0 py-9\">© 2021 JMK INFOSOFT</p>\n\t\t  </div>\n\t\t</div>\n\t  </footer>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_faculties_faculties_module_ts.js.map