import { styled } from '@example/shared';

export const ListWrapperContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  width: 250px;
`;

export const ListActionWrapperContainer = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => theme.spacing(3)};
`;
