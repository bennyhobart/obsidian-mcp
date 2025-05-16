import { MockApp, MockPlugin } from './mocks';

/**
 * This is a sample utility function that mimics interaction with Obsidian API
 * @param app The Obsidian App API
 * @param filePath Path to a file
 * @returns A boolean indicating if file exists
 */
async function checkFileExists(app: any, filePath: string): Promise<boolean> {
  try {
    return await app.vault.adapter.exists(filePath);
  } catch (error) {
    console.error('Error checking if file exists:', error);
    return false;
  }
}

describe('Obsidian API Tests', () => {
  let mockApp: MockApp;
  
  beforeEach(() => {
    mockApp = new MockApp();
    jest.clearAllMocks();
  });
  
  test('checkFileExists returns true when file exists', async () => {
    // Setup the mock to return true
    mockApp.vault.adapter.exists.mockResolvedValue(true);
    
    // Call the function with the mock
    const result = await checkFileExists(mockApp, 'test/file.md');
    
    // Verify the result and that the mock was called correctly
    expect(result).toBe(true);
    expect(mockApp.vault.adapter.exists).toHaveBeenCalledWith('test/file.md');
    expect(mockApp.vault.adapter.exists).toHaveBeenCalledTimes(1);
  });
  
  test('checkFileExists returns false when file does not exist', async () => {
    // Setup the mock to return false
    mockApp.vault.adapter.exists.mockResolvedValue(false);
    
    // Call the function with the mock
    const result = await checkFileExists(mockApp, 'nonexistent/file.md');
    
    // Verify the result and that the mock was called correctly
    expect(result).toBe(false);
    expect(mockApp.vault.adapter.exists).toHaveBeenCalledWith('nonexistent/file.md');
  });
  
  test('checkFileExists returns false when an error occurs', async () => {
    // Setup the mock to throw an error
    mockApp.vault.adapter.exists.mockRejectedValue(new Error('Test error'));
    
    // Call the function with the mock
    const result = await checkFileExists(mockApp, 'error/file.md');
    
    // Verify the result and that the mock was called correctly
    expect(result).toBe(false);
    expect(mockApp.vault.adapter.exists).toHaveBeenCalledWith('error/file.md');
  });
});
