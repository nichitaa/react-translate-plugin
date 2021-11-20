

### **React JS - translate plugin**

### **Getting started**

1. Install deps using `yarn` and start plugin using `yarn serve:start`
2. Move in example folder, Install deps using `yarn` and start client using `yarn serve:client`

Imagine, that your application should work in different languages, that will mean that every text should have variant for every language. 

The only dependency used in `example` app is `antd`, as it is more pleasant to look at some styled components than the default browser ones, not big deal there, the presented examples are still super simple. 

## Main interfaces
```tsx
enum Locale {
  RO = 'ro-RO',
  EN = 'en-EN',
  RU = 'ru-RU',
}

interface Translate {
  [translationKey: string]: {
    [lang in Locale]: string;
  };
}

interface TranslateUtils {
  lang: Locale;
  t: ITranslateFunc;
}

interface ITranslateFunc {
  (key: string, params?: { [key: string]: string }): string;
}

```

## Usage:

Wrap your `App` component with `TranslateProvider` passing the required props: locale and translate.

```JSX
<TranslateProvider locale={locale} translate={translate}>
    <App />
</TranslateProvider>
```

`locale` must be a `Locale` enum value, you could set it like so:

```JSX
const [locale, setLocale] = useState(L.EN);
```

Changing application language is as easy as updating the application state with `setLocale` .

`useT` hook will return the interface `ITranslateFunc`, where `lang` is the current language for the application and `t` is a function that receives the key from given `translate` prop and returns text in necessary language. If the `translate` prop will change, the hook will check so that every translation has translation variant for every language.

```JSX
import React from 'react';
import { useT } from 'ebs-intl';

const Component = () => {
  const { t } = useT();
  return (
    <p>{t('hello')}</p>
  );
};

export default Component;
```

Also added the possibility to use templates in `t` 

```javascript
// translate example
const translate = {
  question: {
    [L.RO]: 'Salut, {name}. Cum ai dormit, {name}?',
    [L.EN]: 'Hello, {name}. How did you sleep, {name}?',
    [L.RU]: 'Привет, {name}. Как ты спал, {name}?'
  }
};
```

```JSX
import React from 'react';
import { useT } from 'ebs-intl';

const Component = () => {
  const { t } = useT();
  return (
    <p>{t('question', {name: 'Nichita'})}</p>
  );
};

export default Component;
```

