// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CompanyDao is Ownable {

    string public title;

    // Can be in IPFS and handled via UI to make it more versatile. if we have time to change later.
    string public description;

    // stores the status of all the bounties ever registered and their current status.
    // also, solidity funkiness for this mapping
    mapping (address => bool) bounties;

    address public addressOfCompany;

    constructor(string memory _title, string memory _description, address _addressOfCompany){

        require(bytes(_title).length > 0, "title cannot be empty");
        require(bytes(_description).length > 0, "description cannot be empty");
        require(_addressOfCompany == address(_addressOfCompany), "address of company is invalid");

        title = _title;
        description = _description;
        addressOfCompany = _addressOfCompany;
    }

    function registerBounty(address bountyAddress) public {

        require(bounties[bountyAddress] == false, "Bounty already registered");
        bounties[bountyAddress] = true;
    }

    function updateTitle(string memory newTitle) public onlyOwner {
        title = newTitle;
    }

    function updateDescription(string memory newDescription) public onlyOwner {
        description = newDescription;
    }

    function updateAddressOfCompany(address newAddressOfCompany) public onlyOwner {
        addressOfCompany = newAddressOfCompany;
    }

}