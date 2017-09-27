import { Style } from '../models/style';

export class TestStyle extends Style {
  id = "testStyle";
  protected static template = "";
  parameters = [
    {
      id: "testParam",
      description: "Test Parameter",
      value:"5"
    }
  ];
}
