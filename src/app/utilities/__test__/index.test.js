import {mirrorKeys, capitalizeString} from '../index';

describe('Utilities', () => {
  describe('#mirrorKeys', () => {
    it('should produce an object whose values mirror it\'s keys', () => {
      const keys = ['A', 'B', 'C'];
      expect(mirrorKeys(keys)).toMatchObject({A: 'A', B: 'B', C: 'C'});
    });
  });

  describe('#capitalizeString', () => {
    it('should capitalize a single lowercase word', () => {
      const string = 'string';
      expect(capitalizeString(string)).toBe('String');
    });

    it('should capitalize a string with multiple words', () => {
      const string = 'this string has multiple words';
      expect(capitalizeString(string)).toBe('This String Has Multiple Words');
    });

    it('should leave an already capitalized strings alone', () => {
      const string1 = 'String';
      const string2 = 'This String Is Already Capitalized!';
      expect(capitalizeString(string1)).toBe('String');
      expect(capitalizeString(string2)).toBe('This String Is Already Capitalized!');
    });

    it('should return an empty string if the input is undefined', () => {
      expect(capitalizeString()).toBe('');
    });
  });
});
