import { BusinessTypes } from "./types";

export const texts = {
  title: "Easy Turn-Key Integration",
  desctiption:
    "Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.",
};

export const personInfo = {
  name: "Lauren Robson",
  position: "HR Director",
  desc: "“I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”",
};

export const initTypes = [
  { title: "Small Business", index: BusinessTypes.SMALLBUSINESS, actives: [6] },
  {
    title: "Medium Business",
    index: BusinessTypes.MEDIUMBUSINESS,
    actives: [1, 2],
  },
  { title: "Enterprise", index: BusinessTypes.ENTERPRISE, actives: [3, 4, 5] },
];

export const items = [
  { id: 1, title: "Sapling", desc: "HR Management", img: "" },
  { id: 2, title: "Workday", desc: "HR Management", img: "" },
  { id: 3, title: "Xero", desc: "Employers Base", img: "" },
  { id: 4, title: "Rippling", desc: "Salary Management", img: "" },
  { id: 5, title: "Expensify", desc: "HR Management", img: "" },
  { id: 6, title: "Zenefits", desc: "HR Management", img: "" },
];
