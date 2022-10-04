import { styled } from '@astral/ui';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export default Container;
