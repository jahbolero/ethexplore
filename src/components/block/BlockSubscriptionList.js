import React, { useState } from "react";
import * as ethApi from "../../services/ethApi";
import { toast } from "react-toastify";
function BlockSubscriptionList() {
  const [blocks, setBlocks] = useState([]);
  function subscribeToBlocks() {
    ethApi
      .subscribeToBlocks()
      .on("connected", function (subscriptionId) {
        console.log(subscriptionId);
        toast.success("Subscribed to network");
      })
      .on("data", function (blockHeader) {
        let block = {
          hash: blockHeader.hash,
          number: blockHeader.number,
          timestamp: new Date(blockHeader.timestamp),
        };
        addToBlock(block);
      })
      .on("error", console.error);
  }
  function addToBlock(block) {
    console.log(block);
    setBlocks((oldBlocks) => [block].concat(...oldBlocks));
  }

  return (
    <div>
      <h3>Block List</h3>
      <input
        type="button"
        value="Subscribe"
        className="btn btn-info"
        onClick={subscribeToBlocks}
      ></input>
      <table className="table">
        <thead>
          <tr>
            <th>Hash</th>
            <th>Block Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => {
            return (
              <tr key={block.hash}>
                <td>{block.hash}</td>
                <td>{block.number}</td>
                <td>
                  {block.timestamp.toDateString()}{" "}
                  {block.timestamp.toTimeString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BlockSubscriptionList;
