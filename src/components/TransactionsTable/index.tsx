
import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface Transacrion{
  id: string,
  description: string,
  amount: number,
  type: 'deposit' | 'withdraw',
  category: string,
  createdAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transacrion[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function formatarDate(date: string){
    return new Intl.DateTimeFormat().format(
      new Date(date)
    )
  }
  function formatMoney(money: number){
    return new Intl.NumberFormat(
      'pt-BR',  { style: 'currency', currency: 'BRL' }
      ).format(money)
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Preço</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Desenvolvimento de site</td>
            <td className='deposit'>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2023</td>
          </tr> */}

          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td> {transaction.description} </td>
              <td className={transaction.type}>{formatMoney(transaction.amount)}</td>
              <td>{ transaction.category }</td>
              <td>{formatarDate(transaction.createdAt)}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  );
}