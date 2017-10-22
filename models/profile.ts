import { Tab, TabData, tabFromData } from './tab';
import { Parameter } from './style';

export class ProfileData {
  id: string;
  tabs: TabData[]
  title: string;
  styleId: string;
  styleParameters: Parameter[];
  bgMusicUrl: string | null
}

export class Profile {
  id: string;
  title: string;
  tabs: Tab[];
  styleId: string;
  styleParameters: Parameter[];
  bgMusicUrl: string | null;

  toData(): ProfileData {
    let data = new ProfileData();
    data.id = this.id;
    data.title = this.title || '';
    data.tabs = this.tabs.map((tab) => tab.toData());
    data.styleId = this.styleId;
    data.styleParameters = this.styleParameters;
    data.bgMusicUrl = this.bgMusicUrl;
    return data;
  }
}

export function profileFromData(data: ProfileData): Profile {
    let profile = new Profile();
    profile.id = data.id;
    profile.title = data.title || '';
    profile.tabs = new Array<Tab>();
    data.tabs.forEach((tab) => {
      profile.tabs.push(tabFromData(tab));
    });
    profile.styleId = data.styleId;
    profile.styleParameters = data.styleParameters;
    profile.bgMusicUrl = data.bgMusicUrl;
    return profile;
}
