import { writable } from 'svelte/store';


const sectionsdata = {};

export const sectionStore = writable(sectionsdata);
