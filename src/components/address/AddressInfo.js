import React, { useState } from "react";
import Input from "../common/Input";
import * as ethApi from "../../services/ethApi";
import TransactionList from "./../transaction/TransactionList";
import { toast } from "react-toastify";

function AddressInfo() {
  const [address, setAddress] = useState("");
  const [transactions, setTransactions] = useState([]);

  function handleAddressChange({ target }) {
    setAddress(target.value);
  }
  function validateAddress() {
    if (ethApi.isAddress(address)) {
      toast.success("Address is valid");
    } else {
      toast.error("Address is invalid");
    }
  }
  function getBalance() {
    try {
      ethApi.getBalance(address).then((result) => {
        toast.info("Balance is:" + result / 1000000000000000000 + "(eth)");
        console.log(result / 1000000000000000000);
      });
    } catch (e) {
      toast.error("Address is invalid");
    }
  }
  function getAddressHistory() {
    ethApi.getAddressHistory3(address).then((result) => {
      if (result.length === 0) {
        toast.warning("No history found");
      }
      setTransactions(result);
    });
  }

  return (
    <div>
      <h2>Address Info</h2>
      <Input
        type="text"
        label="Address"
        name="address"
        value={address}
        id="address"
        onChange={handleAddressChange}
      ></Input>
      <input
        type="button"
        value="Validate Address"
        className="btn btn-primary"
        onClick={validateAddress}
      />
      <input
        type="button"
        value="Get Balance"
        className="btn btn-primary"
        onClick={getBalance}
      />
      <input
        type="button"
        value="Get Address History"
        className="btn btn-primary"
        onClick={getAddressHistory}
      />
      <TransactionList transactions={transactions}></TransactionList>
    </div>
  );
}

export default AddressInfo;
