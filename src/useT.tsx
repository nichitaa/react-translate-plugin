import { useCallback, useContext, useEffect } from 'react';
import { checkAllVariants, ITranslateFunc, translate } from './translate';
import { TranslateContext } from './Translate/Context';
import { Locale } from './tranlsate.types';

interface TranslateUtils {
  lang: Locale;
  t: ITranslateFunc;
}

const useT = (): TranslateUtils => {
  const ctx = useContext(TranslateContext);
  if (ctx === undefined) throw new Error('useT hook must be used only within a TranslateProvider!');

  useEffect(() => {
    checkAllVariants(ctx.translate);
  }, [ctx.translate]);

  const t = useCallback<ITranslateFunc>(translate, []);
  return { t, lang: ctx.locale };
};

export { useT };
