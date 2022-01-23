import { writable } from 'svelte/store';


const globaldata = {};

export const globalStore = writable(globaldata);
