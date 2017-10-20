export class Parameter {
  id: string;
  value:any;
  description:string;
  type:string;
  attributes:any;
}

export abstract class Style {
  id:string;
  protected template:string = '';
  parameters:Array<Parameter>;

  exportString():string {
    let css = this.template.toString();
    this.parameters.forEach((param:Parameter) => {
      console.log("replacing '${" + param.id + "}' with " + param.value);
      css = css.replace("${" + param.id + "}", param.value);
    });
    return css;
  }

  loadParameters(params:Array<Parameter>):void {
    params.forEach(p1 => {
      this.parameters.forEach((p2:Parameter, i:number) => {
        if(p1) console.log( p1.id);
        if(p2) console.log(p2.id);
        if( p2 && p1.id == p2.id ) {
          this.parameters[i] = p1;
        }
      });
    });
  }
}
