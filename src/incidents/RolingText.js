import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex";
import AnimeDefinition from "@kissmybutton/motorcortex-anime";
const Anime = loadPlugin(AnimeDefinition);

export default class RolingText extends HTMLClip {
  get html() {
    return `
      <div class="wrapper">
        <div class="line"></div>
        <div class="textClip"> 
          <span>${this.attrs.subTitle1}</span>
          <span>${this.attrs.subTitle2}</span>
          <span>${this.attrs.subTitle3}</span>
        </div>
      </div>
        `;
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

    return `
      body{
       font-size: 62.5%;
      }

      .wrapper{
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        height: ${this.size.lineHeight};
        width : ${this.attrs.width}px;
        justify-content: center;
        align-items: center;
        font-family: ${this.attrs.fontFamily} !important;
      }
    
      .line{
        position: relative; 
        height: 0;
        width: 3px;
        justify-content: center;
        background: ${this.attrs.lineColor} ;
        margin-right: ${this.size.gap}rem;
      
      }
      
      .textClip{
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: ${this.size.fontSizeLeft}px;
        white-space: nowrap;
        overflow: hidden;
        height: ${this.size.fontSizeLeft}px;
      }
    
      .textClip span{
        color : ${this.attrs.textColor};
        position: relative;
        left : -${this.attrs.width / 2}px;
        width : 100%;
        height: ${this.size.fontSizeLeft}px;
        align-items: center;
        display: flex;
      }
  `;
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
    const animeLineHeight = new Anime.Anime(
      {
        animatedAttrs: {
          height: this.size.lineHeight
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      }
    );

    const animeTextLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0px"
        },
        attrs: {}
      },
      {
        duration: 800,
        selector: ".textClip span"
      }
    );

    const animeTextTop = new Anime.Anime(
      {
        animatedAttrs: {
          top: this.size.topMove
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      }
    );

    const animeTextTopNext = new Anime.Anime(
      {
        animatedAttrs: {
          top: this.size.topMove2
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      }
    );

    const animeTextLeftBack = new Anime.Anime(
      {
        animatedAttrs: {
          left: `-${this.attrs.width / 2}px`
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      }
    );

    const animeLineHeightBack = new Anime.Anime(
      {
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      }
    );

    this.addIncident(animeLineHeight, 0);
    this.addIncident(animeTextLeft, this.attrs.duration * 0.075);
    this.addIncident(animeTextTop, this.attrs.duration * 0.375);
    this.addIncident(animeTextTopNext, this.attrs.duration * 0.575);

    const delayEnd = this.attrs.delayEnd || 0;

    if (!this.attrs.stopOnLast) {
      this.addIncident(
        animeTextLeftBack,
        this.attrs.duration * 0.75 + delayEnd
      );
      this.addIncident(
        animeLineHeightBack,
        this.attrs.duration * 0.925 + delayEnd
      );
    }
  }
}
