import { ClassicBrownStyle } from './classicbrown.style';
import { TestStyle } from './test.style';

class DefaultStyle extends ClassicBrownStyle {
  id: 'default';
}

let styles = [
  ClassicBrownStyle,
  TestStyle
];

let defaultId = new ClassicBrownStyle().id;


export {styles, defaultStyle};
