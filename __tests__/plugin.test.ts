import { MockApp, MockPlugin } from './mocks';

describe('Plugin Tests', () => {
  let mockApp: MockApp;
  let mockPlugin: MockPlugin;

  beforeEach(() => {
    // Set up fresh mocks before each test
    mockApp = new MockApp();
    mockPlugin = new MockPlugin();
    
    // Reset all mocks
    jest.clearAllMocks();
  });

  test('plugin has expected settings', () => {
    expect(mockPlugin.settings).toBeDefined();
    expect(mockPlugin.settings.mySetting).toBe('test');
  });

  test('addRibbonIcon method is called with correct parameters', () => {
    // Call the method we want to test
    mockPlugin.addRibbonIcon('dice', 'Test Plugin', jest.fn());
    
    // Check that it was called with the correct parameters
    expect(mockPlugin.addRibbonIcon).toHaveBeenCalledWith(
      'dice', 
      'Test Plugin',
      expect.any(Function)
    );
    expect(mockPlugin.addRibbonIcon).toHaveBeenCalledTimes(1);
  });

  test('saveData method can be called and mocked', async () => {
    // Set up mock return value
    mockPlugin.saveData.mockResolvedValueOnce(true);
    
    // Call the method
    const result = await mockPlugin.saveData({});
    
    // Verify it was called and returned the expected value
    expect(mockPlugin.saveData).toHaveBeenCalledTimes(1);
    expect(result).toBe(true);
  });
});
