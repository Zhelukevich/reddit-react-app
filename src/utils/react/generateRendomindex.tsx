/*import {assoc} from "../js/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15)
// или бибилиотека nanoid

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => assignId(obj);*/


import { assoc } from "../js/assoc";

//nanoid
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => assoc("id", generateRandomString())(obj);
//    const generatedId = (obj) => assoc("id", generateRandomString())(obj)



