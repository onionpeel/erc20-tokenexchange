import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const BalanceToken = () => {
  const { useCacheCall } = useDrizzle();
  const userAccount = useDrizzleState(state => state.accounts[0]);
  const tokenBalance = useCacheCall('GrtToken', 'balanceOf', userAccount);

  return (
    <>
      {tokenBalance} GRT
    </>
  );
};

export default BalanceToken;
