import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const BalanceToken = () => {
  const { useCacheCall } = useDrizzle();
  const drizzle = useDrizzle()
  const contractAddress = drizzle.drizzle.contracts.TokenExchange.address;
  let tokenBalance = useCacheCall('GrtToken', 'balanceOf', contractAddress);
  const BN = drizzle.drizzle.web3.utils.BN;
  tokenBalance = new BN(tokenBalance);
  const formattedBalance = drizzle.drizzle.web3.utils.fromWei(tokenBalance);

  return (
    <>
      The exchange currently holds {formattedBalance} GRT tokens
    </>
  );
};

export default BalanceToken;
