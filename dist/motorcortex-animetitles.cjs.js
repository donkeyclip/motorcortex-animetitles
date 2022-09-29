'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

class RotatedLine extends motorcortex.HTMLClip {
  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"text--container text--container-left\">\n          <div class=\"text-left\">".concat(this.attrs.title, "</div>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"text--container text--container-right\">\n          <div class=\"text-right text-right1\">").concat(this.attrs.subTitle1, "</div>\n          <div class=\"text-right text-right2\">").concat(this.attrs.subTitle2, "</div>\n          <div class=\"text-right text-right3\">").concat(this.attrs.subTitle3, "</div>\n        </div>\n      </div>\n    ");
  }

  get css() {
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

  generateSize(fontSizeLeft, fontSizeRigth, lineWidth, lineHeight, gap) {
    return {
      fontSizeLeft,
      fontSizeRigth,
      lineWidth,
      lineHeight,
      gap
    };
  }

  buildTree() {
    const rotateAminmeEnd = new motorcortex.CSSEffect({
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
    const widthLIne = new motorcortex.CSSEffect({
      animatedAttrs: {
        height: this.size.lineHeight
      },
      attrs: {}
    }, {
      duration: 450,
      selector: ".line",
      easing: "easeInOutQuart"
    });
    const leftTextAnimate = new motorcortex.CSSEffect({
      animatedAttrs: {
        right: "".concat(this.size.gap, "%")
      },
      attrs: {}
    }, {
      duration: 900,
      selector: ".text-left",
      easing: "easeInOutQuart"
    });

    for (let i = 1; i <= 3; i++) {
      const rightTextAnimate = new motorcortex.CSSEffect({
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

    const rightTextAnimateIn = new motorcortex.CSSEffect({
      animatedAttrs: {
        right: "100%"
      },
      attrs: {}
    }, {
      duration: 900,
      selector: ".text-right",
      easing: "easeOutExpo"
    });
    const leftTextAnimateIn = new motorcortex.CSSEffect({
      animatedAttrs: {
        right: "-100%"
      },
      attrs: {}
    }, {
      duration: 900,
      selector: ".text-left",
      easing: "easeOutExpo"
    });
    const rotateAminmeStartOut = new motorcortex.CSSEffect({
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
    const widthLIneOut = new motorcortex.CSSEffect({
      animatedAttrs: {
        height: "0rem"
      },
      attrs: {}
    }, {
      duration: 450,
      selector: ".line",
      easing: "easeInOutQuart"
    });
    const delayEnd = this.attrs.delayEnd || 0;
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

}

class RollingText extends motorcortex.HTMLClip {
  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"line\"></div>\n        <div class=\"textClip\"> \n          <span>".concat(this.attrs.subTitle1, "</span>\n          <span>").concat(this.attrs.subTitle2, "</span>\n          <span>").concat(this.attrs.subTitle3, "</span>\n        </div>\n      </div>\n        ");
  }

  get css() {
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

    return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        height: ".concat(this.size.lineHeight, ";\n        width : ").concat(this.attrs.width, "px;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n    \n      .line{\n        position: relative; \n        height: 0;\n        width: 3px;\n        justify-content: center;\n        background: ").concat(this.attrs.lineColor, " ;\n        margin-right: ").concat(this.size.gap, "rem;\n      \n      }\n      \n      .textClip{\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        font-size: ").concat(this.size.fontSizeLeft, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        height: ").concat(this.size.fontSizeLeft, "px;\n      }\n    \n      .textClip span{\n        color : ").concat(this.attrs.textColor, ";\n        position: relative;\n        left : -").concat(this.attrs.width / 2, "px;\n        width : 100%;\n        height: ").concat(this.size.fontSizeLeft, "px;\n        align-items: center;\n        display: flex;\n        top:0;\n      }\n  ");
  }

  generateSize(fontSizeLeft, topMove, lineHeight, gap, topMove2) {
    return {
      fontSizeLeft,
      topMove,
      lineHeight,
      gap,
      topMove2
    };
  }

  buildTree() {
    const animeLineHeight = new motorcortex.CSSEffect({
      animatedAttrs: {
        height: this.size.lineHeight
      },
      attrs: {}
    }, {
      duration: 450,
      selector: ".line"
    });
    const animeTextLeft = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: "0px"
      },
      attrs: {}
    }, {
      duration: 800,
      selector: ".textClip span"
    });
    const animeTextTop = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: this.size.topMove
      }
    }, {
      duration: 900,
      selector: ".textClip span"
    });
    const animeTextTopNext = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: this.size.topMove2
      }
    }, {
      duration: 900,
      selector: ".textClip span"
    });
    const animeTextLeftBack = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: "-".concat(this.attrs.width / 2, "px")
      }
    }, {
      duration: 900,
      selector: ".textClip span"
    });
    const animeLineHeightBack = new motorcortex.CSSEffect({
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
    const delayEnd = this.attrs.delayEnd || 0;

    if (!this.attrs.stopOnLast) {
      this.addIncident(animeTextLeftBack, 4500 + delayEnd);
      this.addIncident(animeLineHeightBack, 5550 + delayEnd);
    }
  }

}

class SvgBorder extends motorcortex.HTMLClip {
  get html() {
    switch (this.attrs.size) {
      case "S":
        this.size = this.generateSize(600, 70, "2rem", "1rem", 50, 17, 50);
        break;

      case "M":
        this.size = this.generateSize(700, 90, "3rem", "2rem", 50, 34, 70);
        break;

      case "L":
        this.size = this.generateSize(1000, 110, "3.5rem", "2.5rem", 55, 45, 80);
        break;
    }

    return "\n      <div class=\"svg-wrapper\">\n        <svg height=\"".concat(this.size.borderHeight, "\" width=\"").concat(this.size.borderWidth, "\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect class=\"shape2\" height=\"").concat(this.size.borderHeight, "\" width=\"").concat(this.size.borderWidth, "\" />\n        </svg>\n        <div class=\"sub--container\">\n          <div class=\"sub\">").concat(this.attrs.subTitle, "</div>\n        </div>\n        <div class=\"titleContainer\">\n          <div class=\"text\">").concat(this.attrs.title, "</div>\n        </div>\n        <div class=\"sloganContainer\">\n          <div class=\"slogan\">").concat(this.attrs.slogan, "</div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      body{\n       font-size: 62.5%;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top :10px;\n        height: 100%;\n        color:  ".concat(this.attrs.textColor, ";\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 6000;\n        stroke-width: 5px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.lineColor, ";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: 6000;\n      }\n      \n      \n      .text {\n        font-size: ").concat(this.size.fontSizeTitle, ";\n        letter-spacing: 8px;\n        position: relative;\n        top: ").concat(this.size.titleTop, "px;\n      }\n      \n      .sub--container {\n        position: absolute;\n        white-space: nowrap;\n        overflow: hidden;\n        left: 20px;\n        top: -7%;\n      }\n\n      .sloganContainer {\n        position: relative;\n        top: -30px;\n        left: 45%;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 150px;\n      }\n\n      .titleContainer{\n        position: relative;\n        top: -").concat(this.size.titleContainerTop, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        width: ").concat(this.size.borderWidth, "px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      \n      .sub{\n        position: relative;\n        top: ").concat(this.size.subTop, "px;\n        font-size : ").concat(this.size.fontSizeSub, ";\n      }\n      \n      .slogan{\n        position: relative;\n        top: -").concat(this.size.subTop, "px;\n        font-size : ").concat(this.size.fontSizeSub, ";\n      }\n    ");
  }

  generateSize(borderWidth, borderHeight, fontSizeTitle, fontSizeSub, titleTop, subTop, titleContainerTop) {
    return {
      borderWidth,
      borderHeight,
      fontSizeTitle,
      fontSizeSub,
      titleTop,
      subTop,
      titleContainerTop
    };
  }

  buildTree() {
    const delayEnd = this.attrs.delayEnd || 0;
    const borderAnimete = new motorcortex.CSSEffect({
      animatedAttrs: {
        strokeDashoffset: " ".concat(12000 - this.attrs.borderGap, "px")
      },
      attrs: {}
    }, {
      duration: 1400,
      selector: ".shape2",
      easing: "easeInOutQuart"
    });
    const titleAnimete = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: "0px"
      },
      attrs: {}
    }, {
      duration: 600,
      selector: ".text"
    });
    const subAnimate = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: "0px"
      },
      attrs: {}
    }, {
      duration: 600,
      selector: ".sub",
      easing: "easeInOutQuart"
    });
    const sloganAnimate = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: "0px"
      },
      attrs: {}
    }, {
      duration: 600,
      selector: ".slogan",
      easing: "easeInOutQuart"
    });
    const borderAnimeteLeft = new motorcortex.CSSEffect({
      animatedAttrs: {
        strokeDashoffset: "6000px"
      },
      attrs: {}
    }, {
      duration: 1200,
      selector: ".shape2"
    });
    const titleAnimeteLeft = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      attrs: {}
    }, {
      duration: 800,
      selector: ".text"
    });
    const subAnimateLeft = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      attrs: {}
    }, {
      duration: 800,
      selector: ".sub",
      easing: "easeInOutQuart"
    });
    const sloganAnimateLeft = new motorcortex.CSSEffect({
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
    const grupMc = new motorcortex.Group();
    grupMc.addIncident(borderAnimeteLeft, 800);
    grupMc.addIncident(titleAnimeteLeft, 400);
    grupMc.addIncident(subAnimateLeft, 400);
    grupMc.addIncident(sloganAnimateLeft, 400);

    if (!this.attrs.stopOnLast) {
      this.addIncident(grupMc, 3000 + delayEnd);
    }
  }

}

class RotatedLineReveal extends motorcortex.HTMLClip {
  get html() {
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

  get css() {
    return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height:100%;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .redLine {\n        border-left: 2px solid ").concat(this.attrs.lineColor, ";\n        width: 0rem;\n        height: ").concat(this.size.lineHeight, ";\n        display: flex;\n        align-items: flex-start;\n        flex-direction: column;\n        transform: rotate(30deg);\n        position: relative;\n        left: 150%;\n        transform-origin: top left;\n        white-space: nowrap;\n        overflow: hidden;\n        color : ").concat(this.attrs.textColor, "\n      }\n\n      .title{\n        font-size: ").concat(this.size.fontSize, ";\n        font-weight: 600;\n      }\n\n      .sub{\n        font-size: ").concat(this.size.fontSizeSub, ";\n        top: -60px;\n        position: relative;\n      }\n\n      .text {\n        position: relative;\n        left: -50px;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n    ");
  }

  generateSize(fontSize, fontSizeSub, lineSize, lineHeight) {
    return {
      fontSize,
      fontSizeSub,
      lineSize,
      lineHeight
    };
  }

  buildTree() {
    const grupMc = new motorcortex.Group();
    const lineRotateEnd = new motorcortex.CSSEffect({
      animatedAttrs: {
        transform: {
          rotate: "0deg"
        }
      }
    }, {
      duration: 1200,
      selector: ".redLine",
      easing: "easeOutExpo"
    });
    const lineMoveEnd = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: "".concat(this.attrs.leftEnd, "px")
      }
    }, {
      duration: 2000,
      selector: ".redLine",
      easing: "easeOutExpo"
    });
    const lineWidthEnd = new motorcortex.CSSEffect({
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
    const moveText = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: "10px"
      }
    }, {
      duration: 800,
      selector: ".text",
      easing: "easeOutExpo"
    });
    const moveSub = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: "0px"
      }
    }, {
      duration: 400,
      selector: ".sub",
      easing: "easeOutExpo"
    });

    for (let i = 1; i <= 2; i++) {
      const moveTextOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "-".concat(this.attrs.width, "px")
        }
      }, {
        duration: Math.round(1700),
        selector: ".text" + i,
        easing: "easeOutExpo"
      });
      grupMc.addIncident(moveTextOut, 3125 + i * 100);
    }

    const lineHeight = new motorcortex.CSSEffect({
      animatedAttrs: {
        height: "0px"
      }
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
    const delayEnd = this.attrs.delayEnd || 0;

    if (!this.attrs.stopOnLast) {
      this.addIncident(grupMc, delayEnd);
      this.addIncident(lineHeight, 4250 + delayEnd);
    }
  }

}

class SvgDraw extends motorcortex.HTMLClip {
  get html() {
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

  get css() {
    return "\n      .svg-wrapper{\n        position: relative;\n        width: ".concat(this.size.svgWidth * 1.5, "px;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      svg{\n        width: ").concat(this.size.svgWidth, "px;\n        height: ").concat(this.size.svgHeight, "px;\n      }\n\n      .svgContainer{\n        height:100vh;\n      }\n\n      svg path{\n        stroke-dasharray: ").concat(this.attrs.StrokeDashArray, ";\n        stroke-dashoffset: ").concat(this.attrs.strokeDashOffset, ";\n      }\n    ");
  }

  generateSize(svgWidth, svgHeight, lineSize) {
    return {
      svgWidth,
      svgHeight,
      lineSize
    };
  }

  buildTree() {
    const textDrow = new motorcortex.CSSEffect({
      animatedAttrs: {
        strokeDashoffset: "0px"
      },
      attrs: {}
    }, {
      duration: 2700,
      selector: "svg path",
      easing: "easeInSine"
    });
    const textBigBack = new motorcortex.CSSEffect({
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
    const textErase = new motorcortex.CSSEffect({
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
    const delayEnd = this.attrs.delayEnd || 0;

    if (!this.attrs.stopOnLast) {
      this.addIncident(textErase, 3420 + delayEnd);
    }
  }

}

class Circle extends motorcortex.HTMLClip {
  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"circle\">\n          <div class=\"word\"></div>\n        </div>\n        <div class=\"sub\">\n          <span >".concat(this.attrs.subTitle, "</span>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.width, "px;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .circle{\n        width: 0px;\n        height: 0px;\n        background: ").concat(this.attrs.circleColor, ";\n        position: relative;\n        border-radius: 100%;\n        mask: url(./img.svg);\n        mask-position-y: 69px;\n        mask-size: 810px;\n      }\n\n      .word{\n        overflow: hidden;\n        width: 9px;\n        height: 3px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n      }\n      \n      .letter{\n        font-size: ").concat(this.attrs.fontSize, "px;\n        color: ").concat(this.attrs.textColor, ";\n        left: 2.5px;\n        position: relative;\n        text-align: center;\n        top : ").concat(this.attrs.width, "px;\n        width: 100%;\n        background-color:#ffffff00\n        \n      }\n\n      .sub{\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        top: 33%;\n        transform: rotate(-10deg);\n        width: 400px;\n        height: 400px;\n\n      }\n\n      .sub span{\n        font-size: ").concat(this.attrs.fontSize * 0.8, "px;\n        position: relative;\n        top:100%;\n        letter-spacing: 3px;\n      }\n    ");
  }

  buildTree() {
    const array = this.attrs.title.split("");
    let html = "";

    for (let i = 0; i < array.length; i++) {
      html += "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
    }

    const word = new motorcortex.HTMLClip({
      css: this.css,
      html: " <div class=\"wrapper\" >".concat(html, " </div>"),
      selector: ".word"
    });
    this.addIncident(word, 0);
    const circleScale = new motorcortex.CSSEffect({
      animatedAttrs: {
        width: "".concat(this.attrs.width, "px"),
        height: "".concat(this.attrs.width, "px")
      },
      initialValues: {
        width: "0px",
        height: "0px"
      }
    }, {
      duration: 500,
      selector: ".circle",
      easing: "easeOutExpo"
    });

    for (let i = 0; i < array.length; i++) {
      const textAnimation = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "0px",
          opacity: 1
        }
      }, {
        duration: 500,
        selector: ".letter" + (i + 1),
        easing: "easeOutExpo"
      });
      word.addIncident(textAnimation, 500 + 100 * (i + 1));
    }

    const circleScaleDown = new motorcortex.CSSEffect({
      animatedAttrs: {
        width: "".concat(this.attrs.width * 0.8, "px"),
        height: "".concat(this.attrs.width * 0.8, "px")
      } // initialValues:{
      //   width: `${this.attrs.width}px`,
      //   height: `${this.attrs.width}px`,
      // }

    }, {
      duration: 600,
      selector: ".circle",
      easing: "easeOutElastic"
    });
    const wrapperDown = new motorcortex.CSSEffect({
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
    const maskDown = new motorcortex.CSSEffect({
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
    const subOut = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: "0px"
      },
      attrs: {}
    }, {
      duration: 600,
      selector: ".sub span",
      easing: "easeOutElastic"
    });
    const circleScaleDownEnd = new motorcortex.CSSEffect({
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
    const delayEnd = this.attrs.delayEnd || 0;

    if (!this.attrs.stopOnLast) {
      this.addIncident(circleScaleDownEnd, 3600 + delayEnd);
    }
  }

}

class LogoBox extends motorcortex.HTMLClip {
  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"onemore\">\n          <div class=\"redLineContainer\">\n            <div class=\"yellow\">\n              <div class=\"logo\"><img src=\"".concat(this.attrs.logoUrl, "\" alt=\"Italian Trulli\"></div>\n            </div>\n            <div class=\"redLine\">\n              <div class=\"text text1\">").concat(this.attrs.subTitle1, "</div>\n              <div class=\"text text2\">").concat(this.attrs.subTitle2, "</div>\n              <div class=\"text text3\">").concat(this.attrs.subTitle3, "</div>\n            </div>\n           \n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ".concat(this.attrs.fontFamily, " !important;\n      }\n\n      .redLineContainer {\n        white-space: nowrap;\n        width: 0px;\n        overflow: hidden;\n        background: ").concat(this.attrs.textColor, ";\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        opacity: 0;\n        border: ").concat(1 * this.attrs.size, "px solid ").concat(this.attrs.textColor, ";\n      }\n      \n      .redLine {\n        position: relative;\n        right:  100px;\n        overflow: hidden;\n        background: ").concat(this.attrs.bgColor, ";\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        height: ").concat(70 * this.attrs.size, "px;\n      }\n      \n      .yellow{\n        width: 0px;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .logo img{\n        width: ").concat(50 * this.attrs.size, "px;\n      }\n      \n      .logo{\n        display: flex;\n        align-items: center;\n      }\n      \n      .text{ \n        left: ").concat(-100 * this.attrs.size, "px;\n        position: relative;\n        display: flex;\n        align-items: center;\n        height: ").concat(22 * this.attrs.size, "px;\n        padding-left: 8%;\n        color: ").concat(this.attrs.textColor, ";\n        font-size :").concat(14 * this.attrs.size, "px;\n      }\n    ");
  }

  buildTree() {
    const opacity = new motorcortex.CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      attrs: {}
    }, {
      duration: 1,
      selector: ".redLineContainer"
    });
    const border = new motorcortex.CSSEffect({
      animatedAttrs: {
        right: "0px"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".redLine"
    });
    const conteiner = new motorcortex.CSSEffect({
      animatedAttrs: {
        width: "".concat(this.attrs.width * 0.75 * this.attrs.size, "px")
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".redLineContainer"
    });

    for (let i = 1; i <= 3; i++) {
      const textLeft = new motorcortex.CSSEffect({
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

    const conteinerMore = new motorcortex.CSSEffect({
      animatedAttrs: {
        width: "".concat(this.attrs.width * this.attrs.size, "px")
      },
      attrs: {}
    }, {
      duration: 500,
      selector: ".redLineContainer"
    });
    const yellowW = new motorcortex.CSSEffect({
      animatedAttrs: {
        width: "".concat(80 * this.attrs.size, "px")
      },
      attrs: {}
    }, {
      duration: 500,
      selector: ".yellow"
    });
    const end = new motorcortex.CSSEffect({
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

}

class RightOpacity extends motorcortex.HTMLClip {
  get html() {
    this.list = this.attrs.text.split("");
    const divList = this.list.map((e, i) => {
      return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
    }).join("");
    return "\n      <div class=\"wrapper\">\n        <div class=\"letter-wrapper\">\n          ".concat(divList, "\n        </div>\n      </div>\n    ");
  }

  get css() {
    const stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
    return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize, "px;\n        color:").concat(this.attrs.color, ";\n        ").concat(stroke, "\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily, ";\n        position: absolute;\n      }\n\n      .letter-wrapper{\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
  }

  buildTree() {
    const left = new motorcortex.CSSEffect({
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
    const opacity = new motorcortex.CSSEffect({
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
    const left2 = new motorcortex.CSSEffect({
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
    const leftLetter = new motorcortex.CSSEffect({
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
    const opacityback = new motorcortex.CSSEffect({
      animatedAttrs: {
        opacity: 0
      }
    }, {
      duration: 300,
      selector: ".letter"
    });
    this.addIncident(opacityback, this.calculatedDuration - 300);
  }

}

class LetterScale extends motorcortex.HTMLClip {
  get html() {
    this.list = this.attrs.text.split("");
    const divList = this.list.map((e, i) => {
      return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
    }).join("");
    return "\n      <div class=\"wrapper\">\n        <div class=\"letter-wrapper\">\n          ".concat(divList, "\n        </div>\n      </div>\n    ");
  }

  get css() {
    const stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
    return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize, "px;\n        color:").concat(this.attrs.color, ";\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily, ";\n        position: relative;\n        ").concat(stroke, "\n      }\n      \n      .letter-wrapper{\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ");
  }

  buildTree() {
    const left = new motorcortex.CSSEffect({
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

}

class CircularText extends motorcortex.HTMLClip {
  get html() {
    return "\n    <div class=\"wrapper\">\n      <div class=\"circle\">\n        <svg viewBox=\"0 0 ".concat(this.attrs.viewBox, " ").concat(this.attrs.viewBox, "\">\n          <path d=\"M ").concat(this.attrs.viewBox / 2 - this.attrs.path, ",").concat(this.attrs.viewBox / 2, " a ").concat(this.attrs.path, ", ").concat(this.attrs.path, " 0 1, 1 0,1 z\" id=\"circular\" />\n          <text class=\"text\"><textPath xlink:href=\"#circular\">\n          ").concat(this.attrs.text, "\n            </textPath>\n          </text>\n        </svg>\n      </div>\n    </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width:".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n      }\n\n      .circle path {\n        fill: ").concat(this.attrs.fill, ";\n        1px solid black;\n      }\n\n      .circle {\n        width:").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .circle svg {\n        display: block;\n        overflow: visible;\n        flex:1;\n      }\n\n      .text{\n        font-size: ").concat(this.attrs.fontSize, "px;\n      }\n      \n      .circle text {\n        fill: ").concat(this.attrs.color, ";\n        font-family: ").concat(this.attrs.fontFamily, ";\n      }\n    ");
  }

  buildTree() {
    const left = new motorcortex.CSSEffect({
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

}

const _COLOR = "color";
const RotatedLIneVal = {
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
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
const RollingTextVal = {
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
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
const RotatedLineRevealVal = {
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
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
const SvgBorderVal = {
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
  },
  borderGap: {
    optional: false,
    type: "number",
    min: 0
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
const CircleVal = {
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
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
const SvgDrawVal = {
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
  },
  fontFamily: {
    optional: false,
    type: "string"
  }
};
const RigthOpacityValidationVal = {
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
const LetterScaleValidationVal = {
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
const CircularTextValidation = {
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
var version = "1.2.1";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: RotatedLine,
    name: "RotatedLine",
    attributesValidationRules: RotatedLIneVal
  }, {
    exportable: RollingText,
    name: "RollingText",
    attributesValidationRules: RollingTextVal
  }, {
    exportable: SvgBorder,
    name: "SvgBorder",
    attributesValidationRules: SvgBorderVal
  }, {
    exportable: RotatedLineReveal,
    name: "RotatedLineReveal",
    attributesValidationRules: RotatedLineRevealVal
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
