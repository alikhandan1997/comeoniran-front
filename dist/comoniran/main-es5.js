function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>about-us works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/destinations/destination-detail/destination-detail.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/destinations/destination-detail/destination-detail.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDestinationsDestinationDetailDestinationDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"top-image\" [ngStyle] = \" cityImage && {'background-image': 'url(' + cityImage + ')'}\">\n    <div class=\"header\">\n        <h1>Travel to {{cityName}}</h1>\n    </div>\n</section>\n\n<section class=\"city-content\">\n    <div class=\"container\">\n        <div class=\"little-desc\">\n            <h3>What about this city?</h3>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur ab rerum modi quos voluptates eius doloribus itaque exercitationem, necessitatibus soluta aut odio adipisci pariatur aliquam quis omnis ipsam beatae!</p>\n        </div>\n        <div class=\"main-content\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 leader\">\n                    <h3>Yazd top leaders</h3>\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                    </div>\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                    </div>\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                    </div>\n\n                    <div class=\"other-leader\">\n                        <a [routerLink] = \"['/leaders']\">Other Leaders</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-9 hotel-tour\">\n                    <div class=\"row\">\n                        <div class=\"col-lg\">\n                            <div class=\"hotel-head\">\n                                <h3>\n                                    City most popular hotels\n                                    <a href=\"\">\n                                        SEE MORE HOTELS\n                                        <i class=\"fa fa-angle-right\"></i>\n                                    </a>\n                                </h3>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-4\">\n                            <div class=\"image\">\n                                <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                    <img src=\"../../assets/city.jpg\" alt=\"\">\n                                </a>\n                                <div class=\"price\">\n                                    <a href=\"\">$500</a>\n                                </div>\n                            </div>\n                            <div class=\"desc\">\n                                <h4>hotel name</h4>\n                                <p>hotel address</p>\n                                <span>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"far fa-star\"></i>\n                                </span>\n                                <span class=\"days\">\n                                    <i class=\"far fa-clock\"></i>\n                                    <a href=\"\">5 Days</a>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <div class=\"image\">\n                                <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                    <img src=\"../../assets/city.jpg\" alt=\"\">\n                                </a>\n                                <div class=\"price\">\n                                    <a href=\"\">$500</a>\n                                </div>\n                            </div>\n                            <div class=\"desc\">\n                                <h4>hotel name</h4>\n                                <p>hotel address</p>\n                                <span>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"far fa-star\"></i>\n                                </span>\n                                <span class=\"days\">\n                                    <i class=\"far fa-clock\"></i>\n                                    <a href=\"\">5 Days</a>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <div class=\"image\">\n                                <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                    <img src=\"../../assets/city.jpg\" alt=\"\">\n                                </a>\n                                <div class=\"price\">\n                                    <a href=\"\">$500</a>\n                                </div>\n                            </div>\n                            <div class=\"desc\">\n                                <h4>hotel name</h4>\n                                <p>hotel address</p>\n                                <span>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"far fa-star\"></i>\n                                </span>\n                                <span class=\"days\">\n                                    <i class=\"far fa-clock\"></i>\n                                    <a href=\"\">5 Days</a>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-lg\">\n                            <div class=\"tour-head\">\n                                <h3>\n                                    City most popular tours\n                                    <a href=\"\">\n                                        SEE MORE TOURS\n                                        <i class=\"fa fa-angle-right\"></i>\n                                    </a>\n                                </h3>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-lg-4\">\n                            <div class=\"image\">\n                                <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                    <img src=\"../../assets/city.jpg\" alt=\"\">\n                                </a>\n                                <div class=\"price\">\n                                    <a href=\"\">$500</a>\n                                </div>\n                            </div>\n                            <div class=\"desc\">\n                                <h4>hotel name</h4>\n                                <p>hotel address</p>\n                                <span>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"far fa-star\"></i>\n                                </span>\n                                <span class=\"days\">\n                                    <i class=\"far fa-clock\"></i>\n                                    <a href=\"\">5 Days</a>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <div class=\"image\">\n                                <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                    <img src=\"../../assets/city.jpg\" alt=\"\">\n                                </a>\n                                <div class=\"price\">\n                                    <a href=\"\">$500</a>\n                                </div>\n                            </div>\n                            <div class=\"desc\">\n                                <h4>hotel name</h4>\n                                <p>hotel address</p>\n                                <span>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"far fa-star\"></i>\n                                </span>\n                                <span class=\"days\">\n                                    <i class=\"far fa-clock\"></i>\n                                    <a href=\"\">5 Days</a>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <div class=\"image\">\n                                <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                    <img src=\"../../assets/city.jpg\" alt=\"\">\n                                </a>\n                                <div class=\"price\">\n                                    <a href=\"\">$500</a>\n                                </div>\n                            </div>\n                            <div class=\"desc\">\n                                <h4>hotel name</h4>\n                                <p>hotel address</p>\n                                <span>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"fas fa-star\"></i>\n                                    <i class=\"far fa-star\"></i>\n                                </span>\n                                <span class=\"days\">\n                                    <i class=\"far fa-clock\"></i>\n                                    <a href=\"\">5 Days</a>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"city-desc-map\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n                <div class=\"row\">\n                    <div class=\"col-lg about-head\">\n                        <h4>What about the city?</h4>\n                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab magni corrupti autem esse quod laudantium, itaque explicabo, harum adipisci neque illum id. Molestias autem alias perspiciatis ipsa ducimus, doloremque iusto!</p>\n                    </div>\n                </div>\n                <div class=\"row time-head\">\n                    <div class=\"col-lg-12\">\n                        <h4>Best time to travel to city</h4>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Jan</h6>\n                        <i class=\"fas fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Feb</h6>\n                        <i class=\"far fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Mar</h6>\n                        <i class=\"far fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Apr</h6>\n                        <i class=\"far fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>May</h6>\n                        <i class=\"fas fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Jun</h6>\n                        <i class=\"far fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Jul</h6>\n                        <i class=\"far fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Aug</h6>\n                        <i class=\"far fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Sep</h6>\n                        <i class=\"fas fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Oct</h6>\n                        <i class=\"fas fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Nov</h6>\n                        <i class=\"fas fa-circle\"></i>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-sm-2 col-2 month\">\n                        <h6>Dec</h6>\n                        <i class=\"fas fa-circle\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <h3>find it on the map</h3>\n                <div class=\"map\" id=\"map\"></div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"other-destinations\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 other-head\">\n                <h3>Other destinations that might interest you</h3>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/hotels', 'hotelname']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/hotels', 'hotelname']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/hotels', 'hotelname']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/destinations/destinations/destinations.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/destinations/destinations/destinations.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDestinationsDestinationsDestinationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"top-search-box\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg search-box-container\">\n                <div class=\"search-box-head\">\n                    <h4>Choose your next destination!</h4>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg\">\n                        <div class=\"search-form\">\n                            <form class=\"form-inline\">\n                                <input class=\"form-control\" type=\"search\" placeholder=\"Where would you like to go?\" aria-label=\"Search\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Discover</button>\n                              </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"city-info-box\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"city-container\">\n                <div class=\"city-image\">\n                    <span><img src=\"../../assets/back-ground.jpg\" alt=\"\"></span>\n                </div>\n                <div class=\"city-describe\">\n                    <h2>Iran</h2>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam enim rerum, nostrum voluptas iusto possimus natus reiciendis quam eum provident eius sed tempore quasi libero autem doloremque voluptatem vel.</p>\n                    <div class=\"row city-name\">\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                            <a [routerLink]=\"['/destinations', 'tehran']\">Tehran</a>\n                        </div>\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                            <a href=\"\">Yazd</a>\n                        </div>\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                            <a href=\"\">Esfahan</a>\n                        </div>\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                            <a href=\"\">Mashahd</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- banner part start-->\n<section class=\"banner_part\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg\" style=\"width: 100%;\">\n                <div class=\"banner_text\">\n                    <span class=\"up-head\">\n                        <span>\n                            Discover\n                            <i class=\"fas fa-circle\"></i>\n                            <i class=\"fas fa-circle\"></i>\n                            <i class=\"fas fa-circle\"></i>\n                        </span>\n                        <span>\n                            Easy\n                            <i class=\"fas fa-circle\"></i>\n                            <i class=\"fas fa-circle\"></i>\n                            <i class=\"fas fa-circle\"></i>\n                        </span>\n                        <span>\n                            Travel\n                            <i class=\"fas fa-circle\"></i>\n                            <i class=\"fas fa-circle\"></i>\n                            <i class=\"fas fa-circle\"></i>\n                        </span>\n                    </span>\n                    <h5>Create tailor-made tours with local travel agents</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- banner part start-->\n\n<!-- banner part start-->\n<section class=\"search_your_country\">\n    <div class=\"container-fluid\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-12\">\n                <div class=\"search_form\">\n                    <form class=\"form-inline\">\n                        <i class=\"fas fa-map-marked-alt\"></i>\n                        <input type=\"email\" id=\"email\" placeholder=\"Where would you like to go?\">\n                        <button class=\"submit\" type=\"submit\">Discover</button>\n                        <button class=\"triptypes\" type=\"submit\">Not sure yet? Try our Trip Finder</button>\n                      </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"top-item-header\">\n            <h1>Popular options</h1>\n        </div>\n        <div class=\"row donation\">\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"top-item-content\">\n                    <h4>Hotels</h4>\n                    <a href=\"hotels\">\n                        <img src=\"../../assets/hotel-main.jpeg\" alt=\"#\">\n                    </a>\n                    <div class=\"desc\">\n                        <h5>Yazd</h5>\n                        <a href=\"/\" onclick=\"return false\">3 hotels</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"top-item-content\">\n                    <h4>Tours</h4>\n                    <a href=\"tours\">\n                        <img src=\"../../assets/tour-main.jpg\" alt=\"#\">\n                    </a>\n                    <div class=\"desc\">\n                        <h5>Yazd</h5>\n                        <a href=\"/\" onclick=\"return false\">3 tours</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"top-item-content\">\n                    <h4>Leaders</h4>\n                    <a href=\"leaders\">\n                        <img src=\"../../assets/leader-main.jpg\" alt=\"#\">\n                    </a> \n                    <div class=\"desc\">\n                        <h5>Yazd</h5>\n                        <a href=\"/\" onclick=\"return false\">3 leaders</a>\n                    </div>\n                </div>\n            </div> \n        </div>\n    </div>\n</section>\n<!-- banner part start-->\n\n<section class=\"advantages\">\n    <div class=\"content\">\n        <div class=\"head\">\n            <div class=\"head-icon\">\n                <i class=\"fas fa-circle\"></i>\n                <i class=\"fas fa-circle\"></i>\n                <i class=\"fas fa-circle\"></i>\n            </div>\n            <h3>The advantages of ComeOnIran</h3>\n        </div>\n        <div class=\"content-box\">\n            <div class=\"row \">\n                <div class=\"col-lg-3 col-sm-6\">\n                    <i class=\"fas fa-map-marker-alt\"></i>\n                    <div class=\"desc\">\n                        <h4>Local Expertise</h4>\n                        <p>From local gems to highlights, our agents have you covered</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-sm-6\">\n                    <i class=\"fas fa-edit\"></i>\n                    <div class=\"desc\">\n                        <h4>100% Tailor-Made</h4>\n                        <p>Customize a tour based around your needs and interests</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-sm-6\">\n                    <i class=\"fas fa-dollar-sign\"></i>\n                    <div class=\"desc\">\n                        <h4>Cost-Efficient Pricing</h4>\n                        <p>Our prices don't include any middleman fee</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-sm-6\">\n                    <i class=\"fas fa-handshake\"></i>\n                    <div class=\"desc\">\n                        <h4>Our Guarantees</h4>\n                        <p>We're an ASTA member and provide a range of safety guarantees</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"about-us\">\n            <a href=\"about-us\">\n                <button class=\"about-us-button\" type=\"submit\">Read more about ComeOnIran</button>\n            </a>\n        </div>\n    </div>\n</section>\n\n<section class=\"leaders\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 leader-detail\">\n                <div class=\"head-icon\">\n                    <i class=\"fas fa-users\"></i>\n                </div>\n                <div class=\"title\">\n                    <h2>Local agencies and leaders</h2>\n                </div>\n                <div class=\"desc\">\n                    <p>All the agents on the ComeOnIran website are carefully selected local professionals.\n                    Each agent specializes in tailor-made tours,\n                    so send an inquiry and start creating your perfect trip!</p>\n                </div>\n                <div class=\"see-more\">\n                    <a href=\"leaders\">\n                        LEARN MORE ABOUT OUR LEADERS \n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6 leader-box\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6 leader-box\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- use sasu part end-->\n<section class=\"popular_hotels padding_top\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"section_tittle text-center\">\n                    <h2>Recent Hotels </h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row donation\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                            <span>(20 Reviews)</span>\n                        </span>\n                        <span class=\"days\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                            <span>(20 Reviews)</span>\n                        </span>\n                        <span class=\"days\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                            <span>(20 Reviews)</span>\n                        </span>\n                        <span class=\"days\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"see-More\">\n                <a href=\"hotels\">\n                    <button>See More Hotels</button>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- use sasu part end-->\n\n<!-- cta part start-->\n<section class=\"cta_part section_padding\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"head\">\n                    <h1>Keep traveling all year round!</h1>\n                    <p>Subscribe to our newsletter to receive the best local travel inspiration directly in your inbox.</p>\n                </div>\n            </div>\n            <div class=\"col-lg-12\">\n                <div class=\"search-box\">\n                    <input type=\"text\" placeholder=\"Enter your email here\">\n                    <button>SUBSCRIBE NOW</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section> \n<!-- cta part end-->\n\n<!-- pricing part start-->\n<section class=\"tour_package section_padding\">\n    <div class=\"container-fluid\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"section_tittle text-center\">\n                    <h2>Recent Tours </h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/tours', 'tourname']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                    <div class=\"price\">\n                        <a href=\"\">$500</a>\n                    </div>\n                </div>\n                <div class=\"desc\">\n                    <h4>tour name</h4>\n                    <p>tour description</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                        <span>(20 Reviews)</span>\n                    </span>\n                    <span class=\"days\">\n                        <i class=\"far fa-clock\"></i>\n                        <a href=\"\" style=\"margin-left:3px;color:black\">5 Days</a>\n                    </span>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/tours', 'tourname']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                    <div class=\"price\">\n                        <a href=\"\">$500</a>\n                    </div>\n                </div>\n                <div class=\"desc\">\n                    <h4>tour name</h4>\n                    <p>tour description</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                        <span>(20 Reviews)</span>\n                    </span>\n                    <span class=\"days\">\n                        <i class=\"far fa-clock\"></i>\n                        <a href=\"\" style=\"margin-left:3px;color:black\">5 Days</a>\n                    </span>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/tours', 'tourname']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                    <div class=\"price\">\n                        <a href=\"\">$500</a>\n                    </div>\n                </div>\n                <div class=\"desc\">\n                    <h4>tour name</h4>\n                    <p>tour description</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                        <span>(20 Reviews)</span>\n                    </span>\n                    <span class=\"days\">\n                        <i class=\"far fa-clock\"></i>\n                        <a href=\"\" style=\"margin-left:3px;color:black\">5 Days</a>\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"see-More\">\n                <a href=\"tours\">\n                    <button>See More Tours</button>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- pricing part end-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotels/hotels-detail/hotels-detail.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotels/hotels-detail/hotels-detail.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelsHotelsDetailHotelsDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>hotels-detail works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotels/hotels/hotels.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotels/hotels/hotels.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelsHotelsHotelsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"filter\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <div class=\"row hotel-box\">\n                    <h6>FIND HOTELS...</h6>\n                    <div class=\"col-lg hotel-content\">\n                        <h4>Find your favorite hotels</h4>\n                        <p>Either find a hotels below, or send a general inquiry by clicking 'Start finding my hotel.'</p>\n                        <div class=\"design-trip-form\">\n                            <form class=\"form-inline\" action=\"\">\n                                <label for=\"email\">City</label>\n                                <input type=\"text\" placeholder=\"Enter your city\">\n                                <label for=\"pwd\">Date </label>\n                                <select class=\"form-control date\" name=\"date\" form=\"form-inline\">\n                                    <option value=\"\" selected=\"\" disabled=\"\" style=\"display:none;\">Departure date</option>\n                                    <option value=\"2020-04-01\">April 2020</option>\n                                    <option value=\"2020-05-01\">May 2020</option>\n                                    <option value=\"2020-06-01\">June 2020</option>\n                                    <option value=\"2020-07-01\">July 2020</option>\n                                    <option value=\"2020-08-01\">August 2020</option>\n                                    <option value=\"2020-09-01\">September 2020</option>\n                                    <option value=\"2020-10-01\">October 2020</option>\n                                    <option value=\"2020-11-01\">November 2020</option>\n                                    <option value=\"2020-12-01\">December 2020</option>\n                                    <option value=\"2021-01-01\">January 2021</option>\n                                    <option value=\"2021-02-01\">February 2021</option>\n                                    <option value=\"2021-03-01\">March 2021</option>\n                                    <option value=\"2021-04-01\">April 2021</option>\n                                    <option value=\"2021-05-01\">May 2021</option>\n                                    <option value=\"2021-06-01\">June 2021</option>\n                                    <option value=\"2021-07-01\">July 2021</option>\n                                    <option value=\"2021-08-01\">August 2021</option>\n                                    <option value=\"2021-09-01\">September 2021</option>\n                                    <option value=\"2021-10-01\">October 2021</option>\n                                    <option value=\"2021-11-01\">November 2021</option>\n                                    <option value=\"2021-12-01\">December 2021</option>\n                                    <option value=\"2022-01-01\">January 2022</option>\n                                </select>\n                                <button type=\"submit\">Start finding my hotel</button>\n                              </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"hotels\">\n    <div class=\"container-fluid\">\n        <div class=\"title\">\n            <div class=\"head\">\n                <h1>Popular Hotels</h1>\n            </div>\n            <div class=\"desc\">\n                <p>You can find some of our popular hotels down here</p>\n            </div>\n        </div>\n        <div class=\"list\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"header\" *ngIf=\"showOthers\">\n                <h1>Other hotels</h1>\n            </div>\n            <div class=\"row\" *ngIf=\"showOthers\">\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/hotels', 'hotelname']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>hotel name</h4>\n                        <p>hotel address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"more-hotels\">\n                    <button (click)=\"showOther()\">{{lessMore}} Hotels</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/leaders/leaders-detail/leader-detail.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leaders/leaders-detail/leader-detail.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLeadersLeadersDetailLeaderDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"leader-profile\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"profile-pic\">\n                    <img src=\"../../../assets/city.jpg\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"col-lg-8\">\n                <div class=\"leader-name\">\n                    <h2>leadername</h2>\n                </div>\n                <div class=\"about-leader\">\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit necessitatibus laboriosam culpa aliquid corrupti ipsum vel inventore at veniam, quos, est maxime consectetur eius? Nulla tempore ut fugiat ad perferendis.</p>\n                </div>\n                <div class=\"leader-info\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <p>\n                                <i class=\"fas fa-calendar-check\"></i>\n                                <span>Joind comeoniran :</span> \n                                4 years ago\n                            </p>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <p>\n                                <i class=\"fas fa-business-time\"></i>\n                                <span>Leader operating for :</span> \n                                10years\n                            </p>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <p>\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                                <span>Based in :</span>\n                                iran,yazd\n                            </p>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <p>\n                                <i class=\"fas fa-comments\"></i>\n                                <span>Language spoken :</span> \n                                english,french\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"tour-idea\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"head\">\n                    <h2>Browse their tour ideas</h2>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"icon\">\n                    <i class=\"fas fa-users\"></i>\n                </div>\n                <div class=\"desc-top\">\n                    <h5>Browse leadername customizable tour ideas.</h5>\n                    <p>These ideas are completely customizable: duration, pace, accommodation, activities...</p>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"image\">\n                    <img src=\"../../../assets/city.jpg\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"desc\">\n                    <h4>The tour title</h4>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos omnis repellat voluptatum autem rem dolores totam in pariatur sapiente, vel at veritatis rerum odio corrupti sunt nesciunt iste illum!</p>\n                    <div>Lenght : 8 days</div>\n                    <div>price : $500</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row other-tour\">\n            <div class=\"col-lg-3\">\n                <a href=\"\">\n                    <span>\n                        <img src=\"../../assets/city.jpg\" style=\"width: 100%;height: 200px;\">\n                        <div class=\"desc\">\n                            <h5>tourname</h5>\n                            <p>tour desc</p>\n                            <p>Lenght : 8 days</p>\n                            <p>price : $500</p>\n                        </div>\n                    </span>\n                </a>\n            </div>\n            <div class=\"col-lg-3\">\n                <a href=\"\">\n                    <span>\n                        <img src=\"../../assets/city.jpg\" style=\"width: 100%;height: 200px;\">\n                        <div class=\"desc\">\n                            <h5>tourname</h5>\n                            <p>tour desc</p>\n                            <p>Lenght : 8 days</p>\n                            <p>price : $500</p>\n                        </div>\n                    </span>\n                </a>\n            </div>\n            <div class=\"col-lg-3\">\n                <a href=\"\">\n                    <span>\n                        <img src=\"../../assets/city.jpg\" style=\"width: 100%;height: 200px;\">\n                        <div class=\"desc\">\n                            <h5>tourname</h5>\n                            <p>tour desc</p>\n                            <p>Lenght : 8 days</p>\n                            <p>price : $500</p>\n                        </div>\n                    </span>\n                </a>\n            </div>\n            <div class=\"col-lg-3\">\n                <a href=\"\">\n                    <span>\n                        <img src=\"../../assets/city.jpg\" style=\"width: 100%;height: 200px;\">\n                        <div class=\"desc\">\n                            <h5>tourname</h5>\n                            <p>tour desc</p>\n                            <p>Lenght : 8 days</p>\n                            <p>price : $500</p>\n                        </div>\n                    </span>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"other-leader\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"head\">\n                    <h2>Other leaders you might like</h2>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/leaders/leaders/leaders.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leaders/leaders/leaders.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLeadersLeadersLeadersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"filter\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <div class=\"row hotel-box\">\n                    <h6>FIND LEADERS...</h6>\n                    <div class=\"col-lg col-sm hotel-content\">\n                        <h4>Find your favorite leaders</h4>\n                        <p>Either find a leader below, or send a general inquiry by clicking 'Start finding my leader.'</p>\n                        <div class=\"design-trip-form\">\n                            <form class=\"form-inline\" action=\"\">\n                                <label for=\"email\">City</label>\n                                <input type=\"text\" placeholder=\"Enter your city\">\n                                <label for=\"pwd\">Date </label>\n                                <select class=\"form-control date\" name=\"date\" form=\"form-inline\">\n                                    <option value=\"\" selected=\"\" disabled=\"\" style=\"display:none;\">Departure date</option>\n                                    <option value=\"2020-04-01\">April 2020</option>\n                                    <option value=\"2020-05-01\">May 2020</option>\n                                    <option value=\"2020-06-01\">June 2020</option>\n                                    <option value=\"2020-07-01\">July 2020</option>\n                                    <option value=\"2020-08-01\">August 2020</option>\n                                    <option value=\"2020-09-01\">September 2020</option>\n                                    <option value=\"2020-10-01\">October 2020</option>\n                                    <option value=\"2020-11-01\">November 2020</option>\n                                    <option value=\"2020-12-01\">December 2020</option>\n                                    <option value=\"2021-01-01\">January 2021</option>\n                                    <option value=\"2021-02-01\">February 2021</option>\n                                    <option value=\"2021-03-01\">March 2021</option>\n                                    <option value=\"2021-04-01\">April 2021</option>\n                                    <option value=\"2021-05-01\">May 2021</option>\n                                    <option value=\"2021-06-01\">June 2021</option>\n                                    <option value=\"2021-07-01\">July 2021</option>\n                                    <option value=\"2021-08-01\">August 2021</option>\n                                    <option value=\"2021-09-01\">September 2021</option>\n                                    <option value=\"2021-10-01\">October 2021</option>\n                                    <option value=\"2021-11-01\">November 2021</option>\n                                    <option value=\"2021-12-01\">December 2021</option>\n                                    <option value=\"2022-01-01\">January 2022</option>\n                                </select>\n                                <button type=\"submit\">Start finding my leader</button>\n                              </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"hotels\">\n    <div class=\"container-fluid\">\n        <div class=\"title\">\n            <div class=\"head\">\n                <h1>Popular Leaders</h1>\n            </div>\n            <div class=\"desc\">\n                <p>You can find some of our popular leaders down here</p>\n            </div>\n        </div>\n        <div class=\"list\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"header\" *ngIf=\"showOthers\">\n                <h1>Other popular leaders</h1>\n            </div>\n            <div class=\"row\" *ngIf=\"showOthers\">\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/leaders', 'leadername']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>leader name</h4>\n                        <p>leader address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"more-hotels\">\n                    <button (click)=\"showOther()\">{{lessMore}} Detail</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ::footer_part start::-->\n<footer class=\"footer_part\" *ngIf=\"showFooter\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"single_footer_part\">\n                    <h4>About Agency</h4>\n                    <p>The world has become so fast paced that people don’t want \n                    to stand by reading a page of information, they would much \n                    rather look at a presentation and understand the message. \n                    It has come to a point where images</p>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"single_footer_part\">\n                    <h4>Navigation Links</h4>\n                    <ul class=\"list-unstyled\">\n                        <li><a href=\"/\">Home</a></li>\n                        <li><a href=\"destinations\">Destinations</a></li>\n                        <li><a href=\"triptypes\">Trip Type</a></li>\n                        <li><a href=\"about-us\">About us</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"single_footer_part\">\n                    <h4>Newsletter</h4>\n                    <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days\n                        open\n                    </p>\n                    <div id=\"mc_embed_signup\">\n                        <form target=\"_blank\"\n                            action=\"\" method=\"get\" class=\"subscribe_form relative mail_part\">\n                            <input type=\"email\" name=\"email\" id=\"newsletter-form-email\" placeholder=\"Email Address\"\n                                class=\"placeholder hide-on-focus\" onfocus=\"this.placeholder = ''\"\n                                onblur=\"this.placeholder = ' Email Address '\">\n                            <button type=\"submit\" name=\"submit\" id=\"newsletter-submit\"\n                                class=\"email_icon newsletter-submit button-contactForm\" style=\"background-color: rgb(20, 207, 20);height:40px;\"><i class=\"fa fa-paper-plane-o\"></i></button>\n                            <div class=\"mt-10 info\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"single_footer_part\">\n                    <h4>Instafeed</h4>\n                    <div class=\"footer_img\">\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_1.png\" alt=\"\"></a>\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_2.png\" alt=\"\"></a>\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_3.png\" alt=\"\"></a>\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_4.png\" alt=\"\"></a>\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_5.png\" alt=\"\"></a>\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_6.png\" alt=\"\"></a>\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_7.png\" alt=\"\"></a>\n                        <a href=\"#\"><img src=\"../../assets/img/footer_img/footer_8.png\" alt=\"\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-lg-8\">\n                <div class=\"copyright_text\">\n                    <P>Copyright &copy;</P>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"footer_icon social_icon\">\n                    <ul class=\"list-unstyled\">\n                        <li><a href=\"\"><i class=\"fab fa-instagram\" style=\"font-size:36px\"></i></a></li>\n                        <li><a href=\"#\" class=\"single_social_icon\"><i class=\"fab fa-facebook-f\" style=\"font-size:36px\"></i></a></li>\n                        <li><a href=\"#\" class=\"single_social_icon\"><i class=\"fab fa-twitter\" style=\"font-size:36px\"></i></a></li>\n                        <li><a href=\"#\" class=\"single_social_icon\"><i class=\"fab fa-linkedin\" style=\"font-size:36px\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <img src=\"../../assets/img/overlay_2.png\" alt=\"#\" class=\"footer_overlay\">\n</footer>\n<!--::footer_part end:: -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navigation/navigation.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navigation/navigation.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\" *ngIf=\"showNav\">\n\n  <!-- start first naviagtion  -->\n  <div class=\"container-fluid\">\n    <div class=\"header-head\">\n      <div class=\"header-head-left\">\n\n          <a href=\"/\" class=\"header-head-logo\">\n            <span class=\"logo-container\">Come<span class=\"On\">On</span>Iran</span>\n          </a>\n  \n          <a href=\"destinations\" class=\"header-head-link\" (mouseenter)=\"mouseEnter('destination')\">\n            Destinations\n            <i class=\"fa fa-angle-downfa fa-angle-down\"></i>\n          </a>\n\n          <a href=\"trip-types\" class=\"header-head-link\" (mouseenter)=\"mouseEnter('triptypes')\">\n            Trip Type\n            <i class=\"fa fa-angle-downfa fa-angle-down\"></i>\n          </a>\n\n          <a href=\"about-us\" class=\"header-head-link\">\n            About Us\n          </a>\n\n          <a href=\"/\" onclick=\"return false\" class=\"header-head-link\" id=\"collapse\" (click)=\"collapseClick('collapse')\">\n            <i class=\"fa fa-reorder\"></i>\n          </a>\n\n          <a href=\"login\" class=\"header-head-link\" id=\"login\" *ngIf=\"showLogin\">\n            <i class=\"fa fa-user\" style=\"font-size:18px;margin-right:10px;\"></i>\n            Sign in to my Account\n          </a>\n\n          <a href=\"/\" class=\"header-head-link\" id=\"logged\" *ngIf=\"showLogged\">\n            <i class=\"fa fa-user\" style=\"font-size:18px;margin-right:10px;\"></i>\n            <span *ngIf=\"!showLoggedOptions\" (mouseenter)=\"mouseEnter('logged')\">\n              <a href=\"/\" onclick=\"return false;\" style=\"color: black;\">admin</a>\n            </span>\n            <span *ngIf=\"showLoggedOptions\"  (mouseleave)=\"mouseLeave('logged')\">\n              <a href=\"http://192.168.43.116:8585/dashboard/\" style=\"color: black;padding-right: 5px;\">Panel</a>\n              | \n              <a style=\"color: black;padding-left: 5px;\" (click)=\"clearCookie()\">Log Out</a>\n            </span>\n          </a>\n\n      </div>\n    </div>\n  </div>\n  <!-- end first navigation  -->\n\n  <!-- start navigation  -->\n  <div class=\"header-head-collapse\" *ngIf=\"showCollapse\">\n    <ul>\n      <li class=\"destination-collapse\" *ngIf=\"!showTripTypesCollapse && showCollapse && !showAdmin\">\n        <a href=\"/\" onclick=\"return false\" (click)=\"collapseClick('destination')\" >\n          <i class=\"fa fa-angle-left\" style=\"float: none;padding-right: 10px;\" *ngIf=\"showDestinationsCollapse\"></i>\n          Destinations\n          <i class=\"fa fa-close\" (click)=\"collapseClick('close')\" *ngIf=\"showDestinationsCollapse\"></i>\n          <i class=\"fa fa-angle-right\" *ngIf=\"!showDestinationsCollapse && !showTripTypesCollapse\"></i>\n        </a>\n      </li>\n      <li class=\"triptype-collapse\" *ngIf=\" !showDestinationsCollapse && showCollapse && TripTypeChild && !showAdmin\">\n        <a href=\"/\" onclick=\"return false\" (click)=\"collapseClick('triptypes')\">\n          <i class=\"fa fa-angle-left\"  style=\"float: none;padding-right: 10px;\" *ngIf=\"showTripTypesCollapse\"></i>\n          Trip Types\n          <i class=\"fa fa-close\" (click)=\"collapseClick('close')\" *ngIf=\"showTripTypesCollapse\"></i>\n          <i class=\"fa fa-angle-right\" *ngIf=\"!showDestinationsCollapse && !showTripTypesCollapse\"></i>\n        </a>\n      </li>\n      <li class=\"about-us-collapse\" *ngIf=\"!showDestinationsCollapse && !showTripTypesCollapse && !showAdmin\">\n        <a href=\"about-us\">About Us</a>\n      </li>\n      <li class=\"login-collapse\" *ngIf=\"!showDestinationsCollapse && !showTripTypesCollapse && showLogin\">\n        <a href=\"login\">\n          Sign in to my Account\n        </a>\n      </li>\n      <li class=\"login-collapse\" *ngIf=\"!showDestinationsCollapse && !showTripTypesCollapse && showLogged\">\n        <a href=\"/\" onclick=\"return false\" (click)=\"collapseClick('logged')\">\n          admin\n        </a>\n      </li>\n    </ul>\n  </div>\n  <!-- end collapse navigation  -->\n\n  <!-- start content container  -->\n  <div class=\"header-view-container\">\n\n    <!-- start destinations content  -->\n    <div class=\"destination-content\" *ngIf=\"showDestinations\" (mouseleave)=\"mouseLeave('destination')\">\n      <div class=\"row\">\n        <div class=\"cities\">\n          <!-- <ul class=\"cities-name\">\n            <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Iran')\">All</a></li>\n            <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Tehran')\">Tehran</a></li>\n            <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Yazd')\">Yazd</a></li>\n            <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Esfahan')\">Esfahan</a></li>\n          </ul> -->\n          <div class=\"best-cities\">\n            <h4>Top destinations of the moment in iran</h4>\n            <div class=\"row best-cities-pic\">\n              <span *ngFor=\"let item of cityData\">\n                <a [routerLink]=\"['/destinations', item.city__name]\">\n                  <img src =\"http://192.168.43.116:8585/media/{{item.city__image}}\" alt=\"\">\n                  <h6>{{item.city__name}}</h6>\n                </a>\n              </span>\n            </div>\n          </div>\n          <br>\n          <a href=\"destinations\">SEE ALL TRAVEL DESTINATIONS ></a>\n        </div>\n      </div>\n    </div>\n    <!-- end destinations content  -->\n\n    <!-- start trip types content  -->\n    <div class=\"triptype-content\" *ngIf=\"showTripTypes\" (mouseleave)=\"mouseLeave('triptypes')\">\n      <div class=\"row\">\n        <div class=\"trip-types-head  col-lg-6\">\n          <h4>Browse our tour ideas by category</h4>\n        </div>\n        <div class=\"trip-types-head-button col-lg-6\">\n          <a href=\"trip-types\"><input type=\"submit\" value=\"See all tour ideas\"></a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"triptype-item col-lg-6\">\n          <img src=\"../../assets/city.jpg\" alt=\"\">\n          <span>\n            <table>\n              <tr>\n                <th colspan=\"3\">Travel Style</th>\n              </tr>\n              <tr>\n                <td><a [routerLink]=\"['/trip-types', 'Couples']\">Couples</a></td>\n                <td><a href=\"\">Smith</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">Eve</a></td>\n                <td><a href=\"\">Jackson</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">John</a></td>\n                <td><a href=\"\">Doe</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">John</a></td>\n                <td><a href=\"\">Doe</a></td>\n              </tr>\n            </table>\n          </span>\n        </div>\n        <div class=\"triptype-item col-lg-6\">\n          <img src=\"../../assets/city.jpg\" alt=\"\">\n          <span>\n            <table>\n              <tr>\n                <th colspan=\"3\">Interests and Activities</th>\n              </tr>\n              <tr>\n                <td><a href=\"\">Jill</a></td>\n                <td><a href=\"\">Smith</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">Eve</a></td>\n                <td><a href=\"\">Jackson</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">John</a></td>\n                <td><a href=\"\">Doe</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">John</a></td>\n                <td><a href=\"\">Doe</a></td>\n              </tr>\n            </table>\n          </span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"triptype-item col-lg-6\">\n          <img src=\"../../assets/city.jpg\" height=\"100\" width=\"100\" alt=\"\">\n          <span>\n            <table>\n              <tr>\n                <th colspan=\"3\">Tour Ideas by Month</th>\n              </tr>\n              <tr>\n                <td><a href=\"\">January</a></td>\n                <td><a href=\"\">February</a></td>\n                <td><a href=\"\">March</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">April</a></td>\n                <td><a href=\"\">May</a></td>\n                <td><a href=\"\">June</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">July</a></td>\n                <td><a href=\"\">August</a></td>\n                <td><a href=\"\">September</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">October</a></td>\n                <td><a href=\"\">November</a></td>\n                <td><a href=\"\">December</a></td>\n              </tr>\n            </table>\n          </span>\n        </div>\n        <div class=\"triptype-item col-lg-6\">\n          <img src=\"../../assets/city.jpg\" height=\"100\" width=\"100\" alt=\"\">\n          <span>\n            <table>\n              <tr>\n                <th colspan=\"3\">Tour Ideas by Month</th>\n              </tr>\n              <tr>\n                <td><a href=\"\">Jill</a></td>\n                <td><a href=\"\">Smith</a></td>\n                <td><a href=\"\">Smith</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">Eve</a></td>\n                <td><a href=\"\">Jackson</a></td>\n                <td><a href=\"\">Smith</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">John</a></td>\n                <td><a href=\"\">Doe</a></td>\n                <td><a href=\"\">Smith</a></td>\n              </tr>\n              <tr>\n                <td><a href=\"\">John</a></td>\n                <td><a href=\"\">Doe</a></td>\n                <td><a href=\"\">Smith</a></td>\n              </tr>\n            </table>\n          </span>\n        </div>\n      </div>\n    </div>\n    <!-- end trip types content  -->\n\n    <!-- start collapse destinations content  -->\n      <div class=\"destinations-content-collapse\" *ngIf=\"showDestinationsCollapse && showCollapse\">\n        <div class=\"row\">\n          <div class=\"cities\">\n            <!-- <ul class=\"cities-name\">\n              <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Iran')\">All</a></li>\n              <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Tehran')\">Tehran</a></li>\n              <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Yazd')\">Yazd</a></li>\n              <li><a href=\"/\" onclick=\"return false;\" (click)=\"cityClick('Esfahan')\">Esfahan</a></li>\n            </ul> -->\n            <div class=\"best-cities\">\n              <h4>Top destinations of the moment in iran</h4>\n              <div class=\"row best-cities-pic\">\n                <span><img src=\"../../assets/city.jpg\" alt=\"\"></span>\n                <span><img src=\"../../assets/city.jpg\" alt=\"\"></span>\n                <span><img src=\"../../assets/city.jpg\" alt=\"\"></span>\n                <span><img src=\"../../assets/city.jpg\" alt=\"\"></span>\n                <span><img src=\"../../assets/city.jpg\" alt=\"\"></span>\n                <span><img src=\"../../assets/city.jpg\" alt=\"\"></span>\n              </div>\n            </div>\n            <br>\n            <a href=\"destinations\">SEE ALL TRAVEL DESTINATIONS ></a>\n          </div>\n        </div>\n      </div>\n    <!-- end collapse destinations content  -->\n\n    <!-- start collapse trip types content  -->\n    <div class=\"triptype-content-collapse\" *ngIf=\"showTripTypesCollapse && showCollapse\">\n      <ul>\n        <li *ngIf=\"!showTripTypesSeacond && !showTripTypesThird && !showTripTypesFourth\">\n          <a href=\"/\" onclick=\"return false\" (click)=\"tripTypesClick('first')\">\n            Travel Style\n            <i class=\"fa fa-angle-left\" *ngIf=\"showTripTypesFirst\"></i>\n            <i class=\"fa fa-angle-right\" *ngIf=\"!showTripTypesFirst\"></i>\n          </a>\n        </li>\n        <li *ngIf=\"!showTripTypesFirst && !showTripTypesThird && !showTripTypesFourth\">\n          <a href=\"/\" onclick=\"return false\" (click)=\"tripTypesClick('seacond')\">\n            Interests and Activities\n            <i class=\"fa fa-angle-left\"  *ngIf=\"showTripTypesSeacond\"></i>\n            <i class=\"fa fa-angle-right\" *ngIf=\"!showTripTypesSeacond\"></i>\n          </a>\n        </li>\n        <li *ngIf=\"! showTripTypesFirst && !showTripTypesSeacond && !showTripTypesFourth\">\n          <a href=\"/\" onclick=\"return false\" (click)=\"tripTypesClick('third')\">\n            Tour Ideas by Month\n            <i class=\"fa fa-angle-left\" *ngIf=\"showTripTypesThird\"></i>\n            <i class=\"fa fa-angle-right\" *ngIf=\"!showTripTypesThird\"></i>\n          </a>\n        </li>\n        <li *ngIf=\"!showTripTypesFirst && !showTripTypesSeacond && !showTripTypesThird\">\n          <a href=\"/\" onclick=\"return false\" (click)=\"tripTypesClick('fourth')\">\n            Tour Ideas by Month\n            <i class=\"fa fa-angle-left\" *ngIf=\"showTripTypesFourth\"></i>\n            <i class=\"fa fa-angle-right\" *ngIf=\"!showTripTypesFourth\"></i>\n          </a>\n        </li>\n      </ul>\n      <a href=\"trip-types\" *ngIf=\"!showTripTypesFirst && !showTripTypesSeacond && !showTripTypesThird && !showTripTypesFourth\"><input type=\"submit\" value=\"See all tour ideas\"></a>\n    </div>\n    <!-- end collapse trip types content  -->\n\n    <!-- start collapse trip types collapse content  -->\n      <div class=\"triptype-content-collapse-content\" *ngIf=\"showTripTypesCollapse && showCollapse\">\n        <div class=\"showTripTypesFirst\">\n          <ul *ngIf=\"showTripTypesFirst\">\n            <li><a href=\"\">Couples</a></li>\n            <li><a href=\"\">Sport & Adventure</a></li>\n            <li><a href=\"\">Families</a></li>\n            <li><a href=\"\">Classic</a></li>\n            <li><a href=\"\">Friends & Private Groups</a></li>\n            <li><a href=\"\">Luxury</a></li>\n            <li><a href=\"\">Solo Travelers</a></li>\n            <li><a href=\"\">Off The Beaten Track</a></li>\n          </ul>\n        </div>\n        <div class=\"showTripTypesSeacond\">\n          <ul *ngIf=\"showTripTypesSeacond\">\n            <li><a href=\"\">Couples</a></li>\n            <li><a href=\"\">Sport & Adventure</a></li>\n            <li><a href=\"\">Families</a></li>\n            <li><a href=\"\">Classic</a></li>\n            <li><a href=\"\">Friends & Private Groups</a></li>\n            <li><a href=\"\">Luxury</a></li>\n            <li><a href=\"\">Solo Travelers</a></li>\n            <li><a href=\"\">Off The Beaten Track</a></li>\n          </ul>\n        </div>\n        <div class=\"showTripTypesThird\">\n          <ul *ngIf=\"showTripTypesThird\">\n            <li><a href=\"\">Couples</a></li>\n            <li><a href=\"\">Sport & Adventure</a></li>\n            <li><a href=\"\">Families</a></li>\n            <li><a href=\"\">Classic</a></li>\n            <li><a href=\"\">Friends & Private Groups</a></li>\n            <li><a href=\"\">Luxury</a></li>\n            <li><a href=\"\">Solo Travelers</a></li>\n            <li><a href=\"\">Off The Beaten Track</a></li>\n          </ul>\n        </div>\n        <div class=\"showTripTypesFourth\">\n          <ul *ngIf=\"showTripTypesFourth\">\n            <li><a href=\"\">Couples</a></li>\n            <li><a href=\"\">Sport & Adventure</a></li>\n            <li><a href=\"\">Families</a></li>\n            <li><a href=\"\">Classic</a></li>\n            <li><a href=\"\">Friends & Private Groups</a></li>\n            <li><a href=\"\">Luxury</a></li>\n            <li><a href=\"\">Solo Travelers</a></li>\n            <li><a href=\"\">Off The Beaten Track</a></li>\n          </ul>\n        </div>\n      </div>\n    <!-- end collapse trip types collapse content  -->\n\n      <!-- start collapse trip types content  -->\n    <div class=\"triptype-content-collapse\" *ngIf=\"showAdmin\">\n      <ul>\n        <li>\n          <a (click)=\"clearCookie()\">\n            Log out\n          </a>\n        </li>\n        <li>\n          <a href=\"http://192.168.43.116:8585/dashboard/\">\n            Panel\n          </a>\n        </li>\n      </ul>\n    </div>\n    <!-- end collapse trip types content  -->\n\n  </div>\n  <!-- end content container  -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tours/tours-detail/tours-detail.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tours/tours-detail/tours-detail.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToursToursDetailToursDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>tours-detail works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tours/tours/tours.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tours/tours/tours.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToursToursToursComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"filter\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <div class=\"row hotel-box\">\n                    <h6>FIND TOURS...</h6>\n                    <div class=\"col-lg col-sm hotel-content\">\n                        <h4>Find your favorite tours</h4>\n                        <p>Either find a tour below, or send a general inquiry by clicking 'Start finding my tour.'</p>\n                        <div class=\"design-trip-form\">\n                            <form class=\"form-inline\" action=\"\">\n                                <label for=\"email\">City</label>\n                                <input type=\"text\" placeholder=\"Enter your city\">\n                                <label for=\"pwd\">Date </label>\n                                <select class=\"form-control date\" name=\"date\" form=\"form-inline\">\n                                    <option value=\"\" selected=\"\" disabled=\"\" style=\"display:none;\">Departure date</option>\n                                    <option value=\"2020-04-01\">April 2020</option>\n                                    <option value=\"2020-05-01\">May 2020</option>\n                                    <option value=\"2020-06-01\">June 2020</option>\n                                    <option value=\"2020-07-01\">July 2020</option>\n                                    <option value=\"2020-08-01\">August 2020</option>\n                                    <option value=\"2020-09-01\">September 2020</option>\n                                    <option value=\"2020-10-01\">October 2020</option>\n                                    <option value=\"2020-11-01\">November 2020</option>\n                                    <option value=\"2020-12-01\">December 2020</option>\n                                    <option value=\"2021-01-01\">January 2021</option>\n                                    <option value=\"2021-02-01\">February 2021</option>\n                                    <option value=\"2021-03-01\">March 2021</option>\n                                    <option value=\"2021-04-01\">April 2021</option>\n                                    <option value=\"2021-05-01\">May 2021</option>\n                                    <option value=\"2021-06-01\">June 2021</option>\n                                    <option value=\"2021-07-01\">July 2021</option>\n                                    <option value=\"2021-08-01\">August 2021</option>\n                                    <option value=\"2021-09-01\">September 2021</option>\n                                    <option value=\"2021-10-01\">October 2021</option>\n                                    <option value=\"2021-11-01\">November 2021</option>\n                                    <option value=\"2021-12-01\">December 2021</option>\n                                    <option value=\"2022-01-01\">January 2022</option>\n                                </select>\n                                <button type=\"submit\">Start finding my tour</button>\n                              </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"hotels\">\n    <div class=\"container-fluid\">\n        <div class=\"title\">\n            <div class=\"head\">\n                <h1>Popular Tours</h1>\n            </div>\n            <div class=\"desc\">\n                <p>You can find some of our popular tours down here</p>\n            </div>\n        </div>\n        <div class=\"list\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"header\" *ngIf=\"showOthers\">\n                <h1>Other popular tours</h1>\n            </div>\n            <div class=\"row\" *ngIf=\"showOthers\">\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-12 content\">\n                    <div class=\"image\">\n                        <a [routerLink] = \"['/tours', 'tourName']\">\n                            <img src=\"../../assets/city.jpg\" alt=\"\">\n                        </a>\n                        <div class=\"price\">\n                            <a href=\"/\" onclick=\"return false\">$500</a>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        <h4>tour name</h4>\n                        <p>tour address</p>\n                        <span>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"fas fa-star\"></i>\n                            <i class=\"far fa-star\"></i>\n                        </span>\n                        <span class=\"date\">\n                            <i class=\"far fa-clock\"></i>\n                            <a href=\"/\" onclick=\"return false\" style=\"margin-left:3px;color:black\">5 Days</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"more-hotels\">\n                    <button (click)=\"showOther()\">{{lessMore}} Detail</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-types/trip-type-detail/trip-type-detail.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-types/trip-type-detail/trip-type-detail.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTripTypesTripTypeDetailTripTypeDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"top-image\">\n    <div class=\"header\">\n        <h1>Couple vacation</h1>\n    </div>\n</section>\n\n<section class=\"type-box\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 leaders\">\n                <h3>Couple trip leader</h3>\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n                <div class=\"image\">\n                    <a [routerLink] = \"['/leaders', 'leadername']\">\n                        <img src=\"../../assets/city.jpg\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"desc\">\n                    <h4>leader name</h4>\n                    <p>leader address</p>\n                    <span>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"fas fa-star\"></i>\n                        <i class=\"far fa-star\"></i>\n                    </span>\n                </div>\n\n                <div class=\"other-leader\">\n                    <a href=\"\">Other Leaders</a>\n                </div>\n            </div>\n            <div class=\"col-lg-8 items\">\n                <div class=\"row tours\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"header\">\n                            <h3>Best tours for couple trips</h3>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"image\">\n                            <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                <img src=\"../../assets/city.jpg\" alt=\"\">\n                            </a>\n                            <div class=\"price\">\n                                <a href=\"\">$500</a>\n                            </div>\n                        </div>\n                        <div class=\"desc\">\n                            <h4>hotel name</h4>\n                            <p>hotel address</p>\n                            <span>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"far fa-star\"></i>\n                            </span>\n                            <span class=\"days\">\n                                <i class=\"far fa-clock\"></i>\n                                <a href=\"\">5 Days</a>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"image\">\n                            <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                <img src=\"../../assets/city.jpg\" alt=\"\">\n                            </a>\n                            <div class=\"price\">\n                                <a href=\"\">$500</a>\n                            </div>\n                        </div>\n                        <div class=\"desc\">\n                            <h4>hotel name</h4>\n                            <p>hotel address</p>\n                            <span>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"far fa-star\"></i>\n                            </span>\n                            <span class=\"days\">\n                                <i class=\"far fa-clock\"></i>\n                                <a href=\"\">5 Days</a>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"image\">\n                            <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                <img src=\"../../assets/city.jpg\" alt=\"\">\n                            </a>\n                            <div class=\"price\">\n                                <a href=\"\">$500</a>\n                            </div>\n                        </div>\n                        <div class=\"desc\">\n                            <h4>hotel name</h4>\n                            <p>hotel address</p>\n                            <span>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"far fa-star\"></i>\n                            </span>\n                            <span class=\"days\">\n                                <i class=\"far fa-clock\"></i>\n                                <a href=\"\">5 Days</a>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row hotels\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"header\">\n                            <h3>Best hotels for couple trips</h3>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"image\">\n                            <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                <img src=\"../../assets/city.jpg\" alt=\"\">\n                            </a>\n                            <div class=\"price\">\n                                <a href=\"\">$500</a>\n                            </div>\n                        </div>\n                        <div class=\"desc\">\n                            <h4>hotel name</h4>\n                            <p>hotel address</p>\n                            <span>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"far fa-star\"></i>\n                            </span>\n                            <span class=\"days\">\n                                <i class=\"far fa-clock\"></i>\n                                <a href=\"\">5 Days</a>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"image\">\n                            <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                <img src=\"../../assets/city.jpg\" alt=\"\">\n                            </a>\n                            <div class=\"price\">\n                                <a href=\"\">$500</a>\n                            </div>\n                        </div>\n                        <div class=\"desc\">\n                            <h4>hotel name</h4>\n                            <p>hotel address</p>\n                            <span>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"far fa-star\"></i>\n                            </span>\n                            <span class=\"days\">\n                                <i class=\"far fa-clock\"></i>\n                                <a href=\"\">5 Days</a>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"image\">\n                            <a [routerLink] = \"['/hotels', 'hotelname']\">\n                                <img src=\"../../assets/city.jpg\" alt=\"\">\n                            </a>\n                            <div class=\"price\">\n                                <a href=\"\">$500</a>\n                            </div>\n                        </div>\n                        <div class=\"desc\">\n                            <h4>hotel name</h4>\n                            <p>hotel address</p>\n                            <span>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"fas fa-star\"></i>\n                                <i class=\"far fa-star\"></i>\n                            </span>\n                            <span class=\"days\">\n                                <i class=\"far fa-clock\"></i>\n                                <a href=\"\">5 Days</a>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-types/trip-types/trip-types.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-types/trip-types/trip-types.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTripTypesTripTypesTripTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"chose-box-container\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <div class=\"row chose-box\">\n                    <h2>Pick a destination with our trip finder!</h2>\n                    <div class=\"date-box col-lg-6\">\n                        <h4>I WANT TO SET OFF IN...</h4>\n                        <div class=\"row month-box\">\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Jan</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Feb</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Mar</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Apr</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">May</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Jun</a></div>\n                        </div>\n                        <div class=\"row month-box\">\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Jul</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Aug</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Sept</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Oct</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Nov</a></div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\"><a href=\"\">Dec</a></div>\n                        </div>\n                    </div>\n                    <div class=\"type-box col-lg-6\">\n                        <h4>I WANT MY TRIP TO INCLUDE...</h4>\n                        <div class=\"row culture-box\">\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\">\n                                <a href=\"\">\n                                    <i class=\"fas fa-umbrella-beach\"></i>\n                                    <p>Relaxation</p>\n                                </a>\n                            </div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\">\n                                <a href=\"\">\n                                    <i class=\"fa fa-bicycle\"></i>\n                                    <p>Sports</p>\n                                </a>\n                            </div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\">\n                                <a href=\"\">\n                                    <i class=\"fas fa-mosque\"></i>\n                                    <p>Historical</p>\n                                </a>\n                            </div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\">\n                                <a href=\"\">\n                                    <i class=\"fas fa-star-and-crescent\"></i>\n                                    <p>Culture</p>\n                                </a>\n                            </div>\n                            <div class=\"col-lg-2 col-md-2 col-sm-2\">\n                                <a href=\"\">\n                                    <i class=\"fas fa-hamburger\"></i>\n                                    <p>Cuisine</p>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> \n    </div>\n</section>\n\n<section>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg popular-trip\">\n                <h3>Our most popular trip types</h3>\n                <div class=\"row popular-trip-box\">\n                    <div class=\"col-lg-3 col-md-6 popular-trip-item\">\n                        <a [routerLink] = \"['/trip-types', 'trip-type']\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6 popular-trip-item\">\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6  popular-trip-item\">\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6  popular-trip-item\">\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div> \n    </div>    \n</section>\n\n<section>\n    <div class=\"container-fluid\">\n        <!-- first desc help  -->\n        <div class=\"row\">\n            <div class=\"describtione\">\n                <div class=\"desc-content-box\">\n                    <h3>At Evaneos we believe that travel is better when it brings people <br/> together.</h3>\n                    <p>\n                        There's not just one way to travel. There just as many different ways to explore a new place as there are travelers in the world.<br>\n    \n                        We've made this inspirational page to help you more clearly imagine and then create your ideal trip, making it easier to choose the perfect vacation that fits your needs.<br/>\n                        \n                        Would you rather travel solo and off the beaten path, or do you want a guide to take you through some of the most famous sites in the world? Can't imagine going more than a few hours cut off from the world, or are you dreaming of wide open spaces without another person in sight?<br/>\n                        \n                        Whatever you prefer, you can find it and more in the dozens of travel ideas for every continent prepared by our local agents. Take a look and find out which one inspires you!<br/>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container-fluid\">\n            <!-- our other trip type  -->\n        <div class=\"row\">\n            <div class=\"col-lg other-popular-trip\">\n                <h3>Our other trip types</h3>\n                <div class=\"row other-popular-trip-box\">\n                    <div class=\"col-lg-3 col-md-6 other-popular-trip-item\">\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"other-desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6 other-popular-trip-item\">\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"other-desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6  other-popular-trip-item\">\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"other-desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6  other-popular-trip-item\">\n                        <a href=\"\">\n                            <span>\n                                <img src=\"../../assets/city.jpg\">\n                                <div class=\"other-desc\">\n                                    <p>Fucking fuck</p>\n                                </div>\n                            </span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container-fluid\">\n        <!-- last desc help  -->\n        <div class=\"row\">\n            <div class=\"choose-help\">\n                <h3>Too hard to choose between all these inspiring ideas?</h3>\n                <p>\n                    No problem, the local agents selected by Evaneos know how to create a customized trip based on your needs. Every one of these ideas can be completely personalized and changed to fit you. Evaneos gives you the freedom to travel like never before</p>\n\n                    <h6>And what about a Safari?</h6>\n\n                    <p>As a kid your room was filled with stuffed girafes, elephants, and tigers. You saw The Lion King at least 10 times. You watch all the animal documentaries you can find and you already know what the Big Five* is. If that's the case, our \"Untamed World\" tours were made for you. Evaneos.com has carefully chosen exceptional trips to Africa, from Tanzania to Kenya, Namibia to Botswana, and from South Africa all the way north to Burkina Faso. Why not Benin or Cameroun too?</p>\n\n                    <p>If it's less classic safari style adventures that you seek, why not try with a different continent? You can find the same incredible \"Untamed World\" experiences in Ecuador, Costa Rica, Canada, New Zealand, or even Nepal...</p>\n\n                    <h6>Thanks, but I would prefer to make my own way without a guide or a drive... I can do it on my own!</h6>\n\n                    <p>Do just to words 'organized traveling', 'guided tours', or 'group outings' give you a headache? You prefer to rent a car or camping van and make your own way, discovering new countrysides as you go along? Following the group is out of the question-for you, total independence guarantees a successful trip.<br/>\n\n                    We have selected the best trips to take in complete freedom, without any guides in the destination. On every continent, from Denmark to Indonesia, Brazil to the Usa. Whether you want off the beaten track or total luxury, traveling without a guide has never been more simple.<br/>\n\n                    And of course, like always with Evaneos.com all of our travel ideas can be further personalized to create the perfect trip just for you!<br/>\n\n                    *Big Five game animals usually refers to lions, elephants, buffaloes, leopards, and rhinos.</p>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/about-us/about-us.component.css":
  /*!*************************************************!*\
    !*** ./src/app/about-us/about-us.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutUsAboutUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-us/about-us.component.ts ***!
    \************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.component.css */
      "./src/app/about-us/about-us.component.css")).default]
    })], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _destinations_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./destinations/destinations/destinations.component */
    "./src/app/destinations/destinations/destinations.component.ts");
    /* harmony import */


    var _destinations_destination_detail_destination_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./destinations/destination-detail/destination-detail.component */
    "./src/app/destinations/destination-detail/destination-detail.component.ts");
    /* harmony import */


    var _trip_types_trip_types_trip_types_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./trip-types/trip-types/trip-types.component */
    "./src/app/trip-types/trip-types/trip-types.component.ts");
    /* harmony import */


    var _trip_types_trip_type_detail_trip_type_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./trip-types/trip-type-detail/trip-type-detail.component */
    "./src/app/trip-types/trip-type-detail/trip-type-detail.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _leaders_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./leaders/leaders/leaders.component */
    "./src/app/leaders/leaders/leaders.component.ts");
    /* harmony import */


    var _leaders_leaders_detail_leader_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./leaders/leaders-detail/leader-detail.component */
    "./src/app/leaders/leaders-detail/leader-detail.component.ts");
    /* harmony import */


    var _hotels_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hotels/hotels/hotels.component */
    "./src/app/hotels/hotels/hotels.component.ts");
    /* harmony import */


    var _hotels_hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./hotels/hotels-detail/hotels-detail.component */
    "./src/app/hotels/hotels-detail/hotels-detail.component.ts");
    /* harmony import */


    var _tours_tours_tours_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tours/tours/tours.component */
    "./src/app/tours/tours/tours.component.ts");
    /* harmony import */


    var _tours_tours_detail_tours_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./tours/tours-detail/tours-detail.component */
    "./src/app/tours/tours-detail/tours-detail.component.ts");

    var routes = [{
      path: '',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: 'destinations',
      component: _destinations_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_4__["DestinationsComponent"]
    }, {
      path: 'destinations/:cityName',
      component: _destinations_destination_detail_destination_detail_component__WEBPACK_IMPORTED_MODULE_5__["DestinationDetailComponent"]
    }, {
      path: 'trip-types',
      component: _trip_types_trip_types_trip_types_component__WEBPACK_IMPORTED_MODULE_6__["TripTypesComponent"]
    }, {
      path: 'trip-types/:trip-type',
      component: _trip_types_trip_type_detail_trip_type_detail_component__WEBPACK_IMPORTED_MODULE_7__["TripTypeDetailComponent"]
    }, {
      path: 'about-us',
      component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"]
    }, {
      path: 'leaders',
      component: _leaders_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_9__["LeadersComponent"]
    }, {
      path: 'leaders/:leaderName',
      component: _leaders_leaders_detail_leader_detail_component__WEBPACK_IMPORTED_MODULE_10__["LeaderDetailComponent"]
    }, {
      path: 'hotels',
      component: _hotels_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_11__["HotelsComponent"]
    }, {
      path: 'hotels/:hotelName',
      component: _hotels_hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_12__["HotelsDetailComponent"]
    }, {
      path: 'tours',
      component: _tours_tours_tours_component__WEBPACK_IMPORTED_MODULE_13__["ToursComponent"]
    }, {
      path: 'tours/:tourName',
      component: _tours_tours_detail_tours_detail_component__WEBPACK_IMPORTED_MODULE_14__["ToursDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'comoniran';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _modules_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/navigation/navigation.component */
    "./src/app/modules/navigation/navigation.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modules/footer/footer.component */
    "./src/app/modules/footer/footer.component.ts");
    /* harmony import */


    var _destinations_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./destinations/destinations/destinations.component */
    "./src/app/destinations/destinations/destinations.component.ts");
    /* harmony import */


    var _trip_types_trip_types_trip_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./trip-types/trip-types/trip-types.component */
    "./src/app/trip-types/trip-types/trip-types.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _leaders_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./leaders/leaders/leaders.component */
    "./src/app/leaders/leaders/leaders.component.ts");
    /* harmony import */


    var _hotels_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./hotels/hotels/hotels.component */
    "./src/app/hotels/hotels/hotels.component.ts");
    /* harmony import */


    var _tours_tours_tours_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tours/tours/tours.component */
    "./src/app/tours/tours/tours.component.ts");
    /* harmony import */


    var _hotels_hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./hotels/hotels-detail/hotels-detail.component */
    "./src/app/hotels/hotels-detail/hotels-detail.component.ts");
    /* harmony import */


    var _tours_tours_detail_tours_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./tours/tours-detail/tours-detail.component */
    "./src/app/tours/tours-detail/tours-detail.component.ts");
    /* harmony import */


    var _leaders_leaders_detail_leader_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./leaders/leaders-detail/leader-detail.component */
    "./src/app/leaders/leaders-detail/leader-detail.component.ts");
    /* harmony import */


    var _destinations_destination_detail_destination_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./destinations/destination-detail/destination-detail.component */
    "./src/app/destinations/destination-detail/destination-detail.component.ts");
    /* harmony import */


    var _trip_types_trip_type_detail_trip_type_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./trip-types/trip-type-detail/trip-type-detail.component */
    "./src/app/trip-types/trip-type-detail/trip-type-detail.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _modules_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"], _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _destinations_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_11__["DestinationsComponent"], _trip_types_trip_types_trip_types_component__WEBPACK_IMPORTED_MODULE_12__["TripTypesComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"], _leaders_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_14__["LeadersComponent"], _hotels_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_15__["HotelsComponent"], _tours_tours_tours_component__WEBPACK_IMPORTED_MODULE_16__["ToursComponent"], _hotels_hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_17__["HotelsDetailComponent"], _tours_tours_detail_tours_detail_component__WEBPACK_IMPORTED_MODULE_18__["ToursDetailComponent"], _leaders_leaders_detail_leader_detail_component__WEBPACK_IMPORTED_MODULE_19__["LeaderDetailComponent"], _destinations_destination_detail_destination_detail_component__WEBPACK_IMPORTED_MODULE_20__["DestinationDetailComponent"], _trip_types_trip_type_detail_trip_type_detail_component__WEBPACK_IMPORTED_MODULE_21__["TripTypeDetailComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/destinations/destination-detail/destination-detail.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/destinations/destination-detail/destination-detail.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDestinationsDestinationDetailDestinationDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-image {\n    position: relative;\n    background-image: url('back-ground.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 350px;\n}\n\n.header h1 {\n    color: white;\n    text-align: center;\n    padding-top: 10%;\n    font-weight: 600;\n    font-size: 50px;\n}\n\n.little-desc {\n    padding-top: 3%;\n}\n\n.little-desc p {\n    width: 80%;\n    color: black;\n    font-weight: 400;\n}\n\n.main-content {\n    margin-top: 3%;\n}\n\n.main-content .leader{\n    padding-top: 3%;\n}\n\n.main-content .leader h3 {\n    padding: 2% 0 5% 0;\n    font-weight: 600;\n}\n\n.main-content .leader .desc {\n    background-color: white;\n    margin-bottom: 5%;\n    padding: 5px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-bottom: 1px solid rgb(212, 212, 212);\n    border-left: 1px solid rgb(212, 212, 212);\n    border-right: 1px solid rgb(212, 212, 212);\n}\n\n.main-content .leader .other-leader {\n    background-color: #0297c9;\n    text-align: center;\n    padding: 5%;\n}\n\n.main-content .leader .other-leader a {\n    color: white;\n    font-weight: 600;\n}\n\n.hotel-tour {\n    padding-left: 5%;\n}\n\n.hotel-tour .hotel-head {\n    padding: 5% 2% 2% 2%;\n    width: 100%;\n}\n\n.hotel-tour .hotel-head h3 {\n    font-weight: 600;\n}\n\n.hotel-tour .hotel-head h3 a {\n    font-size: 13px;\n    float: right;\n}\n\n.hotel-tour .tour-head {\n    padding: 20% 2% 2% 2%;\n}\n\n.hotel-tour .tour-head h3 a {\n    font-size: 13px;\n    float: right;\n}\n\n.hotel-tour .image img {\n    position: relative;\n}\n\n.hotel-tour .image .price {\n    position: absolute;\n    top: 20px;\n    left: 30px;\n    background-color: rgb(253, 188, 8);\n    padding: 10px 30px 10px 30px;\n    border-radius: 30px;\n}\n\n.hotel-tour .image .price a {\n    color : white;\n    font-weight: 700;\n    font-size: 15px;\n}\n\n.hotel-tour .image:hover .price {\n    background-color: #0297c9;\n}\n\n.hotel-tour .desc {\n    background-color: white;\n    padding: 5px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-bottom: 1px solid rgb(212, 212, 212);\n    border-left: 1px solid rgb(212, 212, 212);\n    border-right: 1px solid rgb(212, 212, 212);\n}\n\n.hotel-tour .desc .days {\n    float: right;\n}\n\n.hotel-tour .desc .days a {\n    color: black;\n}\n\n.city-desc-map {\n    margin-top: 5%;\n}\n\n.time-head {\n    margin-top: 15%;\n}\n\n.city-desc-map .month {\n    padding: 20px 30px 0 30px;\n}\n\n.city-desc-map .month {\n    text-align: center;\n}\n\n.city-desc-map .month i {\n    font-size: 30px;\n}\n\n.map {\n    height: 400px;\n    width: 100%;\n    margin-bottom: 10%;\n    border: 1px solid black;\n  }\n\n.other-destinations {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.other-destinations .other-head {\n    padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9uLWRldGFpbC9kZXN0aW5hdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix3Q0FBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiwyQ0FBMkM7SUFDM0MseUNBQXlDO0lBQ3pDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9uLWRldGFpbC9kZXN0aW5hdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2stZ3JvdW5kLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM1MHB4O1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5saXR0bGUtZGVzYyB7XG4gICAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4ubGl0dGxlLWRlc2MgcCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5tYWluLWNvbnRlbnQgLmxlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi5tYWluLWNvbnRlbnQgLmxlYWRlciBoMyB7XG4gICAgcGFkZGluZzogMiUgMCA1JSAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluLWNvbnRlbnQgLmxlYWRlciAuZGVzYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xufVxuXG4ubWFpbi1jb250ZW50IC5sZWFkZXIgLm90aGVyLWxlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyOTdjOTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNSU7XG59XG5cbi5tYWluLWNvbnRlbnQgLmxlYWRlciAub3RoZXItbGVhZGVyIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaG90ZWwtdG91ciB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmhvdGVsLXRvdXIgLmhvdGVsLWhlYWQge1xuICAgIHBhZGRpbmc6IDUlIDIlIDIlIDIlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaG90ZWwtdG91ciAuaG90ZWwtaGVhZCBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdGVsLXRvdXIgLmhvdGVsLWhlYWQgaDMgYSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmhvdGVsLXRvdXIgLnRvdXItaGVhZCB7XG4gICAgcGFkZGluZzogMjAlIDIlIDIlIDIlO1xufVxuXG4uaG90ZWwtdG91ciAudG91ci1oZWFkIGgzIGEge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ob3RlbC10b3VyIC5pbWFnZSBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhvdGVsLXRvdXIgLmltYWdlIC5wcmljZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDE4OCwgOCk7XG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uaG90ZWwtdG91ciAuaW1hZ2UgLnByaWNlIGEge1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5ob3RlbC10b3VyIC5pbWFnZTpob3ZlciAucHJpY2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjk3Yzk7XG59XG5cbi5ob3RlbC10b3VyIC5kZXNjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XG59XG5cbi5ob3RlbC10b3VyIC5kZXNjIC5kYXlzIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ob3RlbC10b3VyIC5kZXNjIC5kYXlzIGEge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNpdHktZGVzYy1tYXAge1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4udGltZS1oZWFkIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5jaXR5LWRlc2MtbWFwIC5tb250aCB7XG4gICAgcGFkZGluZzogMjBweCAzMHB4IDAgMzBweDtcbn1cblxuLmNpdHktZGVzYy1tYXAgLm1vbnRoIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaXR5LWRlc2MtbWFwIC5tb250aCBpIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5tYXAge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG5cbi5vdGhlci1kZXN0aW5hdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ub3RoZXItZGVzdGluYXRpb25zIC5vdGhlci1oZWFkIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/destinations/destination-detail/destination-detail.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/destinations/destination-detail/destination-detail.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DestinationDetailComponent */

  /***/
  function srcAppDestinationsDestinationDetailDestinationDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationDetailComponent", function () {
      return DestinationDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_destinations_destinations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/destinations/destinations.service */
    "./src/app/service/destinations/destinations.service.ts");
    /* harmony import */


    var ol_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ol/Map */
    "./node_modules/ol/Map.js");
    /* harmony import */


    var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ol/layer/Tile */
    "./node_modules/ol/layer/Tile.js");
    /* harmony import */


    var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ol/source/OSM */
    "./node_modules/ol/source/OSM.js");
    /* harmony import */


    var ol_View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ol/View */
    "./node_modules/ol/View.js");

    var DestinationDetailComponent = /*#__PURE__*/function () {
      function DestinationDetailComponent(cityService) {
        var _this = this;

        _classCallCheck(this, DestinationDetailComponent);

        this.cityService = cityService;
        this.cityData = [];

        this.getCity = function () {
          _this.cityService.getCity().subscribe(function (data) {
            _this.cityData = Array.from(Object.keys(data['result']), function (k) {
              return data['result'][k];
            });

            for (var i = 0; i < _this.cityData.length; i++) {
              if (_this.cityData[i].name == _this.pageCity) {
                _this.cityName = _this.cityData[i].name;
                _this.cityImage = _this.cityData[i].image;
              }
            }
          });
        };
      }

      _createClass(DestinationDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initilizeMap();
          this.href = window.location.href;
          this.hrefPart = this.href.split('/');
          this.pageCity = this.hrefPart[4];
          this.getCity();
        }
      }, {
        key: "initilizeMap",
        value: function initilizeMap() {
          this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
            target: 'map',
            layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
              source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"]()
            })],
            view: new ol_View__WEBPACK_IMPORTED_MODULE_6__["default"]({
              center: [37.41, 8.82],
              zoom: 4
            })
          });
        }
      }]);

      return DestinationDetailComponent;
    }();

    DestinationDetailComponent.ctorParameters = function () {
      return [{
        type: src_app_service_destinations_destinations_service__WEBPACK_IMPORTED_MODULE_2__["DestinationsService"]
      }];
    };

    DestinationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-destination-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./destination-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/destinations/destination-detail/destination-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./destination-detail.component.css */
      "./src/app/destinations/destination-detail/destination-detail.component.css")).default]
    })], DestinationDetailComponent);
    /***/
  },

  /***/
  "./src/app/destinations/destinations/destinations.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/destinations/destinations/destinations.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDestinationsDestinationsDestinationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-search-box {\n    position: relative;\n    background-image: url('back-ground.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 400px;\n  }\n\n  .search-box-head {\n    text-align: center;\n    margin-top: 5%;\n  }\n\n  .search-box-head h4 {\n    font-size: 40px;\n    color: white;\n    font-weight: 800;\n  }\n\n  .search-form {\n    margin-left: 20%;\n    margin-top: 5%;\n    width: 80%;\n  }\n\n  .search-form input {\n    width: 60%;\n    height: 50px;\n  }\n\n  @media screen and (max-width:768px){\n    .search-form input {\n      width: 100%;\n    }\n  }\n\n  .search-form button {\n    height: 50px;\n    width: 15%;\n  }\n\n  @media screen and (max-width:768px) {\n    .search-form button {\n      width: 50%;\n      margin-left: 25%;\n      margin-top: 5%;\n    }\n  }\n\n  .city-container .city-image img {\n    width: 80%;\n    height: 300px;\n    margin-left: 10%;\n    margin-top: 5%;\n  }\n\n  .city-describe {\n    margin-left: 10%;\n    margin-bottom: 10%;\n    padding-bottom: 3%;\n    width: 80%;\n    background-color: white;\n  }\n\n  .city-describe h2 {\n    padding: 2%;\n  }\n\n  .city-describe p {\n    padding-left: 2%;\n  }\n\n  .city-name {\n    width: 80%;\n    margin-left: .75%;\n  }\n\n  .city-name a {\n    color: black;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix3Q0FBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnMvZGVzdGluYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXNlYXJjaC1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2stZ3JvdW5kLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3gtaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG5cbiAgLnNlYXJjaC1ib3gtaGVhZCBoNCB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG5cbiAgLnNlYXJjaC1mb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuc2VhcmNoLWZvcm0gaW5wdXQge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgLnNlYXJjaC1mb3JtIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtZm9ybSBidXR0b24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTUlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5zZWFyY2gtZm9ybSBidXR0b24ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG4gIH1cblxuICAuY2l0eS1jb250YWluZXIgLmNpdHktaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5jaXR5LWRlc2NyaWJlIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jaXR5LWRlc2NyaWJlIGgyIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxuXG4gIC5jaXR5LWRlc2NyaWJlIHAge1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gIH1cblxuICAuY2l0eS1uYW1lIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAuNzUlO1xuICB9XG5cbiAgLmNpdHktbmFtZSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/destinations/destinations/destinations.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/destinations/destinations/destinations.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DestinationsComponent */

  /***/
  function srcAppDestinationsDestinationsDestinationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationsComponent", function () {
      return DestinationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DestinationsComponent = /*#__PURE__*/function () {
      function DestinationsComponent() {
        _classCallCheck(this, DestinationsComponent);
      }

      _createClass(DestinationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DestinationsComponent;
    }();

    DestinationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-destinations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./destinations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/destinations/destinations/destinations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./destinations.component.css */
      "./src/app/destinations/destinations/destinations.component.css")).default]
    })], DestinationsComponent);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/home-page/home-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* banner part start  */\n.banner_part {\n    position: relative;\n    background-image: url('back-ground.jpg');\n    background-repeat: no-repeat;\n    background-size: 100% 70%;\n    height: 800px;\n    background-color: #ffcc00;\n  }\n@media (max-width: 991px) {\n    .banner_part {\n      height: 450px;\n      background-size: 100% 90%;\n    }\n  }\n.banner_part .banner_text {\n    width: 100%;\n    padding-top: 10%;\n  }\n@media screen and (max-width:576px) {\n    .banner_part .banner_text {\n      padding-top: 30%;\n    }\n  }\n.banner_part .banner_text .up-head {\n    width: 80%;\n    margin-left: 10%;\n    color: white;\n  }\n@media screen and (max-width:576px) {\n    .banner_part .banner_text .up-head {\n      width: 100%;\n      margin: 0;\n    }\n  }\n.banner_part .banner_text .up-head span {\n    margin-right: 10px;\n  }\n@media screen and (max-width:576px){\n    .banner_part .banner_text .up-head span {\n      margin: 0;\n    }\n  }\n.banner_part .banner_text .up-head i {\n    font-size: 7px;\n    margin-right: 5px;\n  }\n.banner_part .banner_text .up-head span:nth-child(even) i {\n    color: yellow;\n  }\n.banner_part .banner_text .up-head span:nth-child(odd) i {\n    color: blue;\n  }\n.banner_part .banner_text h5 {\n    font-size: 40px;\n    text-transform: uppercase;\n    font-weight: 800;\n    color: #fff;\n    margin-left: 10%;\n    margin-top: 3%;\n  }\n@media (max-width: 756px) {\n    .banner_part .banner_text h5 {\n      font-size: 30px;\n    }\n  }\n@media screen and (max-width:576px) {\n    .banner_part .banner_text h5 {\n      margin-left: 0;\n    }\n  }\n/* banner part end  */\n/*---------------------------------------------------------------------------------------------------------------*/\n/* search part start  */\n.search_your_country {\n    max-width: 100%;\n    margin: 0 auto;\n    background-color: rgb(250, 249, 248);\n    padding: 165px 0 100px;\n    position: relative;\n    margin-top: -254px;\n  }\n@media (max-width: 991px) {\n    .search_your_country {\n      padding: 50px 0;\n      margin-top: -70px;\n    }\n  }\n.search_your_country .container-fluid {\n    max-width: 80%;\n  }\n@media (max-width: 1125px) {\n    .search_your_country .container-fluid {\n      max-width: 100%;\n    }\n  }\n.search_your_country .search_form {\n    background-color: #0297c9;\n    padding: 20px 35px;\n    margin-bottom: 50px;\n    color: #fff;\n    position: absolute;\n    width: 100%;\n    top: -210px;\n  }\n.form-inline {  \n    display: -webkit-box;  \n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n.form-inline i {\n    font-size: 50px;\n    margin-right: 5%;\n    padding-bottom: 10px;\n  }\n@media screen and (max-width:1125px) {\n    .form-inline i {\n      display: none;\n    }\n  }\n.form-inline input {\n    padding: 15px;\n    width: 50%;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n@media screen and (max-width:1125px) {\n    .form-inline input {\n      width: 80%;\n    }\n  }\n@media screen and (max-width:801px) {\n    .form-inline input {\n      width: 100%;\n      border-radius: 5px;\n    }\n  }\n.form-inline input:focus {\n    border: 1px solid rgb(173, 173, 173);\n  }\n.form-inline .submit{\n    padding: 16px 20px;\n    background-color: rgb(255, 206, 67);\n    color: rgb(54, 54, 54);\n    border: none;\n    cursor: pointer;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n@media screen and (max-width:1125px){\n    .form-inline .submit {\n      width: 20%;\n    }\n  }\n@media screen and (max-width:801px) {\n    .form-inline .submit {\n      border-radius: 5px;\n      width: 100%;\n    }\n  }\n.form-inline .triptypes{\n    background-color: white;\n    color: rgb(54, 54, 54);\n    border: 1px solid rgb(255, 206, 67);\n    margin-left: 5%;\n    padding: 14px 20px;\n    cursor: pointer;\n    border-radius: 5px;\n  }\n@media screen and (max-width:1125px) {\n    .form-inline .triptypes {\n      width: 100%;\n      margin-left: 0;\n      margin-top: 2%;\n      margin-bottom: 2%;\n    }\n  }\n.form-inline .submit:hover {\n    background-color: rgb(255, 187, 0);\n    color: black;\n  }\n.form-inline .triptypes:hover {\n    color: black;\n    background-color: rgb(252, 252, 135);\n  }\n@media (max-width: 800px) {\n    .form-inline input {\n      margin: 10px 0;\n    }\n    \n    .form-inline {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-align: stretch;\n              align-items: stretch;\n    }\n  }\n@media (max-width: 991px) {\n    .search_your_country .search_form {\n      padding: 5px;\n      left: 0;\n      margin-top: 130px;\n    }\n  }\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n    .search_your_country .search_form {\n      left: 0;\n    }\n  }\n.top-item-header {\n    text-align: center;\n    margin-bottom: 3%;\n    margin-top: -5%;\n  }\n@media screen and (max-width:1125px) {\n    .top-item-header {\n      margin-top: 3%;\n      margin-bottom: -7%;\n    }\n  }\n@media screen and (max-width:991px) {\n    .top-item-header {\n      margin-top: 15%;\n    }\n  }\n@media screen and (max-width:802px) {\n    .top-item-header {\n      margin-top: 24%;\n    }\n  }\n@media screen and (max-width:576px) {\n    .top-item-header {\n      margin-top: 40%;\n      margin-bottom: -100px;\n    }\n  }\n.top-item-content {\n    position: relative;\n    width: 100%;\n    margin-bottom: 7%;\n  }\n.top-item-content h4 {\n    text-align: center;\n    margin-bottom: 7%;\n  }\n.top-item-content img {\n    width: 100%;\n    height: 250px;\n    -webkit-transition: margin .5s;\n    transition: margin .5s;\n    border-radius: 10px;\n  }\n@media screen and (max-width:640px) {\n    .top-item-content img {\n      height: 180px;\n    }\n  }\n@media screen and (max-width:360px) {\n    .top-item-content img {\n      height: 200px;\n    }\n  }\n.top-item-content img:hover {\n    margin-top: -5%;\n    box-shadow: 5px 10px #a1a1a1;\n  }\n.top-item-content:hover .desc a{\n    background-color: #0297c9;\n  }\n.top-item-content .desc h5 {\n    color: white;\n    font-weight: 600;\n  }\n.top-item-content h5, .top-item-content a {\n    display: inline;\n  }\n.top-item-content .desc {\n    position: absolute;\n    bottom: 15px;\n    left: 10px;\n  }\n.top-item-content .desc a {\n    background-color: rgb(253, 188, 8);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    margin-left: 5px;\n    padding: 5px 15px 5px 15px;\n    border-radius: 30px;\n  }\n.donation {\n      margin-top: 5%;\n  }\n@media screen and (max-width:1125px) {\n    .donation {\n      margin-top: 15%;\n    }\n  }\n@media screen and (max-width:756px) {\n    .donation {\n      margin-top: 10%;\n      padding: 10%;\n    }\n  }\n@media screen and (max-width:576px) {\n    .donation {\n      margin-top: 33%;\n    }\n  }\n/* search part end  */\n/* amazing tour ends  */\n/* ------------------------------------------------------------------------------------------   */\n/* advantages start  */\n.advantages {\n  background-color: #0297c9;\n}\n.advantages .content{\n  width: 90%;\n  margin-left: 5%;\n}\n@media screen and (max-width:576px) {\n  .advantages .content .head-icon {\n    margin-bottom: -1px;\n  }\n}\n.advantages .content .head-icon i{\n  color: white;\n  padding-top: 2%;\n  margin-right: 10px;\n  font-size: 10px;\n}\n.advantages .content .head h3{\n  color: white;\n  font-weight: 800;\n  padding-top: 3%;\n}\n.advantages .content-box {\n  margin-top: 3%;\n  margin-left: 5%;\n}\n.advantages .content-box i {\n  font-size: 60px;\n  color: white;\n}\n.advantages .content-box .desc {\n  margin-top: 10%;\n  padding-bottom: 30px;\n}\n.advantages .content-box .desc h4 {\n  font-weight: 800;\n  color: white;\n}\n.advantages .content-box .desc p {\n  color: white;\n  font-weight: 300;\n}\n.advantages .about-us-button {\n  background-color: #0297c9;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n  border: 1px solid white;\n  margin-left: 37%;\n  margin-top: 3%;\n  margin-bottom: 5%;\n  padding: 14px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.advantages .about-us-button:hover {\n  background-color: #03b2ec;\n}\n@media screen and (max-width:670px) {\n  .advantages .about-us-button {\n    margin: 0 0 5% 27%;\n  }\n}\n@media screen and (max-width:360px) {\n  .advantages .about-us-button {\n    margin: 0 0 5% 12%;\n  }\n}\n/* advantages part end  */\n/* ----------------------------------------------------------------------------------------------------- */\n.leaders {\n  margin-top: 10%;\n  width: 90%;\n}\n@media screen and (max-width:640px) {\n  .leaders .leader-detail {\n    margin-left: 5%;\n  }\n}\n.leaders .leader-detail .head-icon {\n  text-align: center;\n  margin-top: 10%;\n  font-size: 60px;\n}\n.leaders .leader-detail .title h2 {\n  text-align: center;\n}\n.leaders .leader-detail .desc {\n  width: 80%;\n  margin-left: 10%;\n}\n.leaders .leader-detail .desc p {\n  text-align: center;\n  color: rgb(102, 102, 102);\n  font-size: 14px;\n  font-weight: 400;\n}\n.leaders .leader-detail .see-more {\n  margin-top: 5%;\n  margin-left: 30%;\n  margin-bottom: 5%;\n}\n@media screen and (max-width:576px) {\n  .leaders .leader-detail .see-more {\n    margin-left: 10%;\n  }\n}\n@media screen and (max-width:360px) {\n  .leaders .leader-box {\n    margin-left: 10%;\n  } \n}\n/* ------------------------------------------------------------------------------------------------- */\n/* popular hotels start  */\n.popular_hotels .section_tittle h2 {\n  margin-top: -15%;\n  margin-bottom: 20%;\n}\n@media screen and (max-width:991px) {\n  .popular_hotels .section_tittle h2 {\n    margin-top: 3%;\n    font-size: 30px;\n  }\n}\n@media screen and (max-width:576px) {\n  .popular_hotels .section_tittle h2 {\n    font-size: 35px;\n    margin-top: 2%;\n    margin-bottom: 5%;\n  }\n}\n.popular_hotels .donation {\n  margin-top: -1%;\n}\n.popular_hotels .donation .content {\n  margin-bottom: 3%;\n}\n.content:hover .price {\n  background-color: #0297c9;\n}\n.content:hover .desc h4 {\n  color: #0297c9;\n}\n.donation .content .image img {\n  width: 100%;\n  height: 250px;\n  position: relative;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.donation .content .desc {\n  background-color: white;\n  border-left: 1px solid rgb(204, 203, 203);\n  border-right: 1px solid rgb(204, 203, 203);\n  border-bottom: 1px solid rgb(204, 203, 203);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10%;\n}\n.content .price {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  background-color: rgb(253, 188, 8);\n  padding: 10px 30px 10px 30px;\n  border-radius: 30px;\n}\n.content .price a {\n  color : white;\n  font-weight: 700;\n  font-size: 15px;\n}\n.donation .content .desc .days {\n  float: right;\n}\n.popular_hotels .see-More {\n  margin-left: 43%;\n}\n@media screen and (max-width:576px) {\n  .popular_hotels .see-More {\n    margin-left: 30%;\n  }\n}\n.popular_hotels .see-More button {\n  border:none;\n  background-color: rgb(255, 197, 38);\n  padding: 15px 25px 15px 25px;\n  border-radius: 10px;\n}\n.popular_hotels .see-More button:hover {\n  background-color: rgb(253, 186, 0);\n}\n/* popular hotel ends  */\n/* ------------------------------------------------------------------------------------------------ */\n.cta_part {\n  background-color: #0297c9;\n  margin-top: 10%;\n  width: 100%;\n}\n.cta_part .head h1{\n  font-weight: 700;\n  text-align: center;\n  margin-top: -10%;\n  color: white;\n}\n.cta_part .head p {\n  text-align: center;\n  color: white;\n  font-weight: 500;\n}\n.cta_part .search-box input{\n  padding: 20px;\n  width: 70%;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin-left: 7%;\n}\n@media screen and (max-width:991px) {\n  .cta_part .search-box input {\n    width: 80%;\n  }\n}\n@media screen and (max-width:576px){\n  .cta_part .search-box input {\n    width: 100%;\n    margin: 0;\n  }\n}\n.cta_part .search-box button {\n  background-color: white;\n  color: rgb(54, 54, 54);\n  background-color:rgb(255, 206, 67);\n  border: none;\n  border-radius: 5px;\n  padding: 21px 20px;\n  margin-left: 2%;\n  cursor: pointer;\n}\n@media screen and (max-width:991px) {\n  .cta_part .search-box button {\n    width: 30%;\n    margin-left: 30%;\n    margin-top: 2%;\n  }\n}\n@media screen and (max-width:576px) {\n  .cta_part .search-box button {\n    width: 50%;\n    margin-left: 25%;\n    margin-top: 2%;\n  }\n}\n.cta_part .search-box button:hover {\n  background-color: rgb(253, 188, 8);\n}\n/* ------------------------------------------------------------------------------------------------------ */\n.tour_package {\n  width: 90%;\n  margin-left: 5%;\n  margin-top: -2%;\n}\n@media screen and (max-width:1125px) {\n  .tour_package {\n    margin-top: 3%;\n  }\n}\n.tour_package .content {\n  margin-bottom: 5%;\n}\n.tour_package .content .desc {\n    background-color: white;\n  border-left: 1px solid rgb(204, 203, 203);\n  border-right: 1px solid rgb(204, 203, 203);\n  border-bottom: 1px solid rgb(204, 203, 203);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10%;\n}\n.tour_package .content .image img{\n  width: 100%;\n  height: 250px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n\n}\n.tour_package .content .days {\n  margin-left: 26%;\n}\n.tour_package .see-More {\n  margin-left: 43%;\n  margin-top: 1%;\n}\n@media screen and (max-width:576px) {\n  .tour_package .see-More {\n    margin-left: 30%;\n  }\n}\n.tour_package .see-More button {\n  border:none;\n  background-color: rgb(255, 197, 38);\n  padding: 15px 25px 15px 25px;\n  border-radius: 10px;\n}\n.tour_package .see-More button:hover {\n  background-color: rgb(253, 186, 0);\n}\n/* -------------------------------------------------------------------------------------------------------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUF1QjtBQUN2QjtJQUNJLGtCQUFrQjtJQUNsQix3Q0FBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IseUJBQXlCO0VBQzNCO0FBRUE7SUFDRTtNQUNFLGFBQWE7TUFDYix5QkFBeUI7SUFDM0I7RUFDRjtBQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtBQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLFNBQVM7SUFDWDtFQUNGO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFO01BQ0UsU0FBUztJQUNYO0VBQ0Y7QUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUNBLHFCQUFxQjtBQUN2QixrSEFBa0g7QUFFaEgsdUJBQXVCO0FBQ3ZCO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtJQUNuQjtFQUNGO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztFQUNiO0FBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7RUFDRjtBQUVBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjtFQUNGO0FBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQztBQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7RUFDRjtBQUVBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztJQUNiO0VBQ0Y7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUI7SUFDbkI7RUFDRjtBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtJQUNaLG9DQUFvQztFQUN0QztBQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsMEJBQW9CO2NBQXBCLG9CQUFvQjtJQUN0QjtFQUNGO0FBRUE7SUFDRTtNQUNFLFlBQVk7TUFDWixPQUFPO01BQ1AsaUJBQWlCO0lBQ25CO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsT0FBTztJQUNUO0VBQ0Y7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUVBO0lBQ0U7TUFDRSxjQUFjO01BQ2Qsa0JBQWtCO0lBQ3BCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxlQUFlO01BQ2YscUJBQXFCO0lBQ3ZCO0VBQ0Y7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGO0FBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGO0FBRUE7SUFDRSxlQUFlO0lBQ2YsNEJBQTRCO0VBQzlCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtFQUNaO0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixtQkFBbUI7RUFDckI7QUFFQTtNQUNJLGNBQWM7RUFDbEI7QUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGVBQWU7TUFDZixZQUFZO0lBQ2Q7RUFDRjtBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7QUFDQSxxQkFBcUI7QUFFdkIsdUJBQXVCO0FBQ3ZCLGlHQUFpRztBQUdqRyxzQkFBc0I7QUFDdEI7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQSx5QkFBeUI7QUFDekIsMEdBQTBHO0FBQzFHO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUEsc0dBQXNHO0FBQ3RHLDBCQUEwQjtBQUUxQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUEsd0JBQXdCO0FBRXhCLHFHQUFxRztBQUVyRztFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtBQUNGO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUEsMkdBQTJHO0FBRTNHO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7SUFDSSx1QkFBdUI7RUFDekIseUNBQXlDO0VBQ3pDLDBDQUEwQztFQUMxQywyQ0FBMkM7RUFDM0MsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7O0FBRS9CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtDQUFrQztBQUNwQztBQUdBLDZHQUE2RyIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJhbm5lciBwYXJ0IHN0YXJ0ICAqL1xuLmJhbm5lcl9wYXJ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrLWdyb3VuZC5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDcwJTtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDA7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5iYW5uZXJfcGFydCB7XG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDkwJTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iYW5uZXJfcGFydCAuYmFubmVyX3RleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gICAgLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgIH1cbiAgfVxuICBcbiAgLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCAudXAtaGVhZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgICAuYmFubmVyX3BhcnQgLmJhbm5lcl90ZXh0IC51cC1oZWFkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5iYW5uZXJfcGFydCAuYmFubmVyX3RleHQgLnVwLWhlYWQgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XG4gICAgLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCAudXAtaGVhZCBzcGFuIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuYmFubmVyX3BhcnQgLmJhbm5lcl90ZXh0IC51cC1oZWFkIGkge1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCAudXAtaGVhZCBzcGFuOm50aC1jaGlsZChldmVuKSBpIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICB9XG5cbiAgLmJhbm5lcl9wYXJ0IC5iYW5uZXJfdGV4dCAudXAtaGVhZCBzcGFuOm50aC1jaGlsZChvZGQpIGkge1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG4gIFxuICAuYmFubmVyX3BhcnQgLmJhbm5lcl90ZXh0IGg1IHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NTZweCkge1xuICAgIC5iYW5uZXJfcGFydCAuYmFubmVyX3RleHQgaDUge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgICAuYmFubmVyX3BhcnQgLmJhbm5lcl90ZXh0IGg1IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgfVxuICAvKiBiYW5uZXIgcGFydCBlbmQgICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyogc2VhcmNoIHBhcnQgc3RhcnQgICovXG4gIC5zZWFyY2hfeW91cl9jb3VudHJ5IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjQ5LCAyNDgpO1xuICAgIHBhZGRpbmc6IDE2NXB4IDAgMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IC0yNTRweDtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnNlYXJjaF95b3VyX2NvdW50cnkge1xuICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgbWFyZ2luLXRvcDogLTcwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuc2VhcmNoX3lvdXJfY291bnRyeSAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMjVweCkge1xuICAgIC5zZWFyY2hfeW91cl9jb3VudHJ5IC5jb250YWluZXItZmx1aWQge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgLnNlYXJjaF95b3VyX2NvdW50cnkgLnNlYXJjaF9mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI5N2M5O1xuICAgIHBhZGRpbmc6IDIwcHggMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IC0yMTBweDtcbiAgfVxuXG4gIC5mb3JtLWlubGluZSB7ICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5mb3JtLWlubGluZSBpIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gICAgLmZvcm0taW5saW5lIGkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb3JtLWlubGluZSBpbnB1dCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgICAuZm9ybS1pbmxpbmUgaW5wdXQge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMXB4KSB7XG4gICAgLmZvcm0taW5saW5lIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWlubGluZSBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xuICB9XG4gIFxuICAuZm9ybS1pbmxpbmUgLnN1Ym1pdHtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA2LCA2Nyk7XG4gICAgY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KXtcbiAgICAuZm9ybS1pbmxpbmUgLnN1Ym1pdCB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAxcHgpIHtcbiAgICAuZm9ybS1pbmxpbmUgLnN1Ym1pdCB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1pbmxpbmUgLnRyaXB0eXBlc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDIwNiwgNjcpO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gICAgLmZvcm0taW5saW5lIC50cmlwdHlwZXMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgfVxuICB9XG4gIFxuICAuZm9ybS1pbmxpbmUgLnN1Ym1pdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg3LCAwKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuZm9ybS1pbmxpbmUgLnRyaXB0eXBlczpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMTM1KTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmZvcm0taW5saW5lIGlucHV0IHtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1pbmxpbmUge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnNlYXJjaF95b3VyX2NvdW50cnkgLnNlYXJjaF9mb3JtIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAxMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuc2VhcmNoX3lvdXJfY291bnRyeSAuc2VhcmNoX2Zvcm0ge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cblxuICAudG9wLWl0ZW0taGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgbWFyZ2luLXRvcDogLTUlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgICAudG9wLWl0ZW0taGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTclO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAudG9wLWl0ZW0taGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMnB4KSB7XG4gICAgLnRvcC1pdGVtLWhlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAyNCU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAgIC50b3AtaXRlbS1oZWFkZXIge1xuICAgICAgbWFyZ2luLXRvcDogNDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTEwMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnRvcC1pdGVtLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcbiAgfVxuXG4gIC50b3AtaXRlbS1jb250ZW50IGg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XG4gIH1cblxuICAudG9wLWl0ZW0tY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIC41cztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xuICAgIC50b3AtaXRlbS1jb250ZW50IGltZyB7XG4gICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcbiAgICAudG9wLWl0ZW0tY29udGVudCBpbWcge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cblxuICAudG9wLWl0ZW0tY29udGVudCBpbWc6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IC01JTtcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAjYTFhMWExO1xuICB9XG5cbiAgLnRvcC1pdGVtLWNvbnRlbnQ6aG92ZXIgLmRlc2MgYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI5N2M5O1xuICB9XG5cbiAgLnRvcC1pdGVtLWNvbnRlbnQgLmRlc2MgaDUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnRvcC1pdGVtLWNvbnRlbnQgaDUsIC50b3AtaXRlbS1jb250ZW50IGEge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC50b3AtaXRlbS1jb250ZW50IC5kZXNjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cblxuICAudG9wLWl0ZW0tY29udGVudCAuZGVzYyBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxODgsIDgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cblxuICAuZG9uYXRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjVweCkge1xuICAgIC5kb25hdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NTZweCkge1xuICAgIC5kb25hdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICBwYWRkaW5nOiAxMCU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAgIC5kb25hdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgfVxuICB9XG4gIC8qIHNlYXJjaCBwYXJ0IGVuZCAgKi9cblxuLyogYW1hemluZyB0b3VyIGVuZHMgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAqL1xuXG5cbi8qIGFkdmFudGFnZXMgc3RhcnQgICovXG4uYWR2YW50YWdlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjk3Yzk7XG59XG5cbi5hZHZhbnRhZ2VzIC5jb250ZW50e1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLmFkdmFudGFnZXMgLmNvbnRlbnQgLmhlYWQtaWNvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgfVxufVxuXG4uYWR2YW50YWdlcyAuY29udGVudCAuaGVhZC1pY29uIGl7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmFkdmFudGFnZXMgLmNvbnRlbnQgLmhlYWQgaDN7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4uYWR2YW50YWdlcyAuY29udGVudC1ib3gge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uYWR2YW50YWdlcyAuY29udGVudC1ib3ggaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWR2YW50YWdlcyAuY29udGVudC1ib3ggLmRlc2Mge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmFkdmFudGFnZXMgLmNvbnRlbnQtYm94IC5kZXNjIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWR2YW50YWdlcyAuY29udGVudC1ib3ggLmRlc2MgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFkdmFudGFnZXMgLmFib3V0LXVzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjk3Yzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDM3JTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYWR2YW50YWdlcyAuYWJvdXQtdXMtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYjJlYztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzBweCkge1xuICAuYWR2YW50YWdlcyAuYWJvdXQtdXMtYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgMCA1JSAyNyU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkge1xuICAuYWR2YW50YWdlcyAuYWJvdXQtdXMtYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgMCA1JSAxMiU7XG4gIH1cbn1cblxuLyogYWR2YW50YWdlcyBwYXJ0IGVuZCAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ubGVhZGVycyB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgd2lkdGg6IDkwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xuICAubGVhZGVycyAubGVhZGVyLWRldGFpbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG59XG5cbi5sZWFkZXJzIC5sZWFkZXItZGV0YWlsIC5oZWFkLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4ubGVhZGVycyAubGVhZGVyLWRldGFpbCAudGl0bGUgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sZWFkZXJzIC5sZWFkZXItZGV0YWlsIC5kZXNjIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmxlYWRlcnMgLmxlYWRlci1kZXRhaWwgLmRlc2MgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGVhZGVycyAubGVhZGVyLWRldGFpbCAuc2VlLW1vcmUge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLmxlYWRlcnMgLmxlYWRlci1kZXRhaWwgLnNlZS1tb3JlIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcbiAgLmxlYWRlcnMgLmxlYWRlci1ib3gge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH0gXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIHBvcHVsYXIgaG90ZWxzIHN0YXJ0ICAqL1xuXG4ucG9wdWxhcl9ob3RlbHMgLnNlY3Rpb25fdGl0dGxlIGgyIHtcbiAgbWFyZ2luLXRvcDogLTE1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gIC5wb3B1bGFyX2hvdGVscyAuc2VjdGlvbl90aXR0bGUgaDIge1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gIC5wb3B1bGFyX2hvdGVscyAuc2VjdGlvbl90aXR0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxufVxuXG4ucG9wdWxhcl9ob3RlbHMgLmRvbmF0aW9uIHtcbiAgbWFyZ2luLXRvcDogLTElO1xufVxuXG4ucG9wdWxhcl9ob3RlbHMgLmRvbmF0aW9uIC5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5jb250ZW50OmhvdmVyIC5wcmljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjk3Yzk7XG59XG5cbi5jb250ZW50OmhvdmVyIC5kZXNjIGg0IHtcbiAgY29sb3I6ICMwMjk3Yzk7XG59XG5cbi5kb25hdGlvbiAuY29udGVudCAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5kb25hdGlvbiAuY29udGVudCAuZGVzYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmNvbnRlbnQgLnByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDE4OCwgOCk7XG4gIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5jb250ZW50IC5wcmljZSBhIHtcbiAgY29sb3IgOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZG9uYXRpb24gLmNvbnRlbnQgLmRlc2MgLmRheXMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wb3B1bGFyX2hvdGVscyAuc2VlLU1vcmUge1xuICBtYXJnaW4tbGVmdDogNDMlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gIC5wb3B1bGFyX2hvdGVscyAuc2VlLU1vcmUge1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbn1cblxuLnBvcHVsYXJfaG90ZWxzIC5zZWUtTW9yZSBidXR0b24ge1xuICBib3JkZXI6bm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk3LCAzOCk7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wb3B1bGFyX2hvdGVscyAuc2VlLU1vcmUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMTg2LCAwKTtcbn1cblxuLyogcG9wdWxhciBob3RlbCBlbmRzICAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmN0YV9wYXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyOTdjOTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN0YV9wYXJ0IC5oZWFkIGgxe1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN0YV9wYXJ0IC5oZWFkIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmN0YV9wYXJ0IC5zZWFyY2gtYm94IGlucHV0e1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCkge1xuICAuY3RhX3BhcnQgLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XG4gIC5jdGFfcGFydCAuc2VhcmNoLWJveCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5jdGFfcGFydCAuc2VhcmNoLWJveCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyMDYsIDY3KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIxcHggMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgLmN0YV9wYXJ0IC5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLmN0YV9wYXJ0IC5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICB9XG59XG5cbi5jdGFfcGFydCAuc2VhcmNoLWJveCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxODgsIDgpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnRvdXJfcGFja2FnZSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogLTIlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjVweCkge1xuICAudG91cl9wYWNrYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgfVxufVxuXG4udG91cl9wYWNrYWdlIC5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi50b3VyX3BhY2thZ2UgLmNvbnRlbnQgLmRlc2Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLnRvdXJfcGFja2FnZSAuY29udGVudCAuaW1hZ2UgaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG5cbn1cblxuLnRvdXJfcGFja2FnZSAuY29udGVudCAuZGF5cyB7XG4gIG1hcmdpbi1sZWZ0OiAyNiU7XG59XG5cbi50b3VyX3BhY2thZ2UgLnNlZS1Nb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLnRvdXJfcGFja2FnZSAuc2VlLU1vcmUge1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbn1cblxuLnRvdXJfcGFja2FnZSAuc2VlLU1vcmUgYnV0dG9uIHtcbiAgYm9yZGVyOm5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5NywgMzgpO1xuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udG91cl9wYWNrYWdlIC5zZWUtTW9yZSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxODYsIDApO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIl19 */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/home-page/home-page.component.css")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/hotels/hotels-detail/hotels-detail.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/hotels/hotels-detail/hotels-detail.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelsHotelsDetailHotelsDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVscy9ob3RlbHMtZGV0YWlsL2hvdGVscy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/hotels/hotels-detail/hotels-detail.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/hotels/hotels-detail/hotels-detail.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HotelsDetailComponent */

  /***/
  function srcAppHotelsHotelsDetailHotelsDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsDetailComponent", function () {
      return HotelsDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotelsDetailComponent = /*#__PURE__*/function () {
      function HotelsDetailComponent() {
        _classCallCheck(this, HotelsDetailComponent);
      }

      _createClass(HotelsDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotelsDetailComponent;
    }();

    HotelsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotels-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotels-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotels/hotels-detail/hotels-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotels-detail.component.css */
      "./src/app/hotels/hotels-detail/hotels-detail.component.css")).default]
    })], HotelsDetailComponent);
    /***/
  },

  /***/
  "./src/app/hotels/hotels/hotels.component.css":
  /*!****************************************************!*\
    !*** ./src/app/hotels/hotels/hotels.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelsHotelsHotelsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter {\n  position: relative;\n  background-image: url('back-ground.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 350px;\n}\n\n@media screen and (max-width:1125px) {\n  .filter {\n      height: 500px;\n  }\n}\n\n.hotel-box {\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 7%;\n}\n\n@media screen and (max-width:576px) {\n  .hotel-box {\n    width: 100%;\n    margin-left: 10%;\n  }\n}\n\n.hotel-box h6 {\n  width: 100%;\n  text-align: center;\n  color: white;\n}\n\n.hotel-content {\n  background-color: white;\n}\n\n.hotel-content h4 {\n  text-align: center;\n  margin-top: 3%;\n}\n\n.hotel-content p {\n  text-align: center;\n  color: 15px;\n}\n\n.design-trip-form {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-left: 7%;\n}\n\n.form-inline {  \n  display: -webkit-box;  \n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form-inline label {\n  margin: 5px 10px 5px 0;\n}\n\n.form-inline input {\n  width: 30%;\n  padding: 8px 10px 8px 10px;\n  margin-right: 10px;\n  border: 1px solid rgb(204, 203, 203);\n  border-radius: 5px;\n}\n\n@media screen and (max-width:1125px) {\n  .form-inline input {\n    width: 100%;\n  }\n}\n\n.form-inline select {\n    width: 30%;\n    padding-left: 2%;\n    margin-right: 10px;\n}\n\n@media screen and (max-width:1125px) {\n    .form-inline select {\n        width: 100%;\n    }\n}\n\n.form-inline button {\n  padding: 10px 10px;\n  background-color: dodgerblue;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  height: 39px;\n}\n\n@media screen and (max-width:1125px) {\n    .form-inline button {\n      margin-left: 35%;\n      margin-top: 5%;\n    }\n}\n\n@media screen and (max-width:991px){\n  .form-inline button {\n    width:60%;\n    margin-left: 15%;\n  }\n}\n\n@media screen and (max-width:576px) {\n  .form-inline button {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.form-inline button:hover {\n  background-color: royalblue;\n}\n\n@media (max-width: 800px) {\n  .form-inline input {\n    margin: 10px 0;\n  }\n  \n  .form-inline {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n  }\n}\n\n.hotels .title {\n  margin-top: 7%;\n}\n\n.hotels .title .head h1 {\n  text-align: center;\n  font-weight: 800;\n}\n\n.hotels .title .desc p{\n  text-align: center;\n  font-weight: 500;\n}\n\n.hotels .list {\n  width: 90%;\n  margin-left: 5%;\n}\n\n.hotels .list .content {\n  position: relative;\n  padding: 20px;\n  width: 100%;\n}\n\n.hotels .list .content .image img {\n  width: 100%;\n  height: 250px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.hotels .list .content .desc {\n  background-color: white;\n  border-left: 1px solid rgb(204, 203, 203);\n  border-right: 1px solid rgb(204, 203, 203);\n  border-bottom: 1px solid rgb(204, 203, 203);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10%;\n}\n\n.hotels .list .content .price {\n  position: absolute;\n  top:40px;\n  left: 40px;\n  background-color: rgb(115, 236, 245);\n  padding: 10px 30px 10px 30px;\n  border-radius: 30px;\n}\n\n.hotels .list .content .price a {\n  color : black;\n}\n\n.hotels .list .content .date {\n  float: right;\n}\n\n.hotels .header h1{\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  font-weight: 600;\n}\n\n.hotels .list .more-hotels{\n  width: 100%;\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.hotels .list .more-hotels button {\n  background-color: rgb(253, 186, 0);\n  border: none;\n  padding: 15px 25px 15px 25px;\n  border-radius: 5px;\n}\n\n.hotel-box .list .more-hotels button:hover {\n  background-color: #0297c9;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxzL2hvdGVscy9ob3RlbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0U7TUFDSSxhQUFhO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0lBQ0k7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztJQUNoQjtBQUNKOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvdGVscy9ob3RlbHMvaG90ZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2stZ3JvdW5kLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgLmZpbHRlciB7XG4gICAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG59XG5cbi5ob3RlbC1ib3gge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAuaG90ZWwtYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59XG5cbi5ob3RlbC1ib3ggaDYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ob3RlbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ob3RlbC1jb250ZW50IGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLmhvdGVsLWNvbnRlbnQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IDE1cHg7XG59XG5cbi5kZXNpZ24tdHJpcC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA3JTtcbn1cblxuLmZvcm0taW5saW5lIHsgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1pbmxpbmUgbGFiZWwge1xuICBtYXJnaW46IDVweCAxMHB4IDVweCAwO1xufVxuXG4uZm9ybS1pbmxpbmUgaW5wdXQge1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiA4cHggMTBweCA4cHggMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDMsIDIwMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgLmZvcm0taW5saW5lIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZm9ybS1pbmxpbmUgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjVweCkge1xuICAgIC5mb3JtLWlubGluZSBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5mb3JtLWlubGluZSBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzlweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgICAuZm9ybS1pbmxpbmUgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xuICAuZm9ybS1pbmxpbmUgYnV0dG9uIHtcbiAgICB3aWR0aDo2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gIC5mb3JtLWlubGluZSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5mb3JtLWlubGluZSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZm9ybS1pbmxpbmUgaW5wdXQge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIFxuICAuZm9ybS1pbmxpbmUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbn1cblxuLmhvdGVscyAudGl0bGUge1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuLmhvdGVscyAudGl0bGUgLmhlYWQgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5ob3RlbHMgLnRpdGxlIC5kZXNjIHB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmhvdGVscyAubGlzdCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmhvdGVscyAubGlzdCAuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQgLmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmhvdGVscyAubGlzdCAuY29udGVudCAuZGVzYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmhvdGVscyAubGlzdCAuY29udGVudCAucHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDo0MHB4O1xuICBsZWZ0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE1LCAyMzYsIDI0NSk7XG4gIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQgLnByaWNlIGEge1xuICBjb2xvciA6IGJsYWNrO1xufVxuXG4uaG90ZWxzIC5saXN0IC5jb250ZW50IC5kYXRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaG90ZWxzIC5oZWFkZXIgaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaG90ZWxzIC5saXN0IC5tb3JlLWhvdGVsc3tcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaG90ZWxzIC5saXN0IC5tb3JlLWhvdGVscyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxODYsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvdGVsLWJveCAubGlzdCAubW9yZS1ob3RlbHMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyOTdjOTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hotels/hotels/hotels.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/hotels/hotels/hotels.component.ts ***!
    \***************************************************/

  /*! exports provided: HotelsComponent */

  /***/
  function srcAppHotelsHotelsHotelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsComponent", function () {
      return HotelsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotelsComponent = /*#__PURE__*/function () {
      function HotelsComponent() {
        var _this2 = this;

        _classCallCheck(this, HotelsComponent);

        this.showOthers = false;
        this.lessMore = 'More';

        this.showOther = function () {
          if (_this2.showOthers == false) {
            _this2.lessMore = 'Less';
          } else {
            _this2.lessMore = 'More';
          }

          _this2.showOthers = !_this2.showOthers;
        };
      }

      _createClass(HotelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotelsComponent;
    }();

    HotelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotels',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotels.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotels/hotels/hotels.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotels.component.css */
      "./src/app/hotels/hotels/hotels.component.css")).default]
    })], HotelsComponent);
    /***/
  },

  /***/
  "./src/app/leaders/leaders-detail/leader-detail.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/leaders/leaders-detail/leader-detail.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLeadersLeadersDetailLeaderDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".leader-profile {\n    padding: 30px 0 10px 0;\n}\n\n.leader-profile .profile-pic img {\n    width: 90%;\n    height: 300px;\n}\n\n.leader-profile .leader-name {\n    padding: 40px 0 0 0;\n}\n\n.leader-profile .about-leader p {\n    color: black;\n}\n\n.leader-profile .leader-info div{\n    padding: 25px 5px 5px 5px;\n}\n\n.leader-profile .leader-info div i {\n    padding-right: 2%;\n    color: black;\n}\n\n.leader-profile .leader-info p span {\n    color: black;\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.leader-profile .leader-info p {\n    color: black;\n}\n\n/* ---------------------------------------------------------------- */\n\n.tour-idea {\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n.tour-idea .head {\n    padding-bottom: 3%;\n}\n\n.tour-idea .icon {\n    font-size: 100px;\n    text-align: center;\n}\n\n.tour-idea .desc h5 {\n    text-align: center;\n}\n\n.tour-idea .desc p {\n    color: black;\n}\n\n.tour-idea .image img{\n    width: 100%;\n    height: 250px;\n}\n\n.tour-idea .desc-top h5 {\n    text-align: center;\n}\n\n.tour-idea .desc-top p {\n    text-align: center;\n    width: 70%;\n    margin-left: 15%;\n}\n\n.tour-idea .desc h4 {\n    text-align: left;\n}\n\n.tour-idea .desc p {\n    text-align: left;\n}\n\n.tour-idea .desc div {\n    text-align: left;\n}\n\n.tour-idea .other-tour {\n    padding-top: 5%;\n}\n\n.other-tour .desc {\n    background-color: white;\n    padding: 5px;\n}\n\n.tour-idea .other-tour h5 {\n    text-align: left;\n    padding-top: 2%;\n}\n\n.other-leader {\n    width: 100%;\n  }\n\n.other-leader {\n    position: relative;\n    padding: 20px;\n    width: 100%;\n  }\n\n.other-leader .head {\n      padding: 2% 0 2% 0;\n  }\n\n.other-leader .content .image img {\n    width: 100%;\n    height: 250px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n\n.other-leader .content .desc {\n    background-color: white;\n    border-left: 1px solid rgb(204, 203, 203);\n    border-right: 1px solid rgb(204, 203, 203);\n    border-bottom: 1px solid rgb(204, 203, 203);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    padding: 10px;\n    margin-bottom: 10%;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVycy9sZWFkZXJzLWRldGFpbC9sZWFkZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxxRUFBcUU7O0FBRXJFO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGVhZGVycy9sZWFkZXJzLWRldGFpbC9sZWFkZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVhZGVyLXByb2ZpbGUge1xuICAgIHBhZGRpbmc6IDMwcHggMCAxMHB4IDA7XG59XG5cbi5sZWFkZXItcHJvZmlsZSAucHJvZmlsZS1waWMgaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5sZWFkZXItcHJvZmlsZSAubGVhZGVyLW5hbWUge1xuICAgIHBhZGRpbmc6IDQwcHggMCAwIDA7XG59XG5cbi5sZWFkZXItcHJvZmlsZSAuYWJvdXQtbGVhZGVyIHAge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmxlYWRlci1wcm9maWxlIC5sZWFkZXItaW5mbyBkaXZ7XG4gICAgcGFkZGluZzogMjVweCA1cHggNXB4IDVweDtcbn1cblxuLmxlYWRlci1wcm9maWxlIC5sZWFkZXItaW5mbyBkaXYgaSB7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGVhZGVyLXByb2ZpbGUgLmxlYWRlci1pbmZvIHAgc3BhbiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGVhZGVyLXByb2ZpbGUgLmxlYWRlci1pbmZvIHAge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4udG91ci1pZGVhIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnRvdXItaWRlYSAuaGVhZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuXG4udG91ci1pZGVhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvdXItaWRlYSAuZGVzYyBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG91ci1pZGVhIC5kZXNjIHAge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRvdXItaWRlYSAuaW1hZ2UgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG59XG5cbi50b3VyLWlkZWEgLmRlc2MtdG9wIGg1IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b3VyLWlkZWEgLmRlc2MtdG9wIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG59XG5cbi50b3VyLWlkZWEgLmRlc2MgaDQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3VyLWlkZWEgLmRlc2MgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdXItaWRlYSAuZGVzYyBkaXYge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59IFxuXG4udG91ci1pZGVhIC5vdGhlci10b3VyIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5vdGhlci10b3VyIC5kZXNjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi50b3VyLWlkZWEgLm90aGVyLXRvdXIgaDUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4ub3RoZXItbGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm90aGVyLWxlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAub3RoZXItbGVhZGVyIC5oZWFkIHtcbiAgICAgIHBhZGRpbmc6IDIlIDAgMiUgMDtcbiAgfVxuICBcbiAgLm90aGVyLWxlYWRlciAuY29udGVudCAuaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC5vdGhlci1sZWFkZXIgLmNvbnRlbnQgLmRlc2Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICB9XG4gIFxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/leaders/leaders-detail/leader-detail.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/leaders/leaders-detail/leader-detail.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LeaderDetailComponent */

  /***/
  function srcAppLeadersLeadersDetailLeaderDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderDetailComponent", function () {
      return LeaderDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LeaderDetailComponent = /*#__PURE__*/function () {
      function LeaderDetailComponent() {
        _classCallCheck(this, LeaderDetailComponent);
      }

      _createClass(LeaderDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeaderDetailComponent;
    }();

    LeaderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leader-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./leader-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/leaders/leaders-detail/leader-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./leader-detail.component.css */
      "./src/app/leaders/leaders-detail/leader-detail.component.css")).default]
    })], LeaderDetailComponent);
    /***/
  },

  /***/
  "./src/app/leaders/leaders/leaders.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/leaders/leaders/leaders.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLeadersLeadersLeadersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter {\n  position: relative;\n  background-image: url('back-ground.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 350px;\n}\n\n@media screen and (max-width:1125px) {\n  .filter {\n      height: 500px;\n  }\n}\n\n.hotel-box {\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 7%;\n}\n\n@media screen and (max-width:576px) {\n  .hotel-box {\n    width: 100%;\n    margin-left: 10%;\n  }\n}\n\n.hotel-box h6 {\n  width: 100%;\n  text-align: center;\n  color: white;\n}\n\n.hotel-content {\n  background-color: white;\n}\n\n.hotel-content h4 {\n  text-align: center;\n  margin-top: 3%;\n}\n\n.hotel-content p {\n  text-align: center;\n  color: 15px;\n}\n\n.design-trip-form {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-left: 7%;\n}\n\n.form-inline {  \n  display: -webkit-box;  \n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form-inline label {\n  margin: 5px 10px 5px 0;\n}\n\n.form-inline input {\n  width: 30%;\n  padding: 8px 10px 8px 10px;\n  margin-right: 10px;\n  border: 1px solid rgb(204, 203, 203);\n  border-radius: 5px;\n}\n\n@media screen and (max-width:1125px) {\n  .form-inline input {\n    width: 100%;\n  }\n}\n\n.form-inline select {\n    width: 30%;\n    padding-left: 2%;\n    margin-right: 10px;\n}\n\n@media screen and (max-width:1125px) {\n    .form-inline select {\n        width: 100%;\n    }\n}\n\n.form-inline button {\n  padding: 10px 10px;\n  background-color: dodgerblue;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  height: 39px;\n}\n\n@media screen and (max-width:1125px) {\n    .form-inline button {\n      margin-left: 35%;\n      margin-top: 5%;\n    }\n}\n\n@media screen and (max-width:991px){\n  .form-inline button {\n    width:60%;\n    margin-left: 15%;\n  }\n}\n\n@media screen and (max-width:576px) {\n  .form-inline button {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.form-inline button:hover {\n  background-color: royalblue;\n}\n\n@media (max-width: 800px) {\n  .form-inline input {\n    margin: 10px 0;\n  }\n  \n  .form-inline {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n  }\n}\n\n.hotels .title {\n  margin-top: 7%;\n}\n\n.hotels .title .head h1 {\n  text-align: center;\n  font-weight: 800;\n}\n\n.hotels .title .desc p{\n  text-align: center;\n  font-weight: 500;\n}\n\n.hotels .list {\n  width: 90%;\n  margin-left: 5%;\n}\n\n.hotels .list .content {\n  position: relative;\n  padding: 20px;\n  width: 100%;\n}\n\n.hotels .list .content .image img {\n  width: 100%;\n  height: 250px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.hotels .list .content .desc {\n  background-color: white;\n  border-left: 1px solid rgb(204, 203, 203);\n  border-right: 1px solid rgb(204, 203, 203);\n  border-bottom: 1px solid rgb(204, 203, 203);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10%;\n}\n\n.hotels .list .content .price {\n  position: absolute;\n  top:40px;\n  left: 40px;\n  background-color: rgb(115, 236, 245);\n  padding: 10px 30px 10px 30px;\n  border-radius: 30px;\n}\n\n.hotels .list .content .price a {\n  color : black;\n}\n\n.hotels .list .content .date {\n  float: right;\n}\n\n.hotels .header h1{\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  font-weight: 600;\n}\n\n.hotels .list .more-hotels{\n  width: 100%;\n  text-align: center;\n  margin-right: 80px;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.hotels .list .more-hotels button {\n  background-color: rgb(253, 186, 0);\n  border: none;\n  padding: 15px 25px 15px 25px;\n  border-radius: 5px;\n}\n\n.hotel-box .list .more-hotels button:hover {\n  background-color: #0297c9;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVycy9sZWFkZXJzL2xlYWRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0U7TUFDSSxhQUFhO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0lBQ0k7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztJQUNoQjtBQUNKOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sZWFkZXJzL2xlYWRlcnMvbGVhZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrLWdyb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gIC5maWx0ZXIge1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuXG4uaG90ZWwtYm94IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLmhvdGVsLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxufVxuXG4uaG90ZWwtYm94IGg2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaG90ZWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaG90ZWwtY29udGVudCBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5ob3RlbC1jb250ZW50IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAxNXB4O1xufVxuXG4uZGVzaWduLXRyaXAtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNyU7XG59XG5cbi5mb3JtLWlubGluZSB7ICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0taW5saW5lIGxhYmVsIHtcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMDtcbn1cblxuLmZvcm0taW5saW5lIGlucHV0IHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogOHB4IDEwcHggOHB4IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gIC5mb3JtLWlubGluZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvcm0taW5saW5lIHNlbGVjdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgICAuZm9ybS1pbmxpbmUgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uZm9ybS1pbmxpbmUgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDM5cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gICAgLmZvcm0taW5saW5lIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcbiAgLmZvcm0taW5saW5lIGJ1dHRvbiB7XG4gICAgd2lkdGg6NjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAuZm9ybS1pbmxpbmUgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uZm9ybS1pbmxpbmUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmZvcm0taW5saW5lIGlucHV0IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBcbiAgLmZvcm0taW5saW5lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG59XG5cbi5ob3RlbHMgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5ob3RlbHMgLnRpdGxlIC5oZWFkIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uaG90ZWxzIC50aXRsZSAuZGVzYyBwe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ob3RlbHMgLmxpc3Qge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG90ZWxzIC5saXN0IC5jb250ZW50IC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQgLmRlc2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDMsIDIwMyk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQgLnByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6NDBweDtcbiAgbGVmdDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNSwgMjM2LCAyNDUpO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uaG90ZWxzIC5saXN0IC5jb250ZW50IC5wcmljZSBhIHtcbiAgY29sb3IgOiBibGFjaztcbn1cblxuLmhvdGVscyAubGlzdCAuY29udGVudCAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmhvdGVscyAuaGVhZGVyIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdGVscyAubGlzdCAubW9yZS1ob3RlbHN7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaG90ZWxzIC5saXN0IC5tb3JlLWhvdGVscyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxODYsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvdGVsLWJveCAubGlzdCAubW9yZS1ob3RlbHMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyOTdjOTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/leaders/leaders/leaders.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/leaders/leaders/leaders.component.ts ***!
    \******************************************************/

  /*! exports provided: LeadersComponent */

  /***/
  function srcAppLeadersLeadersLeadersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadersComponent", function () {
      return LeadersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LeadersComponent = /*#__PURE__*/function () {
      function LeadersComponent() {
        var _this3 = this;

        _classCallCheck(this, LeadersComponent);

        this.showOthers = false;
        this.lessMore = 'More';

        this.showOther = function () {
          if (_this3.showOthers == false) {
            _this3.lessMore = 'Less';
          } else {
            _this3.lessMore = 'More';
          }

          _this3.showOthers = !_this3.showOthers;
        };
      }

      _createClass(LeadersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeadersComponent;
    }();

    LeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leaders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./leaders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/leaders/leaders/leaders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./leaders.component.css */
      "./src/app/leaders/leaders/leaders.component.css")).default]
    })], LeadersComponent);
    /***/
  },

  /***/
  "./src/app/modules/footer/footer.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/modules/footer/footer.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer_part {\n    background-color: #0297c9;\n}\n\n.footer_part h4 {\n    color: black;\n}\n\n.footer_part p, .footer_part li a {\n    color: white;\n    font-size: 14px;\n    font-weight: 600;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyX3BhcnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjk3Yzk7XG59XG5cbi5mb290ZXJfcGFydCBoNCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uZm9vdGVyX3BhcnQgcCwgLmZvb3Rlcl9wYXJ0IGxpIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppModulesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.showFooter = true;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.href = window.location.href;
          this.hrefPart = this.href.split('/');
          console.log(this.href);

          if (this.hrefPart[3] == 'login' || this.hrefPart[3] == 'register' || this.hrefPart[3] == 'reset-password') {
            this.showFooter = !this.showFooter;
          }
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/modules/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/modules/navigation/navigation.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/modules/navigation/navigation.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNavigationNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header .header-head {\n    height: 60px;\n    border-bottom: 1px solid rgb(214, 212, 212);\n    background-color: white;\n    margin-left: -14px;\n    margin-right: -14px;\n}\n\n@media screen and (max-width:1125px) {\n    .header-head-left .header-head-link{\n        display: none;\n    }\n}\n\n.header .header-head .header-head-left {\n    padding-top: 20px;\n}\n\n.header .header-head .header-head-left .header-head-link {\n    margin-right: 30px;\n    color: black;\n    font-size: 15px;\n}\n\n.header .header-head .header-head-left .header-head-logo {\n    margin-right: 30px;\n    margin-left: 20px;\n    color: rgb(41, 40, 40);\n    font-size: 18px;\n    font-weight: 800;\n}\n\n.On{\n    color: rgb(39, 190, 249);\n}\n\n.header .header-head .header-head-left .header-head-link:hover {\n    color: rgb(104, 102, 102);\n}\n\n.header .header-head .header-head-left #login {\n    margin-right: 30px;\n    color: black;\n    font-size: 15px;\n    float: right;\n}\n\n.header .header-head .header-head-left #logged {\n    position: relative;\n    margin-right: 30px;\n    color: black;\n    font-size: 15px;\n    float: right;\n}\n\n.header .header-head .header-head-left #collapse {\n    margin-right: 40px;\n    color: black;\n    font-size: 30px;\n    float: right;\n    display: none;\n    position: relative;\n    left: 30px;\n    bottom: 10px;\n}\n\n@media screen and (max-width:1125px) {\n    .header .header-head .header-head-left #collapse{\n        display: block;\n    }\n}\n\n.header-view-container .destination-content {\n    height: 300px;\n}\n\n.header-view-container .triptype-content {\n    height: 480px;\n}\n\n.header-head-collapse ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n}\n\n.header-head-collapse li {\n    height: 60px;\n    border-bottom: 1px solid rgb(214, 212, 212);\n}\n\n.header-head-collapse li a {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n    font-size: 15px;\n    margin-top: 20px;\n    margin-left: 20px;\n}\n\n.header-head-collapse li a i {\n    font-size: 20px;\n    float: right;\n}\n\n.header-head-collapse {\n    display: none;\n}\n\n@media screen and (max-width:1125px){\n    .header-head-collapse {\n        display: block;\n    }\n}\n\n/* ----------------------------------------------destination content---------------------------------------------- */\n\n@media screen and (max-width:1125px) {\n    .destination-content {\n        display: none;\n    }\n}\n\n.cities {\n    height: 300px;\n    margin-top: 1%;\n    margin-left: 10%;\n}\n\n@media screen and (max-width:1125px) {\n    .cities {\n        height: 450px;\n    }\n}\n\n@media screen and (max-width:730px) {\n    .cities {\n        height: 550px;\n    }\n}\n\n@media screen and (max-width:419px) {\n    .cities {\n        height: 800px;\n    }\n}\n\n.cities a {\n    color: rgb(14, 165, 14);\n    font-size: 12px;\n    font-weight: 500;\n}\n\n.best-cities {\n    margin-top: 3%;\n}\n\n.cities .cities-name li {\n    border: 1px solid rgb(219, 218, 218);\n    border-radius: 5px;\n    padding: 10px;\n    margin-top: 10px;\n    margin: 5px;\n    height: 50%;\n}\n\n.cities .cities-name span a {\n    color: black;\n}\n\n.cities .cities-name span:first-of-type {\n    color: white;\n}\n\n.best-cities img {\n    position: relative;\n    height: 120px;\n    width: 120px;\n    margin-top: 10px;\n    margin-right: 20px;\n}\n\n.best-cities .city-name a {\n    color: black;\n    font-weight: 600;\n}\n\n.cities-name {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\n.cities-name a {\n    color: black;\n}\n\n.cities-name li {\n    float: left;\n}\n\n.cities-name li:first-of-type {\n    background-color: rgb(11, 199, 11);\n}\n\n.cities .cities-name li:hover {\n    border: 1px solid rgb(114, 112, 112);\n}\n\n/* ---------------------------------------------trip type content------------------------------------------------- */\n\n.trip-types-content {\n    background-color: rgb(248, 249, 250);\n}\n\n@media screen and (max-width:1125px) {\n    .triptype-content {\n        display: none;\n    }\n}\n\n.trip-types-head , .trip-types-head-button {\n    margin-top: 20px;\n}\n\n.trip-types-head h4 {\n    margin-left: 10%;\n}\n\n@media screen and (max-width:1125px) {\n    .trip-types-head h4 {\n        display: none;\n    }\n}\n\n.trip-types-head-button input {\n    font-size: 14px;\n    background-color: rgb(19, 211, 19);\n    height: 40px;\n    width: 140px;\n    border-radius: 7px;\n    border: none;\n    color: white;\n    font-weight: 700;\n    float: right;\n    margin-right: 20%;\n}\n\n.trip-types .trip-types-head input:hover {\n    background-color:  rgb(10, 133, 10);\n    border: 1px solid rgb(114, 112, 112);\n}\n\n.triptype-content .triptype-item {\n    margin-top: 30px;\n}\n\n.triptype-content .triptype-item img {\n    width: 160px;\n    height: 160px;\n    margin-left: 10%;\n}\n\n.triptype-content .triptype-item table {\n    float: right;\n    width: 300px;\n    margin-right: 70px;\n}\n\n.triptype-content .triptype-item table th {\n    font-size: 16px;\n    padding-bottom: 10px;\n}\n\n.triptype-content .triptype-item table td {\n    padding-top: 10px;\n}\n\n.triptype-content .triptype-item table td a {\n    color: rgb(70, 68, 68);\n}\n\n.triptype-content .triptype-item table td a:hover {\n    color: black;\n}\n\n.triptype-content-collapse {\n    display: none;\n}\n\n@media screen and (max-width:1125px) {\n    .triptype-content-collapse {\n        display: block;\n    }\n}\n\n.destinations-content-collapse {\n    display: none;\n}\n\n@media screen and (max-width:1125px) {\n    .destinations-content-collapse {\n        display: block;\n    }\n}\n\n.triptype-content-collapse ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n}\n\n.triptype-content-collapse li {\n    height: 60px;\n    border-bottom: 1px solid rgb(214, 212, 212);\n}\n\n.triptype-content-collapse li a {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n    font-size: 15px;\n    margin-top: 20px;\n    margin-left: 20px;\n}\n\n.triptype-content-collapse li a i {\n    font-size: 20px;\n    float: right;\n}\n\n.triptype-content-collapse input {\n    font-size: 14px;\n    background-color: rgb(19, 211, 19);\n    height: 40px;\n    width: 170px;\n    border-radius: 7px;\n    border: none;\n    color: white;\n    font-weight: 700;\n    margin-left: 45%;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.triptype-content-collapse-content ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n}\n\n.triptype-content-collapse-content li {\n    height: 60px;\n    border-bottom: 1px solid rgb(214, 212, 212);\n}\n\n.triptype-content-collapse-content a {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n    font-size: 15px;\n    margin-top: 20px;\n    margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBR0Esb0hBQW9IOztBQUVwSDtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBLG9IQUFvSDs7QUFFcEg7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIgLmhlYWRlci1oZWFkIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTQsIDIxMiwgMjEyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgICAuaGVhZGVyLWhlYWQtbGVmdCAuaGVhZGVyLWhlYWQtbGlua3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5oZWFkZXIgLmhlYWRlci1oZWFkIC5oZWFkZXItaGVhZC1sZWZ0IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhlYWRlciAuaGVhZGVyLWhlYWQgLmhlYWRlci1oZWFkLWxlZnQgLmhlYWRlci1oZWFkLWxpbmsge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaGVhZGVyIC5oZWFkZXItaGVhZCAuaGVhZGVyLWhlYWQtbGVmdCAuaGVhZGVyLWhlYWQtbG9nbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoNDEsIDQwLCA0MCk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5PbntcbiAgICBjb2xvcjogcmdiKDM5LCAxOTAsIDI0OSk7XG59XG5cblxuLmhlYWRlciAuaGVhZGVyLWhlYWQgLmhlYWRlci1oZWFkLWxlZnQgLmhlYWRlci1oZWFkLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTA0LCAxMDIsIDEwMik7XG59XG5cbi5oZWFkZXIgLmhlYWRlci1oZWFkIC5oZWFkZXItaGVhZC1sZWZ0ICNsb2dpbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaGVhZGVyIC5oZWFkZXItaGVhZCAuaGVhZGVyLWhlYWQtbGVmdCAjbG9nZ2VkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaGVhZGVyIC5oZWFkZXItaGVhZCAuaGVhZGVyLWhlYWQtbGVmdCAjY29sbGFwc2Uge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgICAuaGVhZGVyIC5oZWFkZXItaGVhZCAuaGVhZGVyLWhlYWQtbGVmdCAjY29sbGFwc2V7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLmhlYWRlci12aWV3LWNvbnRhaW5lciAuZGVzdGluYXRpb24tY29udGVudCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmhlYWRlci12aWV3LWNvbnRhaW5lciAudHJpcHR5cGUtY29udGVudCB7XG4gICAgaGVpZ2h0OiA0ODBweDtcbn1cblxuLmhlYWRlci1oZWFkLWNvbGxhcHNlIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItaGVhZC1jb2xsYXBzZSBsaSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE0LCAyMTIsIDIxMik7XG59XG4gIFxuLmhlYWRlci1oZWFkLWNvbGxhcHNlIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmhlYWRlci1oZWFkLWNvbGxhcHNlIGxpIGEgaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmhlYWRlci1oZWFkLWNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjVweCl7XG4gICAgLmhlYWRlci1oZWFkLWNvbGxhcHNlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kZXN0aW5hdGlvbiBjb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjVweCkge1xuICAgIC5kZXN0aW5hdGlvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4uY2l0aWVzIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gICAgLmNpdGllcyB7XG4gICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjczMHB4KSB7XG4gICAgLmNpdGllcyB7XG4gICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxOXB4KSB7XG4gICAgLmNpdGllcyB7XG4gICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgfVxufVxuXG4uY2l0aWVzIGEge1xuICAgIGNvbG9yOiByZ2IoMTQsIDE2NSwgMTQpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYmVzdC1jaXRpZXMge1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uY2l0aWVzIC5jaXRpZXMtbmFtZSBsaSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxOSwgMjE4LCAyMTgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jaXRpZXMgLmNpdGllcy1uYW1lIHNwYW4gYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2l0aWVzIC5jaXRpZXMtbmFtZSBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJlc3QtY2l0aWVzIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYmVzdC1jaXRpZXMgLmNpdHktbmFtZSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNpdGllcy1uYW1lIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNpdGllcy1uYW1lIGEge1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiAgXG4uY2l0aWVzLW5hbWUgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2l0aWVzLW5hbWUgbGk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxOTksIDExKTtcbn1cblxuLmNpdGllcyAuY2l0aWVzLW5hbWUgbGk6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTQsIDExMiwgMTEyKTtcbn0gXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXRyaXAgdHlwZSBjb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4udHJpcC10eXBlcy1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDksIDI1MCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gICAgLnRyaXB0eXBlLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLnRyaXAtdHlwZXMtaGVhZCAsIC50cmlwLXR5cGVzLWhlYWQtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udHJpcC10eXBlcy1oZWFkIGg0IHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjVweCkge1xuICAgIC50cmlwLXR5cGVzLWhlYWQgaDQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLnRyaXAtdHlwZXMtaGVhZC1idXR0b24gaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDIxMSwgMTkpO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG4udHJpcC10eXBlcyAudHJpcC10eXBlcy1oZWFkIGlucHV0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDEwLCAxMzMsIDEwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE0LCAxMTIsIDExMik7XG59XG5cbi50cmlwdHlwZS1jb250ZW50IC50cmlwdHlwZS1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udHJpcHR5cGUtY29udGVudCAudHJpcHR5cGUtaXRlbSBpbWcge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi50cmlwdHlwZS1jb250ZW50IC50cmlwdHlwZS1pdGVtIHRhYmxlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLnRyaXB0eXBlLWNvbnRlbnQgLnRyaXB0eXBlLWl0ZW0gdGFibGUgdGgge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnRyaXB0eXBlLWNvbnRlbnQgLnRyaXB0eXBlLWl0ZW0gdGFibGUgdGQge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udHJpcHR5cGUtY29udGVudCAudHJpcHR5cGUtaXRlbSB0YWJsZSB0ZCBhIHtcbiAgICBjb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xufVxuXG4udHJpcHR5cGUtY29udGVudCAudHJpcHR5cGUtaXRlbSB0YWJsZSB0ZCBhOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50cmlwdHlwZS1jb250ZW50LWNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMjVweCkge1xuICAgIC50cmlwdHlwZS1jb250ZW50LWNvbGxhcHNlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4uZGVzdGluYXRpb25zLWNvbnRlbnQtY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gICAgLmRlc3RpbmF0aW9ucy1jb250ZW50LWNvbGxhcHNlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4udHJpcHR5cGUtY29udGVudC1jb2xsYXBzZSB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udHJpcHR5cGUtY29udGVudC1jb2xsYXBzZSBsaSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE0LCAyMTIsIDIxMik7XG59XG5cbi50cmlwdHlwZS1jb250ZW50LWNvbGxhcHNlIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnRyaXB0eXBlLWNvbnRlbnQtY29sbGFwc2UgbGkgYSBpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udHJpcHR5cGUtY29udGVudC1jb2xsYXBzZSBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMjExLCAxOSk7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udHJpcHR5cGUtY29udGVudC1jb2xsYXBzZS1jb250ZW50IHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmlwdHlwZS1jb250ZW50LWNvbGxhcHNlLWNvbnRlbnQgbGkge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNCwgMjEyLCAyMTIpO1xufVxuXG4udHJpcHR5cGUtY29udGVudC1jb2xsYXBzZS1jb250ZW50IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/navigation/navigation.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/navigation/navigation.component.ts ***!
    \************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppModulesNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/navigation/navigation.service */
    "./src/app/service/navigation/navigation.service.ts");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(cookieService, navService) {
        var _this4 = this;

        _classCallCheck(this, NavigationComponent);

        this.cookieService = cookieService;
        this.navService = navService;
        this.showNav = true;
        this.showLogin = true;
        this.showDestinations = false;
        this.showTripTypes = false;
        this.showLogged = false;
        this.loggedContent = true;
        this.showLoggedOptions = false;
        this.showCollapse = false;
        this.showTripTypesCollapse = false;
        this.showDestinationsCollapse = false;
        this.TripTypeChild = true;
        this.showTripTypesFirst = false;
        this.showTripTypesSeacond = false;
        this.showTripTypesThird = false;
        this.showTripTypesFourth = false;
        this.showAdmin = false;
        this.cityData = [];
        this.triptypeData = [];
        this.leaderData = [];

        this.mouseEnter = function (div) {
          if (_this4.showCollapse == false) {
            if (div == 'destination') {
              _this4.showDestinations = !_this4.showDestinations;
              _this4.showTripTypes = false;
            } else if (div == 'triptypes') {
              _this4.showTripTypes = !_this4.showTripTypes;
              _this4.showDestinations = false;
            } else if (div == 'logged') {
              _this4.showLoggedOptions = !_this4.showLoggedOptions;
            }
          }
        };

        this.mouseLeave = function (div) {
          if (_this4.showCollapse == false) {
            if (div == 'destination') {
              _this4.showDestinations = !_this4.showDestinations;
            } else if (div == 'triptypes') {
              _this4.showTripTypes = !_this4.showTripTypes;
            } else if (div == 'logged') {
              _this4.showLoggedOptions = !_this4.showLoggedOptions;
            }
          }
        };

        this.collapseClick = function (e) {
          if (e == 'collapse') {
            _this4.showCollapse = !_this4.showCollapse;
          } else if (e == 'destination') {
            _this4.showDestinationsCollapse = !_this4.showDestinationsCollapse;
            _this4.showTripTypesCollapse = false;
          } else if (e == 'triptypes') {
            _this4.showTripTypesCollapse = !_this4.showTripTypesCollapse;
            _this4.showDestinationsCollapse = false;
          } else if (e == 'close') {
            _this4.showCollapse = !_this4.showCollapse;
            _this4.showDestinationsCollapse = false;
            _this4.showTripTypesCollapse = false;
          } else if (e == 'logged') {
            _this4.showAdmin = !_this4.showAdmin;
          }
        };

        this.tripTypesClick = function (e) {
          if (e == 'first') {
            _this4.showTripTypesFirst = !_this4.showTripTypesFirst;
            _this4.TripTypeChild = !_this4.TripTypeChild;
          } else if (e == 'seacond') {
            _this4.showTripTypesSeacond = !_this4.showTripTypesSeacond;
            _this4.TripTypeChild = !_this4.TripTypeChild;
          } else if (e == 'third') {
            _this4.showTripTypesThird = !_this4.showTripTypesThird;
            _this4.TripTypeChild = !_this4.TripTypeChild;
          } else if (e == 'fourth') {
            _this4.showTripTypesFourth = !_this4.showTripTypesFourth;
            _this4.TripTypeChild = !_this4.TripTypeChild;
          }
        };

        this.getDestinationCity = function () {
          _this4.navService.getDestinationCity().subscribe(function (data) {
            _this4.cityData = Array.from(Object.keys(data['result']), function (k) {
              return data['result'][k];
            });
            console.log('cityData:', _this4.cityData);
          });
        };

        this.getTripType = function () {
          _this4.navService.getTripType().subscribe(function (data) {
            _this4.triptypeData = Array.from(Object.keys(data['result']), function (k) {
              return data['result'][k];
            });
            console.log('triptypeData:', _this4.triptypeData);
          });
        };
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.href = window.location.href;
          this.hrefPart = this.href.split('/');

          if (this.hrefPart[3] == 'login' || this.hrefPart[3] == 'register' || this.hrefPart[3] == 'reset-password') {
            this.showLogin = !this.showLogin;
            this.showNav = !this.showNav;
          }

          if (this.cookieService.get('username') !== '') {
            this.showLogin = false;
            this.showLogged = true;
          }

          this.getDestinationCity();
          this.getTripType();
        }
      }, {
        key: "clearCookie",
        value: function clearCookie() {
          this.cookieService.delete('username');
          window.location.reload();
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: src_app_service_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavigationComponent.prototype, "Logged", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.css */
      "./src/app/modules/navigation/navigation.component.css")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/service/apiMap/apiMap.json":
  /*!********************************************!*\
    !*** ./src/app/service/apiMap/apiMap.json ***!
    \********************************************/

  /*! exports provided: api, default */

  /***/
  function srcAppServiceApiMapApiMapJson(module) {
    module.exports = JSON.parse("{\"api\":{\"servicesApi\":{\"get\":{\"getService\":\"/api/services/\",\"getCity\":\"/api/services/city/\",\"getCountry\":\"/api/services/country/\",\"getDestination\":\"/api/services/destination/\",\"getDestinationCity\":\"/api/services/destination/city/\",\"getServiceImage\":\"/api/services/image/\",\"getServiceImageDetail\":\"/api/services/image/{id}/\",\"getLeader\":\"/api/services/leaders/\",\"getServicesList\":\"/api/services/list/\",\"getServicesDetail\":\"/api/services/list/{id}/\",\"getPossibilities\":\"/api/services/possibilities/\",\"getServiceType\":\"/api/services/service-type/\",\"getTripType\":\"/api/services/trip-type/\"}}}}");
    /***/
  },

  /***/
  "./src/app/service/destinations/destinations.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/service/destinations/destinations.service.ts ***!
    \**************************************************************/

  /*! exports provided: DestinationsService */

  /***/
  function srcAppServiceDestinationsDestinationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationsService", function () {
      return DestinationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _apiMap_apiMap_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../apiMap/apiMap.json */
    "./src/app/service/apiMap/apiMap.json");

    var _apiMap_apiMap_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../apiMap/apiMap.json */
    "./src/app/service/apiMap/apiMap.json", 1);

    var DestinationsService = /*#__PURE__*/function () {
      function DestinationsService(http) {
        _classCallCheck(this, DestinationsService);

        this.http = http;
        this.baseurl = 'http://195.248.241.73';
      }

      _createClass(DestinationsService, [{
        key: "getCity",
        value: function getCity() {
          this.apiUrl = _apiMap_apiMap_json__WEBPACK_IMPORTED_MODULE_3__.api.servicesApi.get.getCity;
          return this.http.get("".concat(this.baseurl).concat(this.apiUrl));
        }
      }]);

      return DestinationsService;
    }();

    DestinationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DestinationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DestinationsService);
    /***/
  },

  /***/
  "./src/app/service/navigation/navigation.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/service/navigation/navigation.service.ts ***!
    \**********************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppServiceNavigationNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _apiMap_apiMap_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../apiMap/apiMap.json */
    "./src/app/service/apiMap/apiMap.json");

    var _apiMap_apiMap_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../apiMap/apiMap.json */
    "./src/app/service/apiMap/apiMap.json", 1);

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(http) {
        _classCallCheck(this, NavigationService);

        this.http = http;
        this.baseurl = 'http://195.248.241.73';
      }

      _createClass(NavigationService, [{
        key: "getDestinationCity",
        value: function getDestinationCity() {
          this.apiUrl = _apiMap_apiMap_json__WEBPACK_IMPORTED_MODULE_3__.api.servicesApi.get.getDestinationCity;
          return this.http.get("".concat(this.baseurl).concat(this.apiUrl));
        }
      }, {
        key: "getTripType",
        value: function getTripType() {
          this.apiUrl = _apiMap_apiMap_json__WEBPACK_IMPORTED_MODULE_3__.api.servicesApi.get.getTripType;
          return this.http.get("".concat(this.baseurl).concat(this.apiUrl));
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavigationService);
    /***/
  },

  /***/
  "./src/app/tours/tours-detail/tours-detail.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/tours/tours-detail/tours-detail.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToursToursDetailToursDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdXJzL3RvdXJzLWRldGFpbC90b3Vycy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tours/tours-detail/tours-detail.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/tours/tours-detail/tours-detail.component.ts ***!
    \**************************************************************/

  /*! exports provided: ToursDetailComponent */

  /***/
  function srcAppToursToursDetailToursDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToursDetailComponent", function () {
      return ToursDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToursDetailComponent = /*#__PURE__*/function () {
      function ToursDetailComponent() {
        _classCallCheck(this, ToursDetailComponent);
      }

      _createClass(ToursDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToursDetailComponent;
    }();

    ToursDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tours-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tours-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tours/tours-detail/tours-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tours-detail.component.css */
      "./src/app/tours/tours-detail/tours-detail.component.css")).default]
    })], ToursDetailComponent);
    /***/
  },

  /***/
  "./src/app/tours/tours/tours.component.css":
  /*!*************************************************!*\
    !*** ./src/app/tours/tours/tours.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToursToursToursComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter {\n  position: relative;\n  background-image: url('back-ground.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 350px;\n}\n\n@media screen and (max-width:1125px) {\n  .filter {\n      height: 500px;\n  }\n}\n\n.hotel-box {\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 7%;\n}\n\n@media screen and (max-width:576px) {\n  .hotel-box {\n    width: 100%;\n    margin-left: 10%;\n  }\n}\n\n.hotel-box h6 {\n  width: 100%;\n  text-align: center;\n  color: white;\n}\n\n.hotel-content {\n  background-color: white;\n}\n\n.hotel-content h4 {\n  text-align: center;\n  margin-top: 3%;\n}\n\n.hotel-content p {\n  text-align: center;\n  color: 15px;\n}\n\n.design-trip-form {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-left: 7%;\n}\n\n.form-inline {  \n  display: -webkit-box;  \n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form-inline label {\n  margin: 5px 10px 5px 0;\n}\n\n.form-inline input {\n  width: 30%;\n  padding: 8px 10px 8px 10px;\n  margin-right: 10px;\n  border: 1px solid rgb(204, 203, 203);\n  border-radius: 5px;\n}\n\n@media screen and (max-width:1125px) {\n  .form-inline input {\n    width: 100%;\n  }\n}\n\n.form-inline select {\n    width: 30%;\n    padding-left: 2%;\n    margin-right: 10px;\n}\n\n@media screen and (max-width:1125px) {\n    .form-inline select {\n        width: 100%;\n    }\n}\n\n.form-inline button {\n  padding: 10px 10px;\n  background-color: dodgerblue;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  height: 39px;\n}\n\n@media screen and (max-width:1125px) {\n    .form-inline button {\n      margin-left: 35%;\n      margin-top: 5%;\n    }\n}\n\n@media screen and (max-width:991px){\n  .form-inline button {\n    width:60%;\n    margin-left: 15%;\n  }\n}\n\n@media screen and (max-width:576px) {\n  .form-inline button {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.form-inline button:hover {\n  background-color: royalblue;\n}\n\n@media (max-width: 800px) {\n  .form-inline input {\n    margin: 10px 0;\n  }\n  \n  .form-inline {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n  }\n}\n\n.hotels .title {\n  margin-top: 7%;\n}\n\n.hotels .title .head h1 {\n  text-align: center;\n  font-weight: 800;\n}\n\n.hotels .title .desc p{\n  text-align: center;\n  font-weight: 500;\n}\n\n.hotels .list {\n  width: 90%;\n  margin-left: 5%;\n}\n\n.hotels .list .content {\n  position: relative;\n  padding: 20px;\n  width: 100%;\n}\n\n.hotels .list .content .image img {\n  width: 100%;\n  height: 250px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.hotels .list .content .desc {\n  background-color: white;\n  border-left: 1px solid rgb(204, 203, 203);\n  border-right: 1px solid rgb(204, 203, 203);\n  border-bottom: 1px solid rgb(204, 203, 203);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10%;\n}\n\n.hotels .list .content .price {\n  position: absolute;\n  top:40px;\n  left: 40px;\n  background-color: rgb(115, 236, 245);\n  padding: 10px 30px 10px 30px;\n  border-radius: 30px;\n}\n\n.hotels .list .content .price a {\n  color : black;\n}\n\n.hotels .list .content .date {\n  float: right;\n}\n\n.hotels .header h1{\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  font-weight: 600;\n}\n\n.hotels .list .more-hotels{\n  width: 100%;\n  text-align: center;\n  margin-right: 80px;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.hotels .list .more-hotels button {\n  background-color: rgb(253, 186, 0);\n  border: none;\n  padding: 15px 25px 15px 25px;\n  border-radius: 5px;\n}\n\n.hotel-box .list .more-hotels button:hover {\n  background-color: #0297c9;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cnMvdG91cnMvdG91cnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0U7TUFDSSxhQUFhO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0lBQ0k7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztJQUNoQjtBQUNKOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90b3Vycy90b3Vycy90b3Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrLWdyb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gIC5maWx0ZXIge1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuXG4uaG90ZWwtYm94IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgLmhvdGVsLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxufVxuXG4uaG90ZWwtYm94IGg2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaG90ZWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaG90ZWwtY29udGVudCBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5ob3RlbC1jb250ZW50IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAxNXB4O1xufVxuXG4uZGVzaWduLXRyaXAtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNyU7XG59XG5cbi5mb3JtLWlubGluZSB7ICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0taW5saW5lIGxhYmVsIHtcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMDtcbn1cblxuLmZvcm0taW5saW5lIGlucHV0IHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogOHB4IDEwcHggOHB4IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjAzLCAyMDMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gIC5mb3JtLWlubGluZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvcm0taW5saW5lIHNlbGVjdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTI1cHgpIHtcbiAgICAuZm9ybS1pbmxpbmUgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uZm9ybS1pbmxpbmUgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDM5cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEyNXB4KSB7XG4gICAgLmZvcm0taW5saW5lIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcbiAgLmZvcm0taW5saW5lIGJ1dHRvbiB7XG4gICAgd2lkdGg6NjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAuZm9ybS1pbmxpbmUgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uZm9ybS1pbmxpbmUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmZvcm0taW5saW5lIGlucHV0IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBcbiAgLmZvcm0taW5saW5lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG59XG5cbi5ob3RlbHMgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5ob3RlbHMgLnRpdGxlIC5oZWFkIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uaG90ZWxzIC50aXRsZSAuZGVzYyBwe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ob3RlbHMgLmxpc3Qge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG90ZWxzIC5saXN0IC5jb250ZW50IC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQgLmRlc2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDMsIDIwMyk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDQsIDIwMywgMjAzKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5ob3RlbHMgLmxpc3QgLmNvbnRlbnQgLnByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6NDBweDtcbiAgbGVmdDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNSwgMjM2LCAyNDUpO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uaG90ZWxzIC5saXN0IC5jb250ZW50IC5wcmljZSBhIHtcbiAgY29sb3IgOiBibGFjaztcbn1cblxuLmhvdGVscyAubGlzdCAuY29udGVudCAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmhvdGVscyAuaGVhZGVyIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdGVscyAubGlzdCAubW9yZS1ob3RlbHN7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaG90ZWxzIC5saXN0IC5tb3JlLWhvdGVscyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxODYsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhvdGVsLWJveCAubGlzdCAubW9yZS1ob3RlbHMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyOTdjOTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tours/tours/tours.component.ts":
  /*!************************************************!*\
    !*** ./src/app/tours/tours/tours.component.ts ***!
    \************************************************/

  /*! exports provided: ToursComponent */

  /***/
  function srcAppToursToursToursComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToursComponent", function () {
      return ToursComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToursComponent = /*#__PURE__*/function () {
      function ToursComponent() {
        var _this5 = this;

        _classCallCheck(this, ToursComponent);

        this.showOthers = false;
        this.lessMore = 'More';

        this.showOther = function () {
          if (_this5.showOthers == false) {
            _this5.lessMore = 'Less';
          } else {
            _this5.lessMore = 'More';
          }

          _this5.showOthers = !_this5.showOthers;
        };
      }

      _createClass(ToursComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToursComponent;
    }();

    ToursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tours',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tours.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tours/tours/tours.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tours.component.css */
      "./src/app/tours/tours/tours.component.css")).default]
    })], ToursComponent);
    /***/
  },

  /***/
  "./src/app/trip-types/trip-type-detail/trip-type-detail.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/trip-types/trip-type-detail/trip-type-detail.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTripTypesTripTypeDetailTripTypeDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-image {\n    position: relative;\n    background-image: url('back-ground.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 350px;\n}\n\n.header h1 {\n    color: white;\n    text-align: center;\n    padding-top: 10%;\n    font-weight: 600;\n    font-size: 50px;\n}\n\n.type-box {\n    margin-top: 7%;\n}\n\n.type-box .leaders h3 {\n    font-weight: 600;\n    padding-bottom: 5%;\n}\n\n.type-box .leaders .desc {\n    background-color: white;\n    margin-bottom: 5%;\n    padding: 5px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-bottom: 1px solid rgb(212, 212, 212);\n    border-left: 1px solid rgb(212, 212, 212);\n    border-right: 1px solid rgb(212, 212, 212);\n}\n\n.type-box .leaders .other-leader {\n    background-color: #0297c9;\n    text-align: center;\n    padding: 5%;\n}\n\n.type-box .leaders .other-leader a {\n    color: white;\n    font-weight: 600;\n}\n\n.type-box .items .tours {\n    margin-bottom: 25%;\n}\n\n.type-box .items .tours .header h3 {\n    font-weight: 600;\n    padding-bottom: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC10eXBlcy90cmlwLXR5cGUtZGV0YWlsL3RyaXAtdHlwZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix3Q0FBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDJDQUEyQztJQUMzQyx5Q0FBeUM7SUFDekMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtdHlwZXMvdHJpcC10eXBlLWRldGFpbC90cmlwLXR5cGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrLWdyb3VuZC5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLmhlYWRlciBoMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4udHlwZS1ib3gge1xuICAgIG1hcmdpbi10b3A6IDclO1xufVxuXG4udHlwZS1ib3ggLmxlYWRlcnMgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4udHlwZS1ib3ggLmxlYWRlcnMgLmRlc2Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcbn1cblxuLnR5cGUtYm94IC5sZWFkZXJzIC5vdGhlci1sZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjk3Yzk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4udHlwZS1ib3ggLmxlYWRlcnMgLm90aGVyLWxlYWRlciBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnR5cGUtYm94IC5pdGVtcyAudG91cnMge1xuICAgIG1hcmdpbi1ib3R0b206IDI1JTtcbn1cblxuLnR5cGUtYm94IC5pdGVtcyAudG91cnMgLmhlYWRlciBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/trip-types/trip-type-detail/trip-type-detail.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/trip-types/trip-type-detail/trip-type-detail.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TripTypeDetailComponent */

  /***/
  function srcAppTripTypesTripTypeDetailTripTypeDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripTypeDetailComponent", function () {
      return TripTypeDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TripTypeDetailComponent = /*#__PURE__*/function () {
      function TripTypeDetailComponent() {
        _classCallCheck(this, TripTypeDetailComponent);
      }

      _createClass(TripTypeDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TripTypeDetailComponent;
    }();

    TripTypeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trip-type-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./trip-type-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-types/trip-type-detail/trip-type-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./trip-type-detail.component.css */
      "./src/app/trip-types/trip-type-detail/trip-type-detail.component.css")).default]
    })], TripTypeDetailComponent);
    /***/
  },

  /***/
  "./src/app/trip-types/trip-types/trip-types.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/trip-types/trip-types/trip-types.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTripTypesTripTypesTripTypesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chose-box-container {\n    position: relative;\n    background-image: url('back-ground.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 400px;\n    width: 100%;\n}\n\n@media screen and (max-width:576px) {\n    .chose-box-container {\n        height: 900px;\n    }\n}\n\n.chose-box {\n    width: 90%;\n    margin-top: 7%;\n    margin-left: 5%;\n}\n\n@media screen and (max-width:991px){\n    .chose-box {\n        margin-left: 10%;\n    }\n}\n\n@media screen and (max-width:576px) {\n    .chose-box {\n        margin-left: 20%;\n    }\n}\n\n.chose-box h2 {\n    color: white;\n    width: 100%;\n    text-align: center;\n}\n\n@media screen and (max-width:768px){\n    .chose-box h2 {\n        margin-left: 10%;\n    }\n}\n\n@media screen and (max-width:576px) {\n    .chose-box h2 {\n        margin-left: -3%;\n    }\n}\n\n.chose-box .date-box h4 {\n    color: white;\n}\n\n@media screen and (max-width:991px) {\n    .chose-box .date-box h4 {\n        margin-top: 5%;\n    }\n}\n\n@media screen and (max-width:576px) {\n    .chose-box .date-box h4 {\n        margin-top: 5%;\n    }\n}\n\n.chose-box .date-box .month-box {\n    background-color: white;\n    width: 95%;\n}\n\n.chose-box .date-box .month-box div {\n    text-align: center;\n    padding: 10px 0 10px 0;\n}\n\n@media screen and (max-width:576px) {\n    .chose-box .date-box .month-box div {\n        width: 50%;\n        padding: 10px 0 10px 0;\n    }\n}\n\n.chose-box .date-box .month-box a {\n    color: black;\n}\n\n.chose-box .date-box .month-box a:hover {\n    color: gray;\n}\n\n.chose-box .type-box h4 {\n    color: white;\n}\n\n@media screen and (max-width:576px) {\n    .chose-box .type-box h4 {\n        margin-top: 10%;\n    }\n}\n\n.chose-box .type-box .culture-box {\n    background-color: white;\n    width: 95%;\n    padding: 6px 0 6px 0;\n}\n\n.chose-box .type-box .culture-box div {\n    margin-left: 3%;\n    margin-top: 2%;\n    text-align: center;\n}\n\n.chose-box .type-box .culture-box div i {\n    color: black;\n    font-size: 30px;\n}\n\n.chose-box .type-box .culture-box div i:hover {\n    color: rgb(97, 96, 96);\n}\n\n.popular-trip {\n    width: 80%;\n    text-align: center;\n}\n\n.popular-trip h3 {\n    margin-top: 5%;\n    width: 100%;\n}\n\n@media screen and (max-width:991px) {\n    .popular-trip h3 {\n        margin-left: 10%;\n    }\n}\n\n.popular-trip-box {\n    width: 80%;\n    margin-left: 10%;\n}\n\n@media screen and (max-width:991px) {\n    .popular-trip-box {\n        margin-left: 20%;\n    }\n}\n\n.popular-trip .popular-trip-item {\n    margin-top: 10%;\n    margin-bottom: 5%;\n}\n\n.popular-trip-item span {\n    width: 20%;\n}\n\n.popular-trip-item img {\n    width: 100%;\n    height: 200px;  \n}\n\n.popular-trip-item p {\n    font-weight: 600;\n    font-size: 18px;\n    color: rgb(54, 53, 53);\n    text-align: center;\n    padding-top: 10%;\n}\n\n.popular-trip-item .desc {\n    background-color: white;\n    width: 100%;\n    padding-bottom: 10%;\n    margin-bottom: 30px;\n    border-left: 1px solid rgb(216, 213, 213);\n    border-right: 1px solid rgb(216, 213, 213);\n    border-bottom: 1px solid rgb(216, 213, 213);\n}\n\n.describtione  {\n    position: relative;\n    background-image: url('back-ground.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 700px;\n    width: 100%;\n}\n\n@media screen and (max-width:576px) {\n    .describtione {\n        height: 1100px;\n    }\n}\n\n.describtione .desc-content-box {\n    position: absolute;\n    background-color: white;\n    width: 70%;\n    padding-bottom: 3%;\n    left: 14%;\n    top: 20%;\n}\n\n.describtione .desc-content-box h3 {\n    text-align: center;\n    margin-top: 5%;\n}\n\n.describtione .desc-content-box p {\n    text-align: left;\n    width: 80%;\n    color: black;\n    margin-left: 10%;\n    font-size: 14px;\n}\n\n.other-popular-trip {\n    width: 80%;\n}\n\n.other-popular-trip h3 {\n    margin-left: 40%;\n    margin-top: 5%;\n}\n\n.other-popular-trip-box {\n    width: 80%;\n    margin-left: 10%;\n}\n\n@media screen and (max-width:991px) {\n    .other-popular-trip-box {\n        margin-left: 20%;\n    }\n}\n\n.other-popular-trip .other-popular-trip-item {\n    margin-top: 10%;\n    margin-bottom: 5%;\n}\n\n.other-popular-trip-item span {\n    width: 20%;\n}\n\n.other-popular-trip-item img {\n    width: 100%;\n    height: 200px;  \n}\n\n.other-popular-trip-item p {\n    font-weight: 600;\n    font-size: 18px;\n    color: rgb(54, 53, 53);\n    text-align: center;\n    padding-top: 10%;\n}\n\n.other-popular-trip-item .other-desc {\n    background-color: white;\n    width: 100%;\n    padding-bottom: 10%;\n    margin-bottom: 30px;\n    border-left: 1px solid rgb(216, 213, 213);\n    border-right: 1px solid rgb(216, 213, 213);\n    border-bottom: 1px solid rgb(216, 213, 213);\n}\n\n.choose-help {\n    background-color: white;\n    width: 70%;\n    margin-left: 15%;\n    margin-bottom: 10%;\n    border: 1px solid rgb(216, 213, 213);\n}\n\n.choose-help h3 {\n    font-size: 23px;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.choose-help h6 {\n    padding-left: 30px;\n    color: rgb(85, 84, 84);\n    font-weight: 600;\n}\n\n.choose-help p {\n    padding: 30px;\n    color: rgb(43, 42, 42);\n    font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC10eXBlcy90cmlwLXR5cGVzL3RyaXAtdHlwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix3Q0FBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFJQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3Q0FBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC90cmlwLXR5cGVzL3RyaXAtdHlwZXMvdHJpcC10eXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob3NlLWJveC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2stZ3JvdW5kLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gICAgLmNob3NlLWJveC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDkwMHB4O1xuICAgIH1cbn1cblxuLmNob3NlLWJveCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiA3JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xuICAgIC5jaG9zZS1ib3gge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAgIC5jaG9zZS1ib3gge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIH1cbn1cblxuLmNob3NlLWJveCBoMiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgLmNob3NlLWJveCBoMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gICAgLmNob3NlLWJveCBoMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMyU7XG4gICAgfVxufVxuXG4uY2hvc2UtYm94IC5kYXRlLWJveCBoNCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLmNob3NlLWJveCAuZGF0ZS1ib3ggaDQge1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgICAuY2hvc2UtYm94IC5kYXRlLWJveCBoNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIH1cbn1cblxuLmNob3NlLWJveCAuZGF0ZS1ib3ggLm1vbnRoLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDk1JTtcbn1cblxuLmNob3NlLWJveCAuZGF0ZS1ib3ggLm1vbnRoLWJveCBkaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XG4gICAgLmNob3NlLWJveCAuZGF0ZS1ib3ggLm1vbnRoLWJveCBkaXYge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuICAgIH1cbn1cblxuLmNob3NlLWJveCAuZGF0ZS1ib3ggLm1vbnRoLWJveCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jaG9zZS1ib3ggLmRhdGUtYm94IC5tb250aC1ib3ggYTpob3ZlciB7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5jaG9zZS1ib3ggLnR5cGUtYm94IGg0IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHtcbiAgICAuY2hvc2UtYm94IC50eXBlLWJveCBoNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG59XG5cbi5jaG9zZS1ib3ggLnR5cGUtYm94IC5jdWx0dXJlLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiA2cHggMCA2cHggMDtcbn1cblxuLmNob3NlLWJveCAudHlwZS1ib3ggLmN1bHR1cmUtYm94IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNob3NlLWJveCAudHlwZS1ib3ggLmN1bHR1cmUtYm94IGRpdiBpIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY2hvc2UtYm94IC50eXBlLWJveCAuY3VsdHVyZS1ib3ggZGl2IGk6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoOTcsIDk2LCA5Nik7XG59XG5cblxuXG4ucG9wdWxhci10cmlwIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcHVsYXItdHJpcCBoMyB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAucG9wdWxhci10cmlwIGgzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB9XG59XG5cbi5wb3B1bGFyLXRyaXAtYm94IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAucG9wdWxhci10cmlwLWJveCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgfVxufVxuXG4ucG9wdWxhci10cmlwIC5wb3B1bGFyLXRyaXAtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ucG9wdWxhci10cmlwLWl0ZW0gc3BhbiB7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuLnBvcHVsYXItdHJpcC1pdGVtIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDsgIFxufVxuXG4ucG9wdWxhci10cmlwLWl0ZW0gcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHJnYig1NCwgNTMsIDUzKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnBvcHVsYXItdHJpcC1pdGVtIC5kZXNjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTMsIDIxMyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIxNiwgMjEzLCAyMTMpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE2LCAyMTMsIDIxMyk7XG59XG5cbi5kZXNjcmlidGlvbmUgIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrLWdyb3VuZC5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAgIC5kZXNjcmlidGlvbmUge1xuICAgICAgICBoZWlnaHQ6IDExMDBweDtcbiAgICB9XG59XG5cbi5kZXNjcmlidGlvbmUgLmRlc2MtY29udGVudC1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgICBsZWZ0OiAxNCU7XG4gICAgdG9wOiAyMCU7XG59XG5cbi5kZXNjcmlidGlvbmUgLmRlc2MtY29udGVudC1ib3ggaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmRlc2NyaWJ0aW9uZSAuZGVzYy1jb250ZW50LWJveCBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ub3RoZXItcG9wdWxhci10cmlwIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4ub3RoZXItcG9wdWxhci10cmlwIGgzIHtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ub3RoZXItcG9wdWxhci10cmlwLWJveCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLm90aGVyLXBvcHVsYXItdHJpcC1ib3gge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIH1cbn1cblxuLm90aGVyLXBvcHVsYXItdHJpcCAub3RoZXItcG9wdWxhci10cmlwLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLm90aGVyLXBvcHVsYXItdHJpcC1pdGVtIHNwYW4ge1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5vdGhlci1wb3B1bGFyLXRyaXAtaXRlbSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7ICBcbn1cblxuLm90aGVyLXBvcHVsYXItdHJpcC1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZ2IoNTQsIDUzLCA1Myk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5vdGhlci1wb3B1bGFyLXRyaXAtaXRlbSAub3RoZXItZGVzYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIxNiwgMjEzLCAyMTMpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMTYsIDIxMywgMjEzKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNiwgMjEzLCAyMTMpO1xufVxuXG4uY2hvb3NlLWhlbHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjEzLCAyMTMpO1xufVxuXG4uY2hvb3NlLWhlbHAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5jaG9vc2UtaGVscCBoNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiByZ2IoODUsIDg0LCA4NCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNob29zZS1oZWxwIHAge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgY29sb3I6IHJnYig0MywgNDIsIDQyKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/trip-types/trip-types/trip-types.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/trip-types/trip-types/trip-types.component.ts ***!
    \***************************************************************/

  /*! exports provided: TripTypesComponent */

  /***/
  function srcAppTripTypesTripTypesTripTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripTypesComponent", function () {
      return TripTypesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TripTypesComponent = /*#__PURE__*/function () {
      function TripTypesComponent() {
        _classCallCheck(this, TripTypesComponent);
      }

      _createClass(TripTypesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TripTypesComponent;
    }();

    TripTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trip-types',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./trip-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/trip-types/trip-types/trip-types.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./trip-types.component.css */
      "./src/app/trip-types/trip-types/trip-types.component.css")).default]
    })], TripTypesComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/aqakhandan/Programming/angular/main-project/comoniran/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map