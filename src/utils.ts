/**
 * This file contains utility functions for testing.
 */

/**
 * A simple function to sum two numbers.
 * This is just a utility example for demonstration.
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * A sample function that capitalizes the first letter of a string
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Mock a basic plugin settings interface for testing
 */
export function createMockPluginSettings() {
  return {
    mySetting: 'test-value'
  };
}
