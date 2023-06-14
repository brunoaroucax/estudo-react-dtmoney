import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--background) ;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem 7.625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    font-size: 1rem;
    background-color: var(--green);
    padding: 0 1.25rem;
    height: 3.125rem;
    color: var(--white);
    border-radius: 0.375rem;
    border: 0;
    transition: background-color 0.3s;

    &:hover{
      background-color: var(--green-light);
    }
  }
`;