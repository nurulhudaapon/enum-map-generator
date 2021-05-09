import { Language } from "./interfaces";
import { camelToWord, pascalToUpper } from "./utils";

const SNIPPETS_JS = (enumName: string, lines: string[]) =>
  `const ${pascalToUpper(enumName)}_MAPPING = {
    ${lines.join(",\n	")},
};`;

const SNIPPETS_TS = (enumName: string, lines: string[]) =>
  `export const ${pascalToUpper(enumName)}_MAPPING: Record<${enumName}, string> = {
    ${lines.join(",\n	")},
};
`;

export const LINE_TEMPLATE = (enumName: string, enumFieldName: string) => `[${enumName}.${enumFieldName}]: '${camelToWord(enumFieldName)}'`;

export const SNIPPETS = {
  [Language.javaScript]: SNIPPETS_JS,
  [Language.typeScript]: SNIPPETS_TS,
};

export const ERROR_MESSAGES = {
  noValidEnum: "There is no valid enum in your clipboard",
};
