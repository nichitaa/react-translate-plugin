import React from 'react';
import { Col, Row, Select } from 'antd';
import { Locale as L, useT } from 'ebs-intl';

const { Option } = Select;

const First = ({ setLocale }) => {
  const { t, lang } = useT();
  return (
    <Row gutter={8}>
      <Col span={3}>
        <Select placeholder={'Change app locale'} defaultValue={lang} onChange={(lang) => setLocale(lang)}>
          <Option value={L.RO}>RO</Option>
          <Option value={L.RU}>RU</Option>
          <Option value={L.EN}>EN</Option>
        </Select>
      </Col>
      <Col span={12}>
        <strong>{t('defaultTranslation')}: </strong>
        {t('hello')}
      </Col>
    </Row>
  );
};

export default First;
