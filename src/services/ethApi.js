import Web3 from "web3";
const web3 = new Web3("https://cloudflare-eth.com")

export function getBlockNumber(){
    return web3.eth.getBlockNumber();
}
export function isAddress(address){
    return web3.utils.isAddress(address)
}
export function getBalance(address){
    return web3.eth.getBalance(address);
}
export function getAddressHistory(address){
    web3.eth.filter({
        address: address,
        from: 1,
        to: 'latest'
        })
}