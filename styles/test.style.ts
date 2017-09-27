import { Style } from '../models/style';

export class TestStyle extends Style {
  static id = "testStyle";
  protected static template = "";
  protected parameters = [
    {
      id: "testParam",
      description: "Test Parameter",
      value:"5"
    }
  ];
}
