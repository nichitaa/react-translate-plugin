export enum Locale {
  RO = 'ro-RO',
  EN = 'en-EN',
  RU = 'ru-RU',
}

export interface Translate {
  [translationKey: string]: {
    [lang in Locale]: string;
  };
}
