pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GrtToken is ERC20 {
  constructor(uint256 initialSupply) public ERC20("Great Token", "GRT") {
    _mint(msg.sender, initialSupply * 10 ** uint(decimals()));
  }
}
