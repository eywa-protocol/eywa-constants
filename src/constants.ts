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
    HECO = 128,
    HECO_TESTNET = 256,
    AVALANCHE = 43114,
    AVALANCHE_TESTNET = 43113,
    METIS_TESTNET = 588,
    COINEX = 52,
    COINEX_TESTNET = 53,
    HARMONY = 1666600001,
    HARMONY_TESTNET = 1666700000,
    SOLANA = -1,
    SOLANA_TESTNET = -2,
    SOLANA_DEVNET = -3,
}

export const NATIVE_CURRENCY: TChainMapList<ICurrency> = {
    [CHAIN_ID.ETH]: {name: 'ETH', symbol: 'ETH', decimals: 18},
    [CHAIN_ID.ETH_RINKEBY]: {name: 'ETH', symbol: 'ETH', decimals: 18},
    [CHAIN_ID.BSC]: {name: 'BNB', symbol: 'BNB', decimals: 18},
    [CHAIN_ID.BSC_TESTNET]: {name: 'BNB', symbol: 'BNB', decimals: 18},
    [CHAIN_ID.HECO]: {name: 'HT', symbol: 'HT', decimals: 18,},
    [CHAIN_ID.HECO_TESTNET]: {name: 'HT', symbol: 'HT', decimals: 18,},
    [CHAIN_ID.POLYGON]: {name: 'MATIC', symbol: 'MATIC', decimals: 18,},
    [CHAIN_ID.POLYGON_TESTNET]: {name: 'MATIC', symbol: 'MATIC', decimals: 18},
    [CHAIN_ID.SOLANA]: {} as any,
    [CHAIN_ID.SOLANA_DEVNET]: {name: 'SOL', symbol: 'SOL', decimals: 18},
    [CHAIN_ID.SOLANA_TESTNET]: {name: 'SOL', symbol: 'SOL', decimals: 18},
    [CHAIN_ID.AVALANCHE]: {name: 'AVAX', symbol: 'AVAX', decimals: 18},
    [CHAIN_ID.AVALANCHE_TESTNET]: {name: 'AVAX', symbol: 'AVAX', decimals: 18},
    [CHAIN_ID.METIS_TESTNET]: {name: 'METIS', symbol: 'METIS', decimals: 18},
    [CHAIN_ID.COINEX]: {name: 'CET', symbol: 'CET', decimals: 18,},
    [CHAIN_ID.COINEX_TESTNET]: {name: 'CET', symbol: 'CET', decimals: 18,},
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
        url: 'https://bscscan.com/',
    },
    [CHAIN_ID.BSC_TESTNET]: {
        name: 'BscScan',
        url: 'https://testnet.bscscan.com',
    },
    [CHAIN_ID.HECO]: {
        name: 'HecoScan',
        url: 'https://hecoinfo.com/',
    },
    [CHAIN_ID.HECO_TESTNET]: {
        name: 'HecoScan Testnet',
        url: 'https://testnet.hecoinfo.com/',
    },
    [CHAIN_ID.AVALANCHE]: {
        name: 'Avalanche explorer',
        url: 'https://cchain.explorer.avax.network/',
    },
    [CHAIN_ID.AVALANCHE_TESTNET]: {
        name: 'Avalanche explorer',
        url: 'https://cchain.explorer.avax-test.network',
    },
    [CHAIN_ID.POLYGON]: {
        name: 'Polygon explorer',
        url: 'https://polygonscan.com/',
    },
    [CHAIN_ID.POLYGON_TESTNET]: {
        name: 'Polygon explorer',
        url: 'https://mumbai.polygonscan.com/',
    },
    [CHAIN_ID.METIS_TESTNET]: {
        name: 'Metis explorer',
        url: 'https://stardust-explorer.metis.io/',
    },
    [CHAIN_ID.COINEX]: {
        name: 'CoinEx explorer',
        url: 'https://www.coinex.net/',
    },
    [CHAIN_ID.COINEX_TESTNET]: {
        name: 'CoinEx explorer',
        url: 'https://testnet.coinex.net/',
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
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0xf0EB6AA17421d3a916Ca673F2732fa0aBD4857AF',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0x6Ab965dB5665D65FE85014a0d0D6C7a0d9Dd0daa',
    [CHAIN_ID.METIS_TESTNET]: '0x7e6136f41D510e1C9c558e2D874224e36b199A39',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0xcb6744697B22B0e83BA9d171C13e2E830fd14cDd',
    [CHAIN_ID.HARMONY]: '0x17701C112c9A5c9559a05a5F2e5fed5d30B8f75a',
    [CHAIN_ID.HARMONY_TESTNET]: '0x2595BBb3782A79678Eb96B4a29A3810E7253c191',
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// dex router(amm_pool)
export const ROUTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
    [CHAIN_ID.BSC_TESTNET]: '0x9ac64cc6e4415144c455bd8e4837fea55603e5c3',
    [CHAIN_ID.ETH]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [CHAIN_ID.ETH_RINKEBY]: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
    [CHAIN_ID.POLYGON]: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
    [CHAIN_ID.POLYGON_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0x2bCeC25644e56422bEFd3feA5286344369396fF1',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0x2D99ABD9008Dc933ff5c0CD271B88309593aB921',
    [CHAIN_ID.METIS_TESTNET]: '0x19BCFEe83ee0D77158b0c151150aFb0f389E4721',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0x2921578f4461775101c4B50622a4D5EF5ee38eC5',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// ?
export const PROXY_GSN_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: '0xbFc68681254F12C2A4eA5e4Ba0fD63e8F0dBB619',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xA9b67Bac9e2189e96b9609d9401F5FA9Af6bEa3C',
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: '0xaa7262B67e6Ee72e37f2ed8d3329F89603Ad3248',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0x6BC42FF7E620C4e2D25ae59De2Dde2fCBc11Cb2C',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0x5e7B1e04c460c4A2f293fe1B04F75a75cA29a702',
    [CHAIN_ID.METIS_TESTNET]: '0xCdCA50cDB6A1C6D97a065a1aECAA3e5cC8716e51',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// router
export const BRIDGE_ROUTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0xafb56CBD60a9a6637c6A21efFfba3386076e628B',
    [CHAIN_ID.BSC_TESTNET]: '0x06aE71208a55F24990d82099bA16e92F9Ff37FdA',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.POLYGON]: '0x95A2B1e219B439575c61D6366208A73E77F09A6A',
    [CHAIN_ID.POLYGON_TESTNET]: '0xf3a157142B8D1d2aC692570EA8A3A450A8E213A9',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: HashZero,
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: HashZero,
    [CHAIN_ID.METIS_TESTNET]: HashZero,
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: '0x8789A375d502d520e0DEb188153514349e348Ef3',
    [CHAIN_ID.HARMONY_TESTNET]: '0x8d34d3ADfAd444Fd1e8Ce80D0367D997d55C7531',
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// synthesis
export const SYNTHESIZE_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0x866A8ff9900aD18DDA3DB4Dd2E9704d650be5A95',
    [CHAIN_ID.BSC_TESTNET]: '0x03E5DaAeCEeE402BD39C1afE56cA857704Cd02f1',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xf9a3DE86c0A89755Fe661315c1F1866C69D59DCF',
    [CHAIN_ID.POLYGON]: '0x5E5b109b779E45D32Ae271036ECee68B99Bd9B93',
    [CHAIN_ID.POLYGON_TESTNET]: '0x9273B8DAF99ABCdE49026742CFdd2edF09c6Cdf8',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0xD451d3Bdadda94dB0bFf91398396fBE24B586786',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0x6f76430156e606BdA4aA12548b2Ca62b1FBD271E',
    [CHAIN_ID.METIS_TESTNET]: '0x96a9f81C4ED5866ecbCd7CE5365CE83268686563',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0xB2B0E6B452edC2AeEc5F7f037834BBf185F95B37',
    [CHAIN_ID.HARMONY]: '0x2e6a2A1D0A10F47C6aaA979e2Af6991b872B7A39',
    [CHAIN_ID.HARMONY_TESTNET]: '0xDa624001d6fDa00De3F78B13091456557f7392EB',
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// portal
export const PORTAL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: '0xB162841Cb2B030680944a377eA33b92C218115Af',
    [CHAIN_ID.BSC_TESTNET]: '0x6b4e799724182Bd6fD21FFcc9dEe3f6F1A5DD294',
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x64F371aeaAA05080cB0b277f56C4aCE787515Af9',
    [CHAIN_ID.POLYGON]: '0x7a1c7a96F060EfD03fF440B25C33DE70397129c5',
    [CHAIN_ID.POLYGON_TESTNET]: '0xbeE5507A44ddc4e9534668775608abC7DB4Bc248',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0xA770322e4cCd67AE0ACc5E6bC505B6055dd08078',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0x1bE7bd024EA1bB8D07c325aAfCa02fC25914C5Bf',
    [CHAIN_ID.METIS_TESTNET]: '0x050Bc6488689ef421A8616873148157735fe90e9',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0x41073a70f2E959D6C2fe1F54D54201C881b02cFC',
    [CHAIN_ID.HARMONY]: '0x6EDBe1c086fF0587769ee051dfBCAcb82e636908',
    [CHAIN_ID.HARMONY_TESTNET]: '0xd6258c01Ba29136B97BB36f639DE0CbbA07B523b',
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// List of addresses using for gasless mode
// paymaster
export const PAYMASTER_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x972ed0f36cec3c792d46ef7158fa7138d88e195c',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0x3f191448a367483244B66bf667790b6b7Ed166C8',
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0x1A6c888Fc864dd81C97f9D111e425DceA94a2bA6',
    [CHAIN_ID.METIS_TESTNET]: '0xe4740051c3f77677e1C7228868Ec97445b84F9F2',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0x3f191448a367483244B66bf667790b6b7Ed166C8',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

//frontHelper
export const MULTICALL: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xaE816a6C152dDf153EabF04d9A028bfACB32A1Ef',
    [CHAIN_ID.BSC]: '0x31B4C247d05Cfe420d622707aD9A3a5151300150',
    [CHAIN_ID.BSC_TESTNET]: '0x633e2fbF999D6Fb565732fd970408e2417Ef6EdF',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0x051C836d5AB31a2ba0Aa27Fa7818b8B9Ee949490',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0xC01E1a1A0d1AB61b07a3a29cf8D28cD70b8CF864',
    [CHAIN_ID.POLYGON]: '0x76A0E73E00c7bd262a256f73B676577738A4cd95',
    [CHAIN_ID.POLYGON_TESTNET]: '0x1d3fdB747e0F51C92c6eFF063C77435F0dFfba4f',
    [CHAIN_ID.METIS_TESTNET]: '0x1f0032B275d2B257f14243ce694D5024b4cf9Bac',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0xfB0aA51D460032b8fe0ddD9a700eC4B7aF824008',
    [CHAIN_ID.HARMONY]: '0x95096a9C8E5cA8b2571a0317EB942142cFa49393',
    [CHAIN_ID.HARMONY_TESTNET]: '0x9e1483F74E223151958968BE30139bE5a9790C10',
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// dex factory
export const FACTORY_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [CHAIN_ID.ETH_RINKEBY]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [CHAIN_ID.BSC]: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
    [CHAIN_ID.BSC_TESTNET]: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
    [CHAIN_ID.POLYGON]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    [CHAIN_ID.POLYGON_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0xC324314BcEC6F17ddb6Afd8FD5475aFA32dE546D',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0xe4a575550c2b460d2307b82dcd7afe84ad1484dd',
    [CHAIN_ID.METIS_TESTNET]: '0xA327674305d490199B76b186Ed360fCad3296949',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0x75dFaB7b52f16C18a1DF9c67586C5d4c5B575E19',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: '0x10072290754Eb3Ce77ADC9C502EFDBcf26164532',
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// ?
export const STABLECOIN_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0x77c24f0Af71257C0ee26e0E0a108F940D1698d53',
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: '0x786Ba7a3B3229B0eD707aFf2731DFa4a4E6CB104',
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: '0x55c18d10ded7968Cd980AbfE0547B410DF284413',
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: '0x8781f0Fe84cc9Aa55F3e0F622001F816ccA61Cc9',
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: '0xd8b917cf32022e35E09Bac2c6F16a64fa7D1DEC9',
    [CHAIN_ID.METIS_TESTNET]: '0x351950C7C686de38383Fe0175fceC25aF8402b3d',
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: '0x351950C7C686de38383Fe0175fceC25aF8402b3d',
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// ?
export const FARM_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: '0xC3518c82746b8B45119207a230B555d5781B9430',
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: HashZero,
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: HashZero,
    [CHAIN_ID.METIS_TESTNET]: HashZero,
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
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
  [CHAIN_ID.HECO]: [],
  [CHAIN_ID.HECO_TESTNET]: [],
  [CHAIN_ID.AVALANCHE]: [],
  [CHAIN_ID.AVALANCHE_TESTNET]: [],
  [CHAIN_ID.METIS_TESTNET]: [],
  [CHAIN_ID.COINEX]: [],
  [CHAIN_ID.COINEX_TESTNET]: [],
  [CHAIN_ID.HARMONY]: [],
  [CHAIN_ID.HARMONY_TESTNET]: [],
  [CHAIN_ID.SOLANA]: [],
  [CHAIN_ID.SOLANA_DEVNET]: [],
  [CHAIN_ID.SOLANA_TESTNET]: [],
}

// ?
export const CURVE_PROXY_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: HashZero,
    [CHAIN_ID.METIS_TESTNET]: HashZero,
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// ?
export const CURVE_LOCAL_POOL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: HashZero,
    [CHAIN_ID.METIS_TESTNET]: HashZero,
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

// ?
export const CURVE_CROSSCHAIN_POOL_ADDRESS: TChainMapList<string> = {
    [CHAIN_ID.BSC]: HashZero,
    [CHAIN_ID.BSC_TESTNET]: HashZero,
    [CHAIN_ID.ETH]: HashZero,
    [CHAIN_ID.ETH_RINKEBY]: HashZero,
    [CHAIN_ID.HECO]: HashZero,
    [CHAIN_ID.HECO_TESTNET]: HashZero,
    [CHAIN_ID.POLYGON]: HashZero,
    [CHAIN_ID.POLYGON_TESTNET]: HashZero,
    [CHAIN_ID.AVALANCHE]: HashZero,
    [CHAIN_ID.AVALANCHE_TESTNET]: HashZero,
    [CHAIN_ID.METIS_TESTNET]: HashZero,
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]: HashZero,
    [CHAIN_ID.HARMONY]: HashZero,
    [CHAIN_ID.HARMONY_TESTNET]: HashZero,
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
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
    [CHAIN_ID.HECO]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.HECO_TESTNET]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.AVALANCHE]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.AVALANCHE_TESTNET]:
        '0x40231f6b438bce0797c9ada29b718a87ea0a5cea3fe9a771abdd76bd41a3e545',
    [CHAIN_ID.METIS_TESTNET]:
        '0x68cc803ebc27f23a62dd9f9251e76a9d6f2c659f76c92ffbd5e62d5b877384d6',
    [CHAIN_ID.COINEX]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.COINEX_TESTNET]:
        '0x5eff9d4048e36782dd54cfe49415dbd16e86bcb86b354012447525374c1af183',
    [CHAIN_ID.HARMONY]: '0x0000000000000000000000000000000000000000000000000000000000000000',
    [CHAIN_ID.HARMONY_TESTNET]: '0x0000000000000000000000000000000000000000000000000000000000000000',
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

export const DEFAULT_LOGO_URL_MAP = {
    [CHAIN_ID.ETH]: 'https://rinkeby.etherscan.io/images/main/empty-token.png',
    [CHAIN_ID.ETH_RINKEBY]:
        'https://rinkeby.etherscan.io/images/main/empty-token.png',
    [CHAIN_ID.BSC]: 'https://testnet.bscscan.com/images/main/empty-token.png',
    [CHAIN_ID.BSC_TESTNET]:
        'https://testnet.bscscan.com/images/main/empty-token.png',
    [CHAIN_ID.HECO]:
        'https://toppng.com/uploads/preview/question-png-11552243102zlkc2pnddd.png',
    [CHAIN_ID.HECO_TESTNET]:
        'https://toppng.com/uploads/preview/question-png-11552243102zlkc2pnddd.png',
    [CHAIN_ID.POLYGON]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png',
    [CHAIN_ID.POLYGON_TESTNET]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png',
    [CHAIN_ID.AVALANCHE]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png', // TODO: update icon
    [CHAIN_ID.AVALANCHE_TESTNET]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png', // TODO: update icon
    [CHAIN_ID.METIS_TESTNET]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png', // TODO: update icon
    [CHAIN_ID.COINEX]: HashZero,
    [CHAIN_ID.COINEX_TESTNET]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png', // TODO: update icon
    [CHAIN_ID.HARMONY]: 'https://mumbai.polygonscan.com/images/main/empty-token.png',// TODO: update icon
    [CHAIN_ID.HARMONY_TESTNET]:
        'https://mumbai.polygonscan.com/images/main/empty-token.png', // TODO: update icon
    [CHAIN_ID.SOLANA]: HashZero,
    [CHAIN_ID.SOLANA_DEVNET]: HashZero,
    [CHAIN_ID.SOLANA_TESTNET]: HashZero,
};

export const BLOCKCHAIN_TESTNETS_SYMBOL_MAP = {
    [CHAIN_ID.ETH_RINKEBY]: 'ETH',
    [CHAIN_ID.BSC_TESTNET]: 'BSC',
    [CHAIN_ID.HECO_TESTNET]: 'HECO',
    [CHAIN_ID.POLYGON_TESTNET]: 'POLYGON',
    [CHAIN_ID.AVALANCHE_TESTNET]: 'AVCH',
    [CHAIN_ID.SOLANA_DEVNET]: 'SOLANA',
    [CHAIN_ID.SOLANA_TESTNET]: 'SOLANA',
    [CHAIN_ID.METIS_TESTNET]: 'METIS',
    [CHAIN_ID.COINEX_TESTNET]: 'CET',
    [CHAIN_ID.HARMONY_TESTNET]: 'HRM',
};

export const BLOCKCHAIN_MAINNETS_SYMBOL_MAP = {
    [CHAIN_ID.ETH]: 'ETH',
    [CHAIN_ID.BSC]: 'BSC',
    [CHAIN_ID.HECO]: 'HECO',
    [CHAIN_ID.POLYGON]: 'POLYGON',
    [CHAIN_ID.AVALANCHE]: 'AVCH',
    [CHAIN_ID.SOLANA]: 'SOLANA',
    [CHAIN_ID.COINEX]: 'CET',
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
    [CHAIN_ID.HECO]: ['https://http-mainnet.hecochain.com'],
    [CHAIN_ID.HECO_TESTNET]: ['https://huobi.testnet.eywa.fi'],
    [CHAIN_ID.AVALANCHE]: ['https://api.avax.network/ext/bc/C/rpc'],
    [CHAIN_ID.AVALANCHE_TESTNET]: [
        'https://avalanche.testnet.eywa.fi/ext/bc/C/rpc',
    ],
    [CHAIN_ID.POLYGON]: ['https://rpc-mainnet.maticvigil.com/'],
    [CHAIN_ID.POLYGON_TESTNET]: ['https://mumbai.testnet.eywa.fi'],
    [CHAIN_ID.METIS_TESTNET]: ['https://stardust.metis.io/?owner=588'],
    [CHAIN_ID.COINEX]: ['https://rpc.coinex.net/'],
    [CHAIN_ID.COINEX_TESTNET]: ['https://testnet-rpc.coinex.net/'],
    [CHAIN_ID.HARMONY]: ['https://harmony.mainnet.eywa.fi'],
    [CHAIN_ID.HARMONY_TESTNET]: ['https://http.testnet.eywa.fi:17012'],
    [CHAIN_ID.SOLANA]: [],
    [CHAIN_ID.SOLANA_DEVNET]: ['https://api.devnet.solana.com'],
    [CHAIN_ID.SOLANA_TESTNET]: ['https://api.testnet.solana.com'],
};
