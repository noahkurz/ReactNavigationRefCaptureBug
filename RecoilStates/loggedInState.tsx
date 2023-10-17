import { atom } from "recoil";

export const loggedInState = atom({
  key: "loggedInState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
