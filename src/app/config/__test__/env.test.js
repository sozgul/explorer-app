import {isExplorerDebugEnabled} from '../env';

describe('Env', () => {
  describe('#isExplorerDebugEnabled (truthy values)', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    ['1', 1].forEach(truthyVal => {
      it(`should return TRUE when REACT_NATIVE_EXPLORER_DEBUG is "${truthyVal}"`, () => {
        process.env.REACT_NATIVE_EXPLORER_DEBUG = truthyVal;
        expect(isExplorerDebugEnabled()).toBe(true);
      });
    });
  });
  describe('#isExplorerDebugEnabled (falsey values)', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    ['0', 0, undefined].forEach(falseyVal => {
      it(`should return FALSE when REACT_NATIVE_EXPLORER_DEBUG is "${falseyVal}"`, () => {
        process.env.REACT_NATIVE_EXPLORER_DEBUG = falseyVal;
        expect(isExplorerDebugEnabled()).toBe(false);
      });
    });
  });
});
