import { createFixtureLoader } from 'ethereum-waffle';

import { WETH9Fixture } from './shared';

export type LoadFixtureFunction = ReturnType<typeof createFixtureLoader>;

export type WETHTestContext = WETH9Fixture & {
  subject?: Function;
};
