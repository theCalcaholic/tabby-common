import { Style, Parameter } from '../models/style';

let cssTemplate = `\
body {
  margin:50px 0;
  background:#eee;
}

#container {
  width:1000px;
  margin:0 auto;
  background:\${backgroundColor};
  font-family:helvetica,arial,sans-serif;
  font-size:15px;
}

#header {
  height:470px;
  background:#ddd url(\${headerImage})center;
  background-size:cover;
  text-shadow:1px 1px 2px rgba(0,0,0,0.5);
}

#titles {
  text-align:center;
  padding:3% 15% 0 15%;
}

#title, #subtitle {
  font-family:Palatino Linotype;
  font-style:italic;
  font-weight:bold;
  letter-spacing:3px;
  text-transform:uppercase;
  margin-bottom:10px;
  visibility: \${titleVisibility}
}

#title {
  font-size:85px;
  line-height:80%;
  color: \${color1};
}

#title:after {
  content: "\${titleText}"
}

#subtitle {
  color:\${color2};
  font-size:19px;
  line-height:160%;
}

#subtitle:after {
  content: "\${subtitleText}"
}

#monogram {
  width:80px;
  height:80px;
  line-height:76px;
  margin:0 auto;
  border:2px solid \${color1};
  color: \${color1};
  border-radius:120px;
  font-family:Palatino Linotype;
  font-size:30px;
  font-style:italic;
  margin-bottom:35px;
  -webkit-box-shadow:1px 1px 2px 0 rgba(0,0,0,0.5);
  box-shadow:1px 1px 2px 0 rgba(0,0,0,0.5);
  visibility: \${monogramVisibility}
}

#content {
  height:650px;
  overflow:hidden;
  text-align:justify;
  line-height:170%;
  color:#333;
}

.page {
  height:570px;
  padding:40px;
  overflow:auto;
}

.page=head {
  margin:0 18% 20px 18%;
  line-height:200%;
}

.tabheading {
  letter-spacing:3px;
  font-size:20px;
  color: \${color1};
}

.tabsubheading {
  font-family:Palatino Linotype;
}

#about-nav {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  text-align:center;
  font-family:Palatino Linotype;
  font-size:25px;
  font-style:italic;
  font-weight:bold;
  letter-spacing:3px;
  text-transform:uppercase;
}

.tablink {
  display:block;
  width:400px;
  height:220px;
  background:#ddd;
  background-size:cover;
  line-height:220px;
  margin:10px;
  text-decoration:none;
  color:\${color2};
}

.page-side {
   width:67%;
}

.homelink {
  display:block;
  width:120px;
  padding:8px 0 8px 3px;
  margin:25px auto 20px auto;
  border:2px solid \${color1};
  color:\${color1};
  letter-spacing:3px;
  text-align:center;
  text-decoration:none;
  font-weight:bold;
  font-size:18px;
}

#footer {
  padding:40px;
  background:\${color1};
  text-align:center;
  color:\${color2};
  font-size:17px;
}

#playerinfo-title {
  letter-spacing:3px;
  font-size:20px;
}

#playerinfo-title:after {
  content: "\${footerTitle}"
}

#playerinfo-line1, #playerinfo-line2 {
  text-transform:lowercase;
  font-family:Palatino Linotype;
}

#playerinfo-line1:after {

  content: "\${footerLine1}";
}

#playerinfo-line2:after {
  content: "\${footerLine2}";
}

#menuheading:after {
  content: "\${menuTitle}";
}

#menusubheading:after {
  content: "\${menuSubtitle}";
}

#menuheading, #menusubheading {
  visibility: \${menuTitleVisibility};
}

#monogram:after {
  content: "\${monogramLetters}";
}

`;

export class ElegantMintStyle extends Style {
  id = "elegantMint";
  htmlTemplate = 1;
  parameters = [
    {
      id: "headerImage",
      value: "https://www.walldevil.com/wallpapers/a28/mandolux-wallpaper-gallery-mintg-images-monitor-screen-joost-guy-checkout-studied-best-wallpapers-desktop-postcard.jpg",
      description: "Header Image",
      type: "url"
    },
    {
      id: "color1",
      value: "#ADD7C9",
      description: "Theme Color 1",
      type: "color"
    },
    {
      id: "color2",
      value: "#ffffff",
      description: "Theme Color 2",
      type: "color"
    },
    {
      id: "backgroundColor",
      value: "#ffffff",
      description: "Background Color",
      type: "color"
    },
    {
      id: "footerTitle",
      value: "INFO",
      description: "Footer Title",
      type: "text"
    },
    {
      id: "footerLine1",
      value: "your name — age — timezone",
      description: "Footer Text Line 1",
      type: "text"
    },
    {
      id: "footerLine2",
      value: "your@email.com",
      description: "Footer Text Line 2",
      type: "text"
    },
    {
      id: "monogramVisibility",
      value: "visible",
      description: "Monogram Visibility",
      type: "dropdown",
      options: ["visible","hidden"]
    },
    {
      id: "monogramLetters",
      value: "HK",
      description: "Monogram Letters",
      type: "text"
    },
    {
      id: "titleText",
      value: "Keep on Dreaming!",
      description: "Title Text",
      type: "text"
    },
    {
      id: "subtitleText",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Subtitle Text",
      type: "text"
    },
    {
      id: "titleVisibility",
      value: "visible",
      description: "Title Visibility",
      type: "dropdown",
      options: ["visible","hidden"]
    },
    {
      id: "menuTitle",
      value: "TITLE",
      description: "Menu Title",
      type: "text"
    },
    {
      id: "menuSubtitle",
      value: "Here goes the subtitle.",
      description: "Menu Subtitle",
      type: "text"
    },
    {
      id: "menuTitleVisibility",
      value: "visible",
      description: "Menu Title Visibility",
      type: "dropdown",
      options: ["visible","hidden"]
    }

  ];
  protected template = cssTemplate;
}