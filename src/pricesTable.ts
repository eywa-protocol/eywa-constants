export type TTransactionType =
  | 'synthesize'
  | 'unsynthesize'
  | 'swap'
  | 'addLiquidity'
  | 'removeLiquidity';
export type TOperationType =
  | 'approve'
  | 'deposite'
  | 'receive'
  | 'redeem'
  | 'swap'
  | 'synthesize'
  | 'addLiquidity'
  | 'removeLiquidity'
  | 'burnSyntheticToken';

export type TTokenCrossing =
  | 'withoutPermit'
  | 'withPermit'
  | 'token0standToken1stand'
  | 'token0permitToken1stand'
  | 'token0standToken1permit'
  | 'token0permitToken1permit';

export type TOperationCost = {
  [K in TTokenCrossing]?: {
    first: number;
    second: number;
  };
};

export type TGasPriceTable = {
  [T in TTransactionType]?: {
    [O in TOperationType]?: {
      [key: string]: TOperationCost;
    };
  };
};

// gas prices
export const gasPricesData: TGasPriceTable = {
  synthesize: {
    approve: {
      ETH: {
        withoutPermit: {
          first: 46483,
          second: 0,
        },
        withPermit: {
          first: 0,
          second: 0,
        },
      },
      BNB: {
        withoutPermit: {
          first: 0,
          second: 0,
        },
        withPermit: {
          first: 0,
          second: 0,
        },
      },
    },
    deposite: {
      ETH: {
        withoutPermit: {
          first: 174010,
          second: 174010,
        },
        withPermit: {
          first: 174010,
          second: 174010,
        },
      },
      BNB: {
        withoutPermit: {
          first: 169210,
          second: 169210,
        },
        withPermit: {
          first: 169210,
          second: 169210,
        },
      },
    },
    receive: {
      BNB: {
        withoutPermit: {
          first: 84349,
          second: 84361,
        },
        withPermit: {
          first: 84349,
          second: 84361,
        },
      },
      ETH: {
        withoutPermit: {
          first: 111249,
          second: 94161,
        },
        withPermit: {
          first: 94161,
          second: 94161,
        },
      },
    },
  },
  unsynthesize: {
    approve: {
      ETH: {
        withoutPermit: {
          first: 0,
          second: 0,
        },
        withPermit: {
          first: 0,
          second: 0,
        },
      },
    },
    redeem: {
      BNB: {
        withoutPermit: {
          first: 156326,
          second: 156326,
        },
        withPermit: {
          first: 156326,
          second: 156326,
        },
      },
      ETH: {
        withoutPermit: {
          first: 164714,
          second: 164714,
        },
        withPermit: {
          first: 164726,
          second: 164726,
        },
      },
    },
    receive: {
      BNB: {
        withoutPermit: {
          first: 89094,
          second: 89094,
        },
        withPermit: {
          first: 89094,
          second: 89094,
        },
      },
      ETH: {
        withoutPermit: {
          first: 96094,
          second: 96082,
        },
        withPermit: {
          first: 96094,
          second: 96082,
        },
      },
    },
  },
  swap: {
    swap: {
      BNB: {
        token0standToken1stand: {
          first: 111423,
          second: 111423,
        },
        token0standToken1permit: {
          first: 111409,
          second: 111409,
        },
        token0permitToken1stand: {
          first: 111409,
          second: 111397,
        },
        token0permitToken1permit: {
          first: 111477,
          second: 111477,
        },
      },
    },
    redeem: {
      BNB: {
        token0standToken1stand: {
          first: 156326,
          second: 156326,
        },
        token0standToken1permit: {
          first: 156350,
          second: 156350,
        },
        token0permitToken1stand: {
          first: 156350,
          second: 156350,
        },
        token0permitToken1permit: {
          first: 156338,
          second: 156338,
        },
      },
    },
    receive: {
      ETH: {
        token0standToken1stand: {
          first: 96082,
          second: 96094,
        },
        token0standToken1permit: {
          first: 96118,
          second: 96118,
        },
        token0permitToken1stand: {
          first: 96118,
          second: 96118,
        },
        token0permitToken1permit: {
          first: 96094,
          second: 96106,
        },
      },
    },
  },
  addLiquidity: {
    synthesize: {
      ETH: {
        token0standToken1stand: {
          first: 174034,
          second: 174034,
        },
        token0standToken1permit: {
          first: 174034,
          second: 174034,
        },
        token0permitToken1stand: {
          first: 174034,
          second: 174022,
        },
        token0permitToken1permit: {
          first: 174022,
          second: 174022,
        },
      },
    },
    receive: {
      BNB: {
        token0standToken1stand: {
          first: 84385,
          second: 84385,
        },
        token0standToken1permit: {
          first: 84385,
          second: 84385,
        },
        token0permitToken1stand: {
          first: 84385,
          second: 84373,
        },
        token0permitToken1permit: {
          first: 84373,
          second: 84373,
        },
      },
    },
    addLiquidity: {
      BNB: {
        token0standToken1stand: {
          first: 157642,
          second: 157642,
        },
        token0standToken1permit: {
          first: 185126,
          second: 159168,
        },
        token0permitToken1stand: {
          first: 185126,
          second: 191218,
        },
        token0permitToken1permit: {
          first: 173530,
          second: 158530,
        },
      },
    },
  },
  removeLiquidity: {
    removeLiquidity: {
      BNB: {
        token0standToken1stand: {
          first: 133700,
          second: 133930,
        },
        token0standToken1permit: {
          first: 214070,
          second: 135008,
        },
        token0permitToken1stand: {
          first: 220162,
          second: 152082,
        },
        token0permitToken1permit: {
          first: 202446,
          second: 134354,
        },
      },
    },
    burnSyntheticToken: {
      BNB: {
        token0standToken1stand: {
          first: 156350,
          second: 156362,
        },
        token0standToken1permit: {
          first: 156350,
          second: 156350,
        },
        token0permitToken1stand: {
          first: 156350,
          second: 156350,
        },
        token0permitToken1permit: {
          first: 156338,
          second: 156338,
        },
      },
    },
  },
};
