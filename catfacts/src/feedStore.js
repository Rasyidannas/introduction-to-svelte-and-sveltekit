import { writable } from "svelte/store";

const feedStore = writable({
  amount: 7,
  refresh: 8,
});

export default feedStore;
