import { writable } from "svelte/store";

const feedStore = writable({
  amount: 7,
});

export default feedStore;
