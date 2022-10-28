import React from "react";

// Обёртка для тайпскрипта, которая значительно разгрузит типизацию
export function pickFromSyntheticEvent<T extends HTMLElement>() {
   return <K extends keyof T>(key: K) =>
      <E extends ((t: T[K]) => void)>(fn: E) =>
         (e: React.SyntheticEvent<T>) =>
            fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');