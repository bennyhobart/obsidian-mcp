/**
 * Test helpers for Obsidian plugin development
 */

import { MockApp, MockPlugin } from '../__tests__/mocks';

/**
 * Creates a mock file object for testing
 * @param path The path to the file
 * @param content The content of the file
 * @returns A mock file object
 */
export function createMockFile(path: string, content = ''): any {
  return {
    path,
    basename: path.split('/').pop()?.split('.')[0] || '',
    extension: path.split('.').pop() || '',
    stat: {
      ctime: Date.now(),
      mtime: Date.now(),
      size: content.length,
    },
  };
}

/**
 * Creates a test environment with mocked Obsidian objects
 * @returns Object containing mocked app and plugin
 */
export function createTestEnvironment() {
  const app = new MockApp();
  const plugin = new MockPlugin();
  
  // You can pre-configure the mocks here if needed
  app.vault.getFiles.mockReturnValue([
    createMockFile('test/file1.md', 'Test content 1'),
    createMockFile('test/file2.md', 'Test content 2'),
  ]);
  
  return { app, plugin };
}

/**
 * Helper to mock the Obsidian Vault.read method
 * @param app The mocked app
 * @param filePathToContentMap Map of file paths to their content
 */
export function mockVaultRead(app: MockApp, filePathToContentMap: Record<string, string>) {
  app.vault.read.mockImplementation((file: any) => {
    const path = typeof file === 'string' ? file : file.path;
    if (filePathToContentMap[path]) {
      return Promise.resolve(filePathToContentMap[path]);
    }
    return Promise.reject(new Error(`File not found: ${path}`));
  });
}
