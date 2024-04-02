import { writable } from "svelte/store";

const feedStore = writable({
  amount: 7,
  refresh: 8,
  stop: false,
});

export default feedStore;
