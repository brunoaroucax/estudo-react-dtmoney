import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/arrow-circle-up-regular.svg';
import outcomeImg from '../../assets/arrow-circle-down-regular.svg';
import closeModalImg from '../../assets/x-regular.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType ] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      description,
      value,
      category,
      type
    }

    api.post('/transaction', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button onClick={onRequestClose} className='react-modal-close'>
        <img src={closeModalImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>

        <input 
          type="text"
          placeholder='Descrição'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <input 
          type="number"
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

         <input 
          type="text"
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

         <button type='submit'>
          Cadastrar
         </button>

      </Container>
    </Modal>
  );
}