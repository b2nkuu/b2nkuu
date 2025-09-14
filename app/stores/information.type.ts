export interface Information {
  version: string;
  about: About;
  skill: Skills;
  contributor: Contributors;
  experience: Experience[];
}

export interface About {
  image: string;
  name: {
    en: string;
    th: string;
    jp: string;
  };
  fullname: string;
  headline: string;
  livein: string;
  birthday: string;
  wallet: {
    btc: Wallet;
    ton: Wallet;
  };
  contact: {
    github: Contact;
    linkedin: Contact;
    email: Contact;
  };
}

export interface Wallet {
  name: string;
  code: string;
  address: string;
}

export interface Contact {
  name: string;
  "shields-icon": string;
  color: string;
  link: string;
}

export interface Skills {
  golang: SkillCategory;
  dart: SkillCategory;
  other: SkillCategory;
}

export interface SkillCategory {
  name: string;
  library: Record<string, Library>;
}

export interface Library {
  name: string;
  github: string;
}

export interface Contributors {
  mytonwallet: Contributor;
  fluttergen: Contributor;
}

export interface Contributor {
  name: string;
  link: string;
}

export interface Experience {
  code: string;
  name: string;
  link: string;
  year: string;
  role: string;
  stack?: string[];
}
