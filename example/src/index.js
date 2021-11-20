import React, { useState } from 'react';
import { Locale as L, TranslateProvider } from 'ebs-intl';
import { First, Second } from './components';
import { translate } from './translate';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

const App = () => {
  const [locale, setLocale] = useState(L.EN);

  return (
    <div
      style={{
        padding: '15px',
        borderRadius: '4px',
        border: '1px solid rgba(0, 0, 0,  0.3)',
        width: '50%',
        margin: '50px auto',
      }}
    >
      <TranslateProvider locale={locale} translate={translate}>
        <First setLocale={setLocale} />
        <Second />
      </TranslateProvider>
    </div>
  );
};

render(<App />, document.getElementById('root'));
