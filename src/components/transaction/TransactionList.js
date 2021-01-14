import React, { useState } from "react";

function TransactionList({ transactions }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.hash}>
                <td>{transaction.hash}</td>
                <td>{transaction.from}</td>
                <td>{transaction.to}</td>
                <td>{transaction.value / 1000000000000000000}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
