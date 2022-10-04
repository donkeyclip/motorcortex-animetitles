import RotatedLIne from "./incidents/RotatedLine";
import RollingText from "./incidents/RollingText";
import SvgBorder from "./incidents/SvgBorder";
import RotatedLineReveal from "./incidents/RotatedLineReveal";
import Circle from "./incidents/Circle";
import LogoBox from "./incidents/LogoBox";
import RightOpacity from "./incidents/RightOpacity";
import TextReveal from "./incidents/TextReveal";
import RotatedTextReveal from "./incidents/RotatedTextReveal";
import LetterScale from "./incidents/LetterScale";
import CircularText from "./incidents/CircularText";
import {
  RotatedLIneVal,
  RollingTextVal,
  SvgBorderVal,
  RotatedLineRevealVal,
  CircleVal,
  RigthOpacityValidationVal,
  LetterScaleValidationVal,
  CircularTextValidation,
  TextRevealValidation,
  RotatedTextRevealValidation,
} from "./validation";
import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: RotatedLIne,
      name: "RotatedLine",
      attributesValidationRules: RotatedLIneVal,
    },
    {
      exportable: RollingText,
      name: "RollingText",
      attributesValidationRules: RollingTextVal,
    },
    {
      exportable: SvgBorder,
      name: "SvgBorder",
      attributesValidationRules: SvgBorderVal,
    },
    {
      exportable: RotatedLineReveal,
      name: "RotatedLineReveal",
      attributesValidationRules: RotatedLineRevealVal,
    },
    {
      exportable: Circle,
      name: "Circle",
      attributesValidationRules: CircleVal,
    },
    {
      exportable: LogoBox,
      name: "LogoBox",
    },
    {
      exportable: RightOpacity,
      name: "RightOpacity",
      attributesValidationRules: RigthOpacityValidationVal,
    },
    {
      exportable: LetterScale,
      name: "LetterScale",
      attributesValidationRules: LetterScaleValidationVal,
    },
    {
      exportable: CircularText,
      name: "CircularText",
      attributesValidationRules: CircularTextValidation,
    },
    {
      exportable: TextReveal,
      name: "TextReveal",
      attributesValidationRules: TextRevealValidation,
    },
    {
      exportable: RotatedTextReveal,
      name: "RotatedTextReveal",
      attributesValidationRules: RotatedTextRevealValidation,
    },
  ],
};
