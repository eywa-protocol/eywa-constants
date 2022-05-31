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
      address: "0xF0AA41A080109BBAF5cB7Dc3434FB20b2Cf2D014",
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
      address: "0x3Cc94e2aD76Ff4CcAF8d80d62d4f9b0B0612f794",
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
      address: "0x9FB3a04c93860bee9CbD151c7EcEB20624BdF794",
      decimals: 18,
      network: NETWORKS.POLYGON_TESTNET,
      type: "SYNTH"
    },
  ],
}
