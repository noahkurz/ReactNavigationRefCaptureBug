import { atom } from 'recoil'

export const countState = atom({
    key: 'countState', // unique ID (with respect to other atoms/selectors)
    default: 3, // default value (aka initial value)
  });