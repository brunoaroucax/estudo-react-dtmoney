import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div{
    background: var(--shape-terciary);
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    border-radius: 0.375rem;
    color: var(--title);

    header{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.8125rem;
    }

    &.highlight-background{
      background: var(--green-dark);
    }
  }
`;

