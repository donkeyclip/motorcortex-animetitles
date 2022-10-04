import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class RotatedTextReveal extends HTMLClip {
  get html() {
    this.list = this.attrs.text.split("");
    const divList = this.list
      .map((e, i) => {
        return `<div class="letter letter-item-${i}">${
          e === " " ? "&nbsp;" : e
        }</div>
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
        text-transform:uppercase;
        font-family: ${this.attrs.fontFamily};
        position: relative;
        transform: rotate(90deg);
        transform-origin: bottom left;
       
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
          transform: { rotate: "0deg" },
        },
        initialValues: {
          transform: { rotate: "90deg" },
        },
      },
      {
        duration: 600,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: this.attrs.stagger ? `@stagger(${this.attrs.stagger})` : 0,
      }
    );

    if (this.attrs.exitTime) {
      const exit = new CSSEffect(
        {
          animatedAttrs: {
            transform: { rotate: "90deg" },
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
