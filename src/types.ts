export interface ICurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface IExplorer {
  name: string;
  url: string;
}

export enum CHAIN_ID {
  BSC = 56,
  BSC_TESTNET = 97,
  POLYGON = 137,
  POLYGON_TESTNET = 80001,
  HARMONY = 1666600001,
  HARMONY_TESTNET = 1666700000,
}

export enum NETWORKS {
  BSC,
  BSC_TESTNET,
  POLYGON,
  POLYGON_TESTNET,
  HARMONY,
  HARMONY_TESTNET,
}

export type TNetworkMap<T> = {
  readonly [network in NETWORKS]: T;
};
