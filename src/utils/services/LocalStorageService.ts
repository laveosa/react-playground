import { EStorageKey } from '../../consts/enums/EStorageKey.ts';

class LocalStorageService {
  static setItem<T>(key: EStorageKey, value: T): void {
    try {
      const serializeValue = JSON.stringify(value);
      localStorage.setItem(key, serializeValue);
    } catch (error) {
      console.error(`Error setting localStorage item: ${error}`);
    }
  }

  static getItem<T>(key: EStorageKey): T | null {
    try {
      const serializeValue = localStorage.getItem(key);
      return serializeValue ? (JSON.parse(serializeValue) as T) : null;
    } catch (error) {
      console.error(`Error getting localStorage item: ${error}`);
      return null;
    }
  }

  static removeItem(key: EStorageKey): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage item: ${error}`);
    }
  }

  static containsKey(key: EStorageKey): boolean {
    return localStorage.getItem(key) !== null;
  }

  static getKeys(): string[] {
    return Object.keys(localStorage);
  }

  static getLength(): number {
    return localStorage.length;
  }
}

export default LocalStorageService;
