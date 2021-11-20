import { useContext } from 'react';
import { TranslateContext } from './Translate/Context';
import { Locale, Translate } from './tranlsate.types';

interface ITranslateFunc {
  (key: string, params?: { [key: string]: string }): string;
}

const translate: ITranslateFunc = (key, params) => {
  const context = useContext(TranslateContext);
  if (context === undefined) throw new Error('useTranslateHook must be used within a TranslateProvider');

  if (context.translate[key] === undefined) {
    console.error(`[ebs-intl] Error: The key: ${key} was not found in provided translate props!`);
    return key;
  }

  let msg = context.translate[key][context.locale];
  const reg = /{(.*?)\}/g;

  if (msg) {
    const templateKeys = msg.match(reg);

    if (params && templateKeys) {
      for (const k of templateKeys) {
        const templateKey = k.slice(1, -1);
        if (!(templateKey in params)) throw new Error(`Please provide a params for key: ${templateKey}`);
        msg = msg.replaceAll(k, params[templateKey]);
      }
    } else if (params && !templateKeys) {
      console.warn(
        `[ebs-intl] Warn: Template {params} were provided, but the translation for - ${key} is not a template string!`,
      );
    } else if (!params && templateKeys) {
      console.error(
        `[ebs-intl] Error: The key - ${key} is a template string, please provide required placeholders! `,
        new Set(msg.match(reg)),
      );
    }
  } else {
    console.error(`[ebs-intl] Error: The key - ${key} does not contain all translation variants!`);
  }

  return msg;
};

const checkAllVariants = (translate: Translate) => {
  // console.log('check that every translation has translation variant for every language.');
  for (const k in translate) {
    const t = translate[k];
    for (const l in Locale) {
      if (t[Locale[l]] === undefined) throw new Error(`Please add translation for ${l} language for key - ${k}`);
    }
  }
};

export { ITranslateFunc, translate, checkAllVariants };
