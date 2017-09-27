export class Parameter {
  id: string;
  value:any;
  description:string;
}

export abstract class Style {
  id:string;
  protected template:string = '';
  parameters:Array<Parameter>;

  exportString():string {
    let css = this.template.toString();
    this.parameters.forEach((param:Parameter) => {
      css.replace("${" + param.id + "}", param.value);
    });
    return css;
  }

  loadParameters(params:Array<Parameter>):void {
    params.forEach(p1 => {
      this.parameters.forEach((p2, i) => {
        if( p1.id == p2.id ) {
          this.parameters[i] = p1;
        }
      });
    });
  }
}
