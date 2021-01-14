import React, { useState } from "react";
import Input from "./../common/Input";
import * as ethApi from "../../services/ethApi";
import { toast } from "react-toastify";
function BlockInfo() {
  const [blockQuery, setBlockQuery] = useState("0");
  const [block, setBlock] = useState({});
  function handleBlockQueryhange({ target }) {
    setBlockQuery(target.value);
  }
  function getBlockInfo() {
    try {
      ethApi.getBlockInfo(blockQuery).then((result) => {
        if (result === null) {
          toast.error("Block not found");
          return;
        }
        result.timestamp = new Date(result.timestamp);
        setBlock(result);
      });
    } catch (error) {
      toast.error("Something's wrong with the hash.");
    }
  }
  return (
    <div>
      <h3>Block Explorer</h3>
      <Input
        type="text"
        label="Block Query(Hash or Number)"
        name="blockQuery"
        value={blockQuery}
        id="blockQuery"
        onChange={handleBlockQueryhange}
      ></Input>
      <input
        type="button"
        value="Get Block"
        className="btn btn-primary"
        onClick={getBlockInfo}
      />
      {block.hash == null ? (
        ""
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Hash</th>
              <th>Block Number</th>
              <th>Gas Used</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{block.hash}</td>
              <td>{block.number}</td>
              <td>{block.gasUsed}</td>
              <td>
                {block.timestamp.toDateString()}{" "}
                {block.timestamp.toTimeString()}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BlockInfo;
