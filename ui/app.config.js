const {AbiItem} = require("web3-utils");
module.exports = {
  // URI of single metadata cache instance for all networks.
  // While ocean.js includes this value for each network as part of its ConfigHelper,
  // it is assumed to be the same for all networks.
  // In components can be accessed with the useMarketMetadata hook:
  // const { appConfig } = useMarketMetadata()
  // return appConfig.metadataCacheUri
  metadataCacheUri:
    process.env.NEXT_PUBLIC_METADATACACHE_URI ||
    'https://v4.aquarius.oceanprotocol.com',

  // List of chainIds which metadata cache queries will return by default.
  // This preselects the Chains user preferences.
  chainIds: [1, 137, 56, 246, 1285],

  // List of all supported chainIds. Used to populate the Chains user preferences list.
  chainIdsSupported: [1, 137, 56, 246, 1285, 5, 80001],
  auditorDAOAddresses: ["0x28717B5680D4143b89c02141DcDB8171C967e466"],
  auditorDaoAbi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "auditorAddress",
          "type": "address"
        }
      ],
      "name": "addMemberOfDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "bountyAddress",
          "type": "address"
        }
      ],
      "name": "registerBountyToBeReviewed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "auditorAddress",
          "type": "address"
        }
      ],
      "name": "removeMemberOfDao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newDescription",
          "type": "string"
        }
      ],
      "name": "updateDescription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newTitle",
          "type": "string"
        }
      ],
      "name": "updateTitle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "description",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfMembers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "title",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  companyDaoAddress: ["0x73985e7B19412d81A3699bb3a90255366830D3f5"],
  companyDaoAbi: [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_addressOfCompany",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "bountyAddress",
          "type": "address"
        }
      ],
      "name": "registerBounty",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAddressOfCompany",
          "type": "address"
        }
      ],
      "name": "updateAddressOfCompany",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newDescription",
          "type": "string"
        }
      ],
      "name": "updateDescription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newTitle",
          "type": "string"
        }
      ],
      "name": "updateTitle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addressOfCompany",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "description",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "title",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  bountyAbi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "bountyHost_",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenAddress_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "endTimeStamp_",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "metaDataID_",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "maxSubmissions_",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "bountyHost",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStatus",
      "outputs": [
        {
          "internalType": "enum Bounty.BountyStatus",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "storageID",
          "type": "string"
        }
      ],
      "name": "getSubmission",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "whiteHat",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "vulnStorageID",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timeStamp",
              "type": "uint256"
            },
            {
              "internalType": "enum Core.SubmissionStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct Core.SubmissionMetaData",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newDeadline",
          "type": "uint256"
        }
      ],
      "name": "increaseDeadline",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxSubmissions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "metaDataID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minSubmissions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "enum Core.SubmissionStatus",
          "name": "response",
          "type": "uint8"
        }
      ],
      "name": "processSubmission",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "submissionCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "submissions",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "whiteHat",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "vulnStorageID",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timeStamp",
              "type": "uint256"
            },
            {
              "internalType": "enum Core.SubmissionStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct Core.SubmissionMetaData",
          "name": "metaData",
          "type": "tuple"
        },
        {
          "internalType": "bool",
          "name": "isValue",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "storageID",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "collatoral",
          "type": "uint256"
        }
      ],
      "name": "submitVulnerability",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  bountyAddress: ["0xF6bF231744C5F6F44bb9782aA718827cBb01B0fb"],

  infuraProjectId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID || 'xxx',

  defaultDatatokenTemplateIndex: 2,
  // The ETH address the marketplace fee will be sent to.
  marketFeeAddress:
    process.env.NEXT_PUBLIC_MARKET_FEE_ADDRESS ||
    '0x9984b2453eC7D99a73A5B3a46Da81f197B753C8d',
  // publisher market fee that is taken upon ordering an asset, it is an absolute value, it is declared on erc20 creation
  publisherMarketOrderFee:
    process.env.NEXT_PUBLIC_PUBLISHER_MARKET_ORDER_FEE || '0',
  // fee recieved by the publisher market when a dt is bought from a fixed rate exchange, percent
  publisherMarketFixedSwapFee:
    process.env.NEXT_PUBLIC_PUBLISHER_MARKET_FIXED_SWAP_FEE || '0',

  // consume market fee that is taken upon ordering an asset, it is an absolute value, it is specified on order
  consumeMarketOrderFee:
    process.env.NEXT_PUBLIC_CONSUME_MARKET_ORDER_FEE || '0',
  // fee recieved by the consume market when a dt is bought from a fixed rate exchange, percent
  consumeMarketFixedSwapFee:
    process.env.NEXT_PUBLIC_CONSUME_MARKET_FIXED_SWAP_FEE || '0',

  // Used for conversion display, can be whatever coingecko API supports
  // see: https://api.coingecko.com/api/v3/simple/supported_vs_currencies
  currencies: [
    'EUR',
    'USD',
    'CAD',
    'GBP',
    'SGD',
    'HKD',
    'CNY',
    'JPY',
    'INR',
    'RUB',
    'ETH',
    'BTC',
    'LINK'
  ],

  // Tokens to fetch the spot prices from coingecko, against above currencies.
  // Refers to Coingecko API tokenIds.
  coingeckoTokenIds: ['ocean-protocol', 'h2o', 'ethereum', 'matic-network'],

  // Config for https://github.com/oceanprotocol/use-dark-mode
  darkModeConfig: {
    classNameDark: 'dark',
    classNameLight: 'light',
    storageKey: 'oceanDarkMode'
  },

  // Used to show or hide the fixed or free price options
  // tab to publishers during the price creation.
  allowFixedPricing: process.env.NEXT_PUBLIC_ALLOW_FIXED_PRICING || 'true',
  allowFreePricing: process.env.NEXT_PUBLIC_ALLOW_FREE_PRICING || 'true',

  // Set the default privacy policy to initially display
  // this should be the slug of your default policy markdown file
  defaultPrivacyPolicySlug: '/privacy/en',

  // This enables / disables the use of a GDPR compliant
  // privacy preference center to manage cookies on the market
  // If set to true a gdpr.json file inside the content directory
  // is used to create and show a privacy preference center / cookie banner
  // To learn more about how to configure and use this, please refer to the readme
  privacyPreferenceCenter:
    process.env.NEXT_PUBLIC_PRIVACY_PREFERENCE_CENTER || 'false'
}