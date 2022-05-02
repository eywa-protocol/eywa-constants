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
    [CHAIN_ID.HARMONY]: 'Harmony One',
    [CHAIN_ID.HARMONY_TESTNET]: 'Harmony One Testnet',
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
    [CHAIN_ID.POLYGON]: {
        name: 'Polygon explorer',
        url: 'https://polygonscan.com',
    },
    [CHAIN_ID.POLYGON_TESTNET]: {
        name: 'Polygon explorer',
        url: 'https://mumbai.polygonscan.com',
    },
    [CHAIN_ID.HARMONY]: {
        name: 'Harmony explorer',
        url: 'https://explorer.harmony.one',
    },
    [CHAIN_ID.HARMONY_TESTNET]: {
        name: 'Harmony explorer',
        url: 'https://explorer.testnet.harmony.one',
    },
};

//bridge
export const BRIDGE_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x6a0fe2A422Ab5bb31666fE35aA6Becd941c7728A',
    [CHAIN_ID.BSC]: '0x6B3d7B7CB5d1E2A0EE7b2E9ef9505A9259e97348',
    [CHAIN_ID.BSC_TESTNET]: '0x6Ddc3d4966cc40eee45B16448bD57Da5E669Cb20',
    [CHAIN_ID.POLYGON]: '0xfc699bEEC6fbA29e714B34FDC3BAF948846D0426',
    [CHAIN_ID.POLYGON_TESTNET]: '0xA0b8fad3caDABfEC6573317b6BBD5164D6479D1A',
    [CHAIN_ID.HARMONY]: '0xefcaC5a8B9ff964EA46705840fe3dD137ae3308E',
    [CHAIN_ID.HARMONY_TESTNET]: '0x2595BBb3782A79678Eb96B4a29A3810E7253c191',
};

// dex router(amm_pool)
export const ROUTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const PROXY_GSN_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xA9b67Bac9e2189e96b9609d9401F5FA9Af6bEa3C',
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: '0xbFc68681254F12C2A4eA5e4Ba0fD63e8F0dBB619',
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: '0xaa7262B67e6Ee72e37f2ed8d3329F89603Ad3248',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// router
export const BRIDGE_ROUTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.BSC]: '0x577f6D4b6d8725a124A3e2917821c03CdE5D4c11',
    [CHAIN_ID.BSC_TESTNET]: '0xb203cD74cF9c78121ddCe4abfd3A5243C734b4a6',
    [CHAIN_ID.POLYGON]: '0x2aF78D6FfEaF96B39e929cb04B1aa5974b4F7d1d',
    [CHAIN_ID.POLYGON_TESTNET]: '0x3084b9fbCba7e4DE79E6E56D9A3C967DE56536f1',
    [CHAIN_ID.HARMONY]: '0x6D83b7982437a3546E6c8b15EcC5b7DC58Ff899D',
    [CHAIN_ID.HARMONY_TESTNET]: '0x4D7f36c265eA70530a084f95F7260CF5eA0C88e2',
};

// synthesis
export const SYNTHESIZE_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xf9a3DE86c0A89755Fe661315c1F1866C69D59DCF',
    [CHAIN_ID.BSC]: '0x5140174ec8B86Be302eC6ba6aF88f365c6D72C2a',
    [CHAIN_ID.BSC_TESTNET]: '0xb1Eba6042f73B84e0990DfC65D9246dA4388aB16',
    [CHAIN_ID.POLYGON]: '0x1785Edb5c47F0fFb05d0b729EEF67300b1bAf032',
    [CHAIN_ID.POLYGON_TESTNET]: '0x9273B8DAF99ABCdE49026742CFdd2edF09c6Cdf8',
    [CHAIN_ID.HARMONY]: '0xC40B277508B55E68ab366FF3b2A833b21f668DdB',
    [CHAIN_ID.HARMONY_TESTNET]: '0x8D2033010525b7eDa2855455315A8BB28Bf950C4',
};

// portal
export const PORTAL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x64F371aeaAA05080cB0b277f56C4aCE787515Af9',
    [CHAIN_ID.BSC]: '0xa816ea23B3613221533391aD406C7a298C6A311B',
    [CHAIN_ID.BSC_TESTNET]: '0x6b4e799724182Bd6fD21FFcc9dEe3f6F1A5DD294',
    [CHAIN_ID.POLYGON]: '0x85A402b1385cdaA8EEAc661d36d615C131c43C62',
    [CHAIN_ID.POLYGON_TESTNET]: '0xbeE5507A44ddc4e9534668775608abC7DB4Bc248',
    [CHAIN_ID.HARMONY]: '0x577f6D4b6d8725a124A3e2917821c03CdE5D4c11',
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
    [CHAIN_ID.BSC]: '0x81C53e3f59D62f82626a35284E49EA10e8ff8669',
    [CHAIN_ID.BSC_TESTNET]: '0x633e2fbF999D6Fb565732fd970408e2417Ef6EdF',
    [CHAIN_ID.POLYGON]: '0x196A384fCd377773957d3Df32827ae61995CDe50',
    [CHAIN_ID.POLYGON_TESTNET]: '0x1d3fdB747e0F51C92c6eFF063C77435F0dFfba4f',
    [CHAIN_ID.HARMONY]: '0x70163738b6bF4500f757efDf6e13C80887a8FC52',
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
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const CURVE_LOCAL_POOL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

// ?
export const CURVE_CROSSCHAIN_POOL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
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
    [CHAIN_ID.POLYGON_TESTNET]: 'POL',
    [CHAIN_ID.HARMONY_TESTNET]: 'HRM',
};

export const BLOCKCHAIN_MAINNETS_SYMBOL_MAP = {
    [CHAIN_ID.ETH]: 'ETH',
    [CHAIN_ID.BSC]: 'BSC',
    [CHAIN_ID.POLYGON]: 'POL',
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
