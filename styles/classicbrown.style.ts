import { Style, Parameter } from '../models/style';

let cssTemplate = `\
body {
  background-image: url(\${backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
}
.tab {
  visibility: hidden;
  appearance: none;
  border-color: red;
  border-width: 1px;
  border-style: solid;
}
.tab + div {
  display: none;
}
.tab:checked + div {
  display: block;
}
.tabcontent *, .tabtitle {
  font-family: Calibri, Arial, sans-serif;
  color: #880F0F;
  font-size: medium;
}
.tabcontent a {
  color: #FF2222;
}
.tabcontent ul {
  list-style: none;
  padding-left: 0;
}
.tabcontent li {
  margin-bottom: 1em;
}
.tabcontent img {
  max-width: 300px;
  margin: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: #440808;
}
.tabtitle {
  margin: 5px 10px;
  padding: 5px;
  font-size: \${tabFontSize};
  line-height: 2em;
  background-color: \${tabBackgroundColour};
  color: \${tabTextColour};
  cursor: pointer;
  /*font-weight: bold;*/
  border-radius: 5px;
}
.tabtitle:hover {
  background-color: #EEEEEE;
  color: #880F0F;
}
.contentcontainer {
  padding: 10px;
  min-height: 80%;
}
#editmode .tab + div {
  display: block;
}`;

export class ClassicBrownStyle extends Style {
  id = "classicBrown";
  parameters = [
    {
      id: "backgroundUrl",
      value: "https://www.bienenfisch-design.com/wp-content/uploads/wpsg_produktbilder/6410/tn/s-800-600-feine-pergament-textur-003.jpg",
      description: "Background URL",
      type: "url"
    },
    {
      id: "tabBackgroundColour",
      value: "#880F0F",
      description: "Tab Background Colour",
      type: "color"
    },
    {
      id: "tabTextColour",
      value: "#FFFFFF",
      description: "Tab Text Colour",
      type: "color"
    },
    {
      id: "tabFontSize",
      value: "1.1em",
      description: "Tab Font Size",
      type: "number"
    }
  ];
  protected template = cssTemplate;
}
