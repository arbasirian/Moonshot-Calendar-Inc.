import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { Container } from './spinner.styles';
import { FC } from 'react';

type Props = {
  height: string;
  width: string;
};
const SpinnerComponent: FC<Partial<Props>> = ({ width, height }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <Container width={width} height={height}>
      <Spin indicator={antIcon} />
    </Container>
  );
};

export default SpinnerComponent;
