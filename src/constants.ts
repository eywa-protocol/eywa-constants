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
    METIS_TESTNET = 588,
    SOLANA = -1, // TODO: fix chain id
    SOLANA_TESTNET = -2, // TODO: fix chain id
    SOLANA_DEVNET = -3, // TODO: fix chain id
    NETWORK_1 = 1111, // Local chain
    NETWORK_2 = 1112, // Local chain
    NETWORK_3 = 1113, // Local chain
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
    [CHAIN_ID.METIS_TESTNET]: 'Metis Testnet',
    [CHAIN_ID.SOLANA]: 'Solana',
    [CHAIN_ID.SOLANA_DEVNET]: 'Solana Devnet',
    [CHAIN_ID.SOLANA_TESTNET]: 'Solana Testnet',
    [CHAIN_ID.NETWORK_1]: 'Network 1',
    [CHAIN_ID.NETWORK_2]: 'Network 2',
    [CHAIN_ID.NETWORK_3]: 'Network 3',
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
    [CHAIN_ID.METIS_TESTNET]: {
        name: 'Metis explorer',
        url: 'https://stardust-explorer.metis.io/',
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
    [CHAIN_ID.NETWORK_1]: { name: '1', url: '' },
    [CHAIN_ID.NETWORK_2]: { name: '2', url: '' },
    [CHAIN_ID.NETWORK_3]: { name: '3', url: '' },
};

export const BRIDGE_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0xca68D29B9B1A974FE0fDBEf5AEe1A01D1bC3457D'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x04Bb006F685f4a0EF988b4dEe517f3C726cDd9b8'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x7bBfbb8d5D95eB0E6AAE53339c6E73687C08d4e9'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x87C06A8857c121C8096Ba588865B344AE0c3703F'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0xE46d7D8b35671510E1246EA24EeC35F4c90Ca0f5'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0x0C3DeD430ABd2049f7eDc186dcB5D58946264361'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0x53C0A09e4954dD2D0edc6bF44F2C53B9c1fED667'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0x0c760E9A85d2E957Dd1E189516b6658CfEcD3985'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0x99A0cc91fb7fbD7b5514D68E9280AFd72576A267'
    ),
};
export const ROUTER_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: new EvmAddress('0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F'),
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x9ac64cc6e4415144c455bd8e4837fea55603e5c3'
    ),
    [CHAIN_ID.ETH]: new EvmAddress('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'),
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x7a250d5630b4cf539739df2c5dacb4c659f2488d'
    ),
    [CHAIN_ID.POLYGON]: new EvmAddress(
        '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'
    ),
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x2bCeC25644e56422bEFd3feA5286344369396fF1'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x2D99ABD9008Dc933ff5c0CD271B88309593aB921'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0x19BCFEe83ee0D77158b0c151150aFb0f389E4721'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_2]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_3]: EvmAddress.ZERO,
};
export const PROXY_GSN_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0xbFc68681254F12C2A4eA5e4Ba0fD63e8F0dBB619'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0xA9b67Bac9e2189e96b9609d9401F5FA9Af6bEa3C'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0xaa7262B67e6Ee72e37f2ed8d3329F89603Ad3248'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x6BC42FF7E620C4e2D25ae59De2Dde2fCBc11Cb2C'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x5e7B1e04c460c4A2f293fe1B04F75a75cA29a702'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0xCdCA50cDB6A1C6D97a065a1aECAA3e5cC8716e51'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_2]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_3]: EvmAddress.ZERO,
};
export const SYNTHESIZE_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0xB6992766E9AbCd627975D84AddD88e962C492189'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0xFAb579DF97010D53086A379EA131FB01F0288EA6'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0xF83406143efbE0D5478F4aDB0E37256931466f86'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x89bB502d8D52b8B67454526EE2c9d50A0B8E97F6'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x2CfdD6483a3605603703c750698b671C65910aC3'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0x4E6CAe714AecdC8e0f9dF6b196db47e6b05fe61D'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0xD110733A983A255C692c9547c66266EDE8EAb9d3'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0xdd85dDc3A272000d9d0942eD6e44A2c8c487858e'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0x30c487604FD3c7e8c102EF92EDD3053e24f999E1'
    ),
};
export const PORTAL_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x7143FC4d9Be2B33d6C10f4137E973693279b2151'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x84e8052183A91af110535F901CEddF89545677CE'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0xf481a5B51c06a0a3bC79035Ae3e30F67B22AB665'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0xd1b2536Eab9c1b20D088eD9CC02FD67AE7B324FF'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x528161f6f6b57b243bF9095E88e3853aad16781E'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0x6b9c4510332f2F1fFa578E254A449C68A7Ea097f'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0x204F815995eb66B8a13b2308d56CB98d7566F48a'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0xBE8a929Ac944333f054D2936ba7CdcD9A457323f'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0xF5d39537E69D48bfB63A9ecB3fb9D2Ce833cE305'
    ),
};

// List of addresses using for gasless mode
export const PAYMASTER_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x2b891117E9896fffd05A4D07d3c6E81c8096C161'
    ),
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x972ed0f36cec3c792d46ef7158fa7138d88e195c'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x3f191448a367483244B66bf667790b6b7Ed166C8'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x8AC7CF0d63e38A09d1d0590B186A702e881B22c6'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x1A6c888Fc864dd81C97f9D111e425DceA94a2bA6'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0xe4740051c3f77677e1C7228868Ec97445b84F9F2'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0xF6A74A437F0633991c007A59508287a426e5c455'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0xF6A74A437F0633991c007A59508287a426e5c455'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0xF6A74A437F0633991c007A59508287a426e5c455'
    ),
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
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0xA327674305d490199B76b186Ed360fCad3296949'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_2]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_3]: EvmAddress.ZERO,
};

export const STABLECOIN_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: new EvmAddress(
        '0x77c24f0Af71257C0ee26e0E0a108F940D1698d53'
    ),
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x786Ba7a3B3229B0eD707aFf2731DFa4a4E6CB104'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0x55c18d10ded7968Cd980AbfE0547B410DF284413'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x8781f0Fe84cc9Aa55F3e0F622001F816ccA61Cc9'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0xd8b917cf32022e35E09Bac2c6F16a64fa7D1DEC9'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0x351950C7C686de38383Fe0175fceC25aF8402b3d'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_2]: EvmAddress.ZERO,
    [CHAIN_ID.NETWORK_3]: EvmAddress.ZERO,
};

export const CURVE_PROXY_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: EvmAddress.ZERO,
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.METIS_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0x710E068DF625Dfe124dD9DdB3867061548Bf564b'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0xf7Da00D518AE33e5086AFc023b48894c06D5454B'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0x957aB6b34f99781a70b33307613554617D984A7f'
    ),
};

export const CURVE_LOCAL_POOL_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: EvmAddress.ZERO,
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.METIS_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0x369a861E613915093Ff15420Ed1D2f6599EaeB50'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0x52B8096d0618fa4Af3082FE9e3C4c70cEBC59456'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0xB61ecE822aE132F4a3F8b4eD464acAe1f4202847'
    ),
};

export const CURVE_CROSSCHAIN_POOL_ADDRESS: TChainMapList<Address> = {
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.ETH]: EvmAddress.ZERO,
    [CHAIN_ID.ETH_RINKEBY]: EvmAddress.ZERO,
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: EvmAddress.ZERO,
    [CHAIN_ID.METIS_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0xf9cC8F72f93E65bafe3731C3FBA0608b98E654bE'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0xF08aE706a6e29Be30Ad8DCaF6192caAC0b058530'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0x69F65eD97A16020a247fdd48E467fCaB851cFa8e'
    ),
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
    [CHAIN_ID.METIS_TESTNET]:
        '0x68cc803ebc27f23a62dd9f9251e76a9d6f2c659f76c92ffbd5e62d5b877384d6',
    [CHAIN_ID.SOLANA]: '',
    [CHAIN_ID.SOLANA_DEVNET]: '',
    [CHAIN_ID.SOLANA_TESTNET]: '',
    [CHAIN_ID.NETWORK_1]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.NETWORK_2]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    [CHAIN_ID.NETWORK_3]:
        '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
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
    [CHAIN_ID.SOLANA]: '',
    [CHAIN_ID.SOLANA_DEVNET]: '',
    [CHAIN_ID.SOLANA_TESTNET]: '',
    [CHAIN_ID.NETWORK_1]: '',
    [CHAIN_ID.NETWORK_2]: '',
    [CHAIN_ID.NETWORK_3]: '',
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
    [CHAIN_ID.NETWORK_1]: 'NET1',
    [CHAIN_ID.NETWORK_2]: 'NET2',
    [CHAIN_ID.NETWORK_3]: 'NET3',
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
        '0xEd3Aa3817f14cE32b077e13ae93397769188408B'
    ),
    [CHAIN_ID.BSC]: EvmAddress.ZERO,
    [CHAIN_ID.BSC_TESTNET]: new EvmAddress(
        '0x3Bb984F62A7a521c4037E6571D91B79aca5F8923'
    ),
    [CHAIN_ID.HECO]: EvmAddress.ZERO,
    [CHAIN_ID.HECO_TESTNET]: new EvmAddress(
        '0x056444216bD664528317fb2e78D2ABdBb3A3afaA'
    ),
    [CHAIN_ID.AVALANCHE]: EvmAddress.ZERO,
    [CHAIN_ID.AVALANCHE_TESTNET]: new EvmAddress(
        '0x056444216bD664528317fb2e78D2ABdBb3A3afaA'
    ),
    [CHAIN_ID.POLYGON]: EvmAddress.ZERO,
    [CHAIN_ID.POLYGON_TESTNET]: new EvmAddress(
        '0xFA23Eed938bb9295fD590918858bc57F2B759B50'
    ),
    [CHAIN_ID.METIS_TESTNET]: new EvmAddress(
        '0x1f0032B275d2B257f14243ce694D5024b4cf9Bac'
    ),
    [CHAIN_ID.SOLANA]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_DEVNET]: SolanaAddress.ZERO,
    [CHAIN_ID.SOLANA_TESTNET]: SolanaAddress.ZERO,
    [CHAIN_ID.NETWORK_1]: new EvmAddress(
        '0xdb6FA9f0E6ED3ed588ab6802413062424bC165C5'
    ),
    [CHAIN_ID.NETWORK_2]: new EvmAddress(
        '0x8d710ae982ab5c7b1dd77063595F659C7827EF63'
    ),
    [CHAIN_ID.NETWORK_3]: new EvmAddress(
        '0x31c692fc0c7774C7E4F7614EB668dc4bd63D2806'
    ),
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
    [CHAIN_ID.SOLANA]: [],
    [CHAIN_ID.SOLANA_DEVNET]: ['https://api.devnet.solana.com'],
    [CHAIN_ID.SOLANA_TESTNET]: ['https://api.testnet.solana.com'],
    [CHAIN_ID.NETWORK_1]: ['http://172.20.128.11:7545'],
    [CHAIN_ID.NETWORK_2]: ['http://172.20.128.12:8545'],
    [CHAIN_ID.NETWORK_3]: ['http://172.20.128.13:9545'],
};

export interface ICurrency {
    name: string;
    symbol: string;
    decimals: number;
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
    [CHAIN_ID.NETWORK_1]: {} as any,
    [CHAIN_ID.NETWORK_2]: {} as any,
    [CHAIN_ID.NETWORK_3]: {} as any,
};