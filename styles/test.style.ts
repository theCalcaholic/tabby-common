import { Style } from '../models/style';

export class TestStyle extends Style {
  id = "testStyle";
  protected template = "body {background-color: blue;}";
  parameters = [
    {
      id: "testParam",
      description: "Test Parameter",
      value:"5"
    }
  ];
}
