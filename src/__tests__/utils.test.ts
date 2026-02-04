/**
 * Unit tests for utility functions
 */

import { calculateScore, getBadgeLevel, formatContributions } from '../utils';

describe('calculateScore', () => {
  it('should calculate score correctly with commits only', () => {
    expect(calculateScore(10, 0)).toBe(100);
  });

  it('should calculate score correctly with PRs only', () => {
    expect(calculateScore(0, 5)).toBe(250);
  });

  it('should calculate score correctly with both commits and PRs', () => {
    expect(calculateScore(10, 5)).toBe(350);
  });
});

describe('getBadgeLevel', () => {
  it('should return Gold for high scores', () => {
    expect(getBadgeLevel(1500)).toBe('Gold');
  });

  it('should return Silver for medium scores', () => {
    expect(getBadgeLevel(750)).toBe('Silver');
  });

  it('should return Bronze for low scores', () => {
    expect(getBadgeLevel(200)).toBe('Bronze');
  });

  it('should return Beginner for very low scores', () => {
    expect(getBadgeLevel(50)).toBe('Beginner');
  });
});

describe('formatContributions', () => {
  it('should format contributions with commas', () => {
    expect(formatContributions(1234)).toBe('1,234 contributions');
  });

  it('should handle small numbers', () => {
    expect(formatContributions(5)).toBe('5 contributions');
  });
});
