/**
 * Utility functions for yoDEV testing
 */

export function calculateScore(commits: number, prs: number): number {
  return commits * 10 + prs * 50;
}

export function getBadgeLevel(score: number): string {
  if (score >= 1000) return 'Gold';
  if (score >= 500) return 'Silver';
  if (score >= 100) return 'Bronze';
  return 'Beginner';
}

export function formatContributions(count: number): string {
  return `${count.toLocaleString()} contributions`;
}
