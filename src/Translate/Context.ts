import { Locale, Translate } from '../tranlsate.types';
import React from 'react';

interface ITranslateContext {
  locale: Locale;
  translate: Translate;
}

const TranslateContext = React.createContext<ITranslateContext | undefined>(undefined);

export { ITranslateContext, TranslateContext };
