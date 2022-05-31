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
      address: "0x54F4726c37c5D0aC2C6DFe2f7f02a81C0b95DdaD",
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
      address: "0x6BC7F176bD136b157f78Dec99016D7a726f77b87",
      decimals: 18,
      network: NETWORKS.POLYGON_TESTNET,
      type: "SYNTH"
    },
  ],
}
