import { ClassicBrownStyle } from './classicbrown.style';
import { ElegantMintStyle } from './elegantmint.style';

class DefaultStyle extends ClassicBrownStyle {
  id: 'default';
}

let styles = [
  ClassicBrownStyle,
  ElegantMintStyle
];

let style = new ClassicBrownStyle();
let defaultStyle = style.id;


export {styles, defaultStyle};
