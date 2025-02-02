import React from 'react';

const AccountSummary = () => {
    const accountInfo = {
        accountNumber: '123456789',
        accountType: 'Checking',
        balance: '$5,000.00',
        transactions: [
            { id: 1, date: '2023-10-01', description: 'Deposit', amount: '$1,000.00' },
            { id: 2, date: '2023-10-05', description: 'Withdrawal', amount: '$200.00' },
            { id: 3, date: '2023-10-10', description: 'Transfer', amount: '$500.00' },
        ],
    };

    return (
        <div className="account-summary">
            <h2>Account Summary</h2>
            <p>Account Number: {accountInfo.accountNumber}</p>
            <p>Account Type: {accountInfo.accountType}</p>
            <p>Balance: {accountInfo.balance}</p>
            <h3>Recent Transactions</h3>
            <ul>
                {accountInfo.transactions.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.date} - {transaction.description}: {transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountSummary;