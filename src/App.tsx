import React from 'react';
import styled from 'styled-components';
import { Select1, Select2 } from './common/constants';
import Select from './components/select';

const Wrapper = styled.div`
  padding: 24px;
`;

const Row = styled.div`
  width: 200px;
  margin: 16px 0px 32px 0px;
`;

const Title = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
`;

function App() {
  const onChangeInput = (v: any) => console.log('v', v);

  return (
    <Wrapper>
      <Row>
        <Title>Large</Title>
        <Select items={Select1} onChange={onChangeInput} size="large" />
      </Row>
      <Row>
        <Title>Medium</Title>
        <Select
          items={[]}
          onChange={onChangeInput}
          size="medium"
          defaultValue={'b'}
        />
      </Row>
      <Row>
        <Title>Small</Title>
        <Select items={Select1} onChange={onChangeInput} size="small" />
      </Row>
      <Row>
        <Title>Disabled</Title>
        <Select
          items={Select1}
          onChange={onChangeInput}
          size="large"
          disabled={true}
        />
      </Row>
      <Row>
        <Title>Native</Title>
        <Select
          items={Select1}
          onChange={onChangeInput}
          size="large"
          isNative={true}
        />
      </Row>
      <Row>
        <Title>100 Options</Title>
        <Select
          items={Select2}
          onChange={onChangeInput}
          size="large"
        />
      </Row>
    </Wrapper>
  );
}

export default App;
