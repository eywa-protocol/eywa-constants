import { NETWORKS } from "./types";

export const tokens = {
  defaultTokens: [
    {
      name: "EYWA-Token",
      symbol: "EYWA",
      address: "0xA8D19DC73C11176201855b27EE59EFDC41B6fFaE",
      decimals: 18,
      network: NETWORKS.HARMONY,
      type: "ERC20"
    },
    {
      name: "EYWA-Token",
      symbol: "EYWA",
      address: "0xbcDEA80c20C906131126cEbe0d5eFdEf7604eC13",
      decimals: 18,
      network: NETWORKS.HARMONY_TESTNET,
      type: "ERC20"
    }
  ],
  synthTokens: [
    {
      name: "EYWA-Token",
      symbol: "EYWA",
      address: "0xb0De10f7eDB891Fa06132cea484e125AEE0E3A66",
      decimals: 18,
      network: NETWORKS.BSC,
      type: "SYNTH"
    },
    {
      name: "EYWA-Token",
      symbol: "EYWA",
      address: "0x0b02da85Ae42Ba7008237B607125B960259495B7",
      decimals: 18,
      network: NETWORKS.BSC_TESTNET,
      type: "SYNTH"
    },
    {
      name: "EYWA-Token",
      symbol: "EYWA",
      address: "0x9ce0C5780A68aED7DEBB9a7f787Ec79A6485DEB5",
      decimals: 18,
      network: NETWORKS.POLYGON,
      type: "SYNTH"
    },
    {
      name: "EYWA-Token",
      symbol: "EYWA",
      address: "0x4CFc48d360385C47a06399912232d95B4203F541",
      decimals: 18,
      network: NETWORKS.POLYGON_TESTNET,
      type: "SYNTH"
    },
  ],
}