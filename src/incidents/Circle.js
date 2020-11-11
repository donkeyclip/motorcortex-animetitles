const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class Circle extends MotorCortex.HTMLClip {
  get html() {
    return `
    <div class="wrapper"  >
    <div class="circle">
      <div class="word">
      </div>
    </div>
    <div class="sub">
          <span >${this.attrs.subTitle}</span>
        </div>
    </div>
        `;
  }

  get css() {
    return `
    .wrapper{
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${this.attrs.width}px;
      height: ${this.attrs.width}px;
      font-family: ${this.attrs.fontFamily} !important;
    }
    .circle{
      width: 0px;
      height: 0px;
      background: ${this.attrs.circleColor};
      position: relative;
      border-radius: 100%;
      mask: url(./img.svg);
      mask-position-y: 69px;
      mask-size: 810px;
    }  
    .word{
      overflow: hidden;
      width: 9px;
      height: 3px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    
    .letter{
      font-size: ${this.attrs.fontSize}px;
      color: ${this.attrs.textColor};
      left: 2.5px;
      position: relative;
      text-align: center;
      top : ${this.attrs.width}px;
      width: 100%;
      background-color:#ffffff00
      
    }

  .sub{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    top: 33%;
    transform: rotate(-10deg);
    width: 400px;
    height: 400px;

  }
  .sub span{
    font-size: ${this.attrs.fontSize * 0.8}px;
    position: relative;
    top:100%;
    letter-spacing: 3px;
  }


  `;
  }

  buildTree() {
    const array = this.attrs.title.split("");

    let html3 = "";
    for (let i = 0; i < array.length; i++) {
      const html = `<span class='letter letter${i + 1}'>${array[i]}</span>`;
      html3 += html;
    }

    const word = new MotorCortex.HTMLClip({
      css: this.css,
      html: ` <div class="wrapper" >${html3} </div>`,
      selector: ".word"
    });

    this.addIncident(word, 0);

    const circleScale = new Anime.Anime(
      {
        animatedAttrs: {
          width: `${this.attrs.width}px`,
          height: `${this.attrs.width}px`
        },
        attrs: {}
      },
      {
        duration: 500,
        selector: ".circle",
        easing: "easeOutExpo"
      }
    );

    for (let i = 0; i < array.length; i++) {
      const textAnimation = new Anime.Anime(
        {
          animatedAttrs: {
            top: "0px",
            opacity: 1
          },
          attrs: {}
        },
        {
          duration: 500,
          selector: ".letter" + (i + 1),
          easing: "easeOutExpo"
        }
      );

      word.addIncident(textAnimation, 500 + 100 * (i + 1));
    }

    const circleScaleDown = new Anime.Anime(
      {
        animatedAttrs: {
          width: `${this.attrs.width*0.8}px`,
          height: `${this.attrs.width*0.8}px`
        },
        attrs: {}
      },
      {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      }
    );

    const wrapperDown = new Anime.Anime(
      {
        animatedAttrs: {
          width: `${this.attrs.width*0.8}px`,
          height: `${this.attrs.width*0.8}px`,
          transform: {
            rotate: "10deg"
          }
        },
        attrs: {}
      },
      {
        duration: 600,
        selector: ".wrapper",
        easing: "easeOutElastic"
      }
    );

    const maskDown = new Anime.Anime(
      {
        animatedAttrs: {
          maskSize: `${this.attrs.width*0.8}px`,
          transform: {
            rotate: "-10deg"
          }
        },
        attrs: {}
      },
      {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      }
    );

    const subOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      },
      {
        duration: 600,
        selector: ".sub span",
        easing: "easeOutElastic"
      }
    );

    const circleScaleDownEnd = new Anime.Anime(
      {
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
      },
      {
        duration: 600,
        selector: ".circle,.sub span,.sub",
        easing: "easeOutElastic"
      }
    );

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

module.exports = Circle;
