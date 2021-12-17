import { isAddress } from '@ethersproject/address';
import { AddressZero } from '@ethersproject/constants';

import Address from '../abstract/Address';

class EvmAddress extends Address {
  static ZERO = new EvmAddress(AddressZero);

  static isZero(address: string): boolean {
    return new EvmAddress(address).isZero();
  }

  isValid(): boolean {
    return isAddress(this.toString());
  }

  isZero(): boolean {
    return this.equal(EvmAddress.ZERO);
  }
}

export default EvmAddress;
