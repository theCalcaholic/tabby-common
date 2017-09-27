export class Parameter {
  id: string;
  value:any;
  description:string;
}

export class Style {
  name:string;
  protected template:string;
  protected parameters:Array<Parameter>;

  exportString():string {
    let css = new String(this.template);
    this.parameters.forEach((param:Parameter) => {
      css.replace(param.id, param.value);
    });
    return css.toString();
  }
}
