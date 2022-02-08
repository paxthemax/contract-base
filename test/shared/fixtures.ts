import { Fixture } from 'ethereum-waffle';
import { waffle } from 'hardhat';

import WETH9 from './external/WETH9.json';
import { IWETH9 } from '../../types/IWeth9';

export type WETH9Fixture = { weth9: IWETH9 };

export const wethFixture: Fixture<WETH9Fixture> = async ([wallet]) => {
  const weth9 = (await waffle.deployContract(wallet, {
    bytecode: WETH9.bytecode,
    abi: WETH9.abi,
  })) as IWETH9;

  return { weth9 };
};
