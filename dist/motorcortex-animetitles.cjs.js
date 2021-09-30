'use strict';

var motorcortex = require('@donkeyclip/motorcortex');
var AnimeDefinition = require('@donkeyclip/motorcortex-anime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var AnimeDefinition__default = /*#__PURE__*/_interopDefaultLegacy(AnimeDefinition);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Anime$9 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var RotatedLine = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RotatedLine, _HTMLClip);

  var _super = _createSuper(RotatedLine);

  function RotatedLine() {
    _classCallCheck(this, RotatedLine);

    return _super.apply(this, arguments);
  }

  _createClass(RotatedLine, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"text--container text--container-left\">\n          <div class=\"text-left\">".concat(this.attrs.title, "</div>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"text--container text--container-right\">\n          <div class=\"text-right text-right1\">").concat(this.attrs.subTitle1, "</div>\n          <div class=\"text-right text-right2\">").concat(this.attrs.subTitle2, "</div>\n          <div class=\"text-right text-right3\">").concat(this.attrs.subTitle3, "</div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize("1.5rem", "1rem", "0.2rem", "5rem", 3);
          break;

        case "M":
          this.size = this.generateSize("2rem", "1.2rem", "0.3rem", "7rem", 4);
          break;

        case "L":
          this.size = this.generateSize("2.5rem", "1.5rem", "0.3rem", "9rem", 4);
          break;

        case "XL":
          this.size = this.generateSize("3rem", "2rem", "0.3rem", "11rem", 4);
          break;
      }

      return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transform: rotate(90deg);\n        white-space: nowrap;\n        overflow: hidden;\n        width : 100%;\n        width : ".concat(this.attrs.width + this.size.lineWidth, "px;\n        color : ").concat(this.attrs.textColor, ";\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .line {\n        width: 3px;\n        background: ").concat(this.attrs.lineColor, " ;\n        height: 0rem;\n      }\n      \n      .text-left {\n        position: relative;\n        right : -100%;\n        font-size: ").concat(this.size.fontSizeLeft, ";\n        text-align: right;\n      }\n      \n      .text-right {\n        position: relative;\n        right: 100%;\n        font-size: ").concat(this.size.fontSizeRigth, ";\n      }\n      \n      .text--container {\n        white-space: nowrap;\n        overflow: hidden;\n        position: relative;\n        width :").concat(this.attrs.width / 2, "px;\n      } \n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(fontSizeLeft, fontSizeRigth, lineWidth, lineHeight, gap) {
      return {
        fontSizeLeft: fontSizeLeft,
        fontSizeRigth: fontSizeRigth,
        lineWidth: lineWidth,
        lineHeight: lineHeight,
        gap: gap
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var rotateAminmeEnd = new Anime$9.Anime({
        animatedAttrs: {
          transform: {
            rotate: "0deg"
          }
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".wrapper",
        easing: "easeInOutQuart"
      });
      var widthLIne = new Anime$9.Anime({
        animatedAttrs: {
          height: this.size.lineHeight
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line",
        easing: "easeInOutQuart"
      });
      var leftTextAnimate = new Anime$9.Anime({
        animatedAttrs: {
          right: "".concat(this.size.gap, "%")
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".text-left",
        easing: "easeInOutQuart"
      });

      for (var i = 1; i <= 3; i++) {
        var rightTextAnimate = new Anime$9.Anime({
          animatedAttrs: {
            right: "-".concat(this.size.gap, "%")
          },
          attrs: {}
        }, {
          duration: 900 * i,
          selector: ".text-right" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(rightTextAnimate, 1500);
      }

      var rightTextAnimateIn = new Anime$9.Anime({
        animatedAttrs: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".text-right",
        easing: "easeOutExpo"
      });
      var leftTextAnimateIn = new Anime$9.Anime({
        animatedAttrs: {
          right: "-100%"
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".text-left",
        easing: "easeOutExpo"
      });
      var rotateAminmeStartOut = new Anime$9.Anime({
        animatedAttrs: {
          transform: {
            rotate: "90deg"
          }
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".wrapper",
        easing: "easeInOutQuart"
      });
      var widthLIneOut = new Anime$9.Anime({
        animatedAttrs: {
          height: "0rem"
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line",
        easing: "easeInOutQuart"
      });
      var delayEnd = this.attrs.delayEnd || 0;
      this.addIncident(widthLIne, 0);
      this.addIncident(rotateAminmeEnd, 450);
      this.addIncident(leftTextAnimate, 900);

      if (!this.attrs.stopOnLast) {
        this.addIncident(rightTextAnimateIn, 4200 + delayEnd);
        this.addIncident(leftTextAnimateIn, 4200 + delayEnd);
        this.addIncident(rotateAminmeStartOut, 5100 + delayEnd);
        this.addIncident(widthLIneOut, 5550 + delayEnd);
      }
    }
  }]);

  return RotatedLine;
}(motorcortex.HTMLClip);

var Anime$8 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var RolingText = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RolingText, _HTMLClip);

  var _super = _createSuper(RolingText);

  function RolingText() {
    _classCallCheck(this, RolingText);

    return _super.apply(this, arguments);
  }

  _createClass(RolingText, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"line\"></div>\n        <div class=\"textClip\"> \n          <span>".concat(this.attrs.subTitle1, "</span>\n          <span>").concat(this.attrs.subTitle2, "</span>\n          <span>").concat(this.attrs.subTitle3, "</span>\n        </div>\n      </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize(21, "-21px", "31px", 0.5, "-42px");
          break;

        case "M":
          this.size = this.generateSize(28, "-28px", "38px", 1, "-56px");
          break;

        case "L":
          this.size = this.generateSize(35, "-35px", "45px", 1.5, "-70px");
          break;

        case "XL":
          this.size = this.generateSize(42, "-42px", "52px", 2, "-84px");
          break;

        case "XXL":
          this.size = this.generateSize(49, "-49px", "59px", 2, "-98px");
          break;

        case "XXXL":
          this.size = this.generateSize(70, "-70px", "80px", 2, "-140px", 86);
          break;
      }

      return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        height: ".concat(this.size.lineHeight, ";\n        width : ").concat(this.attrs.width, "px;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n    \n      .line{\n        position: relative; \n        height: 0;\n        width: 3px;\n        justify-content: center;\n        background: ").concat(this.attrs.lineColor, " ;\n        margin-right: ").concat(this.size.gap, "rem;\n      \n      }\n      \n      .textClip{\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        font-size: ").concat(this.size.fontSizeLeft, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        height: ").concat(this.size.fontSizeLeft, "px;\n      }\n    \n      .textClip span{\n        color : ").concat(this.attrs.textColor, ";\n        position: relative;\n        left : -").concat(this.attrs.width / 2, "px;\n        width : 100%;\n        height: ").concat(this.size.fontSizeLeft, "px;\n        align-items: center;\n        display: flex;\n      }\n  ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(fontSizeLeft, topMove, lineHeight, gap, topMove2) {
      return {
        fontSizeLeft: fontSizeLeft,
        topMove: topMove,
        lineHeight: lineHeight,
        gap: gap,
        topMove2: topMove2
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var animeLineHeight = new Anime$8.Anime({
        animatedAttrs: {
          height: this.size.lineHeight
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line"
      });
      var animeTextLeft = new Anime$8.Anime({
        animatedAttrs: {
          left: "0px"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".textClip span"
      });
      var animeTextTop = new Anime$8.Anime({
        animatedAttrs: {
          top: this.size.topMove
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".textClip span"
      });
      var animeTextTopNext = new Anime$8.Anime({
        animatedAttrs: {
          top: this.size.topMove2
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".textClip span"
      });
      var animeTextLeftBack = new Anime$8.Anime({
        animatedAttrs: {
          left: "-".concat(this.attrs.width / 2, "px")
        },
        attrs: {}
      }, {
        duration: 900,
        selector: ".textClip span"
      });
      var animeLineHeightBack = new Anime$8.Anime({
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      }, {
        duration: 450,
        selector: ".line"
      });
      this.addIncident(animeLineHeight, 0);
      this.addIncident(animeTextLeft, 450);
      this.addIncident(animeTextTop, 2250);
      this.addIncident(animeTextTopNext, 3450);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(animeTextLeftBack, 4500 + delayEnd);
        this.addIncident(animeLineHeightBack, 5550 + delayEnd);
      }
    }
  }]);

  return RolingText;
}(motorcortex.HTMLClip);

var Anime$7 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var SvgBorder = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SvgBorder, _HTMLClip);

  var _super = _createSuper(SvgBorder);

  function SvgBorder() {
    _classCallCheck(this, SvgBorder);

    return _super.apply(this, arguments);
  }

  _createClass(SvgBorder, [{
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize(600, 70, "2rem", "1rem", 130, 50, 17, 50);
          break;

        case "M":
          this.size = this.generateSize(700, 90, "3rem", "2rem", 230, 50, 34, 70);
          break;

        case "L":
          this.size = this.generateSize(1000, 110, "3.5rem", "2.5rem", 250, 55, 45, 80);
          break;
      }

      return "\n      <div class=\"svg-wrapper\">\n        <svg height=\"".concat(this.size.borderHeight, "\" width=\"").concat(this.size.borderWidth, "\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect class=\"shape2\" height=\"").concat(this.size.borderHeight, "\" width=\"").concat(this.size.borderWidth, "\" />\n        </svg>\n        <div class=\"sub--container\">\n          <div class=\"sub\">").concat(this.attrs.subTitle, "</div>\n        </div>\n        <div class=\"titleContainer\">\n          <div class=\"text\">").concat(this.attrs.title, "</div>\n        </div>\n        <div class=\"sloganContainer\">\n          <div class=\"slogan\">").concat(this.attrs.slogan, "</div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top :10px;\n        height: 100%;\n        color:  ".concat(this.attrs.textColor, ";\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 6000;\n        stroke-width: 5px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.lineColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: -6000;\n      }\n      \n      \n      .text {\n        font-size: ").concat(this.size.fontSizeTitle, ";\n        letter-spacing: 8px;\n        position: relative;\n        top: ").concat(this.size.titleTop, "px;\n      }\n      \n      .sub--container {\n        position: absolute;\n        white-space: nowrap;\n        overflow: hidden;\n        left: 20px;\n        top: -7%;\n      }\n\n      .sloganContainer {\n        position: relative;\n        top: -30px;\n        left: 45%;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 150px;\n      }\n\n      .titleContainer{\n        position: relative;\n        top: -").concat(this.size.titleContainerTop, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        width: ").concat(this.size.borderWidth, "px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      \n      .sub{\n        position: relative;\n        top: ").concat(this.size.subTop, "px;\n        font-size : ").concat(this.size.fontSizeSub, ";\n      }\n      \n      .slogan{\n        position: relative;\n        top: -").concat(this.size.subTop, "px;\n        font-size : ").concat(this.size.fontSizeSub, ";\n      }\n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(borderWidth, borderHeight, fontSizeTitle, fontSizeSub, subGap, titleTop, subTop, titleContainerTop) {
      return {
        borderWidth: borderWidth,
        borderHeight: borderHeight,
        fontSizeTitle: fontSizeTitle,
        fontSizeSub: fontSizeSub,
        subGap: subGap,
        titleTop: titleTop,
        subTop: subTop,
        titleContainerTop: titleContainerTop
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var delayEnd = this.attrs.delayEnd || 0;
      var borderAnimete = new Anime$7.Anime({
        animatedAttrs: {
          strokeDashoffset: " -".concat(this.size.subGap, "px")
        },
        attrs: {}
      }, {
        duration: 1400,
        selector: ".shape2",
        easing: "easeInOutQuart"
      });
      var titleAnimete = new Anime$7.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".text"
      });
      var subAnimate = new Anime$7.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimate = new Anime$7.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".slogan",
        easing: "easeInOutQuart"
      });
      var borderAnimeteLeft = new Anime$7.Anime({
        animatedAttrs: {
          strokeDashoffset: "-6000px"
        },
        attrs: {}
      }, {
        duration: 1200,
        selector: ".shape2"
      });
      var titleAnimeteLeft = new Anime$7.Anime({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".text"
      });
      var subAnimateLeft = new Anime$7.Anime({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimateLeft = new Anime$7.Anime({
        animatedAttrs: {
          left: "150px"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".slogan",
        easing: "easeInOutQuart"
      });
      this.addIncident(borderAnimete, 0);
      this.addIncident(titleAnimete, 600);
      this.addIncident(subAnimate, 1200);
      this.addIncident(sloganAnimate, 1200);
      var grupMc = new motorcortex.Group();
      grupMc.addIncident(borderAnimeteLeft, 800);
      grupMc.addIncident(titleAnimeteLeft, 400);
      grupMc.addIncident(subAnimateLeft, 400);
      grupMc.addIncident(sloganAnimateLeft, 400);

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, 3000 + delayEnd);
      }
    }
  }]);

  return SvgBorder;
}(motorcortex.HTMLClip);

var Anime$6 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var RotatadLineReveal = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RotatadLineReveal, _HTMLClip);

  var _super = _createSuper(RotatadLineReveal);

  function RotatadLineReveal() {
    _classCallCheck(this, RotatadLineReveal);

    return _super.apply(this, arguments);
  }

  _createClass(RotatadLineReveal, [{
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize("1.5rem", "1rem", "3.5rem", "55px");
          break;

        case "M":
          this.size = this.generateSize("2.5rem", "2rem", "5rem", "90px");
          break;

        case "L":
          this.size = this.generateSize("3.5rem", "2rem", "7rem", "100px");
          break;
      }

      return "\n      <div class=\"wrapper\">\n        <div class=\"redLine\">\n          <div class=\"text text1\"><div class=\"title \">".concat(this.attrs.title, "</div></div>\n          <div class=\"text text2\"><div class=\"sub\">").concat(this.attrs.subtitle, "</div></div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height:100%;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .redLine {\n        border-left: 2px solid ").concat(this.attrs.lineColor, ";\n        width: 0rem;\n        height: ").concat(this.size.lineHeight, ";\n        display: flex;\n        align-items: flex-start;\n        flex-direction: column;\n        transform: rotate(30deg);\n        position: relative;\n        left: 150%;\n        transform-origin: top left;\n        white-space: nowrap;\n        overflow: hidden;\n        color : ").concat(this.attrs.textColor, "\n      }\n\n      .title{\n        font-size: ").concat(this.size.fontSize, ";\n        font-weight: 600;\n      }\n\n      .sub{\n        font-size: ").concat(this.size.fontSizeSub, ";\n        top: -60px;\n        position: relative;\n      }\n\n      .text {\n        position: relative;\n        left: -50px;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(fontSize, fontSizeSub, lineSize, lineHeight) {
      return {
        fontSize: fontSize,
        fontSizeSub: fontSizeSub,
        lineSize: lineSize,
        lineHeight: lineHeight
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var grupMc = new motorcortex.Group();
      var lineRotateEnd = new Anime$6.Anime({
        animatedAttrs: {
          transform: {
            rotate: "0deg"
          }
        },
        attrs: {}
      }, {
        duration: 1200,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineMoveEnd = new Anime$6.Anime({
        animatedAttrs: {
          left: "".concat(this.attrs.leftEnd, "px")
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineWidthEnd = new Anime$6.Anime({
        animatedAttrs: {
          width: "400px"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      }, {
        duration: 800,
        selector: ".redLine"
      });
      var moveText = new Anime$6.Anime({
        animatedAttrs: {
          left: "10px"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".text",
        easing: "easeOutExpo"
      });
      var moveSub = new Anime$6.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 400,
        selector: ".sub",
        easing: "easeOutExpo"
      });

      for (var i = 1; i <= 2; i++) {
        var moveTextOut = new Anime$6.Anime({
          animatedAttrs: {
            left: "-".concat(this.attrs.width, "px")
          },
          attrs: {}
        }, {
          duration: Math.round(1700),
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        grupMc.addIncident(moveTextOut, 3125 + i * 100);
      }

      var lineHeight = new Anime$6.Anime({
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      }, {
        duration: 400,
        selector: ".redLine",
        easing: "easeInSine"
      });
      this.addIncident(lineRotateEnd, 0);
      this.addIncident(lineMoveEnd, 0);
      this.addIncident(lineWidthEnd, 1200);
      this.addIncident(moveText, 1200);
      this.addIncident(moveSub, 2000);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, delayEnd);
        this.addIncident(lineHeight, 4250 + delayEnd);
      }
    }
  }]);

  return RotatadLineReveal;
}(motorcortex.HTMLClip);

var Anime$5 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var SvgDraw = /*#__PURE__*/function (_HTMLClip) {
  _inherits(SvgDraw, _HTMLClip);

  var _super = _createSuper(SvgDraw);

  function SvgDraw() {
    _classCallCheck(this, SvgDraw);

    return _super.apply(this, arguments);
  }

  _createClass(SvgDraw, [{
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          this.size = this.generateSize(200, 100, "");
          break;

        case "M":
          this.size = this.generateSize(300, 200, "5rem");
          break;

        case "L":
          this.size = this.generateSize(500, 400, "7rem");
          break;
      }

      return "<div class=\"svg-wrapper\">".concat(this.attrs.svg, "</div>");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .svg-wrapper{\n        position: relative;\n        width: ".concat(this.size.svgWidth * 1.5, "px;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      svg{\n        width: ").concat(this.size.svgWidth, "px;\n        height: ").concat(this.size.svgHeight, "px;\n      }\n\n      .svgContainer{\n        height:100vh;\n      }\n\n      svg path{\n        stroke-dasharray: ").concat(this.attrs.StrokeDashArray, ";\n        stroke-dashoffset: ").concat(this.attrs.strokeDashOffset, ";\n      }\n    ");
    }
  }, {
    key: "generateSize",
    value: function generateSize(svgWidth, svgHeight, lineSize) {
      return {
        svgWidth: svgWidth,
        svgHeight: svgHeight,
        lineSize: lineSize
      };
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var textDrow = new Anime$5.Anime({
        animatedAttrs: {
          strokeDashoffset: "0px"
        },
        attrs: {}
      }, {
        duration: 2700,
        selector: "svg path",
        easing: "easeInSine"
      });
      var textBigBack = new Anime$5.Anime({
        animatedAttrs: {
          transform: {
            scaleX: 1.3,
            scaleY: 1.3
          }
        }
      }, {
        duration: 1530,
        selector: "svg",
        id: "transform2",
        easing: "easeOutElastic"
      });
      var textErase = new Anime$5.Anime({
        animatedAttrs: {
          strokeDashoffset: this.attrs.strokeDashOffset
        },
        attrs: {}
      }, {
        duration: 2700,
        selector: "svg path",
        easing: "easeInSine"
      });
      this.addIncident(textDrow, 0);
      this.addIncident(textBigBack, 2700);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(textErase, 3420 + delayEnd);
      }
    }
  }]);

  return SvgDraw;
}(motorcortex.HTMLClip);

var Anime$4 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var Circle = /*#__PURE__*/function (_HTMLClip) {
  _inherits(Circle, _HTMLClip);

  var _super = _createSuper(Circle);

  function Circle() {
    _classCallCheck(this, Circle);

    return _super.apply(this, arguments);
  }

  _createClass(Circle, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"circle\">\n          <div class=\"word\"></div>\n        </div>\n        <div class=\"sub\">\n          <span >".concat(this.attrs.subTitle, "</span>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.width, "px;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .circle{\n        width: 0px;\n        height: 0px;\n        background: ").concat(this.attrs.circleColor, ";\n        position: relative;\n        border-radius: 100%;\n        mask: url(./img.svg);\n        mask-position-y: 69px;\n        mask-size: 810px;\n      }\n\n      .word{\n        overflow: hidden;\n        width: 9px;\n        height: 3px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n      }\n      \n      .letter{\n        font-size: ").concat(this.attrs.fontSize, "px;\n        color: ").concat(this.attrs.textColor, ";\n        left: 2.5px;\n        position: relative;\n        text-align: center;\n        top : ").concat(this.attrs.width, "px;\n        width: 100%;\n        background-color:#ffffff00\n        \n      }\n\n      .sub{\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        top: 33%;\n        transform: rotate(-10deg);\n        width: 400px;\n        height: 400px;\n\n      }\n\n      .sub span{\n        font-size: ").concat(this.attrs.fontSize * 0.8, "px;\n        position: relative;\n        top:100%;\n        letter-spacing: 3px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var array = this.attrs.title.split("");
      var html = "";

      for (var i = 0; i < array.length; i++) {
        html += "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
      }

      var word = new motorcortex.HTMLClip({
        css: this.css,
        html: " <div class=\"wrapper\" >".concat(html, " </div>"),
        selector: ".word"
      });
      this.addIncident(word, 0);
      var circleScale = new Anime$4.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width, "px"),
          height: "".concat(this.attrs.width, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".circle",
        easing: "easeOutExpo"
      });

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime$4.Anime({
          animatedAttrs: {
            top: "0px",
            opacity: 1
          },
          attrs: {}
        }, {
          duration: 500,
          selector: ".letter" + (_i + 1),
          easing: "easeOutExpo"
        });
        word.addIncident(textAnimation, 500 + 100 * (_i + 1));
      }

      var circleScaleDown = new Anime$4.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.8, "px"),
          height: "".concat(this.attrs.width * 0.8, "px")
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      });
      var wrapperDown = new Anime$4.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.8, "px"),
          height: "".concat(this.attrs.width * 0.8, "px"),
          transform: {
            rotate: "10deg"
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".wrapper",
        easing: "easeOutElastic"
      });
      var maskDown = new Anime$4.Anime({
        animatedAttrs: {
          maskSize: "".concat(this.attrs.width * 0.8, "px"),
          transform: {
            rotate: "-10deg"
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      });
      var subOut = new Anime$4.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".sub span",
        easing: "easeOutElastic"
      });
      var circleScaleDownEnd = new Anime$4.Anime({
        animatedAttrs: {
          transform: {
            scale: 0
          }
        },
        initialValues: {
          transform: {
            scale: 1
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle,.sub span,.sub",
        easing: "easeOutElastic"
      });
      word.addIncident(wrapperDown, 2000);
      this.addIncident(circleScaleDown, 2000);
      this.addIncident(maskDown, 2000);
      this.addIncident(subOut, 2000);
      this.addIncident(circleScale, 0);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(circleScaleDownEnd, 3600 + delayEnd);
      }
    }
  }]);

  return Circle;
}(motorcortex.HTMLClip);

var Anime$3 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var LogoBox = /*#__PURE__*/function (_HTMLClip) {
  _inherits(LogoBox, _HTMLClip);

  var _super = _createSuper(LogoBox);

  function LogoBox() {
    _classCallCheck(this, LogoBox);

    return _super.apply(this, arguments);
  }

  _createClass(LogoBox, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"onemore\">\n          <div class=\"redLineContainer\">\n            <div class=\"yellow\">\n              <div class=\"logo\"><img src=\"".concat(this.attrs.logoUrl, "\" alt=\"Italian Trulli\"></div>\n            </div>\n            <div class=\"redLine\">\n              <div class=\"text text1\">").concat(this.attrs.subTitle1, "</div>\n              <div class=\"text text2\">").concat(this.attrs.subTitle2, "</div>\n              <div class=\"text text3\">").concat(this.attrs.subTitle3, "</div>\n            </div>\n           \n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ".concat(this.attrs.fontFamily, " !important;\n      }\n\n      .redLineContainer {\n        white-space: nowrap;\n        width: 0px;\n        overflow: hidden;\n        background: ").concat(this.attrs.textColor, ";\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        opacity: 0;\n        border: ").concat(1 * this.attrs.size, "px solid ").concat(this.attrs.textColor, ";\n      }\n      \n      .redLine {\n        position: relative;\n        right:  100px;\n        overflow: hidden;\n        background: ").concat(this.attrs.bgColor, ";\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        height: ").concat(70 * this.attrs.size, "px;\n      }\n      \n      .yellow{\n        width: 0px;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .logo img{\n        width: ").concat(50 * this.attrs.size, "px;\n      }\n      \n      .logo{\n        display: flex;\n        align-items: center;\n      }\n      \n      .text{ \n        left: ").concat(-100 * this.attrs.size, "px;\n        position: relative;\n        display: flex;\n        align-items: center;\n        height: ").concat(22 * this.attrs.size, "px;\n        padding-left: 8%;\n        color: ").concat(this.attrs.textColor, ";\n        font-size :").concat(14 * this.attrs.size, "px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var opacity = new Anime$3.Anime({
        animatedAttrs: {
          opacity: 1
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".redLineContainer"
      });
      var border = new Anime$3.Anime({
        animatedAttrs: {
          right: "0px"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLine"
      });
      var conteiner = new Anime$3.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.75 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLineContainer"
      });

      for (var i = 1; i <= 3; i++) {
        var textLeft = new Anime$3.Anime({
          animatedAttrs: {
            left: "0px"
          },
          attrs: {}
        }, {
          duration: 500 * i,
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(textLeft, 500);
      }

      var conteinerMore = new Anime$3.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".redLineContainer"
      });
      var yellowW = new Anime$3.Anime({
        animatedAttrs: {
          width: "".concat(80 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".yellow"
      });
      var end = new Anime$3.Anime({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".wrapper"
      });
      this.addIncident(opacity, 0);
      this.addIncident(border, 0);
      this.addIncident(conteiner, 0);
      this.addIncident(conteinerMore, 1500);
      this.addIncident(yellowW, 1500);

      if (!this.attrs.stopOnLast) {
        this.addIncident(end, 3000);
      }
    }
  }]);

  return LogoBox;
}(motorcortex.HTMLClip);

var Anime$2 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var RightOpacity = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RightOpacity, _HTMLClip);

  var _super = _createSuper(RightOpacity);

  function RightOpacity() {
    _classCallCheck(this, RightOpacity);

    return _super.apply(this, arguments);
  }

  _createClass(RightOpacity, [{
    key: "html",
    get: function get() {
      this.list = this.attrs.text.split("");
      var divList = this.list.map(function (e, i) {
        return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
      }).join("");
      return "\n      <div class=\"wrapper\">\n        <div class=\"letter-wrapper\">\n          ".concat(divList, "\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      var stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize, "px;\n        color:").concat(this.attrs.color, ";\n        ").concat(stroke, "\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily, ";\n        position: absolute;\n      }\n\n      .letter-wrapper{\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var left = new Anime$2.Anime({
        animatedAttrs: {
          left: "@expression(index * ".concat(this.attrs.width / this.list.length, ")px")
        },
        initialValues: {
          left: "@expression((index * ".concat(this.attrs.width / this.list.length, ")+").concat(this.attrs.width / 2, ")px")
        }
      }, {
        duration: 1,
        selector: ".letter",
        delay: "@stagger(0, 0)"
      });
      this.addIncident(left, 0);
      var opacity = new Anime$2.Anime({
        animatedAttrs: {
          opacity: 1 // left: `@expression(index * ${this.attrs.width / this.list.length})px`

        },
        initialValues: {
          opacity: 0 // left: `@expression((index * ${this.attrs.width / this.list.length})+${this.attrs.width / 2})px`

        }
      }, {
        duration: 300,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: "@stagger(0, 300)"
      });
      this.addIncident(opacity, 10);
      var left2 = new Anime$2.Anime({
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: "".concat(this.attrs.width * 0.5, "px")
        }
      }, {
        duration: 300,
        selector: ".letter-wrapper",
        easing: "easeOutExpo" // delay: "@stagger(0, 300)"

      });
      this.addIncident(left2, 0);
      var leftLetter = new Anime$2.Anime({
        animatedAttrs: {
          left: "".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 300,
        selector: ".letter",
        easing: "easeInQuad",
        delay: "@stagger(0, 300,0.5,easeInQuad,omni)"
      });
      this.addIncident(leftLetter, this.attrs.exitTime);
      var opacityback = new Anime$2.Anime({
        animatedAttrs: {
          opacity: 0
        }
      }, {
        duration: 300,
        selector: ".letter"
      });
      this.addIncident(opacityback, this.calculatedDuration - 300);
    }
  }]);

  return RightOpacity;
}(motorcortex.HTMLClip);

var Anime$1 = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var LetterScale = /*#__PURE__*/function (_HTMLClip) {
  _inherits(LetterScale, _HTMLClip);

  var _super = _createSuper(LetterScale);

  function LetterScale() {
    _classCallCheck(this, LetterScale);

    return _super.apply(this, arguments);
  }

  _createClass(LetterScale, [{
    key: "html",
    get: function get() {
      this.list = this.attrs.text.split("");
      var divList = this.list.map(function (e, i) {
        return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
      }).join("");
      return "\n      <div class=\"wrapper\">\n        <div class=\"letter-wrapper\">\n          ".concat(divList, "\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      var stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize, "px;\n        color:").concat(this.attrs.color, ";\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily, ";\n        position: relative;\n        ").concat(stroke, "\n      }\n      \n      .letter-wrapper{\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var left = new Anime$1.Anime({
        animatedAttrs: {
          fontSize: "".concat(this.attrs.fontSize, "px")
        },
        initialValues: {
          fontSize: "".concat(this.attrs.fontSize * 0.7, "px")
        }
      }, {
        duration: 600,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: "@stagger(0, 600,0.5,linear,omni)"
      });
      this.addIncident(left, 0);
    }
  }]);

  return LetterScale;
}(motorcortex.HTMLClip);

var Anime = motorcortex.loadPlugin(AnimeDefinition__default["default"]);

var CircularText = /*#__PURE__*/function (_HTMLClip) {
  _inherits(CircularText, _HTMLClip);

  var _super = _createSuper(CircularText);

  function CircularText() {
    _classCallCheck(this, CircularText);

    return _super.apply(this, arguments);
  }

  _createClass(CircularText, [{
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"circle\">\n        <svg viewBox=\"0 0 ".concat(this.attrs.viewBox, " ").concat(this.attrs.viewBox, "\">\n          <path d=\"M ").concat(this.attrs.viewBox / 2 - this.attrs.path, ",").concat(this.attrs.viewBox / 2, " a ").concat(this.attrs.path, ", ").concat(this.attrs.path, " 0 1, 1 0,1 z\" id=\"circular\" />\n          <text class=\"text\"><textPath xlink:href=\"#circular\">\n          ").concat(this.attrs.text, "\n            </textPath>\n          </text>\n        </svg>\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .circle path {\n        fill: ").concat(this.attrs.fill, ";\n        1px solid black;\n      }\n\n      .circle {\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .circle svg {\n        display: block;\n        overflow: visible;\n      }\n\n      .text{\n        font-size: ").concat(this.attrs.fontSize, "px;\n      }\n      \n      .circle text {\n        fill: ").concat(this.attrs.color, ";\n        font-family: ").concat(this.attrs.fontFamily, ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var left = new Anime.Anime({
        animatedAttrs: {
          transform: {
            rotate: "360deg"
          }
        }
      }, {
        duration: 3000,
        selector: ".circle svg"
      });
      this.addIncident(left, 0);
    }
  }]);

  return CircularText;
}(motorcortex.HTMLClip);

var _COLOR = "color";
var RotatedLIneVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L", "XL"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  subTitle1: {
    optional: false,
    type: "string"
  },
  subTitle2: {
    optional: false,
    type: "string"
  },
  subTitle3: {
    optional: false,
    type: "string"
  },
  title: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RolingTextVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L", "XL", "XXL", "XXXL"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  subTitle1: {
    optional: false,
    type: "string"
  },
  subTitle2: {
    optional: false,
    type: "string"
  },
  subTitle3: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RotatadLineRevealVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  title: {
    optional: false,
    type: "string"
  },
  subtitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  leftEnd: {
    optional: false,
    type: "number",
    min: 0
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SvgBorderVal = {
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  title: {
    optional: false,
    type: "string"
  },
  slogan: {
    optional: false,
    type: "string"
  },
  subTitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var CircleVal = {
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  fontsize: {
    optional: true,
    type: "number",
    min: 1
  },
  circleColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  title: {
    optional: false,
    type: "string"
  },
  subTitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SvgDrawVal = {
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR
  },
  textColor: {
    optional: true,
    type: _COLOR
  },
  strokeDashOffset: {
    optional: true,
    type: "number"
  },
  StrokeDashArray: {
    optional: true,
    type: "number"
  },
  erase: {
    optional: true,
    type: "boolean"
  },
  svg: {
    optional: true,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RigthOpacityValidationVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  text: {
    optional: false,
    type: "string"
  },
  color: {
    optional: true,
    type: _COLOR
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  stroke: {
    optional: false,
    type: "boolean"
  },
  strokeSize: {
    optional: true,
    type: "number",
    min: 0
  },
  strokeColor: {
    optional: true,
    type: _COLOR
  },
  fontFamily: {
    optional: false,
    type: "string"
  },
  exitTime: {
    optional: false,
    type: "number",
    min: 0
  }
};
var LetterScaleValidationVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  text: {
    optional: false,
    type: "string"
  },
  color: {
    optional: true,
    type: _COLOR
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  stroke: {
    optional: false,
    type: "boolean"
  },
  strokeSize: {
    optional: true,
    type: "number",
    min: 0
  },
  strokeColor: {
    optional: true,
    type: _COLOR
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
var CircularTextValidation = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  color: {
    optional: true,
    type: _COLOR
  },
  text: {
    optional: false,
    type: "string"
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  viewBox: {
    optional: false,
    type: "number"
  },
  path: {
    optional: false,
    type: "number",
    min: 0
  },
  fill: {
    optional: false,
    type: _COLOR
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};

var name = "@donkeyclip/motorcortex-animetitles";
var version = "1.0.3";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: RotatedLine,
    name: "RotatedLine",
    attributesValidationRules: RotatedLIneVal
  }, {
    exportable: RolingText,
    name: "RolingText",
    attributesValidationRules: RolingTextVal
  }, {
    exportable: SvgBorder,
    name: "SvgBorder",
    attributesValidationRules: SvgBorderVal
  }, {
    exportable: RotatadLineReveal,
    name: "RotatadLineReveal",
    attributesValidationRules: RotatadLineRevealVal
  }, {
    exportable: SvgDraw,
    name: "SvgDraw",
    attributesValidationRules: SvgDrawVal
  }, {
    exportable: Circle,
    name: "Circle",
    attributesValidationRules: CircleVal
  }, {
    exportable: LogoBox,
    name: "LogoBox"
  }, {
    exportable: RightOpacity,
    name: "RightOpacity",
    attributesValidationRules: RigthOpacityValidationVal
  }, //todo
  // {
  //   exportable: FlushStroke,
  //   name: "FlushStroke"
  //   attributesValidationRules: Circle
  // },
  {
    exportable: LetterScale,
    name: "LetterScale",
    attributesValidationRules: LetterScaleValidationVal
  }, {
    exportable: CircularText,
    name: "CircularText",
    attributesValidationRules: CircularTextValidation
  }]
};

module.exports = index;
