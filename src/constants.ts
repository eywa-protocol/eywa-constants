import { HashZero } from '@ethersproject/constants';

export type TChainMapList<T> = {
    readonly [chainId in CHAIN_ID]: T;
};

export interface ICurrency {
    name: string;
    symbol: string;
    decimals: number;
}

export enum CHAIN_ID {
    ETH = 1,
    ETH_RINKEBY = 4,
    BSC = 56,
    BSC_TESTNET = 97,
    POLYGON = 137,
    POLYGON_TESTNET = 80001,
    HARMONY = 1666600001,
    HARMONY_TESTNET = 1666700000,
}

export const NATIVE_CURRENCY: TChainMapList<ICurrency> = {
    [CHAIN_ID.ETH]: {name: 'ETH', symbol: 'ETH', decimals: 18},
    [CHAIN_ID.ETH_RINKEBY]: {name: 'ETH', symbol: 'ETH', decimals: 18},
    [CHAIN_ID.BSC]: {name: 'BNB', symbol: 'BNB', decimals: 18},
    [CHAIN_ID.BSC_TESTNET]: {name: 'BNB', symbol: 'BNB', decimals: 18},
    [CHAIN_ID.POLYGON]: {name: 'MATIC', symbol: 'MATIC', decimals: 18,},
    [CHAIN_ID.POLYGON_TESTNET]: {name: 'MATIC', symbol: 'MATIC', decimals: 18},
    [CHAIN_ID.HARMONY]: {name: 'HRM', symbol: 'HRM', decimals: 18,},
    [CHAIN_ID.HARMONY_TESTNET]: {name: 'HRM', symbol: 'HRM', decimals: 18,},
};
export const CHAIN_NAME: Record<CHAIN_ID, string> = {
    [CHAIN_ID.ETH]: 'Ethereum',
    [CHAIN_ID.ETH_RINKEBY]: 'Ethereum Rinkeby',
    [CHAIN_ID.BSC]: 'Binance Smart Chain',
    [CHAIN_ID.BSC_TESTNET]: 'Binance Smart Chain Testnet',
    [CHAIN_ID.POLYGON]: 'Polygon',
    [CHAIN_ID.POLYGON_TESTNET]: 'Polygon Mumbai',
    [CHAIN_ID.HECO]: 'Heco',
    [CHAIN_ID.HECO_TESTNET]: 'Heco Testnet',
    [CHAIN_ID.AVALANCHE]: 'Avalanche',
    [CHAIN_ID.AVALANCHE_TESTNET]: 'Avalanche Testnet',
    [CHAIN_ID.METIS_TESTNET]: 'Metis Testnet',
    [CHAIN_ID.COINEX]: 'CoinEx',
    [CHAIN_ID.COINEX_TESTNET]: 'CoinEx Testnet',
    [CHAIN_ID.HARMONY]: 'Harmony One',
    [CHAIN_ID.HARMONY_TESTNET]: 'Harmony One Testnet',
    [CHAIN_ID.SOLANA]: 'Solana',
    [CHAIN_ID.SOLANA_DEVNET]: 'Solana Devnet',
    [CHAIN_ID.SOLANA_TESTNET]: 'Solana Testnet',
};

export const EXPLORER: TChainMapList<{ name: string; url: string }> = {
    [CHAIN_ID.ETH]: {
        name: 'Etherscan',
        url: 'https://etherscan.io',
    },
    [CHAIN_ID.ETH_RINKEBY]: {
        name: 'Etherscan',
        url: 'https://rinkeby.etherscan.io',
    },
    [CHAIN_ID.BSC]: {
        name: 'BscScan',
        url: 'https://bscscan.com',
    },
    [CHAIN_ID.BSC_TESTNET]: {
        name: 'BscScan',
        url: 'https://testnet.bscscan.com',
    },
    [CHAIN_ID.HECO]: {
        name: 'HecoScan',
        url: 'https://hecoinfo.com',
    },
    [CHAIN_ID.HECO_TESTNET]: {
        name: 'HecoScan Testnet',
        url: 'https://testnet.hecoinfo.com',
    },
    [CHAIN_ID.AVALANCHE]: {
        name: 'Avalanche explorer',
        url: 'https://cchain.explorer.avax.network',
    },
    [CHAIN_ID.AVALANCHE_TESTNET]: {
        name: 'Avalanche explorer',
        url: 'https://cchain.explorer.avax-test.network',
    },
    [CHAIN_ID.POLYGON]: {
        name: 'Polygon explorer',
        url: 'https://polygonscan.com',
    },
    [CHAIN_ID.POLYGON_TESTNET]: {
        name: 'Polygon explorer',
        url: 'https://mumbai.polygonscan.com',
    },
    [CHAIN_ID.METIS_TESTNET]: {
        name: 'Metis explorer',
        url: 'https://stardust-explorer.metis.io',
    },
    [CHAIN_ID.COINEX]: {
        name: 'CoinEx explorer',
        url: 'https://www.coinex.net',
    },
    [CHAIN_ID.COINEX_TESTNET]: {
        name: 'CoinEx explorer',
        url: 'https://testnet.coinex.net',
    },
    [CHAIN_ID.HARMONY]: {
        name: 'Harmony explorer',
        url: 'https://explorer.harmony.one',
    },
    [CHAIN_ID.HARMONY_TESTNET]: {
        name: 'Harmony explorer',
        url: 'https://explorer.testnet.harmony.one',
    },
    [CHAIN_ID.SOLANA_DEVNET]: {
        name: 'Solana Devnet Explorer',
        url: 'https://explorer.solana.com/?cluster=devnet',
    },
    [CHAIN_ID.SOLANA_TESTNET]: {
        name: 'Solana Testnet Explorer',
        url: 'https://explorer.solana.com/?cluster=testnet',
    },
    [CHAIN_ID.SOLANA]: {
        name: 'Solana Explorer',
        url: 'https://explorer.solana.com',
    },
};

//bridge
export const BRIDGE_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0x2D6f94a9D44233CE487c78Bd0838236E1cAD1229',
    [CHAIN_ID.BSC_TESTNET]: '0x6Ddc3d4966cc40eee45B16448bD57Da5E669Cb20',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x6a0fe2A422Ab5bb31666fE35aA6Becd941c7728A',
    [CHAIN_ID.POLYGON]: '0x4211D7678e93aF63f0Ae5693e07E2142A92cEe50',
    [CHAIN_ID.POLYGON_TESTNET]: '0xA0b8fad3caDABfEC6573317b6BBD5164D6479D1A',
    [CHAIN_ID.HARMONY]: '0xefcaC5a8B9ff964EA46705840fe3dD137ae3308E',
    [CHAIN_ID.HARMONY_TESTNET]: '0x2595BBb3782A79678Eb96B4a29A3810E7253c191',
};

// dex router(amm_pool)
export const ROUTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
    [CHAIN_ID.BSC_TESTNET]: '0x9ac64cc6e4415144c455bd8e4837fea55603e5c3',
    [CHAIN_ID.ETH]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [CHAIN_ID.ETH_RINKEBY]: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
    [CHAIN_ID.POLYGON]: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
    [CHAIN_ID.POLYGON_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const PROXY_GSN_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: '0xbFc68681254F12C2A4eA5e4Ba0fD63e8F0dBB619',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xA9b67Bac9e2189e96b9609d9401F5FA9Af6bEa3C',
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: '0xaa7262B67e6Ee72e37f2ed8d3329F89603Ad3248',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// router
export const BRIDGE_ROUTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0xafb56CBD60a9a6637c6A21efFfba3386076e628B',
    [CHAIN_ID.BSC_TESTNET]: '0x06aE71208a55F24990d82099bA16e92F9Ff37FdA',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.POLYGON]: '0x95A2B1e219B439575c61D6366208A73E77F09A6A',
    [CHAIN_ID.POLYGON_TESTNET]: '0xf3a157142B8D1d2aC692570EA8A3A450A8E213A9',
    [CHAIN_ID.HARMONY]: '0x8789A375d502d520e0DEb188153514349e348Ef3',
    [CHAIN_ID.HARMONY_TESTNET]: '0x8d34d3ADfAd444Fd1e8Ce80D0367D997d55C7531',
};

// synthesis
export const SYNTHESIZE_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0x866A8ff9900aD18DDA3DB4Dd2E9704d650be5A95',
    [CHAIN_ID.BSC_TESTNET]: '0x03E5DaAeCEeE402BD39C1afE56cA857704Cd02f1',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xf9a3DE86c0A89755Fe661315c1F1866C69D59DCF',
    [CHAIN_ID.POLYGON]: '0x5E5b109b779E45D32Ae271036ECee68B99Bd9B93',
    [CHAIN_ID.POLYGON_TESTNET]: '0x9273B8DAF99ABCdE49026742CFdd2edF09c6Cdf8',
    [CHAIN_ID.HARMONY]: '0x2e6a2A1D0A10F47C6aaA979e2Af6991b872B7A39',
    [CHAIN_ID.HARMONY_TESTNET]: '0xDa624001d6fDa00De3F78B13091456557f7392EB',
};

// portal
export const PORTAL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0xB162841Cb2B030680944a377eA33b92C218115Af',
    [CHAIN_ID.BSC_TESTNET]: '0x6b4e799724182Bd6fD21FFcc9dEe3f6F1A5DD294',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x64F371aeaAA05080cB0b277f56C4aCE787515Af9',
    [CHAIN_ID.POLYGON]: '0x7a1c7a96F060EfD03fF440B25C33DE70397129c5',
    [CHAIN_ID.POLYGON_TESTNET]: '0xbeE5507A44ddc4e9534668775608abC7DB4Bc248',
    [CHAIN_ID.HARMONY]: '0x6EDBe1c086fF0587769ee051dfBCAcb82e636908',
    [CHAIN_ID.HARMONY_TESTNET]: '0xd6258c01Ba29136B97BB36f639DE0CbbA07B523b',
};

// List of addresses using for gasless mode
// paymaster
export const PAYMASTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x972ed0f36cec3c792d46ef7158fa7138d88e195c',
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

//frontHelper
export const MULTICALL: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xaE816a6C152dDf153EabF04d9A028bfACB32A1Ef',
    [CHAIN_ID.BSC]: '0x31B4C247d05Cfe420d622707aD9A3a5151300150',
    [CHAIN_ID.BSC_TESTNET]: '0x633e2fbF999D6Fb565732fd970408e2417Ef6EdF',
    [CHAIN_ID.POLYGON]: '0x76A0E73E00c7bd262a256f73B676577738A4cd95',
    [CHAIN_ID.POLYGON_TESTNET]: '0x1d3fdB747e0F51C92c6eFF063C77435F0dFfba4f',
    [CHAIN_ID.HARMONY]: '0x95096a9C8E5cA8b2571a0317EB942142cFa49393',
    [CHAIN_ID.HARMONY_TESTNET]: '0x9e1483F74E223151958968BE30139bE5a9790C10',
};

// dex factory
export const FACTORY_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [CHAIN_ID.ETH_RINKEBY]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [CHAIN_ID.BSC]: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
    [CHAIN_ID.BSC_TESTNET]: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
    [CHAIN_ID.POLYGON]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    [CHAIN_ID.POLYGON_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: '0x10072290754Eb3Ce77ADC9C502EFDBcf26164532',
};

// ?
export const STABLECOIN_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x77c24f0Af71257C0ee26e0E0a108F940D1698d53',
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: '0x786Ba7a3B3229B0eD707aFf2731DFa4a4E6CB104',
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: '0x55c18d10ded7968Cd980AbfE0547B410DF284413',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const FARM_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xC3518c82746b8B45119207a230B555d5781B9430',
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
}

export const VESTING_ADDRESSES: TChainMapList<string[]> = {
  [CHAIN_ID.ETH]: [],
  [CHAIN_ID.ETH_RINKEBY]: [],
  [CHAIN_ID.BSC]: [],
  [CHAIN_ID.BSC_TESTNET]: [],
  [CHAIN_ID.POLYGON]: [],
  [CHAIN_ID.POLYGON_TESTNET]: [
    '0x4EFF433ec6cC01E2a41E548300b7c69bBE59A8Cc',
    '0xA0333C19aFB9848CfaE5271D14a1b7b37fb0A14f',
    '0x2b562d0106c16b54D3Dd7D8C9854532882e2e269',
    '0x6E9D2e69a4a50200292aec4DD5bCF54507571628',
  ],
  [CHAIN_ID.HARMONY]: [],
  [CHAIN_ID.HARMONY_TESTNET]: [],
}

// ?
export const CURVE_PROXY_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const CURVE_LOCAL_POOL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const CURVE_CROSSCHAIN_POOL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const INIT_CODE_HASH: TChainMapList<string> = {
    [CHAIN_ID.ETH]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.ETH_RINKEBY]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.BSC]:
        '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
    [CHAIN_ID.BSC_TESTNET]:
        '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
    [CHAIN_ID.POLYGON]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.POLYGON_TESTNET]:
        '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [CHAIN_ID.HARMONY]:
        '0x0000000000000000000000000000000000000000000000000000000000000000',
    [CHAIN_ID.HARMONY_TESTNET]:
        '0x0000000000000000000000000000000000000000000000000000000000000000',
};

export const DEFAULT_LOGO_URL_MAP = {
    [CHAIN_ID.ETH]: 'https://rinkeby.etherscan.io/images/main/empty-token.png',
    [CHAIN_ID.ETH_RINKEBY]:
        'https://rinkeby.etherscan.io/images/main/empty-token.png',
    [CHAIN_ID.BSC]: 'https://testnet.bscscan.com/images/main/empty-token.png',
    [CHAIN_ID.BSC_TESTNET]:
        'https://testnet.bscscan.com/images/main/empty-token.png',
    [CHAIN_ID.POLYGON]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png',
    [CHAIN_ID.POLYGON_TESTNET]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png',
    [CHAIN_ID.HARMONY]: 'https://mumbai.polygonscan.com/images/main/empty-token.png',// TODO: update icon
    [CHAIN_ID.HARMONY_TESTNET]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png', // TODO: update icon
};

export const BLOCKCHAIN_TESTNETS_SYMBOL_MAP = {
    [CHAIN_ID.ETH_RINKEBY]: 'ETH',
    [CHAIN_ID.BSC_TESTNET]: 'BSC',
    [CHAIN_ID.POLYGON_TESTNET]: 'POLYGON',
    [CHAIN_ID.HARMONY_TESTNET]: 'HRM',
};

export const BLOCKCHAIN_MAINNETS_SYMBOL_MAP = {
    [CHAIN_ID.ETH]: 'ETH',
    [CHAIN_ID.BSC]: 'BSC',
    [CHAIN_ID.POLYGON]: 'POLYGON',
    [CHAIN_ID.HARMONY]: 'HRM',
};

export const BLOCKCHAIN_SYMBOL_MAP = {
    ...BLOCKCHAIN_TESTNETS_SYMBOL_MAP,
    ...BLOCKCHAIN_MAINNETS_SYMBOL_MAP,
};

export const RPC_URLS: TChainMapList<string[]> = {
    [CHAIN_ID.ETH]: [
        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    ],
    [CHAIN_ID.ETH_RINKEBY]: [
        'https://rinkeby.testnet.eywa.fi',
        'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    ],
    [CHAIN_ID.BSC]: ['https://bsc-dataseed.binance.org/'],
    [CHAIN_ID.BSC_TESTNET]: ['https://bsc.testnet.eywa.fi'],
    [CHAIN_ID.POLYGON]: ['https://rpc-mainnet.maticvigil.com/'],
    [CHAIN_ID.POLYGON_TESTNET]: ['https://mumbai.testnet.eywa.fi'],
    [CHAIN_ID.HARMONY]: ['https://harmony.mainnet.eywa.fi'],
    [CHAIN_ID.HARMONY_TESTNET]: ['https://http.testnet.eywa.fi:17012'],
};
