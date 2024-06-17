import { BusinessTypes } from "./types";

export const texts = {
  title: "Easy Turn-Key Integration",
  desctiption:
    "Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.",
};

export const types = [
  { title: "Small Business", index: BusinessTypes.SMALLBUSINESS, actives: [6] },
  {
    title: "Medium Business",
    index: BusinessTypes.MEDIUMBUSINESS,
    actives: [],
  },
  { title: "Enterprise", index: BusinessTypes.ENTERPRISE, actives: [] },
];

export const items = [
  { id: 1, title: "Sapling", desc: "HR Management", img: "" },
  { id: 2, title: "Workday", desc: "HR Management", img: "" },
  { id: 3, title: "Xero", desc: "Employers Base", img: "" },
  { id: 4, title: "Rippling", desc: "Salary Management", img: "" },
  { id: 5, title: "Expensify", desc: "HR Management", img: "" },
  { id: 6, title: "Zenefits", desc: "HR Management", img: "" },
];
