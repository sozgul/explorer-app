import {mirrorKeys} from '../index';

describe('Utilities', () => {
  describe('#mirrorKeys', () => {
    it('should produce an object whose values mirror it\'s keys', () => {
      const keys = ['A', 'B', 'C'];
      expect(mirrorKeys(keys)).toMatchObject({A: 'A', B: 'B', C: 'C'});
    });
  });
});
