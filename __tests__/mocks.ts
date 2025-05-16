/**
 * This is a simple mock of the Obsidian Plugin API structure
 * It's a very simplistic mock just to show how to test code that uses Obsidian APIs
 */

interface PluginSettings {
  mySetting: string;
}

export class MockApp {
  vault = {
    getFiles: jest.fn().mockReturnValue([]),
    read: jest.fn().mockResolvedValue(''),
    adapter: {
      exists: jest.fn().mockResolvedValue(true),
      read: jest.fn().mockResolvedValue(''),
      write: jest.fn().mockResolvedValue(undefined),
    }
  };
  workspace = {
    getActiveFile: jest.fn().mockReturnValue(null),
    getActiveViewOfType: jest.fn().mockReturnValue(null),
  };
  metadataCache = {
    getFileCache: jest.fn().mockReturnValue(null),
  };
}

export class MockPlugin {
  settings: PluginSettings = {
    mySetting: 'test',
  };
  
  saveData = jest.fn().mockResolvedValue(undefined);
  loadData = jest.fn().mockResolvedValue({ mySetting: 'test' });
  
  registerEvent = jest.fn();
  addCommand = jest.fn();
  addSettingTab = jest.fn();
  addRibbonIcon = jest.fn().mockReturnValue({
    addClass: jest.fn(),
  });
  addStatusBarItem = jest.fn().mockReturnValue({
    setText: jest.fn(),
  });
}
