// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Marketplace// is ERC721, ERC1155
{
address private _owner;

constructor() {
    _owner = msg.sender;
}

function createNft() public {


}


}
