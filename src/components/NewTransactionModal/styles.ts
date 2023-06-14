import styled from "styled-components";

export const Container = styled.form`
  h2{
    font-size: 24px;
    line-height: 2.125rem;
    color: var(--title);
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    background: var(--background);
    color: #fff;
    padding: 1rem;
    height: 3.375rem;
    border: 0;
    display: block;
    border-radius: 0.375rem;

    & + input{
      margin-top: 1rem;
    }
    &::placeholder{
      color: var(--placeholder);
    }

  }
  button[type="submit"]{
    background: var(--green-dark);
    border: 0;
    width: 100%;
    padding: 1rem;
    border-radius: 0.375rem;
    margin-top: 2.5rem;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.625rem;
    transition: filter 0.3s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}
const color = {
  green: '#015F43',
  red: '#AA2834'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 3.625rem;
    border-radius: 0.375rem;
    background: ${(props) =>
    props.isActive ? color[props.activeColor] : '#29292E'};
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.2s;
    &:hover{
      border: 1.5px solid #111111;
    }

    img{
      height: 24px;
    }
    
    span{
      color: var(--text);
    }

`;
