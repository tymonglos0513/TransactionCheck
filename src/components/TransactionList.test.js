import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionList from './TransactionList';

const mockTransactions = [
  { id: 1, customerId: 123, amount: 120, date: '2024-01-01' },
  { id: 2, customerId: 456, amount: 70, date: '2024-01-15' },
  { id: 3, customerId: 123, amount: 90, date: '2024-02-01' },
  { id: 4, customerId: 456, amount: 110, date: '2024-02-15' },
  { id: 5, customerId: 123, amount: 180, date: '2024-03-01' },
  { id: 6, customerId: 456, amount: 190, date: '2024-03-15' },
  { id: 7, customerId: 123, amount: 60, date: '2024-03-19' },
];

test('renders monthly reward points table correctly', () => {
  render(<TransactionList transactions={mockTransactions} />);
  
  expect(screen.getByText('Customer ID')).toBeInTheDocument();
  expect(screen.getByText('January')).toBeInTheDocument();
  expect(screen.getByText('February')).toBeInTheDocument();
  expect(screen.getByText('March')).toBeInTheDocument();
  expect(screen.getByText('Total')).toBeInTheDocument();
  
  expect(screen.getByText('123')).toBeInTheDocument();
  expect(screen.getByText('90')).toBeInTheDocument();       // (120 - 100) * 2 + 50 = 90 : Jan
  expect(screen.getByText('40')).toBeInTheDocument();       // 90 - 50 = 40 : Feb 
  expect(screen.getByText('220')).toBeInTheDocument();      // (180 - 100) * 2 + 50 + (60 - 50) = 220 : Mar
  
  expect(screen.getByText('456')).toBeInTheDocument();
  expect(screen.getByText('20')).toBeInTheDocument();       // 70 - 50 = 20 : Jan
  expect(screen.getByText('70')).toBeInTheDocument();  // (110 - 100) * 2 + 50 = 70 : Feb
  expect(screen.getByText('230')).toBeInTheDocument();       // (190 - 100) * 2 + 50 = 230 : Mar
  
});
