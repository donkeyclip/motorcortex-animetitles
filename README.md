# motorcortex-animetitles

## [Demo](https://donkeyclip.github.io/motorcortex-animetitles/demo/)

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-animetitles
# OR
$ yarn add @donkeyclip/motorcortex-animetitles
```

## Loading

```javascript
import {loadPlugin} from "@donkeyclip/motorcortex";
import TitlesPlugin from "@donkeyclip/motorcortex-animetitles";
const Titles = loadPlugin(TitlesPlugin);
```

# Create incident

## RotatedLine

```javascript
const nameOfIncident = new Titles.RotatedLine(
  {
    width: 400,
    size: "XL",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "test",
    subTitle2: "test2",
    subTitle3: "test3",
    title: "dokimi",
    stopOnLast: false,
    delayEnd : 3000
  },
  {
    selector: ".rotatedline"
  }
);
```

### RotateLine Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L","XL"  |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle1 , subTitle2 , subTitle3 |  right texts |  normal text  |
| title |  left text |  normal text  |
| stopOnLast |  if you like to stop animation on last text line |  true,false |
| delayEnd |  delay before last animation |  millisecond  |



## RolingText

```javascript
const nameOfIncident = new Titles.RolingText(
  {
    width: 250,
    size: "L",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "test",
    subTitle2: "test2",
    subTitle3: "test3",
    stopOnLast: false,
    delayEnd : 3000
  },
  {
    selector: ".rolingtext"
  }
);
```

### Rolingtext Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L","XL","XXL","XXXL"    |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle1 , subTitle2 , subTitle3 |  roling text lines |  normal text  |
| stopOnLast |  if you like to stop animation on last text line |  true,false |
| delayEnd |  delay before last animation |  millisecond  |



## RotatadLineReveal

```javascript
const nameOfIncident = new Titles.RotatadLineReveal(
  {
    duration: 5000,
    width: 800,
    size: "M",
    lineColor: "#ff0000",
    textColor: "#000",
    title: "Animetitle",
    subtitle: "MC Plugin",
    leftEnd: 100,
    stopOnLast: false,
    delayEnd : 3000
  },
  {
    selector: ".rotatedlinereveal"
  }
);
```

### RotatadLineReveal Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L"    |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| title | title text |  normal text  |
| subtitle | subtitle text |  normal text  |
| leftEnd |  left distance of componet from the left side of container |  numbers |
| stopOnLast |  if you like to stop animation on last text line |  true,false |
| delayEnd |  delay before last animation |  millisecond  |



## SvgBorder

```javascript
const nameOfIncident = new Titles.SvgBorder(
  {
   duration: 5000,
    size: "L",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle: "Develop by",
    slogan: "-KMB-",
    title: "MotorCortex Team",
    stopOnLast: false,
    delayEnd : 3000
  },
  {
    selector: ".svgborder"
  }
);
```

### SvgBorder Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L" |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle | top left text |  normal text  |
| slogan  | under border text |  normal text  |
| title  | title text |  normal text  |
| stopOnLast |  if you like to stop animation on last text line |  true,false |
| delayEnd |  delay before last animation |  millisecond  |



## Circle

```javascript
const nameOfIncident = new Titles.Circle(
  {
    fontSize: 40,
    circleColor: "#ff0000",
    textColor: "#000",
    title: "IOAN",
    subTitle: "BRAPAPAPA",
    stopOnLast: false,
    delayEnd : 3000,
    width:500
  },
  {
    selector: ".circle"
  }
);

```
## In order to use tin incident you should include the img.svg that is in demo folder in your clip.js directory
### Circle Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width      | total width of clip container and width/height of the circle | all positive numbers |
| circleColor |  the color of circle |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle | top left text |  normal text  |
| title  | svg cobe with 1 path tag only|  svg text  |
| stopOnLast |  if you like to stop animation on last text line |  true,false |
| delayEnd |  delay before last animation |  millisecond  |


## SvgDrow

```javascript
const nameOfIncident = new Titles.SvgDrow(
  {
 duration: 1600,
    width: 900,
    size: "M",
    lineColor: "#ff0000",
    strokeDashOffset: 10000,
    StrokeDashArray: 10000,
    erase: true,
    svg: `svg code`,
    stopOnLast: false,
    delayEnd : 3000
  },
  {
    selector: ".svgdrow"
  }
);
```

### SvgDrow Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L" |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| strokeDashOffset: | The strokeDashOffset attribute is a presentation attribute defining an offset on the rendering of the associated dash array. |  number  |
| StrokeDashArray  | The StrokeDashArray attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape; |  number  |
| erase  | erase svg after drow it |  true, false  |
| svg |  The width of the title container  |  numbers |
| stopOnLast |  if you like to stop animation on last text line |  true,false |
| delayEnd |  delay before last animation |  millisecond  |


## LogoBox

```javascript
const nameOfIncident = new Titles.LogoBox(
  {
    size: 2,
    textColor: "#fff",
    bgColor: "#000",
    subTitle1: "testdawdawddawd",
    subTitle2: "test2",
    subTitle3: "test3",
    width: 200,
    stopOnLast: false,
    logoUrl: "https://kissmybutton.github.io/motorcortex-animetitles/demo/logo.png"
  },
  {
    selector: ".logobox"
  }
);
```
## In order to use tin incident you should include the logo.png image in your clip.js directory

### LogoBox Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| size     | change the size of element  | all positive numbers |
| bgColor   |  the color of bg |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle1 , subTitle2 , subTitle3 |  right texts |  normal text  |
| width      | total width of text container | all positive numbers |
| stopOnLast |  if you like to stop animation on last text line |  true,false |
| logoUrl      | url of an image | string |


# Add incident to your clip

```javascript
clipName.addIncident(nameOfIncident, 0);

```



