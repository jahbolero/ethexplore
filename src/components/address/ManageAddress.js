import React from "react";
import SendEth from "./SendEth";
import AddressInfo from "./AddressInfo";

function ManageAddress() {
  return (
    <div>
      <AddressInfo></AddressInfo>
      <br></br>

      <SendEth></SendEth>
    </div>
  );
}

export default ManageAddress;
