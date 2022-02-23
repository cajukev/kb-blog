import { writable } from 'svelte-local-storage-store';
export const lang = writable('lang', {
  lang:''
});
export const page = writable('page',{
  page:''
});