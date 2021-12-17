abstract class Address {
  static ZERO: Address;

  private _address: string;

  constructor(address: string) {
    this._address = address;
  }

  toString(): string {
    return this._address;
  }

  equal(anotherAddress: Address): boolean {
    return this._address === anotherAddress.toString();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static isZero(address: string): boolean {
    throw new Error('not implemented');
  }

  abstract isZero(): boolean;
  abstract isValid(): boolean;
}

export default Address;
