import React from 'react'
import {StarIcon, CurrencyDollarIcon, ArrowPathIcon, ArrowUturnDownIcon} from "@heroicons/react/24/solid"
import { ChainId, ThirdwebProvider, useAddress, useMetamask, useContract,useContractData, useContractCall} from '@thirdweb-dev/react';
import { currency } from '../constants';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';

function AdminControls() {

  const {contract, isLoading } = useContract("0x5Be33552F4b1D8cC007062Ac313505a5dB69cce4");
  const { data: totalCommission } = useContractData(contract, "operatorTotalCommission"); 

  const {mutateAsync: DrawWinnerTicket} = useContractCall(contract,"DrawWinnerTicket");
  const {mutateAsync: RefundAll} = useContractCall(contract,"RefundAll");
  const {mutateAsync: RestartDraw} = useContractCall(contract,"restartDraw");
  const {mutateAsync: WithdrawCommission} = useContractCall(contract,"WithdrawCommission");

  const handleDrawWinnerTicket = async () => {
    
    const notification  = toast.loading("Drawing winner...");

    try {

      const data = await DrawWinnerTicket ([{}]);

      toast.success("Winner Drawn!", {
        id: notification,
      });
      console.info("Contract called succsess"), data;

    } catch(err) {
        toast.error("Something went wrong!", {
          id: notification,
        });
        console.log("Contract call failed", err);
    }
    
  };

  const handleRefundAll = async () => {  
    const notification  = toast.loading("Refunding all...");
    try {
      const data = await RefundAll ([{}]);
      toast.success("All refunded!", {
        id: notification,
      });
      console.info("Contract called succsess"), data;

    } catch(err) {
        toast.error("Something went wrong!", {
          id: notification,
        });
        console.log("Contract call failed", err);
    }
  };

  const handleRestartDraw = async () => {  
    const notification  = toast.loading("Restarting Draw...");
    try {
      const data = await RestartDraw ([{}]);
      toast.success("Draw restarted!", {
        id: notification,
      });
      console.info("Contract called succsess"), data;

    } catch(err) {
        toast.error("Something went wrong!", {
          id: notification,
        });
        console.log("Contract call failed", err);
    }
  };

  const handleWithdrawCommission = async () => {  
    const notification  = toast.loading("Withdrawing commission...");
    try {
      const data = await WithdrawCommission ([{}]);
      toast.success("Commission withdrawn!", {
        id: notification,
      });
      console.info("Contract called succsess"), data;

    } catch(err) {
        toast.error("Something went wrong!", {
          id: notification,
        });
        console.log("Contract call failed", err);
    }
  };



  return (
    <div className='text-white text-center px-5 py-3 rounded-md
     border-emerald-300/20 border mt-5'>
        <h2 className='font-bold'>Admin Controls</h2>
        <p className='mb-5'>Total commision to be withdrawn: {totalCommission && Number(ethers.utils.formatEther(totalCommission.toString())) } {" "} {currency}</p>

        <div className=' flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
            
            <button className='admin-button'  onClick = {handleDrawWinnerTicket}>
            <StarIcon className='h-6 mx-auto mb-2'/>
                Draw Winner
            </button>
            <button className='admin-button' onClick = {handleWithdrawCommission}>
                <CurrencyDollarIcon className='h-6 mx-auto mb-2'/>
                Withdraw Commission
            </button>
            <button className='admin-button' onClick = {handleRestartDraw}>
                <ArrowPathIcon className='h-6 mx-auto mb-2'/>
                Restart Draw
            </button>
            <button className='admin-button' onClick = {handleRefundAll}>
                <ArrowUturnDownIcon className='h-6 mx-auto mb-2'/>
                Refund All
            </button>
        </div>
    </div>
  )
}

export default AdminControls