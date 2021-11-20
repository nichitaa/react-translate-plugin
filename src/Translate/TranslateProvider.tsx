import React from 'react';
import { ITranslateContext, TranslateContext } from './Context';

const TranslateProvider: React.FC<ITranslateContext> = ({ children, locale, translate }) => {
  return <TranslateContext.Provider value={{ locale, translate }}>{children}</TranslateContext.Provider>;
};

export { TranslateProvider };
