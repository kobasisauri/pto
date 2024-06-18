export enum BusinessTypes {
  SMALLBUSINESS = 0,
  MEDIUMBUSINESS = 1,
  ENTERPRISE = 2,
}

export type Types = {
  title: string;
  index: BusinessTypes;
  actives: number[];
};
