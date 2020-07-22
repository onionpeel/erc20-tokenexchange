pragma solidity ^0.6.0;

import './GrtToken.sol';

contract TokenExchange {
  GrtToken public grtToken;

  uint private exchangeRate;

  constructor(GrtToken _grtToken, uint _exchangeRate) public {
    grtToken = _grtToken;
    exchangeRate = _exchangeRate;
  }

  function buyTokens() payable public {
    uint amount = msg.value * exchangeRate;
    grtToken.transfer(msg.sender, amount);
  }

  function sellTokens(uint _grtTokenAmount) payable public {
    require(grtToken.balanceOf(msg.sender) >= _grtTokenAmount);
    uint ethAmount = _grtTokenAmount / exchangeRate;
    grtToken.transferFrom(msg.sender, address(this), _grtTokenAmount);
    msg.sender.transfer(ethAmount);
  }
}
