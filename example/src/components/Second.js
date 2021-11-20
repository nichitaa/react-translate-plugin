import React, { useState } from 'react';
import { Col, Input, Row } from 'antd';
import { useT } from 'ebs-intl';

const Second = () => {
  const { t } = useT();
  const [name, setName] = useState('nichitaa');
  return (
    <Row gutter={8}>
      <Col offset={3} span={12}>
        <strong>{t('withTemplateTranslation')}:</strong> {t('question', { name })}
      </Col>
      <Col span={9}>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={'Change the template string name'} />
      </Col>
    </Row>
  );
};

export default Second;
