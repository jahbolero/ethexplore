import React from "react";
import TransactionInfo from "./transaction/TransactionInfo";
import * as ethApi from "../services/ethApi";
import BlockInfo from "./block/BlockInfo";
import BlockSubscriptionList from "./block/BlockSubscriptionList";

function ManageBlockchain() {
  return (
    <div>
      <TransactionInfo></TransactionInfo>

      <BlockInfo></BlockInfo>

      <BlockSubscriptionList></BlockSubscriptionList>
    </div>
  );
}

export default ManageBlockchain;
