import React, { useState } from "react";
import * as ethApi from "../../services/ethApi";
import Input from "./../common/Input";
import { toast } from "react-toastify";
function SendEth() {
  const [transaction, setTransaction] = useState({
    sender: "",
    receiver: "",
    amount: 0,
  });
  function handleChange({ target }) {
    setTransaction({ ...transaction, [target.name]: target.value });
  }
  function sendTransaction() {
    try {
      ethApi
        .sendTransaction(
          transaction.sender,
          transaction.receiver,
          transaction.amount
        )
        .then((receipt) => {
          console.log(receipt);
          toast.success(
            `Successfully sent transaction. Gas used:${receipt.gasUsed}`
          );
        });
    } catch (e) {
      toast.error("Please review the fields.");
    }
  }
  return (
    <div>
      <h2>Send Ethereum</h2>
      <Input
        type="text"
        label="Sender"
        name="sender"
        value={transaction.sender}
        id="sender"
        onChange={handleChange}
      ></Input>
      <Input
        type="text"
        label="Receiver"
        name="receiver"
        value={transaction.receiver}
        id="receiver"
        onChange={handleChange}
      ></Input>
      <Input
        type="number"
        label="Amount(eth)"
        name="amount"
        placeholder="0"
        value={transaction.amount === 0 ? "" : transaction.amount}
        id="amount"
        onChange={handleChange}
      ></Input>
      <input
        type="button"
        value="Send Transaction"
        className="btn btn-primary"
        onClick={sendTransaction}
      />
    </div>
  );
}

export default SendEth;
