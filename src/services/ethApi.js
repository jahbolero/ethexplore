import Web3 from "web3";
const web3 = new Web3("ws://localhost:8545");

export function getBlockNumber() {
  return web3.eth.getBlockNumber();
}
export function isAddress(address) {
  return web3.utils.isAddress(address);
}
export function getBalance(address) {
  return web3.eth.getBalance(address);
}

export async function getAddressHistory(address) {
  var transactionHistory = [];

  for (var i = 0; i < (await web3.eth.getBlockNumber()); i++) {
    web3.eth.getBlock(i).then((block) => {
      block.transactions.forEach((transaction) => {
        web3.eth.getTransaction(transaction).then((result) => {
          if (result === null) {
          } else if (result.from === address || result.to === address) {
            transactionHistory.push(result);
          }
        });
      });
    });
  }
}

export async function getAddressHistory2(address) {
  var transactionHistory = [];
  var promiseArray = [];
  var number = await web3.eth.getBlockNumber();
  for (var i = 0; i < number; i++) {
    promiseArray.push(
      new Promise((resolve, reject) => {
        web3.eth.getBlock(1).then((block) => {
          block.transactions.forEach((transaction) => {
            web3.eth.getTransaction(transaction).then((result) => {
              if (result === null) {
                reject(result);
              } else if (result.from === address || result.to === address) {
                transactionHistory.push(result);
                resolve(result);
              }
            });
          });
        });
      })
    );
  }

  await Promise.all(promiseArray);

  return transactionHistory;
}

export async function getAddressHistory3(address) {
  var blockPromiseArray = [];
  var transactionPromiseArray = [];
  var transactionHistory = [];
  var number = await web3.eth.getBlockNumber();

  for (var i = 0; i <= number; i++) {
    blockPromiseArray.push(web3.eth.getBlock(i));
  }
  var blocks = await Promise.all(blockPromiseArray);
  blocks.forEach((block) => {
    block.transactions.forEach((transaction) => {
      transactionPromiseArray.push(web3.eth.getTransaction(transaction));
    });
  });
  var transactions = await Promise.all(transactionPromiseArray);
  transactions.forEach((transaction) => {
    if (transaction === null) {
      return;
    } else if (transaction.from === address || transaction.to === address) {
      transactionHistory.push(transaction);
    }
  });
  return transactionHistory;
}

export function sendTransaction(sender, receiver, amount) {
  return web3.eth.sendTransaction({
    from: sender,
    to: receiver,
    value: amount * 1000000000000000000,
  });
}
export function getTransaction(transactionHash) {
  return web3.eth.getTransaction(transactionHash);
}
export function getBlockInfo(blockQuery) {
  return web3.eth.getBlock(blockQuery);
}
export function subscribeToBlocks() {
  return web3.eth.subscribe("newBlockHeaders");
}
