import { jsonString } from "./data";
const data = JSON.parse(jsonString);
export const allWorkshops = () => {
  return data;
};

export const getWorkshopById = (id) => {
  for (let item of data) {
    if (item.id == id) {
      return item;
    }
  }
  return null;
};
