This project creates an ERC-20 token that can be bought and sold using ETH.  

It was developed with Truffle and Drizzle, but it cannot be completed because Drizzle is not able to compile smart contracts written with Solidity 0.6.0 or higher.  OpenZeppelin's token contracts use 0.6.0, thus making them incompatible with Drizzle.  This results in an error when trying to make transactions using cacheSend or useCacheSend, which get rejected with a "function not found" message.  This problem was encountered when creating BuyForm.js.  The project will be completed if Drizzle gets updated.  
