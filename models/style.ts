export class Parameter {
  id: string;
  value:any;
  description:string;
}

export abstract class Style {
  static id:string;
  protected static template:string;
  parameters:Array<Parameter>;

  exportString():string {
    let css = new String(Style.template);
    this.parameters.forEach((param:Parameter) => {
      css.replace(param.id, param.value);
    });
    return css.toString();
  }
}
