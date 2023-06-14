import incomeImg from '../../assets/arrow-circle-up-regular.svg';
import outcomeImg from '../../assets/arrow-circle-down-regular.svg';
import totalImg from '../../assets/currency-dollar-regular.svg';
import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>
          R$ 17.400,00
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong>
          R$ 1.259,00
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>
          R$ 16.141,00
        </strong>
      </div>
    </Container>
  );
}