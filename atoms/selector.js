import { selector } from "recoil";
import { nameState } from "./watchlist";

export const lengthState = selector({
  key: "lengthState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const name = get(nameState);
    const lengthOfName = name.length;
    return lengthOfName;
  },
});
