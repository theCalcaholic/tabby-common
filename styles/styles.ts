import { ClassicBrownStyle } from './classicbrown.style';
import { TestStyle } from './test.style';

class DefaultStyle extends ClassicBrownStyle {
  id: 'default';
}

let styles = [
  ClassicBrownStyle,
  TestStyle
];

let style = new ClassicBrownStyle();
let defaultStyle = style.id;


export {styles, defaultStyle};
