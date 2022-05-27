import { AddressZero, HashZero } from "@ethersproject/constants";

export type TChainMapList<T> = {
  readonly [chainId in CHAIN_ID]: T;
};

export interface ICurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export enum CHAIN_ID {
  BSC = 56,
  BSC_TESTNET = 97,
  POLYGON = 137,
  POLYGON_TESTNET = 80001,
  HARMONY = 1666600001,
  HARMONY_TESTNET = 1666700000,
}

export const NATIVE_CURRENCY: TChainMapList<ICurrency> = {
  [CHAIN_ID.BSC]: { name: "BNB", symbol: "BNB", decimals: 18 },
  [CHAIN_ID.BSC_TESTNET]: { name: "BNB", symbol: "BNB", decimals: 18 },
  [CHAIN_ID.POLYGON]: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  [CHAIN_ID.POLYGON_TESTNET]: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  [CHAIN_ID.HARMONY]: { name: "HRM", symbol: "HRM", decimals: 18 },
  [CHAIN_ID.HARMONY_TESTNET]: { name: "HRM", symbol: "HRM", decimals: 18 },
};

export const CHAIN_NAME: TChainMapList<string> = {
  [CHAIN_ID.BSC]: "BNB Chain",
  [CHAIN_ID.BSC_TESTNET]: "BNB Chain Testnet",
  [CHAIN_ID.POLYGON]: "Polygon",
  [CHAIN_ID.POLYGON_TESTNET]: "Polygon Mumbai",
  [CHAIN_ID.HARMONY]: "Harmony One",
  [CHAIN_ID.HARMONY_TESTNET]: "Harmony One Testnet",
};

export const EXPLORER: TChainMapList<{ name: string; url: string }> = {
  [CHAIN_ID.BSC]: {
    name: "BscScan",
    url: "https://bscscan.com",
  },
  [CHAIN_ID.BSC_TESTNET]: {
    name: "BscScan",
    url: "https://testnet.bscscan.com",
  },
  [CHAIN_ID.POLYGON]: {
    name: "Polygon explorer",
    url: "https://polygonscan.com",
  },
  [CHAIN_ID.POLYGON_TESTNET]: {
    name: "Polygon explorer",
    url: "https://mumbai.polygonscan.com",
  },
  [CHAIN_ID.HARMONY]: {
    name: "Harmony explorer",
    url: "https://explorer.harmony.one",
  },
  [CHAIN_ID.HARMONY_TESTNET]: {
    name: "Harmony explorer",
    url: "https://explorer.testnet.harmony.one",
  },
};

//bridge
export const BRIDGE_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: "0x6B3d7B7CB5d1E2A0EE7b2E9ef9505A9259e97348",
  [CHAIN_ID.BSC_TESTNET]: "0x9Fd15Ab47ca42BEBB4BDEc6984e00c47Ac50fd99",
  [CHAIN_ID.POLYGON]: "0xfc699bEEC6fbA29e714B34FDC3BAF948846D0426",
  [CHAIN_ID.POLYGON_TESTNET]: "0xA79FFF125C80043a00fcEe2984cD91BA74498358",
  [CHAIN_ID.HARMONY]: "0xefcaC5a8B9ff964EA46705840fe3dD137ae3308E",
  [CHAIN_ID.HARMONY_TESTNET]: "0xB61a13f5BB18b4A19d9C24cd12e6D26861e2a9FB",
};

// dex router(amm_pool)
export const ROUTER_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: AddressZero,
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: AddressZero,
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

// ?
export const PROXY_GSN_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: "0xbFc68681254F12C2A4eA5e4Ba0fD63e8F0dBB619",
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: "0xaa7262B67e6Ee72e37f2ed8d3329F89603Ad3248",
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

// router
export const BRIDGE_ROUTER_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: "0xBaF91CB3A372c643716773fd16F96093B4a792d8",
  [CHAIN_ID.BSC_TESTNET]: "0xeDDC56EEDa04583376fE2517357B23A043f1F259",
  [CHAIN_ID.POLYGON]: "0xC40B277508B55E68ab366FF3b2A833b21f668DdB",
  [CHAIN_ID.POLYGON_TESTNET]: "0x9E5706ECC4284Ea32C1FeDCF2A9b3f6Eee1914c8",
  [CHAIN_ID.HARMONY]: "0x943F1a4C6906D665a90da60b968BDe2EcF1AA174",
  [CHAIN_ID.HARMONY_TESTNET]: "0x33ef4Bb2d74Cb1220eCdEB44Bd6e603674549d25",
};

// synthesis
export const SYNTHESIZE_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: "0x5140174ec8B86Be302eC6ba6aF88f365c6D72C2a",
  [CHAIN_ID.BSC_TESTNET]: "0x1D1B208c547081d34b23f72ec8293A8c37Cc44A6",
  [CHAIN_ID.POLYGON]: "0x1785Edb5c47F0fFb05d0b729EEF67300b1bAf032",
  [CHAIN_ID.POLYGON_TESTNET]: "0x5373BD1eC3C9344907EDa3143AEEb0e22bD42AbC",
  [CHAIN_ID.HARMONY]: "0xC40B277508B55E68ab366FF3b2A833b21f668DdB",
  [CHAIN_ID.HARMONY_TESTNET]: "0x0ceAb9291d74BEED5b4E9ec589fa64e8ECb5105f",
};

// portal
export const PORTAL_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: "0xa816ea23B3613221533391aD406C7a298C6A311B",
  [CHAIN_ID.BSC_TESTNET]: "0x763FE467099627025E0884D70417E399412B564A",
  [CHAIN_ID.POLYGON]: "0x85A402b1385cdaA8EEAc661d36d615C131c43C62",
  [CHAIN_ID.POLYGON_TESTNET]: "0xc24F2FDd21806874ed53C69623cCD7a29F5AB1b6",
  [CHAIN_ID.HARMONY]: "0x577f6D4b6d8725a124A3e2917821c03CdE5D4c11",
  [CHAIN_ID.HARMONY_TESTNET]: "0xeEf65e57B287cce59607DEe4C02e714eAbB61679",
};

// List of addresses using for gasless mode
// paymaster
export const PAYMASTER_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: AddressZero,
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: AddressZero,
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

//frontHelper
export const MULTICALL: TChainMapList<string> = {
  [CHAIN_ID.BSC]: "0x81C53e3f59D62f82626a35284E49EA10e8ff8669",
  [CHAIN_ID.BSC_TESTNET]: "0x633e2fbF999D6Fb565732fd970408e2417Ef6EdF",
  [CHAIN_ID.POLYGON]: "0x196A384fCd377773957d3Df32827ae61995CDe50",
  [CHAIN_ID.POLYGON_TESTNET]: "0x1d3fdB747e0F51C92c6eFF063C77435F0dFfba4f",
  [CHAIN_ID.HARMONY]: "0x70163738b6bF4500f757efDf6e13C80887a8FC52",
  [CHAIN_ID.HARMONY_TESTNET]: "0x9e1483F74E223151958968BE30139bE5a9790C10",
};

// dex factory
export const FACTORY_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: "0xBCfCcbde45cE874adCB698cC183deBcF17952812",
  [CHAIN_ID.BSC_TESTNET]: "0x6725F303b657a9451d8BA641348b6761A6CC7a17",
  [CHAIN_ID.POLYGON]: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
  [CHAIN_ID.POLYGON_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: "0x10072290754Eb3Ce77ADC9C502EFDBcf26164532",
};

// ?
export const STABLECOIN_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: "0x786Ba7a3B3229B0eD707aFf2731DFa4a4E6CB104",
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: "0x55c18d10ded7968Cd980AbfE0547B410DF284413",
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

// ?
export const FARM_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: AddressZero,
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: AddressZero,
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

export const VESTING_ADDRESSES: TChainMapList<string[]> = {
  [CHAIN_ID.BSC]: [],
  [CHAIN_ID.BSC_TESTNET]: [
    '0x06E40E9Af1d5E783A4A94515E94a5451aA9A8215',
    '0xf5118C5C6A91C71b2A26B5ccEc7c2249B77096cE',
    '0xeF679b3e22C90572D016436451b71C7148836c27',
    '0x27BCA0399d29911cCF3d635C60a1F7C8c3fa9122',
  ],
  [CHAIN_ID.POLYGON]: [],
  [CHAIN_ID.POLYGON_TESTNET]: [
    "0x4EFF433ec6cC01E2a41E548300b7c69bBE59A8Cc",
    "0xA0333C19aFB9848CfaE5271D14a1b7b37fb0A14f",
    "0x2b562d0106c16b54D3Dd7D8C9854532882e2e269",
    "0x6E9D2e69a4a50200292aec4DD5bCF54507571628",
  ],
  [CHAIN_ID.HARMONY]: [],
  [CHAIN_ID.HARMONY_TESTNET]: [],
};

// ?
export const CURVE_PROXY_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: AddressZero,
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: AddressZero,
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

// ?
export const CURVE_LOCAL_POOL_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: AddressZero,
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: AddressZero,
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

// ?
export const CURVE_CROSSCHAIN_POOL_ADDRESS: TChainMapList<string> = {
  [CHAIN_ID.BSC]: AddressZero,
  [CHAIN_ID.BSC_TESTNET]: AddressZero,
  [CHAIN_ID.POLYGON]: AddressZero,
  [CHAIN_ID.POLYGON_TESTNET]: AddressZero,
  [CHAIN_ID.HARMONY]: AddressZero,
  [CHAIN_ID.HARMONY_TESTNET]: AddressZero,
};

// ?
export const INIT_CODE_HASH: TChainMapList<string> = {
  [CHAIN_ID.BSC]:
    "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66",
  [CHAIN_ID.BSC_TESTNET]:
    "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66",
  [CHAIN_ID.POLYGON]:
    "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
  [CHAIN_ID.POLYGON_TESTNET]:
    "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303",
  [CHAIN_ID.HARMONY]: HashZero,
  [CHAIN_ID.HARMONY_TESTNET]: HashZero,
};

export const DEFAULT_LOGO_URL_MAP = {
  [CHAIN_ID.BSC]: "https://testnet.bscscan.com/images/main/empty-token.png",
  [CHAIN_ID.BSC_TESTNET]:
    "https://testnet.bscscan.com/images/main/empty-token.png",
  [CHAIN_ID.POLYGON]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png",
  [CHAIN_ID.POLYGON_TESTNET]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png",
  [CHAIN_ID.HARMONY]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png", // TODO: update icon
  [CHAIN_ID.HARMONY_TESTNET]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png", // TODO: update icon
};

export const BLOCKCHAIN_TESTNETS_SYMBOL_MAP = {
  [CHAIN_ID.BSC_TESTNET]: "BSC",
  [CHAIN_ID.POLYGON_TESTNET]: "POL",
  [CHAIN_ID.HARMONY_TESTNET]: "HRM",
};

export const BLOCKCHAIN_MAINNETS_SYMBOL_MAP = {
  [CHAIN_ID.BSC]: "BSC",
  [CHAIN_ID.POLYGON]: "POL",
  [CHAIN_ID.HARMONY]: "HRM",
};

export const BLOCKCHAIN_SYMBOL_MAP = {
  ...BLOCKCHAIN_TESTNETS_SYMBOL_MAP,
  ...BLOCKCHAIN_MAINNETS_SYMBOL_MAP,
};

export const RPC_URLS: TChainMapList<string[]> = {
  [CHAIN_ID.BSC]: ["https://bsc-dataseed.binance.org/"],
  [CHAIN_ID.BSC_TESTNET]: ["https://bsc.testnet.eywa.fi"],
  [CHAIN_ID.POLYGON]: ["https://rpc-mainnet.maticvigil.com/"],
  [CHAIN_ID.POLYGON_TESTNET]: ["https://mumbai.testnet.eywa.fi"],
  [CHAIN_ID.HARMONY]: ["https://harmony.mainnet.eywa.fi"],
  [CHAIN_ID.HARMONY_TESTNET]: ["https://http.testnet.eywa.fi:17012"],
};
