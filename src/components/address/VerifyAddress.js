import React , {useState} from 'react'
import Input from '../common/Input'
import * as ethApi from "../../services/ethApi"

function VerifyAddress() {
    
    const [address,setAddress]=useState("");
    function handleAddressChange({target}){
        setAddress(target.value);
    }
    function validateAddress(event){
    event.preventDefault();
    console.log(ethApi.isAddress(address));
    }
    function getBalance(){
        ethApi.getBalance(address).then((result)=>{
            console.log(result/1000000000000000000);
        })
    }
    function getAddressHistory(){
        ethApi.getAddressHistory(address).then((result)=>{
            console.log(result);
        })
    }
    return (
        <div>

            <Input type="text" label="Address" name="address" value={address} id="address" onChange={handleAddressChange}></Input>
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
          
        </div>
    )

}

export default VerifyAddress
