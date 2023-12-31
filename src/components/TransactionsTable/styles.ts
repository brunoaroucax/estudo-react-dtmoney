import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--placeholder);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1rem;
    }
    tr{
      border-radius: 0.3125rem;
    }
    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape-secondary);
      color: var(--text);
      
      font-weight: 400;
      &:first-child{
        color: var(--white);
      }

      &.deposit{
        color: var(--green-light);
      }
      &.withdraw{
        color: var(--red);
      }
    }
  }
`;

