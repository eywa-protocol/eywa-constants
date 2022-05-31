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
      address: "0xF35d39587b9364BDaBA3Fe1E3b929B7877b2986d",
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
      address: "0xB81547FA8E4e37A410a42acA3aE28A7dc170Bb23",
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
      address: "0x8198a5716de98ba81b75bf6cEBFd3f27053876B9",
      decimals: 18,
      network: NETWORKS.POLYGON_TESTNET,
      type: "SYNTH"
    },
  ],
}
