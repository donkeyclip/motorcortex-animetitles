const _COLOR = "color";

export const RotatedLIneVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
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

export const RolingTextVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
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

export const RotatadLineRevealVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
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

export const SvgBorderVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
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

export const CircleVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
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

export const SvgDrawVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
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
export const LogoBoxVal = {
  size: {
    optional: true,
    type: "number",
    min: 0
  },
  bgColor: {
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
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  logoUrl: {
    optional: false,
    type: "string"
  }
};

export const RigthOpacityValidationVal = {
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

export const LetterScaleValidationVal = {
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
  timing: {
    optional: false,
    type: "number"
  }
};

export const CircularTextValidation = {
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
  },
  timing: {
    optional: false,
    type: "number",
    min: 1
  },
  repeats: {
    optional: false,
    type: "number",
    min: 1
  }
};
