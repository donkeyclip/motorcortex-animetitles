# MotorCortex-Animetitles

**Table of Contents**

- [MotorCortex-Animetitles](#motorcortex-animetitles)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [RotatedLine](#rotatedline)
  - [RollingText](#rollingtext)
  - [RotatedLineReveal](#rotatedlinereveal)
  - [SvgBorder](#svgborder)
  - [Circle](#circle)
  - [SvgDraw](#svgdraw)
  - [LogoBox](#logobox)
  - [CircularText](#circulartext)
  - [LetterScale](#letterscale)
  - [RightOpacity](#rightopacity)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-animetitles/demo/)

# Intro / Features

Using MotorCortex-Animetitles you can animate perfect titles for your clips, via its easy to use incidents.

This Plugin exposes ten incidents:

- RotatedLine
- RollingText
- RotatedLineReveal
- SvgBorder
- Circle
- SvgDraw
- LogoBox
- CircularText
- LetterScale
- RightOpacity

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-animetitles
# OR
$ yarn add @donkeyclip/motorcortex-animetitles
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import TitlesPlugin from "@donkeyclip/motorcortex-animetitles";
const Titles = loadPlugin(TitlesPlugin);
```

# Creating Incidents

## RotatedTextReveal

```javascript
const nameOfIncident = new Titles.RotatedTextReveal(
  {
    text: "Rotated Reveal Incident",
    width: 600,
    color: "black",
    fontFamily: "Righteous",
    fontSize: 40,
    stagger: "0, 300",
    exitTime: 1000,
  },
  { duration: 2000, selector: ".rotatedtextreveal" }
);
```

### RotatedTextReveal Attrs

| Name       |               Are                |                    Values |
| ---------- | :------------------------------: | ------------------------: |
| width      |  total width of clip container   |      all positive numbers |
| fontSize   |         size of the font         |      all positive numbers |
| color      |        the color of text         |         hex values or RGB |
| text       |               text               |               normal text |
| stagger    | stagger between words or letters | valid Motorcortex stagger |
| fontFamily |           font family            |                    string |
| exitTime   |    time for animation to exit    |                    number |

## TextReveal

```javascript
const nameOfIncident = new new Titles.TextReveal(
  {
    text: "Reveal Incident",
    width: 500,
    color: "black",
    fontFamily: "Righteous",
    fontSize: 40,
    stagger: "0, 300,0.5,linear,omni",
    wordSplit: false,
    exitTime: 1000,
  },
  { duration: 2500, selector: ".rollingtext" }
)();
```

### TextReveal Attrs

| Name       |               Are                |                    Values |
| ---------- | :------------------------------: | ------------------------: |
| width      |  total width of clip container   |      all positive numbers |
| fontSize   |         size of the font         |      all positive numbers |
| color      |        the color of text         |         hex values or RGB |
| text       |               text               |               normal text |
| stagger    | stagger between words or letters | valid Motorcortex stagger |
| fontFamily |           font family            |                    string |
| wordSplit  | font splitting or word splitting |                true,false |
| exitTime   |    time for animation to exit    |                    number |

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
    delayEnd: 3000,
    fontFamily: "Rubik Mono One",
  },
  {
    selector: ".rotatedline",
  }
);
```

### RotateLine Attrs

| Name                              |                       Are                       |               Values |
| --------------------------------- | :---------------------------------------------: | -------------------: |
| width                             |          total width of clip container          | all positive numbers |
| size                              |            scale of clip components             |     "S","M","L","XL" |
| lineColor                         |                the color of line                |    hex values or RGB |
| textColor                         |                the color of text                |    hex values or RGB |
| subTitle1 , subTitle2 , subTitle3 |                   right texts                   |          normal text |
| title                             |                    left text                    |          normal text |
| stopOnLast                        | if you like to stop animation on last text line |           true,false |
| delayEnd                          |           delay before last animation           |          millisecond |
| fontFamily                        |                   font family                   |               string |

## RollingText

```javascript
const nameOfIncident = new Titles.RollingText(
  {
    width: 450,
    size: "XL",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "The",
    subTitle2: "MotorCortex Team",
    subTitle3: "Presents",
    stopOnLast: false,
    delayEnd: 1000,
    fontFamily: "Commissioner",
  },
  {
    selector: ".rollingtext",
  }
);
```

### Rollingtext Attrs

| Name                              |                       Are                       |                        Values |
| --------------------------------- | :---------------------------------------------: | ----------------------------: |
| width                             |          total width of clip container          |          all positive numbers |
| size                              |            scale of clip components             | "S","M","L","XL","XXL","XXXL" |
| lineColor                         |                the color of line                |             hex values or RGB |
| textColor                         |                the color of text                |             hex values or RGB |
| subTitle1 , subTitle2 , subTitle3 |               rolling text lines                |                   normal text |
| stopOnLast                        | if you like to stop animation on last text line |                    true,false |
| delayEnd                          |           delay before last animation           |                   millisecond |
| fontFamily                        |                   font family                   |                        string |

## RotatedLineReveal

```javascript
const nameOfIncident = new Titles.RotatedLineReveal(
  {
    width: 800,
    size: "M",
    lineColor: "#ff0000",
    textColor: "#000",
    title: "Animetitles",
    subtitle: "MC Plugin",
    leftEnd: 100,
    stopOnLast: false,
    fontFamily: "Commissioner",
  },
  {
    selector: ".rotatedlinereveal",
  }
);
```

### RotatedLineReveal Attrs

| Name       |                            Are                            |               Values |
| ---------- | :-------------------------------------------------------: | -------------------: |
| width      |               total width of clip container               | all positive numbers |
| size       |                 scale of clip components                  |          "S","M","L" |
| lineColor  |                     the color of line                     |    hex values or RGB |
| textColor  |                     the color of text                     |    hex values or RGB |
| title      |                        title text                         |          normal text |
| subtitle   |                       subtitle text                       |          normal text |
| leftEnd    | left distance of componet from the left side of container |              numbers |
| stopOnLast |      if you like to stop animation on last text line      |           true,false |
| delayEnd   |                delay before last animation                |          millisecond |
| fontFamily |                        font family                        |               string |

## SvgBorder

```javascript
const nameOfIncident = new Titles.SvgBorder(
  {
    size: "L",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle: "Developed by",
    slogan: "-KMB-",
    title: "MotorCortex Team",
    stopOnLast: false,
    fontFamily: "Commissioner",
    borderGap: 300,
  },
  {
    selector: ".svgborder",
  }
);
```

### SvgBorder Attrs

| Name       |                       Are                       |               Values |
| ---------- | :---------------------------------------------: | -------------------: |
| width      |          total width of clip container          | all positive numbers |
| size       |            scale of clip components             |          "S","M","L" |
| lineColor  |                the color of line                |    hex values or RGB |
| textColor  |                the color of text                |    hex values or RGB |
| subTitle   |                  top left text                  |          normal text |
| slogan     |                under border text                |          normal text |
| title      |                   title text                    |          normal text |
| stopOnLast | if you like to stop animation on last text line |           true,false |
| delayEnd   |           delay before last animation           |          millisecond |
| fontFamily |                   font family                   |               string |

## Circle

```javascript
const nameOfIncident = new Titles.Circle(
  {
    fontSize: 40,
    circleColor: "#ff0000",
    textColor: "#000",
    title: "ANIMATED",
    subTitle: "TITLES",
    stopOnLast: false,
    fontFamily: "Righteous",
    width: 500,
  },
  {
    selector: ".circle",
  }
);
```

#### IMPORTANT

In order to use tin incident you should include the img.svg that is in demo folder in your clip.js directory

### Circle Attrs

| Name        |                             Are                              |               Values |
| ----------- | :----------------------------------------------------------: | -------------------: |
| fontSize    |                       size of the font                       | all positive numbers |
| width       | total width of clip container and width/height of the circle | all positive numbers |
| circleColor |                     the color of circle                      |    hex values or RGB |
| textColor   |                      the color of text                       |    hex values or RGB |
| subTitle    |                        top left text                         |          normal text |
| title       |                svg cobe with 1 path tag only                 |             svg text |
| stopOnLast  |       if you like to stop animation on last text line        |           true,false |
| delayEnd    |                 delay before last animation                  |          millisecond |
| fontFamily  |                         font family                          |               string |

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
    logoUrl:
      "https://donkeyclip.github.io/motorcortex-animetitles/demo/logo.png",
    fontFamily: "Rubik Mono One",
  },
  {
    selector: ".logobox",
  }
);
```

#### IMPORTANT

In order to use tin incident you should include the logo.png image in your clip.js directory

### LogoBox Attrs

| Name                              |                       Are                       |               Values |
| --------------------------------- | :---------------------------------------------: | -------------------: |
| size                              |           change the size of element            | all positive numbers |
| bgColor                           |                 the color of bg                 |    hex values or RGB |
| textColor                         |                the color of text                |    hex values or RGB |
| subTitle1 , subTitle2 , subTitle3 |                   right texts                   |          normal text |
| width                             |          total width of text container          | all positive numbers |
| stopOnLast                        | if you like to stop animation on last text line |           true,false |
| logoUrl                           |                 url of an image                 |               string |
| fontFamily                        |                   font family                   |               string |

## CircularText

```javascript
const nameOfIncident = new Titles.CircularText(
  {
    width: 500,
    height: 500,
    color: "#ff0000",
    text: "CircularText - AnimeTitles - MotorCortex - Plugin -",
    fontSize: 10,
    viewBox: 100,
    path: 38,
    fill: "#ff000000",
    fontFamily: "Righteous",
  },
  {
    selector: ".circulartext",
    repeats: 2,
  }
);
```

### CircularText Attrs

| Name       |                 Are                 |            Values |
| ---------- | :---------------------------------: | ----------------: |
| width      |    total width of clip container    |            number |
| height     |   total height of clip container    |            number |
| color      |         color for the text          | hex values or RGB |
| text       |         the displayed text          |            string |
| fontSize   |          size of the font           |            number |
| fontFamily |             font family             |            string |
| viewBox    | width for the wrapper of the circle |            number |
| path       |    width for the circle's radius    |            number |
| fill       |       color for the svg shape       | hex values or RGB |

## LetterScale

```javascript
const nameOfIncident = new Titles.LetterScale(
  {
    width: 900,
    height: 900,
    color: "rebeccapurple",
    text: "LetterScale",
    fontSize: 100,
    stroke: false,
    strokeSize: 2,
    strokeColor: "rebeccapurple",
    fontFamily: "Righteous",
  },
  {
    selector: ".letterscale",
  }
);
```

### LetterScale Attrs

| Name        |              Are               |            Values |
| ----------- | :----------------------------: | ----------------: |
| width       | total width of clip container  |            number |
| height      | total height of clip container |            number |
| color       |       color for the text       | hex values or RGB |
| text        |       the displayed text       |            string |
| fontSize    |        size of the font        |            number |
| fontFamily  |          font family           |            string |
| stroke      |     a border to SVG shapes     |           boolean |
| strokeSize  |       the stroke's size        |            number |
| strokeColor |       the stroke's color       | hex values or RGB |

## RightOpacity

```javascript
const nameOfIncident = new Titles.RightOpacity(
  {
    width: 1000,
    height: 250,
    text: "RightOpacity",
    color: "#0000",
    fontSize: 100,
    stroke: true,
    strokeSize: 2,
    strokeColor: "rebeccapurple",
    fontFamily: "Rubik Mono One",
    exitTime: 1000,
  },
  {
    selector: ".rightopacity",
  }
);
```

### RightOpacity Attrs

| Name        |              Are               |            Values |
| ----------- | :----------------------------: | ----------------: |
| width       | total width of clip container  |            number |
| height      | total height of clip container |            number |
| color       |       color for the text       | hex values or RGB |
| text        |       the displayed text       |            string |
| fontSize    |        size of the font        |            number |
| fontFamily  |          font family           |            string |
| stroke      |     a border to SVG shapes     |           boolean |
| strokeSize  |       the stroke's size        |            number |
| strokeColor |       the stroke's color       | hex values or RGB |
| exitTime    |   time for animation to exit   |            number |

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName, startTime);
```

# Contributing

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
