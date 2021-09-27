import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";
const Anime = loadPlugin(AnimeDefinition);

export default class LogoBox extends HTMLClip {
  get html() {
    return `
      <div class="wrapper">
        <div class="onemore">
          <div class="redLineContainer">
            <div class="yellow">
              <div class="logo"><img src="${this.attrs.logoUrl}" alt="Italian Trulli"></div>
            </div>
            <div class="redLine">
              <div class="text text1">${this.attrs.subTitle1}</div>
              <div class="text text2">${this.attrs.subTitle2}</div>
              <div class="text text3">${this.attrs.subTitle3}</div>
            </div>
           
          </div>
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
        font-family: ${this.attrs.fontFamily} !important;
      }

      .redLineContainer {
        white-space: nowrap;
        width: 0px;
        overflow: hidden;
        background: ${this.attrs.textColor};
        display: flex;
        justify-content: center;
        align-content: center;
        opacity: 0;
        border: ${1 * this.attrs.size}px solid ${this.attrs.textColor};
      }
      
      .redLine {
        position: relative;
        right:  100px;
        overflow: hidden;
        background: ${this.attrs.bgColor};
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: ${70 * this.attrs.size}px;
      }
      
      .yellow{
        width: 0px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo img{
        width: ${50 * this.attrs.size}px;
      }
      
      .logo{
        display: flex;
        align-items: center;
      }
      
      .text{ 
        left: ${-100 * this.attrs.size}px;
        position: relative;
        display: flex;
        align-items: center;
        height: ${22 * this.attrs.size}px;
        padding-left: 8%;
        color: ${this.attrs.textColor};
        font-size :${14 * this.attrs.size}px;
      }
    `;
  }

  buildTree() {
    const opacity = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 1
        },
        attrs: {}
      },
      {
        duration: 1,
        selector: ".redLineContainer"
      }
    );

    const border = new Anime.Anime(
      {
        animatedAttrs: {
          right: "0px"
        },
        attrs: {}
      },
      {
        duration: 1000,
        selector: ".redLine"
      }
    );

    const conteiner = new Anime.Anime(
      {
        animatedAttrs: {
          width: `${this.attrs.width * 0.75 * this.attrs.size}px`
        },
        attrs: {}
      },
      {
        duration: 1000,
        selector: ".redLineContainer"
      }
    );

    for (let i = 1; i <= 3; i++) {
      const textLeft = new Anime.Anime(
        {
          animatedAttrs: {
            left: "0px"
          },
          attrs: {}
        },
        {
          duration: 500 * i,
          selector: ".text" + i,
          easing: "easeOutExpo"
        }
      );
      this.addIncident(textLeft, 500);
    }

    const conteinerMore = new Anime.Anime(
      {
        animatedAttrs: {
          width: `${this.attrs.width * this.attrs.size}px`
        },
        attrs: {}
      },
      {
        duration: 500,
        selector: ".redLineContainer"
      }
    );

    const yellowW = new Anime.Anime(
      {
        animatedAttrs: {
          width: `${80 * this.attrs.size}px`
        },
        attrs: {}
      },
      {
        duration: 500,
        selector: ".yellow"
      }
    );

    const end = new Anime.Anime(
      {
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        },
        attrs: {}
      },
      {
        duration: 500,
        selector: ".wrapper"
      }
    );

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
