import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzleState, useDrizzle } = drizzleReactHooks;

const EthBalance = () => {
  //Generate the user's token balance rounded to two decimal places
  const userAddress = useDrizzleState(state => state.accounts[0]);
  const userBalance = useDrizzleState(state => state.accountBalances[userAddress]);
  const {drizzle} = useDrizzle();
  const userBalanceEth = drizzle.web3.utils.fromWei(userBalance, 'ether');
  const roundedBalance = Math.round(userBalanceEth * 100) / 100;

  return (
    <>
      {roundedBalance} ETH
    </>
  );
};

export default EthBalance;
