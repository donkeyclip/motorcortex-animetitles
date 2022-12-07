import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class TextReveal extends HTMLClip {
  get html() {
    this.list = this.attrs.text.split(this.attrs.wordSplit ? " " : "");
    const divList = this.list
      .map((e, i) => {
        return `<div class="letter letter-item-${i}">${
          e === " " ? "&nbsp;" : e
        }</div>
          ${this.attrs.wordSplit ? `<div>&nbsp;</div>` : ""}
        `;
      })
      .join("");

    return `
      <div class="wrapper">
        <div class="letter-wrapper">
          ${divList}
        </div>
      </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width:${this.attrs.width}px;
        height: ${this.attrs.fontSize}px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .letter{
        font-size:${this.attrs.fontSize}px;
        color:${this.attrs.color};
        text-transform:${this.attrs.textTransform};
        font-family: ${this.attrs.fontFamily};
        position: relative;
       
      }
      
      .letter-wrapper{
        width:${this.attrs.width}px;
        height: ${this.attrs.fontSize}px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  buildTree() {
    const left = new CSSEffect(
      {
        animatedAttrs: {
          top: `0%`,
        },
        initialValues: {
          top: `100%`,
        },
      },
      {
        duration: 600,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: this.attrs.stagger ? `@stagger(${this.attrs.stagger})` : 0,
      }
    );

    if (this.attrs.exit) {
      const exit = new CSSEffect(
        {
          animatedAttrs: {
            top: `${this.attrs.exit === "top" ? -100 : 100}%`,
          },
        },
        {
          duration: 600,
          selector: ".letter",
          easing: "easeOutExpo",
          delay: this.attrs.stagger ? `@stagger(${this.attrs.stagger})` : 0,
        }
      );
      this.addIncident(exit, this.attrs.exitTime || 1000);
    }

    this.addIncident(left, 0);
  }
}
