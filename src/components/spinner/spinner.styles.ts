import styled from 'styled-components';

type ContainerProps = {
  width?: string;
  height?: string;
};
export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width ?? '300px'};
  height: ${({ height }) => height ?? '300px'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
