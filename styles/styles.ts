import { ClassicBrownStyle } from './classicbrown.style';
import { ElegantMintStyle } from './elegantmint.style';
import { TestStyle } from './test.style';

class DefaultStyle extends ClassicBrownStyle {
  id: 'default';
}

let styles = [
  ClassicBrownStyle,
  ElegantMintStyle,
  TestStyle
];

let style = new ClassicBrownStyle();
let defaultStyle = style.id;


export {styles, defaultStyle};
