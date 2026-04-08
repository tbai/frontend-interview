/**
 * Simulates API calls that return data after a delay.
 * DO NOT modify this file.
 */

export function fetchPrice(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(29.99), 800);
  });
}

export function fetchTaxRate(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(0.21), 1500);
  });
}
