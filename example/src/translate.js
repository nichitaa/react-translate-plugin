import { Locale as L } from 'ebs-intl';

export const translate = {
  hello: {
    [L.RO]: 'Salut!',
    [L.EN]: 'Hello!',
    [L.RU]: 'Привет!'
  },
  question: {
    [L.RO]: 'Salut, {name}. Cum ai dormit, {name}?',
    [L.EN]: 'Hello, {name}. How did you sleep, {name}?',
    [L.RU]: 'Привет, {name}. Как ты спал, {name}?'
  },
  defaultTranslation: {
    [L.RO]: 'traducere implicită: ',
    [L.EN]: 'default translation: ',
    [L.RU]: 'перевод по умолчанию: '
  },
  withTemplateTranslation: {
    [L.RO]: 'cu șabloane: ',
    [L.EN]: 'with templates: ',
    [L.RU]: 'с шаблонами: '
  }
};