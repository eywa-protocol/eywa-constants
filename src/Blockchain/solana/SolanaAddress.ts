import { PublicKey } from '@solana/web3.js';

import Address from '../abstract/Address';

class SolanaAddress extends Address {
  static ZERO = new SolanaAddress('11111111111111111111111111111111');

  isZero(): boolean {
    return this.equal(SolanaAddress.ZERO);
  }

  isValid(): boolean {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _ = new PublicKey(this.toString());
      return true;
    } catch {}
    return false;
  }
}

export default SolanaAddress;
