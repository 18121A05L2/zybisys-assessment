import { atom } from "recoil";

export const watchlist = atom({
  key: "watchlist", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
