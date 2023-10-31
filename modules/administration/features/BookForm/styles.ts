import { styled } from '@example/shared';

import { Preview } from './Preview';

export const BookFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-gap: ${({ theme }) => theme.spacing(5)};
  align-items: start;
`;

export const BookFormPreview = styled(Preview)`
  grid-column: 2;
  grid-row: 1 / 5;
  position: sticky;
  top: 0;
`;
