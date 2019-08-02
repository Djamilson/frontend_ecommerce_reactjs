import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: row;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`;
