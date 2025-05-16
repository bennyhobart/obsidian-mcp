import { sum, capitalizeFirstLetter, createMockPluginSettings } from '../src/utils';

describe('Utils Tests', () => {
  describe('sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });

    test('adds negative numbers correctly', () => {
      expect(sum(-1, -5)).toBe(-6);
    });

    test('handles zero values', () => {
      expect(sum(0, 5)).toBe(5);
      expect(sum(5, 0)).toBe(5);
      expect(sum(0, 0)).toBe(0);
    });
  });

  describe('capitalizeFirstLetter function', () => {
    test('capitalizes the first letter of a string', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });

    test('keeps capitalization unchanged if already capitalized', () => {
      expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    });
  });

  describe('createMockPluginSettings', () => {
    test('returns the expected default values', () => {
      const settings = createMockPluginSettings();
      expect(settings).toHaveProperty('mySetting');
      expect(settings.mySetting).toBe('test-value');
    });
  });
});
