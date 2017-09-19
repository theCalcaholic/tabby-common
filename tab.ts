export class TabData {
  title: string;
  content: string;
  id: number;
}

export class Tab {
    private _title: string;
    private _content: string;
    id: number;
    get title(): string {
      return this._title;
    };
    set title(theTitle: string) {
      if(this.title !== theTitle) {
        console.log("set Tab.title");
        this._title = theTitle;
        this.OnChange();
      }
    }
    get content(): string {
      return this._content;
    }
    set content(theContent: string) {
      if(this.content !== theContent) {
        console.log("set Tab.content");
        this._content = theContent;
        this.OnChange();
      }
    }
    active: false;

    constructor(id:number, title: string, onChange?: Function) {
      this._title = title;
      this._content = '';
      this.OnChange = onChange || (()=>{});
    }

    OnChange: Function;

    toData(): TabData {
      return { title: this._title, content: this._content, id: this.id }
    }
}

export function tabFromData(data: TabData): Tab {
      let tab = new Tab(data.id, data.title);
      tab.content = data.content;
      tab.id = data.id;
      return tab;
}
