export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  icon3dUrl: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  items: string[];
}

export interface StaffCategory {
  id: string;
  name: string;
  iconName: string;
  icon3dUrl: string;
  description: string;
  avatarEmoji: string;
  roles: {
    title: string;
    description: string;
    tags: string[];
  }[];
}

export interface CoreStrength {
  title: string;
  description: string;
  iconName: string;
  icon3dUrl: string;
  highlight: string;
  accentBg: string;
}

export interface FormData {
  fullName: string;
  organization: string;
  phone: string;
  category: string;
  duration: string;
  staffCount: string;
  details: string;
}
