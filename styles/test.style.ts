import { Style } from '../models/style';

export class TestStyle extends Style {
  id = "testStyle";
  protected template = "body {background: url(http://www.planwallpaper.com/static/images/303836.jpg);}";
  parameters = [
    {
      id: "testParam",
      description: "Test Parameter",
      value:"5"
    }
  ];
}
