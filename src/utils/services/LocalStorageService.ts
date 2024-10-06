import { LocalStorageKeyEnum } from "../../consts/enums/LocalStorageKeyEnum.ts";

class LocalStorageService {
  static setItem<T>(key: LocalStorageKeyEnum, value: T): void {
    try {
      const serializeValue = JSON.stringify(value);
      localStorage.setItem(key, serializeValue);
    } catch (error) {
      console.error(`Error setting localStorage item: ${error}`);
    }
  }

  static getItem<T>(key: LocalStorageKeyEnum): T | null {
    try {
      const serializeValue = localStorage.getItem(key);
      return serializeValue ? (JSON.parse(serializeValue) as T) : null;
    } catch (error) {
      console.error(`Error getting localStorage item: ${error}`);
      return null;
    }
  }

  static removeItem(key: LocalStorageKeyEnum): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage item: ${error}`);
    }
  }

  static containsKey(key: LocalStorageKeyEnum): boolean {
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
