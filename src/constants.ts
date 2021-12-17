import Address from './Blockchain/abstract/Address';
import EvmAddress from './Blockchain/evm/EvmAddress';
import SolanaAddress from './Blockchain/solana/SolanaAddress';

export type TChainMapList<T> = {
    readonly [chainId in CHAIN_ID]: T;
};


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
    SOLANA = -1, // TODO: fix chain id
    SOLANA_TESTNET = -2, // TODO: fix chain id
    SOLANA_DEVNET = -3, // TODO: fix chain id
}

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
    [CHAIN_ID.POLYGON_TESTNET]: {
        name: 'Polygon explorer',
        url: 'https://mumbai.polygonscan.com/',
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

export const BRIDGE_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x0ed15549797201B007A3A2811d6dD8D2D1eb9c6f'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x27Bb668C9489D99Eff7F3A6B14F20b74eFd260ed'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x2a6CAC2cb898aDd922bFC564f06d095EF09f09C5'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0xEf37Bbc807Ad5FD8e13CCb33d18d787AfDde26d7'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0xdBC762054268828e74788eA61aA36e624BBda076'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};
export const ROUTER_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: new EvmAddress('0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F'),
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0xD99D1c33F9fC3444f8101754aBC46c52416550D1'
    ),
    [CHAIN_ID.ETH]: new EvmAddress('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'),
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    ),
    [CHAIN_ID.POLYGON]: new EvmAddress(
        '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'
    ),
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x7039351cbF0061B0748EbF903a9DCa9dF8F37d56'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x2D99ABD9008Dc933ff5c0CD271B88309593aB921'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};
export const PROXY_GSN_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x0bcC79025565ae80f52C34D7ED372e5071c7fEFF'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0xE96f22f766393345E569C8E81C445b5D4b6bC7e7'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};
export const SYNTHESIZE_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x2FBC15028d6243ad17C1DD4cca47158AC579aD45'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x12168D6546A83644F5661EDd69B019F39cdA4909'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x64e01c20E909D5D580daDba2C734e41eD07DB7b7'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0xDFbc57417356F0FC48d7DAb140DE44317Ac9E91A'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x1Caa6a25929a4F093baB2B7836B8F20C444629Fa'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};
export const PORTAL_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x7f6776fFFC8B83215679DBDA8D91136b4d7053B2'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x7971Aa0A68d11b0755634601a8c3E29805B41778'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x515193FfCeE0840D2e15CC71Eeb431Cff2cd1e11'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0xbe5aC3d52046c201b045B08e41bE4aB2C72EA60D'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0xbED8CA3dB6FF8724CDd1D5A229da246f2ccE95B3'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};

// List of addresses using for gasless mode
export const PAYMASTER_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0xF6A74A437F0633991c007A59508287a426e5c455'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0xA6e10aA9B038c9Cddea24D2ae77eC3cE38a0c016'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};

export const FACTORY_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.ETH]: new EvmAddress('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'),
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
    ),
    [CHAIN_ID.BSC]: new EvmAddress('0xBCfCcbde45cE874adCB698cC183deBcF17952812'),
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x6725F303b657a9451d8BA641348b6761A6CC7a17'
    ),
    [CHAIN_ID.POLYGON]: new EvmAddress(
        '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32'
    ),
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0xC324314BcEC6F17ddb6Afd8FD5475aFA32dE546D'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0xe4a575550c2b460d2307b82dcd7afe84ad1484dd'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};

export const STABLECOIN_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0xa9E233E2c06fbAFf7d1D913060d5F4e159092414'
    ),
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x98e8927207C6C221A5eb4a3575925717Fa6303a8'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0xe07D7B44D340216723eD5eA33c724908B817EE9D'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0xcdec93702Fba053877988443112Cb8F7F1BebA27'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0xBb0F8F8fC4EeD9B649162bDCaaE3483737Ae68E3'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};

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
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f', // todo
    [CHAIN_ID.HECO_TESTNET]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.AVALANCHE]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.AVALANCHE_TESTNET]:
        '0x40231f6b438bce0797c9ada29b718a87ea0a5cea3fe9a771abdd76bd41a3e545',
    [CHAIN_ID.SOLANA]: '',
    [CHAIN_ID.SOLANA_DEVNET]: '',
    [CHAIN_ID.SOLANA_TESTNET]: '',
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
    [CHAIN_ID.SOLANA]: '',
    [CHAIN_ID.SOLANA_DEVNET]: '',
    [CHAIN_ID.SOLANA_TESTNET]: '',
};

export const BLOCKCHAIN_TESTNETS_SYMBOL_MAP = {
    [CHAIN_ID.ETH_RINKEBY]: 'ETH',
    [CHAIN_ID.BSC_TESTNET]: 'BSC',
    [CHAIN_ID.HECO_TESTNET]: 'HECO',
    [CHAIN_ID.POLYGON_TESTNET]: 'POLYGON',
    [CHAIN_ID.AVALANCHE_TESTNET]: 'AVCH',
    [CHAIN_ID.SOLANA_DEVNET]: 'SOLANA',
    [CHAIN_ID.SOLANA_TESTNET]: 'SOLANA',
};

export const BLOCKCHAIN_MAINNETS_SYMBOL_MAP = {
    [CHAIN_ID.ETH]: 'ETH',
    [CHAIN_ID.BSC]: 'BSC',
    [CHAIN_ID.HECO]: 'HECO',
    [CHAIN_ID.POLYGON]: 'POLYGON',
    [CHAIN_ID.AVALANCHE]: 'AVCH',
    [CHAIN_ID.SOLANA]: 'SOLANA',
};

export const BLOCKCHAIN_SYMBOL_MAP = {
    ...BLOCKCHAIN_TESTNETS_SYMBOL_MAP,
    ...BLOCKCHAIN_MAINNETS_SYMBOL_MAP,
};

export const MULTICALL: TChainMapList<Address> = {
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0xe930033842973C0160BecA352C9C01642414A5E4'
    ),
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x90E80D20981a74858a087250a06656147F664B28'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x4600ADcAddF46a238d90784e4bcCDDA610FdC486'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x90503468DB36aD503e1EDC7965C4d5123070EdAF'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x66b415B68E5104702cBca8406479B18309c337c1'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
};

export const RPC_URLS: TChainMapList<string[]> = {
    [CHAIN_ID.ETH]: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    [CHAIN_ID.ETH_RINKEBY]: [
        'https://rinkeby.testnet.eywa.fi',
        'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    ],
    [CHAIN_ID.BSC]: ['https://bsc-dataseed.binance.org/'],
    [CHAIN_ID.BSC_TESTNET]:  ['https://bsc.testnet.eywa.fi'],
    [CHAIN_ID.HECO]:  ['https://http-mainnet.hecochain.com'],
    [CHAIN_ID.HECO_TESTNET]: ['https://huobi.testnet.eywa.fi'],
    [CHAIN_ID.POLYGON]:  ['https://rpc-mainnet.maticvigil.com/'],
    [CHAIN_ID.POLYGON_TESTNET]: ['https://mumbai.testnet.eywa.fi'],
    [CHAIN_ID.SOLANA]: [] ,
    [CHAIN_ID.SOLANA_DEVNET]:  ['https://api.devnet.solana.com'],
    [CHAIN_ID.SOLANA_TESTNET]:  ['https://api.testnet.solana.com'],
    [CHAIN_ID.AVALANCHE]:['https://api.avax.network/ext/bc/C/rpc'],
    [CHAIN_ID.AVALANCHE_TESTNET]: ['https://avalanche.testnet.eywa.fi/ext/bc/C/rpc'],
};