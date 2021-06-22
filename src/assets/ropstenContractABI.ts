export default {
  CompoundLens: [
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address payable',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'cTokenBalances',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'balanceOf',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowBalanceCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'balanceOfUnderlying',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenBalance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenAllowance',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenBalances',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'address payable',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'cTokenBalancesAll',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'balanceOf',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowBalanceCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'balanceOfUnderlying',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenBalance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenAllowance',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenBalances[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'cTokenMetadata',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'exchangeRateCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'supplyRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'reserveFactorMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalBorrows',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalReserves',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalSupply',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalCash',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isListed',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'collateralFactorMantissa',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'underlyingAssetAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cTokenDecimals',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'underlyingDecimals',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'compSpeed',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowCap',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenMetadata',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'cTokenMetadataAll',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'exchangeRateCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'supplyRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'reserveFactorMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalBorrows',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalReserves',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalSupply',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalCash',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isListed',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'collateralFactorMantissa',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'underlyingAssetAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cTokenDecimals',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'underlyingDecimals',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'compSpeed',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowCap',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenMetadata[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'cTokenUnderlyingPrice',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'underlyingPrice',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenUnderlyingPrice',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'cTokenUnderlyingPriceAll',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'underlyingPrice',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenUnderlyingPrice[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerLensInterface',
          name: 'comptroller',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLimits',
      outputs: [
        {
          components: [
            {
              internalType: 'contract CToken[]',
              name: 'markets',
              type: 'address[]',
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'shortfall',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.AccountLimits',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'contract Comp',
          name: 'comp',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getCompBalanceMetadata',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'balance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'delegate',
              type: 'address',
            },
          ],
          internalType: 'struct CompoundLens.CompBalanceMetadata',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Comp',
          name: 'comp',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerLensInterface',
          name: 'comptroller',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getCompBalanceMetadataExt',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'balance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'delegate',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'allocated',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CompBalanceMetadataExt',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'contract Comp',
          name: 'comp',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint32[]',
          name: 'blockNumbers',
          type: 'uint32[]',
        },
      ],
      name: 'getCompVotes',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'blockNumber',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CompVotes[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'contract GovernorBravoInterface',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovBravoProposals',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'proposer',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'eta',
              type: 'uint256',
            },
            {
              internalType: 'address[]',
              name: 'targets',
              type: 'address[]',
            },
            {
              internalType: 'uint256[]',
              name: 'values',
              type: 'uint256[]',
            },
            {
              internalType: 'string[]',
              name: 'signatures',
              type: 'string[]',
            },
            {
              internalType: 'bytes[]',
              name: 'calldatas',
              type: 'bytes[]',
            },
            {
              internalType: 'uint256',
              name: 'startBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'againstVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'abstainVotes',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'canceled',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'executed',
              type: 'bool',
            },
          ],
          internalType: 'struct CompoundLens.GovBravoProposal[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'contract GovernorBravoInterface',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovBravoReceipts',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'hasVoted',
              type: 'bool',
            },
            {
              internalType: 'uint8',
              name: 'support',
              type: 'uint8',
            },
            {
              internalType: 'uint96',
              name: 'votes',
              type: 'uint96',
            },
          ],
          internalType: 'struct CompoundLens.GovBravoReceipt[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'contract GovernorAlpha',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovProposals',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'proposer',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'eta',
              type: 'uint256',
            },
            {
              internalType: 'address[]',
              name: 'targets',
              type: 'address[]',
            },
            {
              internalType: 'uint256[]',
              name: 'values',
              type: 'uint256[]',
            },
            {
              internalType: 'string[]',
              name: 'signatures',
              type: 'string[]',
            },
            {
              internalType: 'bytes[]',
              name: 'calldatas',
              type: 'bytes[]',
            },
            {
              internalType: 'uint256',
              name: 'startBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'againstVotes',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'canceled',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'executed',
              type: 'bool',
            },
          ],
          internalType: 'struct CompoundLens.GovProposal[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'contract GovernorAlpha',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovReceipts',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'hasVoted',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'support',
              type: 'bool',
            },
            {
              internalType: 'uint96',
              name: 'votes',
              type: 'uint96',
            },
          ],
          internalType: 'struct CompoundLens.GovReceipt[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Base200bps_Slope2000bps_Jump20000bps_Kink90: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'jumpMultiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'kink_',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'baseRatePerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplierPerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'jumpMultiplierPerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'kink',
          type: 'uint256',
        },
      ],
      name: 'NewInterestParams',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'baseRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'blocksPerYear',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'jumpMultiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'kink',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'multiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  Base200bps_Slope3000bps: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'baseRatePerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplierPerBlock',
          type: 'uint256',
        },
      ],
      name: 'NewInterestParams',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'baseRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'blocksPerYear',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'multiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  Base500bps_Slope1200bps: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'baseRatePerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplierPerBlock',
          type: 'uint256',
        },
      ],
      name: 'NewInterestParams',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'baseRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'blocksPerYear',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'multiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  Base200bps_Slope1000bps: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'baseRatePerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplierPerBlock',
          type: 'uint256',
        },
      ],
      name: 'NewInterestParams',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'baseRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'blocksPerYear',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'multiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  StdComptrollerG2: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketEntered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketExited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'MarketListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCloseFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCloseFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCollateralFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCollateralFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewLiquidationIncentive',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldMaxAssets',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: 'NewMaxAssets',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPauseGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: 'NewPauseGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'oldPriceOracle',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'newPriceOracle',
          type: 'address',
        },
      ],
      name: 'NewPriceOracle',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Unitroller',
          name: 'unitroller',
          type: 'address',
        },
      ],
      name: '_become',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setBorrowPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCloseFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCollateralFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: '_setLiquidationIncentive',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: '_setMaxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setMintPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: '_setPauseGuardian',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract PriceOracle',
          name: 'newOracle',
          type: 'address',
        },
      ],
      name: '_setPriceOracle',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setSeizePaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setTransferPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_supportMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountAssets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'checkMembership',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'enterMarkets',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenAddress',
          type: 'address',
        },
      ],
      name: 'exitMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAssetsIn',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'liquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: 'isListed',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'collateralFactorMantissa',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'maxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mintAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualMintAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'mintVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'contract PriceOracle',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pauseGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingComptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowerIndex',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'seizeGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'transferGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  StdComptrollerG1: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketEntered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketExited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'MarketListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCloseFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCloseFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCollateralFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCollateralFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewLiquidationIncentive',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldMaxAssets',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: 'NewMaxAssets',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'oldPriceOracle',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'newPriceOracle',
          type: 'address',
        },
      ],
      name: 'NewPriceOracle',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Unitroller',
          name: 'unitroller',
          type: 'address',
        },
        {
          internalType: 'contract PriceOracle',
          name: '_oracle',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_closeFactorMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_maxAssets',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'reinitializing',
          type: 'bool',
        },
      ],
      name: '_become',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCloseFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCollateralFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: '_setLiquidationIncentive',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: '_setMaxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract PriceOracle',
          name: 'newOracle',
          type: 'address',
        },
      ],
      name: '_setPriceOracle',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_supportMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountAssets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'checkMembership',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'enterMarkets',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenAddress',
          type: 'address',
        },
      ],
      name: 'exitMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAssetsIn',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'liquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: 'isListed',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'collateralFactorMantissa',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'maxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mintAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'mintVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'contract PriceOracle',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingComptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowerIndex',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  cErc20Delegate: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: '_becomeImplementation',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: '_resignImplementation',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  ZRX: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_who',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  WBTC: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_initialAmount',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: '_tokenName',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: '_decimalUnits',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: '_tokenSymbol',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'allocateTo',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  USDT: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_upgradedAddress',
          type: 'address',
        },
      ],
      name: 'deprecate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_spender',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'deprecated',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_evilUser',
          type: 'address',
        },
      ],
      name: 'addBlackList',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_from',
          type: 'address',
        },
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'upgradedAddress',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'balances',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'maximumFee',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'unpause',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_maker',
          type: 'address',
        },
      ],
      name: 'getBlackListStatus',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'allowed',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'paused',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: 'who',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'pause',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getOwner',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'newBasisPoints',
          type: 'uint256',
        },
        {
          name: 'newMaxFee',
          type: 'uint256',
        },
      ],
      name: 'setParams',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'issue',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
        {
          name: '_spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          name: 'remaining',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'basisPointsRate',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'isBlackListed',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_clearedUser',
          type: 'address',
        },
      ],
      name: 'removeBlackList',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAX_UINT',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_blackListedUser',
          type: 'address',
        },
      ],
      name: 'destroyBlackFunds',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          name: '_initialSupply',
          type: 'uint256',
        },
        {
          name: '_name',
          type: 'string',
        },
        {
          name: '_symbol',
          type: 'string',
        },
        {
          name: '_decimals',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Issue',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'newAddress',
          type: 'address',
        },
      ],
      name: 'Deprecate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'feeBasisPoints',
          type: 'uint256',
        },
        {
          indexed: false,
          name: 'maxFee',
          type: 'uint256',
        },
      ],
      name: 'Params',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_blackListedUser',
          type: 'address',
        },
        {
          indexed: false,
          name: '_balance',
          type: 'uint256',
        },
      ],
      name: 'DestroyedBlackFunds',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_user',
          type: 'address',
        },
      ],
      name: 'AddedBlackList',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_user',
          type: 'address',
        },
      ],
      name: 'RemovedBlackList',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'Pause',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'Unpause',
      type: 'event',
    },
  ],
  USDC: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_who',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  SAI: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_initialAmount',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: '_tokenName',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: '_decimalUnits',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: '_tokenSymbol',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'allocateTo',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  REP: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_initialAmount',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: '_tokenName',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: '_decimalUnits',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: '_tokenSymbol',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'allocateTo',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  DAI: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'chainId_',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'guy',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: true,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes4',
          name: 'sig',
          type: 'bytes4',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'usr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'arg1',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'arg2',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'LogNote',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'PERMIT_TYPEHASH',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'usr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'usr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'guy',
          type: 'address',
        },
      ],
      name: 'deny',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'usr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'move',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'nonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiry',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'allowed',
          type: 'bool',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'permit',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'usr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'pull',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'usr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'push',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'guy',
          type: 'address',
        },
      ],
      name: 'rely',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'version',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'wards',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  BAT: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_who',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Fauceteer: [
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract EIP20NonStandardInterface',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'drip',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  PriceFeed: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'previousPriceMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'requestedPriceMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newPriceMantissa',
          type: 'uint256',
        },
      ],
      name: 'PricePosted',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'assetPrices',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isPriceOracle',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'setDirectPrice',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'underlyingPriceMantissa',
          type: 'uint256',
        },
      ],
      name: 'setUnderlyingPrice',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  COMP: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegator',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'fromDelegate',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'toDelegate',
          type: 'address',
        },
      ],
      name: 'DelegateChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegate',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'previousBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBalance',
          type: 'uint256',
        },
      ],
      name: 'DelegateVotesChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'DELEGATION_TYPEHASH',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'DOMAIN_TYPEHASH',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'rawAmount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      name: 'checkpoints',
      outputs: [
        {
          internalType: 'uint32',
          name: 'fromBlock',
          type: 'uint32',
        },
        {
          internalType: 'uint96',
          name: 'votes',
          type: 'uint96',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'delegatee',
          type: 'address',
        },
      ],
      name: 'delegate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'delegatee',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiry',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'delegateBySig',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'delegates',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getCurrentVotes',
      outputs: [
        {
          internalType: 'uint96',
          name: '',
          type: 'uint96',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'getPriorVotes',
      outputs: [
        {
          internalType: 'uint96',
          name: '',
          type: 'uint96',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'nonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'numCheckpoints',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'rawAmount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'rawAmount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Timelock: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'delay_',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'txHash',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'signature',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'CancelTransaction',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'txHash',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'signature',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'ExecuteTransaction',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'newDelay',
          type: 'uint256',
        },
      ],
      name: 'NewDelay',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'txHash',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'signature',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'QueueTransaction',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: true,
      inputs: [],
      name: 'GRACE_PERIOD',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAXIMUM_DELAY',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MINIMUM_DELAY',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'acceptAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'signature',
          type: 'string',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'cancelTransaction',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'delay',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'signature',
          type: 'string',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'executeTransaction',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Administered',
          name: 'administered',
          type: 'address',
        },
      ],
      name: 'harnessAcceptAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
      ],
      name: 'harnessSetAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'signature',
          type: 'string',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'queueTransaction',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'queuedTransactions',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'delay_',
          type: 'uint256',
        },
      ],
      name: 'setDelay',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'pendingAdmin_',
          type: 'address',
        },
      ],
      name: 'setPendingAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  PriceData: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint64',
          name: 'priorTimestamp',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'messageTimestamp',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'blockTimestamp',
          type: 'uint256',
        },
      ],
      name: 'NotWritten',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'source',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'key',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'timestamp',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'value',
          type: 'uint64',
        },
      ],
      name: 'Write',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'source',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'key',
          type: 'string',
        },
      ],
      name: 'get',
      outputs: [
        {
          internalType: 'uint64',
          name: '',
          type: 'uint64',
        },
        {
          internalType: 'uint64',
          name: '',
          type: 'uint64',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'source',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'key',
          type: 'string',
        },
      ],
      name: 'getPrice',
      outputs: [
        {
          internalType: 'uint64',
          name: '',
          type: 'uint64',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'message',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ],
      name: 'put',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'message',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ],
      name: 'source',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  WETH: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'guy',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'src',
          type: 'address',
        },
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'withdraw',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'dst',
          type: 'address',
        },
        {
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'deposit',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address',
        },
        {
          name: '',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          name: 'guy',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: true,
          name: 'dst',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'dst',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Deposit',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'src',
          type: 'address',
        },
        {
          indexed: false,
          name: 'wad',
          type: 'uint256',
        },
      ],
      name: 'Withdrawal',
      type: 'event',
    },
  ],
  Uniswap: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_feeToSetter',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'token0',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'token1',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'pair',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'PairCreated',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allPairs',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'allPairsLength',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'tokenA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenB',
          type: 'address',
        },
      ],
      name: 'createPair',
      outputs: [
        {
          internalType: 'address',
          name: 'pair',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'feeTo',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'feeToSetter',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'getPair',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_feeTo',
          type: 'address',
        },
      ],
      name: 'setFeeTo',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_feeToSetter',
          type: 'address',
        },
      ],
      name: 'setFeeToSetter',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  uni: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '_who',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  GovernorAlpha: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'timelock_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'comp_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'guardian_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          indexed: false,
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          indexed: false,
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'ProposalCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'ProposalQueued',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'support',
          type: 'bool',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'votes',
          type: 'uint256',
        },
      ],
      name: 'VoteCast',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'BALLOT_TYPEHASH',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'DOMAIN_TYPEHASH',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: '__abdicate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: '__acceptAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: '__executeSetTimelockPendingAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: '__queueSetTimelockPendingAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'cancel',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'support',
          type: 'bool',
        },
      ],
      name: 'castVote',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'support',
          type: 'bool',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'castVoteBySig',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comp',
      outputs: [
        {
          internalType: 'contract CompInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'execute',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'getActions',
      outputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
      ],
      name: 'getReceipt',
      outputs: [
        {
          components: [
            {
              internalType: 'bool',
              name: 'hasVoted',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'support',
              type: 'bool',
            },
            {
              internalType: 'uint96',
              name: 'votes',
              type: 'uint96',
            },
          ],
          internalType: 'struct GovernorAlpha.Receipt',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'guardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'latestProposalIds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalMaxOperations',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalThreshold',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'proposals',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'forVotes',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'againstVotes',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'canceled',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'executed',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'propose',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'queue',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'quorumVotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'state',
      outputs: [
        {
          internalType: 'enum GovernorAlpha.ProposalState',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'timelock',
      outputs: [
        {
          internalType: 'contract TimelockInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'votingDelay',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'votingPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  GovernorBravo: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'timelock_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'comp_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'votingPeriod_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'votingDelay_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'proposalThreshold_',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          indexed: false,
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          indexed: false,
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'ProposalCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'ProposalQueued',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldProposalThreshold',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newProposalThreshold',
          type: 'uint256',
        },
      ],
      name: 'ProposalThresholdSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'votes',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
      ],
      name: 'VoteCast',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldVotingDelay',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newVotingDelay',
          type: 'uint256',
        },
      ],
      name: 'VotingDelaySet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldVotingPeriod',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newVotingPeriod',
          type: 'uint256',
        },
      ],
      name: 'VotingPeriodSet',
      type: 'event',
    },
    { payable: true, stateMutability: 'payable', type: 'fallback' },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
      ],
      name: '_setImplementation',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          indexed: false,
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          indexed: false,
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'ProposalCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'ProposalQueued',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldProposalThreshold',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newProposalThreshold',
          type: 'uint256',
        },
      ],
      name: 'ProposalThresholdSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'votes',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
      ],
      name: 'VoteCast',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldVotingDelay',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newVotingDelay',
          type: 'uint256',
        },
      ],
      name: 'VotingDelaySet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldVotingPeriod',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newVotingPeriod',
          type: 'uint256',
        },
      ],
      name: 'VotingPeriodSet',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'BALLOT_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'DOMAIN_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAX_PROPOSAL_THRESHOLD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAX_VOTING_DELAY',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAX_VOTING_PERIOD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MIN_PROPOSAL_THRESHOLD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MIN_VOTING_DELAY',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MIN_VOTING_PERIOD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'governorAlpha',
          type: 'address',
        },
      ],
      name: '_initiate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newProposalThreshold',
          type: 'uint256',
        },
      ],
      name: '_setProposalThreshold',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newVotingDelay',
          type: 'uint256',
        },
      ],
      name: '_setVotingDelay',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newVotingPeriod',
          type: 'uint256',
        },
      ],
      name: '_setVotingPeriod',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'cancel',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        { internalType: 'uint8', name: 'support', type: 'uint8' },
      ],
      name: 'castVote',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        { internalType: 'uint8', name: 'support', type: 'uint8' },
        { internalType: 'uint8', name: 'v', type: 'uint8' },
        { internalType: 'bytes32', name: 'r', type: 'bytes32' },
        { internalType: 'bytes32', name: 's', type: 'bytes32' },
      ],
      name: 'castVoteBySig',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        { internalType: 'uint8', name: 'support', type: 'uint8' },
        { internalType: 'string', name: 'reason', type: 'string' },
      ],
      name: 'castVoteWithReason',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comp',
      outputs: [
        {
          internalType: 'contract CompInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'execute',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'getActions',
      outputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
      ],
      name: 'getReceipt',
      outputs: [
        {
          components: [
            {
              internalType: 'bool',
              name: 'hasVoted',
              type: 'bool',
            },
            {
              internalType: 'uint8',
              name: 'support',
              type: 'uint8',
            },
            {
              internalType: 'uint96',
              name: 'votes',
              type: 'uint96',
            },
          ],
          internalType: 'struct GovernorBravoDelegateStorageV1.Receipt',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'initialProposalId',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'timelock_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'comp_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'votingPeriod_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'votingDelay_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'proposalThreshold_',
          type: 'uint256',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'latestProposalIds',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalCount',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalMaxOperations',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalThreshold',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'proposals',
      outputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        { internalType: 'uint256', name: 'eta', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'forVotes',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'againstVotes',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'abstainVotes',
          type: 'uint256',
        },
        { internalType: 'bool', name: 'canceled', type: 'bool' },
        { internalType: 'bool', name: 'executed', type: 'bool' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'propose',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'queue',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'quorumVotes',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'state',
      outputs: [
        {
          internalType: 'enum GovernorBravoDelegateStorageV1.ProposalState',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'timelock',
      outputs: [
        {
          internalType: 'contract TimelockInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'votingDelay',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'votingPeriod',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Pair_ETH_ZRX: [
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'reversedMarket',
          type: 'bool',
        },
      ],
      name: 'getReservesFraction',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      name: 'update',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Pair_COMP_ETH: [
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'reversedMarket',
          type: 'bool',
        },
      ],
      name: 'getReservesFraction',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      name: 'update',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Pair_DAI_ETH: [
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'reversedMarket',
          type: 'bool',
        },
      ],
      name: 'getReservesFraction',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      name: 'update',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Pair_WBTC_ETH: [
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'reversedMarket',
          type: 'bool',
        },
      ],
      name: 'getReservesFraction',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      name: 'update',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Pair_REP_ETH: [
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'reversedMarket',
          type: 'bool',
        },
      ],
      name: 'getReservesFraction',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      name: 'update',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Pair_BAT_ETH: [
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'reversedMarket',
          type: 'bool',
        },
      ],
      name: 'getReservesFraction',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      name: 'update',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Pair_ETH_USDC: [
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'blockTimestampLast',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'reversedMarket',
          type: 'bool',
        },
      ],
      name: 'getReservesFraction',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve0',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserve1',
      outputs: [
        {
          internalType: 'uint112',
          name: '',
          type: 'uint112',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint112',
          name: 'reserve0_',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1_',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast_',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: 'price0CumulativeLast_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price1CumulativeLast_',
          type: 'uint256',
        },
      ],
      name: 'update',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  StdComptrollerG4: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSpeed',
          type: 'uint256',
        },
      ],
      name: 'CompSpeedUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compBorrowIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedBorrowerComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'supplier',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compSupplyIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedSupplierComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      name: 'MarketComped',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketEntered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketExited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'MarketListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCloseFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCloseFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCollateralFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCollateralFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCompRate',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCompRate',
          type: 'uint256',
        },
      ],
      name: 'NewCompRate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewLiquidationIncentive',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldMaxAssets',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: 'NewMaxAssets',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPauseGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: 'NewPauseGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'oldPriceOracle',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'newPriceOracle',
          type: 'address',
        },
      ],
      name: 'NewPriceOracle',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: '_addCompMarkets',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Unitroller',
          name: 'unitroller',
          type: 'address',
        },
      ],
      name: '_become',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_dropCompMarket',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setBorrowPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCloseFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCollateralFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'compRate_',
          type: 'uint256',
        },
      ],
      name: '_setCompRate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: '_setLiquidationIncentive',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: '_setMaxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setMintPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: '_setPauseGuardian',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract PriceOracle',
          name: 'newOracle',
          type: 'address',
        },
      ],
      name: '_setPriceOracle',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setSeizePaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setTransferPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_supportMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountAssets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allMarkets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'checkMembership',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'holders',
          type: 'address[]',
        },
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'bool',
          name: 'borrowers',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'suppliers',
          type: 'bool',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compAccrued',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowerIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compClaimThreshold',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compInitialIndex',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSpeeds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplierIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplyState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'enterMarkets',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenAddress',
          type: 'address',
        },
      ],
      name: 'exitMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getAllMarkets',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAssetsIn',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCompAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'liquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: 'isListed',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'collateralFactorMantissa',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'maxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mintAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualMintAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'mintVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'contract PriceOracle',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pauseGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingComptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'refreshCompSpeeds',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowerIndex',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'seizeGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'transferGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Unitroller: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingImplementation',
          type: 'address',
        },
      ],
      name: 'NewPendingImplementation',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptImplementation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPendingImplementation',
          type: 'address',
        },
      ],
      name: '_setPendingImplementation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingComptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cZRX: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cWBTC: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cUSDT: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'becomeImplementationData',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'allowResign',
          type: 'bool',
        },
        {
          internalType: 'bytes',
          name: 'becomeImplementationData',
          type: 'bytes',
        },
      ],
      name: '_setImplementation',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'delegateToImplementation',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'delegateToViewImplementation',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cUSDC: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cETH: [
    {
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'contract CToken',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'mint',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'repayBorrow',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  cSAI: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cREP: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cDAI: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'becomeImplementationData',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'allowResign',
          type: 'bool',
        },
        {
          internalType: 'bytes',
          name: 'becomeImplementationData',
          type: 'bytes',
        },
      ],
      name: '_setImplementation',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'delegateToImplementation',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'delegateToViewImplementation',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  cBAT: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Reservoir: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'dripRate_',
          type: 'uint256',
        },
        {
          internalType: 'contract EIP20Interface',
          name: 'token_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'target_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      constant: false,
      inputs: [],
      name: 'drip',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'dripRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'dripStart',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'dripped',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'target',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'contract EIP20Interface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  open_oracle: [
    {
      inputs: [
        {
          internalType: 'contract OpenOraclePriceData',
          name: 'priceData_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'reporter_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'anchorToleranceMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'anchorPeriod_',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'underlying',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'symbolHash',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'baseUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum UniswapConfig.PriceSource',
              name: 'priceSource',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'fixedPrice',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'uniswapMarket',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isUniswapReversed',
              type: 'bool',
            },
          ],
          internalType: 'struct UniswapConfig.TokenConfig[]',
          name: 'configs',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'symbol',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'anchorPrice',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldTimestamp',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTimestamp',
          type: 'uint256',
        },
      ],
      name: 'AnchorPriceUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'symbol',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reporter',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'anchor',
          type: 'uint256',
        },
      ],
      name: 'PriceGuarded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'symbol',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'PriceUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'reporter',
          type: 'address',
        },
      ],
      name: 'ReporterInvalidated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'symbolHash',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldTimestamp',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTimestamp',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldPrice',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newPrice',
          type: 'uint256',
        },
      ],
      name: 'UniswapWindowUpdated',
      type: 'event',
    },
    {
      inputs: [],
      name: 'anchorPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'ethBaseUnit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'expScale',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'i',
          type: 'uint256',
        },
      ],
      name: 'getTokenConfig',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'underlying',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'symbolHash',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'baseUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum UniswapConfig.PriceSource',
              name: 'priceSource',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'fixedPrice',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'uniswapMarket',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isUniswapReversed',
              type: 'bool',
            },
          ],
          internalType: 'struct UniswapConfig.TokenConfig',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'getTokenConfigByCToken',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'underlying',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'symbolHash',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'baseUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum UniswapConfig.PriceSource',
              name: 'priceSource',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'fixedPrice',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'uniswapMarket',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isUniswapReversed',
              type: 'bool',
            },
          ],
          internalType: 'struct UniswapConfig.TokenConfig',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'symbol',
          type: 'string',
        },
      ],
      name: 'getTokenConfigBySymbol',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'underlying',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'symbolHash',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'baseUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum UniswapConfig.PriceSource',
              name: 'priceSource',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'fixedPrice',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'uniswapMarket',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isUniswapReversed',
              type: 'bool',
            },
          ],
          internalType: 'struct UniswapConfig.TokenConfig',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'symbolHash',
          type: 'bytes32',
        },
      ],
      name: 'getTokenConfigBySymbolHash',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'underlying',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'symbolHash',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'baseUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum UniswapConfig.PriceSource',
              name: 'priceSource',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'fixedPrice',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'uniswapMarket',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isUniswapReversed',
              type: 'bool',
            },
          ],
          internalType: 'struct UniswapConfig.TokenConfig',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
      ],
      name: 'getTokenConfigByUnderlying',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'underlying',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'symbolHash',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'baseUnit',
              type: 'uint256',
            },
            {
              internalType: 'enum UniswapConfig.PriceSource',
              name: 'priceSource',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'fixedPrice',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'uniswapMarket',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isUniswapReversed',
              type: 'bool',
            },
          ],
          internalType: 'struct UniswapConfig.TokenConfig',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'message',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ],
      name: 'invalidateReporter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lowerBoundAnchorRatio',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'newObservations',
      outputs: [
        {
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'acc',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'numTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'oldObservations',
      outputs: [
        {
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'acc',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes[]',
          name: 'messages',
          type: 'bytes[]',
        },
        {
          internalType: 'bytes[]',
          name: 'signatures',
          type: 'bytes[]',
        },
        {
          internalType: 'string[]',
          name: 'symbols',
          type: 'string[]',
        },
      ],
      name: 'postPrices',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'symbol',
          type: 'string',
        },
      ],
      name: 'price',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'priceData',
      outputs: [
        {
          internalType: 'contract OpenOraclePriceData',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'prices',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reporter',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reporterInvalidated',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'message',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ],
      name: 'source',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'upperBoundAnchorRatio',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Maximillion: [
    {
      inputs: [
        {
          internalType: 'contract CEther',
          name: 'cEther_',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      constant: true,
      inputs: [],
      name: 'cEther',
      outputs: [
        {
          internalType: 'contract CEther',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
      ],
      name: 'repayBehalf',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'contract CEther',
          name: 'cEther_',
          type: 'address',
        },
      ],
      name: 'repayBehalfExplicit',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
  ],
  cCOMP: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'contract ComptrollerInterface',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'contract InterestRateModel',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'becomeImplementationData',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'allowResign',
          type: 'bool',
        },
        {
          internalType: 'bytes',
          name: 'becomeImplementationData',
          type: 'bytes',
        },
      ],
      name: '_setImplementation',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract InterestRateModel',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract ComptrollerInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'delegateToImplementation',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'delegateToViewImplementation',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'contract InterestRateModel',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'contract CTokenInterface',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  g6: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'CompGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSpeed',
          type: 'uint256',
        },
      ],
      name: 'CompSpeedUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSpeed',
          type: 'uint256',
        },
      ],
      name: 'ContributorCompSpeedUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compBorrowIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedBorrowerComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'supplier',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compSupplyIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedSupplierComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketEntered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketExited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'MarketListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBorrowCap',
          type: 'uint256',
        },
      ],
      name: 'NewBorrowCap',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldBorrowCapGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newBorrowCapGuardian',
          type: 'address',
        },
      ],
      name: 'NewBorrowCapGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCloseFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCloseFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCollateralFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCollateralFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewLiquidationIncentive',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPauseGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: 'NewPauseGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'oldPriceOracle',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'newPriceOracle',
          type: 'address',
        },
      ],
      name: 'NewPriceOracle',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Unitroller',
          name: 'unitroller',
          type: 'address',
        },
      ],
      name: '_become',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: '_grantComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newBorrowCapGuardian',
          type: 'address',
        },
      ],
      name: '_setBorrowCapGuardian',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setBorrowPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCloseFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCollateralFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'compSpeed',
          type: 'uint256',
        },
      ],
      name: '_setCompSpeed',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'compSpeed',
          type: 'uint256',
        },
      ],
      name: '_setContributorCompSpeed',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: '_setLiquidationIncentive',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'newBorrowCaps',
          type: 'uint256[]',
        },
      ],
      name: '_setMarketBorrowCaps',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setMintPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: '_setPauseGuardian',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract PriceOracle',
          name: 'newOracle',
          type: 'address',
        },
      ],
      name: '_setPriceOracle',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setSeizePaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setTransferPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_supportMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountAssets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allMarkets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowCapGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowCaps',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'checkMembership',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'holders',
          type: 'address[]',
        },
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'bool',
          name: 'borrowers',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'suppliers',
          type: 'bool',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compAccrued',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowerIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compContributorSpeeds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compInitialIndex',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSpeeds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplierIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplyState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'enterMarkets',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenAddress',
          type: 'address',
        },
      ],
      name: 'exitMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getAllMarkets',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAssetsIn',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCompAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'lastContributorBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'liquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: 'isListed',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'collateralFactorMantissa',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'maxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mintAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualMintAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'mintVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'contract PriceOracle',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pauseGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingComptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowerIndex',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'seizeGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'transferGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
      ],
      name: 'updateContributorRewards',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Comptroller: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingImplementation',
          type: 'address',
        },
      ],
      name: 'NewPendingImplementation',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptImplementation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPendingImplementation',
          type: 'address',
        },
      ],
      name: '_setPendingImplementation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingComptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSpeed',
          type: 'uint256',
        },
      ],
      name: 'CompSpeedUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compBorrowIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedBorrowerComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'supplier',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compSupplyIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedSupplierComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'error',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'info',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'detail',
          type: 'uint256',
        },
      ],
      name: 'Failure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      name: 'MarketComped',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketEntered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketExited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'MarketListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCloseFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCloseFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCollateralFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCollateralFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCompRate',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCompRate',
          type: 'uint256',
        },
      ],
      name: 'NewCompRate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewLiquidationIncentive',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldMaxAssets',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: 'NewMaxAssets',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPauseGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: 'NewPauseGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'oldPriceOracle',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract PriceOracle',
          name: 'newPriceOracle',
          type: 'address',
        },
      ],
      name: 'NewPriceOracle',
      type: 'event',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: '_addCompMarkets',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Unitroller',
          name: 'unitroller',
          type: 'address',
        },
      ],
      name: '_become',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_dropCompMarket',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: '_mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setBorrowPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCloseFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'newCollateralFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCollateralFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'compRate_',
          type: 'uint256',
        },
      ],
      name: '_setCompRate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: '_setLiquidationIncentive',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newMaxAssets',
          type: 'uint256',
        },
      ],
      name: '_setMaxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setMintPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: '_setPauseGuardian',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract PriceOracle',
          name: 'newOracle',
          type: 'address',
        },
      ],
      name: '_setPriceOracle',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setSeizePaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setTransferPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_supportMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountAssets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allMarkets',
      outputs: [
        {
          internalType: 'contract CToken',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'contract CToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'checkMembership',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'holders',
          type: 'address[]',
        },
        {
          internalType: 'contract CToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'bool',
          name: 'borrowers',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'suppliers',
          type: 'bool',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
      ],
      name: 'claimComp',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compAccrued',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowerIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compClaimThreshold',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compInitialIndex',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'compRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSpeeds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplierIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplyState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'enterMarkets',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenAddress',
          type: 'address',
        },
      ],
      name: 'exitMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getAllMarkets',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAssetsIn',
      outputs: [
        {
          internalType: 'contract CToken[]',
          name: '',
          type: 'address[]',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCompAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'liquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: 'isListed',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'collateralFactorMantissa',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'maxAssets',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mintAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualMintAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'mintVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'contract PriceOracle',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pauseGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingComptrollerImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'refreshCompSpeeds',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowerIndex',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'seizeGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferAllowed',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'transferGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferVerify',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Starport: [
    {
      inputs: [
        {
          internalType: 'contract ICash',
          name: 'cash_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address[]',
          name: 'newAuthorities',
          type: 'address[]',
        },
      ],
      name: 'ChangeAuthorities',
      type: 'event',
      signature:
        '0x56d44466d1c48fd1de3f25b7c3a500601147815289e3a1c69c0c4ad0fadcac7f',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'trxRequest',
          type: 'string',
        },
      ],
      name: 'ExecTrxRequest',
      type: 'event',
      signature:
        '0xc25618d2506dbaa46f0a3819f68074c34ed888161951d0d833fea35b82a4faa9',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bytes[]',
          name: 'extrinsics',
          type: 'bytes[]',
        },
      ],
      name: 'ExecuteProposal',
      type: 'event',
      signature:
        '0x97b9e105962881d0aea472b7f0335a84c21cce09bc7917f3db0ea5e4b23116e8',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Lock',
      type: 'event',
      signature:
        '0xc459acef3ffe957663bb49d644b20d0c790bcb41573893752a72ba6f023b9386',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'LockCash',
      type: 'event',
      signature:
        '0x0ba767ef2faa3001dbd3344d5b427be12f2e090ae3dcbe2f0d0ecf2bf17a8a17',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'supplyCap',
          type: 'uint256',
        },
      ],
      name: 'NewSupplyCap',
      type: 'event',
      signature:
        '0x9e0ad9cee10bdf36b7fbd38910c0bdff0f275ace679b45b922381c2723d676f8',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint32',
          name: 'eraId',
          type: 'uint32',
        },
        {
          indexed: true,
          internalType: 'uint32',
          name: 'eraIndex',
          type: 'uint32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'noticeHash',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'result',
          type: 'bytes',
        },
      ],
      name: 'NoticeInvoked',
      type: 'event',
      signature:
        '0xedd00d39b017eafbdd1eb7463087942ca834c96b1aa19e2a5ae97afef538c1a3',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'noticeHash',
          type: 'bytes32',
        },
      ],
      name: 'NoticeReplay',
      type: 'event',
      signature:
        '0xaa1bfc5b12d79088f08d530fb8f8acb278a400400e829512a39851b5bb999a2c',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYield',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYieldIndex',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'nextCashYieldStart',
          type: 'uint256',
        },
      ],
      name: 'SetFutureYield',
      type: 'event',
      signature:
        '0x251ac1e011d739fec76126545192770052c706a63b2aac90521becbaa159c418',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'Unlock',
      type: 'event',
      signature:
        '0xae2a2f3f8158e4173d24a3a113140dcec8a721085e8b5c93e5cd7071718e8df2',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'UnlockCash',
      type: 'event',
      signature:
        '0x0952185985903a1ae1d05afd4d5efb2bc666605290d43185bda44684c34cab4f',
    },
    {
      inputs: [],
      name: 'ETH_ADDRESS',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xa734f06e',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xf851a440',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'authorities',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x494503d4',
    },
    {
      inputs: [],
      name: 'cash',
      outputs: [
        {
          internalType: 'contract ICash',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x961be391',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'newAuthorities',
          type: 'address[]',
        },
      ],
      name: 'changeAuthorities',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x14ee45f2',
    },
    {
      inputs: [],
      name: 'eraId',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x3f109d23',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'trxRequest',
          type: 'string',
        },
      ],
      name: 'execTrxRequest',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x5f25fc12',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          internalType: 'bytes[]',
          name: 'extrinsics',
          type: 'bytes[]',
        },
      ],
      name: 'executeProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x84b31885',
    },
    {
      inputs: [],
      name: 'getAuthorities',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xc21b4865',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'notice',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'signatures',
          type: 'bytes[]',
        },
      ],
      name: 'invoke',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xadcf8c85',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'notice',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'notices',
          type: 'bytes[]',
        },
      ],
      name: 'invokeChain',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x843dfe02',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'isNoticeInvoked',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x58d88333',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'lock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x66dfbfb4',
    },
    {
      inputs: [],
      name: 'lockEth',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
      signature: '0xd7611cc1',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
      ],
      name: 'lockEthTo',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
      signature: '0xcdf65c0b',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
      ],
      name: 'lockTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x29218710',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'nextCashYield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'nextCashYieldIndex',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'nextCashYieldStart',
          type: 'uint256',
        },
      ],
      name: 'setFutureYield',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x1e9d77d9',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'supplyCap',
          type: 'uint256',
        },
      ],
      name: 'setSupplyCap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x571f03e5',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'supplyCaps',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x02c3bcbb',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'toBytes32',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x78ad0369',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address payable',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'unlock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x8bc39207',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'unlockCash',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x4cfa3da3',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
      payable: true,
    },
  ],
  CASH: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
      signature:
        '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYield',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYieldIndex',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'nextCashYieldStart',
          type: 'uint256',
        },
      ],
      name: 'SetFutureYield',
      type: 'event',
      signature:
        '0x251ac1e011d739fec76126545192770052c706a63b2aac90521becbaa159c418',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
      signature:
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    },
    {
      inputs: [],
      name: 'SECONDS_PER_YEAR',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xe6a69ab8',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xf851a440',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xdd62ed3e',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'allowances',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x55b6ed5c',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'amountToPrincipal',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x8b49cefe',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x095ea7b3',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x70a08231',
    },
    {
      inputs: [],
      name: 'bpsBaseUnit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xc5871ec8',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x9dc29fac',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'index',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'start',
          type: 'uint256',
        },
      ],
      name: 'calculateIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xcc46eda4',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'cashPrincipal',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xa4798e1d',
    },
    {
      inputs: [],
      name: 'cashYieldAndIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'index',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x0e6c49ac',
    },
    {
      inputs: [],
      name: 'cashYieldStart',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xd30d90b6',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x313ce567',
    },
    {
      inputs: [],
      name: 'expBaseUnit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x2787e7d9',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
      ],
      name: 'exponent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x450a9be2',
    },
    {
      inputs: [],
      name: 'getCashIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x75999512',
    },
    {
      inputs: [],
      name: 'indexBaseUnit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xa5db2d89',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'initialYield',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'initialYieldStart',
          type: 'uint256',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xe7c97454',
    },
    {
      inputs: [],
      name: 'initialized',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x158ef93e',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xbe29184f',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x06fdde03',
    },
    {
      inputs: [],
      name: 'nextCashYieldAndIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'index',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x2bea5c4e',
    },
    {
      inputs: [],
      name: 'nextCashYieldStart',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x229360aa',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'nextYield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'nextIndex',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'nextYieldStart',
          type: 'uint256',
        },
      ],
      name: 'setFutureYield',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x1e9d77d9',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x95d89b41',
    },
    {
      inputs: [],
      name: 'totalCashPrincipal',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xc5f4d0c2',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x18160ddd',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa9059cbb',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x23b872dd',
    },
  ],
  StarportImpl: [
    {
      inputs: [
        {
          internalType: 'contract ICash',
          name: 'cash_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address[]',
          name: 'newAuthorities',
          type: 'address[]',
        },
      ],
      name: 'ChangeAuthorities',
      type: 'event',
      signature:
        '0x56d44466d1c48fd1de3f25b7c3a500601147815289e3a1c69c0c4ad0fadcac7f',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'trxRequest',
          type: 'string',
        },
      ],
      name: 'ExecTrxRequest',
      type: 'event',
      signature:
        '0xc25618d2506dbaa46f0a3819f68074c34ed888161951d0d833fea35b82a4faa9',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bytes[]',
          name: 'extrinsics',
          type: 'bytes[]',
        },
      ],
      name: 'ExecuteProposal',
      type: 'event',
      signature:
        '0x97b9e105962881d0aea472b7f0335a84c21cce09bc7917f3db0ea5e4b23116e8',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Lock',
      type: 'event',
      signature:
        '0xc459acef3ffe957663bb49d644b20d0c790bcb41573893752a72ba6f023b9386',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'LockCash',
      type: 'event',
      signature:
        '0x0ba767ef2faa3001dbd3344d5b427be12f2e090ae3dcbe2f0d0ecf2bf17a8a17',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'supplyCap',
          type: 'uint256',
        },
      ],
      name: 'NewSupplyCap',
      type: 'event',
      signature:
        '0x9e0ad9cee10bdf36b7fbd38910c0bdff0f275ace679b45b922381c2723d676f8',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint32',
          name: 'eraId',
          type: 'uint32',
        },
        {
          indexed: true,
          internalType: 'uint32',
          name: 'eraIndex',
          type: 'uint32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'noticeHash',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'result',
          type: 'bytes',
        },
      ],
      name: 'NoticeInvoked',
      type: 'event',
      signature:
        '0xedd00d39b017eafbdd1eb7463087942ca834c96b1aa19e2a5ae97afef538c1a3',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'noticeHash',
          type: 'bytes32',
        },
      ],
      name: 'NoticeReplay',
      type: 'event',
      signature:
        '0xaa1bfc5b12d79088f08d530fb8f8acb278a400400e829512a39851b5bb999a2c',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYield',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYieldIndex',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'nextCashYieldStart',
          type: 'uint256',
        },
      ],
      name: 'SetFutureYield',
      type: 'event',
      signature:
        '0x251ac1e011d739fec76126545192770052c706a63b2aac90521becbaa159c418',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'Unlock',
      type: 'event',
      signature:
        '0xae2a2f3f8158e4173d24a3a113140dcec8a721085e8b5c93e5cd7071718e8df2',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'UnlockCash',
      type: 'event',
      signature:
        '0x0952185985903a1ae1d05afd4d5efb2bc666605290d43185bda44684c34cab4f',
    },
    {
      inputs: [],
      name: 'ETH_ADDRESS',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xa734f06e',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xf851a440',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'authorities',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x494503d4',
    },
    {
      inputs: [],
      name: 'cash',
      outputs: [
        {
          internalType: 'contract ICash',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x961be391',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'newAuthorities',
          type: 'address[]',
        },
      ],
      name: 'changeAuthorities',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x14ee45f2',
    },
    {
      inputs: [],
      name: 'eraId',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x3f109d23',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'trxRequest',
          type: 'string',
        },
      ],
      name: 'execTrxRequest',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x5f25fc12',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          internalType: 'bytes[]',
          name: 'extrinsics',
          type: 'bytes[]',
        },
      ],
      name: 'executeProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x84b31885',
    },
    {
      inputs: [],
      name: 'getAuthorities',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xc21b4865',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'notice',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'signatures',
          type: 'bytes[]',
        },
      ],
      name: 'invoke',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xadcf8c85',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'notice',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'notices',
          type: 'bytes[]',
        },
      ],
      name: 'invokeChain',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x843dfe02',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'isNoticeInvoked',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x58d88333',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'lock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x66dfbfb4',
    },
    {
      inputs: [],
      name: 'lockEth',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
      signature: '0xd7611cc1',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
      ],
      name: 'lockEthTo',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
      signature: '0xcdf65c0b',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'chain',
          type: 'string',
        },
        {
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
      ],
      name: 'lockTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x29218710',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'nextCashYield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'nextCashYieldIndex',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'nextCashYieldStart',
          type: 'uint256',
        },
      ],
      name: 'setFutureYield',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x1e9d77d9',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'supplyCap',
          type: 'uint256',
        },
      ],
      name: 'setSupplyCap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x571f03e5',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'supplyCaps',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x02c3bcbb',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'toBytes32',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x78ad0369',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address payable',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'unlock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x8bc39207',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'unlockCash',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x4cfa3da3',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
      payable: true,
    },
  ],
  CashImpl: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
      signature:
        '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYield',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'nextCashYieldIndex',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'nextCashYieldStart',
          type: 'uint256',
        },
      ],
      name: 'SetFutureYield',
      type: 'event',
      signature:
        '0x251ac1e011d739fec76126545192770052c706a63b2aac90521becbaa159c418',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
      signature:
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    },
    {
      inputs: [],
      name: 'SECONDS_PER_YEAR',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xe6a69ab8',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xf851a440',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xdd62ed3e',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'allowances',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x55b6ed5c',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'amountToPrincipal',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x8b49cefe',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x095ea7b3',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x70a08231',
    },
    {
      inputs: [],
      name: 'bpsBaseUnit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xc5871ec8',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x9dc29fac',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'index',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'start',
          type: 'uint256',
        },
      ],
      name: 'calculateIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xcc46eda4',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'cashPrincipal',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xa4798e1d',
    },
    {
      inputs: [],
      name: 'cashYieldAndIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'index',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x0e6c49ac',
    },
    {
      inputs: [],
      name: 'cashYieldStart',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xd30d90b6',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x313ce567',
    },
    {
      inputs: [],
      name: 'expBaseUnit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x2787e7d9',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
      ],
      name: 'exponent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x450a9be2',
    },
    {
      inputs: [],
      name: 'getCashIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x75999512',
    },
    {
      inputs: [],
      name: 'indexBaseUnit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xa5db2d89',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'initialYield',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'initialYieldStart',
          type: 'uint256',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xe7c97454',
    },
    {
      inputs: [],
      name: 'initialized',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x158ef93e',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint128',
          name: 'principal',
          type: 'uint128',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xbe29184f',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x06fdde03',
    },
    {
      inputs: [],
      name: 'nextCashYieldAndIndex',
      outputs: [
        {
          internalType: 'uint128',
          name: 'yield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'index',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x2bea5c4e',
    },
    {
      inputs: [],
      name: 'nextCashYieldStart',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x229360aa',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'nextYield',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'nextIndex',
          type: 'uint128',
        },
        {
          internalType: 'uint256',
          name: 'nextYieldStart',
          type: 'uint256',
        },
      ],
      name: 'setFutureYield',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x1e9d77d9',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
      constant: true,
      signature: '0x95d89b41',
    },
    {
      inputs: [],
      name: 'totalCashPrincipal',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xc5f4d0c2',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x18160ddd',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa9059cbb',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x23b872dd',
    },
  ],
  StarportProxy: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_logic',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: '_data',
          type: 'bytes',
        },
      ],
      stateMutability: 'payable',
      type: 'constructor',
      payable: true,
      signature: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'previousAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'AdminChanged',
      type: 'event',
      signature:
        '0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
      signature:
        '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b',
    },
    {
      stateMutability: 'payable',
      type: 'fallback',
      payable: true,
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xf851a440',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'changeAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x8f283970',
    },
    {
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x5c60da1b',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'upgradeTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x3659cfe6',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'upgradeToAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
      signature: '0x4f1ef286',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
      payable: true,
    },
  ],
  CashProxy: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_logic',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: '_data',
          type: 'bytes',
        },
      ],
      stateMutability: 'payable',
      type: 'constructor',
      payable: true,
      signature: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'previousAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'AdminChanged',
      type: 'event',
      signature:
        '0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
      signature:
        '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b',
    },
    {
      stateMutability: 'payable',
      type: 'fallback',
      payable: true,
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xf851a440',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'changeAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x8f283970',
    },
    {
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: 'implementation_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x5c60da1b',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'upgradeTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x3659cfe6',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'upgradeToAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
      signature: '0x4f1ef286',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
      payable: true,
    },
  ],
  ProxyAdmin: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
      signature:
        '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0',
    },
    {
      inputs: [
        {
          internalType: 'contract TransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'changeProxyAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x7eff275e',
    },
    {
      inputs: [
        {
          internalType: 'contract TransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
      ],
      name: 'getProxyAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0xf3b7dead',
    },
    {
      inputs: [
        {
          internalType: 'contract TransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
      ],
      name: 'getProxyImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x204e1c7a',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      signature: '0x8da5cb5b',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x715018a6',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xf2fde38b',
    },
    {
      inputs: [
        {
          internalType: 'contract TransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'upgrade',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x99a88ec4',
    },
    {
      inputs: [
        {
          internalType: 'contract TransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'upgradeAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      payable: true,
      signature: '0x9623609d',
    },
  ],
};
