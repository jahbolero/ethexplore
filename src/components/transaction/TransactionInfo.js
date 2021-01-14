import React, { useState } from "react";
import * as ethApi from "../../services/ethApi";
import Input from "./../common/Input";
import { toast } from "react-toastify";
function TransactionInfo() {
  const [transactionHash, setTransactionHash] = useState("");
  const [transaction, setTransaction] = useState({});
  function handleTransactionHashChange({ target }) {
    setTransactionHash(target.value);
  }
  function getTransaction() {
    ethApi.getTransaction(transactionHash).then((result) => {
      if (result == null) {
        toast.error("Transaction not found");
        return;
      }
      console.log(result);
      setTransaction(result);
    });
  }

  return (
    <div>
      <h3>Transactions</h3>
      <Input
        type="text"
        label="Address"
        name="address"
        value={transactionHash}
        id="address"
        onChange={handleTransactionHashChange}
      ></Input>
      <input
        type="button"
        value="Get Transaction"
        className="btn btn-primary"
        onClick={getTransaction}
      />
      {transaction.hash == null ? (
        ""
      ) : (
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
            <tr>
              <td>{transaction.hash}</td>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{transaction.value / 1000000000000000000}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionInfo;
