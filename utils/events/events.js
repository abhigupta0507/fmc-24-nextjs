import { jsonString } from "./data";
const data = JSON.parse(jsonString);
export const allEvents = () => {
  return data;
};
export const getEventById = (id) => {
  for (const type in data) {
    for (const name in data[type]) {
      if (data[type][name].id == id) return data[type][name];
    }
  }
  return null;
};
export const getTotalPrice = (cart) => {
  let total = 0;
  cart.forEach((id) => {
    total += getEventById(id).price;
  });
  return total;
};
