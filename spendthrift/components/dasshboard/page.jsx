import React from 'react';
import ExpenseForm from '../ExpensesForm/page';
// import TransactionList from '../TransactionList/page';

function Dashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Daily Spending Dashboard</h1>
      <ExpenseForm />
      {/* <TransactionList /> */}
    </div>
  );
}

export default Dashboard;
