export class Parameter {
  id: string;
  value:any;
  description:string;
  type:string;
  options?:Array<string>;
  step?:number;
  min?:number;
  max?:number;
}

export abstract class Style {
  id:string;
  protected template:string = '';
  htmlTemplate: number = 0;
  parameters:Array<Parameter>;

  exportString():string {
    let css = this.template.toString();
    this.parameters.forEach((param:Parameter) => {
      console.log("replacing '${" + param.id + "}' with " + param.value);
      css = css.replace(new RegExp("\\$\\{" + param.id + "\\}", 'g'), param.value);
    });
    return css;
  }

  loadParameters(params:Array<Parameter>):void {
    params.forEach(p1 => {
      this.parameters.forEach((p2:Parameter, i:number) => {
        if( p2 && p1.id == p2.id ) {
          this.parameters[i] = p1;
        }
      });
    });
  }
}
