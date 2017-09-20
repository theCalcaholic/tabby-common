import { Tab, TabData, tabFromData } from './tab';

export class ProfileData {
  id: string;
  tabs: TabData[]
  title: string;
}

export class Profile {
  id: string;
  title: string;
  tabs: Tab[];

  toData(): ProfileData {
    let data = new ProfileData();
    data.id = this.id;
    data.title = this.title || '';
    data.tabs = this.tabs.map((tab) => tab.toData());
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
    return profile;
}
