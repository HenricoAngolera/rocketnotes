import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; /* scrollar a página sem o cabeçalho sumir. */
  
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 8px;

  background: red;
`;