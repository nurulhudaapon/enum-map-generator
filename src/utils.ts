import { Language } from "./interfaces";

export const findLang = (str: string): Language => (/enum/.test(str) ? Language.typeScript : Language.javaScript);
export const findContents = (str: string) => /\{([\s\S]*?)\}/gm.exec(str)?.[1];
export const removeValuesTs = (str: string[]) => str.map((s) => s.replace(/\=.*./, "")?.trim());
export const removeValuesJs = (str: string[]) => str.map((s) => s.replace(/\:.*./, "")?.trim());
export const camelToWord = (str: string) =>
  str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    ?.trim();
export const pascalToUpper = (str: string) =>
  str
    .replace(/([A-Z])/g, "_$1")
    .replace("_", "")
    .toUpperCase()
    ?.trim();
export const splitAndCleanContentsTs = (str: string) =>
  str
    .split(",")
    ?.filter((i) => !!i)
    ?.map((i) => i.replace(/[^0-9^a-zA-Z\=]/g, ""))
    ?.filter((i) => !!i);
export const splitAndCleanContentsJs = (str: string) =>
  str
    .split(",")
    ?.filter((i) => !!i)
    ?.map((i) => i.replace(/[^0-9^a-zA-Z\:]/g, ""))
    ?.filter((i) => !!i);
