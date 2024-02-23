import { describe, test, expect } from 'vitest';
import { romanToInt } from './roman-to-integer.js';

describe.each(romanToInt)('romanToInt %s', (_, fn) => {
  test('III', () => {
    expect(fn('III')).toBe(3);
  });

  test('IV', () => {
    expect(fn('IV')).toBe(4);
  });

  test('IX', () => {
    expect(fn('IX')).toBe(9);
  });

  test('LVIII', () => {
    expect(fn('LVIII')).toBe(58);
  });

  test('MCMXCIV', () => {
    expect(fn('MCMXCIV')).toBe(1994);
  });
});
