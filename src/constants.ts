import { HashZero } from "@ethersproject/constants";
import { ICurrency, IExplorer, NETWORKS, TNetworkMap } from "./types";

export const CURRENCY: TNetworkMap<ICurrency> = {
  [NETWORKS.BSC]: { name: "BNB", symbol: "BNB", decimals: 18 },
  [NETWORKS.BSC_TESTNET]: { name: "BNB", symbol: "BNB", decimals: 18 },
  [NETWORKS.POLYGON]: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  [NETWORKS.POLYGON_TESTNET]: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  [NETWORKS.HARMONY]: { name: "HRM", symbol: "HRM", decimals: 18 },
  [NETWORKS.HARMONY_TESTNET]: { name: "HRM", symbol: "HRM", decimals: 18 },
};

export const CHAIN_NAME: TNetworkMap<string> = {
  [NETWORKS.BSC]: "BNB Chain",
  [NETWORKS.BSC_TESTNET]: "BNB Chain Testnet",
  [NETWORKS.POLYGON]: "Polygon",
  [NETWORKS.POLYGON_TESTNET]: "Polygon Mumbai",
  [NETWORKS.HARMONY]: "Harmony One",
  [NETWORKS.HARMONY_TESTNET]: "Harmony One Testnet",
};

export const EXPLORER: TNetworkMap<IExplorer> = {
  [NETWORKS.BSC]: {
    name: "BscScan",
    url: "https://bscscan.com",
  },
  [NETWORKS.BSC_TESTNET]: {
    name: "BscScan",
    url: "https://testnet.bscscan.com",
  },
  [NETWORKS.POLYGON]: {
    name: "Polygon explorer",
    url: "https://polygonscan.com",
  },
  [NETWORKS.POLYGON_TESTNET]: {
    name: "Polygon explorer",
    url: "https://mumbai.polygonscan.com",
  },
  [NETWORKS.HARMONY]: {
    name: "Harmony explorer",
    url: "https://explorer.harmony.one",
  },
  [NETWORKS.HARMONY_TESTNET]: {
    name: "Harmony explorer",
    url: "https://explorer.testnet.harmony.one",
  },
};

// ?
export const INIT_CODE_HASH: TNetworkMap<string> = {
  [NETWORKS.BSC]:
    "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66",
  [NETWORKS.BSC_TESTNET]:
    "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66",
  [NETWORKS.POLYGON]:
    "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
  [NETWORKS.POLYGON_TESTNET]:
    "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303",
  [NETWORKS.HARMONY]: HashZero,
  [NETWORKS.HARMONY_TESTNET]: HashZero,
};

export const DEFAULT_LOGO_URL_MAP = {
  [NETWORKS.BSC]: "https://testnet.bscscan.com/images/main/empty-token.png",
  [NETWORKS.BSC_TESTNET]:
    "https://testnet.bscscan.com/images/main/empty-token.png",
  [NETWORKS.POLYGON]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png",
  [NETWORKS.POLYGON_TESTNET]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png",
  [NETWORKS.HARMONY]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png", // TODO: update icon
  [NETWORKS.HARMONY_TESTNET]:
    "https://mumbai.polygonscan.com/images/main/empty-token.png", // TODO: update icon
};

export const TOKEN_STANDARD: TNetworkMap<string> = {
  [NETWORKS.BSC]: "BEP20",
  [NETWORKS.BSC_TESTNET]: "BEP20",
  [NETWORKS.POLYGON_TESTNET]: "POLYGON",
  [NETWORKS.POLYGON]: "POLYGON",
  [NETWORKS.HARMONY_TESTNET]: "HRC20",
  [NETWORKS.HARMONY]: "HRC20",
};