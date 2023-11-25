import { writable } from "svelte/store";
export const todos = writable([
    {
        title: "Cose da fare",
        done: false
    }
]);