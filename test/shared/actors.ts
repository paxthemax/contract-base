import { MockProvider } from 'ethereum-waffle';
import { Wallet } from 'ethers';

// User indexes:
export const WALLET_USER_INDEXES = {
  WETH_OWNER: 0,
  ROOT_USER: 1,
};

export class ActorFixture {
  wallets: Wallet[];
  provider: MockProvider;

  constructor(wallets: Wallet[], provider: MockProvider) {
    (this.wallets = wallets), (this.provider = provider);
  }

  // User that mints and transfers WETH to test accounts
  wethOwner() {
    return this._getActor(WALLET_USER_INDEXES.WETH_OWNER);
  }

  rootUser() {
    return this._getActor(WALLET_USER_INDEXES.ROOT_USER);
  }

  // Actual logic of fetching the wallet
  private _getActor(index: number): Wallet {
    if (!index) {
      throw new Error(`Invalid index: ${index}`);
    }
    const account = this.wallets[index];
    if (!account) {
      throw new Error(`Account ID ${index} could not be loaded`);
    }
    return account;
  }
}
