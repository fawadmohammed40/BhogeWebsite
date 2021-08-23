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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_faculties_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./faculties.page.html */ 378);
/* harmony import */ var _faculties_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faculties.page.scss */ 2150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);





let FacultiesPage = class FacultiesPage {
    constructor(authService) {
        this.authService = authService;
        this.segmentModel = 'regular';
    }
    ngOnInit() {
        this.authService.getFaculties().subscribe((res) => {
            this.data = res["data"];
        });
    }
    segmentChanged(event) {
        console.log(this.segmentModel);
        console.log(event);
    }
};
FacultiesPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
FacultiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a {\n  margin-right: 30px;\n}\n\n.navbar {\n  padding-left: 110px;\n}\n\n.navbar a:hover {\n  color: white !important;\n}\n\n.active {\n  color: #30bb9e !important;\n}\n\n.navbar-nav .nav-link:hover {\n  border-radius: 6px;\n  background: #30bb9e;\n  padding: 9px 3;\n}\n\n/*===== Header top =====*/\n\n.header-top {\n  background-color: #30bb9e;\n  padding-top: 10px;\n}\n\n.header-contact ul li {\n  display: inline-block;\n  margin-right: 60px;\n}\n\n.header-contact ul li:last-child {\n  margin-right: 0;\n}\n\n.header-contact ul li span {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\n.header-opening-time p {\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 400;\n  padding-left: 150px;\n}\n\n.experience {\n  height: 100px;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.facultycard {\n  border-bottom: solid #30bb9e;\n  padding: 10px 0px 10px 0px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3VsdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFBQTtFQUFVLHVCQUFBO0FBR1Y7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQUFDO0VBR0csa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQSx5QkFBQTs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFLQTtFQUNJLGVBQUE7QUFGSjs7QUFNQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhEOztBQU9BO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNHLG1CQUFBO0FBSko7O0FBU0E7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVNBO0VBRUUsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBUEYiLCJmaWxlIjoiZmFjdWx0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbmE6aG92ZXIgeyBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxyXG5cclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMzBiYjllICFpbXBvcnRhbnRcclxuICB9XHJcbi8vICAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLFxyXG4gLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIC8vIGJvcmRlci10b3A6ICBzb2xpZCAjZmZmZmZmO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogIHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMGJiOWU7XHJcbiAgICBwYWRkaW5nOiA5cHggMztcclxufVxyXG5cclxuXHJcbi8qPT09PT0gSGVhZGVyIHRvcCA9PT09PSovXHJcblxyXG4uaGVhZGVyLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJiOWU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdHt9XHJcbi5oZWFkZXItY29udGFjdCB1bHt9XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxufVxyXG4uaGVhZGVyLWNvbnRhY3QgdWwgbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWN0IHVsIGxpIGltZ3t9XHJcbi5oZWFkZXItY29udGFjdCB1bCBsaSBzcGFuIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci1vcGVuaW5nLXRpbWV7fVxyXG4uaGVhZGVyLW9wZW5pbmctdGltZSBwIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4cGVyaWVuY2Vcclxue1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47fVxyXG5cclxuLmZhY3VsdHljYXJkXHJcbntcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAgIzMwYmI5ZTtcclxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"header-top d-none d-lg-block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"header-contact text-lg-left text-center\">\n                    <ul>\n                        <li><img src=\"../../assets/maps.png\" alt=\"icon\"><span>127/5 Mark street, New york</span></li>\n                        <li><img src=\"../../assets/email.png\" alt=\"icon\"><span>info@yourmail.com</span></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div  class=\"header-opening-time text-lg-right text-center\">\n                    <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>\n                </div>\n            </div>\n        </div> <!-- row -->\n    </div> <!-- container -->\n</div> \n<!-- header top -->\n\n\n\n\n  <nav class=\"navbar  navbar-expand-md navbar-light  \"  >\n    <div class=\"container-fluid \">\n      <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n      <a href=\"\" class=\"logo me-auto\"><img src=\"../../assets/BhogeBlueLogo.png\" alt=\"\" class=\"img-fluid\"></a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a style=\"color: rgb(15, 14, 14);\" class=\"nav-link \" aria-current=\"page\" href=\"#\">Home</a>\n          <a style=\"color: rgb(20, 18, 18);\" class=\"nav-link\" routerLink=\"/about-us\" href=\"#\">About Us</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link active\" routerLink=\"/faculties\" href=\"#\">Faculties</a>\n          <a style=\"color: rgb(10, 8, 8);\" class=\"nav-link\" routerLink=\"/download\" href=\"#\">Download</a>\n          <a style=\"color: rgb(12, 9, 9);\" class=\"nav-link\" routerLink=\"/contact-us\" href=\"#\">Contact Us</a>\n        \n           </div>\n           <div class=\"ion-text-left\">\n            <a target=\"blank\" style=\"background-color: #30bb9e; color: white; \" href=\"http://193.46.199.224/educationAdmin/Auth/login\" class=\"btn btn-md \" role=\"button\" >Login</a>\n          </div>\n      </div>\n    </div>\n    \n  </nav>\n\n  <!-- Testimonial Page Section -->\n\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div style=\"padding:30px 0px 0px 30px ;\" class=\"col col-lg-5 col-md-6 col-sm-8 0\">\n\t\t\t\t\t<div class=\"section-title\">\n\t\t\t\t\t\t<h2>Our valuable faculty</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ion-segment value=\"all\" color=\"tertiary\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segmentModel\"\n\t\t\t(ionChange)=\"segmentChanged($event)\">\n\t\t\t<ion-segment-button value=\"regular\">\n\t\t\t  <ion-label>Regular Faculty </ion-label>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"guest\">\n\t\t\t  <ion-label>Guest Faculty</ion-label>\n\t\t\t</ion-segment-button>\n\t\t  </ion-segment>\n\t\t\n\t\t\t<ion-row>\n\t\t  <ng-container  *ngFor=\"let faculty of data\" >\n\t\t\t  <ion-col size=\"6\" *ngIf=\"segmentModel === 'regular' && faculty.faculty_type =='regular'\">\n\t\t\t\t<ion-card class=\"facultycard \" >\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t  <ion-avatar> <img  src=\"{{faculty.faculty_image}}\"> </ion-avatar>\n\t\t\t\t\t  <ion-label style=\"padding-left: 20px;\">\n\t\t\t\t\t\t<h3>{{faculty.faculty_name}} </h3>\n\t\t\t\t\t\t<p>{{faculty.faculty_edu}}</p>\n\t\t\t\t\t  </ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<div class=\"experience\">\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t{{faculty.faculty_exp}}\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t\t\n\t\t  </ng-container>\n\n\t\t  <ng-container  *ngFor=\"let faculty of data\" >\n\t\t\t<ion-col size=\"6\" *ngIf=\"segmentModel === 'guest' && faculty.faculty_type =='guest'\">\n\t\t\t  <ion-card class=\"facultycard \" >\n\t\t\t\t  <ion-item>\n\t\t\t\t\t<ion-avatar> <img  src=\"{{faculty.faculty_image}}\"> </ion-avatar>\n\t\t\t\t\t<ion-label style=\"padding-left: 20px;\">\n\t\t\t\t\t  <h3>{{faculty.faculty_name}} </h3>\n\t\t\t\t\t  <p>{{faculty.faculty_edu}}</p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t  </ion-item>\n\t\t\t\t  <div class=\"experience\">\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t  {{faculty.faculty_exp}}\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t  </div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t  \n\t\t</ng-container>\n\t\t</ion-row>\n\t\t \n\t<!-- End Testimonial Page Section -->\n\t<!-- Footer -->\n\t<footer class=\"footer\">\n\t\t<div class=\"container py-5\">\n\t\t  <div class=\"row py-4\">\n\t\t\t<div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0 \"> \n\t\t\t  <h2>BHOGE ACADEMY</h2>\n\t\t\t  <p   style=\"color: #fff; text-align: justify;\" class=\"font-italic \">Bhoge Career development Academy was founded by Shri. Krishna Bhoge (Rtd. IAS) in the year 2006.\n\t\t\t\tBhoge Career development Academy has been continuously guiding the students who have been studying\n\t\t\t\tfor the competitive exams. We are sincerely working on students to realize their future goals.</p>\n\t\t\t  <ul class=\"list-inline mt-4\">\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"instagram\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"pinterest\"><i class=\"fa fa-pinterest\"></i></a></li>\n\t\t\t\t<li class=\"list-inline-item\"><a href=\"#\" target=\"_blank\" title=\"vimeo\"><i class=\"fa fa-vimeo\"></i></a></li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t\t<div  class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n\t\t\t  <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Shop</h6>\n\t\t\t  <ul class=\"list-unstyled mb-0\">\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Women</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >For Men</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Stores</a></li>\n\t\t\t\t<li class=\"mb-2\"><a  class=\"footeri\"href=\"#\"  >Our Blog</a></li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-6 mb-4 mb-lg-0 \">\n\t\t\t  <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Company</h6>\n\t\t\t  <ul class=\"list-unstyled mb-0\">\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Login</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Register</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Wishlist</a></li>\n\t\t\t\t<li class=\"mb-2\"><a class=\"footeri\" href=\"#\"  >Our Products</a></li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-6 mb-lg-0\">\n\t\t\t  <h6 style=\"color: #000;\" class=\"text-uppercase font-weight-bold mb-4\">Newsletter</h6>\n\t\t\t  <p style=\"color: #fff\" class=\" mb-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>\n\t\t\t  <div class=\"p-1 rounded border\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t  <input type=\"email\" placeholder=\"Enter your email address\" aria-describedby=\"button-addon1\" class=\"form-control border-0 shadow-0\">\n\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t<button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link\"><i class=\"fa fa-paper-plane\"></i></button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  \n\t\t<!-- Copyrights -->\n\t\t<div class=\"bg-light py-2\">\n\t\t  <div class=\"container text-center\">\n\t\t\t<p class=\"text-muted mb-0 py-9\">© 2021 JMK INFOSOFT</p>\n\t\t  </div>\n\t\t</div>\n\t  </footer>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_faculties_faculties_module_ts.js.map