!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-animetitles"]=e(t.MotorCortex)}(this,(function(t){"use strict";class e extends t.HTMLClip{get html(){return'\n      <div class="wrapper">\n        <div class="text--container text--container-left">\n          <div class="text-left">'.concat(this.attrs.title,'</div>\n        </div>\n        <div class="line"></div>\n        <div class="text--container text--container-right">\n          <div class="text-right text-right1">').concat(this.attrs.subTitle1,'</div>\n          <div class="text-right text-right2">').concat(this.attrs.subTitle2,'</div>\n          <div class="text-right text-right3">').concat(this.attrs.subTitle3,"</div>\n        </div>\n      </div>\n    ")}get css(){switch(this.attrs.size){case"S":this.size=this.generateSize("1.5rem","1rem","0.2rem","5rem",3);break;case"M":this.size=this.generateSize("2rem","1.2rem","0.3rem","7rem",4);break;case"L":this.size=this.generateSize("2.5rem","1.5rem","0.3rem","9rem",4);break;case"XL":this.size=this.generateSize("3rem","2rem","0.3rem","11rem",4)}return"\n      body{\n       font-size: 62.5%;\n      }\n\n      .wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transform: rotate(90deg);\n        white-space: nowrap;\n        overflow: hidden;\n        width : 100%;\n        width : ".concat(this.attrs.width+this.size.lineWidth,"px;\n        color : ").concat(this.attrs.textColor,";\n        font-family: ").concat(this.attrs.fontFamily," !important;\n      }\n\n      .line {\n        width: 3px;\n        background: ").concat(this.attrs.lineColor," ;\n        height: 0rem;\n      }\n      \n      .text-left {\n        position: relative;\n        right : -100%;\n        font-size: ").concat(this.size.fontSizeLeft,";\n        text-align: right;\n      }\n      \n      .text-right {\n        position: relative;\n        right: 100%;\n        font-size: ").concat(this.size.fontSizeRigth,";\n      }\n      \n      .text--container {\n        white-space: nowrap;\n        overflow: hidden;\n        position: relative;\n        width :").concat(this.attrs.width/2,"px;\n      } \n    ")}generateSize(t,e,n,i,s){return{fontSizeLeft:t,fontSizeRigth:e,lineWidth:n,lineHeight:i,gap:s}}buildTree(){const e=new t.CSSEffect({animatedAttrs:{transform:{rotate:"0deg"}},attrs:{}},{duration:450,selector:".wrapper",easing:"easeInOutQuart"}),n=new t.CSSEffect({animatedAttrs:{height:this.size.lineHeight},attrs:{}},{duration:450,selector:".line",easing:"easeInOutQuart"}),i=new t.CSSEffect({animatedAttrs:{right:"".concat(this.size.gap,"%")},attrs:{}},{duration:900,selector:".text-left",easing:"easeInOutQuart"});for(let e=1;e<=3;e++){const n=new t.CSSEffect({animatedAttrs:{right:"-".concat(this.size.gap,"%")},attrs:{}},{duration:900*e,selector:".text-right"+e,easing:"easeOutExpo"});this.addIncident(n,1500)}const s=new t.CSSEffect({animatedAttrs:{right:"100%"},attrs:{}},{duration:900,selector:".text-right",easing:"easeOutExpo"}),a=new t.CSSEffect({animatedAttrs:{right:"-100%"},attrs:{}},{duration:900,selector:".text-left",easing:"easeOutExpo"}),o=new t.CSSEffect({animatedAttrs:{transform:{rotate:"90deg"}},attrs:{}},{duration:450,selector:".wrapper",easing:"easeInOutQuart"}),r=new t.CSSEffect({animatedAttrs:{height:"0rem"},attrs:{}},{duration:450,selector:".line",easing:"easeInOutQuart"}),c=this.attrs.delayEnd||0;this.addIncident(n,0),this.addIncident(e,450),this.addIncident(i,900),this.attrs.stopOnLast||(this.addIncident(s,4200+c),this.addIncident(a,4200+c),this.addIncident(o,5100+c),this.addIncident(r,5550+c))}}class n extends t.HTMLClip{get html(){return'\n      <div class="wrapper">\n        <div class="line"></div>\n        <div class="textClip"> \n          <span>'.concat(this.attrs.subTitle1,"</span>\n          <span>").concat(this.attrs.subTitle2,"</span>\n          <span>").concat(this.attrs.subTitle3,"</span>\n        </div>\n      </div>\n        ")}get css(){switch(this.attrs.size){case"S":this.size=this.generateSize(21,"-21px","31px",.5,"-42px");break;case"M":this.size=this.generateSize(28,"-28px","38px",1,"-56px");break;case"L":this.size=this.generateSize(35,"-35px","45px",1.5,"-70px");break;case"XL":this.size=this.generateSize(42,"-42px","52px",2,"-84px");break;case"XXL":this.size=this.generateSize(49,"-49px","59px",2,"-98px");break;case"XXXL":this.size=this.generateSize(70,"-70px","80px",2,"-140px",86)}return"\n      body{\n       font-size: 62.5%;\n      }\n\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        height: ".concat(this.size.lineHeight,";\n        width : ").concat(this.attrs.width,"px;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily," !important;\n      }\n    \n      .line{\n        position: relative; \n        height: 0;\n        width: 3px;\n        justify-content: center;\n        background: ").concat(this.attrs.lineColor," ;\n        margin-right: ").concat(this.size.gap,"rem;\n      \n      }\n      \n      .textClip{\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        font-size: ").concat(this.size.fontSizeLeft,"px;\n        white-space: nowrap;\n        overflow: hidden;\n        height: ").concat(this.size.fontSizeLeft,"px;\n      }\n    \n      .textClip span{\n        color : ").concat(this.attrs.textColor,";\n        position: relative;\n        left : -").concat(this.attrs.width/2,"px;\n        width : 100%;\n        height: ").concat(this.size.fontSizeLeft,"px;\n        align-items: center;\n        display: flex;\n        top:0;\n      }\n  ")}generateSize(t,e,n,i,s){return{fontSizeLeft:t,topMove:e,lineHeight:n,gap:i,topMove2:s}}buildTree(){const e=new t.CSSEffect({animatedAttrs:{height:this.size.lineHeight},attrs:{}},{duration:450,selector:".line"}),n=new t.CSSEffect({animatedAttrs:{left:"0px"},attrs:{}},{duration:800,selector:".textClip span"}),i=new t.CSSEffect({animatedAttrs:{top:this.size.topMove}},{duration:900,selector:".textClip span"}),s=new t.CSSEffect({animatedAttrs:{top:this.size.topMove2}},{duration:900,selector:".textClip span"}),a=new t.CSSEffect({animatedAttrs:{left:"-".concat(this.attrs.width/2,"px")}},{duration:900,selector:".textClip span"}),o=new t.CSSEffect({animatedAttrs:{height:"0px"},attrs:{}},{duration:450,selector:".line"});this.addIncident(e,0),this.addIncident(n,450),this.addIncident(i,2250),this.addIncident(s,3450);const r=this.attrs.delayEnd||0;this.attrs.stopOnLast||(this.addIncident(a,4500+r),this.addIncident(o,5550+r))}}class i extends t.HTMLClip{get html(){switch(this.attrs.size){case"S":this.size=this.generateSize(600,70,"2rem","1rem",50,17,50);break;case"M":this.size=this.generateSize(700,90,"3rem","2rem",50,34,70);break;case"L":this.size=this.generateSize(1e3,110,"3.5rem","2.5rem",55,45,80)}return'\n      <div class="svg-wrapper">\n        <svg height="'.concat(this.size.borderHeight,'" width="').concat(this.size.borderWidth,'" xmlns="http://www.w3.org/2000/svg">\n          <rect class="shape2" height="').concat(this.size.borderHeight,'" width="').concat(this.size.borderWidth,'" />\n        </svg>\n        <div class="sub--container">\n          <div class="sub">').concat(this.attrs.subTitle,'</div>\n        </div>\n        <div class="titleContainer">\n          <div class="text">').concat(this.attrs.title,'</div>\n        </div>\n        <div class="sloganContainer">\n          <div class="slogan">').concat(this.attrs.slogan,"</div>\n        </div>\n      </div>\n    ")}get css(){return"\n      body{\n       font-size: 62.5%;\n      }\n\n      .svg-wrapper {\n        position: relative;\n        top :10px;\n        height: 100%;\n        color:  ".concat(this.attrs.textColor,";\n        font-family: ").concat(this.attrs.fontFamily," !important;\n      }\n      \n      .shape2 {\n        stroke-dasharray: 6000;\n        stroke-width: 5px;\n        fill: transparent;\n        stroke: ").concat(this.attrs.lineColor,";\n        border-bottom: 5px solid black;\n        stroke-dashoffset: 6000;\n      }\n      \n      \n      .text {\n        font-size: ").concat(this.size.fontSizeTitle,";\n        letter-spacing: 8px;\n        position: relative;\n        top: ").concat(this.size.titleTop,"px;\n      }\n      \n      .sub--container {\n        position: absolute;\n        white-space: nowrap;\n        overflow: hidden;\n        left: 20px;\n        top: -7%;\n      }\n\n      .sloganContainer {\n        position: relative;\n        top: -30px;\n        left: 45%;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 150px;\n      }\n\n      .titleContainer{\n        position: relative;\n        top: -").concat(this.size.titleContainerTop,"px;\n        white-space: nowrap;\n        overflow: hidden;\n        width: ").concat(this.size.borderWidth,"px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      \n      .sub{\n        position: relative;\n        top: ").concat(this.size.subTop,"px;\n        font-size : ").concat(this.size.fontSizeSub,";\n      }\n      \n      .slogan{\n        position: relative;\n        top: -").concat(this.size.subTop,"px;\n        font-size : ").concat(this.size.fontSizeSub,";\n      }\n    ")}generateSize(t,e,n,i,s,a,o){return{borderWidth:t,borderHeight:e,fontSizeTitle:n,fontSizeSub:i,titleTop:s,subTop:a,titleContainerTop:o}}buildTree(){const e=this.attrs.delayEnd||0,n=new t.CSSEffect({animatedAttrs:{strokeDashoffset:" ".concat(12e3-this.attrs.borderGap,"px")},attrs:{}},{duration:1400,selector:".shape2",easing:"easeInOutQuart"}),i=new t.CSSEffect({animatedAttrs:{top:"0px"},attrs:{}},{duration:600,selector:".text"}),s=new t.CSSEffect({animatedAttrs:{top:"0px"},attrs:{}},{duration:600,selector:".sub",easing:"easeInOutQuart"}),a=new t.CSSEffect({animatedAttrs:{top:"0px"},attrs:{}},{duration:600,selector:".slogan",easing:"easeInOutQuart"}),o=new t.CSSEffect({animatedAttrs:{strokeDashoffset:"6000px"},attrs:{}},{duration:1200,selector:".shape2"}),r=new t.CSSEffect({animatedAttrs:{left:"100%"},attrs:{}},{duration:800,selector:".text"}),c=new t.CSSEffect({animatedAttrs:{left:"100%"},attrs:{}},{duration:800,selector:".sub",easing:"easeInOutQuart"}),l=new t.CSSEffect({animatedAttrs:{left:"150px"},attrs:{}},{duration:800,selector:".slogan",easing:"easeInOutQuart"});this.addIncident(n,0),this.addIncident(i,600),this.addIncident(s,1200),this.addIncident(a,1200);const d=new t.Group;d.addIncident(o,800),d.addIncident(r,400),d.addIncident(c,400),d.addIncident(l,400),this.attrs.stopOnLast||this.addIncident(d,3e3+e)}}class s extends t.HTMLClip{get html(){switch(this.attrs.size){case"S":this.size=this.generateSize("1.5rem","1rem","3.5rem","55px");break;case"M":this.size=this.generateSize("2.5rem","2rem","5rem","90px");break;case"L":this.size=this.generateSize("3.5rem","2rem","7rem","100px")}return'\n      <div class="wrapper">\n        <div class="redLine">\n          <div class="text text1"><div class="title ">'.concat(this.attrs.title,'</div></div>\n          <div class="text text2"><div class="sub">').concat(this.attrs.subtitle,"</div></div>\n        </div>\n      </div>\n    ")}get css(){return"\n      .wrapper{\n        width:".concat(this.attrs.width,"px;\n        height:100%;\n        font-family: ").concat(this.attrs.fontFamily," !important;\n      }\n\n      .redLine {\n        border-left: 2px solid ").concat(this.attrs.lineColor,";\n        width: 0rem;\n        height: ").concat(this.size.lineHeight,";\n        display: flex;\n        align-items: flex-start;\n        flex-direction: column;\n        transform: rotate(30deg);\n        position: relative;\n        left: 150%;\n        transform-origin: top left;\n        white-space: nowrap;\n        overflow: hidden;\n        color : ").concat(this.attrs.textColor,"\n      }\n\n      .title{\n        font-size: ").concat(this.size.fontSize,";\n        font-weight: 600;\n      }\n\n      .sub{\n        font-size: ").concat(this.size.fontSizeSub,";\n        top: -60px;\n        position: relative;\n      }\n\n      .text {\n        position: relative;\n        left: -50px;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n    ")}generateSize(t,e,n,i){return{fontSize:t,fontSizeSub:e,lineSize:n,lineHeight:i}}buildTree(){const e=new t.Group,n=new t.CSSEffect({animatedAttrs:{transform:{rotate:"0deg"}}},{duration:1200,selector:".redLine",easing:"easeOutExpo"}),i=new t.CSSEffect({animatedAttrs:{left:"".concat(this.attrs.leftEnd,"px")}},{duration:2e3,selector:".redLine",easing:"easeOutExpo"}),s=new t.CSSEffect({animatedAttrs:{width:"400px"},attrs:{easing:"easeOutExpo"}},{duration:800,selector:".redLine"}),a=new t.CSSEffect({animatedAttrs:{left:"10px"}},{duration:800,selector:".text",easing:"easeOutExpo"}),o=new t.CSSEffect({animatedAttrs:{top:"0px"}},{duration:400,selector:".sub",easing:"easeOutExpo"});for(let n=1;n<=2;n++){const i=new t.CSSEffect({animatedAttrs:{left:"-".concat(this.attrs.width,"px")}},{duration:Math.round(1700),selector:".text"+n,easing:"easeOutExpo"});e.addIncident(i,3125+100*n)}const r=new t.CSSEffect({animatedAttrs:{height:"0px"}},{duration:400,selector:".redLine",easing:"easeInSine"});this.addIncident(n,0),this.addIncident(i,0),this.addIncident(s,1200),this.addIncident(a,1200),this.addIncident(o,2e3);const c=this.attrs.delayEnd||0;this.attrs.stopOnLast||(this.addIncident(e,c),this.addIncident(r,4250+c))}}class a extends t.HTMLClip{get html(){switch(this.attrs.size){case"S":this.size=this.generateSize(200,100,"");break;case"M":this.size=this.generateSize(300,200,"5rem");break;case"L":this.size=this.generateSize(500,400,"7rem")}return'<div class="svg-wrapper">'.concat(this.attrs.svg,"</div>")}get css(){return"\n      .svg-wrapper{\n        position: relative;\n        width: ".concat(1.5*this.size.svgWidth,"px;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      svg{\n        width: ").concat(this.size.svgWidth,"px;\n        height: ").concat(this.size.svgHeight,"px;\n      }\n\n      .svgContainer{\n        height:100vh;\n      }\n\n      svg path{\n        stroke-dasharray: ").concat(this.attrs.StrokeDashArray,";\n        stroke-dashoffset: ").concat(this.attrs.strokeDashOffset,";\n      }\n    ")}generateSize(t,e,n){return{svgWidth:t,svgHeight:e,lineSize:n}}buildTree(){const e=new t.CSSEffect({animatedAttrs:{strokeDashoffset:"0px"},attrs:{}},{duration:2700,selector:"svg path",easing:"easeInSine"}),n=new t.CSSEffect({animatedAttrs:{transform:{scaleX:1.3,scaleY:1.3}}},{duration:1530,selector:"svg",id:"transform2",easing:"easeOutElastic"}),i=new t.CSSEffect({animatedAttrs:{strokeDashoffset:this.attrs.strokeDashOffset},attrs:{}},{duration:2700,selector:"svg path",easing:"easeInSine"});this.addIncident(e,0),this.addIncident(n,2700);const s=this.attrs.delayEnd||0;this.attrs.stopOnLast||this.addIncident(i,3420+s)}}class o extends t.HTMLClip{get html(){return'\n      <div class="wrapper">\n        <div class="circle">\n          <div class="word"></div>\n        </div>\n        <div class="sub">\n          <span >'.concat(this.attrs.subTitle,"</span>\n        </div>\n      </div>\n    ")}get css(){return"\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: ".concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.width,"px;\n        font-family: ").concat(this.attrs.fontFamily," !important;\n      }\n\n      .circle{\n        width: 0px;\n        height: 0px;\n        background: ").concat(this.attrs.circleColor,";\n        position: relative;\n        border-radius: 100%;\n        mask: url(./img.svg);\n        mask-position-y: 69px;\n        mask-size: 810px;\n      }\n\n      .word{\n        overflow: hidden;\n        width: 9px;\n        height: 3px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n      }\n      \n      .letter{\n        font-size: ").concat(this.attrs.fontSize,"px;\n        color: ").concat(this.attrs.textColor,";\n        left: 2.5px;\n        position: relative;\n        text-align: center;\n        top : ").concat(this.attrs.width,"px;\n        width: 100%;\n        background-color:#ffffff00\n        \n      }\n\n      .sub{\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        top: 33%;\n        transform: rotate(-10deg);\n        width: 400px;\n        height: 400px;\n\n      }\n\n      .sub span{\n        font-size: ").concat(.8*this.attrs.fontSize,"px;\n        position: relative;\n        top:100%;\n        letter-spacing: 3px;\n      }\n    ")}buildTree(){const e=this.attrs.title.split("");let n="";for(let t=0;t<e.length;t++)n+="<span class='letter letter".concat(t+1,"'>").concat(e[t],"</span>");const i=new t.HTMLClip({css:this.css,html:' <div class="wrapper" >'.concat(n," </div>"),selector:".word"});this.addIncident(i,0);const s=new t.CSSEffect({animatedAttrs:{width:"".concat(this.attrs.width,"px"),height:"".concat(this.attrs.width,"px")},initialValues:{width:"0px",height:"0px"}},{duration:500,selector:".circle",easing:"easeOutExpo"});for(let n=0;n<e.length;n++){const e=new t.CSSEffect({animatedAttrs:{top:"0px",opacity:1}},{duration:500,selector:".letter"+(n+1),easing:"easeOutExpo"});i.addIncident(e,500+100*(n+1))}const a=new t.CSSEffect({animatedAttrs:{width:"".concat(.8*this.attrs.width,"px"),height:"".concat(.8*this.attrs.width,"px")}},{duration:600,selector:".circle",easing:"easeOutElastic"}),o=new t.CSSEffect({animatedAttrs:{width:"".concat(.8*this.attrs.width,"px"),height:"".concat(.8*this.attrs.width,"px"),transform:{rotate:"10deg"}},attrs:{}},{duration:600,selector:".wrapper",easing:"easeOutElastic"}),r=new t.CSSEffect({animatedAttrs:{maskSize:"".concat(.8*this.attrs.width,"px"),transform:{rotate:"-10deg"}},attrs:{}},{duration:600,selector:".circle",easing:"easeOutElastic"}),c=new t.CSSEffect({animatedAttrs:{top:"0px"},attrs:{}},{duration:600,selector:".sub span",easing:"easeOutElastic"}),l=new t.CSSEffect({animatedAttrs:{transform:{scale:0}},initialValues:{transform:{scale:1}},attrs:{}},{duration:600,selector:".circle,.sub span,.sub",easing:"easeOutElastic"});i.addIncident(o,2e3),this.addIncident(a,2e3),this.addIncident(r,2e3),this.addIncident(c,2e3),this.addIncident(s,0);const d=this.attrs.delayEnd||0;this.attrs.stopOnLast||this.addIncident(l,3600+d)}}class r extends t.HTMLClip{get html(){return'\n      <div class="wrapper">\n        <div class="onemore">\n          <div class="redLineContainer">\n            <div class="yellow">\n              <div class="logo"><img src="'.concat(this.attrs.logoUrl,'" alt="Italian Trulli"></div>\n            </div>\n            <div class="redLine">\n              <div class="text text1">').concat(this.attrs.subTitle1,'</div>\n              <div class="text text2">').concat(this.attrs.subTitle2,'</div>\n              <div class="text text3">').concat(this.attrs.subTitle3,"</div>\n            </div>\n           \n          </div>\n        </div>\n      </div>\n    ")}get css(){return"\n      .wrapper{\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ".concat(this.attrs.fontFamily," !important;\n      }\n\n      .redLineContainer {\n        white-space: nowrap;\n        width: 0px;\n        overflow: hidden;\n        background: ").concat(this.attrs.textColor,";\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        opacity: 0;\n        border: ").concat(1*this.attrs.size,"px solid ").concat(this.attrs.textColor,";\n      }\n      \n      .redLine {\n        position: relative;\n        right:  100px;\n        overflow: hidden;\n        background: ").concat(this.attrs.bgColor,";\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        height: ").concat(70*this.attrs.size,"px;\n      }\n      \n      .yellow{\n        width: 0px;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .logo img{\n        width: ").concat(50*this.attrs.size,"px;\n      }\n      \n      .logo{\n        display: flex;\n        align-items: center;\n      }\n      \n      .text{ \n        left: ").concat(-100*this.attrs.size,"px;\n        position: relative;\n        display: flex;\n        align-items: center;\n        height: ").concat(22*this.attrs.size,"px;\n        padding-left: 8%;\n        color: ").concat(this.attrs.textColor,";\n        font-size :").concat(14*this.attrs.size,"px;\n      }\n    ")}buildTree(){const e=new t.CSSEffect({animatedAttrs:{opacity:1},attrs:{}},{duration:1,selector:".redLineContainer"}),n=new t.CSSEffect({animatedAttrs:{right:"0px"},attrs:{}},{duration:1e3,selector:".redLine"}),i=new t.CSSEffect({animatedAttrs:{width:"".concat(.75*this.attrs.width*this.attrs.size,"px")},attrs:{}},{duration:1e3,selector:".redLineContainer"});for(let e=1;e<=3;e++){const n=new t.CSSEffect({animatedAttrs:{left:"0px"},attrs:{}},{duration:500*e,selector:".text"+e,easing:"easeOutExpo"});this.addIncident(n,500)}const s=new t.CSSEffect({animatedAttrs:{width:"".concat(this.attrs.width*this.attrs.size,"px")},attrs:{}},{duration:500,selector:".redLineContainer"}),a=new t.CSSEffect({animatedAttrs:{width:"".concat(80*this.attrs.size,"px")},attrs:{}},{duration:500,selector:".yellow"}),o=new t.CSSEffect({animatedAttrs:{width:"0%"},initialValues:{width:"100%"},attrs:{}},{duration:500,selector:".wrapper"});this.addIncident(e,0),this.addIncident(n,0),this.addIncident(i,0),this.addIncident(s,1500),this.addIncident(a,1500),this.attrs.stopOnLast||this.addIncident(o,3e3)}}class c extends t.HTMLClip{get html(){this.list=this.attrs.text.split("");const t=this.list.map(((t,e)=>'<div class="letter letter-item-'.concat(e,'">').concat(t,"</div>"))).join("");return'\n      <div class="wrapper">\n        <div class="letter-wrapper">\n          '.concat(t,"\n        </div>\n      </div>\n    ")}get css(){const t=!0===this.attrs.stroke?"-webkit-text-stroke:".concat(this.attrs.strokeSize,"px ").concat(this.attrs.strokeColor,";"):"";return"\n      .wrapper{\n        width:".concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize,"px;\n        color:").concat(this.attrs.color,";\n        ").concat(t,"\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily,";\n        position: absolute;\n      }\n\n      .letter-wrapper{\n        width:").concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ")}buildTree(){const e=new t.CSSEffect({animatedAttrs:{left:"@expression(index * ".concat(this.attrs.width/this.list.length,")px")},initialValues:{left:"@expression((index * ".concat(this.attrs.width/this.list.length,")+").concat(this.attrs.width/2,")px")}},{duration:1,selector:".letter",delay:"@stagger(0, 0)"});this.addIncident(e,0);const n=new t.CSSEffect({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:300,selector:".letter",easing:"easeOutExpo",delay:"@stagger(0, 300)"});this.addIncident(n,10);const i=new t.CSSEffect({animatedAttrs:{left:"0px"},initialValues:{left:"".concat(.5*this.attrs.width,"px")}},{duration:300,selector:".letter-wrapper",easing:"easeOutExpo"});this.addIncident(i,0);const s=new t.CSSEffect({animatedAttrs:{left:"".concat(this.attrs.width/2,"px")}},{duration:300,selector:".letter",easing:"easeInQuad",delay:"@stagger(0, 300,0.5,easeInQuad,omni)"});this.addIncident(s,this.attrs.exitTime);const a=new t.CSSEffect({animatedAttrs:{opacity:0}},{duration:300,selector:".letter"});this.addIncident(a,this.calculatedDuration-300)}}class l extends t.HTMLClip{get html(){this.list=this.attrs.text.split("");const t=this.list.map(((t,e)=>'<div class="letter letter-item-'.concat(e,'">').concat(t,"</div>"))).join("");return'\n      <div class="wrapper">\n        <div class="letter-wrapper">\n          '.concat(t,"\n        </div>\n      </div>\n    ")}get css(){const t=!0===this.attrs.stroke?"-webkit-text-stroke:".concat(this.attrs.strokeSize,"px ").concat(this.attrs.strokeColor,";"):"";return"\n      .wrapper{\n        width:".concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .letter{\n        font-size:").concat(this.attrs.fontSize,"px;\n        color:").concat(this.attrs.color,";\n        text-transform:uppercase;\n        font-family: ").concat(this.attrs.fontFamily,";\n        position: relative;\n        ").concat(t,"\n      }\n      \n      .letter-wrapper{\n        width:").concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    ")}buildTree(){const e=new t.CSSEffect({animatedAttrs:{fontSize:"".concat(this.attrs.fontSize,"px")},initialValues:{fontSize:"".concat(.7*this.attrs.fontSize,"px")}},{duration:600,selector:".letter",easing:"easeOutExpo",delay:"@stagger(0, 600,0.5,linear,omni)"});this.addIncident(e,0)}}class d extends t.HTMLClip{get html(){return'\n    <div class="wrapper">\n      <div class="circle">\n        <svg viewBox="0 0 '.concat(this.attrs.viewBox," ").concat(this.attrs.viewBox,'">\n          <path d="M ').concat(this.attrs.viewBox/2-this.attrs.path,",").concat(this.attrs.viewBox/2," a ").concat(this.attrs.path,", ").concat(this.attrs.path,' 0 1, 1 0,1 z" id="circular" />\n          <text class="text"><textPath xlink:href="#circular">\n          ').concat(this.attrs.text,"\n            </textPath>\n          </text>\n        </svg>\n      </div>\n    </div>\n    ")}get css(){return"\n      .wrapper{\n        width:".concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        white-space: nowrap;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ").concat(this.attrs.fontFamily," !important;\n      }\n\n      .circle path {\n        fill: ").concat(this.attrs.fill,";\n        1px solid black;\n      }\n\n      .circle {\n        width:").concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .circle svg {\n        display: block;\n        overflow: visible;\n        flex:1;\n      }\n\n      .text{\n        font-size: ").concat(this.attrs.fontSize,"px;\n      }\n      \n      .circle text {\n        fill: ").concat(this.attrs.color,";\n        font-family: ").concat(this.attrs.fontFamily,";\n      }\n    ")}buildTree(){const e=new t.CSSEffect({animatedAttrs:{transform:{rotate:"360deg"}}},{duration:3e3,selector:".circle svg"});this.addIncident(e,0)}}const p="color";return{npm_name:"@donkeyclip/motorcortex-animetitles",version:"1.2.2",incidents:[{exportable:e,name:"RotatedLine",attributesValidationRules:{width:{optional:!1,type:"number",min:0},size:{type:"enum",values:["S","M","L","XL"]},lineColor:{optional:!0,type:p},textColor:{optional:!0,type:p},subTitle1:{optional:!1,type:"string"},subTitle2:{optional:!1,type:"string"},subTitle3:{optional:!1,type:"string"},title:{optional:!1,type:"string"},stopOnLast:{optional:!1,type:"boolean"},delayEnd:{optional:!0,type:"number",min:0},fontFamily:{optional:!1,type:"string"}}},{exportable:n,name:"RollingText",attributesValidationRules:{width:{optional:!1,type:"number",min:0},size:{type:"enum",values:["S","M","L","XL","XXL","XXXL"]},lineColor:{optional:!0,type:p},textColor:{optional:!0,type:p},subTitle1:{optional:!1,type:"string"},subTitle2:{optional:!1,type:"string"},subTitle3:{optional:!1,type:"string"},stopOnLast:{optional:!1,type:"boolean"},delayEnd:{optional:!0,type:"number",min:0},fontFamily:{optional:!1,type:"string"}}},{exportable:i,name:"SvgBorder",attributesValidationRules:{width:{optional:!0,type:"number",min:0},size:{type:"enum",values:["S","M","L"]},lineColor:{optional:!0,type:p},textColor:{optional:!0,type:p},title:{optional:!1,type:"string"},slogan:{optional:!1,type:"string"},subTitle:{optional:!1,type:"string"},stopOnLast:{optional:!1,type:"boolean"},delayEnd:{optional:!0,type:"number",min:0},borderGap:{optional:!1,type:"number",min:0},fontFamily:{optional:!1,type:"string"}}},{exportable:s,name:"RotatedLineReveal",attributesValidationRules:{width:{optional:!1,type:"number",min:0},size:{type:"enum",values:["S","M","L"]},lineColor:{optional:!0,type:p},textColor:{optional:!0,type:p},title:{optional:!1,type:"string"},subtitle:{optional:!1,type:"string"},stopOnLast:{optional:!1,type:"boolean"},leftEnd:{optional:!1,type:"number",min:0},delayEnd:{optional:!0,type:"number",min:0},fontFamily:{optional:!1,type:"string"}}},{exportable:a,name:"SvgDraw",attributesValidationRules:{width:{optional:!0,type:"number",min:0},size:{type:"enum",values:["S","M","L"]},lineColor:{optional:!0,type:p},textColor:{optional:!0,type:p},strokeDashOffset:{optional:!0,type:"number"},StrokeDashArray:{optional:!0,type:"number"},erase:{optional:!0,type:"boolean"},svg:{optional:!0,type:"string"},stopOnLast:{optional:!1,type:"boolean"},delayEnd:{optional:!0,type:"number",min:0},fontFamily:{optional:!1,type:"string"}}},{exportable:o,name:"Circle",attributesValidationRules:{width:{optional:!0,type:"number",min:0},fontsize:{optional:!0,type:"number",min:1},circleColor:{optional:!0,type:p},textColor:{optional:!0,type:p},title:{optional:!1,type:"string"},subTitle:{optional:!1,type:"string"},stopOnLast:{optional:!1,type:"boolean"},delayEnd:{optional:!0,type:"number",min:0},fontFamily:{optional:!1,type:"string"}}},{exportable:r,name:"LogoBox"},{exportable:c,name:"RightOpacity",attributesValidationRules:{width:{optional:!1,type:"number",min:0},height:{optional:!1,type:"number",min:0},text:{optional:!1,type:"string"},color:{optional:!0,type:p},fontSize:{optional:!1,type:"number",min:0},stroke:{optional:!1,type:"boolean"},strokeSize:{optional:!0,type:"number",min:0},strokeColor:{optional:!0,type:p},fontFamily:{optional:!1,type:"string"},exitTime:{optional:!1,type:"number",min:0}}},{exportable:l,name:"LetterScale",attributesValidationRules:{width:{optional:!1,type:"number",min:0},height:{optional:!1,type:"number",min:0},text:{optional:!1,type:"string"},color:{optional:!0,type:p},fontSize:{optional:!1,type:"number",min:0},stroke:{optional:!1,type:"boolean"},strokeSize:{optional:!0,type:"number",min:0},strokeColor:{optional:!0,type:p},fontFamily:{optional:!1,type:"string"}}},{exportable:d,name:"CircularText",attributesValidationRules:{width:{optional:!1,type:"number",min:0},height:{optional:!1,type:"number",min:0},color:{optional:!0,type:p},text:{optional:!1,type:"string"},fontSize:{optional:!1,type:"number",min:0},viewBox:{optional:!1,type:"number"},path:{optional:!1,type:"number",min:0},fill:{optional:!1,type:p},fontFamily:{optional:!1,type:"string"}}}]}}));
