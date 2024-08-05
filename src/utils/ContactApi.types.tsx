export interface IContactsApi {
  resources: IContact[];
  meta: Meta;
}

export interface IContact {
  id: string;
  record_type: string;
  fields: Fields;
  owner_id: any;
  children: any[];
  employers_info: any[];
  updated: string;
  created: string;
  updater: any;
  creator: string;
  avatar_url: string;
  tags: Tag[];
  last_contacted: LastContacted;
  company_last_contacted: CompanyLastContacted;
  last_contacted_user: any;
  lc: any;
  is_important: any;
  notice: any;
  reminders: any;
  reminder: any;
  creator_id: string;
  privacy: IPrivacy;
  is_editable: boolean;
  stages_info: StagesInfo;
  files: any;
  contexts: Context[];
  object_type: string;
  tags2: string[];
}

export interface Fields {
  email: Email[];
  "first name": FirstName[];
  "last name": LastName[];
  "discovered gender"?: DiscoveredGender[];
  "discovered related address"?: Address[];
  twitter?: Twitter[];
  linkedin?: Linkedin[];
  "discovered age range"?: DiscoveredAgeRange[];
  "discovered employment"?: DiscoveredEmployment[];
}

export interface Email {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface FirstName {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface LastName {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface DiscoveredGender {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface Address {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface Twitter {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface Linkedin {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface DiscoveredAgeRange {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface DiscoveredEmployment {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface Tag {
  id: string;
  tag: string;
}

export interface LastContacted {
  tstamp: any;
  type: any;
  object_id: any;
  user_id: any;
  deletion_tstamp: any;
}

export interface CompanyLastContacted {
  in: any;
  out: any;
}

export interface IPrivacy {
  read: any;
  edit: any;
}

export interface StagesInfo {}

export interface Context {
  context_key: string;
  context?: any[];
}

export interface Meta {
  per_page: number;
  total: number;
  pages: number;
  page: number;
}
