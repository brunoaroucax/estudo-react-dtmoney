import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          description: 'Freelance de website',
          amount: 6000,
          type: 'deposit',
          category: 'dev',
          createdAt: new Date('2021-03-30 09:00:00')
        },
        {
          id: 2,
          description: 'Aluguel',
          amount: 500,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date('2021-02-15 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  },
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

